// AI bubble meter: the one place the score is worked out. Runs in the page and in node (build + tests).
// Rules live in rules.json, facts in items.json. Nothing here knows any fact.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.BubbleScore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const DAY = 86400000;
  const dayNumber = iso => { const [y, m, d] = String(iso).slice(0, 10).split('-').map(Number); return Math.floor(Date.UTC(y, m - 1, d) / DAY); };
  const todayIso = now => { const d = now || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

  // One item -> what it does to the needle today. Returns { move, state, word, full }.
  //   move  signed points counted today (plus = closer to a pop, minus = further)
  //   full  signed points it would carry at full weight if it scored
  //   state closer | further | watching | context | faded
  function scoreItem(item, rules, today) {
    const rule = (rules.rules || []).find(r => r.id === item.rule) || null;
    const base = rule && item.size ? (rules.points[item.size] || 0) : 0;
    const sign = rule ? (rule.dir === 'closer' ? 1 : -1) : 0;
    const full = base * sign;
    const age = dayNumber(today) - dayNumber(item.date);
    if (item.status === 'context') return { move: 0, full: 0, state: 'context', age, rule };
    if (item.status === 'watching') return { move: 0, full, state: 'watching', age, rule };
    if (age < 0) return { move: 0, full, state: 'watching', age, rule };           // a future-dated fact never scores
    let factor = 0;
    if (age <= rules.fade.full_days) factor = 1; else if (age <= rules.fade.half_days) factor = 0.5;
    if (!factor || !full) return { move: 0, full, state: 'faded', age, rule };
    return { move: full * factor, full, state: sign > 0 ? 'closer' : 'further', age, rule, half: factor < 1 };
  }

  function score(data, today) {
    const rules = data.rules, day = today || todayIso();
    const rows = (data.items || []).map(item => Object.assign({ item }, scoreItem(item, rules, day)));
    rows.sort((a, b) => (a.item.date < b.item.date ? 1 : a.item.date > b.item.date ? -1 : 0));
    let closer = 0, further = 0, week = 0;
    const count = { closer: 0, further: 0, watching: 0, context: 0, faded: 0 };
    for (const r of rows) {
      count[r.state]++;
      if (r.move > 0) closer += r.move; else if (r.move < 0) further += r.move;
      if (r.age >= 0 && r.age <= 7) week += r.move;
    }
    const raw = rules.start + closer + further;
    const needle = Math.max(rules.min, Math.min(rules.max, raw));
    const band = (rules.bands || []).find(b => needle <= b.upto) || { label: '' };
    return { day, needle, raw, closer, further, week, count, band: band.label, rows };
  }

  // Words that sell fear. Our own lines never use them (his rule, on air 2026-11-22: inform people so they can be less fearful).
  const FEAR = /\b(crash\w*|collaps\w*|panic\w*|doom\w*|meltdown\w*|bloodbath|catastroph\w*|apocalyp\w*|plung\w*|plummet\w*|tumbl\w*|implod\w*|carnage|terrif\w*|wipeout|wip(?:e|es|ed|ing) out|rout|nosediv\w*|freefall|free fall|tank(?:s|ed|ing)|slump\w*|bust)\b/i;
  // A who-gains line asks. Any sentence about what someone gains, wants or needs must be a question. Accusing words are refused outright.
  const MOTIVE = /\b(gains?|profits?|benefits?|earns?|wants?|needs?|agenda|trying to|in order to|so (it|they) can)\b/i;
  const ACCUSE = /\b(trick\w*|lie[ds]?|lying|liars?|scam\w*|fraud\w*|cover[- ]?ups?|hiding|propaganda|conned|corrupt\w*)\b/i;
  // Every number in our own lines must be found in a quote copied from the source page (same value, same unit), or be listed in
  // the item's "derived" notes (our own arithmetic, shown with its working). Returns the numbers that have no receipt.
  const UNIT = { billion: /^\s?(billion|bn|bil|b)\b/i, trillion: /^\s?(trillion|trn|tn|t)\b/i, million: /^\s?(million|mil|mn|m)\b/i, percent: /^\s?(%|percent|per cent)/i };
  const NUM = /\d[\d,]*(?:\.\d+)?/g;
  const tokens = text => { const out = []; let m; NUM.lastIndex = 0; const t = String(text || '');
    while ((m = NUM.exec(t))) { const raw = m[0].replace(/,+$/, ''), after = t.slice(m.index + raw.length); const u = after.match(/^\s(billion|trillion|million|percent)\b/i);
      out.push({ raw, value: parseFloat(raw.replace(/,/g, '')), unit: u ? u[1].toLowerCase() : null, after }); }
    return out; };
  function unbacked(item, rules) {
    const quotes = (item.quotes || []).map(q => q.quote).join(' | '), have = tokens(quotes);
    const derived = new Set(tokens((item.derived || []).join(' | ')).map(t => t.value));
    const ladder = new Set([rules.start, rules.fade.full_days, rules.fade.half_days, ...Object.values(rules.points), ...tokens((rules.sizes || []).join(' ')).map(t => t.value)]);
    const missing = [];
    for (const field of ['text', 'gains', 'use', 'why', 'rail']) for (const t of tokens(item[field])) {
      if (derived.has(t.value)) continue;
      if (field === 'why' && ladder.has(t.value)) continue;
      const ok = have.some(h => h.value === t.value && (!t.unit || UNIT[t.unit].test(h.after)));
      if (!ok) missing.push(t.raw + (t.unit ? ' ' + t.unit : '') + ' (' + field + ')');
    }
    return missing;
  }

  // Refuses anything that is not one dated, sourced fact. Returns a list of plain problems; empty = fine.
  function validate(data, today) {
    const out = [], rules = data.rules || {}, ids = new Set(), day = today || todayIso();
    if ('checked' in data && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.checked || ''))) out.push('the fact file has no checked date');
    else if (data.checked && dayNumber(data.checked) > dayNumber(day)) out.push('the checked date is in the future');
    const ruleIds = new Set((rules.rules || []).map(r => r.id));
    const isDate = s => /^\d{4}-\d{2}-\d{2}$/.test(String(s || '')) && !Number.isNaN(dayNumber(s));
    if (!Array.isArray(data.items) || !data.items.length) out.push('no items');
    for (const it of data.items || []) {
      const id = it.id || '(no id)';
      if (!it.id) out.push('an item has no id'); else if (ids.has(it.id)) out.push(id + ': id used twice'); ids.add(it.id);
      if (!isDate(it.date)) out.push(id + ': date must be YYYY-MM-DD');
      else if (dayNumber(it.date) > dayNumber(day)) out.push(id + ': date is in the future');
      if (!it.text || String(it.text).trim().length < 20) out.push(id + ': the fact text is missing');
      if (!it.why || String(it.why).trim().length < 10) out.push(id + ': the reason for the score is missing');
      if (!it.gains || String(it.gains).trim().length < 20) out.push(id + ': the who gains / why now line is missing');
      else {
        const parts = String(it.gains).trim().match(/[^.?!]+[.?!]+|[^.?!]+$/g).map(x => x.trim());     // no lookbehind: older phones cannot read it
        if (!/\?/.test(it.gains)) out.push(id + ': the who gains line must ask a question, not accuse');
        if (!/^Said by\b/.test(parts[0])) out.push(id + ': the who gains line must start by naming who says it ("Said by ...")');
        for (const part of parts) if (MOTIVE.test(part) && !/\?$/.test(part)) out.push(id + ': the who gains line states a motive ("' + part.slice(0, 40) + '"); ask it as a question');
      }
      if (!it.use || String(it.use).trim().length < 20) out.push(id + ': the what you can do with this line is missing');
      if (it.status === 'scored' && (!it.rail || String(it.rail).trim().length < 20 || String(it.rail).length > 130)) out.push(id + ': the short line for the bottom rail is missing or over 130 letters');
      const blame = [it.text, it.why, it.gains, it.use, it.rail].join(' ').match(ACCUSE);
      if (blame) out.push(id + ': accusing wording ("' + blame[0] + '"); say what is known and ask');
      const loud = [it.text, it.why, it.gains, it.use, it.rail].join(' ').match(FEAR);
      if (loud) out.push(id + ': fear wording ("' + loud[0] + '"); say what happened in plain words');
      if (!['scored', 'watching', 'context'].includes(it.status)) out.push(id + ': status must be scored, watching or context');
      if (it.status === 'context') { if (it.rule || it.size) out.push(id + ': a context item carries no rule or size'); }
      else {
        if (!ruleIds.has(it.rule)) out.push(id + ': rule is not in rules.json');
        if (!rules.points || !(it.size in rules.points)) out.push(id + ': size must be small, medium or big');
      }
      if (!Array.isArray(it.sources) || !it.sources.length) out.push(id + ': no source, so it cannot be shown');
      const names = new Set((it.sources || []).map(s => s.name));
      if (!Array.isArray(it.quotes) || !it.quotes.length) out.push(id + ': no quote copied from the source, so its numbers cannot be checked');
      else {
        for (const q of it.quotes) if (!q || !q.quote || !names.has(q.source)) out.push(id + ': a quote has no text or names a source that is not linked');
        if (rules.points && rules.fade) for (const n of unbacked(it, rules)) out.push(id + ': the number ' + n + ' is not in any source quote');
      }
      for (const s of it.sources || []) {
        if (!s.name) out.push(id + ': a source has no name');
        if (!/^https:\/\/[^\s]+\.[^\s]+/.test(String(s.url || ''))) out.push(id + ': a source has no https link');
        if (!isDate(s.date)) out.push(id + ': a source has no date');
      }
    }
    return out;
  }

  return { score, scoreItem, validate, unbacked, todayIso, dayNumber, FEAR, ACCUSE };
});

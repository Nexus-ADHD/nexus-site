// The facts and rules behind the meter. Written by the build; every number here was checked against the quote beside it.
window.BUBBLE = {
 "rules": {
  "start": 50,
  "min": 0,
  "max": 100,
  "points": {
   "small": 2,
   "medium": 4,
   "big": 6
  },
  "fade": {
   "full_days": 30,
   "half_days": 60
  },
  "one_line": "A scoreboard with receipts. Not a forecast, not advice.",
  "reminder": "KNOWLEDGE IS POWER",
  "reminder_sub": "HERE TO INFORM, NOT TO SCARE",
  "how_to_read": "The needle starts at 50. Every fact below is dated, sourced and written in our own words. Each scored fact moves the needle 2, 4 or 6 points, half after 30 days and none after 60, and a fact that points away from a pop counts exactly as much as one that points toward it. Reports with no named source wait at zero. Price moves, up or down, are listed, dated and sourced, at zero points. Each fact also asks who is saying it, who gains, and what you can do with it. The board under the needle follows the debt under the build-out, the way the funds that saw 2008 coming followed the loans.",
  "sizes": [
   "Money facts are sized on the change the fact reports (the amount cut, raised, borrowed, invested or gained), not on a running total: small is under 10 billion dollars, medium is 10 to 100 billion, big is over 100 billion. No dollar figure in the source means small.",
   "Price reactions (falls on good news, holds on bad news, new shares above their asking price): small is under 5 percent, medium is 5 to 15 percent, big is over 15 percent.",
   "Missed payments and debt paid down use the money ladder, on the debt involved.",
   "Ratings: a change of outlook is small, a change of rating is medium, a move across the line between investment grade and below it is big.",
   "Insider sales and purchases are always small.",
   "The same ladder is used in both directions."
  ],
  "guards": [
   "Every item is one dated fact with a link to a named source, written in our own words, never an outlet's headline as given. No link, no item.",
   "Every item says who is saying it, then asks who gains and why now. It asks; it never states a motive and never accuses. It ends with one plain thing a viewer can do with it.",
   "Every number on screen must appear in a quote copied from the source page, kept in the fact file. The build refuses a number it cannot find there.",
   "Only reported results score. A forecast is not a fact yet.",
   "Every rule has a mirror, and a fact counts the same number of points in either direction.",
   "A report that rests only on unnamed sources is WATCHING: on the feed, zero points, until the company confirms or files it.",
   "Prices moving by themselves do not score. That covers share prices and what lenders charge to lend to or insure a borrower. They show as CONTEXT with zero points, on the drops board and the lender row. The meter scores causes, not the mood.",
   "One fact scores once, under one rule. Every scored fact names its event, and two scored facts naming the same event are refused. Bond sales reported as one wave in the same week are one event.",
   "The 2008 rows show what the funds that saw that crisis coming were watching. That is history, not a prediction, and not advice.",
   "An item counts in full for 30 days, half from day 31 to day 60, then FADED: still listed, zero points.",
   "The needle starts at 50 and stays between 0 and 100.",
   "The arrows on the board count every dated item on a row, scored or not. The points count only scored facts.",
   "The 30-day figures are worked out today from the facts' own dates. They are not a record of what this page showed on that day."
  ],
  "bands": [
   {
    "upto": 30,
    "label": "FURTHER FROM A POP"
   },
   {
    "upto": 45,
    "label": "LEANING FURTHER"
   },
   {
    "upto": 55,
    "label": "BALANCED"
   },
   {
    "upto": 70,
    "label": "LEANING CLOSER"
   },
   {
    "upto": 100,
    "label": "CLOSER TO A POP"
   }
  ],
  "board_line": "THE DEBT UNDER THE BUILD-OUT. NOT A FORECAST.",
  "drops_line": "SHARE PRICES ARE CONTEXT: 0 POINTS, UP OR DOWN. NOT ADVICE.",
  "signals": [
   {
    "id": "papers",
    "label": "WHO LENDS, ON WHAT TERMS",
    "lesson": "BURRY: LOAN PAPERS",
    "plain": "Bonds, private loans and ventures kept off a company's own books: who is lending to the build-out, how much, and at what rate.",
    "rules": [
     "debt",
     "cash"
    ]
   },
   {
    "id": "paying",
    "label": "ARE BORROWERS PAYING",
    "lesson": "PAULSON: PAYMENTS",
    "plain": "Missed payments, defaults and broken loan terms on one side; debt repaid early on the other.",
    "rules": [
     "missed",
     "repaid"
    ]
   },
   {
    "id": "insure",
    "label": "COST TO INSURE THE DEBT",
    "lesson": "MOVED FIRST IN 2007",
    "plain": "What lenders charge to lend to, or to insure the debt of, a big AI borrower. It is a price, so every reading here is at zero points.",
    "rules": []
   },
   {
    "id": "ratings",
    "label": "RATINGS",
    "lesson": "MOVED IN JULY 2007",
    "plain": "Rating agency cuts and raises on AI borrowers.",
    "rules": [
     "downgrade",
     "upgrade"
    ]
   },
   {
    "id": "vendor",
    "label": "SUPPLIER FUNDS ITS BUYER",
    "lesson": "WHO HOLDS THE RISK",
    "plain": "A supplier invests in or lends to its own customer, so the money comes back as sales.",
    "rules": [
     "circular"
    ]
   },
   {
    "id": "insiders",
    "label": "WHAT INSIDERS DO",
    "lesson": "NOT A 2008 SIGNAL",
    "plain": "Open-market sales and purchases by the people who run the companies. Not something the 2008 funds relied on: a later study found mortgage insiders did not see the trouble coming.",
    "rules": [
     "insell",
     "inbuy"
    ]
   }
  ],
  "rules": [
   {
    "id": "cut",
    "pair": 1,
    "dir": "closer",
    "label": "SPENDING CUT OR DELAYED",
    "plain": "A lab or cloud company cuts, cancels or delays an AI spending commitment.",
    "mirror": false
   },
   {
    "id": "kept",
    "pair": 1,
    "dir": "further",
    "label": "SPENDING RAISED",
    "plain": "A lab or cloud company raises its AI spending plan, in its own name. A plan left unchanged scores zero.",
    "mirror": true
   },
   {
    "id": "chips",
    "pair": 2,
    "dir": "closer",
    "label": "CHIP ORDERS CANCELLED",
    "plain": "Chip orders or sales are cancelled or fall, confirmed by the buyer or the maker. Sized on the fall.",
    "mirror": false
   },
   {
    "id": "orders",
    "pair": 2,
    "dir": "further",
    "label": "CHIP SALES GROW",
    "plain": "Chip orders or sales grow, reported by the maker or the buyer in its own name. Sized on the rise. A forecast does not count.",
    "mirror": true
   },
   {
    "id": "goodnews",
    "pair": 3,
    "dir": "closer",
    "label": "FALLS ON GOOD NEWS",
    "plain": "An AI stock falls right after reporting good results.",
    "mirror": false
   },
   {
    "id": "badnews",
    "pair": 3,
    "dir": "further",
    "label": "HOLDS ON BAD NEWS",
    "plain": "An AI stock holds or rises right after reporting bad results.",
    "mirror": true
   },
   {
    "id": "debt",
    "pair": 4,
    "dir": "closer",
    "label": "BUILT ON DEBT",
    "plain": "Data centers or AI spending paid for with borrowed money.",
    "mirror": false
   },
   {
    "id": "cash",
    "pair": 4,
    "dir": "further",
    "label": "PAID FROM CASH",
    "plain": "Data centers or AI spending paid for from the company's own sales, stated in its accounts.",
    "mirror": true
   },
   {
    "id": "circular",
    "pair": 5,
    "dir": "closer",
    "label": "CIRCULAR MONEY",
    "plain": "The investor is also the supplier: money goes in as investment and comes back as sales. A supplier that lends to its customer, or stands behind the customer's debts, counts here too.",
    "mirror": false
   },
   {
    "id": "demand",
    "pair": 5,
    "dir": "further",
    "label": "OPEN MARKET PAYS MORE",
    "plain": "New AI shares trade above their asking price on the open market and are still above it after a full week.",
    "mirror": true
   },
   {
    "id": "miss",
    "pair": 6,
    "dir": "closer",
    "label": "SALES FALL",
    "plain": "Sales from people and businesses paying to use AI fall from a year earlier, as reported by the company. Sized on the fall.",
    "mirror": true
   },
   {
    "id": "revenue",
    "pair": 6,
    "dir": "further",
    "label": "PAYING CUSTOMERS",
    "plain": "Sales from people and businesses paying to use AI rise from a year earlier, as reported by the company. Sized on the rise. Chip sales to the labs are scored under chip sales, not here.",
    "mirror": false
   },
   {
    "id": "missed",
    "pair": 7,
    "dir": "closer",
    "label": "A PAYMENT MISSED",
    "plain": "A borrower in the AI build-out misses a payment, defaults, files for bankruptcy or breaks a loan term, confirmed by the company, a filing, a court or a rating agency. Relief granted by its lenders counts here once, as small. Sized on the debt involved. A rating cut that follows is the same event and is listed at zero.",
    "mirror": false,
    "origin": "playbook"
   },
   {
    "id": "repaid",
    "pair": 7,
    "dir": "further",
    "label": "DEBT PAID DOWN",
    "plain": "A borrower in the AI build-out repays debt ahead of schedule from its own cash, or makes good a missed payment, stated in its own name or its filings. A payment made on schedule is listed at zero. Sized on the debt involved.",
    "mirror": false,
    "origin": "playbook"
   },
   {
    "id": "downgrade",
    "pair": 8,
    "dir": "closer",
    "label": "RATING OR OUTLOOK CUT",
    "plain": "Moody's, S&P or Fitch cuts the rating or the outlook on an AI borrower's debt. A rating cut and the price move that follows it are one event and score once.",
    "mirror": false,
    "origin": "playbook"
   },
   {
    "id": "upgrade",
    "pair": 8,
    "dir": "further",
    "label": "RATING OR OUTLOOK RAISED",
    "plain": "Moody's, S&P or Fitch raises the rating or the outlook on an AI borrower's debt.",
    "mirror": false,
    "origin": "playbook"
   },
   {
    "id": "insell",
    "pair": 9,
    "dir": "closer",
    "label": "INSIDERS SELL",
    "plain": "Executives or directors of an AI company sell their own shares on the open market, shown in their own filings. Always small. A sale under a plan set in advance is routine and stays at zero.",
    "mirror": false,
    "origin": "playbook"
   },
   {
    "id": "inbuy",
    "pair": 9,
    "dir": "further",
    "label": "INSIDERS BUY",
    "plain": "Executives or directors of an AI company buy its shares on the open market with their own money, shown in their own filings. Always small.",
    "mirror": false,
    "origin": "playbook"
   }
  ]
 },
 "checked": "2026-11-23",
 "swept": "2026-11-23",
 "items": [
  {
   "id": "nvda-huang-back",
   "date": "2026-11-23",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia's board reinstated Jensen Huang as president and chief executive on Monday by a unanimous vote, and said its committee's investigation will run to its conclusion. NBC reported that major U.S. stock indexes rose sharply on Monday on his return.",
   "why": "Context, zero points. A change at the top is not one of the scoring rules, and the price move that followed is a price. A bounce counts the same as a fall: nothing. The day's closing numbers are added at the next refresh.",
   "gains": "Said by Nvidia's board in its own release, with the price move from NBC News. The release says the vote was unanimous and the investigation continues. What changed since he resigned, and who gains from a fast return?",
   "use": "Treat a bounce the way you treat a fall. The investigation is still open, so wait for what it finds.",
   "sources": [
    {
     "name": "Nvidia",
     "date": "2026-11-23",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    },
    {
     "name": "NBC News",
     "date": "2026-11-23",
     "url": "https://www.nbcnews.com/business/markets/stocks-rebound-ai-tech-selloff-nvidia-rcna610833"
    }
   ],
   "quotes": [
    {
     "source": "Nvidia",
     "quote": "today announced that effective immediately, Jensen Huang has been reinstated as President and Chief Executive Officer and as a member of the Board.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    },
    {
     "source": "Nvidia",
     "quote": "The Board of Directors voted unanimously to reinstate Mr. Huang",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    },
    {
     "source": "Nvidia",
     "quote": "investigation will proceed to conclusion.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director",
     "about": "the board committee's investigation"
    },
    {
     "source": "NBC News",
     "quote": "Major U.S. stock indexes soared Monday, as Wall Street cheered Jensen Huang's return to Nvidia",
     "url": "https://www.nbcnews.com/business/markets/stocks-rebound-ai-tech-selloff-nvidia-rcna610833"
    }
   ],
   "kind": "bounce",
   "short": "US stock indexes rose as Nvidia's chief was reinstated"
  },
  {
   "id": "nvda-nov20-fall",
   "date": "2026-11-20",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia fell 14 percent on Friday, three days after reporting doubled sales. The S&P 500 fell 3.7 percent and the Nasdaq composite 5.3 percent, and the Nasdaq 100 fell 5.6 percent, briefly more than 20 percent below its recent high. The Dow and the S&P 500 both closed more than 10 percent below their highs.",
   "why": "Context, zero points. Reuters is reported to say the SEC is looking at Nvidia's accounting. That is a report, not a finding, so this is not a clean fall on good news. Prices alone do not score.",
   "gains": "Said by wire services and market reporters. The accounting review is a report, not a finding. Who gains from a big one-day number, and what changed in the business itself that day?",
   "use": "A one-day price is not a verdict. Read the facts around this one before reacting to it.",
   "sources": [
    {
     "name": "UPI",
     "date": "2026-11-20",
     "url": "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/"
    },
    {
     "name": "CNBC TV18",
     "date": "2026-11-21",
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/"
    },
    {
     "name": "The Decoder",
     "date": "2026-11-21",
     "url": "https://the-decoder.com/us-technology-stocks-suffer-their-worst-weekly-loss-since-the-pandemic-as-ai-doubts-pile-up/"
    },
    {
     "name": "StockAnalysis",
     "date": "2026-11-17",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    },
    {
     "name": "AP (La Nacion)",
     "date": "2026-11-21",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-11202026-nid20112026/"
    }
   ],
   "quotes": [
    {
     "source": "UPI",
     "quote": "Nvidia falling 14%.",
     "url": "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/"
    },
    {
     "source": "CNBC TV18",
     "quote": "Nvidia shares fell 14% on Friday.",
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/"
    },
    {
     "source": "UPI",
     "quote": "Both the Dow and S&P 500 closed more than 10% below their recent highs.",
     "url": "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/"
    },
    {
     "source": "UPI",
     "quote": "Nasdaq-100 briefly entered bear market territory after falling more than 20% from its recent high.",
     "url": "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/"
    },
    {
     "source": "CNBC TV18",
     "quote": "The Nasdaq 100 fell 5.6% on Friday, capping its worst week since March 2020.",
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/"
    },
    {
     "source": "CNBC TV18",
     "quote": "Reuters reported that the US Securities & Exchanges Commission is exploring possible accounting issues at the company.",
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/",
     "about": "Nvidia"
    },
    {
     "source": "StockAnalysis",
     "quote": "Revenue grew 103% from a year earlier to $115.8B in the fiscal third quarter, which ended October 25.",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/",
     "about": "Nvidia's results, reported November 17"
    },
    {
     "source": "AP (La Nacion)",
     "quote": "The S&P 500 fell 265.44 points, or 3.7%, to 6,910.39.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-11202026-nid20112026/"
    },
    {
     "source": "AP (La Nacion)",
     "quote": "The Nasdaq composite fell 1,261.47 points, or 5.3%, to 22,617.73.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-11202026-nid20112026/"
    }
   ],
   "kind": "drop",
   "short": "S&P 500 fell 3.7 percent, Nasdaq 5.3, Nvidia 14 percent"
  },
  {
   "id": "ant-listing-two-days",
   "date": "2026-11-20",
   "status": "watching",
   "rule": "demand",
   "size": "medium",
   "text": "Anthropic sold its shares at 83 dollars, opened at 111.50 on Nasdaq and closed its first day at 97.17. On its second day it fell 8.5 percent to 88.91, which is 7 percent above the 83 dollar asking price.",
   "why": "Watching, zero points. The rule needs a full week of trading above the asking price, and this is two days, the second one down.",
   "gains": "Said by the exchange's own prices. Who gains from a strong first day: the company, its banks, its early holders? Does a strong first day show lasting demand?",
   "use": "Note the asking price, 83 dollars. Where the price sits after a full week tells you more than day one.",
   "sources": [
    {
     "name": "NPR",
     "date": "2026-11-19",
     "url": "https://www.stlpr.org/npr/2026-11-19/investors-scramble-for-a-piece-of-ai-giant-anthropic-in-blockbuster-ipo"
    },
    {
     "name": "CNBC TV18",
     "date": "2026-11-21",
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/"
    },
    {
     "name": "UPI",
     "date": "2026-11-20",
     "url": "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/"
    }
   ],
   "quotes": [
    {
     "source": "NPR",
     "quote": "at an IPO price of $83 per share.",
     "url": "https://www.stlpr.org/npr/2026-11-19/investors-scramble-for-a-piece-of-ai-giant-anthropic-in-blockbuster-ipo"
    },
    {
     "source": "NPR",
     "quote": "opened trading on the Nasdaq under the ticker symbol ANT at $111.50.",
     "url": "https://www.stlpr.org/npr/2026-11-19/investors-scramble-for-a-piece-of-ai-giant-anthropic-in-blockbuster-ipo"
    },
    {
     "source": "NPR",
     "quote": "They eased over the trading day to end 17% higher at $97.17.",
     "url": "https://www.stlpr.org/npr/2026-11-19/investors-scramble-for-a-piece-of-ai-giant-anthropic-in-blockbuster-ipo",
     "about": "Anthropic's shares on day one"
    },
    {
     "source": "CNBC TV18",
     "quote": "knocked off another 8.5% on Friday... closing at $88.91.",
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/",
     "about": "Anthropic's shares"
    },
    {
     "source": "UPI",
     "quote": "Anthropic shares fell 8.5% Friday.",
     "url": "https://www.upi.com/Top_News/US/2026/11/20/stocks-dow-jones-nasdaq-correction-territory/1061795214998/"
    }
   ],
   "derived": [
    "7 percent above the asking price: 88.91 divided by 83 is 1.071"
   ]
  },
  {
   "id": "slide-since-oct6",
   "date": "2026-11-20",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "By Friday's close the S&P 500 was 10.7 percent below its record close of October 6, and Nvidia was 48 percent below its own record. That Sunday the President put the fall 100 percent on the Democrats. The same day his Treasury Secretary called it a combination of things and added the Federal Reserve.",
   "why": "Context, zero points. A price fall and the causes two officials gave for it. Prices alone do not score, and a stated cause is a claim until a dated fact backs it.",
   "gains": "Said by the President on Truth Social and by Treasury Secretary Scott Bessent on CBS. Both pointed at the other party, and the Treasury Secretary added the central bank. AP's market reporters wrote that AI shares had been shaky for months. Which of these stories can be checked against a date, and who gains from each one?",
   "use": "Check a stated cause against the calendar. By early November Reuters had already counted five Nasdaq falls of more than 500 points since the middle of October.",
   "sources": [
    {
     "name": "Yahoo Finance",
     "date": "2026-11-20",
     "url": "https://finance.yahoo.com/markets/live/stock-market-today-friday-november-19-dow-sp-500-nasdaq-anthropic-nvidia-141644188.html"
    },
    {
     "name": "24/7 Wall St.",
     "date": "2026-11-21",
     "url": "https://247wallst.com/investing/2026/11/21/nvidia-stock-has-crashed-48-and-now-trades-at-15-times-earnings-its-cheapest-in-more-than-a-decade-and-cheaper-than-microsoft-and-broadcom/"
    },
    {
     "name": "HuffPost (Yahoo News)",
     "date": "2026-11-22",
     "url": "https://www.yahoo.com/news/politics/articles/trump-points-finger-dems-stock-202605438.html"
    },
    {
     "name": "CBS News",
     "date": "2026-11-22",
     "url": "https://www.cbsnews.com/news/transcript-treasury-secretary-scott-bessent-face-the-nation-with-margaret-brennan-nov-22-2026/"
    },
    {
     "name": "AP (WCAX)",
     "date": "2026-11-17",
     "url": "https://www.wcax.com/2026/11/17/another-wipeout-hits-wall-street-nvidia-other-jittery-ai-stocks-swing-lower/?outputType=amp"
    },
    {
     "name": "Reuters (The Express Tribune)",
     "date": "2026-11-06",
     "url": "https://tribune.com.pk/story/2639009/investors-wipe-25t-off-nasdaq-as-blue-tsunami-prompts-ai-fears"
    }
   ],
   "quotes": [
    {
     "source": "Yahoo Finance",
     "quote": "The S&P 500 has fallen 10.7% from its all-time closing high of 7,818.93 on Oct. 6",
     "url": "https://finance.yahoo.com/markets/live/stock-market-today-friday-november-19-dow-sp-500-nasdaq-anthropic-nvidia-141644188.html"
    },
    {
     "source": "24/7 Wall St.",
     "quote": "Nvidia closed at $125.53 on Friday, 48% below its Oct. 6 record.",
     "url": "https://247wallst.com/investing/2026/11/21/nvidia-stock-has-crashed-48-and-now-trades-at-15-times-earnings-its-cheapest-in-more-than-a-decade-and-cheaper-than-microsoft-and-broadcom/"
    },
    {
     "source": "HuffPost (Yahoo News)",
     "quote": "The Market is down more than 6 Trillion Dollars since the Democrats' rather strange 'win' on November 3rd,",
     "url": "https://www.yahoo.com/news/politics/articles/trump-points-finger-dems-stock-202605438.html",
     "about": "the President's post on Truth Social"
    },
    {
     "source": "HuffPost (Yahoo News)",
     "quote": "This is 100% due to the fact that the Democrats are",
     "url": "https://www.yahoo.com/news/politics/articles/trump-points-finger-dems-stock-202605438.html",
     "about": "the President's post on Truth Social"
    },
    {
     "source": "CBS News",
     "quote": "Well, I think it's a combination of things.",
     "url": "https://www.cbsnews.com/news/transcript-treasury-secretary-scott-bessent-face-the-nation-with-margaret-brennan-nov-22-2026/",
     "about": "Treasury Secretary Scott Bessent, asked what happened in the markets"
    },
    {
     "source": "CBS News",
     "quote": "we could see that the market sell-off actually began as the Democrats moved ahead in the polls",
     "url": "https://www.cbsnews.com/news/transcript-treasury-secretary-scott-bessent-face-the-nation-with-margaret-brennan-nov-22-2026/",
     "about": "Treasury Secretary Scott Bessent"
    },
    {
     "source": "CBS News",
     "quote": "We've also seen some very hawkish remarks from the Federal Reserve.",
     "url": "https://www.cbsnews.com/news/transcript-treasury-secretary-scott-bessent-face-the-nation-with-margaret-brennan-nov-22-2026/",
     "about": "Treasury Secretary Scott Bessent"
    },
    {
     "source": "AP (WCAX)",
     "quote": "AI-related stocks have been shaky for months because of a rolling chain of worries.",
     "url": "https://www.wcax.com/2026/11/17/another-wipeout-hits-wall-street-nvidia-other-jittery-ai-stocks-swing-lower/?outputType=amp"
    },
    {
     "source": "Reuters (The Express Tribune)",
     "quote": "the fifth decline of more than 500 points in the Nasdaq Composite since mid-October",
     "url": "https://tribune.com.pk/story/2639009/investors-wipe-25t-off-nasdaq-as-blue-tsunami-prompts-ai-fears",
     "about": "November 5"
    }
   ],
   "date_label": "Oct 6 to Nov 20",
   "kind": "drop",
   "short": "S&P 500 off 10.7 percent since Oct 6; Nvidia off 48 percent"
  },
  {
   "id": "nand-price-fall-forecast",
   "date": "2026-11-19",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "An electronics trade site reports that contract prices for flash memory are expected to start falling in the first quarter of 2027, as Chinese cloud providers cut their orders by more than US providers are adding.",
   "why": "Context, zero points. It is a forecast, not a result reported by a chip maker or a buyer.",
   "gains": "Said by Evertiq, an electronics trade site. Who gains when a price turn is called early, and what will the makers' own results show?",
   "use": "Wait for a maker or a buyer to report a cut in its own results before treating it as one.",
   "sources": [
    {
     "name": "Evertiq",
     "date": "2026-11-19",
     "url": "https://evertiq.com/news/2026-11-19-nand-flash-prices-set-to-fall-in-2027-as-chinese-cloud-firms-cut-orders"
    }
   ],
   "quotes": [
    {
     "source": "Evertiq",
     "quote": "Contract prices are expected to start falling in the first quarter of 2027, as Chinese cloud providers cut their SSD orders by more than US providers are adding.",
     "url": "https://evertiq.com/news/2026-11-19-nand-flash-prices-set-to-fall-in-2027-as-chinese-cloud-firms-cut-orders"
    }
   ],
   "date_label": "Nov 19"
  },
  {
   "id": "nvda-after-results",
   "date": "2026-11-18",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia rose 3.6 percent after hours on results that beat expectations, then closed the next day down 2.9 percent.",
   "why": "Context, zero points. The report of the fall says one session cannot separate the results from the company's other troubles and the wider market, so this is not a clean fall on good news. Prices alone do not score.",
   "gains": "Said by Nvidia's own results and by Magica, a small markets site. Who gains when good news stops lifting a price? Why were sales that doubled not enough?",
   "use": "When good news stops moving a price, watch the next question investors ask: who is paying for all these chips?",
   "sources": [
    {
     "name": "Magica",
     "date": "2026-11-19",
     "url": "https://magica.com/news/nvidia-shares-fall-first-earnings-after-huang-exit"
    },
    {
     "name": "StockAnalysis",
     "date": "2026-11-17",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    }
   ],
   "quotes": [
    {
     "source": "Magica",
     "quote": "Nvidia shares fell 2.9% on Wednesday despite quarterly results and revenue guidance above analyst expectations.",
     "url": "https://magica.com/news/nvidia-shares-fall-first-earnings-after-huang-exit"
    },
    {
     "source": "Magica",
     "quote": "One session cannot isolate the contribution of Nvidia's leadership troubles",
     "url": "https://magica.com/news/nvidia-shares-fall-first-earnings-after-huang-exit"
    },
    {
     "source": "StockAnalysis",
     "quote": "Nvidia shares rose 3.6% after hours, as of 4:31 p.m. ET, after closing 0.4% lower.",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    },
    {
     "source": "StockAnalysis",
     "quote": "Revenue grew 103% from a year earlier to $115.8B in the fiscal third quarter, which ended October 25.",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    }
   ]
  },
  {
   "id": "cloud-borrowing-2026",
   "date": "2026-11-18",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Five of the biggest cloud companies had issued about 277 billion dollars of debt this year by November 11, against about 108 billion in all of 2025.",
   "why": "Context, zero points. A running total for the year is not one event. The dated bond sales are scored on the day they happened.",
   "gains": "Said by Fitch, a firm that rates this kind of debt. Who earns when companies borrow this much, and who carries the risk?",
   "use": "Read a yearly total as scale, not as news. Ask how much of the building is paid from sales and how much is borrowed.",
   "sources": [
    {
     "name": "Fitch (TNGlobal)",
     "date": "2026-11-18",
     "url": "https://technode.global/2026/11/18/surging-ai-borrowing-to-raise-corporate-bond-market-volatility-in-2027-says-fitch/"
    }
   ],
   "quotes": [
    {
     "source": "Fitch (TNGlobal)",
     "quote": "about $108 billion in 2025 and approximately $277 billion in 2026 as at Nov 11.",
     "url": "https://technode.global/2026/11/18/surging-ai-borrowing-to-raise-corporate-bond-market-volatility-in-2027-says-fitch/",
     "about": "debt issued by Amazon, Alphabet, Meta, Oracle and Microsoft"
    }
   ],
   "date_label": "As of Nov 11",
   "short": "Five cloud firms issued about 277 billion of debt this year",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "moodys-nvda-outlook",
   "date": "2026-11-18",
   "status": "scored",
   "rule": "downgrade",
   "size": "small",
   "text": "Moody's lowered its outlook on Nvidia's debt to stable from positive and called the chief executive's resignation a negative for the company's credit. It kept the rating itself.",
   "why": "A rating firm lowering its outlook on an AI borrower. An outlook change is small. The rating was kept, and the source notes the cost of insuring the debt had already climbed before Moody's moved.",
   "gains": "Said by Moody's, a credit rating firm. The source notes the cost of insuring the debt had already climbed before Moody's moved. Is this an early warning or a late one, and who gains from a rating that moves slowly?",
   "use": "An outlook is a rating firm's hint about its next move. This one was set before Nvidia's board brought its chief back, so watch whether Moody's revisits it.",
   "sources": [
    {
     "name": "InvestingLive",
     "date": "2026-11-18",
     "url": "https://investinglive.com/stocks/moody-s-cuts-nvidia-outlook-to-stable-saying-huang-s-exit-clouds-strategy-and-policy/"
    },
    {
     "name": "Newsquawk",
     "date": "2026-11-18",
     "url": "https://www.newsquawk.com/headlines/moodys-cuts-nvidia-nvda-outlook-to-stable-affirms-aa1-rating"
    },
    {
     "name": "Nvidia",
     "date": "2026-11-23",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    }
   ],
   "quotes": [
    {
     "source": "InvestingLive",
     "quote": "Moody's lowered Nvidia's outlook to stable from positive, calling Jensen Huang's resignation credit negative",
     "url": "https://investinglive.com/stocks/moody-s-cuts-nvidia-outlook-to-stable-saying-huang-s-exit-clouds-strategy-and-policy/"
    },
    {
     "source": "InvestingLive",
     "quote": "protection costs had already climbed as the leadership crisis unfolded",
     "url": "https://investinglive.com/stocks/moody-s-cuts-nvidia-outlook-to-stable-saying-huang-s-exit-clouds-strategy-and-policy/",
     "about": "the cost of insuring Nvidia's debt"
    },
    {
     "source": "Newsquawk",
     "quote": "Moody's cuts Nvidia (NVDA) outlook to stable, affirms Aa1 rating",
     "url": "https://www.newsquawk.com/headlines/moodys-cuts-nvidia-nvda-outlook-to-stable-affirms-aa1-rating"
    },
    {
     "source": "Nvidia",
     "quote": "today announced that effective immediately, Jensen Huang has been reinstated as President and Chief Executive Officer",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director",
     "about": "Nvidia's board, five days after Moody's acted"
    }
   ],
   "rail": "Moody's lowered its outlook on Nvidia's debt to stable from positive",
   "event": "nvda-outlook-moodys-2026-11"
  },
  {
   "id": "ant-pricing-release-nov18",
   "date": "2026-11-18",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Anthropic's own release says it priced its first public share sale at 83 dollars a share, and that it receives none of the money from shares sold by existing holders.",
   "why": "Context, zero points. This is the listing terms in the company's own name. The price move after listing is already on the meter under the first-two-days fact.",
   "gains": "Said by Anthropic, in a company release. Who gains when a sale is told through its price, and how much of the money goes to the company versus to earlier holders?",
   "use": "For any listing, ask how much of the sale is new money for the company and how much is existing holders selling.",
   "sources": [
    {
     "name": "Anthropic",
     "date": "2026-11-18",
     "url": "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
    }
   ],
   "quotes": [
    {
     "source": "Anthropic",
     "quote": "Anthropic, PBC priced its initial public offering of its Class A common stock at $83.00 per share.",
     "url": "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
    },
    {
     "source": "Anthropic",
     "quote": "Anthropic will not receive any proceeds from the sale of shares by the selling stockholders.",
     "url": "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
    }
   ],
   "date_label": "Nov 18"
  },
  {
   "id": "ant-circular-money",
   "date": "2026-11-17",
   "status": "scored",
   "rule": "circular",
   "size": "medium",
   "text": "After the listing Amazon's stake comes to 14.7 percent of Anthropic and Google's to 13.7 percent, in non-voting shares, and both are among its biggest suppliers. Chip and cloud suppliers also committed 26 billion dollars to its stock at the listing price. Anthropic has committed about 900 billion dollars, mostly for computing.",
   "why": "The investors are also the suppliers. The dated deal is the 26 billion dollar stock purchase, and 10 to 100 billion is medium. The 900 billion is a running commitment, shown for scale, and does not set the size. The stakes and the purchase overlap, so together they score once.",
   "gains": "Said by Anthropic's own filing, reported by TechCrunch. Who gains twice when the owner is also the one being paid? If the customer cannot pay, who covers the bill?",
   "use": "Follow the circle. When the investor is also the seller, sales alone do not prove outside demand.",
   "sources": [
    {
     "name": "TechCrunch, Nov 17",
     "date": "2026-11-17",
     "url": "https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/"
    },
    {
     "name": "TechCrunch, Nov 19",
     "date": "2026-11-19",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    }
   ],
   "quotes": [
    {
     "source": "TechCrunch, Nov 17",
     "quote": "Amazon's total stake will come in at just shy of 15% (14.7% to be exact).",
     "url": "https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/"
    },
    {
     "source": "TechCrunch, Nov 17",
     "quote": "Google, meanwhile, will own just under 14% (13.7%), also in non-voting shares.",
     "url": "https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/"
    },
    {
     "source": "TechCrunch, Nov 19",
     "quote": "Nvidia, AMD, Microsoft, Broadcom, Micron, and TSMC have joined Google in committing $26 billion to Anthropic",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    },
    {
     "source": "TechCrunch, Nov 19",
     "quote": "$26 billion to Anthropic at its IPO price in a private placement.",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    },
    {
     "source": "TechCrunch, Nov 19",
     "quote": "Anthropic has already committed to spend $900 billion, primarily for compute and infrastructure, according to a regulatory filing.",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    },
    {
     "source": "TechCrunch, Nov 19",
     "quote": "These companies are not just investors; they're also Anthropic's biggest suppliers.",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    }
   ],
   "rail": "Amazon (14.7 percent) and Google (13.7 percent) part-own Anthropic and are among its biggest suppliers",
   "event": "anthropic-listing-stakes-2026-11"
  },
  {
   "id": "nvda-sales-doubled",
   "date": "2026-11-17",
   "status": "scored",
   "rule": "orders",
   "size": "medium",
   "text": "Nvidia reported 115.8 billion dollars of sales for the three months to October 25, up 103 percent in a year. That is about 58.8 billion more than the same months a year earlier.",
   "why": "The chip maker's own reported sales rose by about 58.8 billion: 10 to 100 billion is medium. The mirror of cancelled orders. Its forecast of about 130 billion for next quarter is not scored: a forecast is not a fact yet.",
   "gains": "Said by Nvidia's own results, its first since its chief executive resigned. Who needs this report to read strong? Who is buying these chips, and with whose money?",
   "use": "Sales are a result. The forecast is a promise. Check the result against what the buyers say they will spend, and how they are paying.",
   "sources": [
    {
     "name": "StockAnalysis",
     "date": "2026-11-17",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    },
    {
     "name": "SiliconANGLE",
     "date": "2026-11-17",
     "url": "https://siliconangle.com/?p=854715"
    },
    {
     "name": "Magica",
     "date": "2026-11-19",
     "url": "https://magica.com/news/nvidia-shares-fall-first-earnings-after-huang-exit"
    }
   ],
   "quotes": [
    {
     "source": "StockAnalysis",
     "quote": "Revenue grew 103% from a year earlier to $115.8B in the fiscal third quarter, which ended October 25.",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    },
    {
     "source": "StockAnalysis",
     "quote": "Revenue of $130B, plus or minus 3%, with no data center compute revenue from China assumed.",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    },
    {
     "source": "SiliconANGLE",
     "quote": "Business as usual for Nvidia as it beats expectations in first earnings call after Huang's resignation",
     "url": "https://siliconangle.com/?p=854715"
    },
    {
     "source": "Magica",
     "quote": "$57.0 billion",
     "url": "https://magica.com/news/nvidia-shares-fall-first-earnings-after-huang-exit",
     "about": "Nvidia's sales in the same three months a year earlier, from the article's table"
    }
   ],
   "rail": "Nvidia reported 115.8 billion dollars of sales in three months, up 103 percent in a year",
   "derived": [
    "58.8 billion more: 115.8 minus 57.0"
   ],
   "event": "nvda-q3-sales-2026-11"
  },
  {
   "id": "nvda-guarantees",
   "date": "2026-11-17",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia disclosed up to 118 billion dollars of guarantees tied to AI data center projects. The source says the exposure on leases OpenAI pays will reach a maximum of 105 billion dollars. Nvidia said it had made no guarantee payments as of October 25.",
   "why": "Context, zero points. The source gives a ceiling, not the change since the last report, and no payment has been made. Totals do not score. It is read on the supplier row, leaning closer.",
   "gains": "Said by Nvidia with its own results, reported by a data center trade paper. The guarantees help customers secure the sites where Nvidia's systems go. Who carries the bill if a customer cannot pay?",
   "use": "A guarantee does not show up as debt until it is called. Look for the word guarantee in a company's filings, not only the word debt.",
   "sources": [
    {
     "name": "Data Center Knowledge",
     "date": "2026-11-18",
     "url": "https://www.datacenterknowledge.com/data-center-chips/nvidia-ai-surge-comes-with-118-billion-in-guarantees"
    }
   ],
   "quotes": [
    {
     "source": "Data Center Knowledge",
     "quote": "disclosed up to $118 billion in financial guarantees tied to AI infrastructure projects.",
     "url": "https://www.datacenterknowledge.com/data-center-chips/nvidia-ai-surge-comes-with-118-billion-in-guarantees"
    },
    {
     "source": "Data Center Knowledge",
     "quote": "The guarantees put Nvidia on the hook for financing arrangements designed to help customers secure the land, power, and facilities needed to deploy its systems.",
     "url": "https://www.datacenterknowledge.com/data-center-chips/nvidia-ai-surge-comes-with-118-billion-in-guarantees"
    },
    {
     "source": "Data Center Knowledge",
     "quote": "Exposure will reach a maximum of $105 billion and then decline over the lease terms as OpenAI makes payments.",
     "url": "https://www.datacenterknowledge.com/data-center-chips/nvidia-ai-surge-comes-with-118-billion-in-guarantees"
    },
    {
     "source": "Data Center Knowledge",
     "quote": "Nvidia said it had made no guarantee payments as of Oct. 25.",
     "url": "https://www.datacenterknowledge.com/data-center-chips/nvidia-ai-surge-comes-with-118-billion-in-guarantees"
    }
   ],
   "short": "Nvidia disclosed up to 118 billion dollars of guarantees",
   "signal": "vendor",
   "lean": "closer"
  },
  {
   "id": "nvda-board-no-reinstate-nov17",
   "date": "2026-11-17",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "On Nvidia's results call on November 17 its board chair, Harvey Jones, said the board had accepted Jensen Huang's resignation and did not intend to reinstate him as chief executive. Six days later, on November 23, Nvidia's own release said the board had voted unanimously to reinstate him.",
   "why": "Context, zero points. A change at the top is not one of the scoring rules. What is confirmed: both statements are in Nvidia's own name, one on a public call and one in a company release. The earlier one was reversed, so reports that he would not return are out of date.",
   "gains": "Said by Nvidia's board chair on a public call, carried by WUSF public radio, and then by Nvidia's own release. What changed in six days, and who gains from each version of the story?",
   "use": "Check the date on any claim about who runs Nvidia. As of November 23 the company's own release says Jensen Huang is back, and that its committee's investigation continues.",
   "sources": [
    {
     "name": "WUSF",
     "date": "2026-11-17",
     "url": "https://www.wusf.org/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo"
    },
    {
     "name": "Nvidia",
     "date": "2026-11-23",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    }
   ],
   "quotes": [
    {
     "source": "WUSF",
     "quote": "board chair Harvey Jones said on the company's earnings call on Tuesday afternoon.",
     "url": "https://www.wusf.org/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo"
    },
    {
     "source": "WUSF",
     "quote": "The Nvidia board unanimously accepted his resignation and does not intend to reinstate Jensen as CEO.",
     "url": "https://www.wusf.org/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo"
    },
    {
     "source": "Nvidia",
     "quote": "The Board of Directors voted unanimously to reinstate Mr. Huang",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    },
    {
     "source": "Nvidia",
     "quote": "November 23, 2026",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director"
    },
    {
     "source": "Nvidia",
     "quote": "investigation will proceed to conclusion.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director",
     "about": "the board committee's investigation"
    }
   ],
   "date_label": "Nov 17",
   "derived": [
    "November 17 to November 23 is six days; the 17 and the 23 are the dates of the two statements"
   ]
  },
  {
   "id": "nvda-export-committee-nov17",
   "date": "2026-11-17",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia's board set up a standing committee to oversee national security and export-control rules, with its own outside experts. Nvidia's release says it meets at least quarterly.",
   "why": "Context, zero points. A governance step in the company's own name. It does not change spending, sales or debt.",
   "gains": "Said by Nvidia's board chair, in a company release. Who gains when oversight is announced the same week as a leadership change, and what would the committee have to show to matter?",
   "use": "When a company adds oversight, look for what the new body can actually decide and report.",
   "sources": [
    {
     "name": "Nvidia Newsroom",
     "date": "2026-11-17",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-of-directors-establishes-national-security-and-export-control-oversight-committee"
    }
   ],
   "quotes": [
    {
     "source": "Nvidia Newsroom",
     "quote": "the Board of Directors has established the National Security and Export Control Oversight Committee, a new standing committee responsible for board-level oversight of the company’s national security policies, export control compliance and global trade risk management.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-of-directors-establishes-national-security-and-export-control-oversight-committee"
    },
    {
     "source": "Nvidia Newsroom",
     "quote": "It will meet at least quarterly, including with management and in executive session.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-of-directors-establishes-national-security-and-export-control-oversight-committee"
    },
    {
     "source": "Nvidia Newsroom",
     "quote": "The decision to create this new committee reflects the Board’s further commitment to enhance its engagement with relevant government stakeholders",
     "url": "https://nvidianews.nvidia.com/news/nvidia-board-of-directors-establishes-national-security-and-export-control-oversight-committee"
    }
   ],
   "date_label": "Nov 17"
  },
  {
   "id": "fed-barr-off-books",
   "date": "2026-11-16",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "A Federal Reserve governor said the debt on the books of the seven largest AI firms is expected to pass 800 billion dollars by year's end. He said the Fed's stability report estimates the largest possible value of the big cloud firms' other promises, such as leases and guarantees kept off the books, at more than 3 trillion dollars.",
   "why": "Context, zero points. A ceiling and a warning, not a dated event. It is read on the lending row, leaning closer, because it is the central bank counting what sits off the books.",
   "gains": "Said by Federal Reserve Governor Michael Barr in a speech in Milan. A regulator's job is to warn early. Who gains if lenders slow down now, and who gains if they keep going?",
   "use": "Off the books does not mean off the hook. Leases and guarantees are promises to pay, and this is the Federal Reserve's own estimate of the most they could come to.",
   "sources": [
    {
     "name": "Federal Reserve",
     "date": "2026-11-16",
     "url": "https://www.federalreserve.gov/newsevents/speech/barr20261116a.htm"
    }
   ],
   "quotes": [
    {
     "source": "Federal Reserve",
     "quote": "On-balance-sheet debt of the seven largest AI firms has been growing significantly in 2026 and is expected to exceed $800 billion before year's end.",
     "url": "https://www.federalreserve.gov/newsevents/speech/barr20261116a.htm"
    },
    {
     "source": "Federal Reserve",
     "quote": "their other obligations, such as long-term contracts, lease commitments, and residual value guarantees, have grown even more rapidly.",
     "url": "https://www.federalreserve.gov/newsevents/speech/barr20261116a.htm",
     "about": "the hyperscaler firms, the biggest cloud companies"
    },
    {
     "source": "Federal Reserve",
     "quote": "The FSR estimates that the potential maximum nominal value of these types of obligations, or off-balance-sheet liabilities, now exceeds $3 trillion.",
     "url": "https://www.federalreserve.gov/newsevents/speech/barr20261116a.htm",
     "about": "the same firms; FSR is the Federal Reserve's Financial Stability Report"
    },
    {
     "source": "Federal Reserve",
     "quote": "brings to mind the growth of debt in the telecom investment cycle of the late 1990s and early 2000s.",
     "url": "https://www.federalreserve.gov/newsevents/speech/barr20261116a.htm",
     "about": "the growth of debt at these firms"
    }
   ],
   "short": "Fed: ceiling on off-books AI promises is over 3 trillion",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "trump-huang-return-remark",
   "date": "2026-11-16",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "President Trump told reporters he would not mind seeing Jensen Huang return as Nvidia's chief executive. The Treasury Secretary was reported to want an outside successor.",
   "why": "Context, zero points. An official's remark, and a second report from Bloomberg through another outlet. Neither is a company action.",
   "gains": "Said by President Trump to reporters, as relayed by The Next Web from The Hill. Who gains when the White House weighs in on a company's chief, and does the board have to answer to anyone else?",
   "use": "Keep what an official says apart from what a board does. Only the board's own filing decides the job.",
   "sources": [
    {
     "name": "The Next Web",
     "date": "2026-11-17",
     "url": "https://thenextweb.com/news/trump-backs-jensen-huangs-return-as-nvidia-board-reportedly-says-no"
    }
   ],
   "quotes": [
    {
     "source": "The Next Web",
     "quote": "Donald Trump said on Monday he would not mind seeing Jensen Huang reinstated as Nvidia’s chief executive.",
     "url": "https://thenextweb.com/news/trump-backs-jensen-huangs-return-as-nvidia-board-reportedly-says-no"
    },
    {
     "source": "The Next Web",
     "quote": "Bessent has urged the board to look outside the company for its next leader, according to Bloomberg.",
     "url": "https://thenextweb.com/news/trump-backs-jensen-huangs-return-as-nvidia-board-reportedly-says-no"
    }
   ],
   "date_label": "Nov 16"
  },
  {
   "id": "bis-remote-compute-rule-nov",
   "date": "2026-11-16",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The Commerce Department now requires a licence to ship advanced AI chips to Singapore, Malaysia, Thailand, Indonesia and Brazil. The department said it aims to close a route around existing US limits.",
   "why": "Context, zero points. A government rule, not a company order or sales report. It narrows where chips can go.",
   "gains": "Said by the Commerce Department, as relayed by The Next Web. Who gains when a rule closes a route around earlier limits, and which sellers and buyers does it touch?",
   "use": "Export rules change who can buy. Watch which companies mention them in their next reports.",
   "sources": [
    {
     "name": "The Next Web",
     "date": "2026-11-17",
     "url": "https://thenextweb.com/news/trump-backs-jensen-huangs-return-as-nvidia-board-reportedly-says-no"
    }
   ],
   "quotes": [
    {
     "source": "The Next Web",
     "quote": "Companies now need a licence to ship advanced AI chips to Singapore, Malaysia, Thailand, Indonesia and Brazil.",
     "url": "https://thenextweb.com/news/trump-backs-jensen-huangs-return-as-nvidia-board-reportedly-says-no"
    },
    {
     "source": "The Next Web",
     "quote": "It aims to close a route around existing US limits, the department said.",
     "url": "https://thenextweb.com/news/trump-backs-jensen-huangs-return-as-nvidia-board-reportedly-says-no"
    }
   ],
   "date_label": "Nov 16"
  },
  {
   "id": "oracle-insure-vs-rating",
   "date": "2026-11-13",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Moody's and Fitch both kept Oracle two steps above junk. In the same week the cost of insuring Oracle's debt was around 305 basis points, about level with an index of single B borrowers, which sit well below that line.",
   "why": "Context, zero points. A price and an unchanged rating, neither of which scores. It is listed because the gap between what a rating says and what lenders charge is what this row reads.",
   "gains": "Said by IFR, a bond trade paper. The rating firms and the insurance market are describing the same company. Who gains if the rating is right, who gains if the price is right, and which one has to move?",
   "use": "When a rating and a price disagree, note the date and watch which one moves.",
   "sources": [
    {
     "name": "IFR",
     "date": "2026-11-13",
     "url": "https://www.ifre.com/topic-codes/2509450/cds-market-flashes-warning-on-ai-ratings-downgrades"
    }
   ],
   "quotes": [
    {
     "source": "IFR",
     "quote": "Now, Oracle CDS trades at around 305bp, just inside the equivalent Single B rated index.",
     "url": "https://www.ifre.com/topic-codes/2509450/cds-market-flashes-warning-on-ai-ratings-downgrades"
    },
    {
     "source": "IFR",
     "quote": "On Monday, Moody's affirmed Oracle's Baa2 rating but with a negative outlook and Fitch held its BBB rating with a stable outlook",
     "url": "https://www.ifre.com/topic-codes/2509450/cds-market-flashes-warning-on-ai-ratings-downgrades"
    },
    {
     "source": "IFR",
     "quote": "two notches above junk in both cases.",
     "url": "https://www.ifre.com/topic-codes/2509450/cds-market-flashes-warning-on-ai-ratings-downgrades"
    },
    {
     "source": "IFR",
     "quote": "IFR 2658 - 7 Nov 2026 - 13 Nov 2026",
     "url": "https://www.ifre.com/topic-codes/2509450/cds-market-flashes-warning-on-ai-ratings-downgrades"
    }
   ],
   "date_label": "Week of Nov 7",
   "short": "Oracle debt insurance near 305, level with single B borrowers",
   "signal": "insure",
   "lean": "closer"
  },
  {
   "id": "insider-sales-on-plans",
   "date": "2026-11-13",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "CoreWeave's chief executive and Palantir's chief technology officer both reported selling shares this autumn. Both filings say the sales ran under trading plans adopted earlier: CoreWeave's in November 2025, Palantir's in August 2026.",
   "why": "Context, zero points. A sale under a plan set in advance is routine. Only an open-market sale or purchase outside a plan would score, and it would always be small.",
   "gains": "Said by the executives' own filings with the Securities and Exchange Commission. A plan is set before the news is known. When was each plan set, and did the selling speed up or stay the same?",
   "use": "Before reading meaning into an insider sale, check the footnote for a preset plan and the date it was adopted.",
   "sources": [
    {
     "name": "SEC filing, CoreWeave",
     "date": "2026-10-01",
     "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000437/xslF345X06/form4.xml"
    },
    {
     "name": "SEC filing, Palantir",
     "date": "2026-11-13",
     "url": "https://www.sec.gov/Archives/edgar/data/1321655/000182415926000017/xslF345X06/wk-form4_1794618004.xml"
    }
   ],
   "quotes": [
    {
     "source": "SEC filing, CoreWeave",
     "quote": "The reported transaction represents a sale effected pursuant to a Rule 10b5-1 trading plan adopted by the reporting person on November 20, 2025.",
     "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000437/xslF345X06/form4.xml",
     "about": "Michael Intrator, chief executive"
    },
    {
     "source": "SEC filing, Palantir",
     "quote": "pursuant to a preexisting Rule 10b5-1 trading plan",
     "url": "https://www.sec.gov/Archives/edgar/data/1321655/000182415926000017/xslF345X06/wk-form4_1794618004.xml",
     "about": "Shyam Sankar, chief technology officer"
    },
    {
     "source": "SEC filing, Palantir",
     "quote": "entered into on August 10, 2026.",
     "url": "https://www.sec.gov/Archives/edgar/data/1321655/000182415926000017/xslF345X06/wk-form4_1794618004.xml",
     "about": "the Palantir trading plan"
    }
   ],
   "date_label": "Filed by Nov 13",
   "short": "Insider sales at CoreWeave and Palantir ran on preset plans",
   "signal": "insiders",
   "lean": "none"
  },
  {
   "id": "nvda-chief-resigns",
   "date": "2026-11-12",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia fell 14 percent at first after its chief executive, Jensen Huang, resigned, then halved the loss the same day. The next Monday the Nasdaq fell 2.5 percent as Nvidia sank again.",
   "why": "Context, zero points. A share price reacting to a change at the top. The report of a regulator's review cites unnamed people, so it waits.",
   "gains": "Said by news service market recaps, with the report of a regulator's review from the Wall Street Journal by way of Reuters. That report cites unnamed people. Who gains from each version before the company or a regulator confirms one?",
   "use": "A sudden exit at the top is a fact. A report that cites unnamed people is a lead until someone puts a name to it.",
   "sources": [
    {
     "name": "News services (La Nacion), Nov 12",
     "date": "2026-11-13",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-thursday-11122026-nid12112026/"
    },
    {
     "name": "News services (La Nacion), Nov 16",
     "date": "2026-11-17",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-monday-11162026-nid16112026/"
    },
    {
     "name": "Reuters (The Star)",
     "date": "2026-11-18",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/11/18/nvidia-facing-sec-probe-after-huang039s-resignation-wsj-reports"
    }
   ],
   "quotes": [
    {
     "source": "News services (La Nacion), Nov 12",
     "quote": "Nvidia's stock initially plunged 14% following the resignation of its CEO, Jensen Huang.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-thursday-11122026-nid12112026/"
    },
    {
     "source": "News services (La Nacion), Nov 12",
     "quote": "But it quickly halved its loss",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-thursday-11122026-nid12112026/"
    },
    {
     "source": "News services (La Nacion), Nov 16",
     "quote": "The Nasdaq composite fell 626.52 points, or 2.5%, to 24,509.76.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-monday-11162026-nid16112026/"
    },
    {
     "source": "News services (La Nacion), Nov 16",
     "quote": "Nvidia sank again following last week's resignation of its CEO, Jensen Huang.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-monday-11162026-nid16112026/"
    },
    {
     "source": "Reuters (The Star)",
     "quote": "The US Securities and Exchange Commission is probing Nvidia after Jensen Huang's resignation as CEO last week, the Wall Street Journal reported on Tuesday, citing people familiar with the matter.",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/11/18/nvidia-facing-sec-probe-after-huang039s-resignation-wsj-reports"
    }
   ],
   "date_label": "Nov 12",
   "kind": "drop",
   "short": "Nvidia fell 14 percent at first after its chief resigned"
  },
  {
   "id": "coreweave-eases-nov12",
   "date": "2026-11-12",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "CoreWeave's notes due in 2031 rose 0.3 points to 82.25 percent of face value on Thursday morning, and the cost of insuring its debt dropped, Bloomberg data showed.",
   "why": "Context, zero points. A price moving the other way is still a price. It is read on the cost-to-insure row, leaning further, and it counts for exactly as little as the rises do.",
   "gains": "Said by Stocktwits from Bloomberg data. One morning's reading. Who gains from calling the worry over, and does the price hold after the next report?",
   "use": "Give an easing the same weight you give a jump. One day in either direction is a reading, not a trend.",
   "sources": [
    {
     "name": "Stocktwits",
     "date": "2026-11-12",
     "url": "https://stocktwits.com/news-articles/markets/equity/core-weave-s-bonds-signal-cooling-investor-angst-on-elevated-debt-load/cNGC3QVR9Oc"
    }
   ],
   "quotes": [
    {
     "source": "Stocktwits",
     "quote": "The company's 9.75% notes due in 2031 rose 0.3 percentage points to 82.25% of the face value on Thursday morning, Bloomberg data showed.",
     "url": "https://stocktwits.com/news-articles/markets/equity/core-weave-s-bonds-signal-cooling-investor-angst-on-elevated-debt-load/cNGC3QVR9Oc"
    },
    {
     "source": "Stocktwits",
     "quote": "the cost of insuring the company's debt against default experienced a significant drop, Bloomberg data showed.",
     "url": "https://stocktwits.com/news-articles/markets/equity/core-weave-s-bonds-signal-cooling-investor-angst-on-elevated-debt-load/cNGC3QVR9Oc"
    }
   ],
   "short": "CoreWeave bonds rose and its debt insurance cost dropped",
   "signal": "insure",
   "lean": "further"
  },
  {
   "id": "nvda-interim-ceo-release",
   "date": "2026-11-12",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia's own release on the change at the top says the board is starting a search for a permanent chief executive and appointed Harvey Jones as its first-ever board chair. It says the company expects operations, customer commitments and its product plans to continue without interruption.",
   "why": "Context, zero points. A leadership change in the company's own name does not fit any spending, sales or debt rule.",
   "gains": "Said by Nvidia, in its own release. Who gains when a change at the top is told as calm continuity, and what questions does that leave open?",
   "use": "Read the company's own release next to the press reports and compare what each one says.",
   "sources": [
    {
     "name": "Nvidia Newsroom",
     "date": "2026-11-12",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition"
    }
   ],
   "quotes": [
    {
     "source": "Nvidia Newsroom",
     "quote": "The Board is initiating a search for a permanent Chief Executive Officer and will consider internal and external candidates.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition"
    },
    {
     "source": "Nvidia Newsroom",
     "quote": "The Board of Directors appointed Harvey C. Jones as its first-ever Chair of the Board.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition"
    },
    {
     "source": "Nvidia Newsroom",
     "quote": "we expect the company’s operations, customer commitments and product roadmap to continue without interruption.",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition"
    }
   ],
   "date_label": "Nov 12"
  },
  {
   "id": "nebius-capex-raise-nov",
   "date": "2026-11-12",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nebius raised its 2026 spending forecast to about 27 billion dollars from a range of 20 billion to 25 billion. In the same report it said delays at outside data centers pushed some sales into next year.",
   "why": "Context, zero points. The one source on file is a trade site's summary, not Nebius's own release, and the spending rule wants the raise in the company's own name. It would score with the company's own words.",
   "gains": "Said by Securities.io, a trade site, summarising Nebius's quarterly results. Who gains when a company spends more while some of its sales slip a few months, and who carries the gap?",
   "use": "Read spending and sales side by side. A raise in one with a delay in the other is worth a second look.",
   "sources": [
    {
     "name": "Securities.io",
     "date": "2026-11-12",
     "url": "https://www.securities.io/nebius-raises-capex-to-27-billion-as-capacity-delays-shift-revenue/"
    }
   ],
   "quotes": [
    {
     "source": "Securities.io",
     "quote": "Nebius raised 2026 capital spending to roughly $27 billion while pushing some revenue into 2027.",
     "url": "https://www.securities.io/nebius-raises-capex-to-27-billion-as-capacity-delays-shift-revenue/"
    },
    {
     "source": "Securities.io",
     "quote": "raised its 2026 capital-expenditure forecast to approximately $27 billion from $20 billion to $25 billion.",
     "url": "https://www.securities.io/nebius-raises-capex-to-27-billion-as-capacity-delays-shift-revenue/"
    },
    {
     "source": "Securities.io",
     "quote": "delays at third-party facilities push some expected revenue into the first half of 2027",
     "url": "https://www.securities.io/nebius-raises-capex-to-27-billion-as-capacity-delays-shift-revenue/"
    }
   ],
   "date_label": "Nov 12",
   "derived": [
    "Raise measured against the top of the old range: 27 billion minus 25 billion is 2 billion dollars, small."
   ]
  },
  {
   "id": "openai-q3-revenue",
   "date": "2026-11-10",
   "status": "watching",
   "rule": "revenue",
   "size": "small",
   "text": "Bloomberg reports, from unnamed people, that OpenAI's sales reached 10 billion dollars in the three months to September, up nearly 50 percent from the quarter before and almost three times a year earlier.",
   "why": "Watching, zero points. The numbers come from people familiar with the matter after an investor call, which is an unnamed source. The rise is under 10 billion, so it would be small if confirmed.",
   "gains": "Said by unnamed people after a private investor call, reported by Bloomberg. Who gains when a private company's best number travels without its full accounts? Why this way and not a filing?",
   "use": "Treat a leaked number as a lead. It counts here when the company puts its name on it.",
   "sources": [
    {
     "name": "Bloomberg",
     "date": "2026-11-11",
     "url": "https://news.bloombergtax.com/private-equity/openai-third-quarter-revenue-soars-nearly-50-to-10-billion"
    }
   ],
   "quotes": [
    {
     "source": "Bloomberg",
     "quote": "OpenAI's quarterly revenue hit $10 billion for the first time in the three months ending in September.",
     "url": "https://news.bloombergtax.com/private-equity/openai-third-quarter-revenue-soars-nearly-50-to-10-billion"
    },
    {
     "source": "Bloomberg",
     "quote": "increased nearly 50% from the prior quarter and almost threefold from the same period a year earlier.",
     "url": "https://news.bloombergtax.com/private-equity/openai-third-quarter-revenue-soars-nearly-50-to-10-billion",
     "about": "OpenAI's quarterly revenue"
    },
    {
     "source": "Bloomberg",
     "quote": "according to people familiar with the matter",
     "url": "https://news.bloombergtax.com/private-equity/openai-third-quarter-revenue-soars-nearly-50-to-10-billion"
    },
    {
     "source": "Bloomberg",
     "quote": "The financial details were shared with investors during a call on Tuesday.",
     "url": "https://news.bloombergtax.com/private-equity/openai-third-quarter-revenue-soars-nearly-50-to-10-billion"
    }
   ]
  },
  {
   "id": "nvda-order-cut-report",
   "date": "2026-11-10",
   "status": "watching",
   "rule": "chips",
   "size": "small",
   "text": "A Taiwan paper reported Nvidia may slow its chip orders. Industry sources in the same report said orders and capacity are unchanged for now.",
   "why": "Watching, zero points. Unnamed sources, not confirmed by Nvidia or its chip maker, and no dollar figure, so it would be small if confirmed.",
   "gains": "Said by a Taiwan paper citing unnamed supply sources, while others in the same report say nothing changed. Who gains if this spreads before anyone confirms it?",
   "use": "An unconfirmed report is a question, not an answer. Wait for the buyer or the maker to say it.",
   "sources": [
    {
     "name": "TrendForce (citing Commercial Times)",
     "date": "2026-11-10",
     "url": "https://www.trendforce.com/news/?p=66399"
    }
   ],
   "quotes": [
    {
     "source": "TrendForce (citing Commercial Times)",
     "quote": "NVIDIA may slow chip orders",
     "url": "https://www.trendforce.com/news/?p=66399"
    },
    {
     "source": "TrendForce (citing Commercial Times)",
     "quote": "industry sources say orders and production capacity remain unchanged for now.",
     "url": "https://www.trendforce.com/news/?p=66399"
    }
   ]
  },
  {
   "id": "coreweave-paid-down",
   "date": "2026-11-10",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "CoreWeave's chief executive said the company has paid down more than 4 billion dollars of debt from customer contract cash, as planned, and will not sell unsecured bonds at current rates. It paid 846 million dollars in interest in the quarter.",
   "why": "Context, zero points. A payment made on schedule is what a borrower is supposed to do, so it does not score. It is read on the borrowers row, leaning further.",
   "gains": "Said by CoreWeave's chief executive, Michael Intrator, with its results. A company describes its own debt in its own words. Does the next filing show the same number?",
   "use": "Paying on time is the baseline, not a bonus. The thing to watch is whether the payments keep coming from customers and not from new loans.",
   "sources": [
    {
     "name": "Constellation Research",
     "date": "2026-11-10",
     "url": "https://www.constellationr.com/insights/news/coreweaves-q3-shows-revenue-surge-ceo-aims-allay-debt-worries"
    }
   ],
   "quotes": [
    {
     "source": "Constellation Research",
     "quote": "The cash flow from those contracts pays interest and repays the principal over the contract term,",
     "url": "https://www.constellationr.com/insights/news/coreweaves-q3-shows-revenue-surge-ceo-aims-allay-debt-worries",
     "about": "CoreWeave's loans matched to customer contracts, in Michael Intrator's words"
    },
    {
     "source": "Constellation Research",
     "quote": "As planned, we have already paid down more than 4 billion of debt through this mechanism.",
     "url": "https://www.constellationr.com/insights/news/coreweaves-q3-shows-revenue-surge-ceo-aims-allay-debt-worries",
     "about": "Michael Intrator, CoreWeave's chief executive"
    },
    {
     "source": "Constellation Research",
     "quote": "we will not use the unsecured debt market to fund our business at current yields",
     "url": "https://www.constellationr.com/insights/news/coreweaves-q3-shows-revenue-surge-ceo-aims-allay-debt-worries",
     "about": "Michael Intrator, on CoreWeave's borrowing"
    },
    {
     "source": "Constellation Research",
     "quote": "In the third quarter, CoreWeave paid $846 million in interest.",
     "url": "https://www.constellationr.com/insights/news/coreweaves-q3-shows-revenue-surge-ceo-aims-allay-debt-worries"
    }
   ],
   "short": "CoreWeave says it paid down over 4 billion of debt, as planned",
   "signal": "paying",
   "lean": "further"
  },
  {
   "id": "tsmc-oct-sales",
   "date": "2026-11-10",
   "status": "scored",
   "rule": "orders",
   "size": "small",
   "text": "TSMC's October sales were up 59.7 percent from a year earlier and 14.7 percent from September, by the company's own data. Analysts tied it to demand for AI.",
   "why": "A chip maker reporting its own sales rising. No dollar change is stated in the quote, so small.",
   "gains": "Said by TSMC's monthly sales data, as carried by Taiwan's Central News Agency. Does one strong month say what the buyers will order next year?",
   "use": "Watch whether the monthly sales line keeps rising in the next two reports.",
   "sources": [
    {
     "name": "Focus Taiwan",
     "date": "2026-11-10",
     "url": "https://focustaiwan.tw/business/202611100014"
    }
   ],
   "quotes": [
    {
     "source": "Focus Taiwan",
     "quote": "posted consolidated sales of NT$586.89 billion (US$17.81 billion), up 59.7 percent from a year earlier and 14.7 percent from September, according to company data.",
     "url": "https://focustaiwan.tw/business/202611100014",
     "about": "TSMC's October sales"
    },
    {
     "source": "Focus Taiwan",
     "quote": "analysts attributed the growth to strong global demand for artificial intelligence (AI) applications.",
     "url": "https://focustaiwan.tw/business/202611100014",
     "about": "the rise in TSMC's October sales"
    }
   ],
   "date_label": "Nov 10",
   "rail": "TSMC's October sales rose from a year earlier, by the company's own data",
   "event": "tsmc-sales-2026-10"
  },
  {
   "id": "crwv-capex-raised-nov",
   "date": "2026-11-10",
   "status": "scored",
   "rule": "kept",
   "size": "small",
   "text": "CoreWeave raised the low end of its 2026 capital spending range, so the plan is now 37 to 39 billion dollars instead of 35 to 39 billion. It said it expects to deliver to customers sooner than planned.",
   "why": "A cloud company raising its spending plan in its own release. The raise is 2 billion dollars on the low end, which is small.",
   "gains": "Said by CoreWeave in its own results release. Who gains when a spending raise is framed as delivering sooner, and what is paying for it?",
   "use": "Read a raised spending plan next to the company's debt and interest cost, not alone.",
   "sources": [
    {
     "name": "CoreWeave release (Investing News Network)",
     "date": "2026-11-10",
     "url": "https://investingnews.com/coreweave-reports-strong-third-quarter-2026-results/"
    }
   ],
   "quotes": [
    {
     "source": "CoreWeave release (Investing News Network)",
     "quote": "We now expect full year 2026 capital expenditures of $37 billion to $39 billion, raising the low end of our prior guidance range of $35 billion to $39 billion.",
     "url": "https://investingnews.com/coreweave-reports-strong-third-quarter-2026-results/"
    },
    {
     "source": "CoreWeave release (Investing News Network)",
     "quote": "This is as a result of our expectation to deploy infrastructure and deliver it to customers sooner than planned.",
     "url": "https://investingnews.com/coreweave-reports-strong-third-quarter-2026-results/"
    },
    {
     "source": "CoreWeave release (Investing News Network)",
     "quote": "The Essential Cloud for AI",
     "url": "https://investingnews.com/coreweave-reports-strong-third-quarter-2026-results/",
     "about": "how CoreWeave describes itself in the release"
    }
   ],
   "date_label": "Nov 10",
   "rail": "CoreWeave raised the low end of its 2026 spending range",
   "derived": [
    "Low end moved from 35 billion to 37 billion dollars: a raise of 2 billion dollars, under 10 billion, so small."
   ],
   "event": "coreweave-capex-guidance-2026-11"
  },
  {
   "id": "crwv-q3-revenue",
   "date": "2026-11-10",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "CoreWeave reported third-quarter sales of 3.66 billion dollars, up 168 percent from 1.37 billion a year earlier.",
   "why": "Context, zero points. The figure is CoreWeave's total sales, and the paying-customers rule counts sales from AI use by people and businesses. Listed so the results season is complete.",
   "gains": "Said by CoreWeave, relayed by a tech trade site. Who gains when sales growth leads the story, and who are the customers behind it?",
   "use": "Read the sales line next to the interest line before judging the quarter.",
   "sources": [
    {
     "name": "Pulse 2",
     "date": "2026-11-11",
     "url": "https://pulse2.com/coreweave-record-q3-revenue-reaches-3-66-billion-as-backlog-grows-to-132-5-billion/"
    }
   ],
   "quotes": [
    {
     "source": "Pulse 2",
     "quote": "CoreWeave reported record third-quarter 2026 revenue of $3.66 billion, up 168% from $1.37 billion a year earlier",
     "url": "https://pulse2.com/coreweave-record-q3-revenue-reaches-3-66-billion-as-backlog-grows-to-132-5-billion/"
    }
   ],
   "date_label": "Nov 10"
  },
  {
   "id": "coreweave-yield-16",
   "date": "2026-11-06",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "On November 6 lenders were asking more than 16 percent a year to hold CoreWeave's 2032 bonds, and the price of insuring its debt had jumped.",
   "why": "Context, zero points. A bond price is still a price. It is read on the cost-to-insure row, leaning closer.",
   "gains": "Said by CNBC. CNBC points to incoming governors who may slow or cancel data centers. Who earns more when a loan looks riskier? Is the risk in the company, or in the politics around it?",
   "use": "A lender's asking rate is a public risk score. The higher it climbs, the more risk lenders see.",
   "sources": [
    {
     "name": "CNBC",
     "date": "2026-11-06",
     "url": "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html"
    }
   ],
   "quotes": [
    {
     "source": "CNBC",
     "quote": "Published Fri, Nov 6 2026 12:02 PM EST",
     "url": "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html"
    },
    {
     "source": "CNBC",
     "quote": "The yield on its 2032 bond with a 9.625% coupon has climbed above 16%.",
     "url": "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html",
     "about": "CoreWeave"
    },
    {
     "source": "CNBC",
     "quote": "five-year credit default swaps spiked above 1,289 basis points on Thursday",
     "url": "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html",
     "about": "the cost of insuring CoreWeave's debt"
    },
    {
     "source": "CNBC",
     "quote": "at least some data center spending will be delayed or scrapped under incoming Democratic governors.",
     "url": "https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html"
    }
   ],
   "short": "CoreWeave 2032 bond yield climbed above 16 percent",
   "signal": "insure",
   "lean": "closer"
  },
  {
   "id": "nov5-market-fall",
   "date": "2026-11-05",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The Nasdaq fell 5.5 percent on November 5, its worst day in over a year, and the S&P 500 fell 4.4 percent. Nvidia fell 9.3 percent, leaving it down for the year, on worries that building of AI data centers may slow.",
   "why": "Context, zero points. A price move on a worry, with no confirmed cut behind it. Prices alone do not score.",
   "gains": "Said by the wire services. The reason they gave is a worry, not an event. Who gains from a big one-day number? What was actually cancelled that day?",
   "use": "Separate the move from the cause. The reports gave a worry as the reason, not a confirmed cut.",
   "sources": [
    {
     "name": "AP (Scripps News)",
     "date": "2026-11-05",
     "url": "https://www.scrippsnews.com/politics/economy/a-wipeout-for-ai-stocks-sends-wall-street-reeling"
    },
    {
     "name": "International Business Times",
     "date": "2026-11-06",
     "url": "https://www.ibtimes.com/tech-stocks-ai-spending-fears-market-selloff-3809480"
    },
    {
     "name": "Latin Times",
     "date": "2026-11-18",
     "url": "https://www.latintimes.com/wall-streets-ai-bet-faces-reckoning-nasdaq-correction-deepens-after-nvidia-fallout-601517"
    }
   ],
   "quotes": [
    {
     "source": "Latin Times",
     "quote": "On November 5",
     "url": "https://www.latintimes.com/wall-streets-ai-bet-faces-reckoning-nasdaq-correction-deepens-after-nvidia-fallout-601517"
    },
    {
     "source": "Latin Times",
     "quote": "5.5% in its worst single session in over a year.",
     "url": "https://www.latintimes.com/wall-streets-ai-bet-faces-reckoning-nasdaq-correction-deepens-after-nvidia-fallout-601517",
     "about": "the Nasdaq, on November 5"
    },
    {
     "source": "AP (Scripps News)",
     "quote": "The S&P 500 fell 4.4% for its worst day since",
     "url": "https://www.scrippsnews.com/politics/economy/a-wipeout-for-ai-stocks-sends-wall-street-reeling"
    },
    {
     "source": "AP (Scripps News)",
     "quote": "Nvidia, the chip company that quickly became the face of the AI boom, fell 9.3% and was by far the heaviest weight on the S&P 500.",
     "url": "https://www.scrippsnews.com/politics/economy/a-wipeout-for-ai-stocks-sends-wall-street-reeling"
    },
    {
     "source": "International Business Times",
     "quote": "wiping out their remaining gains for 2026.",
     "url": "https://www.ibtimes.com/tech-stocks-ai-spending-fears-market-selloff-3809480",
     "about": "Nvidia's shares"
    },
    {
     "source": "AP (Scripps News)",
     "quote": "worries that the construction of further AI data centers may slow",
     "url": "https://www.scrippsnews.com/politics/economy/a-wipeout-for-ai-stocks-sends-wall-street-reeling"
    }
   ],
   "kind": "drop",
   "short": "Nasdaq fell 5.5 percent; S&P 500 fell 4.4 percent"
  },
  {
   "id": "meta-bond-nov4",
   "date": "2026-11-04",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Meta raised 15 billion dollars in a five-part bond sale to pay for AI building. Buyers put in orders for as much as 58 billion dollars, about 3.9 times what Meta asked for.",
   "why": "Context, zero points. It belongs to the same week's wave of big tech bond sales, which is already scored once on November 2, and one event scores once. It is read on the lending row and leans neither way: more borrowing on one side, eager lenders on the other.",
   "gains": "Said by Techeconomy, a tech trade site, citing a regulatory filing. Lenders lined up for this one. Who earns from each new bond, and what does eager lending tell you: strength, or easy money?",
   "use": "Strong demand for a bond says lenders trust this borrower today. It does not tell you what the borrowed money will bring in.",
   "sources": [
    {
     "name": "Techeconomy",
     "date": "2026-11-04",
     "url": "https://techeconomy.ng/meta-15-billion-bond-sale-ai-expansion"
    },
    {
     "name": "Bloomberg (The Star)",
     "date": "2026-11-04",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    }
   ],
   "quotes": [
    {
     "source": "Techeconomy",
     "quote": "Meta Platforms has raised $15 billion through a five-part US dollar bond sale, adding to the funds it is seeking for its expanding artificial intelligence infrastructure.",
     "url": "https://techeconomy.ng/meta-15-billion-bond-sale-ai-expansion"
    },
    {
     "source": "Techeconomy",
     "quote": "Investors placed orders worth as much as $58 billion for the offering, about 3.9 times the amount Meta planned to raise.",
     "url": "https://techeconomy.ng/meta-15-billion-bond-sale-ai-expansion"
    },
    {
     "source": "Techeconomy",
     "quote": "According to a regulatory filing, the offering includes",
     "url": "https://techeconomy.ng/meta-15-billion-bond-sale-ai-expansion"
    },
    {
     "source": "Bloomberg (The Star)",
     "quote": "Oracle Corp sold US$10bil of bonds on Monday alongside selling an equal amount of equity, while Meta Platforms Inc is eyeing at least US$20bil from a potential debt offering",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales",
     "about": "the same week's wave of bond sales, scored on November 2"
    }
   ],
   "derived": [
    "November 2: the Monday of the bond sales already scored (see that fact)"
   ],
   "short": "Meta raised 15 billion in bonds; orders reached 58 billion",
   "signal": "papers",
   "lean": "none"
  },
  {
   "id": "amd-q3-datacenter",
   "date": "2026-11-03",
   "status": "scored",
   "rule": "orders",
   "size": "small",
   "text": "AMD said its data center sales nearly doubled from a year earlier in the third quarter, with the chief executive saying demand for its AI chips and server chips keeps strengthening.",
   "why": "A chip maker reporting sales growth in its own name. The data center rise in dollars is under 10 billion, so it is small.",
   "gains": "Said by AMD's chief executive, Lisa Su, in the company's own release. Who gains when the best segment leads the headline, and what do the other segments show?",
   "use": "Compare this with the Nvidia and Micron sales rows to see whether chip sales are rising everywhere or in a few places.",
   "sources": [
    {
     "name": "Jon Peddie Research",
     "date": "2026-11-04",
     "url": "https://www.jonpeddie.com/news/amd-reports-third-quarter-revenue-of-13-4-billion-up-45-y-y/"
    }
   ],
   "quotes": [
    {
     "source": "Jon Peddie Research",
     "quote": "Data Center segment sales nearly doubled year over year",
     "url": "https://www.jonpeddie.com/news/amd-reports-third-quarter-revenue-of-13-4-billion-up-45-y-y/",
     "about": "AMD, quoting its chief executive Lisa Su"
    },
    {
     "source": "Jon Peddie Research",
     "quote": "Demand for our Instinct and Epyc products continued to strengthen",
     "url": "https://www.jonpeddie.com/news/amd-reports-third-quarter-revenue-of-13-4-billion-up-45-y-y/",
     "about": "AMD chief executive Lisa Su"
    }
   ],
   "date_label": "Nov 3",
   "rail": "AMD said data center segment sales nearly doubled from a year earlier",
   "event": "amd-datacenter-sales-2026-11"
  },
  {
   "id": "big-tech-bond-week",
   "date": "2026-11-02",
   "status": "scored",
   "rule": "debt",
   "size": "medium",
   "text": "Oracle sold 10 billion dollars of bonds paying up to 8.65 percent and Alphabet 6 billion euros on one Monday, and Microsoft sold 25 billion.",
   "why": "Tens of billions borrowed for AI building in these sales: 10 to 100 billion is medium.",
   "gains": "Said by the companies' own bond sales, reported by Bloomberg. Who earns from each new bond: the banks, the lenders, the raters? Who pays if the demand comes late?",
   "use": "Debt has to be repaid whether or not the customers show up. Watch the interest lenders ask for: it is their read of the risk.",
   "sources": [
    {
     "name": "Bloomberg (The Star)",
     "date": "2026-11-04",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    },
    {
     "name": "24/7 Wall St.",
     "date": "2026-11-03",
     "url": "https://247wallst.com/investing/2026/11/03/big-tech-just-tried-to-borrow-more-than-35-billion-in-a-single-day/"
    }
   ],
   "quotes": [
    {
     "source": "Bloomberg (The Star)",
     "quote": "Oracle Corp sold US$10bil of bonds on Monday.",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    },
    {
     "source": "Bloomberg (The Star)",
     "quote": "Microsoft Corp sold US$25bil of bonds, its first US offering since 2017.",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    },
    {
     "source": "Bloomberg (The Star)",
     "quote": "Alphabet ended up paying up to draw investors to its €6bil (US$6.73bil) offering",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    },
    {
     "source": "24/7 Wall St.",
     "quote": "coupons from 7.000% to 8.650%",
     "url": "https://247wallst.com/investing/2026/11/03/big-tech-just-tried-to-borrow-more-than-35-billion-in-a-single-day/",
     "about": "Oracle's bonds"
    },
    {
     "source": "Bloomberg (The Star)",
     "quote": "pushing ahead with plans to raise money for investments related to artificial intelligence",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    },
    {
     "source": "Bloomberg (The Star)",
     "quote": "Companies have borrowed more than US$330bil from US high-grade corporate bonds to fund AI investments this year",
     "url": "https://www.thestar.com.my/business/business-news/2026/11/04/ai-sparks-new-wave-of-big-tech-bond-sales"
    },
    {
     "source": "24/7 Wall St.",
     "quote": "three of the biggest AI spenders came to the bond market at once",
     "url": "https://247wallst.com/investing/2026/11/03/big-tech-just-tried-to-borrow-more-than-35-billion-in-a-single-day/"
    }
   ],
   "rail": "Oracle, Alphabet and Microsoft sold tens of billions of dollars in bonds to pay for AI building",
   "event": "bond-wave-2026-11-w1"
  },
  {
   "id": "pltr-q3-us-commercial",
   "date": "2026-11-02",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Palantir's US commercial sales rose 148 percent from a year earlier to 984 million dollars in the third quarter, passing its US government sales for the first time. Its chief executive tied the growth to demand for enterprise AI.",
   "why": "Context, zero points. Palantir's chief executive ties the growth to demand for enterprise AI, but the figure is for all US commercial sales, and the paying-customers rule counts sales from AI use.",
   "gains": "Said by Palantir's chief executive, as relayed by Beinsure. Who gains when a letter to shareholders links the growth to AI, and how much of it is AI?",
   "use": "Ask how much of a company's growth it says comes from AI, and whether the figure is audited.",
   "sources": [
    {
     "name": "Beinsure",
     "date": "2026-11-06",
     "url": "https://beinsure.com/news/palantir-revenue-surges-as-us-commercial-grows/"
    }
   ],
   "quotes": [
    {
     "source": "Beinsure",
     "quote": "US commercial revenue surged 148% to $984 mn, exceeding US government revenue for the first time in the company’s history.",
     "url": "https://beinsure.com/news/palantir-revenue-surges-as-us-commercial-grows/"
    },
    {
     "source": "Beinsure",
     "quote": "CEO Alex Karp attributed the expansion to demand for enterprise AI",
     "url": "https://beinsure.com/news/palantir-revenue-surges-as-us-commercial-grows/"
    }
   ],
   "date_label": "Nov 2"
  },
  {
   "id": "sp-meta-outlook",
   "date": "2026-10-30",
   "status": "scored",
   "rule": "downgrade",
   "size": "small",
   "text": "S&P lowered its outlook on Meta's credit rating to negative from stable, citing its spending, its data center leases and doubt about earning the AI money back. S&P says Meta's debt measure has gone from 0.1 toward 1.0, the level at which the rating could be cut.",
   "why": "A rating firm lowering its outlook on an AI borrower. An outlook change is small. The rating stays where it is for now.",
   "gains": "Said by S&P, a credit rating firm. Who gains when a warning arrives as an outlook instead of a cut, and why now?",
   "use": "A lease is a promise to pay, like a loan. When a company's leases grow, read them next to its borrowing.",
   "sources": [
    {
     "name": "Alliance News (VZ)",
     "date": "2026-11-02",
     "url": "https://www.vermoegenszentrum.ch/en/stock-exchange-and-markets/news/sp-global-cuts-meta-platforms-ratings-outlook-negative"
    }
   ],
   "quotes": [
    {
     "source": "Alliance News (VZ)",
     "quote": "S&P Global Ratings on Friday lowers its outlook on Meta's credit rating to 'negative' from 'stable'",
     "url": "https://www.vermoegenszentrum.ch/en/stock-exchange-and-markets/news/sp-global-cuts-meta-platforms-ratings-outlook-negative"
    },
    {
     "source": "Alliance News (VZ)",
     "quote": "citing Meta's high capital expenditure, lease obligations for data centres, and concerns about Meta's ability to monetise its high spending on artificial intelligence.",
     "url": "https://www.vermoegenszentrum.ch/en/stock-exchange-and-markets/news/sp-global-cuts-meta-platforms-ratings-outlook-negative"
    },
    {
     "source": "Alliance News (VZ)",
     "quote": "threatens to push debt leverage above the downgrade threshold for its current AA- rating as early as next year",
     "url": "https://www.vermoegenszentrum.ch/en/stock-exchange-and-markets/news/sp-global-cuts-meta-platforms-ratings-outlook-negative"
    },
    {
     "source": "Alliance News (VZ)",
     "quote": "S&P says, noting that Meta's debt leverage has leapt from 0.1x as recently as last year toward the AA- downgrade threshold of 1.0x.",
     "url": "https://www.vermoegenszentrum.ch/en/stock-exchange-and-markets/news/sp-global-cuts-meta-platforms-ratings-outlook-negative"
    }
   ],
   "date_label": "Oct 30",
   "rail": "S&P lowered its outlook on Meta's credit rating to negative from stable",
   "event": "meta-outlook-sp-2026-10"
  },
  {
   "id": "amzn-msft-spending-kept",
   "date": "2026-10-29",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Amazon kept its 2026 capital spending plan at about 220 billion dollars. Microsoft put its own at about 170 billion.",
   "why": "Context, zero points. Amazon kept its plan, and the Microsoft figure is a level, not a change, so neither scores. A raise would score, and so would a cut.",
   "gains": "Said by the companies on their results calls. Who gains when a big spender says nothing has changed? Is the plan paid from sales, or from borrowing?",
   "use": "A kept plan means the money is still flowing today. Read it next to the debt fact: how it is paid for matters as much as the size.",
   "sources": [
    {
     "name": "Fortune",
     "date": "2026-10-30",
     "url": "https://fortune.com/2026/10/30/why-big-tech-earnings-are-a-crucial-report-card-for-the-ai-boom-and-its-future/"
    },
    {
     "name": "Trustnet",
     "date": "2026-10-30",
     "url": "https://www.trustnet.com/news/13487548/tech-giants-earnings-round-up-markets-disappointed-as-ai-spend-starts-to-bite"
    }
   ],
   "quotes": [
    {
     "source": "Trustnet",
     "quote": "as Amazon maintained its full-year capex guidance of $220bn.",
     "url": "https://www.trustnet.com/news/13487548/tech-giants-earnings-round-up-markets-disappointed-as-ai-spend-starts-to-bite"
    },
    {
     "source": "Fortune",
     "quote": "On Thursday, Amazon reiterated that it expects its 2026 capital expenditures to be about $220 billion.",
     "url": "https://fortune.com/2026/10/30/why-big-tech-earnings-are-a-crucial-report-card-for-the-ai-boom-and-its-future/"
    },
    {
     "source": "Fortune",
     "quote": "Microsoft Chief Financial Officer Amy Hood said in a call with analysts that 2026 calendar-year spending on capital expenditures would reach about $170 billion",
     "url": "https://fortune.com/2026/10/30/why-big-tech-earnings-are-a-crucial-report-card-for-the-ai-boom-and-its-future/"
    }
   ]
  },
  {
   "id": "aws-q3-growth",
   "date": "2026-10-29",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Amazon said AWS sales grew 39 percent from a year earlier to 46.0 billion dollars in the third quarter, its fastest growth in nearly five years.",
   "why": "Context, zero points. The figure is for cloud sales as a whole, and the paying-customers rule counts sales from AI use. It is listed so the cloud picture is complete.",
   "gains": "Said by Amazon in its own release. Who gains when cloud growth leads the headline, and how much of it is AI use?",
   "use": "Cloud growth is a sign people are paying for the computing. Check how much of it Amazon says is AI.",
   "sources": [
    {
     "name": "Amazon release",
     "date": "2026-10-29",
     "url": "https://aboutamazon.com/news/company-news/amazon-earnings-q3-2026-report"
    }
   ],
   "quotes": [
    {
     "source": "Amazon release",
     "quote": "AWS segment sales increased 39% year-over-year to $46.0 billion.",
     "url": "https://aboutamazon.com/news/company-news/amazon-earnings-q3-2026-report"
    },
    {
     "source": "Amazon release",
     "quote": "AWS net sales increased 39.3%—its fastest growth in nearly five years",
     "url": "https://aboutamazon.com/news/company-news/amazon-earnings-q3-2026-report"
    }
   ],
   "date_label": "Oct 29"
  },
  {
   "id": "anthropic-texas-bond-delay",
   "date": "2026-10-29",
   "status": "watching",
   "rule": "debt",
   "size": "small",
   "text": "Bloomberg reports that a 5 billion to 7 billion dollar bond sale, meant to refinance a Texas data center campus leased to Anthropic, has been put off. The reason given is a state review of the power grid, not weak demand for AI.",
   "why": "Watching, zero points. It is a report by Bloomberg, passed on by other sites, with no bank or company on record. If confirmed it is borrowing under 10 billion dollars, so small.",
   "gains": "Said by Bloomberg, passed on by Crypto Briefing. Who gains when a delay is put down to a state review instead of buyer doubt, and could it be both?",
   "use": "When a bond sale slips, ask who is left holding the loan in the meantime.",
   "sources": [
    {
     "name": "Crypto Briefing",
     "date": "2026-10-29",
     "url": "https://cryptobriefing.com/texas-grid-audit-stalls-5b-7b-bond-sale-for-anthropic-data-center/"
    }
   ],
   "quotes": [
    {
     "source": "Crypto Briefing",
     "quote": "a grid audit by Texas state authorities, rather than investor demand for artificial intelligence, is delaying a significant refinancing effort",
     "url": "https://cryptobriefing.com/texas-grid-audit-stalls-5b-7b-bond-sale-for-anthropic-data-center/"
    },
    {
     "source": "Crypto Briefing",
     "quote": "The delay impacts a planned $5 billion to $7 billion bond sale intended to refinance the campus developed by Nexus Data Centers.",
     "url": "https://cryptobriefing.com/texas-grid-audit-stalls-5b-7b-bond-sale-for-anthropic-data-center/"
    }
   ],
   "date_label": "Oct 29"
  },
  {
   "id": "goog-cloud-q3-rev",
   "date": "2026-10-28",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Alphabet said Google Cloud sales were 30.71 billion dollars in the July to September quarter, against 15.16 billion a year earlier. Its chief executive credited demand for AI infrastructure and AI products.",
   "why": "Context, zero points. Alphabet's chief executive credits AI demand, but the figure is for Google Cloud as a whole, and the paying-customers rule counts sales from AI use. Amazon's and Microsoft's cloud figures are listed at zero for the same reason.",
   "gains": "Said by Alphabet's chief executive in the company's own earnings statement. Who gains when the best-looking number leads the release, and what do the other lines say?",
   "use": "Check whether a headline growth number comes from paying customers or from something else.",
   "sources": [
    {
     "name": "9to5Google",
     "date": "2026-10-28",
     "url": "https://9to5google.com/2026/10/28/alphabet-q3-2026-earnings/"
    }
   ],
   "quotes": [
    {
     "source": "9to5Google",
     "quote": "Cloud reported $30.71 billion (compared to $15.16 billion).",
     "url": "https://9to5google.com/2026/10/28/alphabet-q3-2026-earnings/"
    },
    {
     "source": "9to5Google",
     "quote": "Google Cloud revenues grew 103%, powered by huge demand for our AI infrastructure and AI solutions.",
     "url": "https://9to5google.com/2026/10/28/alphabet-q3-2026-earnings/"
    }
   ],
   "date_label": "Oct 28"
  },
  {
   "id": "skhynix-q3-sales",
   "date": "2026-10-28",
   "status": "scored",
   "rule": "orders",
   "size": "small",
   "text": "SK hynix reported third-quarter sales of 104.6 trillion won and said its AI memory is sold out through 2029.",
   "why": "A memory maker reporting its own sales rising sharply. The source gives won, not dollars, so it is sized small.",
   "gains": "Said by SK hynix, reported by the Korea Times. A maker saying its output is sold out is also a sales message; who else confirms the orders?",
   "use": "Check whether the buyers of these chips report spending that matches.",
   "sources": [
    {
     "name": "Korea Times",
     "date": "2026-10-28",
     "url": "https://www.koreatimes.co.kr/business/companies/20261028/sk-hynix-logs-record-q3-operating-profit-of-628-bil"
    }
   ],
   "quotes": [
    {
     "source": "Korea Times",
     "quote": "Third-quarter revenue rose 328 percent year-on-year",
     "url": "https://www.koreatimes.co.kr/business/companies/20261028/sk-hynix-logs-record-q3-operating-profit-of-628-bil"
    },
    {
     "source": "Korea Times",
     "quote": "third-quarter revenue of 104.6 trillion won",
     "url": "https://www.koreatimes.co.kr/business/companies/20261028/sk-hynix-logs-record-q3-operating-profit-of-628-bil"
    },
    {
     "source": "Korea Times",
     "quote": "SK hynix said its HBM products for AI accelerators and other DRAM products are sold out through 2029",
     "url": "https://www.koreatimes.co.kr/business/companies/20261028/sk-hynix-logs-record-q3-operating-profit-of-628-bil"
    }
   ],
   "date_label": "Oct 28",
   "rail": "SK hynix reported third-quarter sales up from a year earlier and said its AI memory is sold out",
   "event": "skhynix-sales-2026-10"
  },
  {
   "id": "msft-free-cash-q1",
   "date": "2026-10-28",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Microsoft generated 18.6 billion dollars of free cash flow in the quarter to September, about 10 billion more than analysts expected.",
   "why": "Context, zero points. A reading on the lending row that leans away from a pop: free cash flow is the cash a company has left after its capital spending. It is listed at zero because the cash rule wants the accounts to say what paid for the building, and Alphabet's cash result in the same week, which leans the other way, is at zero too.",
   "gains": "Said by Reuters, reporting Microsoft's results. Who gains when one quarter's cash figure is read as proof, and how long can it last if capital spending keeps rising?",
   "use": "Compare this with Alphabet's negative cash flow in the same week to see which company needs outside money.",
   "sources": [
    {
     "name": "Reuters via The Standard",
     "date": "2026-10-29",
     "url": "https://www.thestandard.com.hk/finance/article/346844/Microsofts-cloud-growth-cash-flow-offer-respite-from-AI-spending-fears"
    }
   ],
   "quotes": [
    {
     "source": "Reuters via The Standard",
     "quote": "generated US$18.6 billion in free cash flow in its fiscal first quarter ended September",
     "url": "https://www.thestandard.com.hk/finance/article/346844/Microsofts-cloud-growth-cash-flow-offer-respite-from-AI-spending-fears"
    },
    {
     "source": "Reuters via The Standard",
     "quote": "some US$10 billion more than analysts expected",
     "url": "https://www.thestandard.com.hk/finance/article/346844/Microsofts-cloud-growth-cash-flow-offer-respite-from-AI-spending-fears"
    }
   ],
   "date_label": "Oct 28",
   "short": "Microsoft generated 18.6 billion of free cash flow",
   "signal": "papers",
   "lean": "further"
  },
  {
   "id": "alphabet-fcf-negative",
   "date": "2026-10-28",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Alphabet reported negative free cash flow of 9.07 billion dollars in the third quarter as its capital spending jumped. Reuters says heavy AI spending has squeezed the free cash flow of Alphabet and Meta and raised their reliance on borrowing.",
   "why": "Context, zero points. It is the other side of the Microsoft cash result: spending ran ahead of cash made. Scoring here would need a borrowing event in the company's own name.",
   "gains": "Said by Reuters, reporting Alphabet's results. Who gains when spending outruns cash, and how will the gap be funded?",
   "use": "Look up whether a company's cash flow after building costs is positive or negative before comparing AI spenders.",
   "sources": [
    {
     "name": "Reuters via The Standard",
     "date": "2026-10-29",
     "url": "https://www.thestandard.com.hk/finance/article/346844/Microsofts-cloud-growth-cash-flow-offer-respite-from-AI-spending-fears"
    }
   ],
   "quotes": [
    {
     "source": "Reuters via The Standard",
     "quote": "Alphabet reported negative free cash flow of US$9.07 billion in the third quarter as capital spending jumped",
     "url": "https://www.thestandard.com.hk/finance/article/346844/Microsofts-cloud-growth-cash-flow-offer-respite-from-AI-spending-fears"
    },
    {
     "source": "Reuters via The Standard",
     "quote": "whose heavy AI investments have squeezed free cash flow and increased their reliance on borrowing",
     "url": "https://www.thestandard.com.hk/finance/article/346844/Microsofts-cloud-growth-cash-flow-offer-respite-from-AI-spending-fears"
    }
   ],
   "date_label": "Oct 28",
   "short": "Alphabet's free cash flow was negative 9.07 billion",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "msft-azure-q1",
   "date": "2026-10-28",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Microsoft's Azure cloud business grew 48 percent in the quarter to September, ahead of what analysts expected, Fortune reported.",
   "why": "Context, zero points. The figure is for cloud sales as a whole, and the paying-customers rule counts sales from AI use. It is listed so the cloud picture is complete.",
   "gains": "Said by Microsoft and reported by Fortune. Who gains when one growth number leads the story, and what does Microsoft say is AI and what is not?",
   "use": "Look for how much of cloud growth each company says comes from AI.",
   "sources": [
    {
     "name": "Fortune",
     "date": "2026-10-28",
     "url": "https://fortune.com/2026/10/28/microsofts-cloud-growth-accelerates-and-so-too-does-the-spending/"
    }
   ],
   "quotes": [
    {
     "source": "Fortune",
     "quote": "Its Azure cloud business grew by 48%, ahead of analyst estimates",
     "url": "https://fortune.com/2026/10/28/microsofts-cloud-growth-accelerates-and-so-too-does-the-spending/"
    }
   ],
   "date_label": "Oct 28"
  },
  {
   "id": "goog-capex-unchanged-oct28",
   "date": "2026-10-28",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Alphabet's finance chief said its 2026 capital spending range of 195 to 205 billion dollars is unchanged. She said spending should rise significantly in 2027, with details on the next call.",
   "why": "Context, zero points. A plan left unchanged scores nothing, and the 2027 line is a forecast.",
   "gains": "Said by Alphabet's finance chief on the earnings call. Who gains when this year's number holds while next year's is left open, and when will the figure come?",
   "use": "Mark the Q4 call as the date to check the 2027 number.",
   "sources": [
    {
     "name": "Alphabet call transcript (Singju Post)",
     "date": "2026-10-28",
     "url": "https://singjupost.com/alphabet-googl-q3-2026-earnings-call-transcript/"
    }
   ],
   "quotes": [
    {
     "source": "Alphabet call transcript (Singju Post)",
     "quote": "our full year 2026 CapEx guidance range of $195 billion to $205 billion remain unchanged",
     "url": "https://singjupost.com/alphabet-googl-q3-2026-earnings-call-transcript/"
    },
    {
     "source": "Alphabet call transcript (Singju Post)",
     "quote": "We continue to expect our CapEx to increase significantly in 2027 and we’ll provide further details on our Q4 call.",
     "url": "https://singjupost.com/alphabet-googl-q3-2026-earnings-call-transcript/"
    }
   ],
   "date_label": "Oct 28"
  },
  {
   "id": "ant-paying-revenue",
   "date": "2026-10-26",
   "status": "scored",
   "rule": "revenue",
   "size": "medium",
   "text": "Anthropic's sales were 16.3 billion dollars in the first half of 2026, up about 1,300 percent in a year. It reported a net loss of 80.7 billion dollars for the same half, largely from a rise in the value of bonds that convert into its shares. Its commitments are about 900 billion.",
   "why": "Sales rose by about 15 billion dollars in a year: 10 to 100 billion is medium.",
   "gains": "Said by Anthropic's own filing, written for people deciding whether to buy its shares. Its big cloud suppliers are also its investors and its customers. Who gains from a growth story as the shares go on sale? Are sales growing as fast as the bills?",
   "use": "Hold the numbers side by side yourself: 16.3 billion dollars of sales in half a year, an 80.7 billion loss, and about 900 billion committed.",
   "sources": [
    {
     "name": "NPR",
     "date": "2026-11-19",
     "url": "https://www.stlpr.org/npr/2026-11-19/investors-scramble-for-a-piece-of-ai-giant-anthropic-in-blockbuster-ipo"
    },
    {
     "name": "Reuters (Khaleej Times)",
     "date": "2026-10-26",
     "url": "https://www.khaleejtimes.com/business/anthropics-ipo-filing-shows-explosive-growth-risks-and-staggering-costs"
    },
    {
     "name": "TechCrunch, Nov 19",
     "date": "2026-11-19",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    },
    {
     "name": "Fortune",
     "date": "2026-10-26",
     "url": "https://fortune.com/2026/10/26/anthropics-s1-ipo-reveals-the-inner-workings-of-its-fast-evolving-compute-strategy/"
    }
   ],
   "quotes": [
    {
     "source": "NPR",
     "quote": "revenue in the first half of the year skyrocketed 1,300% at $16.3 billion.",
     "url": "https://www.stlpr.org/npr/2026-11-19/investors-scramble-for-a-piece-of-ai-giant-anthropic-in-blockbuster-ipo"
    },
    {
     "source": "Reuters (Khaleej Times)",
     "quote": "Revenue in this period stood at about $16.3 billion.",
     "url": "https://www.khaleejtimes.com/business/anthropics-ipo-filing-shows-explosive-growth-risks-and-staggering-costs"
    },
    {
     "source": "Reuters (Khaleej Times)",
     "quote": "net loss in the first half of 2026 widened sharply to $80.7 billion.",
     "url": "https://www.khaleejtimes.com/business/anthropics-ipo-filing-shows-explosive-growth-risks-and-staggering-costs"
    },
    {
     "source": "TechCrunch, Nov 19",
     "quote": "Anthropic has already committed to spend $900 billion, primarily for compute and infrastructure, according to a regulatory filing.",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    },
    {
     "source": "Fortune",
     "quote": "They're also customers of Anthropic's products, using its models.",
     "url": "https://fortune.com/2026/10/26/anthropics-s1-ipo-reveals-the-inner-workings-of-its-fast-evolving-compute-strategy/",
     "about": "Amazon, Google and Microsoft"
    },
    {
     "source": "Reuters (Khaleej Times)",
     "quote": "largely due to a rise in the fair value of bonds convertible into company's shares.",
     "url": "https://www.khaleejtimes.com/business/anthropics-ipo-filing-shows-explosive-growth-risks-and-staggering-costs"
    },
    {
     "source": "TechCrunch, Nov 19",
     "quote": "These companies are not just investors; they're also Anthropic's biggest suppliers.",
     "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
    }
   ],
   "rail": "Anthropic's half-year sales were 16.3 billion dollars, up about 1,300 percent, with about 900 billion committed",
   "derived": [
    "about 15 billion rise: 16.3 billion is 14 times the year before, so the rise is about 15.1"
   ],
   "event": "anthropic-h1-sales-2026-10"
  },
  {
   "id": "meta-fall-after-q3",
   "date": "2026-10-22",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Meta's third-quarter sales rose 26 percent to 64.60 billion dollars, above what analysts expected. The next day its shares were trading down 7.22 percent, after it outlined plans to spend more on infrastructure for AI.",
   "why": "Context, zero points. A fall after results that beat on sales would fit the falls-on-good-news rule, but the price on file is a quote taken during the day, not a close, and the source says the profit figure could not be clearly compared with forecasts. When it is not clear, it waits at zero.",
   "gains": "Said by AP and Business Today. Who gains from reading a share fall as a verdict on AI spending, and what did the profit line show?",
   "use": "Look for the closing price and the profit line before reading a share price as one message.",
   "sources": [
    {
     "name": "AP via News4Jax",
     "date": "2026-10-21",
     "url": "https://www.news4jax.com/business/2026/10/21/meta-q3-revenue-tops-estimates-and-zuckerberg-says-muse-accounts-have-topped-10-million/"
    },
    {
     "name": "Business Today",
     "date": "2026-10-22",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22"
    }
   ],
   "quotes": [
    {
     "source": "AP via News4Jax",
     "quote": "above the $63.34 billion expected by Wall Street analysts.",
     "url": "https://www.news4jax.com/business/2026/10/21/meta-q3-revenue-tops-estimates-and-zuckerberg-says-muse-accounts-have-topped-10-million/",
     "about": "Meta's third-quarter sales"
    },
    {
     "source": "Business Today",
     "quote": "Meta's third-quarter revenue increased 26% year-on-year to $64.60 billion, exceeding analysts' expectations of $63.37 billion.",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22"
    },
    {
     "source": "Business Today",
     "quote": "Meta shares were trading at $647.16, down $50.36, or 7.22%",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22"
    },
    {
     "source": "Business Today",
     "quote": "The decline came after the company outlined plans to increase investment in infrastructure to support its AI ambitions.",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22"
    },
    {
     "source": "Business Today",
     "quote": "was not clearly comparable with the $5.75 forecast cited for the quarter",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22",
     "about": "Meta's earnings per share"
    }
   ],
   "date_label": "Oct 22",
   "kind": "drop",
   "short": "Meta traded down 7.22 percent the day after results"
  },
  {
   "id": "junk-bonds-37b",
   "date": "2026-10-22",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Data center builders and new cloud firms have raised 37 billion dollars in junk bonds this year. Average yields on these bonds climbed to nearly 10 percent in a single week.",
   "why": "Context, zero points. A running total and a yield move, from a Forbes analysis summarised by Dealroom.",
   "gains": "Said by Dealroom, summarising Forbes. Who gains when junk-rated borrowers fund the build-out, and what do higher yields say about who will lend next?",
   "use": "Keep the year's total on hand and see whether it keeps growing or stalls.",
   "sources": [
    {
     "name": "Dealroom",
     "date": "2026-10-22",
     "url": "https://dealroom.co/news/165143-data-center-junk-bonds-hit-37b-in-2026-nearly-half-of-all-issuance/"
    }
   ],
   "quotes": [
    {
     "source": "Dealroom",
     "quote": "raised $37 billion in junk bonds to finance US data centers this year",
     "url": "https://dealroom.co/news/165143-data-center-junk-bonds-hit-37b-in-2026-nearly-half-of-all-issuance/"
    },
    {
     "source": "Dealroom",
     "quote": "Average yields on these bonds climbed to nearly 10% in a single week",
     "url": "https://dealroom.co/news/165143-data-center-junk-bonds-hit-37b-in-2026-nearly-half-of-all-issuance/"
    }
   ],
   "date_label": "Oct 22",
   "short": "Data center junk bonds reached 37 billion this year",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "meta-cds-record-oct22",
   "date": "2026-10-22",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The cost of insuring Meta's debt against default touched an all-time high on a Thursday, the day it raised the low end of its yearly spending forecast. Five-year contracts widened 7.6 basis points to 114.79.",
   "why": "Context, zero points. A price for insuring debt is a reading, not a company event. It leans closer because lenders asked for more to carry Meta's debt that day.",
   "gains": "Said by Reuters, citing Markit data. A price for insurance is set by traders who may hold positions of their own. Who gains if the number is read as a warning, and what did the same contract cost a month earlier?",
   "use": "Look up the same reading a week later. One day's high is a starting point, not a trend.",
   "sources": [
    {
     "name": "Reuters (via WHTC)",
     "date": "2026-10-22",
     "url": "https://whtc.com/2026/10/22/metas-credit-risk-indicator-jumps-to-record-high-after-results/"
    }
   ],
   "quotes": [
    {
     "source": "Reuters (via WHTC)",
     "quote": "The cost of insuring Meta Platforms’ debt against default touched an all-time high on Thursday",
     "url": "https://whtc.com/2026/10/22/metas-credit-risk-indicator-jumps-to-record-high-after-results/"
    },
    {
     "source": "Reuters (via WHTC)",
     "quote": "five-year credit default swaps widened 7.6 basis points to a record high of 114.79 bps",
     "url": "https://whtc.com/2026/10/22/metas-credit-risk-indicator-jumps-to-record-high-after-results/"
    }
   ],
   "date_label": "Oct 22",
   "short": "Cost of insuring Meta's debt hit a record, 114.79 points",
   "signal": "insure",
   "lean": "closer"
  },
  {
   "id": "meta-capex-low-end",
   "date": "2026-10-21",
   "status": "scored",
   "rule": "kept",
   "size": "small",
   "text": "Meta lifted the bottom of its yearly spending range to 135 billion dollars from 130 billion, leaving the top at 145 billion.",
   "why": "A company raising its spending plan in its own results, and the source ties the spending to AI. The raise is 5 billion on the low end, so small.",
   "gains": "Said by Meta, reported by Business Today. Who gains from a plan that moves up at the bottom only, and what does the top number say?",
   "use": "When a range moves, note which end moved.",
   "sources": [
    {
     "name": "Business Today",
     "date": "2026-10-22",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22"
    }
   ],
   "quotes": [
    {
     "source": "Business Today",
     "quote": "Meta expects full-year capital expenditure (capex) of $135 billion to $145 billion, raising the lower end of its earlier forecast from $130 billion while retaining the upper limit.",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22"
    },
    {
     "source": "Business Today",
     "quote": "the company outlined plans to increase investment in infrastructure to support its AI ambitions.",
     "url": "https://businesstoday.in/markets/stocks/story/meta-shares-slide-7-as-ai-spending-push-drives-capex-higher-free-cash-flow-turns-negative-563170-2026-10-22",
     "about": "Meta's spending plans"
    }
   ],
   "date_label": "Oct 21",
   "rail": "Meta raised the low end of its yearly capital spending range",
   "event": "meta-capex-raise-2026-10"
  },
  {
   "id": "elice-debut-oct20",
   "date": "2026-10-20",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Elice, a South Korean AI cloud firm, fell 32 percent on its first day on the Kosdaq market, even though its sale was oversubscribed 408 times by retail buyers. It had priced at the top of its range.",
   "why": "Context, zero points. A first-day price move does not score. It is a new AI listing ending its first day well under its asking price.",
   "gains": "Said by Crypto Briefing, citing Bloomberg. When almost every order is filled with demand many times the supply, who gains from selling into the first day's price?",
   "use": "Heavy demand for a sale does not tell you how the shares will trade afterwards.",
   "sources": [
    {
     "name": "Crypto Briefing",
     "date": "2026-10-20",
     "url": "https://cryptobriefing.com/elice-ipo-slump-ai-valuations/"
    }
   ],
   "quotes": [
    {
     "source": "Crypto Briefing",
     "quote": "Shares of South Korean AI infrastructure firm Elice Group plunged 32% in their Kosdaq debut on October 20",
     "url": "https://cryptobriefing.com/elice-ipo-slump-ai-valuations/"
    },
    {
     "source": "Crypto Briefing",
     "quote": "The retail subscription was 408 times oversubscribed",
     "url": "https://cryptobriefing.com/elice-ipo-slump-ai-valuations/"
    },
    {
     "source": "Crypto Briefing",
     "quote": "Elice priced its shares at 90,500 won, the top of its indicative range",
     "url": "https://cryptobriefing.com/elice-ipo-slump-ai-valuations/"
    }
   ],
   "date_label": "Oct 20",
   "kind": "drop",
   "short": "Elice fell 32 percent on debut despite huge demand"
  },
  {
   "id": "oct15-ai-chip-slide",
   "date": "2026-10-15",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Twenty of the most valuable AI and chip stocks worldwide lost more than 1 trillion dollars of value in the week to October 15. CNBC tied it to worry that higher borrowing costs could weigh on AI spending. The Nasdaq ended that week down 4.5 percent.",
   "why": "Context, zero points. A price move tied to a worry about the cost of borrowing. It is listed to show the slide was already under way in the middle of October.",
   "gains": "Said by CNBC's markets desk. The reason it gave is a worry about borrowing costs. Who gains when a fall is pinned on one cause, and what was actually cancelled that week?",
   "use": "Note the date: this fall was reported on October 15.",
   "sources": [
    {
     "name": "CNBC",
     "date": "2026-10-15",
     "url": "https://www.cnbc.com/2026/10/15/sk-hynix-samsung-softbank-stocks-asia-tech-rout-ai-funding-worries.html"
    },
    {
     "name": "News services (La Nacion)",
     "date": "2026-10-16",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-10162026-nid16102026/"
    }
   ],
   "quotes": [
    {
     "source": "CNBC",
     "quote": "Collectively, 20 of the most valuable global AI and semiconductor stocks have shed more than $1 trillion in value so far this week.",
     "url": "https://www.cnbc.com/2026/10/15/sk-hynix-samsung-softbank-stocks-asia-tech-rout-ai-funding-worries.html"
    },
    {
     "source": "CNBC",
     "quote": "investors grew increasingly concerned that higher borrowing costs could weigh on the massive capital spending",
     "url": "https://www.cnbc.com/2026/10/15/sk-hynix-samsung-softbank-stocks-asia-tech-rout-ai-funding-worries.html"
    },
    {
     "source": "CNBC",
     "quote": "Updated Thu, Oct 15 2026 4:33 PM EDT",
     "url": "https://www.cnbc.com/2026/10/15/sk-hynix-samsung-softbank-stocks-asia-tech-rout-ai-funding-worries.html"
    },
    {
     "source": "News services (La Nacion)",
     "quote": "The Nasdaq is down 1,226.14 points, or 4.5%.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-10162026-nid16102026/",
     "about": "the week ending October 16"
    },
    {
     "source": "News services (La Nacion)",
     "quote": "Both posted their worst week since June.",
     "url": "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-10162026-nid16102026/",
     "about": "the S&P 500 and the Nasdaq"
    }
   ],
   "kind": "drop",
   "short": "20 AI and chip stocks lost over 1 trillion dollars in a week"
  },
  {
   "id": "insure-cost-oct15",
   "date": "2026-10-15",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The yearly cost of insuring Oracle's debt for five years stood at 288 basis points, up from 260 a week earlier. SoftBank's rose 24 basis points to 424, and CoreWeave's passed 1,000.",
   "why": "Context, zero points. The cost of insuring a debt is a price, and prices do not score. It is read on the cost-to-insure row, leaning closer.",
   "gains": "Said by Reuters from S&P and LSEG data. A basis point is one hundredth of a percent. Who sells this insurance, who buys it, and does a higher price mean more risk or just more buyers?",
   "use": "This is what lenders pay to insure a debt against default. Compare it with the rating: when the two disagree, ask which one moved first.",
   "sources": [
    {
     "name": "Reuters (Business Day)",
     "date": "2026-10-15",
     "url": "https://www.businessday.co.za/world/international-companies/2026-10-15-ai-credit-fears-push-tech-default-insurance-to-record-highs/"
    }
   ],
   "quotes": [
    {
     "source": "Reuters (Business Day)",
     "quote": "Five-year credit default swap spreads at cloud computing giant Oracle were quoted at 288 basis points on Thursday by S&P Global Market Intelligence.",
     "url": "https://www.businessday.co.za/world/international-companies/2026-10-15-ai-credit-fears-push-tech-default-insurance-to-record-highs/"
    },
    {
     "source": "Reuters (Business Day)",
     "quote": "up from 260 bps a week earlier",
     "url": "https://www.businessday.co.za/world/international-companies/2026-10-15-ai-credit-fears-push-tech-default-insurance-to-record-highs/"
    },
    {
     "source": "Reuters (Business Day)",
     "quote": "Five-year spreads for AI investor SoftBank widened 24 bps to 424 bps.",
     "url": "https://www.businessday.co.za/world/international-companies/2026-10-15-ai-credit-fears-push-tech-default-insurance-to-record-highs/"
    },
    {
     "source": "Reuters (Business Day)",
     "quote": "Data-centre operator CoreWeave's CDS has blown out past 1,000 bps, S&P LSEG data showed.",
     "url": "https://www.businessday.co.za/world/international-companies/2026-10-15-ai-credit-fears-push-tech-default-insurance-to-record-highs/"
    }
   ],
   "short": "Oracle debt insurance at 288 basis points, up from 260 in a week",
   "signal": "insure",
   "lean": "closer"
  },
  {
   "id": "cerebras-below-ipo",
   "date": "2026-10-10",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Cerebras shares traded between 164 and 177 dollars in early October, below the 185 dollars they were first sold at. The company's lockup, the period when early holders may not sell, ended on October 1.",
   "why": "Context, zero points. A share price move does not score. It shows a big AI listing trading under its asking price five months on.",
   "gains": "Said by Crypto Briefing, a news site. Who gains when early holders can sell after a lockup ends, and does that explain the move or only coincide with it?",
   "use": "Check when a new listing's lockup ends. More shares can come to market that day.",
   "sources": [
    {
     "name": "Crypto Briefing",
     "date": "2026-10-10",
     "url": "https://cryptobriefing.com/cerebras-shares-fall-below-ipo-price/"
    }
   ],
   "quotes": [
    {
     "source": "Crypto Briefing",
     "quote": "By early October 2026, shares were changing hands between $164 and $177",
     "url": "https://cryptobriefing.com/cerebras-shares-fall-below-ipo-price/"
    },
    {
     "source": "Crypto Briefing",
     "quote": "The AI chip designer priced its initial public offering at $185 per share.",
     "url": "https://cryptobriefing.com/cerebras-shares-fall-below-ipo-price/"
    },
    {
     "source": "Crypto Briefing",
     "quote": "The company’s lockup period expired on October 1, 2026",
     "url": "https://cryptobriefing.com/cerebras-shares-fall-below-ipo-price/"
    }
   ],
   "date_label": "Oct 10",
   "kind": "drop",
   "short": "Cerebras traded under its 185 dollar IPO price"
  },
  {
   "id": "firmus-ipo-pulled",
   "date": "2026-10-09",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia-backed Firmus pulled its planned Australian stock market listing after failing to win enough investor support. It had sought as much as 5.5 billion dollars at a 30 billion dollar value, nearly triple its value less than three months earlier.",
   "why": "Context, zero points. A canceled listing is not a spending cut or missed payment, so no rule fits. It shows a data center firm unable to raise money at its asking value.",
   "gains": "Said by the Daily Tribune, a Philippine news outlet. The firm blamed market conditions. Who gains from a listing at triple the last value, and what did buyers see that sellers did not?",
   "use": "Compare what a company asked for with what the market would give, and note the gap.",
   "sources": [
    {
     "name": "Daily Tribune",
     "date": "2026-10-09",
     "url": "https://tribune.net.ph/2026/10/09/nvidia-backed-firmus-scraps-55-b-ipo"
    }
   ],
   "quotes": [
    {
     "source": "Daily Tribune",
     "quote": "Firmus had sought to raise as much as $5.5 billion in an initial public offering (IPO) that would have valued the company at $30 billion, nearly triple its $10.5-billion valuation less than three months earlier.",
     "url": "https://tribune.net.ph/2026/10/09/nvidia-backed-firmus-scraps-55-b-ipo"
    },
    {
     "source": "Daily Tribune",
     "quote": "The proposed listing struggled to attract firm commitments from institutional investors",
     "url": "https://tribune.net.ph/2026/10/09/nvidia-backed-firmus-scraps-55-b-ipo"
    }
   ],
   "date_label": "Oct 9"
  },
  {
   "id": "oct6-record-close",
   "date": "2026-10-06",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The S&P 500 and the Nasdaq both hit record highs on this day. It is the peak the later slide is measured from.",
   "why": "Context, zero points. Share prices alone do not score. It marks the top that the later falls on this page are measured from.",
   "gains": "Said by Reuters, a news wire, via Khaleej Times. Who gains from calling a record, and what was priced in at the top?",
   "use": "Keep this date. Later falls on the meter are measured from it.",
   "sources": [
    {
     "name": "Khaleej Times (Reuters)",
     "date": "2026-10-06",
     "url": "https://www.khaleejtimes.com/business/sp-500-nasdaq-hit-record-highs-as-treasury-yields-stall-oil-slips"
    }
   ],
   "quotes": [
    {
     "source": "Khaleej Times (Reuters)",
     "quote": "The benchmark S&P 500 and the Nasdaq hit record highs on Tuesday",
     "url": "https://www.khaleejtimes.com/business/sp-500-nasdaq-hit-record-highs-as-treasury-yields-stall-oil-slips"
    }
   ],
   "date_label": "Oct 6",
   "kind": "bounce",
   "short": "S&P 500 and Nasdaq hit record highs"
  },
  {
   "id": "boe-fpc-sep30",
   "date": "2026-09-30",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The Bank of England's Financial Policy Committee said AI investment is increasingly being funded through debt and private credit. The same report put global AI-related debt issuance above 450 billion dollars.",
   "why": "Context, zero points. A central bank warning is an official's remark, not an event that moves the score.",
   "gains": "Said by the Bank of England committee, reported by an Indian news agency. Who gains when a regulator names a risk before it shows up, and what would it take for the warning to be wrong?",
   "use": "Read the central bank's own wording and note which risks it lists and which it does not.",
   "sources": [
    {
     "name": "NewKerala",
     "date": "2026-09-30",
     "url": "https://www.newkerala.com/news/a/bank-england-says-ai-investment-boom-raises-financial-448.htm"
    }
   ],
   "quotes": [
    {
     "source": "NewKerala",
     "quote": "increasingly being funded through debt and private credit",
     "url": "https://www.newkerala.com/news/a/bank-england-says-ai-investment-boom-raises-financial-448.htm"
    },
    {
     "source": "NewKerala",
     "quote": "Global AI-related debt issuance has already topped USD 450 billion",
     "url": "https://www.newkerala.com/news/a/bank-england-says-ai-investment-boom-raises-financial-448.htm"
    }
   ],
   "date_label": "Sep 30",
   "short": "Bank of England: AI increasingly funded by debt",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "micron-fy26-q4-sales",
   "date": "2026-09-30",
   "status": "scored",
   "rule": "orders",
   "size": "medium",
   "text": "Micron reported fourth-quarter sales of 54.23 billion dollars, against 11.32 billion a year earlier.",
   "why": "A chip maker reporting sales growth in its own results. The dollar rise puts it at medium (see the arithmetic).",
   "gains": "Said by Micron, as relayed by Unite.AI. Who gains when a memory shortage lifts prices as well as volume, and how long does that last?",
   "use": "Notice that sales can rise from price as well as from more chips sold.",
   "sources": [
    {
     "name": "Unite.AI",
     "date": "2026-09-30",
     "url": "https://www.unite.ai/micron-posts-record-revenue-and-earnings-for-fiscal-2026/"
    }
   ],
   "quotes": [
    {
     "source": "Unite.AI",
     "quote": "Fourth-quarter revenue rose from $41.46 billion in the prior quarter and $11.32 billion in the same period a year earlier.",
     "url": "https://www.unite.ai/micron-posts-record-revenue-and-earnings-for-fiscal-2026/"
    },
    {
     "source": "Unite.AI",
     "quote": "posting quarterly revenue of $54.23 billion",
     "url": "https://www.unite.ai/micron-posts-record-revenue-and-earnings-for-fiscal-2026/"
    }
   ],
   "date_label": "Sep 30",
   "rail": "Micron reported quarterly sales several times larger than a year earlier",
   "derived": [
    "54.23 billion minus 11.32 billion is 42.91 billion dollars, between 10 and 100 billion, so medium."
   ],
   "event": "micron-sales-2026-09"
  },
  {
   "id": "oracle-delay-notice",
   "date": "2026-09-24",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Oracle sent a force majeure notice, a formal claim that events outside its control affect a contract, on a New Mexico data center campus partly funded by an 18 billion dollar loan from about 20 banks. Bloomberg reported the notice is not a default. Oracle said such notices are commonplace and do not by themselves establish a delay.",
   "why": "Context, zero points. The notice is not a default on the loan, so the missed-payment rule does not apply. It is read on the borrowers row because it concerns a bank-funded site, and it leans neither way.",
   "gains": "Said by Bloomberg, with statements from Oracle and its partner Blue Owl. Oracle says the notice does not by itself establish a delay, and Blue Owl says the financial commitments are unchanged. Who gains from that reading, and what would a real delay look like in the next filing?",
   "use": "A notice is not a default. Watch for the next step: a changed date, a changed payment, or nothing at all.",
   "sources": [
    {
     "name": "Bloomberg (Insurance Journal)",
     "date": "2026-09-25",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm"
    }
   ],
   "quotes": [
    {
     "source": "Bloomberg (Insurance Journal)",
     "quote": "Oracle Cites 'Force Majeure' on Controversial New Mexico Data Center",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm"
    },
    {
     "source": "Bloomberg (Insurance Journal)",
     "quote": "A group of about 20 banks provided an $18 billion loan to help fund the construction of the data center campus",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm"
    },
    {
     "source": "Bloomberg (Insurance Journal)",
     "quote": "The notice from Oracle does not constitute an event of default on the financing agreement",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm"
    },
    {
     "source": "Bloomberg (Insurance Journal)",
     "quote": "Force-majeure notices are commonplace in developments of this scale and are often used to preserve contractual rights,",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm",
     "about": "a spokesperson for Oracle"
    },
    {
     "source": "Bloomberg (Insurance Journal)",
     "quote": "They do not, by themselves, establish a project delay or change delivery expectations.",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm",
     "about": "the same Oracle spokesperson, on such notices"
    },
    {
     "source": "Bloomberg (Insurance Journal)",
     "quote": "This notice does not change the financial commitments to this multiyear project,",
     "url": "https://www.insurancejournal.com/news/west/2026/09/25/886812.htm",
     "about": "a Blue Owl spokesman"
    }
   ],
   "date_label": "Sep 24",
   "short": "Oracle sent a force majeure notice on an 18 billion loan site",
   "signal": "paying",
   "lean": "none"
  },
  {
   "id": "sep17-tech-rally",
   "date": "2026-09-17",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The Nasdaq Composite gained 1.69 percent in a broad rally led by tech, with all three major indexes closing sharply higher.",
   "why": "Context, zero points. A rise in index prices, not tied to any company's results.",
   "gains": "Said by a regional paper carrying wire copy. Who gains when one good day gets noticed, and what is the trend around it?",
   "use": "Set a good day beside the bad ones. Both are part of the picture.",
   "sources": [
    {
     "name": "Wire copy (Tribune)",
     "date": "2026-09-18",
     "url": "https://www.newstribune.com/news/2026/sep/18/tech-leads-wall-street-to-higher-close-as-oil/"
    }
   ],
   "quotes": [
    {
     "source": "Wire copy (Tribune)",
     "quote": "All three major US stock indexes closed sharply higher, driven by a broad, tech-led rally that put the Nasdaq out front.",
     "url": "https://www.newstribune.com/news/2026/sep/18/tech-leads-wall-street-to-higher-close-as-oil/"
    },
    {
     "source": "Wire copy (Tribune)",
     "quote": "the Nasdaq Composite gained 439.87 points, or 1.69 percent, to 26,418.30",
     "url": "https://www.newstribune.com/news/2026/sep/18/tech-leads-wall-street-to-higher-close-as-oil/"
    }
   ],
   "date_label": "Sep 17",
   "kind": "bounce",
   "short": "Nasdaq rose 1.69 percent in a tech-led rally"
  },
  {
   "id": "orcl-q1-oci-sales",
   "date": "2026-09-10",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Oracle said its cloud infrastructure sales rose 121 percent to 7.4 billion dollars in its fiscal first quarter. It said it booked more than 30 billion dollars of new AI cloud contracts, lifting its contracted future sales to 664 billion dollars.",
   "why": "Context, zero points. The figure is for Oracle's cloud infrastructure sales as a whole, and the paying-customers rule counts sales from AI use. Signed contracts are future sales, not reported sales.",
   "gains": "Said by Oracle in its own release. Who gains when contracted future sales are placed next to quarterly sales, and how much of that backlog turns into cash?",
   "use": "Keep reported sales and signed contracts in separate columns when you read these results.",
   "sources": [
    {
     "name": "Oracle release",
     "date": "2026-09-10",
     "url": "https://www.oracle.com/tw/news/announcement/q1fy27-earnings-release-2026-09-10/"
    }
   ],
   "quotes": [
    {
     "source": "Oracle release",
     "quote": "Q1 Cloud Infra (IaaS) Revenue up 121% in USD and up 120% in constant currency to $7.4 billion.",
     "url": "https://www.oracle.com/tw/news/announcement/q1fy27-earnings-release-2026-09-10/"
    },
    {
     "source": "Oracle release",
     "quote": "Oracle booked more than $30 billion of additional AI cloud contracts in Q1 increasing its RPO to $664 billion.",
     "url": "https://www.oracle.com/tw/news/announcement/q1fy27-earnings-release-2026-09-10/"
    }
   ],
   "date_label": "Sep 10"
  },
  {
   "id": "bis-head-ai-debt-sep10",
   "date": "2026-09-10",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The head of the Bank for International Settlements said the AI boom is increasingly paid for with debt and private credit instead of company earnings, and that much of the funding is opaque and interconnected.",
   "why": "Context, zero points. An official's remark is a warning, not an event that moves a rule. It leans closer because it flags the funding style, not the technology.",
   "gains": "Said by Pablo Hernandez de Cos of the BIS, reported by Reuters and Bloomberg. Who gains if a warning is early, and what would count as proof it was right or wrong?",
   "use": "Notice the word private. Debt outside public markets is harder for anyone, including you, to see.",
   "sources": [
    {
     "name": "Reuters (via The Star)",
     "date": "2026-09-10",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/09/10/ai-boom-poses-new-financial-stability-risks-bis-head-says"
    },
    {
     "name": "Insurance Journal (Bloomberg)",
     "date": "2026-09-11",
     "url": "https://www.insurancejournal.com/news/international/2026/09/11/884738.htm"
    }
   ],
   "quotes": [
    {
     "source": "Reuters (via The Star)",
     "quote": "the AI boom was increasingly being financed through debt and private credit rather than corporate earnings",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/09/10/ai-boom-poses-new-financial-stability-risks-bis-head-says"
    },
    {
     "source": "Reuters (via The Star)",
     "quote": "much of the funding remained \"opaque and interconnected\"",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/09/10/ai-boom-poses-new-financial-stability-risks-bis-head-says"
    },
    {
     "source": "Insurance Journal (Bloomberg)",
     "quote": "capital spending outpaces cashflow at such companies, prompting them to rely on debt and private credit.",
     "url": "https://www.insurancejournal.com/news/international/2026/09/11/884738.htm"
    }
   ],
   "date_label": "Sep 10",
   "short": "BIS head: AI boom is leaning on debt and private credit",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "avgo-ai-chip-sales",
   "date": "2026-09-02",
   "status": "scored",
   "rule": "orders",
   "size": "medium",
   "text": "Broadcom said its AI chip sales were 16.7 billion dollars in its latest quarter, up 221 percent from a year earlier.",
   "why": "A chip maker reporting its own AI chip sales rising. Working back from the stated growth, the rise is about 11.5 billion dollars, so medium.",
   "gains": "Said by Broadcom, through the Xinhua news agency. Who gains when a chip maker's own sales are read as proof of its customers' demand, and are the customers' own sales growing as fast?",
   "use": "Compare a chip maker's growth with the sales its customers report.",
   "sources": [
    {
     "name": "The Star (Xinhua)",
     "date": "2026-09-03",
     "url": "https://www.thestar.com.my/news/world/2026/09/03/broadcom-q3-revenue-jumps-86-pct-on-strong-ai-demand"
    }
   ],
   "quotes": [
    {
     "source": "The Star (Xinhua)",
     "quote": "AI semiconductor revenue surged 221 percent year on year and 54 percent quarter on quarter to 16.7 billion dollars.",
     "url": "https://www.thestar.com.my/news/world/2026/09/03/broadcom-q3-revenue-jumps-86-pct-on-strong-ai-demand"
    }
   ],
   "date_label": "Sep 2",
   "rail": "Broadcom's AI chip sales more than tripled from a year earlier",
   "derived": [
    "16.7 billion divided by 3.21 is about 5.2 billion a year earlier; 16.7 minus 5.2 is about 11.5 billion, between 10 and 100 billion."
   ],
   "event": "broadcom-ai-chips-2026-09"
  },
  {
   "id": "nvda-aug27-jump",
   "date": "2026-08-27",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia's share price rose 8.74 percent the day after it released its results.",
   "why": "Context, zero points. A price move, and it came right after the company's own report.",
   "gains": "Said by Herald Corp, a Korean business paper. Who gains when a price jump is read as proof, and what does the next quarter show?",
   "use": "Compare this rise with the later fall from the record. Both are real days.",
   "sources": [
    {
     "name": "Herald Corp",
     "date": "2026-08-28",
     "url": "https://biz.heraldcorp.com/article/10855133"
    }
   ],
   "quotes": [
    {
     "source": "Herald Corp",
     "quote": "Nvidia's share price surged 8.74% on Thursday (local time), the day after the company released its latest earnings",
     "url": "https://biz.heraldcorp.com/article/10855133"
    }
   ],
   "date_label": "Aug 27",
   "kind": "bounce",
   "short": "Nvidia rose 8.74 percent the day after its results"
  },
  {
   "id": "nvda-q2-fy27-sales",
   "date": "2026-08-26",
   "status": "scored",
   "rule": "orders",
   "size": "medium",
   "text": "Nvidia reported sales of 96.2 billion dollars for its second quarter, up 106 percent from a year earlier. Data center sales were 89.0 billion dollars, up 117 percent.",
   "why": "A chip maker reporting sales growth in its own name. The dollar rise is in the tens of billions, so medium (see the arithmetic).",
   "gains": "Said by Nvidia in its own results release. Who gains when the release also carries the line that compute is revenue, and who is buying the chips?",
   "use": "Set this August quarter beside the November one to see the pace of the rise.",
   "sources": [
    {
     "name": "Nvidia release",
     "date": "2026-08-26",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027"
    }
   ],
   "quotes": [
    {
     "source": "Nvidia release",
     "quote": "Revenue of $96.2 billion, up 106% from a year ago",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027"
    },
    {
     "source": "Nvidia release",
     "quote": "Data Center revenue of $89.0 billion, up 117% from a year ago",
     "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027"
    }
   ],
   "date_label": "Aug 26",
   "rail": "Nvidia reported sales up 106 percent from a year earlier",
   "derived": [
    "96.2 billion divided by 2.06 is about 46.7 billion a year earlier; the rise is about 49.5 billion dollars, between 10 and 100 billion, so medium."
   ],
   "event": "nvidia-sales-2026-08"
  },
  {
   "id": "nvda-ohio-guarantee-aug",
   "date": "2026-08-17",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia agreed to stand behind up to 105 billion dollars for an OpenAI data center campus in Ohio, and is to be the exclusive chip supplier for its first phase. It had been considering a guarantee of roughly 250 billion dollars.",
   "why": "Context, zero points. The source gives a ceiling (up to), not a measured amount, and the meter sizes a fact on the change it reports. It is read on the supplier row, the same way as the guarantee total disclosed in November.",
   "gains": "Said by Fortune, citing Nvidia's own filing. Who gains when a chip maker's promise makes its customer's project easier to fund, and who carries the risk if the customer cannot pay?",
   "use": "When a supplier backs a customer's debt, ask how much of the supplier's sales depend on that customer.",
   "sources": [
    {
     "name": "Fortune",
     "date": "2026-08-18",
     "url": "https://fortune.com/2026/08/18/openai-data-center-deal-with-nvidia-comes-in-145-billion-lower-than-reportedsignaling-concerns-of-artificial-demand-for-chips/"
    }
   ],
   "quotes": [
    {
     "source": "Fortune",
     "quote": "Nvidia is guaranteeing up to $105 billion for OpenAI’s planned data center campus in Pike County, Ohio",
     "url": "https://fortune.com/2026/08/18/openai-data-center-deal-with-nvidia-comes-in-145-billion-lower-than-reportedsignaling-concerns-of-artificial-demand-for-chips/"
    },
    {
     "source": "Fortune",
     "quote": "Nvidia will be the exclusive chip provider for the initial phase.",
     "url": "https://fortune.com/2026/08/18/openai-data-center-deal-with-nvidia-comes-in-145-billion-lower-than-reportedsignaling-concerns-of-artificial-demand-for-chips/"
    },
    {
     "source": "Fortune",
     "quote": "coming in lower than the roughly $250 billion guarantee it was considering",
     "url": "https://fortune.com/2026/08/18/openai-data-center-deal-with-nvidia-comes-in-145-billion-lower-than-reportedsignaling-concerns-of-artificial-demand-for-chips/"
    }
   ],
   "date_label": "Aug 17",
   "short": "Nvidia to back up to 105 billion for OpenAI Ohio site",
   "signal": "vendor",
   "lean": "closer"
  },
  {
   "id": "aws-calvert-withdrawn",
   "date": "2026-08-04",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Amazon Web Services withdrew its application for a data center campus beside a nuclear plant in Calvert County, Maryland. A spokesperson said Amazon decided not to go ahead with the site at this time, and the county moved toward a six-month pause on new projects.",
   "why": "Context, zero points. The source calls it a proposed site, so it is not clear that a spending commitment was cancelled, and when it is not clear it waits at zero. Listed because a cloud company stepped back from a site in its own spokesperson's words.",
   "gains": "Said by an Amazon spokesperson to Data Center Knowledge. Who gains when a pull-back is described as priorities instead of local pushback, and could it be both?",
   "use": "One site dropped is not a trend. Look for whether the same company announces a new site elsewhere.",
   "sources": [
    {
     "name": "Data Center Knowledge",
     "date": "2026-08-11",
     "url": "https://www.datacenterknowledge.com/data-center-site-selection/aws-data-center-withdrawal-signals-growing-political-community-challenges"
    }
   ],
   "quotes": [
    {
     "source": "Data Center Knowledge",
     "quote": "After careful evaluation, Amazon has decided not to move forward with the proposed site development in Calvert County at this time",
     "url": "https://www.datacenterknowledge.com/data-center-site-selection/aws-data-center-withdrawal-signals-growing-political-community-challenges"
    },
    {
     "source": "Data Center Knowledge",
     "quote": "Amazon Web Services (AWS) has withdrawn its application for a proposed 2.5 million-square-foot data center project in Calvert County, Maryland.",
     "url": "https://www.datacenterknowledge.com/data-center-site-selection/aws-data-center-withdrawal-signals-growing-political-community-challenges"
    },
    {
     "source": "Data Center Knowledge",
     "quote": "Calvert County officials are now preparing to consider a six-month moratorium on new data center projects.",
     "url": "https://www.datacenterknowledge.com/data-center-site-selection/aws-data-center-withdrawal-signals-growing-political-community-challenges"
    }
   ],
   "date_label": "Aug 4"
  },
  {
   "id": "meta-bond-weak-demand",
   "date": "2026-08-03",
   "status": "scored",
   "rule": "debt",
   "size": "medium",
   "text": "A 12.5 billion dollar bond for a Meta data center venture with BlackRock drew only 20 billion of orders and priced at a yield of 7.5 percent.",
   "why": "Data center debt meeting weak demand: medium. Older than 60 days, so it has faded to zero. The date is the week of IFR's first August issue.",
   "gains": "Said by a bond trade paper. Who gains when lenders ask for more interest? Was this one deal, or a sign that lenders are getting careful?",
   "use": "Lenders are paid to be careful. When they ask for more, they are telling you how risky they think it is.",
   "sources": [
    {
     "name": "IFR",
     "date": "2026-08-07",
     "url": "https://www.ifre.com/bonds/2463746/bond-market-begins-to-question-ai-boom-as-beignet-sequel-falls-flat"
    }
   ],
   "quotes": [
    {
     "source": "IFR",
     "quote": "US$12.547bn bond was issued in conjunction with BlackRock to finance the construction of a data centre joint venture",
     "url": "https://www.ifre.com/bonds/2463746/bond-market-begins-to-question-ai-boom-as-beignet-sequel-falls-flat"
    },
    {
     "source": "IFR",
     "quote": "received just US$20bn of orders",
     "url": "https://www.ifre.com/bonds/2463746/bond-market-begins-to-question-ai-boom-as-beignet-sequel-falls-flat"
    },
    {
     "source": "IFR",
     "quote": "priced on Monday at a yield of 7.50%.",
     "url": "https://www.ifre.com/bonds/2463746/bond-market-begins-to-question-ai-boom-as-beignet-sequel-falls-flat"
    },
    {
     "source": "IFR",
     "quote": "Meta Platforms attracted only lukewarm interest",
     "url": "https://www.ifre.com/bonds/2463746/bond-market-begins-to-question-ai-boom-as-beignet-sequel-falls-flat"
    }
   ],
   "date_label": "Aug 2026",
   "rail": "A Meta data center bond drew weak demand and priced at 7.5 percent",
   "derived": [
    "12.5 billion: rounded from 12.547"
   ],
   "event": "meta-venture-bond-2026-08"
  },
  {
   "id": "msft-jul30-jump",
   "date": "2026-07-30",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Microsoft's shares rose as much as 17 percent on July 30, the week of its results, the largest one-day gain in nearly 20 years. It had gone into the results down nearly 30 percent from its high.",
   "why": "Context, zero points. Results were good and the shares rose, which is the expected reaction and fits no rule. It is listed because it is a large move up after months of doubt.",
   "gains": "Said by Fortune. Who gains when one good quarter is read as proof that AI spending pays, and what would the next quarter have to show?",
   "use": "One strong report can lift doubt fast. Look at whether the next report backs it up.",
   "sources": [
    {
     "name": "Fortune",
     "date": "2026-07-30",
     "url": "https://fortune.com/2026/07/30/microsoft-stock-biggest-one-day-gain-since-2008-480-billion-market-value-cloud-growth/"
    }
   ],
   "quotes": [
    {
     "source": "Fortune",
     "quote": "Microsoft stock prices surged as much as 17% on Thursday to above $455, the largest single-day gain in nearly 20 years.",
     "url": "https://fortune.com/2026/07/30/microsoft-stock-biggest-one-day-gain-since-2008-480-billion-market-value-cloud-growth/"
    },
    {
     "source": "Fortune",
     "quote": "Microsoft went into earnings this week with its stock down nearly 30% from an October 2025 high of $555",
     "url": "https://fortune.com/2026/07/30/microsoft-stock-biggest-one-day-gain-since-2008-480-billion-market-value-cloud-growth/"
    }
   ],
   "date_label": "Jul 30",
   "derived": [
    "July 30 is the date of the move"
   ],
   "kind": "bounce",
   "short": "Microsoft rose as much as 17 percent after its results"
  },
  {
   "id": "equinix-capex-raise-jul",
   "date": "2026-07-29",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Equinix, the largest data center company, raised its 2026 spending outlook to as much as 6 billion dollars from 3.8 billion, and its yearly spending for 2027 to 2029 to 5 billion to 7 billion dollars. Its chief executive called it the largest single guidance raise in the company's history.",
   "why": "Context, zero points. Equinix rents data center space to cloud and AI firms; it is not a lab or a cloud company, which is what the spending rule names. Listed because a landlord raising its building plan shows what its customers are asking for.",
   "gains": "Said by Equinix on its earnings call, as reported by Bisnow. Who gains when a company announces it will spend more because demand is clear, and who carries the cost if demand slows?",
   "use": "A landlord raising its plan tells you what its customers are asking for. Check whether those customers are signing leases or only asking.",
   "sources": [
    {
     "name": "Bisnow",
     "date": "2026-07-30",
     "url": "https://www.bisnow.com/news/national/data-center-capital-markets/equinix-ramps-up-expansion-plans-amid-shift-in-ai-boom-135637"
    }
   ],
   "quotes": [
    {
     "source": "Bisnow",
     "quote": "For 2026, Equinix’s projected annual capex leapt from a prior outlook of $3.8B to as much as $6B.",
     "url": "https://www.bisnow.com/news/national/data-center-capital-markets/equinix-ramps-up-expansion-plans-amid-shift-in-ai-boom-135637"
    },
    {
     "source": "Bisnow",
     "quote": "Annual capex for 2027 to 2029 is now predicted at $5B to $7B",
     "url": "https://www.bisnow.com/news/national/data-center-capital-markets/equinix-ramps-up-expansion-plans-amid-shift-in-ai-boom-135637"
    },
    {
     "source": "Bisnow",
     "quote": "the largest single guidance raise in the history of our company",
     "url": "https://www.bisnow.com/news/national/data-center-capital-markets/equinix-ramps-up-expansion-plans-amid-shift-in-ai-boom-135637"
    }
   ],
   "date_label": "Jul 29",
   "derived": [
    "Raise for 2026: 6 billion minus 3.8 billion is 2.2 billion dollars, small."
   ]
  },
  {
   "id": "prime-pure-bonds-jul",
   "date": "2026-07-24",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "A credit news service says Prime Data Centers and Pure DC both struggled to get their bond deals done. One deal was pulled in mid-July before it sold, and Pure abandoned 1 billion euros of unsecured bonds. A third developer, Polar, did sell its bond.",
   "why": "Context, zero points. A trade paper's account, with no reason on record from the companies. It leans closer because two developers struggled to borrow this way; a third did not.",
   "gains": "Said by 9fin, a credit news service. Who gains when a deal that did not happen is the story, and what replaced the bonds?",
   "use": "When a bond is pulled, ask where the money came from instead. A bank loan is still debt.",
   "sources": [
    {
     "name": "9fin",
     "date": "2026-07-24",
     "url": "https://9fin.com/insights/pure-dcs-europes-data-centre-bond-market"
    }
   ],
   "quotes": [
    {
     "source": "9fin",
     "quote": "Prime and Pure both struggled to get their deals done.",
     "url": "https://9fin.com/insights/pure-dcs-europes-data-centre-bond-market"
    },
    {
     "source": "9fin",
     "quote": "was pulled in mid-July before it got away",
     "url": "https://9fin.com/insights/pure-dcs-europes-data-centre-bond-market"
    },
    {
     "source": "9fin",
     "quote": "Oaktree -backed Pure which has abandoned €1bn of unsecured bonds",
     "url": "https://9fin.com/insights/pure-dcs-europes-data-centre-bond-market"
    },
    {
     "source": "9fin",
     "quote": "Polar, the first mover, managed to clear the market",
     "url": "https://9fin.com/insights/pure-dcs-europes-data-centre-bond-market"
    }
   ],
   "date_label": "Jul 24",
   "derived": [
    "9fin is the name of the credit news service"
   ],
   "short": "Two European data center bond deals struggled",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "spacex-below-ipo-jul15",
   "date": "2026-07-15",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "In mid-July SpaceX, which absorbed xAI, saw its shares fall below their 135 dollar offering price during the day, then close just above it. Reuters tied it partly to worry about debt-funded AI spending.",
   "why": "Context, zero points. A share price move, and prices alone do not score.",
   "gains": "Said by Reuters, through The Star. Who gains when a big listing is retold as a story of cooling, and what changed in the business itself?",
   "use": "Check where a new listing trades a month later, not only on the first day.",
   "sources": [
    {
     "name": "Reuters via The Star",
     "date": "2026-07-16",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/07/16/spacex-shares-slide-below-ipo-price-as-blistering-rally-unravels"
    }
   ],
   "quotes": [
    {
     "source": "Reuters via The Star",
     "quote": "The shares slid 0.6% to close at $135.27, after falling as low as $132.28 — below the $135 IPO price",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/07/16/spacex-shares-slide-below-ipo-price-as-blistering-rally-unravels"
    },
    {
     "source": "Reuters via The Star",
     "quote": "The about-face in SpaceX reflects in part investor concern over debt-funded AI spending",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/07/16/spacex-shares-slide-below-ipo-price-as-blistering-rally-unravels"
    },
    {
     "source": "Reuters via The Star",
     "quote": "profit-taking, valuation reassessment and the unwinding of extremely bullish positioning",
     "url": "https://www.thestar.com.my/tech/tech-news/2026/07/16/spacex-shares-slide-below-ipo-price-as-blistering-rally-unravels"
    }
   ],
   "date_label": "Jul 15",
   "kind": "drop",
   "short": "SpaceX dipped below its 135 dollar listing price in July"
  },
  {
   "id": "oracle-sp-bbb-minus",
   "date": "2026-07-09",
   "status": "scored",
   "rule": "downgrade",
   "size": "medium",
   "text": "S&P cut Oracle's credit rating to BBB-, one notch above junk. Moody's also has a negative outlook on the company.",
   "why": "A rating firm cut the rating itself, not just the outlook, so it is medium. The rating stays inside investment grade, so it is not big.",
   "gains": "Said by S&P, a credit rating firm, as reported by The Next Web. Who gains when a cut stops one step short of junk, and what would the next step do to Oracle's borrowing cost?",
   "use": "Find the line between investment grade and junk on a rating chart, and see how close Oracle now sits to it.",
   "sources": [
    {
     "name": "The Next Web",
     "date": "2026-07-16",
     "url": "https://thenextweb.com/news/oracle-sp-downgrade-ai-spending-junk-risk"
    }
   ],
   "quotes": [
    {
     "source": "The Next Web",
     "quote": "S&P downgraded Oracle to BBB- on July 9, placing the company one notch above junk status",
     "url": "https://thenextweb.com/news/oracle-sp-downgrade-ai-spending-junk-risk"
    },
    {
     "source": "The Next Web",
     "quote": "Moody’s has also placed a negative outlook on the company",
     "url": "https://thenextweb.com/news/oracle-sp-downgrade-ai-spending-junk-risk"
    }
   ],
   "date_label": "Jul 9",
   "rail": "S&P cut Oracle's credit rating to BBB-, one notch above junk",
   "event": "oracle-rating-sp-2026-07"
  },
  {
   "id": "coreweave-insure-jun",
   "date": "2026-06-11",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The cost of insuring CoreWeave's debt for five years fell to as low as 4.52 percentage points in early June, from a peak of 8.81 in December 2025, a fall of 49 percent.",
   "why": "Context, zero points. The cost of insuring debt is a price, not a company event. It is listed because the insurance price fell at that time.",
   "gains": "Said by The Next Web, reporting bond market data. Who gains when insurance prices fall, and does a lower price mean lower risk or only a calmer month?",
   "use": "Check the latest CoreWeave insurance price against this June figure to see which way lenders have moved since.",
   "sources": [
    {
     "name": "The Next Web",
     "date": "2026-06-11",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    }
   ],
   "quotes": [
    {
     "source": "The Next Web",
     "quote": "CoreWeave’s credit default swap spreads fell 49% from their December peak.",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    },
    {
     "source": "The Next Web",
     "quote": "fell to as low as 4.52 percentage points earlier this month, down from a peak of 8.81 percentage points in December 2025",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    }
   ],
   "date_label": "Jun",
   "short": "CoreWeave debt insurance fell 49 percent from its December peak",
   "signal": "insure",
   "lean": "further"
  },
  {
   "id": "nvda-sp-upgrade-jun",
   "date": "2026-06-11",
   "status": "scored",
   "rule": "upgrade",
   "size": "medium",
   "text": "S&P Global Ratings raised Nvidia's long-term credit rating one step, to AA from AA-, and raised the ratings on all its debt. The outlook stays stable.",
   "why": "A rating firm raising the rating on an AI borrower. A one-step change of rating is medium; it did not cross the line between investment grade and below it. It is the other side of the Moody's outlook change already on file.",
   "gains": "Said by S&P, a credit rating firm, as reported by Stocktwits and TMGM. Who gains when a rating firm praises a supplier whose customers are borrowing heavily, and does the rating look at the customers' debt?",
   "use": "Ratings can move both ways in the same year. Check the date of each one before comparing them.",
   "sources": [
    {
     "name": "Stocktwits",
     "date": "2026-06-11",
     "url": "https://stocktwits.com/news-articles/markets/equity/nvidia-ai-boom-to-drive-nvda-higher-sp-global-lifts-rating-sees-500b-revenue-path/cZKc2NGR7PG"
    },
    {
     "name": "TMGM",
     "date": "2026-06-15",
     "url": "https://www.tmgm.com/en/analysis/market-news/sp-upgrades-nvidia-rating-on-strong-ai-demand"
    }
   ],
   "quotes": [
    {
     "source": "Stocktwits",
     "quote": "S&P Global Ratings has upgraded Nvidia (NVDA) to ‘AA’ from ‘AA-’",
     "url": "https://stocktwits.com/news-articles/markets/equity/nvidia-ai-boom-to-drive-nvda-higher-sp-global-lifts-rating-sees-500b-revenue-path/cZKc2NGR7PG"
    },
    {
     "source": "Stocktwits",
     "quote": "The firm also raised all issue-level ratings on the company’s debt",
     "url": "https://stocktwits.com/news-articles/markets/equity/nvidia-ai-boom-to-drive-nvda-higher-sp-global-lifts-rating-sees-500b-revenue-path/cZKc2NGR7PG"
    },
    {
     "source": "Stocktwits",
     "quote": "The outlook remains stable",
     "url": "https://stocktwits.com/news-articles/markets/equity/nvidia-ai-boom-to-drive-nvda-higher-sp-global-lifts-rating-sees-500b-revenue-path/cZKc2NGR7PG"
    },
    {
     "source": "TMGM",
     "quote": "S&P Global Ratings has upgraded Nvidia ’s long-term issuer credit rating from “AA-” to “AA”",
     "url": "https://www.tmgm.com/en/analysis/market-news/sp-upgrades-nvidia-rating-on-strong-ai-demand"
    }
   ],
   "date_label": "Jun 11",
   "rail": "S&P raised Nvidia's credit rating to AA from AA-",
   "event": "nvidia-rating-sp-2026-06"
  },
  {
   "id": "applied-digital-bond-jun",
   "date": "2026-06-09",
   "status": "scored",
   "rule": "debt",
   "size": "small",
   "text": "A unit of Applied Digital raised 1.59 billion dollars in a junk bond sale to pay for a data center building in North Dakota that will supply computing capacity to CoreWeave. The bonds were priced to yield 7 percent, and buyers wanted five times the amount on offer.",
   "why": "Data center building paid for with borrowed money, so it scores toward a pop. It is small, under 10 billion dollars. Strong demand is noted in the text but the rule is about the borrowing.",
   "gains": "Said by The Next Web, a tech news site, reporting the bond sale. The source notes the money behind these bonds comes from one customer. Who gains from lending against a single contract, and what happens if that customer cannot pay?",
   "use": "Compare this 7 percent with the 10 percent lenders asked before, and see how their mood changed.",
   "sources": [
    {
     "name": "The Next Web",
     "date": "2026-06-11",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    }
   ],
   "quotes": [
    {
     "source": "The Next Web",
     "quote": "An Applied Digital subsidiary raised $1.59 billion in the high-yield bond market on Tuesday",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    },
    {
     "source": "The Next Web",
     "quote": "The bonds were priced to yield 7%, a steep drop from the 10% investors demanded",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    },
    {
     "source": "The Next Web",
     "quote": "The offering attracted five times its size in demand.",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    },
    {
     "source": "The Next Web",
     "quote": "to fund a fourth building at its Polaris Forge 1 campus in North Dakota, which will provide 150 megawatts of computing capacity for CoreWeave under a 15-year contract.",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    },
    {
     "source": "The Next Web",
     "quote": "if CoreWeave’s financial position deteriorates, the revenue stream underpinning these bonds would be directly affected.",
     "url": "https://thenextweb.com/news/coreweave-credit-rebound-applied-digital-junk-bond-data-center"
    }
   ],
   "date_label": "Jun 9",
   "rail": "An Applied Digital unit borrowed in the junk bond market to build for CoreWeave",
   "event": "applied-digital-bond-2026-06"
  },
  {
   "id": "jun9-ai-reversal",
   "date": "2026-06-09",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "On Tuesday AI and chip shares swung from early gains to losses. The S&P 500 ended down 0.3 percent after a midday low of 2.3 percent down, and the Nasdaq fell 1 percent.",
   "why": "Context, zero points. A one-day price move that did not come right after a company's results. Prices alone do not score.",
   "gains": "Said by The Associated Press. Who gains from a day's swing being told as a story about AI, and what else moved that day?",
   "use": "Look at how far a day's move was from the high to the low, not only the close.",
   "sources": [
    {
     "name": "AP via WTOP",
     "date": "2026-06-09",
     "url": "https://wtop.com/news/2026/06/how-major-us-stock-indexes-fared-tuesday-6-9-2026/"
    }
   ],
   "quotes": [
    {
     "source": "AP via WTOP",
     "quote": "The S&P 500 fell 0.3% Tuesday after careening between an early gain of 1% and a midday loss of 2.3%.",
     "url": "https://wtop.com/news/2026/06/how-major-us-stock-indexes-fared-tuesday-6-9-2026/"
    },
    {
     "source": "AP via WTOP",
     "quote": "Indexes swung lower after companies selling computer chips, memory and other building blocks of the AI boom broke from early gains to losses.",
     "url": "https://wtop.com/news/2026/06/how-major-us-stock-indexes-fared-tuesday-6-9-2026/"
    }
   ],
   "date_label": "Jun 9",
   "kind": "drop",
   "short": "Nasdaq fell 1 percent as AI stocks reversed"
  },
  {
   "id": "cerebras-debut-may",
   "date": "2026-05-13",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Cerebras priced its shares at 185 dollars. It opened at 350 dollars and closed its first day at 311.07, up 68 percent.",
   "why": "Context, zero points. A first-day price move does not score. The rule for new shares needs them to stay above the asking price for a full week, and this source covers one day.",
   "gains": "Said by SiliconANGLE, a tech news site. Who gains when the first-day price runs far above the asking price, and what matters more, day one or day thirty?",
   "use": "Look at where a new listing trades a month later, not on its first morning.",
   "sources": [
    {
     "name": "SiliconANGLE",
     "date": "2026-05-13",
     "url": "https://siliconangle.com/2026/05/13/cerebras-stock-almost-doubles-initial-offering-price-biggest-tech-ipo-years-raised-55b/"
    }
   ],
   "quotes": [
    {
     "source": "SiliconANGLE",
     "quote": "the price eased back to close at $311.07 a share, still up 68% on the day",
     "url": "https://siliconangle.com/2026/05/13/cerebras-stock-almost-doubles-initial-offering-price-biggest-tech-ipo-years-raised-55b/"
    },
    {
     "source": "SiliconANGLE",
     "quote": "opened trading as a public company at $350 a share",
     "url": "https://siliconangle.com/2026/05/13/cerebras-stock-almost-doubles-initial-offering-price-biggest-tech-ipo-years-raised-55b/"
    },
    {
     "source": "SiliconANGLE",
     "quote": "Wednesday’s pricing of its stock at $185 per share",
     "url": "https://siliconangle.com/2026/05/13/cerebras-stock-almost-doubles-initial-offering-price-biggest-tech-ipo-years-raised-55b/"
    }
   ],
   "date_label": "May 13",
   "kind": "bounce",
   "short": "Cerebras closed day one up 68 percent on its 185 price"
  },
  {
   "id": "nvda-equity-bets-may",
   "date": "2026-05-10",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "By CNBC's count, Nvidia committed more than 40 billion dollars to AI company stakes in the first four months of 2026, 30 billion of it into OpenAI. Nvidia's chief financial officer said it invests where it needs capacity built around its chips.",
   "why": "Context, zero points. It is a running total tallied by a news outlet from filings, not a single reported event. It is listed because the investor is also the chip supplier.",
   "gains": "Said by The Next Web, citing CNBC, and Nvidia's chief financial officer on an earnings call. Who gains when the company that sells the chips also funds the buyers, and how much of the later sales return that money?",
   "use": "When you see a chip maker's name on a customer's investor list, check how big that customer's orders are.",
   "sources": [
    {
     "name": "The Next Web",
     "date": "2026-05-10",
     "url": "https://thenextweb.com/news/nvidia-40bn-ai-equity-investments-2026"
    }
   ],
   "quotes": [
    {
     "source": "The Next Web",
     "quote": "NVIDIA has committed more than $40 billion to AI equity investments in the first four months of 2026, CNBC reported",
     "url": "https://thenextweb.com/news/nvidia-40bn-ai-equity-investments-2026"
    },
    {
     "source": "The Next Web",
     "quote": "$30bn went to OpenAI",
     "url": "https://thenextweb.com/news/nvidia-40bn-ai-equity-investments-2026"
    },
    {
     "source": "The Next Web",
     "quote": "invests where it sees a need to ensure that compute capacity is being built around its hardware.",
     "url": "https://thenextweb.com/news/nvidia-40bn-ai-equity-investments-2026"
    }
   ],
   "date_label": "May 10",
   "short": "Nvidia put over 40 billion dollars into AI customers by April",
   "signal": "vendor",
   "lean": "closer"
  },
  {
   "id": "apr-nasdaq-best-month",
   "date": "2026-04-30",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The Nasdaq Composite gained more than 15 percent in April, its best month since April 2020, and the S&P 500 gained 10 percent. Alphabet's shares rose nearly 34 percent in the month.",
   "why": "Context, zero points. A month of price moves, partly after company results, does not fit any scoring rule. It shows how far prices had climbed before the autumn falls.",
   "gains": "Said by Stocktwits, a market news site. Who gains when a month is retold as the best in years, and what would a similar month look like seen from the autumn?",
   "use": "Put this month next to the November falls to see the size of the swing in one year.",
   "sources": [
    {
     "name": "Stocktwits",
     "date": "2026-05-01",
     "url": "https://stocktwits.com/news-articles/markets/equity/nasdaq-composite-best-month-6-years-big-tech-surge-fuels-rally/cZQVQ3nReek"
    }
   ],
   "quotes": [
    {
     "source": "Stocktwits",
     "quote": "The Nasdaq Composite index gained more than 15% in April 2026, registering its best month since April 2020, while the S&P 500 index ended the month with gains of 10%",
     "url": "https://stocktwits.com/news-articles/markets/equity/nasdaq-composite-best-month-6-years-big-tech-surge-fuels-rally/cZQVQ3nReek"
    },
    {
     "source": "Stocktwits",
     "quote": "Alphabet’s Class A shares surged nearly 34% last month",
     "url": "https://stocktwits.com/news-articles/markets/equity/nasdaq-composite-best-month-6-years-big-tech-surge-fuels-rally/cZQVQ3nReek"
    }
   ],
   "date_label": "April",
   "kind": "bounce",
   "short": "Nasdaq rose over 15 percent in April, best month since 2020"
  },
  {
   "id": "hut8-river-bend-bond",
   "date": "2026-04-30",
   "status": "scored",
   "rule": "debt",
   "size": "small",
   "text": "Hut 8 closed a 3.25 billion dollar bond sale to pay for building a data center at its River Bend site. Its release says the order book was significantly oversubscribed.",
   "why": "Data center building paid for with borrowed money, stated in the company's own release. It is under 10 billion dollars, so small. The release says the order book was well oversubscribed, which is a point for the other side, but the rule scores the borrowing.",
   "gains": "Said by Hut 8, the borrower, in its own press release. Who gains when a borrower announces its own bond as a landmark, and what are the buyers relying on?",
   "use": "When a data center is built on a bond, ask who pays it back and from what income.",
   "sources": [
    {
     "name": "Hut 8 (PR Newswire)",
     "date": "2026-04-30",
     "url": "https://finviz.com/news/349710/hut-8-closes-325-billion-of-investment-grade-senior-secured-notes-in-landmark-financing-for-river-bend-data-center-project"
    }
   ],
   "quotes": [
    {
     "source": "Hut 8 (PR Newswire)",
     "quote": "today announced the closing of a $3.25 billion offering (the \"Offering\") of 6.192% senior secured notes due 2042",
     "url": "https://finviz.com/news/349710/hut-8-closes-325-billion-of-investment-grade-senior-secured-notes-in-landmark-financing-for-river-bend-data-center-project"
    },
    {
     "source": "Hut 8 (PR Newswire)",
     "quote": "finance the development and construction of a turnkey data center with 245 megawatts of critical IT capacity",
     "url": "https://finviz.com/news/349710/hut-8-closes-325-billion-of-investment-grade-senior-secured-notes-in-landmark-financing-for-river-bend-data-center-project"
    },
    {
     "source": "Hut 8 (PR Newswire)",
     "quote": "The order book — which was significantly oversubscribed and priced inside initial price talk",
     "url": "https://finviz.com/news/349710/hut-8-closes-325-billion-of-investment-grade-senior-secured-notes-in-landmark-financing-for-river-bend-data-center-project"
    },
    {
     "source": "Hut 8 (PR Newswire)",
     "quote": "Hut 8 has secured investment-grade ratings on a construction-stage data center bond",
     "url": "https://finviz.com/news/349710/hut-8-closes-325-billion-of-investment-grade-senior-secured-notes-in-landmark-financing-for-river-bend-data-center-project"
    }
   ],
   "date_label": "Apr 30",
   "rail": "Hut 8 closed a bond sale to pay for building a data center",
   "event": "hut8-river-bend-bond-2026-04"
  },
  {
   "id": "meridian-arc-bond-apr",
   "date": "2026-04-17",
   "status": "scored",
   "rule": "debt",
   "size": "small",
   "text": "Meridian Arc, a venture of Next Frontier and Fluidstack, sold 5.7 billion dollars of bonds paying 6.25 percent to build an AI data center campus in Indiana. Google stands behind the payments.",
   "why": "Data center building paid for with borrowed money, as described by the law firms that advised on the deal. Under 10 billion dollars, so small. Google backing the lease is also a link between supplier and borrower.",
   "gains": "Said by the law firms that advised on the deal, Cahill and Latham. A law firm announces a deal it worked on. Who gains from calling it the largest of its kind, and who is paid if it is repaid?",
   "use": "Notice who stands behind a borrower. A bigger name behind it changes the price, not the size of the debt.",
   "sources": [
    {
     "name": "Cahill",
     "date": "2026-04-17",
     "url": "https://www.cahill.com/news/firm-news/2026-04-17-cahill-represents-initial-purchaser-in-meridian-arc-holdco-57-billion-high-yield-bond-offering"
    },
    {
     "name": "Latham",
     "date": "2026-04-20",
     "url": "https://www.lw.com/en/news/2026/04/latham-advises-on-meridian-arc-holdco-senior-secured-notes-offering-to-finance-ai-data-center"
    }
   ],
   "quotes": [
    {
     "source": "Cahill",
     "quote": "Meridian Arc HoldCo LLC’s $5.7 billion offering of 6.25% five-year senior secured notes to finance the development of AI-focused data center facilities in Sullivan County, Indiana.",
     "url": "https://www.cahill.com/news/firm-news/2026-04-17-cahill-represents-initial-purchaser-in-meridian-arc-holdco-57-billion-high-yield-bond-offering"
    },
    {
     "source": "Cahill",
     "quote": "with obligations supported by Google",
     "url": "https://www.cahill.com/news/firm-news/2026-04-17-cahill-represents-initial-purchaser-in-meridian-arc-holdco-57-billion-high-yield-bond-offering"
    },
    {
     "source": "Latham",
     "quote": "has priced an offering of US$5.7 billion aggregate principal amount of its 6.25% senior secured notes due 2031",
     "url": "https://www.lw.com/en/news/2026/04/latham-advises-on-meridian-arc-holdco-senior-secured-notes-offering-to-finance-ai-data-center"
    }
   ],
   "date_label": "Apr 17",
   "rail": "Meridian Arc sold bonds to build an Indiana AI data center",
   "event": "meridian-arc-bond-2026-04"
  },
  {
   "id": "openai-abilene-cancel",
   "date": "2026-04-15",
   "status": "scored",
   "rule": "cut",
   "size": "small",
   "text": "OpenAI and Oracle cancelled an 800 megawatt expansion in Abilene, Texas. Bisnow put it down to financing challenges and a changed demand forecast. OpenAI also dropped its Norway site and paused one in the UK.",
   "why": "A lab cutting a spending commitment. No dollar figure in the source, so small. Older than 60 days, so it has faded to zero.",
   "gains": "Said by a property trade paper. Microsoft and Google took over two of the sites. Was it a retreat, or the same money moving elsewhere?",
   "use": "A cancelled site is not a cancelled industry. Check whether the total spending went down or just moved.",
   "sources": [
    {
     "name": "Bisnow",
     "date": "2026-04-15",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147"
    }
   ],
   "quotes": [
    {
     "source": "Bisnow",
     "quote": "due to financing challenges and changes to OpenAI's demand forecast",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147",
     "about": "why the Abilene expansion was cancelled, in Bisnow's words"
    },
    {
     "source": "Bisnow",
     "quote": "800-megawatt expansion of the flagship Stargate data center campus in Abilene, Texas",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147"
    },
    {
     "source": "Bisnow",
     "quote": "OpenAI is abandoning plans for its Stargate data center in Norway",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147"
    },
    {
     "source": "Bisnow",
     "quote": "the Narvik site is being leased to Microsoft instead",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147",
     "about": "the Norway site"
    },
    {
     "source": "Bisnow",
     "quote": "will now be leased to Google.",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147",
     "about": "the West London site"
    },
    {
     "source": "Bisnow",
     "quote": "OpenAI announced last week that it was pausing a Stargate project in the UK",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147"
    },
    {
     "source": "Bisnow",
     "quote": "Last month, OpenAI and Oracle confirmed they had canceled plans",
     "url": "https://www.bisnow.com/news/national/data-center-development/openai-pausing-stargate-projects-3-countries-key-execs-depart-134147"
    }
   ],
   "date_label": "Reported Apr 15",
   "rail": "OpenAI and Oracle cancelled an 800 megawatt expansion in Texas",
   "event": "openai-abilene-cancel-2026-04"
  },
  {
   "id": "blue-owl-caps-apr",
   "date": "2026-04-02",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Blue Owl limited withdrawals to 5 percent at two of its funds after investors asked to pull 22 percent from one and 41 percent from a technology-focused fund.",
   "why": "Context, zero points. A private credit lender limiting withdrawals is a warning about that market, but neither fund is itself an AI borrower missing a payment.",
   "gains": "Said by Bisnow, citing the Wall Street Journal and Blue Owl's investor letter. Who gains when a fund slows exits, and what does it mean for the data center loans such lenders fund?",
   "use": "Note which lenders fund data centers and whether they keep letting investors out.",
   "sources": [
    {
     "name": "Bisnow",
     "date": "2026-04-03",
     "url": "https://www.bisnow.com/national/news/capital-markets/blue-owl-caps-redemptions-after-investors-sought-54b-across-two-funds-133973"
    }
   ],
   "quotes": [
    {
     "source": "Bisnow",
     "quote": "limited withdrawals to 5% on Thursday",
     "url": "https://www.bisnow.com/national/news/capital-markets/blue-owl-caps-redemptions-after-investors-sought-54b-across-two-funds-133973"
    },
    {
     "source": "Bisnow",
     "quote": "Investors asked to pull 22% out of Blue Owl Capital",
     "url": "https://www.bisnow.com/national/news/capital-markets/blue-owl-caps-redemptions-after-investors-sought-54b-across-two-funds-133973"
    },
    {
     "source": "Bisnow",
     "quote": "41% out of the technology-focused Blue Owl Technology Income Corp fund",
     "url": "https://www.bisnow.com/national/news/capital-markets/blue-owl-caps-redemptions-after-investors-sought-54b-across-two-funds-133973"
    }
   ],
   "date_label": "Apr 2",
   "short": "Blue Owl limited withdrawals at two funds",
   "signal": "papers",
   "lean": "closer"
  },
  {
   "id": "nvda-feb26-fall-on-beat",
   "date": "2026-02-26",
   "status": "scored",
   "rule": "goodnews",
   "size": "medium",
   "text": "Nvidia's shares fell 5.5 percent the day after it reported a quarter of profit growth that beat what analysts expected.",
   "why": "A stock falling right after good results is the closer-to-a-pop rule. A fall of 5.5 percent is medium, between 5 and 15 percent.",
   "gains": "Said by the Associated Press, a news wire. Who gains when a good report is followed by a fall, and is it about this company or the whole trade?",
   "use": "Note whether a stock rises or falls on good news. It shows how much hope is already in the price.",
   "sources": [
    {
     "name": "AP via ClickOrlando",
     "date": "2026-02-26",
     "url": "https://www.clickorlando.com/business/2026/02/26/asian-shares-mostly-rise-after-nvidia-earnings-beat-expectations/"
    }
   ],
   "quotes": [
    {
     "source": "AP via ClickOrlando",
     "quote": "Its stock sank 5.5% for its worst loss since April.",
     "url": "https://www.clickorlando.com/business/2026/02/26/asian-shares-mostly-rise-after-nvidia-earnings-beat-expectations/"
    },
    {
     "source": "AP via ClickOrlando",
     "quote": "reported another stellar quarter of profit growth that breezed past analysts' expectations.",
     "url": "https://www.clickorlando.com/business/2026/02/26/asian-shares-mostly-rise-after-nvidia-earnings-beat-expectations/"
    }
   ],
   "date_label": "Feb 26",
   "rail": "Nvidia fell the day after a quarter that beat expectations",
   "event": "nvidia-goodnews-2026-02"
  },
  {
   "id": "fractal-debut-feb16",
   "date": "2026-02-16",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "India's Fractal Analytics listed below its issue price and slid further in the afternoon. It had cut the size of its share sale by more than 40 percent.",
   "why": "Context, zero points. New shares below their asking price on day one is the opposite of the demand rule, and a sale size cut is the company's own step, not a spending cut.",
   "gains": "Said by TechCrunch. Who gains when a smaller sale is told as caution, and was this about AI or about the software selloff that week?",
   "use": "When a listing is cut in size before it opens, treat that as a signal about price, and watch the first week.",
   "sources": [
    {
     "name": "TechCrunch",
     "date": "2026-02-16",
     "url": "https://techcrunch.com/2026/02/16/fractal-analytics-muted-ipo-debut-signals-persistent-ai-fears-in-india/"
    }
   ],
   "quotes": [
    {
     "source": "TechCrunch",
     "quote": "Fractal listed at ₹876 per share on Monday, below its issue price of ₹900, and then slid further in afternoon trading.",
     "url": "https://techcrunch.com/2026/02/16/fractal-analytics-muted-ipo-debut-signals-persistent-ai-fears-in-india/"
    },
    {
     "source": "TechCrunch",
     "quote": "cutting the IPO size by more than 40%",
     "url": "https://techcrunch.com/2026/02/16/fractal-analytics-muted-ipo-debut-signals-persistent-ai-fears-in-india/"
    }
   ],
   "date_label": "Feb 16",
   "kind": "drop",
   "short": "Fractal Analytics listed below its issue price in India"
  },
  {
   "id": "feb12-ai-loser-selloff",
   "date": "2026-02-12",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "US stocks fell as buyers looked for firms that AI might hurt. The S&P 500 fell 1.6 percent and the Nasdaq 2 percent. AppLovin fell 19.7 percent even after beating profit forecasts.",
   "why": "Context, zero points. A broad price move tied to worry about AI taking business from software firms, not about AI spending. AppLovin is an ad firm, so it is not scored under the good-news rule.",
   "gains": "Said by The Associated Press. Who gains when a fall is explained by one theme, and what else moved these stocks that day?",
   "use": "AI can move prices for firms that sell nothing AI-related. Ask which side of the story a company is on.",
   "sources": [
    {
     "name": "AP via ADN",
     "date": "2026-02-12",
     "url": "https://www.adn.com/business-economy/2026/02/12/stocks-drop-sharply-as-investors-hunt-for-companies-that-will-be-hurt-by-ai/"
    }
   ],
   "quotes": [
    {
     "source": "AP via ADN",
     "quote": "The S&P 500 sank 1.6% for its second-worst day since Thanksgiving",
     "url": "https://www.adn.com/business-economy/2026/02/12/stocks-drop-sharply-as-investors-hunt-for-companies-that-will-be-hurt-by-ai/"
    },
    {
     "source": "AP via ADN",
     "quote": "the Nasdaq composite fell 2%.",
     "url": "https://www.adn.com/business-economy/2026/02/12/stocks-drop-sharply-as-investors-hunt-for-companies-that-will-be-hurt-by-ai/"
    },
    {
     "source": "AP via ADN",
     "quote": "AppLovin lost nearly a fifth of its value and tumbled 19.7%, even though it reported a stronger profit for the latest quarter than analysts expected.",
     "url": "https://www.adn.com/business-economy/2026/02/12/stocks-drop-sharply-as-investors-hunt-for-companies-that-will-be-hurt-by-ai/"
    }
   ],
   "date_label": "Feb 12",
   "kind": "drop",
   "short": "S&P 500 fell 1.6 percent on worry AI hurts software firms"
  },
  {
   "id": "oracle-feb-bond",
   "date": "2026-02-02",
   "status": "scored",
   "rule": "debt",
   "size": "medium",
   "text": "Oracle sold about 25 billion dollars of bonds on a Monday, with buyers putting in orders for as many as 126 billion dollars. Its statement said it does not expect to sell more debt in 2026.",
   "why": "Data center spending paid for with borrowed money, in Oracle's own announcement as reported by Bloomberg. It is between 10 and 100 billion dollars, so medium. The record demand is a point for the other side, but the rule scores the borrowing.",
   "gains": "Said by Oracle in its statement, as reported by Bloomberg through The Star. Who gains when a borrower pairs a big bond with a share sale, and did later bond sales stay as promised?",
   "use": "Check a company's statement about future borrowing against what it does later in the year. Oracle sold 10 billion dollars more on November 2, which is on this page.",
   "sources": [
    {
     "name": "Bloomberg (via The Star)",
     "date": "2026-02-04",
     "url": "https://www.thestar.com.my/business/business-news/2026/02/04/oracle-us25bil-bond-frenzy-helps-ease-fears"
    }
   ],
   "quotes": [
    {
     "source": "Bloomberg (via The Star)",
     "quote": "On Monday, those fears appeared to dim after the software giant garnered record demand for a US$25bil bond sale.",
     "url": "https://www.thestar.com.my/business/business-news/2026/02/04/oracle-us25bil-bond-frenzy-helps-ease-fears"
    },
    {
     "source": "Bloomberg (via The Star)",
     "quote": "Investors placed orders for as many as US$126bil of Oracle bonds on Monday",
     "url": "https://www.thestar.com.my/business/business-news/2026/02/04/oracle-us25bil-bond-frenzy-helps-ease-fears"
    },
    {
     "source": "Bloomberg (via The Star)",
     "quote": "The company doesn’t expect to sell more debt in 2026, according to its statement.",
     "url": "https://www.thestar.com.my/business/business-news/2026/02/04/oracle-us25bil-bond-frenzy-helps-ease-fears"
    },
    {
     "source": "Bloomberg (via The Star)",
     "quote": "as it funds big investments in data centres",
     "url": "https://www.thestar.com.my/business/business-news/2026/02/04/oracle-us25bil-bond-frenzy-helps-ease-fears",
     "about": "Oracle"
    }
   ],
   "date_label": "Feb 2",
   "rail": "Oracle sold a very large bond, with record orders, as it funds data centers",
   "derived": [
    "10 billion on November 2: see the fact dated November 2 (Oracle sold 10 billion dollars of bonds)"
   ],
   "event": "oracle-bond-2026-02"
  },
  {
   "id": "bis-h200-rule-jan",
   "date": "2026-01-13",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "The US Commerce Department changed its policy so that licenses to ship chips like Nvidia's H200 and AMD's MI325X to China and Macau get a more favorable review. The same summary notes a 25 percent duty on some advanced chips.",
   "why": "Context, zero points. A government rule change is not a reported sales result. It opens a market for chip makers, and no orders are reported here.",
   "gains": "Said by Covington, a law firm summarizing the rule. Who gains from a looser license policy, and how many orders actually follow?",
   "use": "A permission is not a purchase. Look for the maker reporting China sales before treating this as demand.",
   "sources": [
    {
     "name": "Covington",
     "date": "2026-01-20",
     "url": "https://www.cov.com/en/news-and-insights/insights/2026/01/us-commerce-department-revises-license-review-policy-for-exports-of-certain-advanced-computing-commodities-to-china-and-macau"
    }
   ],
   "quotes": [
    {
     "source": "Covington",
     "quote": "implements a more favorable license application review policy for exports from the United States of certain advanced computing commodities, including NVIDIA H200 and AMD MI325X chips, to China and Macau",
     "url": "https://www.cov.com/en/news-and-insights/insights/2026/01/us-commerce-department-revises-license-review-policy-for-exports-of-certain-advanced-computing-commodities-to-china-and-macau"
    },
    {
     "source": "Covington",
     "quote": "imposing a 25 percent ad valorem duty rate",
     "url": "https://www.cov.com/en/news-and-insights/insights/2026/01/us-commerce-department-revises-license-review-policy-for-exports-of-certain-advanced-computing-commodities-to-china-and-macau"
    }
   ],
   "date_label": "Jan 13"
  },
  {
   "id": "zhipu-debut-jan8",
   "date": "2026-01-08",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "China's Zhipu AI opened above its offering price in Hong Kong, dipped below it, then traded 8.43 percent higher in the morning of its first day.",
   "why": "Context, zero points. The new-shares rule needs a full week above the asking price, and this page covers only the first morning.",
   "gains": "Said by Caixin, a Chinese business magazine. Who gains from a strong first morning, and where was the price a week later?",
   "use": "A first-day price is a start. Look for the price a week later before calling a listing a hit.",
   "sources": [
    {
     "name": "Caixin Global",
     "date": "2026-01-08",
     "url": "https://www.caixinglobal.com/2026-01-08/chinas-zhipu-ai-jumps-in-hong-kong-debut-102401610.html"
    }
   ],
   "quotes": [
    {
     "source": "Caixin Global",
     "quote": "overcame an initial dip below its offering price of HK$116.20 to trade up 8.43% at HK$126 per share as of Thursday morning.",
     "url": "https://www.caixinglobal.com/2026-01-08/chinas-zhipu-ai-jumps-in-hong-kong-debut-102401610.html"
    }
   ],
   "date_label": "Jan 8",
   "kind": "bounce",
   "short": "Zhipu AI rose in its Hong Kong debut, week not checked"
  }
 ],
 "playbook": {
  "title": "What the funds that saw 2008 coming were watching",
  "intro": "Before the 2008 financial crisis a few investors read the loans themselves instead of trusting the ratings. This is what they tracked, in their own words and in the official record, and where the same question sits for AI today. It is a way of looking, not a call on what happens next.",
  "entries": [
   {
    "then": "Michael Burry read the bond prospectuses themselves, loan terms and all, and watched lenders loosen their standards. His rule was to watch the lenders, not the borrowers.",
    "sources": [
     {
      "name": "Vanity Fair",
      "date": "2010-04",
      "url": "https://www.vanityfair.com/news/2010/04/wall-street-excerpt-201004"
     },
     {
      "name": "The New York Times (archived copy)",
      "date": "2010-04-03",
      "url": "https://web.archive.org/web/20100410204945/http://www.nytimes.com/2010/04/04/opinion/04burry.html"
     }
    ],
    "quotes": [
     {
      "source": "Vanity Fair",
      "quote": "Burry spent the end of 2004 and early 2005 scanning hundreds and actually reading dozens of the prospectuses",
      "url": "https://www.vanityfair.com/news/2010/04/wall-street-excerpt-201004"
     },
     {
      "source": "Vanity Fair",
      "quote": "What you want to watch are the lenders, not the borrowers",
      "url": "https://www.vanityfair.com/news/2010/04/wall-street-excerpt-201004",
      "about": "Michael Burry, quoted in the article"
     },
     {
      "source": "The New York Times (archived copy)",
      "quote": "I had begun to worry about the housing market back in 2003, when lenders first resurrected interest-only mortgages",
      "url": "https://web.archive.org/web/20100410204945/http://www.nytimes.com/2010/04/04/opinion/04burry.html",
      "about": "Michael Burry, in his own words"
     }
    ],
    "id": "papers",
    "label": "READ THE LOAN PAPERS",
    "who": "Michael Burry, Scion Capital",
    "now": "Who lends to the AI build-out, how much and on what terms: bonds, private loans, and promises kept off a company's own books.",
    "rules": [
     "debt",
     "cash"
    ],
    "signal": "papers"
   },
   {
    "then": "John Paulson's team tracked tens of thousands of mortgages and concluded it was getting harder for lenders to collect. He told Congress they had looked at the loans behind the bonds.",
    "sources": [
     {
      "name": "The Wall Street Journal (archived copy)",
      "date": "2008-01-15",
      "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html"
     },
     {
      "name": "U.S. House hearing record",
      "date": "2008-11-13",
      "url": "https://www.govinfo.gov/content/pkg/CHRG-110hhrg56582/html/CHRG-110hhrg56582.htm"
     }
    ],
    "quotes": [
     {
      "source": "The Wall Street Journal (archived copy)",
      "quote": "he had his team begin tracking tens of thousands of mortgages",
      "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html"
     },
     {
      "source": "The Wall Street Journal (archived copy)",
      "quote": "They concluded it was getting harder for lenders to collect.",
      "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html"
     },
     {
      "source": "U.S. House hearing record",
      "quote": "The reason we had this opinion was we looked at the underlying collateral of these securities.",
      "url": "https://www.govinfo.gov/content/pkg/CHRG-110hhrg56582/html/CHRG-110hhrg56582.htm",
      "about": "John Paulson's testimony"
     }
    ],
    "id": "paying",
    "label": "ARE THE BORROWERS PAYING",
    "who": "John Paulson, Paulson & Co.",
    "now": "Missed payments, defaults and broken loan terms at the companies borrowing to build, and on the other side debt repaid ahead of schedule.",
    "rules": [
     "missed",
     "repaid"
    ],
    "signal": "paying"
   },
   {
    "then": "The ABX index, which priced insurance on subprime mortgage bonds, fell more than 23 percent in February 2007, meaning that insurance was getting dearer. The mass rating cuts came in July, five months later.",
    "sources": [
     {
      "name": "U.S. Senate investigations report",
      "date": "2011-04-13",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf"
     },
     {
      "name": "BIS Quarterly Review",
      "date": "2008-09-01",
      "url": "https://www.bis.org/publ/qtrpdf/r_qt0809h.htm"
     }
    ],
    "quotes": [
     {
      "source": "U.S. Senate investigations report",
      "quote": "In February 2007, the ABX Index fell from a high of $0.90 early in the month",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf"
     },
     {
      "source": "U.S. Senate investigations report",
      "quote": "indicating a drop of more than 23%",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf",
      "about": "the ABX index, February 2007"
     },
     {
      "source": "BIS Quarterly Review",
      "quote": "The ABX family of indices has become a key barometer of subprime mortgage market conditions",
      "url": "https://www.bis.org/publ/qtrpdf/r_qt0809h.htm"
     },
     {
      "source": "U.S. Senate investigations report",
      "quote": "On July 10, S&P placed on credit watch the ratings of 612 subprime RMBS",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf",
      "about": "July 2007, five months after the index fell"
     },
     {
      "source": "U.S. Senate investigations report",
      "quote": "Moody's downgraded 399 subprime RMBS",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf",
      "about": "later the same day, July 10"
     }
    ],
    "id": "price",
    "label": "THE PRICE OF INSURANCE MOVED FIRST",
    "who": "The ABX index of mortgage bond insurance",
    "now": "What lenders charge to lend to, or to insure the debt of, the big AI borrowers. It is a price, so it is listed at zero points with the way it leans.",
    "rules": [],
    "signal": "insure"
   },
   {
    "then": "On July 10, 2007, S&P put 612 subprime mortgage bonds on watch and Moody's cut 399. A Senate report calls the cuts the first mass downgrades in U.S. history. On the S&P call an investor asked why it had not been done many months ago.",
    "sources": [
     {
      "name": "U.S. Senate investigations report",
      "date": "2011-04-13",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf"
     },
     {
      "name": "Financial Crisis Inquiry Report",
      "date": "2011-01",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf"
     },
     {
      "name": "Federal Reserve History",
      "date": "2013-11-22",
      "url": "https://www.federalreservehistory.org/essays/subprime-mortgage-crisis"
     }
    ],
    "quotes": [
     {
      "source": "U.S. Senate investigations report",
      "quote": "On July 10, S&P placed on credit watch the ratings of 612 subprime RMBS",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf"
     },
     {
      "source": "U.S. Senate investigations report",
      "quote": "Moody's downgraded 399 subprime RMBS",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf",
      "about": "later the same day, July 10"
     },
     {
      "source": "U.S. Senate investigations report",
      "quote": "the first mass downgrades in U.S. history",
      "url": "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/PSI%20REPORT%20-%20Wall%20Street%20&%20the%20Financial%20Crisis-Anatomy%20of%20a%20Financial%20Collapse%20(FINAL%205-10-11).pdf",
      "about": "the July 2007 downgrades"
     },
     {
      "source": "Financial Crisis Inquiry Report",
      "quote": "why didn't you do this many, many months ago",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf",
      "about": "an investor on the S&P call"
     },
     {
      "source": "Federal Reserve History",
      "quote": "Shortly thereafter, large numbers of PMBS and PMBS-backed securities were downgraded to high risk",
      "url": "https://www.federalreservehistory.org/essays/subprime-mortgage-crisis"
     }
    ],
    "id": "ratings",
    "label": "WHEN THE RATINGS MOVED",
    "who": "Moody's and S&P, July 2007",
    "now": "Rating cuts and raises on the AI borrowers. A cut can confirm what lenders already saw, so each one is read next to the insurance price.",
    "rules": [
     "downgrade",
     "upgrade"
    ],
    "signal": "ratings",
    "derived": [
     "2007: the year of the July 10 downgrades, as dated in the Senate report"
    ]
   },
   {
    "then": "The official inquiry found the borrowing was often hidden, in derivatives and in entities kept off the balance sheet. Gregory Zuckerman, who wrote the book on Paulson's trade, said too many financial giants still had exposure to the risky mortgages on their books.",
    "sources": [
     {
      "name": "Financial Crisis Inquiry Report",
      "date": "2011-01",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf"
     },
     {
      "name": "NPR",
      "date": "2009-11-06",
      "url": "https://www.npr.org/transcripts/120183535"
     }
    ],
    "quotes": [
     {
      "source": "Financial Crisis Inquiry Report",
      "quote": "the leverage was often hidden",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf",
      "about": "the Commission's conclusions on borrowing in the financial system"
     },
     {
      "source": "Financial Crisis Inquiry Report",
      "quote": "in derivatives positions, in off-balance-sheet entities",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf",
      "about": "the Commission's conclusions on borrowing in the financial system"
     },
     {
      "source": "NPR",
      "quote": "too many financial giants still have exposure to these risky mortgages on their books",
      "url": "https://www.npr.org/transcripts/120183535",
      "about": "Gregory Zuckerman, author of the book on Paulson's trade"
     }
    ],
    "id": "hidden",
    "label": "WHO REALLY HOLDS THE RISK",
    "who": "The Financial Crisis Inquiry Commission",
    "now": "Suppliers that invest in, lend to or stand behind their own customers, and debt raised through ventures that sit off a company's own books.",
    "rules": [
     "circular",
     "debt"
    ],
    "signal": "vendor"
   },
   {
    "then": "Paulson's research told him home prices were flattening. The Financial Crisis Inquiry Report records the view that if prices merely stayed flat, losses would reach the BBB-rated slices of the bonds. Prices did not have to fall. They only had to stop rising.",
    "sources": [
     {
      "name": "The Wall Street Journal (archived copy)",
      "date": "2008-01-15",
      "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html"
     },
     {
      "name": "Financial Crisis Inquiry Report",
      "date": "2011-01",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf"
     }
    ],
    "quotes": [
     {
      "source": "The Wall Street Journal (archived copy)",
      "quote": "Mr. Paulson's research told him home prices were flattening.",
      "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html"
     },
     {
      "source": "Financial Crisis Inquiry Report",
      "quote": "if home prices remained flat, losses would wipe out the BBB-rated tranches",
      "url": "https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf",
      "about": "the report's account of the bet against BBB-rated mortgage bonds"
     }
    ],
    "id": "flat",
    "label": "FLAT WAS ENOUGH",
    "who": "John Paulson's research, as the record tells it",
    "now": "Whether sales from paying AI customers keep growing as fast as the spending promised against them. The question is whether growth slows, not only whether sales fall.",
    "rules": [
     "revenue",
     "miss"
    ]
   },
   {
    "then": "This row is not from the 2008 funds. A later study of people who worked in mortgage finance found they did not exhibit awareness of the problems in housing.",
    "sources": [
     {
      "name": "American Economic Review",
      "date": "2014-09",
      "url": "https://www.aeaweb.org/articles?id=10.1257/aer.104.9.2797"
     }
    ],
    "quotes": [
     {
      "source": "American Economic Review",
      "quote": "did not exhibit awareness of problems in overall housing markets",
      "url": "https://www.aeaweb.org/articles?id=10.1257/aer.104.9.2797",
      "about": "people working in mortgage securitization, in the study's summary"
     }
    ],
    "id": "insiders",
    "label": "INSIDERS: NOT A 2008 SIGNAL",
    "who": "A study of mortgage insiders, American Economic Review",
    "now": "Insider sales and purchases are tracked because people ask about them, always small, and read with care: the people inside can be as wrong as anyone.",
    "rules": [
     "insell",
     "inbuy"
    ],
    "signal": "insiders",
    "derived": [
     "2008: the year of the financial crisis this playbook refers to"
    ]
   }
  ],
  "caution": {
   "then": "History, not a prediction. Paulson's first bets lost money, Burry's investors pressed him until he sold, and an economist at the New York Fed said the same bet placed a year earlier would likely have lost everything.",
   "sources": [
    {
     "name": "New York Fed, Liberty Street Economics",
     "date": "2016-04-01",
     "url": "https://libertystreeteconomics.newyorkfed.org/2016/04/hey-economist-what-did-you-make-of-the-big-short"
    },
    {
     "name": "The Wall Street Journal (archived copy)",
     "date": "2008-01-15",
     "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html"
    },
    {
     "name": "The New York Times (archived copy)",
     "date": "2010-04-03",
     "url": "https://web.archive.org/web/20100410204945/http://www.nytimes.com/2010/04/04/opinion/04burry.html"
    }
   ],
   "quotes": [
    {
     "source": "New York Fed, Liberty Street Economics",
     "quote": "If the protagonists had placed their bets a year earlier",
     "url": "https://libertystreeteconomics.newyorkfed.org/2016/04/hey-economist-what-did-you-make-of-the-big-short",
     "about": "the investors in the film The Big Short, in a New York Fed economist's words"
    },
    {
     "source": "New York Fed, Liberty Street Economics",
     "quote": "they would likely have lost all their money to subprime bulls",
     "url": "https://libertystreeteconomics.newyorkfed.org/2016/04/hey-economist-what-did-you-make-of-the-big-short",
     "about": "the investors in the film The Big Short, in a New York Fed economist's words"
    },
    {
     "source": "New York Fed, Liberty Street Economics",
     "quote": "you will only benefit from your knowledge if you get the timing exactly right",
     "url": "https://libertystreeteconomics.newyorkfed.org/2016/04/hey-economist-what-did-you-make-of-the-big-short",
     "about": "the investors in the film The Big Short, in a New York Fed economist's words"
    },
    {
     "source": "New York Fed, Liberty Street Economics",
     "quote": "many people who were pessimistic about the housing market simply stayed on the sidelines",
     "url": "https://libertystreeteconomics.newyorkfed.org/2016/04/hey-economist-what-did-you-make-of-the-big-short",
     "about": "the investors in the film The Big Short, in a New York Fed economist's words"
    },
    {
     "source": "The Wall Street Journal (archived copy)",
     "quote": "His bets at first were losers.",
     "url": "https://web.archive.org/web/20080118132149/http://online.wsj.com/public/article/SB120036645057290423.html",
     "about": "John Paulson"
    },
    {
     "source": "The New York Times (archived copy)",
     "quote": "During 2007, under constant pressure from my investors, I liquidated most of our credit default swaps",
     "url": "https://web.archive.org/web/20100410204945/http://www.nytimes.com/2010/04/04/opinion/04burry.html",
     "about": "Michael Burry, in his own words"
    }
   ],
   "label": "KEEP IN MIND"
  }
 }
};

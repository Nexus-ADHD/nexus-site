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
  "how_to_read": "The needle starts at 50. Every fact below is dated, sourced and written in our own words. Each one moves the needle 2, 4 or 6 points, and a fact that points away from a pop counts exactly as much as one that points toward it. Reports with no named source wait at zero. Each fact also asks who is saying it, who gains, and what you can do with it.",
  "sizes": [
   "Money facts are sized on the change the fact reports (the amount cut, raised, borrowed, invested or gained), not on a running total: small is under 10 billion dollars, medium is 10 to 100 billion, big is over 100 billion. No dollar figure in the source means small.",
   "Price reactions (falls on good news, holds on bad news, new shares above their asking price): small is under 5 percent, medium is 5 to 15 percent, big is over 15 percent.",
   "The same ladder is used in both directions."
  ],
  "guards": [
   "Every item is one dated fact with a link to a named source, written in our own words, never an outlet's headline as given. No link, no item.",
   "Every item says who is saying it, then asks who gains and why now. It asks; it never states a motive and never accuses. It ends with one plain thing a viewer can do with it.",
   "Every number on screen must appear in a quote copied from the source page, kept in the fact file. The build refuses a number it cannot find there.",
   "Only reported results score. A forecast is not a fact yet.",
   "Every rule has a mirror, and a fact counts the same number of points in either direction.",
   "A report that rests only on unnamed sources is WATCHING: on the feed, zero points, until the company confirms or files it.",
   "Prices moving by themselves do not score. They show as CONTEXT with zero points. The meter scores causes, not the mood.",
   "One fact scores once, under one rule.",
   "An item counts in full for 30 days, half from day 31 to day 60, then FADED: still listed, zero points.",
   "The needle starts at 50 and stays between 0 and 100."
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
    "plain": "The investor is also the supplier: money goes in as investment and comes back as sales.",
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
   }
  ]
 },
 "checked": "2026-11-22",
 "items": [
  {
   "id": "nvda-nov20-fall",
   "date": "2026-11-20",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "Nvidia fell 14 percent on Friday, three days after reporting doubled sales. The Dow and the S&P 500 both closed more than 10 percent below their highs, and the Nasdaq 100 fell 5.6 percent, briefly more than 20 percent below its recent high.",
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
     "url": "https://www.tradingview.com/news/cnbctv:2618fe25f094b:0/"
    },
    {
     "source": "StockAnalysis",
     "quote": "Revenue grew 103% from a year earlier to $115.8B in the fiscal third quarter, which ended October 25.",
     "url": "https://stockanalysis.com/news/nvda-q3-fy2027-earnings-beat/"
    }
   ]
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
   ]
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
   "rail": "Amazon (14.7 percent) and Google (13.7 percent) part-own Anthropic and are among its biggest suppliers"
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
   "id": "coreweave-yield-16",
   "date": "2026-11-06",
   "status": "context",
   "rule": null,
   "size": null,
   "text": "On November 6 lenders were asking more than 16 percent a year to hold CoreWeave's 2032 bonds, and the price of insuring its debt had jumped.",
   "why": "Context, zero points. A bond price is still a price. It shows what lenders think the risk is.",
   "gains": "Said by CNBC, citing bank analysts. CNBC points to incoming governors who may slow or cancel data centers. Who earns more when a loan looks riskier? Is the risk in the company, or in the politics around it?",
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
   ]
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
   ]
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
   "rail": "Oracle, Alphabet and Microsoft sold tens of billions of dollars in bonds to pay for AI building"
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
   ]
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
   ]
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
   "rail": "OpenAI and Oracle cancelled an 800 megawatt expansion in Texas"
  }
 ]
};

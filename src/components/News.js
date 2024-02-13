import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export class News extends PureComponent {

  articles= [
    {
      "source": {
        "id": null,
        "name": "Android Headlines"
      },
      "author": "Hamid Ganji",
      "title": "Elon Musk has to testify in SEC’s probe over his Twitter acquisition",
      "description": "Elon Musk’s purchase of Twitter is still making headlines. In the most recent case, a judge has ordered Musk to testify in the SEC’s probe into his purchase of the company. The billionaire and the SEC now have one week to determine the time and place of testi…",
      "url": "https://www.androidheadlines.com/2024/02/elon-musk-must-testify-in-secs-probe-buying-twitter.html",
      "urlToImage": "https://www.androidheadlines.com/wp-content/uploads/2022/10/AH-Elon-Musk-bird-is-freed-Twitter-image-1.jpg",
      "publishedAt": "2024-02-13T13:15:20Z",
      "content": "Elon Musks purchase of Twitter is still making headlines. In the most recent case, a judge has ordered Musk to testify in the SECs probe into his purchase of the company. The billionaire and the SEC … [+2054 chars]"
    },
    {
      "source": {
        "id": "rt",
        "name": "RT"
      },
      "author": "RT",
      "title": "Bitcoin hits highest price since 2021",
      "description": "Investor excitement over Bitcoin ETF inflows and the upcoming supply halving have been driving up the price of the cryptocurrency Read Full Article at RT.com",
      "url": "https://www.rt.com/business/592362-bitcoin-price-surge-investors/",
      "urlToImage": "https://mf.b37mrtl.ru/files/2024.02/article/65cb65bd20302709300dc8e4.jpg",
      "publishedAt": "2024-02-13T13:14:29Z",
      "content": "The price of Bitcoin broke over the $50,000 mark on Monday, for the first time in two years amid investor excitement over inflows into spot Bitcoin exchange-traded funds (ETFs) and the upcoming suppl… [+1976 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theness.com"
      },
      "author": "Steven Novella",
      "title": "Flow Batteries – Now With Nanofluids",
      "description": "Battery technology has been advancing nicely over the last few decades, with a fairly predictable incremental increase in energy density, charging time, stability, and lifecycle. We now have lithium-ion batteries with a specific energy of 296 Wh/kg – these ar…",
      "url": "https://theness.com/neurologicablog/flow-batteries-now-with-nanofluids/",
      "urlToImage": "https://theness.com/neurologicablog/wp-content/uploads/sites/3/2024/02/Flow-Battery.jpg",
      "publishedAt": "2024-02-13T13:12:54Z",
      "content": "Battery technology has been advancing nicely over the last few decades, with a fairly predictable incremental increase in energy density, charging time, stability, and lifecycle. We now have lithium-… [+7308 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "MarketsandMarkets Research Pvt. Ltd.",
      "title": "E-Mobility Revolution: Navigating the Landscape of Electric Transportation – Exclusive Report by MarketsandMarkets™",
      "description": "Chicago, Feb. 13, 2024 (GLOBE NEWSWIRE) -- The primary purpose of e-mobility\r\n is to minimize reliance on traditional internal combustion engine vehicles powered by fossil fuels, reduce greenhouse gas emissions, and alleviate the environmental impact of conve…",
      "url": "https://www.globenewswire.com/news-release/2024/02/13/2828157/0/en/E-Mobility-Revolution-Navigating-the-Landscape-of-Electric-Transportation-Exclusive-Report-by-MarketsandMarkets.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/afcc5182-4ae0-43a8-a965-4351d590b7ed",
      "publishedAt": "2024-02-13T13:00:00Z",
      "content": "Chicago, Feb. 13, 2024 (GLOBE NEWSWIRE) -- The primary purpose of e-mobility\r\n is to minimize reliance on traditional internal combustion engine vehicles powered by fossil fuels, reduce greenhouse ga… [+12076 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gadgets360.com"
      },
      "author": "Reuters",
      "title": "Tata Motors Announces First EV Price Cuts in India; Electric Car Prices Lowered By Up to 8 Percent",
      "description": "Tata Motors has announced a price cut of up to 120,000 rupees (~$1,450). The price cuts of up to 8 percent are the first such by an electric carmaker in the country. Currently electric vehicles form just 2 percent of car sales in India, as buyers are wary abo…",
      "url": "https://www.gadgets360.com/auto/news/tata-motors-first-ev-price-cut-india-electric-automaker-5050604",
      "urlToImage": "https://i.gadgets360cdn.com/large/tata_motors_nexon_reuters_1707828276600.jpg",
      "publishedAt": "2024-02-13T12:53:56Z",
      "content": "Indian automaker Tata Motors' electric vehicle (EV) unit on Tuesday said it has reduced prices of its cars by up to 120,000 rupees (~$1,450) in what is the first instance of a price cut by an electri… [+2016 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MobileSyrup"
      },
      "author": "Craig Donaldson",
      "title": "GM reveals pricing for the new Chevy Equinox EV",
      "description": "General Motors (GM) has released pricing details and the estimated range of the much anticipated Chevy Equinox electric vehicle (EV), which will be available later this year. GM has currently only released U.S. pricing, with Canadian pricing still to follow. …",
      "url": "https://mobilesyrup.com/2024/02/13/gm-reveals-pricing-the-new-chevy-equinox-ev/",
      "urlToImage": "https://cdn.mobilesyrup.com/wp-content/uploads/2024/02/header-equinox-ev-scaled.jpg",
      "publishedAt": "2024-02-13T12:41:27Z",
      "content": "General Motors (GM) has released pricing details and the estimated range of the much anticipated Chevy Equinox electric vehicle (EV), which will be available later this year. GM has currently only re… [+2311 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yanko Design"
      },
      "author": "Srishti Mitra",
      "title": "Top 10 Cat-Friendly Designs To Keep Your Feline Friends Content, Cozy & Occupied",
      "description": "Top 10 Cat-Friendly Designs To Keep Your Feline Friends Content, Cozy & OccupiedI love spending time and canoodling with my cats, but as much as I love being around them, cats are pretty quick-witted creatures, and they...",
      "url": "https://www.yankodesign.com/2024/02/13/top-10-cat-friendly-designs-to-keep-your-feline-friends-content-cozy-occupied-at-home/",
      "urlToImage": "https://www.yankodesign.com/images/design_news/2024/02/top-10-cat-friendly-designs-to-keep-your-feline-friends-content-cozy-occupied-at-home/top_10_cat_friendly_designs_yanko_design_hero.jpeg",
      "publishedAt": "2024-02-13T12:40:18Z",
      "content": "I love spending time and canoodling with my cats, but as much as I love being around them, cats are pretty quick-witted creatures, and they require constant entertainment and stimulation, which often… [+9961 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "The Morning After: How did Tesla win the EV charging wars?",
      "description": "Electric vehicles from Stellantis brands, including Dodge and Chrysler, will start using the NACS connector in select models next year. The automaker will also offer an adaptor for existing vehicles, so drivers can use NACS or Combined Charging System (CCS) p…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173053034",
      "urlToImage": null,
      "publishedAt": "2024-02-13T12:34:18Z",
      "content": "Electric vehicles from Stellantis brands, including Dodge and Chrysler, will start using the NACS connector in select models next year. The automaker will also offer an adaptor for existing vehicles,… [+3469 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Mat Smith",
      "title": "The Morning After: How did Tesla win the EV charging wars?",
      "description": "Electric vehicles from Stellantis brands, including Dodge and Chrysler, will start using the NACS connector in select models next year. The automaker will also offer an adaptor for existing vehicles, so drivers can use NACS or Combined Charging System (CCS) p…",
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3520b235-7d1a-4cfd-8229-d5c584cdabdc",
      "urlToImage": null,
      "publishedAt": "2024-02-13T12:16:52Z",
      "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 242 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketscreener.com"
      },
      "author": null,
      "title": "News Highlights: Top Company News of the Day - Tuesday at 7 AM ET",
      "description": "(marketscreener.com) \nCarl Icahn Reports Stake in JetBlue \n \n\n The activist investor has a nearly 10% stake in the airline and may consider pushing for board representation. \n\n \nTesla Stock Broke Its Four-Day Rally. Why It's Falling Again Tuesday. \n \n\n The el…",
      "url": "https://www.marketscreener.com/quote/stock/WUXI-APPTEC-CO-LTD-44403583/news/News-Highlights-Top-Company-News-of-the-Day-Tuesday-at-7-AM-ET-45939414/",
      "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      "publishedAt": "2024-02-13T12:16:20Z",
      "content": "Carl Icahn Reports Stake in JetBlue \r\nThe activist investor has a nearly 10% stake in the airline and may consider pushing for board representation. \r\nTesla Stock Broke Its Four-Day Rally. Why It's F… [+1785 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketscreener.com"
      },
      "author": null,
      "title": "Experiential Marketing Firm VOLO Events Agency Wins Best Event Technology Award for PacBio Product Launch",
      "description": "(marketscreener.com) \n\nATLANTA, Feb. 13, 2024 /PRNewswire/ -- VOLO Events Agency , a leading producer of experiential marketing and live events for global brands, has won the best Event Technology award at the BizBash 11th Annual Event Experience Awards. The …",
      "url": "https://www.marketscreener.com/quote/stock/PACIFIC-BIOSCIENCES-OF-CA-6797675/news/Experiential-Marketing-Firm-VOLO-Events-Agency-Wins-Best-Event-Technology-Award-for-PacBio-Product-L-45939177/",
      "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      "publishedAt": "2024-02-13T12:01:08Z",
      "content": "ATLANTA, Feb. 13, 2024 /PRNewswire/ -- VOLO Events Agency (VOLO), a leading producer of experiential marketing and live events for global brands, has won the best Event Technology award at the BizBas… [+4237 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "washington post",
      "title": "TESLA worker killed in fiery crash may be first 'Full Self-Driving' fatality...",
      "description": "Hans von Ohain, a Tesla employee, died in a crash last year when his Model 3 suddenly veered off the road.",
      "url": "https://www.washingtonpost.com/technology/interactive/2024/tesla-full-self-driving-fatal-crash/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NQHOS2X2YYTD6U3FRX2JIFMYQQ.jpg&w=1200",
      "publishedAt": "2024-02-13T12:00:03Z",
      "content": "The following footage obtained by The Washington Post shows Colorado authorities responding to a car crash on May 16, 2022, in Evergreen, Colo.\r\nThis story is best experienced with sound.\r\nEnable aud… [+14523 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Steve Richmond, Forbes Councils Member, \n Steve Richmond, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/steverichmond/",
      "title": "Edge-Of-Network Computing And AI: How AI May Fill Gaps In 5G Tech",
      "description": "Edge and AI are transforming vehicles into true self-driving machines, filling any gaps in low-latency 5G tech and enabling companies to pioneer advanced autonomy.",
      "url": "https://www.forbes.com/sites/forbestechcouncil/2024/02/13/edge-of-network-computing--ai-how-ai-may-fill-gaps-in-5g-tech/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64a57380e07eea1def9805d0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-13T12:00:00Z",
      "content": "Founder of Projetech, Inc.\r\ngetty\r\nThe automotive industry has experienced rapid advancements due to the integration of edge computing and artificial intelligence (AI) in recent years. As vehicles co… [+7177 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nakedcapitalism.com"
      },
      "author": "Yves Smith",
      "title": "Links 2/13/2024",
      "description": "Our tempestuous daily links: Chernboyl wolves, why is sex on decline? Great Salt Lake mining, US Pacific Islands retreat? Sudan famine, Rafah attack imminent, China backs Russia in Ukraine, diplomatic dumbing down, Kamala as President, Hur report anger, AI, U…",
      "url": "https://www.nakedcapitalism.com/2024/02/links-2-13-2024.html",
      "urlToImage": "https://www.nakedcapitalism.com/wp-content/uploads/2024/02/Screen-Shot-2024-02-13-at-3.27.48-PM.png",
      "publishedAt": "2024-02-13T11:55:07Z",
      "content": "Mutant wolves exposed to Chernobyl disaster have evolved a new superpower, scientists discover Daily Mail\r\nTools of the Wild: Unveiling the Crafty Side of Nature Nautilus (Micael T)\r\nAt 40, Franz Kaf… [+8987 chars]"
    },
    {
      "source": {
        "id": "rt",
        "name": "RT"
      },
      "author": "RT",
      "title": "‘No way in hell’ Russia will lose in Ukraine – Musk",
      "description": "US financial aid is only prolonging the conflict between Russia and Ukraine, which isn’t in Kiev’s interest, Elon Musk has said Read Full Article at RT.com",
      "url": "https://www.rt.com/news/592365-musk-ukraine-aid-putin/",
      "urlToImage": "https://mf.b37mrtl.ru/files/2024.02/article/65cb559520302708a811d568.jpg",
      "publishedAt": "2024-02-13T11:52:47Z",
      "content": "There is “no way in hell” that Russia will suffer defeat in its conflict with Ukraine, Tesla and SpaceX CEO Elon Musk has said.\r\nMusk, one of the world’s richest men, made the comment on Monday durin… [+2182 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investorplace.com",
      "title": "NIO Stock Forecast: Why Investors Need to Drive Far, Far Away From This EV Play",
      "description": "Shares could fall another 40% in 2024 as more trouble looms According to my Nio (NYSE: ) stock forecast, the long-term outlook isn’t pleasant. EV sales are taking a turn for the worse. The company is battling with steep competition, and a weaker EV market cou…",
      "url": "https://biztoc.com/x/a01916cb280ad5fa",
      "urlToImage": "https://c.biztoc.com/p/a01916cb280ad5fa/og.webp",
      "publishedAt": "2024-02-13T11:50:13Z",
      "content": "Shares could fall another 40% in 2024 as more trouble loomsAccording to my Nio (NYSE: ) stock forecast, the long-term outlook isnt pleasant. EV sales are taking a turn for the worse. The company is b… [+260 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Barbara Kollmeyer",
      "title": "Former hedge fund star says this is what will trigger the next bear market.",
      "description": "Former hedge-fund manager Russell Clark says the only thing standing in the way of a bear market for stock is Japan.",
      "url": "https://www.marketwatch.com/story/former-hedge-fund-star-says-this-is-what-will-trigger-the-next-bear-market-25d3105b",
      "urlToImage": "https://images.mktw.net/im-83936207/social",
      "publishedAt": "2024-02-13T11:50:00Z",
      "content": "Much of Wall Street expects easing inflation, but an overshoot could dash hopes of a May rate cut, curtailing the S&amp;P 500s \r\n SPX\r\n waltz with 5,000, warn some.What might take this market down ev… [+6463 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investorplace.com",
      "title": "Tesla Stock Could Get Booted From the Mag-7. Buy It Anyway. Here’s Why",
      "description": "You waited for a pullback in TSLA stock and now you got it, so quit worrying and start investing Electric vehicle manufacturer Tesla (NASDAQ: ) might not stay in the prestigious “Magnificent Seven” or “Mag-7” club much longer. Tesla is out of favor for the mo…",
      "url": "https://biztoc.com/x/1caa051bd5ddefc0",
      "urlToImage": "https://c.biztoc.com/p/1caa051bd5ddefc0/s.webp",
      "publishedAt": "2024-02-13T11:42:24Z",
      "content": "You waited for a pullback in TSLA stock and now you got it, so quit worrying and start investingElectric vehicle manufacturer Tesla (NASDAQ: ) might not stay in the prestigious Magnificent Seven or M… [+263 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investorplace.com",
      "title": "RIVN Stock Outlook: Should You Buy the Dip on Rivian?",
      "description": "Rivian is in a race between its cash and the opening of its Georgia plant. Is it worth a speculation? While the fall of Tesla (NASDAQ: ) has been the Electric Vehicle (EV) story in 2024, its smaller rival Rivian (NASDAQ: ) has done worse. This performance is …",
      "url": "https://biztoc.com/x/d5f796dc45688e09",
      "urlToImage": "https://c.biztoc.com/p/d5f796dc45688e09/s.webp",
      "publishedAt": "2024-02-13T11:42:15Z",
      "content": "Rivian is in a race between its cash and the opening of its Georgia plant. Is it worth a speculation?While the fall of Tesla (NASDAQ: ) has been the Electric Vehicle (EV) story in 2024, its smaller r… [+280 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "Forget Tesla, Buy This Magnificent Auto Stock Instead",
      "description": "The challenges that Tesla (NASDAQ: TSLA) has been facing are pretty well publicized. The electric vehicle (EV) business is dealing with a combination of slower sales growth and shrinking margins, primarily as a result of macro headwinds and competitive factor…",
      "url": "https://biztoc.com/x/c437a9c58a10def5",
      "urlToImage": "https://c.biztoc.com/p/c437a9c58a10def5/s.webp",
      "publishedAt": "2024-02-13T11:28:05Z",
      "content": "The challenges that Tesla (NASDAQ: TSLA) has been facing are pretty well publicized. The electric vehicle (EV) business is dealing with a combination of slower sales growth and shrinking margins, pri… [+281 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketscreener.com"
      },
      "author": null,
      "title": "North American Morning Briefing: Stocks Seen Struggling Ahead of CPI Report",
      "description": "(marketscreener.com) \nOPENING CALL \n\n Stock futures were lower on Tuesday ahead of the release of January's inflation data, which could offer clues as to whether the Federal Reserve will cut interest rates as early as next month. \n\n If the report matches expe…",
      "url": "https://www.marketscreener.com/news/latest/North-American-Morning-Briefing-Stocks-Seen-Struggling-Ahead-of-CPI-Report-45938765/",
      "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      "publishedAt": "2024-02-13T11:20:08Z",
      "content": "OPENING CALL \r\nStock futures were lower on Tuesday ahead of the release of January's inflation data, which could offer clues as to whether the Federal Reserve will cut interest rates as early as next… [+9825 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TOI Tech Desk",
      "title": "Elon Musk revisits old post on Tesla selling to Apple, says this about company CEO Tim Cook",
      "description": "Apple's plans for an electric car have been delayed to at least 2028. Initially, the company planned to release a self-driving car for highways by 2026, but they shifted their focus to creating an electric vehicle with basic driver-assistance features, simila…",
      "url": "https://timesofindia.indiatimes.com/gadgets-news/elon-musk-revisits-tesla-selling-to-apple-and-his-attempt-to-connect-with-tim-cook/articleshow/107661419.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-107661420,width-1070,height-580,imgsize-527560,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-02-13T11:19:40Z",
      "content": "5G smartphones with 10GB or more RAM under Rs 25,000"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Reuters",
      "title": "Marketmind: Nikkei and Nasdaq stalk records, CPI lurks",
      "description": "Marketmind: Nikkei and Nasdaq stalk records, CPI lurks",
      "url": "https://www.investing.com/news/commodities-news/marketmind-nikkei-and-nasdaq-stalk-records-cpi-lurks-3301919",
      "urlToImage": "https://i-invdn-com.investing.com/news/indicatornews_1_800x533_L_1413124982.jpg",
      "publishedAt": "2024-02-13T11:16:31Z",
      "content": "A look at the day ahead in U.S. and global markets from Mike Dolan\r\nFrenetic trading activity around artificial intelligence and chipmakers has tech heavy stock indexes from Wall St's Nasdaq to Japan… [+4119 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Rina Torchinsky, Forbes Staff, \n Rina Torchinsky, Forbes Staff\n https://www.forbes.com/sites/rinatorchinsky/",
      "title": "The Future Of Business To Business Banking: Fintech 50 2024",
      "description": "Compared with other fintech segments, business to business banking had a pretty good 2023–thanks in part to the failure of a conventional bank.",
      "url": "https://www.forbes.com/sites/rinatorchinsky/2024/02/13/the-future-of-business-to-business-banking-fintech-50-2024/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65ca49c9ad26e48437eb62c8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-13T11:15:00Z",
      "content": "Lauren Myrick's company Found is the only Fintech 50 newcomer in the business to business banking category this year.\r\nFound\r\nCompared with other fintech segments, business to business banking had a … [+10295 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketscreener.com"
      },
      "author": null,
      "title": "MORNING BID AMERICAS-Nikkei and Nasdaq stalk records, CPI lurks",
      "description": "(marketscreener.com) \n A look at the day ahead in U.S. and global markets from Mike\nDolan\n \n Frenetic trading activity around artificial intelligence and\nchipmakers has tech heavy stock indexes from Wall St's Nasdaq to\nJapan's Nikkei just a stone's throw from…",
      "url": "https://www.marketscreener.com/quote/index/NASDAQ-COMPOSITE-4944/news/MORNING-BID-AMERICAS-Nikkei-and-Nasdaq-stalk-records-CPI-lurks-45938726/",
      "urlToImage": "https://www.marketscreener.com/images/reuters/2024-02/2024-02-13T111452Z_1_LYNXNPEK1C0AM_RTROPTP_3_USA-STOCKS.JPG",
      "publishedAt": "2024-02-13T11:12:07Z",
      "content": "A look at the day ahead in U.S. and global markets from Mike\r\nDolan\r\nFrenetic trading activity around artificial intelligence and\r\nchipmakers has tech heavy stock indexes from Wall St's Nasdaq to\r\nJa… [+3906 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "washingtonpost.com",
      "title": "Tesla worker killed in fiery crash may be first ‘Full Self-Driving’ fatality",
      "description": "Hans von Ohain and Erik Rossiter were on their way to play golf one afternoon in 2022 when von Ohain’s Tesla suddenly swerved off Upper Bear Creek Road. The car’s driver-assistance software, Full Self-Driving, was struggling to navigate the mountain curves, f…",
      "url": "https://biztoc.com/x/ff054c051f3cdaf3",
      "urlToImage": "https://c.biztoc.com/p/ff054c051f3cdaf3/s.webp",
      "publishedAt": "2024-02-13T11:08:34Z",
      "content": "Hans von Ohain and Erik Rossiter were on their way to play golf one afternoon in 2022 when von Ohains Tesla suddenly swerved off Upper Bear Creek Road. The cars driver-assistance software, Full Self-… [+304 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Beast"
      },
      "author": "Dan Ladden-Hall",
      "title": "Elon Musk Asks: What Kind of ‘Psycho’ Would Want Ukraine to Keep Fighting Putin?",
      "description": "Gonzalo Fuentes/Reuters\r\nElon Musk has encouraged U.S. voters to ask their representatives to oppose further military funding for Ukraine, claiming that there is “no way in hell” that Russia will lose the war and that further support to Kyiv will only prolong…",
      "url": "https://www.thedailybeast.com/musk-asks-what-kind-of-psycho-would-want-ukraine-to-keep-fighting-putin",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2667,w_4742,x_0,y_113/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1707821197/2024-02-11T162012Z_2101946611_RC2F06ALNXJP_RTRMADP_3_USA-SEC-MUSK_mdtvzh",
      "publishedAt": "2024-02-13T11:05:46Z",
      "content": "Elon Musk has encouraged U.S. voters to ask their representatives to oppose further military funding for Ukraine, claiming that there is no way in hell that Russia will lose the war and that further … [+3092 chars]"
    }
     ]

  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>Top Headlines</h2>
          <div className='row'>
            <div className='col-md-4'>
              <NewsItem title="myTitle" description="mydes" ImageUrl="">
              </NewsItem>
            </div>
            <div className='col-md-4'>
              <NewsItem title="myTitle" description="mydes" ImageUrl="">
              </NewsItem>
            </div>
            <div className='col-md-4'>
              <NewsItem title="myTitle" description="mydes" ImageUrl="">
              </NewsItem>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
}

export default News

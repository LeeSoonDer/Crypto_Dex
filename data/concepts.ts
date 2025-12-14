
import { Concept, TypeDefinition, HistoricalEvent } from '../types';

export const concepts: Concept[] = [
  {
    id: "blockchain",
    title: "Blockchain",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=600",
    shortSummary: "The immutable digital ledger.",
    bullets: [
      "Blocks of data chained together.",
      "Cannot be edited once written.",
      "Distributed across thousands of computers."
    ],
    relatedTags: ["Tech", "Security"],
    details: {
      longDescription: "A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.",
      extraBullets: [
        "Decentralization: No single entity controls the network.",
        "Transparency: Anyone can view the ledger.",
        "Security: Cryptography ensures data integrity."
      ],
      funFact: "The first blockchain was conceptualized in 2008 by Satoshi Nakamoto.",
      analogy: "Think of it like a shared Google Doc that everyone can read and add to, but no one can delete or rewrite what's already there."
    }
  },
  {
    id: "mining",
    title: "Mining",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=600",
    shortSummary: "Validating transactions for rewards.",
    bullets: [
      "Computers solve complex math puzzles.",
      "Secures the network from attacks.",
      "Miners are paid in new coins."
    ],
    relatedTags: ["PoW", "Hardware"],
    details: {
      longDescription: "Mining is the process by which new cryptocurrency coins are entered into circulation and is also a critical component of the maintenance and development of the blockchain ledger. It is performed using very sophisticated hardware that solves an extremely complex computational math problem.",
      extraBullets: [
        "Proof of Work: The consensus mechanism used by Bitcoin.",
        "Energy Intensive: Requires significant electricity.",
        "Competition: First miner to solve the puzzle gets the reward."
      ],
      funFact: "The last Bitcoin will be mined around the year 2140.",
      analogy: "Think of it like a lottery where your chance of winning depends on how many tickets (computing power) you buy."
    }
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600",
    shortSummary: "Self-executing code on the blockchain.",
    bullets: [
      "Code that runs automatically.",
      "Removes need for middlemen.",
      "Powering DeFi and NFTs."
    ],
    relatedTags: ["Ethereum", "Automation"],
    details: {
      longDescription: "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They are typically used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary's involvement or time loss.",
      extraBullets: [
        "Immutable: Code cannot be changed once deployed (usually).",
        "Trustless: No need to trust a third party.",
        "Deterministic: Always produces the same output for a given input."
      ],
      analogy: "Think of it like a vending machine: you put money in and select a product, and the machine automatically delivers it without a cashier."
    }
  },
  {
    id: "wallets",
    title: "Crypto Wallets",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
    shortSummary: "Your digital keychain.",
    bullets: [
      "Stores keys, not the coins.",
      "Required to sign transactions.",
      "Hot (Online) vs Cold (Offline)."
    ],
    relatedTags: ["Security", "Self-Custody"],
    details: {
      longDescription: "A cryptocurrency wallet doesn't actually store your coins inside it like a physical wallet stores cash. Instead, it stores the cryptographic 'keys' (passwords) that allow you to access and move your coins on the blockchain.",
      extraBullets: [
        "Public Key: Your address (like an email address). Safe to share.",
        "Private Key: Your password. Never share this.",
        "Seed Phrase: The master backup key (12-24 words)."
      ],
      funFact: "If you lose your private key, your crypto is gone forever. There is no 'Forgot Password' button.",
      analogy: "Think of it like a debit card (the wallet) and a PIN (the key). The money isn't inside the card; the card just gives you access to the money in the bank vault (the blockchain)."
    }
  }
];

export const cryptoTypes: TypeDefinition[] = [
  {
    id: "Layer 1",
    name: "Layer 1 Blockchains",
    description: "The base network layer. The foundation.",
    typicalExamples: ["Bitcoin", "Ethereum", "Solana"],
    riskNotes: "Generally lower risk (for major chains), but technical failure is possible.",
    details: {
      expandedDescription: "Layer 1 blockchains are the fundamental base networks. They process and record transactions on their own public ledger.",
      useCases: ["Store of Value", "Smart Contract Platform", "Payments"],
      exampleCoinsFull: [{ name: "Bitcoin", symbol: "BTC" }, { name: "Ethereum", symbol: "ETH" }]
    }
  },
  {
    id: "Layer 2",
    name: "Layer 2 Scaling",
    description: "Built on top of L1s to make them faster.",
    typicalExamples: ["Arbitrum", "Optimism", "Polygon"],
    riskNotes: "Smart contract risk, centralized sequencer risk.",
    details: {
      expandedDescription: "Layer 2 refers to a secondary framework or protocol that is built on top of an existing blockchain system. The main goal of these protocols is to solve the transaction speed and scaling difficulties that are being faced by major cryptocurrency networks.",
      useCases: ["Faster Transactions", "Lower Fees"],
      exampleCoinsFull: [{ name: "Arbitrum", symbol: "ARB" }, { name: "Optimism", symbol: "OP" }]
    }
  },
  {
    id: "DeFi",
    name: "Decentralized Finance",
    description: "Financial services without the banks.",
    typicalExamples: ["Uniswap", "Aave", "Maker"],
    riskNotes: "High risk of hacks, bugs, and economic exploits.",
    details: {
      expandedDescription: "DeFi uses smart contracts to create protocols that replicate existing financial services in a more open, interoperable, and transparent way.",
      useCases: ["Lending", "Borrowing", "Trading", "Yield Farming"],
      exampleCoinsFull: [{ name: "Uniswap", symbol: "UNI" }, { name: "Aave", symbol: "AAVE" }]
    }
  },
  {
    id: "Meme",
    name: "Meme Coins",
    description: "Community-led currencies based on internet culture.",
    typicalExamples: ["Dogecoin", "Pepe", "Shiba Inu"],
    riskNotes: "Extreme volatility. High risk of losing everything.",
    details: {
      expandedDescription: "Meme coins are cryptocurrencies inspired by memes or internet jokes. They often have a massive supply and high volatility.",
      useCases: ["Speculation", "Community Building", "Tipping"],
      exampleCoinsFull: [{ name: "Dogecoin", symbol: "DOGE" }, { name: "Pepe", symbol: "PEPE" }]
    }
  },
  {
    id: "Stablecoin",
    name: "Stablecoins",
    description: "Pegged to the value of a fiat currency (USD).",
    typicalExamples: ["USDT", "USDC", "DAI"],
    riskNotes: "De-pegging risk, regulatory risk.",
    details: {
      expandedDescription: "Stablecoins are cryptocurrencies where the price is designed to be pegged to a cryptocurrency, fiat money, or to exchange-traded commodities.",
      useCases: ["Payments", "Trading Pair", "Store of Value"],
      exampleCoinsFull: [{ name: "Tether", symbol: "USDT" }, { name: "USD Coin", symbol: "USDC" }]
    }
  },
  {
    id: "Gaming",
    name: "GameFi",
    description: "In-game economies and asset ownership.",
    typicalExamples: ["Immutable", "Axie Infinity", "Gala"],
    riskNotes: "Game popularity risk, token inflation.",
    details: {
        expandedDescription: "GameFi refers to the combination of video games and decentralized finance. It relies on the play-to-earn model.",
        useCases: ["In-game Items", "Currency"],
        exampleCoinsFull: [{ name: "Immutable", symbol: "IMX" }]
    }
  },
  {
    id: "AI",
    name: "Artificial Intelligence",
    description: "Convergence of AI and Blockchain.",
    typicalExamples: ["Fetch.ai", "Render"],
    riskNotes: "Speculative, emerging technology.",
    details: {
        expandedDescription: "AI crypto projects combine artificial intelligence with blockchain technology to create decentralized AI marketplaces and services.",
        useCases: ["Decentralized Compute", "Data Marketplaces"],
        exampleCoinsFull: [{ name: "Fetch.ai", symbol: "FET" }]
    }
  },
   {
    id: "Infrastructure",
    name: "Infrastructure",
    description: "Tools and services for the ecosystem.",
    typicalExamples: ["Chainlink", "The Graph", "Filecoin"],
    riskNotes: "Technical complexity, adoption risk.",
    details: {
        expandedDescription: "Infrastructure projects provide the underlying technology and services that allow other blockchain projects to function.",
        useCases: ["Oracles", "Data Indexing", "Storage"],
        exampleCoinsFull: [{ name: "Chainlink", symbol: "LINK" }]
    }
  },
  {
    id: "Privacy",
    name: "Privacy Coins",
    description: "Focus on anonymity and untraceable transactions.",
    typicalExamples: ["Monero", "Zcash"],
    riskNotes: "Regulatory crackdown risk.",
    details: {
        expandedDescription: "Privacy coins utilize cryptographic techniques to obscure transaction details such as the sender, receiver, and amount.",
        useCases: ["Private Transactions"],
        exampleCoinsFull: [{ name: "Monero", symbol: "XMR" }]
    }
  }
];

export const history: HistoricalEvent[] = [
  {
    year: 2008,
    title: "The Whitepaper",
    description: "Satoshi Nakamoto publishes 'Bitcoin: A Peer-to-Peer Electronic Cash System' on Halloween.",
    details: {
      longDescription: "On October 31, 2008, an anonymous cryptographer named Satoshi Nakamoto released the Bitcoin whitepaper to a cryptography mailing list. It proposed a solution to the double-spending problem without needing a central authority, laying the groundwork for the entire industry.",
      impactPoints: ["Invention of Blockchain", "Solved Double-Spend Problem", "Birth of Decentralization"]
    }
  },
  {
    year: 2009,
    title: "Genesis Block",
    description: "The Bitcoin network goes live. Block 0 is mined.",
    details: {
      longDescription: "On January 3rd, 2009, Satoshi mined the first block of the Bitcoin blockchain. Embedded in the code was the text: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', highlighting the political motivation behind the currency.",
      impactPoints: ["Network Launch", "First 50 BTC Created", "Proof of Concept"]
    }
  },
  {
    year: 2010,
    title: "Bitcoin Pizza Day",
    description: "The first real-world commercial transaction: 10,000 BTC for two pizzas.",
    details: {
      longDescription: "Laszlo Hanyecz, a developer, posted on a forum offering 10,000 Bitcoins for a couple of pizzas. A user accepted the offer. At the time, the coins were worth ~$41. Today, they would be worth hundreds of millions.",
      impactPoints: ["First Commercial Use", "Price Discovery Begins", "Most Expensive Meal in History"]
    }
  },
  {
    year: 2011,
    title: "Parity & Silk Road",
    description: "Bitcoin hits $1.00 parity with the USD. The dark web marketplace Silk Road launches.",
    details: {
      longDescription: "Bitcoin achieved a major psychological milestone by reaching $1.00. However, its reputation was tarnished by the launch of Silk Road, an illicit marketplace that used Bitcoin for anonymous payments, attracting regulatory scrutiny.",
      impactPoints: ["1 BTC = 1 USD", "Media Attention", "Regulatory Concerns"]
    }
  },
  {
    year: 2012,
    title: "The First Halving",
    description: "Bitcoin's mining reward drops from 50 to 25 BTC for the first time.",
    details: {
      longDescription: "The first demonstration of Bitcoin's deflationary monetary policy. The protocol automatically cut the supply of new coins in half, setting the stage for the 4-year market cycle theory.",
      impactPoints: ["Supply Shock", "Deflationary Proof", "Price Rally Followed"]
    }
  },
  {
    year: 2013,
    title: "The $1,000 Milestone",
    description: "Bitcoin breaks $1,000 for the first time amidst the first major media frenzy.",
    details: {
      longDescription: "Driven by the Cypress banking crisis and growing adoption, Bitcoin surged from $13 to over $1,000. This year also saw the infamous 'HODL' typo post on the Bitcointalk forum.",
      impactPoints: ["Mainstream News Coverage", "Birth of 'HODL'", "First Major Bubble"]
    }
  },
  {
    year: 2014,
    title: "Mt. Gox Collapse",
    description: "The world's largest exchange is hacked and files for bankruptcy.",
    details: {
      longDescription: "Mt. Gox handled 70% of all Bitcoin transactions. After halting withdrawals, they revealed a hack of 850,000 BTC. The market crashed 80% and entered a multi-year bear market.",
      impactPoints: ["Loss of Trust", "Bear Market Begins", "Self-Custody Importance"]
    }
  },
  {
    year: 2015,
    title: "Ethereum Launch",
    description: "Vitalik Buterin launches Ethereum, introducing programmable smart contracts.",
    details: {
      longDescription: "Ethereum went live with its 'Frontier' release. Unlike Bitcoin, which was just money, Ethereum allowed developers to write code (Smart Contracts) on the blockchain, enabling the creation of tokens, dApps, and DeFi.",
      impactPoints: ["Smart Contracts Created", "Birth of 'Crypto' vs 'Bitcoin'", "Programmable Money"]
    }
  },
  {
    year: 2016,
    title: "The DAO Hack",
    description: "A decentralized venture fund is hacked for $50M, splitting Ethereum in two.",
    details: {
      longDescription: "The DAO raised $150M but had a critical code bug. Hackers drained it. The Ethereum community voted to reverse the chain to save funds, creating Ethereum (ETH) and the original chain Ethereum Classic (ETC).",
      impactPoints: ["Hard Fork Controversy", "Code is Law Debate", "Ethereum Classic Born"]
    }
  },
  {
    year: 2017,
    title: "ICO Mania",
    description: "Retail mania sends Bitcoin to $20,000. Thousands of new tokens launch.",
    details: {
      longDescription: "Initial Coin Offerings (ICOs) allowed startups to raise billions with just a whitepaper. While many were scams (BitConnect), this funded legitimate projects like Aave and Chainlink. Bitcoin futures also launched on CME.",
      impactPoints: ["Mass Retail Adoption", "Regulatory Crackdown", "Bitcoin Futures"]
    }
  },
  {
    year: 2018,
    title: "Crypto Winter",
    description: "The bubble bursts. Prices crash 80-90% across the board.",
    details: {
      longDescription: "Following the 2017 euphoria, reality set in. Regulatory bans in China and Korea, along with ICO scams unwinding, led to a brutal bear market. Builders kept building ('BUIDL') during this quiet period.",
      impactPoints: ["Market Washout", "Focus on Utility", "Institutional Hesitancy"]
    }
  },
  {
    year: 2020,
    title: "DeFi Summer",
    description: "Decentralized Finance explodes. Bitcoin becomes 'Digital Gold' during COVID.",
    details: {
      longDescription: "Protocols like Uniswap and Compound introduced yield farming, attracting billions. Simultaneously, corporations like MicroStrategy began buying Bitcoin as a hedge against inflation caused by central bank printing.",
      impactPoints: ["Yield Farming", "Corporate Treasuries", "Start of Bull Run"]
    }
  },
  {
    year: 2021,
    title: "NFTs & El Salvador",
    description: "Digital art mania, dog coins, and the first nation to adopt Bitcoin.",
    details: {
      longDescription: "NFTs broke into the mainstream with Beeple's $69M sale. El Salvador made Bitcoin legal tender. China banned mining, causing a migration to the US. Bitcoin reached $69,000.",
      impactPoints: ["Cultural Impact", "Nation State Adoption", "Mining Migration"]
    }
  },
  {
    year: 2022,
    title: "The Great Deleveraging",
    description: "Terra/Luna, 3AC, Celsius, and FTX collapse in a domino effect.",
    details: {
      longDescription: "The collapse of the Terra stablecoin wiped out $60B, exposing over-leveraged firms. Major lenders went bankrupt. The year ended with the massive fraud revelation at FTX, shaking trust in the industry to its core.",
      impactPoints: ["Massive Fraud Exposed", "Algorithmic Stablecoins Failed", "Regulation Demanded"]
    }
  },
  {
    year: 2023,
    title: "Legal Battles & Renewal",
    description: "US Courts rule on crypto. Binance settles. The market begins to heal.",
    details: {
      longDescription: "Ripple won a partial victory against the SEC (XRP is not a security). Grayscale won its lawsuit to convert GBTC to an ETF. Binance CEO CZ settled with the DOJ. These events cleared the path for institutional adoption.",
      impactPoints: ["Legal Clarity", "Bad Actors Removed", "Pre-ETF Rally"]
    }
  },
  {
    year: 2024,
    title: "The Institutional Era",
    description: "Spot Bitcoin ETFs are approved. Wall Street officially enters crypto.",
    details: {
      longDescription: "The SEC approved 11 Spot Bitcoin ETFs, allowing BlackRock and Fidelity to sell Bitcoin to ordinary investors. Bitcoin hit a new all-time high before the Halving for the first time in history.",
      impactPoints: ["Wall Street Adoption", "New All-Time Highs", "Global Legitimacy"]
    }
  }
];
    
import { Crypto, CryptoType, BattleStats } from '../types';

// Helper to generate consistent stats based on type/rarity/risk
const generateStats = (type: CryptoType, risk: string, rarity: string): BattleStats => {
  const isMeme = type === "Meme";
  const isStable = type === "Stablecoin";
  const isL1 = type === "Layer 1";
  
  let stats: BattleStats = {
    adoption: 50,
    volatility: 50,
    innovation: 70,
    decentralization: 60,
    community: 60
  };

  // Adjust Volatility
  if (isStable) stats.volatility = 5;
  else if (risk === "Extreme") stats.volatility = 95;
  else if (risk === "High") stats.volatility = 80;
  else if (risk === "Low") stats.volatility = 30;

  // Adjust Adoption (Proxy by rarity/type)
  if (rarity === "Legendary" || rarity === "Mythic") stats.adoption = 95;
  else if (rarity === "Rare") stats.adoption = 75;
  else stats.adoption = 40;

  // Adjust Innovation
  if (isL1 || type === "AI" || type === "Layer 2") stats.innovation = 85;
  if (isMeme) stats.innovation = 20;

  // Adjust Community
  if (isMeme) stats.community = 98;
  else if (rarity === "Legendary") stats.community = 90;
  
  // Adjust Decentralization
  if (type === "Privacy" || type === "Layer 1") stats.decentralization += 20;
  if (type === "Layer 2" || type === "Stablecoin") stats.decentralization -= 20;

  // Cap values
  Object.keys(stats).forEach(k => {
    const key = k as keyof BattleStats;
    stats[key] = Math.min(100, Math.max(5, stats[key]));
  });

  return stats;
};

// Helper to generate consistent data
const createCrypto = (data: Partial<Crypto> & { id: string; name: string; symbol: string; type: CryptoType }): Crypto => {
  const base: Crypto = {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    type: data.type,
    rarity: "Common",
    launchYear: 2020,
    founder: "Unknown / DAO",
    shortDescription: "A decentralized digital asset protocol built for the future economy.",
    originStory: "Launched to solve scalability and decentralization challenges in the blockchain space.",
    riskLevel: "High",
    tags: [],
    status: "active",
    keyEvents: [],
    pros: ["Innovative Tech", "Active Community"],
    cons: ["Market Volatility", "Regulatory Uncertainty"],
    utility: "Governance and network fees.",
    allTimeHigh: "Unknown",
    maxSupply: "Infinite"
  };

  // Auto-fill defaults based on type to ensure rich data without repetition
  const defaultsByType: Record<string, Partial<Crypto>> = {
    "Layer 1": {
      utility: "Gas fees, network security (staking), and store of value.",
      pros: ["High security", "Decentralized", "Established ecosystem"],
      cons: ["Scalability issues (Trilemma)", "High gas fees during congestion"],
      riskLevel: "Medium",
      tags: ["Blockchain", "Infrastructure", "Smart Contracts"]
    },
    "Layer 2": {
      utility: "Gas fees (cheaper than L1) and governance.",
      pros: ["Fast transactions", "Low fees", "Inherits L1 security"],
      cons: ["Centralized sequencers", "Bridge risks"],
      riskLevel: "Medium",
      tags: ["Scaling", "Rollup", "Ethereum"]
    },
    "Meme": {
      utility: "Community speculation, tipping, and cultural expression.",
      pros: ["Viral potential", "Strong community", "Fair launch (sometimes)"],
      cons: ["Zero utility", "High volatility", "Rug pull risk"],
      riskLevel: "Extreme",
      rarity: "Common",
      tags: ["Community", "Speculation", "High Risk"]
    },
    "DeFi": {
      utility: "Governance rights, liquidity incentives, and protocol fees.",
      pros: ["Financial innovation", "Yield generation", "Non-custodial"],
      cons: ["Smart contract bugs", "Regulatory uncertainty", "Impermanent loss"],
      riskLevel: "High",
      tags: ["Finance", "Yield", "DApp"]
    },
    "Stablecoin": {
      utility: "Medium of exchange, store of value during volatility, and settlement.",
      pros: ["Price stability", "High liquidity", "Easy on/off ramp"],
      cons: ["Centralization risk (blacklist)", "Depeg risk"],
      riskLevel: "Low",
      tags: ["Payment", "Pegged", "Fiat"]
    },
    "AI": {
      utility: "Compute payments, model training, and data marketplace currency.",
      pros: ["Trending narrative", "Real world utility potential"],
      cons: ["Vaporware risk", "Highly experimental"],
      riskLevel: "High",
      tags: ["Machine Learning", "Data"]
    },
    "Gaming": {
      utility: "In-game currency, asset ownership (NFTs), and governance.",
      pros: ["Digital ownership", "Play-to-Earn", "Mass adoption vector"],
      cons: ["Inflationary tokenomics", "Game might fail"],
      riskLevel: "High",
      tags: ["Metaverse", "NFT"]
    },
    "Privacy": {
      utility: "Anonymous transactions and shielded data.",
      pros: ["Fungibility", "Censorship resistance", "Data protection"],
      cons: ["Regulatory bans", "Delisting risk"],
      riskLevel: "High",
      tags: ["Anonymity", "Security"]
    },
    "Infrastructure": {
      utility: "Service payments (storage, data, indexing) and network security.",
      pros: ["Essential services", "B2B utility"],
      cons: ["Technical complexity", "Dependency on other chains"],
      riskLevel: "Medium",
      tags: ["Backend", "Middleware"]
    }
  };

  const merged = { ...base, ...defaultsByType[data.type], ...data };
  
  // Auto-generate stats if missing
  if (!merged.stats) {
    merged.stats = generateStats(merged.type, merged.riskLevel, merged.rarity);
  }

  return merged;
};

export const cryptos: Crypto[] = [
  // ================= LAYER 1 (THE KINGS) =================
  createCrypto({
    id: "bitcoin", name: "Bitcoin", symbol: "BTC", type: "Layer 1", rarity: "Mythic", launchYear: 2009,
    founder: "Satoshi Nakamoto",
    shortDescription: "The original cryptocurrency and digital store of value. It introduced blockchain technology to the world and remains the market leader.",
    originStory: "In 2008, amidst the Global Financial Crisis, an anonymous entity named Satoshi Nakamoto published the Bitcoin Whitepaper. The goal was to create a 'peer-to-peer electronic cash system' that removed the need for banks and governments to control money. The first block, known as the Genesis Block, was mined on January 3, 2009.",
    riskLevel: "Low",
    tags: ["PoW", "OG", "Gold"],
    allTimeHigh: "$73,750",
    maxSupply: "21,000,000",
    keyEvents: [
      { year: 2008, title: "Whitepaper Published", description: "Satoshi Nakamoto releases the Bitcoin whitepaper." },
      { year: 2010, title: "Bitcoin Pizza Day", description: "Laszlo Hanyecz buys two pizzas for 10,000 BTC, the first real-world purchase." },
      { year: 2014, title: "Mt. Gox Collapse", description: "The largest exchange is hacked, causing a massive market crash." },
      { year: 2017, title: "Block Size War", description: "Bitcoin Cash forks away after a dispute over scaling." },
      { year: 2024, title: "ETF Approval", description: "US SEC approves Spot Bitcoin ETFs, bringing institutional money." }
    ]
  }),
  createCrypto({
    id: "ethereum", name: "Ethereum", symbol: "ETH", type: "Layer 1", rarity: "Legendary", launchYear: 2015,
    founder: "Vitalik Buterin",
    shortDescription: "The world's leading smart contract platform. It enables developers to build decentralized applications (dApps) and revolutionized crypto with DeFi and NFTs.",
    originStory: "Proposed in 2013 by a young programmer named Vitalik Buterin, Ethereum sought to expand blockchain utility beyond simple transactions. Vitalik argued that Bitcoin needed a scripting language for application development. When Bitcoin developers disagreed, he raised funds via an ICO and launched Ethereum in 2015.",
    riskLevel: "Medium",
    allTimeHigh: "$4,891",
    tags: ["Smart Contracts", "PoS", "EVM"],
    keyEvents: [
      { year: 2015, title: "Mainnet Launch", description: "Ethereum goes live, introducing the world to smart contracts." },
      { year: 2016, title: "The DAO Hack", description: "A massive hack leads to a hard fork, creating Ethereum Classic (ETC)." },
      { year: 2020, title: "DeFi Summer", description: "Explosion of decentralized finance apps built on Ethereum." },
      { year: 2022, title: "The Merge", description: "Ethereum transitions from Proof of Work to Proof of Stake, reducing energy use by 99%." }
    ]
  }),
  createCrypto({
    id: "solana", name: "Solana", symbol: "SOL", type: "Layer 1", rarity: "Legendary", launchYear: 2020,
    founder: "Anatoly Yakovenko",
    shortDescription: "A high-performance blockchain designed for mass adoption. Known for its incredible speed and low transaction costs.",
    originStory: "Anatoly Yakovenko, a former Qualcomm engineer, conceived Solana in 2017. He realized that by synchronizing a blockchain with a reliable clock (Proof of History), he could drastically increase throughput. Solana launched in 2020 as a direct competitor to Ethereum, focusing on speed and scalability.",
    riskLevel: "Medium",
    allTimeHigh: "$260",
    tags: ["Fast", "Monolithic", "DeFi"],
    keyEvents: [
      { year: 2020, title: "Mainnet Beta", description: "Solana launches, promising thousands of transactions per second." },
      { year: 2021, title: "Solana Summer", description: "SOL price skyrockets from $1 to $260 amidst an NFT boom." },
      { year: 2022, title: "FTX Contagion", description: "Price crashes 96% due to close ties with the collapsed FTX exchange." },
      { year: 2023, title: "The Comeback", description: "Solana survives the crash and rebuilds its ecosystem, rallying strongly." }
    ]
  }),
  createCrypto({
    id: "binancecoin", name: "BNB", symbol: "BNB", type: "Layer 1", rarity: "Rare", launchYear: 2017,
    founder: "Changpeng Zhao (CZ)",
    shortDescription: "The native utility token of the Binance ecosystem and the Binance Smart Chain (BSC). Used for trading fee discounts and gas.",
    originStory: "Launched via an ICO in 2017 to fund the Binance exchange. Initially an ERC-20 token on Ethereum, it migrated to its own blockchain. It became the fuel for BSC (now BNB Chain), offering a cheaper, centralized alternative to Ethereum during the 2021 bull run.",
    riskLevel: "Medium",
    allTimeHigh: "$690",
    tags: ["Exchange", "EVM"],
    keyEvents: [
      { year: 2017, title: "Binance ICO", description: "Launch of the exchange and token." },
      { year: 2020, title: "BSC Launch", description: "Binance Smart Chain launches, capturing massive retail DeFi volume." },
      { year: 2023, title: "Regulatory Fine", description: "Binance settles with US DOJ for $4B; CZ steps down as CEO." }
    ]
  }),
  createCrypto({
    id: "cardano", name: "Cardano", symbol: "ADA", type: "Layer 1", rarity: "Rare", launchYear: 2017,
    founder: "Charles Hoskinson",
    shortDescription: "A research-driven blockchain built on peer-reviewed academic papers. Focuses on sustainability, security, and formal verification.",
    originStory: "Founded by Ethereum co-founder Charles Hoskinson after he left Ethereum. Cardano distinguishes itself by moving slowly and methodically, subjecting every upgrade to academic peer review before implementation. It aims to provide financial identity to the unbanked in developing nations.",
    riskLevel: "Medium",
    allTimeHigh: "$3.10",
    tags: ["Academic", "PoS"],
    keyEvents: [
      { year: 2017, title: "Byron Era", description: "Mainnet launch allowing ADA transfers." },
      { year: 2020, title: "Shelley Upgrade", description: "Introduction of staking and decentralization." },
      { year: 2021, title: "Alonzo Upgrade", description: "Smart contract functionality finally enabled." }
    ]
  }),
  createCrypto({
    id: "avalanche-2", name: "Avalanche", symbol: "AVAX", type: "Layer 1", rarity: "Rare", launchYear: 2020,
    founder: "Emin Gün Sirer",
    shortDescription: "A highly scalable platform that uses a unique consensus protocol. It allows for the creation of custom blockchains called Subnets.",
    originStory: "Created by Cornell professor Emin Gün Sirer, Avalanche introduced a novel consensus mechanism based on random sampling. It launched in 2020 to solve the 'blockchain trilemma' by offering speed, security, and decentralization simultaneously through its three-chain architecture.",
    riskLevel: "Medium",
    allTimeHigh: "$146",
    tags: ["Subnets", "Fast"],
    keyEvents: [
      { year: 2020, title: "Mainnet Launch", description: "Avalanche goes live with its C-Chain for smart contracts." },
      { year: 2021, title: "Avalanche Rush", description: "$180M incentive program attracts major DeFi protocols." },
      { year: 2023, title: "Institutional Partnerships", description: "Partnerships with JP Morgan and Citi for asset tokenization." }
    ]
  }),
  createCrypto({
    id: "kaspa", name: "Kaspa", symbol: "KAS", type: "Layer 1", rarity: "Rare", launchYear: 2021,
    founder: "Yonatan Sompolinsky",
    shortDescription: "A Proof-of-Work cryptocurrency that uses a BlockDAG structure instead of a linear blockchain. It is the fastest PoW network.",
    originStory: "Founded by Yonatan Sompolinsky, who is cited in the Ethereum whitepaper. Kaspa implements the GHOSTDAG protocol, allowing blocks to be created in parallel rather than sequentially. This solves the speed bottleneck of traditional PoW chains like Bitcoin without sacrificing security.",
    riskLevel: "High",
    allTimeHigh: "$0.19",
    tags: ["PoW", "BlockDAG", "Fair Launch"],
    keyEvents: [
      { year: 2021, title: "Fair Launch", description: "Launched with no ICO, no premine, and no VC allocation." },
      { year: 2023, title: "ASIC Era", description: "Network hashrate explodes as specialized mining hardware enters." }
    ]
  }),
  createCrypto({
    id: "polkadot", name: "Polkadot", symbol: "DOT", type: "Layer 1", rarity: "Rare", launchYear: 2020,
    founder: "Gavin Wood",
    shortDescription: "A 'Layer 0' protocol that connects multiple specialized blockchains (parachains) into a single unified network.",
    originStory: "Created by Gavin Wood, the author of the Ethereum Yellow Paper and Solidity language. He envisioned a future where many blockchains exist and need to talk to each other. Polkadot was built to be the secure hub that connects these different chains.",
    riskLevel: "Medium",
    allTimeHigh: "$55",
    tags: ["Interoperability", "Parachains"],
    keyEvents: [
      { year: 2020, title: "Mainnet Launch", description: "Polkadot launches its Relay Chain." },
      { year: 2021, title: "Parachain Auctions", description: "Projects bid millions in DOT to secure a slot on the network." }
    ]
  }),
  createCrypto({
    id: "tron", name: "Tron", symbol: "TRX", type: "Layer 1", rarity: "Common", launchYear: 2017,
    founder: "Justin Sun",
    shortDescription: "A high-throughput blockchain focused on content sharing and entertainment. It is the dominant network for USDT stablecoin transfers.",
    originStory: "Founded by the controversial marketing figure Justin Sun. Tron started as an ERC-20 token before launching its own mainnet. Despite criticism for copying code in its whitepaper, it found massive product-market fit as a cheap rail for stablecoin transactions in developing markets.",
    riskLevel: "Medium",
    allTimeHigh: "$0.30",
    tags: ["Payments", "Stablecoins"],
    keyEvents: [
      { year: 2018, title: "Mainnet Independence", description: "Tron migrates off Ethereum to its own chain." },
      { year: 2018, title: "BitTorrent Acquisition", description: "Tron acquires the legendary file-sharing service." }
    ]
  }),
  createCrypto({
    id: "near", name: "NEAR Protocol", symbol: "NEAR", type: "Layer 1", rarity: "Common", launchYear: 2020,
    founder: "Illia Polosukhin",
    shortDescription: "A developer-friendly, sharded blockchain designed for usability. It uses 'account abstraction' to make crypto apps feel like normal apps.",
    originStory: "Founded by AI researchers Alexander Skidanov and Illia Polosukhin (a transformer paper co-author). They initially tried to build an AI startup but pivoted to blockchain when they couldn't find a platform that scaled. NEAR focuses heavily on sharding technology to scale infinitely.",
    riskLevel: "High",
    allTimeHigh: "$20.40",
    tags: ["Sharding", "Usability"],
    keyEvents: [
      { year: 2020, title: "Mainnet Launch", description: "NEAR launches with a focus on developer experience." },
      { year: 2021, title: "Rainbow Bridge", description: "Launch of a trustless bridge to Ethereum." }
    ]
  }),
  createCrypto({
    id: "internet-computer", name: "Internet Computer", symbol: "ICP", type: "Layer 1", rarity: "Common", launchYear: 2021,
    founder: "Dominic Williams",
    shortDescription: "An ambitious project to rebuild the entire internet stack on blockchain, hosting websites and enterprise systems on-chain.",
    originStory: "Developed by the DFINITY Foundation for several years before a highly anticipated launch in 2021. The goal was to replace traditional IT infrastructure (like AWS) with a decentralized cloud. The launch was marred by a massive price crash due to tokenomics issues.",
    riskLevel: "High",
    allTimeHigh: "$700+",
    tags: ["Cloud", "Web3"],
    keyEvents: [
      { year: 2021, title: "Genesis Launch", description: "Launched at a massive valuation, followed by a 95% crash." },
      { year: 2023, title: "Bitcoin Integration", description: "ICP enables direct integration with the Bitcoin network." }
    ]
  }),
  createCrypto({
    id: "algorand", name: "Algorand", symbol: "ALGO", type: "Layer 1", rarity: "Common", launchYear: 2019,
    founder: "Silvio Micali",
    shortDescription: "A Pure Proof-of-Stake blockchain founded by a Turing Award-winning cryptographer. It claims to solve the blockchain trilemma.",
    originStory: "Silvio Micali, a legendary figure in cryptography (co-inventor of Zero Knowledge Proofs), founded Algorand to fix the inefficiencies of Bitcoin. Its consensus mechanism is mathematically secure and impossible to fork, aiming for institutional finance use cases.",
    riskLevel: "High",
    allTimeHigh: "$3.28",
    tags: ["Institutional", "Green"],
    keyEvents: [
      { year: 2019, title: "Dutch Auction Launch", description: "Launched via a unique auction mechanism." },
      { year: 2021, title: "El Salvador Partnership", description: "Signed (then stalled) agreement for blockchain infrastructure." }
    ]
  }),
  createCrypto({
    id: "litecoin", name: "Litecoin", symbol: "LTC", type: "Layer 1", rarity: "Rare", launchYear: 2011,
    founder: "Charlie Lee",
    shortDescription: "One of the oldest cryptocurrencies, created to be the 'silver' to Bitcoin's 'gold'. It offers faster block times and cheaper fees.",
    originStory: "Charlie Lee, a Google engineer, forked the Bitcoin code in 2011. He changed the mining algorithm to Scrypt and reduced block times from 10 minutes to 2.5 minutes. It has survived every bear market and remains a popular coin for payments.",
    riskLevel: "Low",
    allTimeHigh: "$412",
    tags: ["PoW", "OG", "Payments"],
    keyEvents: [
      { year: 2011, title: "Network Launch", description: "Litecoin goes live as a lighter version of Bitcoin." },
      { year: 2017, title: "Founder Sells", description: "Charlie Lee sells all his holdings at the market top, causing controversy." },
      { year: 2023, title: "MWEB Upgrade", description: "MimbleWimble upgrade adds optional privacy features." }
    ]
  }),
  createCrypto({
    id: "bitcoin-cash", name: "Bitcoin Cash", symbol: "BCH", type: "Layer 1", rarity: "Common", launchYear: 2017,
    founder: "Roger Ver (Promoter)",
    shortDescription: "A major fork of Bitcoin that prioritizes low fees and big blocks for peer-to-peer payments.",
    originStory: "Born from the 'Block Size Wars' of 2017. A faction of the Bitcoin community believed Bitcoin should scale by increasing block size to handle more transactions, rather than using Layer 2s. They forked the network, creating BCH.",
    riskLevel: "Medium",
    allTimeHigh: "$4,355",
    tags: ["PoW", "Payments"],
    keyEvents: [
      { year: 2017, title: "The Hard Fork", description: "Splits from Bitcoin at block 478558." },
      { year: 2018, title: "Hash War", description: "Another split creates Bitcoin SV (BSV), damaging the ecosystem." }
    ]
  }),
  createCrypto({
    id: "the-open-network", name: "Toncoin", symbol: "TON", type: "Layer 1", rarity: "Rare", launchYear: 2018,
    founder: "Pavel Durov",
    shortDescription: "The blockchain integrated with Telegram. It aims to bring crypto payments and apps to Telegram's 900 million users.",
    originStory: "Originally built by the Telegram team as the 'Telegram Open Network'. The SEC sued them in 2020, forcing them to abandon the project. However, the community picked up the open-source code, rebranded it, and eventually, Telegram officially re-adopted it as their web3 infrastructure.",
    riskLevel: "Medium",
    allTimeHigh: "$8.25",
    tags: ["Telegram", "Social"],
    keyEvents: [
      { year: 2018, title: "Record ICO", description: "Raised $1.7 Billion before being halted by the SEC." },
      { year: 2021, title: "Community Reboot", description: "Relaunched as 'The Open Network' by independent developers." },
      { year: 2024, title: "Telegram Integration", description: "Official wallet integration rolls out to global Telegram users." }
    ]
  }),
  createCrypto({
    id: "aptos", name: "Aptos", symbol: "APT", type: "Layer 1", rarity: "Common", launchYear: 2022,
    founder: "Mo Shaikh",
    shortDescription: "A high-performance L1 built using the Move programming language. It was created by former Facebook engineers.",
    originStory: "When Facebook (Meta) abandoned its 'Libra/Diem' stablecoin project due to regulatory pressure, the engineers left to build their own chains using the Move language they had developed. Aptos focuses on safety and scalability.",
    riskLevel: "High",
    allTimeHigh: "$19.90",
    tags: ["Move", "VC"],
    keyEvents: [
      { year: 2022, title: "Mainnet Launch", description: "Launched with massive VC backing and a controversial airdrop." }
    ]
  }),
  createCrypto({
    id: "sui", name: "Sui", symbol: "SUI", type: "Layer 1", rarity: "Common", launchYear: 2023,
    founder: "Mysten Labs",
    shortDescription: "An object-centric blockchain using the Move language. It is optimized for low latency and gaming applications.",
    originStory: "Like Aptos, Sui was founded by ex-Meta engineers from the Diem project. Sui differentiates itself with an object-oriented data model, allowing parallel transaction processing which is ideal for games and high-speed trading.",
    riskLevel: "High",
    allTimeHigh: "$2.18",
    tags: ["Move", "Gaming"],
    keyEvents: [
      { year: 2023, title: "Mainnet Launch", description: "Official launch after a successful testnet phase." }
    ]
  }),
  createCrypto({
    id: "fantom", name: "Fantom", symbol: "FTM", type: "Layer 1", rarity: "Common", launchYear: 2018,
    founder: "Andre Cronje",
    shortDescription: "A fast, DAG-based smart contract platform known for its 'DeFi degens' culture and high speed.",
    originStory: "Fantom uses a directed acyclic graph (DAG) consensus mechanism called Lachesis. It gained massive popularity during the 2021 bull run thanks to Andre Cronje, a legendary DeFi architect, who acted as its technical advisor and ecosystem builder.",
    riskLevel: "High",
    allTimeHigh: "$3.48",
    tags: ["DeFi", "DAG"],
    keyEvents: [
      { year: 2018, title: "Token Launch", description: "Launched to build a smart city infrastructure network." },
      { year: 2021, title: "DeFi Explosion", description: "Becomes a top chain for yield farming." },
      { year: 2024, title: "Sonic Upgrade", description: "Major rebrand and tech upgrade to 'Sonic' announced." }
    ]
  }),
  createCrypto({
    id: "cosmos", name: "Cosmos", symbol: "ATOM", type: "Infrastructure", rarity: "Rare", launchYear: 2019,
    founder: "Jae Kwon",
    shortDescription: "The 'Internet of Blockchains'. Cosmos is an ecosystem of independent parallel blockchains that can communicate with each other.",
    originStory: "Jae Kwon invented the Tendermint consensus algorithm, which made it easy to create custom blockchains. Cosmos was built as the 'Hub' to connect all these custom chains (zones) via the IBC (Inter-Blockchain Communication) protocol.",
    riskLevel: "Medium",
    allTimeHigh: "$44.70",
    tags: ["Interoperability", "Hub"],
    keyEvents: [
      { year: 2019, title: "Cosmos Hub Launch", description: "The first blockchain in the Cosmos ecosystem goes live." },
      { year: 2021, title: "IBC Launch", description: "Inter-Blockchain Communication protocol is enabled." }
    ]
  }),
  createCrypto({
    id: "ripple", name: "XRP", symbol: "XRP", type: "Layer 1", rarity: "Legendary", launchYear: 2012,
    founder: "Chris Larsen",
    shortDescription: "A digital asset built for global payments. It aims to replace the SWIFT banking system for cross-border settlements.",
    originStory: "Created by Ripple Labs, XRP was designed to settle transactions between banks in seconds for fractions of a penny. Unlike Bitcoin, it does not use mining; all tokens were pre-mined. It has been locked in a massive legal battle with the US SEC since 2020.",
    riskLevel: "Medium",
    allTimeHigh: "$3.84",
    tags: ["Payments", "Centralized"],
    cons: ["Centralized distribution", "SEC Lawsuit"],
    keyEvents: [
      { year: 2012, title: "Launch", description: "Ripple Labs launches the XRP ledger." },
      { year: 2017, title: "The Mega Pump", description: "XRP rallies to $3.84, briefly flipping Ethereum." },
      { year: 2020, title: "SEC Lawsuit", description: "US regulators sue Ripple for selling unregistered securities." },
      { year: 2023, title: "Partial Victory", description: "Court rules XRP is not a security when sold to retail." }
    ]
  }),
  createCrypto({
    id: "hedera-hashgraph", name: "Hedera", symbol: "HBAR", type: "Layer 1", rarity: "Common", launchYear: 2019,
    founder: "Leemon Baird",
    shortDescription: "An enterprise-grade public ledger that uses Hashgraph consensus instead of blockchain for high speed and fairness.",
    originStory: "Dr. Leemon Baird invented the Hashgraph algorithm, which uses a 'gossip about gossip' protocol. Hedera is governed by a council of massive corporations like Google, IBM, and Boeing, making it highly secure but criticized for centralization.",
    riskLevel: "Medium",
    allTimeHigh: "$0.57",
    tags: ["Enterprise", "Hashgraph"],
    keyEvents: [
      { year: 2019, title: "Open Access", description: "Mainnet opens to the public." },
      { year: 2020, title: "Google Joins", description: "Google Cloud joins the Hedera Governing Council." }
    ]
  }),
  createCrypto({
    id: "stellar", name: "Stellar", symbol: "XLM", type: "Layer 1", rarity: "Common", launchYear: 2014,
    founder: "Jed McCaleb",
    shortDescription: "An open network for storing and moving money. Focused on connecting banks and people in developing economies.",
    originStory: "Jed McCaleb, a co-founder of Ripple (and creator of Mt. Gox), left Ripple to create Stellar. While similar in code initially, Stellar focuses more on individual financial inclusion and non-profits rather than banking settlements.",
    riskLevel: "Low",
    allTimeHigh: "$0.93",
    tags: ["Payments", "Non-Profit"],
    keyEvents: [
      { year: 2014, title: "Launch", description: "Stellar network goes live." },
      { year: 2017, title: "IBM Partnership", description: "IBM uses Stellar for its World Wire payment system." }
    ]
  }),

  // ================= LAYER 2 (SCALING) =================
  createCrypto({
    id: "matic-network", name: "Polygon", symbol: "POL", type: "Layer 2", rarity: "Rare", launchYear: 2017,
    founder: "Jaynti Kanani",
    shortDescription: "The Swiss Army Knife of Ethereum scaling. It offers sidechains, ZK-rollups, and developer tools to make Ethereum faster.",
    originStory: "Originally 'Matic Network', it started as a sidechain to help Ethereum scale. It rebranded to Polygon and pivoted to becoming an aggregator of scaling solutions. It is widely adopted by major brands like Reddit, Starbucks, and Nike for their Web3 initiatives.",
    riskLevel: "Medium",
    allTimeHigh: "$2.92",
    tags: ["Sidechain", "ZK", "Brand Adoption"],
    keyEvents: [
      { year: 2017, title: "Matic Launch", description: "Launched as a plasma sidechain for Ethereum." },
      { year: 2021, title: "Rebrand to Polygon", description: "Pivot to a multi-chain scaling aggregator." },
      { year: 2024, title: "POL Migration", description: "Token upgrade from MATIC to POL for Polygon 2.0." }
    ]
  }),
  createCrypto({
    id: "arbitrum", name: "Arbitrum", symbol: "ARB", type: "Layer 2", rarity: "Common", launchYear: 2021,
    founder: "Offchain Labs",
    shortDescription: "The leading Optimistic Rollup for Ethereum. It handles transactions off-chain and posts the results to Ethereum, saving costs.",
    originStory: "Developed by researchers at Princeton University. Arbitrum was designed to seamlessly scale Ethereum without compromising security. It quickly became the dominant Layer 2 by Total Value Locked (TVL) due to its developer compatibility.",
    riskLevel: "Medium",
    allTimeHigh: "$2.40",
    tags: ["Rollup", "DeFi"],
    keyEvents: [
      { year: 2021, title: "Mainnet One", description: "Arbitrum One goes live for developers." },
      { year: 2023, title: "Token Airdrop", description: "Massive airdrop of ARB tokens to early users decentralizes governance." }
    ]
  }),
  createCrypto({
    id: "optimism", name: "Optimism", symbol: "OP", type: "Layer 2", rarity: "Common", launchYear: 2019,
    founder: "Optimism PBC",
    shortDescription: "An Ethereum L2 focused on public goods funding and the 'Superchain' vision. It uses optimistic rollup technology.",
    originStory: "Optimism introduced the concept of the 'Superchain'—a network of L2s sharing a software stack (OP Stack). Major projects like Coinbase's Base and Worldcoin have built their chains using Optimism's technology.",
    riskLevel: "Medium",
    allTimeHigh: "$4.85",
    tags: ["Superchain", "Governance"],
    keyEvents: [
      { year: 2021, title: "Mainnet Launch", description: "Optimism mainnet opens." },
      { year: 2022, title: "OP Airdrop", description: "Launch of the OP token and the Optimism Collective." },
      { year: 2023, title: "Bedrock Upgrade", description: "Major technical upgrade reducing fees and improving syncing." }
    ]
  }),
  createCrypto({
    id: "starknet", name: "Starknet", symbol: "STRK", type: "Layer 2", rarity: "Rare", launchYear: 2021,
    founder: "StarkWare",
    shortDescription: "A Validity Rollup (ZK-Rollup) that uses advanced math (STARKs) to provide massive scaling and privacy capabilities.",
    originStory: "Built by StarkWare, pioneers in Zero Knowledge technology. Starknet uses a different programming language (Cairo) to unlock capabilities that aren't possible on standard EVM chains, making it a favorite for complex games and advanced DeFi.",
    riskLevel: "High",
    allTimeHigh: "$3.66",
    tags: ["ZK", "Math"],
    keyEvents: [
      { year: 2021, title: "Alpha Launch", description: "Starknet Mainnet Alpha goes live." },
      { year: 2024, title: "Token Launch", description: "STRK token unlocks for the community." }
    ]
  }),
  createCrypto({
    id: "mantle", name: "Mantle", symbol: "MNT", type: "Layer 2", rarity: "Common", launchYear: 2023,
    founder: "BitDAO",
    shortDescription: "A modular Layer 2 network. It separates transaction execution from data availability to lower costs significantly.",
    originStory: "Born from BitDAO, one of the largest crypto treasuries. Mantle merged with BitDAO to create a high-performance modular L2, utilizing EigenLayer for data availability.",
    riskLevel: "Medium",
    allTimeHigh: "$1.50",
    tags: ["Modular", "DAO"],
    keyEvents: [
      { year: 2023, title: "Mainnet Launch", description: "Mantle network officially launches." }
    ]
  }),
  createCrypto({
    id: "stacks", name: "Stacks", symbol: "STX", type: "Layer 2", rarity: "Common", launchYear: 2017,
    founder: "Muneeb Ali",
    shortDescription: "A Bitcoin Layer 2 that enables smart contracts and dApps to be built directly on the Bitcoin network.",
    originStory: "Stacks connects to Bitcoin through a mechanism called Proof of Transfer. It allows miners to earn BTC by securing the Stacks network, effectively bringing DeFi and NFTs to the Bitcoin ecosystem.",
    riskLevel: "High",
    allTimeHigh: "$3.86",
    tags: ["Bitcoin L2"],
    keyEvents: [
      { year: 2019, title: "SEC Qualified", description: "First ever SEC-qualified token offering in US history." },
      { year: 2021, title: "Mainnet 2.0", description: "Launch of Stacks 2.0 with Proof of Transfer." }
    ]
  }),
  createCrypto({
    id: "immutable-x", name: "Immutable", symbol: "IMX", type: "Gaming", rarity: "Rare", launchYear: 2021,
    founder: "Robbie Ferguson",
    shortDescription: "The leading Layer 2 scaling solution specifically for NFTs and web3 gaming on Ethereum.",
    originStory: "Built to solve the problem of high gas fees for trading game items. Immutable offers zero-gas minting and trading, making it the platform of choice for major web3 games like Gods Unchained and Illuvium.",
    riskLevel: "High",
    allTimeHigh: "$9.50",
    tags: ["NFT", "Zero Gas"],
    keyEvents: [
      { year: 2021, title: "Launch", description: "Immutable X launches on mainnet." },
      { year: 2023, title: "Passport Launch", description: "Release of Immutable Passport for easy gamer onboarding." }
    ]
  }),

  // ================= DEFI (FINANCE) =================
  createCrypto({
    id: "uniswap", name: "Uniswap", symbol: "UNI", type: "DeFi", rarity: "Legendary", launchYear: 2018,
    founder: "Hayden Adams",
    shortDescription: "The King of Decentralized Exchanges (DEX). It allows anyone to swap tokens without a company or middleman.",
    originStory: "Hayden Adams was a mechanical engineer who got laid off. He learned to code Solidity and built Uniswap as a proof-of-concept for an Automated Market Maker (AMM). It revolutionized crypto trading by removing order books.",
    riskLevel: "Medium",
    allTimeHigh: "$44.97",
    tags: ["DEX", "AMM"],
    keyEvents: [
      { year: 2018, title: "V1 Launch", description: "Uniswap launches at Devcon 4." },
      { year: 2020, title: "UNI Airdrop", description: "Unexpectedly airdrops 400 UNI to every user (worth $12k at peak)." },
      { year: 2021, title: "V3 Launch", description: "Introduces Concentrated Liquidity for efficiency." }
    ]
  }),
  createCrypto({
    id: "aave", name: "Aave", symbol: "AAVE", type: "DeFi", rarity: "Rare", launchYear: 2017,
    founder: "Stani Kulechov",
    shortDescription: "The leading decentralized lending protocol. Users can deposit crypto to earn interest or borrow against it.",
    originStory: "Originally called ETHLend, it rebranded to Aave (Finnish for 'Ghost'). It pioneered 'Flash Loans', which allow users to borrow millions of dollars without collateral for a single transaction block.",
    riskLevel: "Medium",
    allTimeHigh: "$666",
    tags: ["Lending", "Flash Loans"],
    keyEvents: [
      { year: 2017, title: "ETHLend ICO", description: "Launch of the peer-to-peer lending platform." },
      { year: 2020, title: "Rebrand to Aave", description: "Pivot to liquidity pool model, sparking DeFi summer." }
    ]
  }),
  createCrypto({
    id: "maker", name: "Maker", symbol: "MKR", type: "DeFi", rarity: "Rare", launchYear: 2017,
    founder: "Rune Christensen",
    shortDescription: "The governance token for the MakerDAO and DAI stablecoin. It acts as the 'central bank' of DeFi.",
    originStory: "One of the first DAOs (Decentralized Autonomous Organizations). Maker allows users to lock up ETH or other assets in a smart contract vault to generate DAI. MKR holders govern the risk parameters and interest rates.",
    riskLevel: "Medium",
    allTimeHigh: "$6,339",
    tags: ["DAO", "Stablecoin"],
    keyEvents: [
      { year: 2017, title: "DAI Launch", description: "Single-collateral DAI launches." },
      { year: 2020, title: "Black Thursday", description: "Protocol survives a 50% ETH crash, proving resilience." }
    ]
  }),
  createCrypto({
    id: "lido-dao", name: "Lido", symbol: "LDO", type: "DeFi", rarity: "Common", launchYear: 2020,
    founder: "Konstantin Lomashuk",
    shortDescription: "The dominant liquid staking protocol for Ethereum. It allows users to stake ETH without locking it up.",
    originStory: "Created to solve the illiquidity of ETH staking. When you stake with Lido, you get 'stETH', a token that represents your staked ETH and can still be used in DeFi. Lido now secures over 30% of all staked Ethereum.",
    riskLevel: "Medium",
    allTimeHigh: "$7.30",
    tags: ["Staking", "Liquid"],
    keyEvents: [
      { year: 2020, title: "Launch", description: "Lido launches ahead of the Beacon Chain." },
      { year: 2022, title: "Dominance Debate", description: "Community debates if Lido is becoming too large for Ethereum's safety." }
    ]
  }),
  createCrypto({
    id: "thorchain", name: "THORChain", symbol: "RUNE", type: "DeFi", rarity: "Rare", launchYear: 2018,
    founder: "Anonymous",
    shortDescription: "A decentralized cross-chain liquidity protocol. It allows you to swap native Bitcoin for native Ethereum without a bridge.",
    originStory: "Built by an anonymous team to solve the 'wrapping' problem. THORChain uses RUNE as a settlement layer to allow native asset swaps. It has been hacked multiple times but always recovered, earning a reputation for resilience.",
    riskLevel: "Extreme",
    allTimeHigh: "$21.26",
    tags: ["Cross-chain", "Native Swap"],
    keyEvents: [
      { year: 2021, title: "Chaosnet Launch", description: "Mainnet goes live." },
      { year: 2021, title: "The Hacks", description: "Protocol suffers multi-million dollar exploits; treasury refunds users." }
    ]
  }),
  createCrypto({
    id: "curve-dao-token", name: "Curve", symbol: "CRV", type: "DeFi", rarity: "Common", launchYear: 2020,
    founder: "Michael Egorov",
    shortDescription: "A DEX optimized for stablecoin swaps. It offers the lowest slippage for trading assets of similar value (like USDC to USDT).",
    originStory: "Michael Egorov, a physicist, wrote the StableSwap invariant whitepaper. Curve became the backbone of DeFi yield farming, leading to the 'Curve Wars' where protocols fought to acquire CRV to boost their own yields.",
    riskLevel: "High",
    allTimeHigh: "$60.00", // Initial launch spike
    tags: ["Stable Swap", "Yield"],
    keyEvents: [
      { year: 2020, title: "Launch", description: "Curve launches and kickstarts yield farming mania." },
      { year: 2023, title: "Vyper Hack", description: "A compiler bug leads to exploit; ecosystem rallies to save Curve." }
    ]
  }),
  createCrypto({
    id: "pancakeswap-token", name: "PancakeSwap", symbol: "CAKE", type: "DeFi", rarity: "Common", launchYear: 2020,
    founder: "Anonymous Chefs",
    shortDescription: "The dominant DEX on BNB Chain. Known for its fun food theme, lottery, and high-yield farming.",
    originStory: "Started as a fork of Uniswap on BSC. It quickly gained traction due to low fees and gamified features like NFT profiles and price prediction markets. It is the go-to place for trading meme coins on BNB Chain.",
    riskLevel: "High",
    allTimeHigh: "$44.00",
    tags: ["DEX", "BSC"],
    keyEvents: [
      { year: 2020, title: "Launch", description: "Launched on BSC as a Uniswap clone." },
      { year: 2021, title: "Volume Flip", description: "Briefly flipped Uniswap in daily volume during BSC mania." }
    ]
  }),
  createCrypto({
    id: "injective-protocol", name: "Injective", symbol: "INJ", type: "DeFi", rarity: "Common", launchYear: 2020,
    founder: "Eric Chen",
    shortDescription: "A blockchain built specifically for finance. It has a built-in order book and supports derivatives trading.",
    originStory: "Incubated by Binance Labs. Injective aims to build a completely decentralized financial system with zero gas fees for trading. It is interoperable with Cosmos and Ethereum.",
    riskLevel: "High",
    allTimeHigh: "$52.60",
    tags: ["Derivatives", "Cosmos"],
    keyEvents: [
      { year: 2020, title: "Mainnet Launch", description: "Injective launches its peggy bridge and chain." }
    ]
  }),
  createCrypto({
    id: "ethena", name: "Ethena", symbol: "ENA", type: "DeFi", rarity: "Common", launchYear: 2024,
    founder: "Guy Young",
    shortDescription: "A synthetic dollar protocol. It issues USDe, a stablecoin backed by a 'delta-neutral' hedging strategy rather than fiat.",
    originStory: "Inspired by an article written by Arthur Hayes (BitMEX founder). Ethena solves the stablecoin trilemma by using Ethereum staking yields combined with short futures positions to maintain a $1 peg while paying high yield.",
    riskLevel: "High",
    allTimeHigh: "$1.50",
    tags: ["Synthetic", "High Yield"],
    keyEvents: [
      { year: 2024, title: "Launch", description: "Ethena launches and quickly attracts billions in TVL." }
    ]
  }),

  // ================= MEME (CULTURE) =================
  createCrypto({
    id: "dogecoin", name: "Dogecoin", symbol: "DOGE", type: "Meme", rarity: "Legendary", launchYear: 2013,
    founder: "Billy Markus",
    shortDescription: "The original meme coin featuring the Shiba Inu 'Doge'. Started as a joke, now a top global currency.",
    originStory: "Created in about 2 hours by Billy Markus and Jackson Palmer as a satire of Bitcoin. They wanted to show how ridiculous the crypto industry was. Ironically, the internet loved it. It became famous for charitable causes before Elon Musk adopted it in 2021.",
    riskLevel: "High",
    allTimeHigh: "$0.73",
    tags: ["Elon Musk", "OG Meme"],
    keyEvents: [
      { year: 2013, title: "Joke Launch", description: "Created as a parody of Bitcoin." },
      { year: 2014, title: "Jamaican Bobsled", description: "Community raises $30k to send the team to the Olympics." },
      { year: 2021, title: "SNL Appearance", description: "Elon Musk hosts SNL; price peaks and crashes." }
    ]
  }),
  createCrypto({
    id: "shiba-inu", name: "Shiba Inu", symbol: "SHIB", type: "Meme", rarity: "Rare", launchYear: 2020,
    founder: "Ryoshi",
    shortDescription: "The self-proclaimed 'Dogecoin Killer'. An Ethereum-based meme coin that evolved into a DeFi ecosystem.",
    originStory: "Launched anonymously by 'Ryoshi'. He gifted 50% of the supply to Vitalik Buterin (creator of Ethereum). In a legendary move, Vitalik burned 90% of it (worth $6 billion) and donated the rest to India Covid Relief, cementing SHIB's history.",
    riskLevel: "High",
    allTimeHigh: "$0.000088",
    tags: ["Community", "Burn"],
    keyEvents: [
      { year: 2020, title: "Stealth Launch", description: "Launched with liquidity locked in Uniswap." },
      { year: 2021, title: "The Vitalik Dump", description: "Vitalik donates his SHIB stack to charity." }
    ]
  }),
  createCrypto({
    id: "pepe", name: "Pepe", symbol: "PEPE", type: "Meme", rarity: "Rare", launchYear: 2023,
    founder: "Anonymous",
    shortDescription: "The most memeable meme coin. Based on the iconic Pepe the Frog internet character.",
    originStory: "After years of 'dog' coins, PEPE launched to make memes great again. It had a stealth launch with no presale and zero tax. It reached a $1 Billion market cap in record time, proving the power of pure meme culture.",
    riskLevel: "Extreme",
    allTimeHigh: "$0.000017",
    tags: ["Frog", "Culture"],
    keyEvents: [
      { year: 2023, title: "Launch", description: "Explosive rally kicks off a new meme coin season." }
    ]
  }),
  createCrypto({
    id: "dogwifhat", name: "dogwifhat", symbol: "WIF", type: "Meme", rarity: "Rare", launchYear: 2023,
    founder: "Unknown",
    shortDescription: "Literally just a dog wif a hat. The mascot of the Solana meme coin supercycle.",
    originStory: "A picture of a Shiba Inu wearing a pink knitted hat became a meme on Twitter. The token launched on Solana and became a symbol of 'community conviction', with holders putting hats on famous statues like the Wall Street Bull.",
    riskLevel: "Extreme",
    tags: ["Solana", "Hat"],
    allTimeHigh: "$4.80",
    keyEvents: [
      { year: 2024, title: "The Sphere", description: "Community raises $650k to put the dog on the Las Vegas Sphere." }
    ]
  }),
  createCrypto({
    id: "bonk", name: "Bonk", symbol: "BONK", type: "Meme", rarity: "Common", launchYear: 2022,
    founder: "Solana Community",
    shortDescription: "The dog coin that saved Solana. Airdropped to Solana developers and users during the chain's darkest hour.",
    originStory: "After the FTX crash, Solana was dead. BONK launched on Christmas 2022 and airdropped 50% of supply to the community. This free money revived activity on the chain and started the Solana recovery narrative.",
    riskLevel: "Extreme",
    allTimeHigh: "$0.000047",
    tags: ["Airdrop", "Revival"],
    keyEvents: [
      { year: 2022, title: "Christmas Airdrop", description: "Distributed to Solana devs and NFT holders." },
      { year: 2023, title: "Coinbase Listing", description: "Mainstream acceptance pumps price." }
    ]
  }),
  createCrypto({
    id: "floki", name: "Floki", symbol: "FLOKI", type: "Meme", rarity: "Common", launchYear: 2021,
    founder: "Saber",
    shortDescription: "Named after Elon Musk's pet dog. It has transitioned from a meme to a utility project with a metaverse game.",
    originStory: "When Elon Musk tweeted 'My Shiba Inu will be named Floki', this coin was born. Unlike other memes, the team built a play-to-earn game (Valhalla) and a crypto locker protocol to add real utility.",
    riskLevel: "Extreme",
    tags: ["Elon", "Utility"],
    keyEvents: [
      { year: 2021, title: "Musk Tweet", description: "Created immediately after Elon's tweet." }
    ]
  }),
  createCrypto({
    id: "popcat", name: "Popcat", symbol: "POPCAT", type: "Meme", rarity: "Common", launchYear: 2024,
    founder: "Unknown",
    shortDescription: "Based on the viral 'Popcat' clicker game meme. A pure culture coin on Solana.",
    originStory: "The meme features a cat named Oatmeal opening its mouth into an 'O' shape. The token represents the fun simplicity of internet culture. It became the leading cat-themed coin in a market dominated by dogs.",
    riskLevel: "Extreme",
    tags: ["Cat", "Solana"],
    keyEvents: [
      { year: 2024, title: "Cat Season", description: "Leads the narrative shift from dog coins to cat coins." }
    ]
  }),

  // ================= INFRASTRUCTURE & AI =================
  createCrypto({
    id: "chainlink", name: "Chainlink", symbol: "LINK", type: "Infrastructure", rarity: "Legendary", launchYear: 2017,
    founder: "Sergey Nazarov",
    shortDescription: "The standard for decentralized oracles. It connects smart contracts to real-world data (prices, weather, sports).",
    originStory: "Sergey Nazarov realized smart contracts were useless if they couldn't see the outside world. Chainlink solves the 'Oracle Problem' by using a decentralized network of nodes to verify and deliver data on-chain.",
    riskLevel: "Medium",
    allTimeHigh: "$52.88",
    tags: ["Oracle", "Vital"],
    keyEvents: [
      { year: 2017, title: "ICO", description: "Raised $32M to build the oracle network." },
      { year: 2019, title: "Google Cloud", description: "Google integrates Chainlink for data processing." },
      { year: 2023, title: "CCIP Launch", description: "Launch of Cross-Chain Interoperability Protocol." }
    ]
  }),
  createCrypto({
    id: "the-graph", name: "The Graph", symbol: "GRT", type: "Infrastructure", rarity: "Common", launchYear: 2018,
    founder: "Yaniv Tal",
    shortDescription: "The 'Google of Blockchains'. It indexes blockchain data so apps can search and query it easily.",
    originStory: "Before The Graph, reading data from a blockchain was incredibly slow and difficult. The team built 'Subgraphs'—open APIs that anyone can query. It is now a critical piece of the DeFi and NFT stack.",
    riskLevel: "High",
    allTimeHigh: "$2.88",
    tags: ["Indexing", "Web3"],
    keyEvents: [
      { year: 2020, title: "Mainnet Launch", description: "The network decentralizes with curators and indexers." }
    ]
  }),
  createCrypto({
    id: "filecoin", name: "Filecoin", symbol: "FIL", type: "Infrastructure", rarity: "Common", launchYear: 2014,
    founder: "Juan Benet",
    shortDescription: "A decentralized storage network. It turns cloud storage into an algorithmic market.",
    originStory: "Created by Protocol Labs, who also invented IPFS (InterPlanetary File System). Filecoin allows anyone to rent out their unused hard drive space and earn tokens, creating a decentralized competitor to AWS S3.",
    riskLevel: "High",
    allTimeHigh: "$237",
    tags: ["Storage", "DePIN"],
    keyEvents: [
      { year: 2017, title: "Record ICO", description: "Raises $257M, the largest ICO at the time." },
      { year: 2020, title: "Mainnet Launch", description: "Network finally goes live after years of R&D." }
    ]
  }),
  createCrypto({
    id: "arweave", name: "Arweave", symbol: "AR", type: "Infrastructure", rarity: "Common", launchYear: 2018,
    founder: "Sam Williams",
    shortDescription: "The 'Permaweb'. A storage network designed to store data forever, not just for a monthly fee.",
    originStory: "Arweave uses a unique mechanism called 'Proof of Access'. You pay once upfront to store data, and the protocol's endowment ensures it is stored for at least 200 years. It is the library of Alexandria for the digital age.",
    riskLevel: "High",
    allTimeHigh: "$90",
    tags: ["Permanent", "Storage"],
    keyEvents: [
      { year: 2018, title: "Mainnet Launch", description: "The permaweb goes live." },
      { year: 2021, title: "Solana Integration", description: "Becomes the storage layer for Solana NFT metadata." }
    ]
  }),
  createCrypto({
    id: "fetch-ai", name: "Artificial Alliance", symbol: "FET", type: "AI", rarity: "Rare", launchYear: 2017,
    founder: "Humayun Sheikh",
    shortDescription: "A platform for building autonomous AI agents that can perform tasks for you on the blockchain.",
    originStory: "Founded by early DeepMind investors. Fetch.ai envisions a world where 'digital twins' (AI agents) book flights, trade crypto, and optimize supply chains automatically without human input.",
    riskLevel: "High",
    allTimeHigh: "$3.47",
    tags: ["AI Agents", "Automation"],
    keyEvents: [
      { year: 2019, title: "IEO on Binance", description: "Launchpad sale kickstarts the project." },
      { year: 2024, title: "ASI Merge", description: "Merges with Ocean and SingularityNET to form the Superintelligence Alliance." }
    ]
  }),
  createCrypto({
    id: "render-token", name: "Render", symbol: "RNDR", type: "AI", rarity: "Rare", launchYear: 2017,
    founder: "Jules Urbach",
    shortDescription: "The 'Uber for GPUs'. A network that connects artists needing rendering power with miners who have idle GPUs.",
    originStory: "Created by OTOY, a leading graphics company. Render allows 3D artists to render complex scenes in the cloud at a fraction of the cost of centralized farms, utilizing the GPU power of crypto miners.",
    riskLevel: "Medium",
    allTimeHigh: "$13.60",
    tags: ["DePIN", "GPU"],
    keyEvents: [
      { year: 2017, title: "Launch", description: "Project announced by OTOY." },
      { year: 2023, title: "Migration to Solana", description: "Moves from Ethereum to Solana for speed and lower costs." }
    ]
  }),
  createCrypto({
    id: "celestia", name: "Celestia", symbol: "TIA", type: "Infrastructure", rarity: "Rare", launchYear: 2023,
    founder: "Mustafa Al-Bassam",
    shortDescription: "The first modular blockchain network. It specializes in 'Data Availability', allowing other chains to easily deploy on top.",
    originStory: "Mustafa Al-Bassam (formerly a LulzSec hacker) co-founded Celestia to break the monolithic blockchain model. Celestia acts as a base layer that only orders transactions, allowing developers to build their own execution layers (rollups) on top easily.",
    riskLevel: "High",
    allTimeHigh: "$20.85",
    tags: ["Modular", "DA"],
    keyEvents: [
      { year: 2023, title: "Mainnet Launch", description: "Launch marks the start of the 'Modular Era'." }
    ]
  }),
  createCrypto({
    id: "pyth-network", name: "Pyth Network", symbol: "PYTH", type: "Infrastructure", rarity: "Common", launchYear: 2021,
    founder: "Jump Crypto",
    shortDescription: "A high-speed oracle network providing real-time market data to financial dApps.",
    originStory: "Pyth gets its data directly from first-party sources like major trading firms and exchanges (Jane Street, CBOE, Binance), offering faster updates than competitors. It focuses heavily on Solana and other high-speed chains.",
    riskLevel: "High",
    allTimeHigh: "$1.15",
    tags: ["Oracle", "Solana"],
    keyEvents: [
      { year: 2024, title: "Token Airdrop", description: "Large airdrop rewards ecosystem users." }
    ]
  }),
  createCrypto({
    id: "worldcoin-wld", name: "Worldcoin", symbol: "WLD", type: "AI", rarity: "Common", launchYear: 2023,
    founder: "Sam Altman",
    shortDescription: "A digital identity project that scans irises to prove 'personhood' in an age of AI.",
    originStory: "Co-founded by Sam Altman (CEO of OpenAI). Worldcoin distributes tokens to people who scan their eyes with a device called the 'Orb'. The goal is to create a global Universal Basic Income (UBI) and distinguish humans from AI bots.",
    riskLevel: "Extreme",
    allTimeHigh: "$11.70",
    tags: ["Identity", "UBI"],
    keyEvents: [
      { year: 2023, title: "Global Launch", description: "Orbs deployed in cities worldwide amidst privacy controversy." }
    ]
  }),

  // ================= GAMING & METAVERSE =================
  createCrypto({
    id: "axie-infinity", name: "Axie Infinity", symbol: "AXS", type: "Gaming", rarity: "Rare", launchYear: 2018,
    founder: "Sky Mavis",
    shortDescription: "The game that popularized 'Play-to-Earn'. Players collect, breed, and battle fantasy creatures called Axies.",
    originStory: "Developed by Vietnamese studio Sky Mavis. During the pandemic, Axie became a source of income for thousands of people in the Philippines, creating a digital economy where players earned smooth love potion (SLP) tokens.",
    riskLevel: "High",
    allTimeHigh: "$164",
    tags: ["P2E", "NFT"],
    keyEvents: [
      { year: 2021, title: "Viral Growth", description: "Revenue surpasses nearly every other crypto protocol." },
      { year: 2022, title: "Ronin Hack", description: "$600M stolen from its bridge by North Korean hackers." }
    ]
  }),
  createCrypto({
    id: "the-sandbox", name: "The Sandbox", symbol: "SAND", type: "Gaming", rarity: "Common", launchYear: 2011,
    founder: "Arthur Madrid",
    shortDescription: "A virtual metaverse where players can build, own, and monetize their gaming experiences.",
    originStory: "Originally a 2D mobile game, it pivoted to blockchain in 2018. It sells virtual land as NFTs. Major brands like Snoop Dogg, Adidas, and Warner Music Group have bought land to build virtual experiences.",
    riskLevel: "High",
    allTimeHigh: "$8.40",
    tags: ["Metaverse", "Land"],
    keyEvents: [
      { year: 2021, title: "Metaverse Boom", description: "Price explodes after Facebook rebrands to Meta." }
    ]
  }),
  createCrypto({
    id: "gala", name: "Gala", symbol: "GALA", type: "Gaming", rarity: "Common", launchYear: 2019,
    founder: "Eric Schiermeyer",
    shortDescription: "A blockchain gaming platform created by a co-founder of Zynga (Farmville). It aims to give power back to gamers.",
    originStory: "Gala Games is building a steam-like platform where players own their items. They run a network of 'Founder Nodes' that secure the network. Titles include Spider Tanks and Mirandus.",
    riskLevel: "High",
    allTimeHigh: "$0.82",
    tags: ["Studio", "Nodes"],
    keyEvents: [
      { year: 2021, title: "Galaverse", description: "Major events showcasing their game lineup." }
    ]
  }),
  createCrypto({
    id: "beam-2", name: "Beam", symbol: "BEAM", type: "Gaming", rarity: "Common", launchYear: 2023,
    founder: "Merit Circle",
    shortDescription: "A gaming-focused network built on Avalanche. It provides tooling for game developers to add crypto features easily.",
    originStory: "Merit Circle, a gaming DAO, realized that current chains were too hard for game devs to use. They built Beam as a subnet to provide a seamless experience. It has quickly become a favorite infrastructure for web3 games.",
    riskLevel: "High",
    allTimeHigh: "$0.04",
    tags: ["Infrastructure", "Subnet"],
    keyEvents: [
      { year: 2023, title: "Rebrand/Launch", description: "Merit Circle pivots to launch the Beam network." }
    ]
  }),

  // ================= PRIVACY =================
  createCrypto({
    id: "monero", name: "Monero", symbol: "XMR", type: "Privacy", rarity: "Rare", launchYear: 2014,
    founder: "Nicolas van Saberhagen",
    shortDescription: "The gold standard for private digital cash. Transactions are untraceable, keeping sender, receiver, and amount hidden.",
    originStory: "Based on the CryptoNote protocol whitepaper by an anonymous author. Monero uses ring signatures and stealth addresses to ensure privacy. It is the preferred currency of crypto-anarchists and darknet markets due to its true fungibility.",
    riskLevel: "High",
    allTimeHigh: "$517",
    tags: ["Darknet", "Fungible"],
    keyEvents: [
      { year: 2014, title: "Launch", description: "Launched as BitMonero before shortening the name." },
      { year: 2017, title: "Bulletproofs", description: "Upgrade significantly reduces transaction size and fees." },
      { year: 2024, title: "Binance Delisting", description: "Major exchange delists XMR due to regulatory pressure." }
    ]
  }),
  createCrypto({
    id: "zcash", name: "Zcash", symbol: "ZEC", type: "Privacy", rarity: "Common", launchYear: 2016,
    founder: "Zooko Wilcox",
    shortDescription: "A privacy coin that uses advanced math called zk-SNARKs. Users can choose between transparent or private transactions.",
    originStory: "Developed by scientists from Johns Hopkins, MIT, and Tel Aviv University. Zcash pioneered 'Zero-Knowledge Proofs', allowing one to prove they have money without revealing who they are. It has a more corporate structure than Monero.",
    riskLevel: "High",
    allTimeHigh: "$5,941", // Launch anomaly
    tags: ["ZK", "Optional Privacy"],
    keyEvents: [
      { year: 2016, title: "The Ceremony", description: "A secure cryptographic ceremony is held to launch the network." }
    ]
  }),

  // ================= STABLECOINS =================
  createCrypto({
    id: "tether", name: "Tether", symbol: "USDT", type: "Stablecoin", rarity: "Common", launchYear: 2014,
    founder: "Brock Pierce",
    shortDescription: "The first and largest stablecoin. It tokenizes the US Dollar to allow traders to move money between exchanges quickly.",
    originStory: "Launched as 'Realcoin', Tether promised that for every 1 token, there is $1 in a bank account. It became the backbone of the crypto market, providing liquidity. It has faced persistent questions about the transparency of its reserves.",
    riskLevel: "Low",
    allTimeHigh: "$1.00",
    tags: ["Liquidity", "Controversial"],
    keyEvents: [
      { year: 2014, title: "Launch", description: "Issued on the Bitcoin Omni layer." },
      { year: 2019, title: "NYAG Investigation", description: "Investigation into backing funds reveals not fully cash-backed." },
      { year: 2024, title: "$100B Market Cap", description: "Tether surpasses $100 Billion in circulation." }
    ]
  }),
  createCrypto({
    id: "usd-coin", name: "USDC", symbol: "USDC", type: "Stablecoin", rarity: "Common", launchYear: 2018,
    founder: "Circle & Coinbase",
    shortDescription: "The 'regulated' digital dollar. Fully backed by cash and treasuries held in US financial institutions.",
    originStory: "Created by the CENTRE consortium (Circle and Coinbase) to provide a compliant, transparent alternative to Tether. It is widely used in DeFi and by institutions who require regular audits.",
    riskLevel: "Low",
    allTimeHigh: "$1.00",
    tags: ["Regulated", "DeFi"],
    keyEvents: [
      { year: 2018, title: "Launch", description: "USDC goes live." },
      { year: 2023, title: "SVB Depeg", description: "Briefly falls to $0.87 after Silicon Valley Bank collapse, but recovers." }
    ]
  }),
  createCrypto({
    id: "dai", name: "DAI", symbol: "DAI", type: "Stablecoin", rarity: "Common", launchYear: 2017,
    founder: "MakerDAO",
    shortDescription: "A decentralized stablecoin backed by crypto collateral. It is governed by code and the MakerDAO community, not a company.",
    originStory: "Unlike USDT or USDC, there are no dollars in a bank for DAI. Instead, users lock up ETH or other assets in a smart contract vault to generate DAI. If the collateral drops in value, it is liquidated to maintain the peg.",
    riskLevel: "Low",
    allTimeHigh: "$1.00",
    tags: ["Decentralized", "Collateral"],
    keyEvents: [
      { year: 2019, title: "Multi-Collateral DAI", description: "Upgrade allows assets other than ETH to back DAI." }
    ]
  }),

  // ================= GRAVEYARD (THE DEAD) =================
  createCrypto({
    id: "terra-luna", name: "Terra Classic", symbol: "LUNC", type: "Layer 1", rarity: "Common", launchYear: 2018,
    founder: "Do Kwon",
    shortDescription: "A failed algorithmic stablecoin ecosystem. Once a top 10 coin, it collapsed to near zero in days.",
    status: "inactive",
    riskLevel: "Extreme",
    cons: ["Collapsed to zero", "Founder in jail"],
    originStory: "Terra attempted to create a stablecoin (UST) backed not by cash, but by its volatile sister token LUNA. It worked until it didn't. In May 2022, the peg broke, causing a 'death spiral' that wiped out $60 Billion in wealth.",
    allTimeHigh: "$119",
    keyEvents: [
      { year: 2018, title: "Launch", description: "Terraform Labs launches the network." },
      { year: 2022, title: "The Crash", description: "UST depegs; LUNA supply hyperinflates from 300M to 6 Trillion." },
      { year: 2023, title: "Arrest", description: "Do Kwon arrested in Montenegro." }
    ]
  }),
  createCrypto({
    id: "ftx-token", name: "FTX Token", symbol: "FTT", type: "DeFi", rarity: "Common", launchYear: 2019,
    founder: "Sam Bankman-Fried",
    shortDescription: "The native token of the now-bankrupt FTX exchange. It was used to get discounts and perks on the platform.",
    status: "inactive",
    riskLevel: "Extreme",
    originStory: "FTX was the darling of the crypto world, and FTT was its stock. In November 2022, it was revealed that FTX was insolvent and using FTT as fake collateral to borrow billions. The token collapsed along with the exchange.",
    allTimeHigh: "$85",
    keyEvents: [
      { year: 2019, title: "Launch", description: "FTX Exchange opens for business." },
      { year: 2022, title: "Bankruptcy", description: "FTX files for Chapter 11; SBF arrested." }
    ]
  }),
  createCrypto({
    id: "bitconnect", name: "BitConnect", symbol: "BCC", type: "Meme", rarity: "Common", launchYear: 2016,
    founder: "Unknown",
    shortDescription: "The most infamous Ponzi scheme in crypto history. Known for its high-yield lending program.",
    status: "inactive",
    riskLevel: "Extreme",
    originStory: "BitConnect promised users 1% daily interest if they bought BCC tokens and 'lent' them to a trading bot. There was no bot. It was a classic pyramid scheme. It collapsed in 2018 when regulators stepped in.",
    allTimeHigh: "$463",
    keyEvents: [
      { year: 2017, title: "Meme Legend", description: "Carlos Matos screams 'BITCONNECT!' at a conference." },
      { year: 2018, title: "Exit Scam", description: "Price crashes 90% in hours as the site shuts down." }
    ]
  }),
  createCrypto({
    id: "celsius-degree-token", name: "Celsius", symbol: "CEL", type: "DeFi", rarity: "Common", launchYear: 2018,
    founder: "Alex Mashinsky",
    shortDescription: "Token of the bankrupt lending platform Celsius Network. Promoted as 'safe' banking for crypto.",
    status: "inactive",
    riskLevel: "Extreme",
    originStory: "Celsius told users 'Unbank Yourself' and offered high interest on deposits. In reality, they were taking massive risks with customer funds. They paused withdrawals in June 2022 and filed for bankruptcy.",
    allTimeHigh: "$8.05",
    keyEvents: [
      { year: 2022, title: "Withdrawal Freeze", description: "Users locked out of billions in savings." },
      { year: 2023, title: "CEO Arrest", description: "Alex Mashinsky charged with fraud." }
    ]
  })
];
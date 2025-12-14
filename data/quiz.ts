
import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // --- BASICS ---
  {
    id: "q1",
    topic: "HISTORY",
    clue: "I am the original. I have no CEO, no office, and a max supply of 21 million.",
    options: ["Ethereum", "Bitcoin", "XRP", "Cardano"],
    correctAnswer: "Bitcoin",
    explanation: "Bitcoin is decentralized and has a hard cap of 21 million coins."
  },
  {
    id: "q2",
    topic: "SLANG",
    clue: "What term describes holding onto your crypto even when the price crashes?",
    options: ["FOMO", "HODL", "FUD", "DEX"],
    correctAnswer: "HODL",
    explanation: "HODL stands for 'Hold On for Dear Life' (originally a typo for HOLD)."
  },
  {
    id: "q3",
    topic: "LAYER_1",
    clue: "I am the 'World Computer'. I introduced Smart Contracts.",
    options: ["Solana", "Bitcoin", "Ethereum", "Polkadot"],
    correctAnswer: "Ethereum",
    explanation: "Ethereum expanded blockchain utility beyond just money."
  },
  {
    id: "q4",
    topic: "STABLECOIN",
    clue: "I am a stablecoin. I am always worth exactly one US Dollar (usually).",
    options: ["Bitcoin", "USDT", "Doge", "Solana"],
    correctAnswer: "USDT",
    explanation: "Tether (USDT) is pegged 1:1 to the USD."
  },
  {
    id: "q5",
    topic: "LAYER_1",
    clue: "They call me the 'Ethereum Killer' because I am very fast and cheap.",
    options: ["Solana", "Bitcoin", "Monero", "Litecoin"],
    correctAnswer: "Solana",
    explanation: "Solana handles thousands of transactions per second."
  },
  {
    id: "q6",
    topic: "SECURITY",
    clue: "If you lose your private keys (seed phrase), what happens?",
    options: ["Call support", "Reset password", "Money is gone", "Bank refunds you"],
    correctAnswer: "Money is gone",
    explanation: "Crypto is self-custody. There is no help desk."
  },
  {
    id: "q7",
    topic: "ASSETS",
    clue: "What represents ownership of a unique digital item, like art or a game character?",
    options: ["DeFi", "NFT", "CEX", "PoW"],
    correctAnswer: "NFT",
    explanation: "NFT stands for Non-Fungible Token."
  },
  {
    id: "q8",
    topic: "TOKENOMICS",
    clue: "Which event happens every 4 years and cuts Bitcoin's inflation in half?",
    options: ["The Merge", "The Halving", "The Fork", "The Flippening"],
    correctAnswer: "The Halving",
    explanation: "The Bitcoin Halving reduces mining rewards by 50%."
  },
  {
    id: "q9",
    topic: "MARKET",
    clue: "What animal represents a 'Bull Market'?",
    options: ["Bear", "Bull", "Whale", "Dog"],
    correctAnswer: "Bull",
    explanation: "A Bull Market means prices are going up."
  },
  {
    id: "q10",
    topic: "MARKET",
    clue: "What animal represents a 'Bear Market'?",
    options: ["Bear", "Bull", "Whale", "Dog"],
    correctAnswer: "Bear",
    explanation: "A Bear Market means prices are going down."
  },

  // --- INTERMEDIATE ---
  {
    id: "q11",
    topic: "PEOPLE",
    clue: "I am the founder of Ethereum.",
    options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charles Hoskinson", "Elon Musk"],
    correctAnswer: "Vitalik Buterin",
    explanation: "Vitalik co-founded Ethereum in 2015."
  },
  {
    id: "q12",
    topic: "MECHANISM",
    clue: "Which consensus mechanism uses mining equipment and electricity?",
    options: ["Proof of Stake", "Proof of Work", "Proof of History", "Proof of Authority"],
    correctAnswer: "Proof of Work",
    explanation: "Bitcoin uses Proof of Work (PoW) to secure the network."
  },
  {
    id: "q13",
    topic: "MARKET",
    clue: "What is a 'Whale' in crypto?",
    options: ["A big investor", "A scammer", "A developer", "A losing trader"],
    correctAnswer: "A big investor",
    explanation: "Whales hold large amounts of crypto and can move the market."
  },
  {
    id: "q14",
    topic: "DEFI",
    clue: "What does 'DeFi' stand for?",
    options: ["Digital Finance", "Decentralized Finance", "Direct Finance", "Daily Finance"],
    correctAnswer: "Decentralized Finance",
    explanation: "DeFi refers to financial services without intermediaries."
  },
  {
    id: "q15",
    topic: "SECURITY",
    clue: "Which wallet is safer for long-term storage?",
    options: ["Hot Wallet (Online)", "Cold Wallet (Hardware)", "Exchange Wallet", "Web Browser"],
    correctAnswer: "Cold Wallet (Hardware)",
    explanation: "Cold wallets are offline and immune to online hacks."
  },
  {
    id: "q16",
    topic: "CULTURE",
    clue: "What is the name of the dog on the Dogecoin logo?",
    options: ["Kabosu", "Cheems", "Doge", "Buddy"],
    correctAnswer: "Kabosu",
    explanation: "Kabosu is the name of the real Shiba Inu dog."
  },
  {
    id: "q17",
    topic: "SLANG",
    clue: "What does 'FUD' stand for?",
    options: ["Fear, Uncertainty, Doubt", "Fun, Utility, Data", "Fast, Useful, Decentralized", "Fear Under Demand"],
    correctAnswer: "Fear, Uncertainty, Doubt",
    explanation: "FUD is negative news spread to lower prices."
  },
  {
    id: "q18",
    topic: "MECHANISM",
    clue: "What is a 'Gas Fee'?",
    options: ["Fuel for cars", "Transaction fee", "Mining reward", "Exchange tax"],
    correctAnswer: "Transaction fee",
    explanation: "You pay gas fees to miners/validators to process your transaction."
  },
  {
    id: "q19",
    topic: "HISTORY",
    clue: "Who is the mysterious creator of Bitcoin?",
    options: ["Vitalik Buterin", "Satoshi Nakamoto", "Craig Wright", "Sam Bankman-Fried"],
    correctAnswer: "Satoshi Nakamoto",
    explanation: "Satoshi Nakamoto is the pseudonym of Bitcoin's creator."
  },
  {
    id: "q20",
    topic: "SCAMS",
    clue: "What implies that a project is a scam where developers steal the money?",
    options: ["Rug Pull", "Moon Shot", "Airdrop", "Fork"],
    correctAnswer: "Rug Pull",
    explanation: "A Rug Pull is when the team drains liquidity and disappears."
  },

  // --- ADVANCED / TRIVIA ---
  {
    id: "q21",
    topic: "ADOPTION",
    clue: "Which country was the first to make Bitcoin legal tender?",
    options: ["USA", "China", "El Salvador", "Japan"],
    correctAnswer: "El Salvador",
    explanation: "El Salvador adopted Bitcoin as legal tender in 2021."
  },
  {
    id: "q22",
    topic: "TOKENOMICS",
    clue: "What is the maximum supply of Ethereum?",
    options: ["21 Million", "100 Million", "Infinite (No Hard Cap)", "1 Billion"],
    correctAnswer: "Infinite (No Hard Cap)",
    explanation: "Ethereum has no hard cap, but burns fees to reduce supply."
  },
  {
    id: "q23",
    topic: "HISTORY",
    clue: "What was the first item purchased with Bitcoin?",
    options: ["A car", "Two Pizzas", "A house", "A laptop"],
    correctAnswer: "Two Pizzas",
    explanation: "Laszlo Hanyecz paid 10,000 BTC for two pizzas in 2010."
  },
  {
    id: "q24",
    topic: "PRIVACY",
    clue: "Which crypto handles privacy and anonymous transactions?",
    options: ["Bitcoin", "Monero", "Ethereum", "USDC"],
    correctAnswer: "Monero",
    explanation: "Monero (XMR) uses cryptography to hide sender, receiver, and amount."
  },
  {
    id: "q25",
    topic: "DEFI",
    clue: "What is 'Yield Farming'?",
    options: ["Planting crops", "Lending crypto for interest", "Mining Bitcoin", "Buying NFTs"],
    correctAnswer: "Lending crypto for interest",
    explanation: "Yield farming involves providing liquidity to earn rewards."
  },
  {
    id: "q26",
    topic: "HISTORY",
    clue: "What happened to the exchange FTX in 2022?",
    options: ["It went bankrupt", "It bought Binance", "It launched a new coin", "It hacked Google"],
    correctAnswer: "It went bankrupt",
    explanation: "FTX collapsed due to fraud and misuse of customer funds."
  },
  {
    id: "q27",
    topic: "UNIT",
    clue: "What represents the smallest unit of Bitcoin?",
    options: ["Wei", "Satoshi", "Bit", "Gwei"],
    correctAnswer: "Satoshi",
    explanation: "1 Bitcoin = 100,000,000 Satoshis."
  },
  {
    id: "q28",
    topic: "ADOPTION",
    clue: "Which company holds the most Bitcoin on its balance sheet?",
    options: ["Tesla", "MicroStrategy", "Apple", "Microsoft"],
    correctAnswer: "MicroStrategy",
    explanation: "MicroStrategy, led by Michael Saylor, holds massive amounts of BTC."
  },
  {
    id: "q29",
    topic: "SLANG",
    clue: "What does 'WAGMI' stand for?",
    options: ["We All Get Money Instantly", "We're All Gonna Make It", "Why Are Graphs Moving In", "What A Great Market Indicator"],
    correctAnswer: "We're All Gonna Make It",
    explanation: "WAGMI is a rallying cry for optimism in the community."
  },
  {
    id: "q30",
    topic: "SECURITY",
    clue: "What is a 'Seed Phrase'?",
    options: ["A password hint", "A list of 12-24 words to recover wallet", "A crypto startup funding", "A farming game"],
    correctAnswer: "A list of 12-24 words to recover wallet",
    explanation: "The seed phrase is the master key to your wallet."
  }
];

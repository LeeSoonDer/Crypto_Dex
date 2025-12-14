export type CryptoType = "Layer 1" | "Layer 2" | "DeFi" | "Meme" | "Infrastructure" | "Stablecoin" | "Gaming" | "Privacy" | "AI" | "RWA";

export interface BattleStats {
  adoption: number;       // 1-100
  volatility: number;     // 1-100
  innovation: number;     // 1-100
  decentralization: number; // 1-100
  community: number;      // 1-100
}

export interface Crypto {
  id: string; // matches URL param
  name: string;
  symbol: string;
  type: CryptoType;
  rarity: "Common" | "Rare" | "Legendary" | "Mythic";
  launchYear: number;
  founder: string;
  founderImageUrl?: string; // Dicebear URL
  shortDescription: string;
  originStory: string;
  riskLevel: "Low" | "Medium" | "High" | "Extreme";
  tags: string[];
  status: "active" | "inactive";
  logoUrl?: string; // Optional override
  
  // Extended Educational Data
  utility?: string;
  pros?: string[];
  cons?: string[];
  funFact?: string;
  
  // Static Market Fallbacks
  maxSupply?: string;
  allTimeHigh?: string;
  
  // Battle Stats
  stats?: BattleStats;
  
  // Timeline
  keyEvents: { year: number; title: string; description: string }[];
}

export interface Concept {
  id: string;
  title: string;
  shortSummary: string;
  bullets: string[];
  relatedTags: string[];
  image: string;
  
  // New Detailed Content
  details?: {
    longDescription: string;
    extraBullets: string[];
    funFact?: string;
    analogy?: string; // "Think of it like..."
  };
}

export interface TypeDefinition {
  id: CryptoType; // Strictly typed for linking
  name: string;
  description: string; // Short description
  typicalExamples: string[];
  riskNotes: string;
  
  // New Detailed Content
  details?: {
    expandedDescription: string;
    useCases: string[];
    exampleCoinsFull: { name: string; symbol: string }[];
  };
}

export interface HistoricalEvent {
  year: number;
  title: string;
  description: string; // Short summary
  
  // New Detailed Content
  details?: {
    longDescription: string;
    impactPoints: string[];
  };
}

export interface QuizQuestion {
  id: string;
  clue: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topic: string; // Added category label for UI
}
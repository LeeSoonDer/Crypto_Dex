import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crypto, BattleStats } from '../types';

// --- PIXEL BUTTON ---
interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'success' | 'warning' | 'outline';
}

export const PixelButton: React.FC<PixelButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-pixel-cyan text-space-950 border-white hover:bg-cyan-300',
    danger: 'bg-pixel-red text-white border-white hover:bg-red-400',
    success: 'bg-pixel-green text-space-950 border-white hover:bg-green-300',
    warning: 'bg-pixel-yellow text-space-950 border-white hover:bg-yellow-300',
    outline: 'bg-transparent text-pixel-cyan border-pixel-cyan hover:bg-pixel-cyan/10',
  };

  return (
    <button
      className={`
        ${variants[variant]}
        font-retro uppercase tracking-widest text-xs sm:text-sm
        px-6 py-3
        border-2
        shadow-pixel active:translate-y-1 active:shadow-none
        transition-all duration-150
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// --- PIXEL BADGE ---
export const PixelBadge: React.FC<{ children: React.ReactNode, color?: string }> = ({ children, color = 'bg-space-700 text-gray-300' }) => (
  <span className={`px-2 py-1 font-terminal text-sm uppercase font-bold border border-white/10 rounded-sm ${color}`}>
    {children}
  </span>
);

// --- RISK BAR (HP STYLE) ---
export const RiskBar: React.FC<{ level: string }> = ({ level }) => {
  const maxSegments = 5;
  let fillCount = 1;
  let colorClass = 'bg-pixel-green';

  switch (level) {
    case 'Low': fillCount = 1; colorClass = 'bg-pixel-green'; break;
    case 'Medium': fillCount = 3; colorClass = 'bg-pixel-yellow'; break;
    case 'High': fillCount = 4; colorClass = 'bg-orange-500'; break;
    case 'Extreme': fillCount = 5; colorClass = 'bg-pixel-red'; break;
  }

  return (
    <div className="flex gap-1 mt-1">
      {[...Array(maxSegments)].map((_, i) => (
        <div 
          key={i} 
          className={`h-2 w-full ${i < fillCount ? colorClass : 'bg-space-800'} border border-space-950/50`}
        />
      ))}
    </div>
  );
};

// --- BATTLE STATS PANEL ---
// Renders animated stats bars (ATK/DEF style)
export const BattleStatsPanel: React.FC<{ stats?: BattleStats, type: string }> = ({ stats, type }) => {
  if (!stats) return null;

  const entries = [
    { label: "ADOPTION", val: stats.adoption },
    { label: "VOLATILITY", val: stats.volatility },
    { label: "INNOVATION", val: stats.innovation },
    { label: "DECENTRAL", val: stats.decentralization },
    { label: "COMMUNITY", val: stats.community }
  ];

  // Determine skin based on type
  let accentColor = "bg-pixel-cyan";
  if (type === "Meme") accentColor = "bg-pixel-pink";
  else if (type === "DeFi") accentColor = "bg-pixel-green";
  else if (type === "Layer 1") accentColor = "bg-pixel-purple";

  return (
    <div className="bg-space-900 border-2 border-space-700 p-4">
      <div className="font-retro text-[0.6rem] text-gray-500 mb-3 uppercase tracking-widest border-b border-space-800 pb-1">
        BATTLE STATS MATRIX
      </div>
      <div className="space-y-3">
        {entries.map((stat, i) => (
          <div key={stat.label}>
            <div className="flex justify-between items-center mb-1 font-terminal text-xs text-gray-400">
              <span>{stat.label}</span>
              <span>{stat.val}/100</span>
            </div>
            <div className="h-2 w-full bg-space-950 border border-space-800 rounded-sm overflow-hidden relative">
              <div 
                className={`h-full ${accentColor} animate-bar-fill`}
                style={{ width: `${stat.val}%`, animationDelay: `${i * 100}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- CRYPTO IMAGE ---
interface CryptoImageProps {
  symbol: string;
  className?: string;
  src?: string;
  type?: 'coin' | 'avatar';
}

export const CryptoImage: React.FC<CryptoImageProps> = ({ symbol, className, src, type = 'coin' }) => {
  const [error, setError] = useState(false);
  
  let imageUrl: string;

  if (type === 'avatar') {
    imageUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${symbol}`;
  } else {
    if (!error) {
      const safeSymbol = symbol.toLowerCase();
      imageUrl = src || `https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/icon/${safeSymbol}.png`;
    } else {
      imageUrl = `https://api.dicebear.com/9.x/identicon/svg?seed=${symbol}`;
    }
  }

  return (
    <img
      src={imageUrl}
      alt={symbol}
      className={`image-pixelated ${className}`}
      onError={() => { if (!error) setError(true); }}
      loading="lazy"
    />
  );
};

// --- PIXEL CARD (SPACE TERMINAL STYLE) ---
// Now includes Entry Badge (#001) and Animated Rarity
export const PixelCard: React.FC<{ crypto: Crypto, index?: number }> = ({ crypto, index = 0 }) => {
  const isInactive = crypto.status === 'inactive';
  const isLegendary = crypto.rarity === "Legendary" || crypto.rarity === "Mythic";

  // Visuals for rarity
  let rarityColor = "text-gray-500 bg-space-800 border-space-700";
  if (crypto.rarity === "Rare") rarityColor = "text-pixel-purple bg-pixel-purple/10 border-pixel-purple/30";
  if (isLegendary) rarityColor = "text-pixel-yellow bg-pixel-yellow/10 border-pixel-yellow/50 legendary-glow";

  return (
    <Link to={`/dex/${crypto.id}`} className="group block h-full">
      {/* Container: Dark Space Background with Retro Borders */}
      <div className={`
        h-full bg-space-900 
        border-2 border-space-700
        group-hover:border-pixel-cyan group-hover:shadow-glow-cyan
        group-hover:-translate-y-1
        transition-all duration-200
        relative overflow-hidden flex flex-col
        ${isInactive ? 'opacity-75 grayscale' : ''}
        ${isLegendary ? 'border-pixel-yellow/20' : ''}
      `}>
        
        {/* A1: Corner Badge (Folded corner look) */}
        <div className="absolute top-0 left-0 bg-space-800 text-pixel-cyan font-retro text-[0.5rem] pl-2 pr-3 py-1 border-r border-b border-space-700 rounded-br-lg z-10 shadow-sm">
          #{String(index + 1).padStart(3, '0')}
        </div>

        {/* Inner "Screen" Frame */}
        <div className="flex-grow p-4 pt-8">
          
          {/* Header: Rarity Tag Top Right */}
          <div className="absolute top-2 right-2">
             <span className={`font-retro text-[0.5rem] uppercase px-2 py-0.5 border ${rarityColor} rounded-full`}>
               {crypto.rarity}
             </span>
          </div>

          <div className="flex items-start justify-between mb-4 mt-2">
             <div className="w-12 h-12 bg-space-950 border border-space-700 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
               <CryptoImage symbol={crypto.symbol} className="w-full h-full" />
             </div>
             <div className="text-right">
               <h3 className="font-retro text-[0.6rem] text-pixel-dim mb-1 tracking-widest">#{crypto.symbol}</h3>
               <div className={`font-retro text-sm ${isInactive ? 'text-pixel-red line-through' : 'text-white'}`}>
                 {crypto.name}
               </div>
             </div>
          </div>

          {/* Type & Description */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-[0.6rem] font-retro text-pixel-cyan border border-pixel-cyan/30 px-1 py-0.5">
                {crypto.type.toUpperCase()}
              </span>
              {isInactive && (
                <span className="text-[0.6rem] font-retro bg-pixel-red text-white px-1 py-0.5">
                  DEAD
                </span>
              )}
            </div>
            <p className="font-terminal text-lg text-gray-400 leading-tight line-clamp-2 h-10">
              {crypto.shortDescription}
            </p>
          </div>

          {/* Stats Grid (Terminal Look) */}
          <div className="bg-space-950 p-2 border border-space-800 mb-2">
             <div className="flex justify-between items-end">
               <span className="font-terminal text-gray-500 text-sm">RISK LEVEL</span>
               <span className={`font-terminal text-sm ${
                 crypto.riskLevel === 'Extreme' ? 'text-pixel-red' : 
                 crypto.riskLevel === 'High' ? 'text-orange-400' : 
                 'text-pixel-green'
               }`}>
                 {crypto.riskLevel.toUpperCase()}
               </span>
             </div>
             <RiskBar level={crypto.riskLevel} />
          </div>
        </div>

        {/* Footer Action */}
        <div className="bg-space-800 p-2 text-center border-t border-space-700 group-hover:bg-pixel-cyan group-hover:text-space-950 transition-colors">
          <span className="font-retro text-[0.6rem] tracking-widest">ACCESS DATA</span>
        </div>

      </div>
    </Link>
  );
};
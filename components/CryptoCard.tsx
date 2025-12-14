import React from 'react';
import { Link } from 'react-router-dom';
import { Crypto } from '../types';
import { Zap, Shield, Star, Activity } from 'lucide-react';

interface CryptoCardProps {
  crypto: Crypto;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  // Color mapping based on type
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Layer 1': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Layer 2': return 'bg-violet-100 text-violet-800 border-violet-200';
      case 'DeFi': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Meme': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Stablecoin': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'border-amber-400 ring-1 ring-amber-400';
      case 'Rare': return 'border-blue-400';
      default: return 'border-slate-200';
    }
  };

  return (
    <Link to={`/dex/${crypto.id}`} className="block h-full">
      <div className={`h-full bg-white rounded-2xl p-5 border-2 ${getRarityBorder(crypto.rarity)} shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group`}>
        {/* Decorative background circle */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors z-0" />

        <div className="relative z-10">
          {/* Header: Type & Rarity */}
          <div className="flex justify-between items-start mb-3">
            <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${getTypeColor(crypto.type)}`}>
              {crypto.type}
            </span>
            {crypto.rarity === 'Legendary' && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
          </div>

          {/* Main Info */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-slate-800">{crypto.name}</h3>
              <span className="text-sm font-mono text-slate-500">{crypto.symbol}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Est. {crypto.launchYear}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 mb-4 line-clamp-2 h-10">
            {crypto.shortDescription}
          </p>

          {/* Stats Bar (Risk) */}
          <div className="mt-auto">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Risk Level</span>
              <span className={
                crypto.riskLevel === 'High' ? 'text-red-500 font-bold' :
                crypto.riskLevel === 'Medium' ? 'text-orange-500 font-bold' :
                'text-green-500 font-bold'
              }>{crypto.riskLevel}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  crypto.riskLevel === 'High' ? 'bg-red-400 w-3/4' :
                  crypto.riskLevel === 'Medium' ? 'bg-orange-400 w-1/2' :
                  'bg-green-400 w-1/4'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
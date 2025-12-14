import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { cryptos } from '../data/cryptos';
import { CryptoImage, PixelBadge, RiskBar, BattleStatsPanel } from '../components/ui';
import { ArrowLeft, Clock } from 'lucide-react';

export const DexDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const staticCrypto = cryptos.find((c) => c.id === id);

  const [marketData, setMarketData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  
  // Hover interaction for timeline
  const [hoveredEventYear, setHoveredEventYear] = useState<number | null>(null);

  useEffect(() => {
    if (!staticCrypto) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        setMarketData(data);
        setLoading(false);
      } catch (err) {
        setApiError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, staticCrypto]);

  if (!staticCrypto) return <Navigate to="/dex" replace />;

  const fmtPrice = (price: number) => 
    price < 1 ? `$${price.toFixed(6)}` : `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  const fmtNum = (num: number) => 
    num > 1_000_000_000 ? `${(num / 1_000_000_000).toFixed(2)}B` : `${(num / 1_000_000).toFixed(2)}M`;

  const isInactive = staticCrypto.status === 'inactive';

  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
      
      {/* NAV BACK */}
      <Link to="/dex" className="inline-flex items-center text-gray-500 font-retro text-[0.6rem] mb-6 hover:text-pixel-cyan transition-colors">
        <ArrowLeft className="w-3 h-3 mr-2" /> RETURN TO DATABASE
      </Link>

      {/* MAIN MONITOR LAYOUT */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* LEFT: PROFILE IMAGE & IDENTITY (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Main Profile Card */}
          <div className={`
            bg-space-900 border-4 relative overflow-hidden p-6 transition-colors duration-300
            ${hoveredEventYear ? 'border-pixel-purple' : 'border-space-700'}
            ${isInactive ? 'border-pixel-red' : ''}
          `}>
            {isInactive && (
               <div className="absolute top-0 right-0 bg-pixel-red text-white font-retro text-xs px-3 py-1 z-20">
                 DECOMMISSIONED
               </div>
            )}
            
            {/* Rarity Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className={`font-retro text-xs transition-colors ${hoveredEventYear ? 'text-pixel-purple' : 'text-gray-500'}`}>
                {hoveredEventYear ? `ID: ${hoveredEventYear}` : `#${staticCrypto.id.substring(0,4).toUpperCase()}`}
              </span>
              <PixelBadge color={staticCrypto.rarity === 'Legendary' ? 'bg-pixel-yellow/20 text-pixel-yellow' : 'bg-space-800 text-gray-400'}>
                {staticCrypto.rarity}
              </PixelBadge>
            </div>

            {/* Image */}
            <div className={`
              w-40 h-40 mx-auto bg-space-950 border-2 flex items-center justify-center p-6 mb-6 rounded-full shadow-inner relative transition-colors duration-300
              ${hoveredEventYear ? 'border-pixel-purple' : 'border-space-800'}
            `}>
              <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse"></div>
              <CryptoImage 
                symbol={staticCrypto.symbol} 
                src={marketData?.image?.large || staticCrypto.logoUrl} 
                className="w-full h-full object-contain drop-shadow-lg" 
              />
            </div>

            <h1 className="font-retro text-2xl text-white text-center mb-1">{staticCrypto.name}</h1>
            <p className="font-terminal text-3xl text-pixel-cyan text-center font-bold tracking-widest mb-6">
              {staticCrypto.symbol}
            </p>

            {/* Risk Meter */}
            <div className="bg-space-950 p-4 border border-space-800">
              <div className="flex justify-between text-xs font-terminal text-gray-400 mb-1">
                <span>THREAT LEVEL</span>
                <span>{staticCrypto.riskLevel}</span>
              </div>
              <RiskBar level={staticCrypto.riskLevel} />
            </div>
            
            {/* B1: Battle Stats Panel (Mobile/Desktop placement varies, here vertical stack) */}
            <div className="mt-6">
              <BattleStatsPanel stats={staticCrypto.stats} type={staticCrypto.type} />
            </div>
          </div>

          {/* Founder Data */}
          <div className="bg-space-900 border-2 border-space-700 p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-space-950 border border-space-600 flex-shrink-0">
              <CryptoImage symbol={staticCrypto.founder} type="avatar" className="w-full h-full" />
            </div>
            <div>
              <div className="font-retro text-[0.6rem] text-gray-500 uppercase">FOUNDER</div>
              <div className="font-terminal text-lg text-white">{staticCrypto.founder}</div>
              <div className="font-terminal text-xs text-pixel-purple">EST. {staticCrypto.launchYear}</div>
            </div>
          </div>

        </div>

        {/* RIGHT: DATA TERMINAL (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Stats Row (Live Data) */}
          <div className="bg-space-950 border-2 border-pixel-cyan p-6 relative shadow-glow-cyan">
             <div className="absolute top-0 left-0 bg-pixel-cyan text-space-950 font-retro text-[0.6rem] px-2 py-0.5">
               LIVE FEED
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2">
                <div>
                  <div className="font-terminal text-gray-500 text-sm">CURRENT PRICE</div>
                  <div className="font-terminal text-3xl text-white">
                    {loading ? <span className="animate-pulse">_ _ _</span> : marketData?.market_data?.current_price?.usd ? fmtPrice(marketData.market_data.current_price.usd) : "N/A"}
                  </div>
                </div>
                <div>
                  <div className="font-terminal text-gray-500 text-sm">24H CHANGE</div>
                  <div className={`font-terminal text-3xl ${marketData?.market_data?.price_change_percentage_24h >= 0 ? 'text-pixel-green' : 'text-pixel-red'}`}>
                    {loading ? "..." : marketData?.market_data?.price_change_percentage_24h?.toFixed(2)}%
                  </div>
                </div>
                 <div>
                  <div className="font-terminal text-gray-500 text-sm">MARKET CAP</div>
                  <div className="font-terminal text-xl text-gray-300">
                    {loading ? "..." : marketData?.market_data?.market_cap?.usd ? fmtNum(marketData.market_data.market_cap.usd) : "N/A"}
                  </div>
                </div>
                <div>
                  <div className="font-terminal text-gray-500 text-sm">ATH</div>
                  <div className="font-terminal text-xl text-gray-300">
                    {marketData?.market_data?.ath?.usd ? fmtPrice(marketData.market_data.ath.usd) : staticCrypto.allTimeHigh}
                  </div>
                </div>
             </div>
          </div>

          {/* Description & Tags */}
          <div className="bg-space-900 border-2 border-space-700 p-6">
            <div className="flex flex-wrap gap-2 mb-4">
               {staticCrypto.tags.map(t => (
                 <span key={t} className="font-retro text-[0.6rem] px-2 py-1 bg-space-800 text-pixel-cyan border border-space-600">
                   {t}
                 </span>
               ))}
            </div>
            <h3 className="font-retro text-white text-sm mb-2">ORIGIN STORY:</h3>
            <p className="font-terminal text-xl text-gray-300 leading-relaxed">
              {staticCrypto.originStory}
            </p>
          </div>

          {/* Analysis Grid */}
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-space-900/50 border-l-4 border-pixel-green p-4">
                <h4 className="font-retro text-pixel-green text-xs mb-3">SYSTEM STRENGTHS</h4>
                <ul className="font-terminal text-lg text-gray-300 space-y-1">
                  {staticCrypto.pros?.map(p => <li key={p}>+ {p}</li>)}
                </ul>
             </div>
             <div className="bg-space-900/50 border-l-4 border-pixel-red p-4">
                <h4 className="font-retro text-pixel-red text-xs mb-3">SYSTEM VULNERABILITIES</h4>
                <ul className="font-terminal text-lg text-gray-300 space-y-1">
                  {staticCrypto.cons?.map(c => <li key={c}>- {c}</li>)}
                </ul>
             </div>
          </div>

          {/* Timeline - B2: Interactive Hover */}
          <div className="bg-space-900 border-2 border-space-700 p-6">
            <div className="flex items-center gap-2 mb-6 border-b border-space-700 pb-2">
              <Clock className="w-4 h-4 text-pixel-purple" />
              <h3 className="font-retro text-sm text-white">CHRONOLOGICAL LOG</h3>
            </div>
            
            <div className="relative ml-2 border-l-2 border-dashed border-space-600 space-y-8 pl-6 py-2">
              {staticCrypto.keyEvents.map((ev, i) => (
                <div 
                  key={i} 
                  className="relative group cursor-default"
                  onMouseEnter={() => setHoveredEventYear(ev.year)}
                  onMouseLeave={() => setHoveredEventYear(null)}
                >
                   {/* Timeline Node */}
                   <div className="absolute -left-[31px] top-1 w-3 h-3 bg-space-950 border-2 border-pixel-cyan group-hover:bg-pixel-purple group-hover:border-pixel-purple group-hover:scale-125 transition-all" />
                   
                   <div className="flex items-baseline gap-3 mb-1">
                     <span className="font-retro text-xs text-pixel-cyan group-hover:text-pixel-purple transition-colors">{ev.year}</span>
                     <h4 className="font-retro text-xs text-white group-hover:text-pixel-purple transition-colors">{ev.title}</h4>
                   </div>
                   <p className="font-terminal text-gray-400 group-hover:text-white transition-colors">{ev.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
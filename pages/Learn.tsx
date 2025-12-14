import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { concepts, cryptoTypes, history } from '../data/concepts';
import { Concept, TypeDefinition } from '../types';
import { Shield, Layers, History, ArrowRight, Lightbulb, ChevronDown, ChevronRight, Hexagon } from 'lucide-react';
import { RetroModal } from '../components/RetroModal';
import { PixelButton } from '../components/ui';

// Helper for card styling
const getAssetStyle = (id: string) => {
  switch (id) {
    case 'Layer 1': return { 
      borderColor: 'border-blue-500/30 group-hover:border-blue-400', 
      bgGradient: 'from-space-950 via-space-900 to-blue-900/20', 
      textColor: 'text-blue-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]',
      accent: 'bg-blue-500',
      iconColor: 'text-blue-500'
    };
    case 'Layer 2': return { 
      borderColor: 'border-cyan-500/30 group-hover:border-cyan-400', 
      bgGradient: 'from-space-950 via-space-900 to-cyan-900/20', 
      textColor: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
      accent: 'bg-cyan-500',
      iconColor: 'text-cyan-500'
    };
    case 'DeFi': return { 
      borderColor: 'border-emerald-500/30 group-hover:border-emerald-400', 
      bgGradient: 'from-space-950 via-space-900 to-emerald-900/20', 
      textColor: 'text-emerald-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
      accent: 'bg-emerald-500',
      iconColor: 'text-emerald-500'
    };
    case 'Meme': return { 
      borderColor: 'border-pink-500/30 group-hover:border-pink-400', 
      bgGradient: 'from-space-950 via-space-900 to-pink-900/20', 
      textColor: 'text-pink-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]',
      accent: 'bg-pink-500',
      iconColor: 'text-pink-500'
    };
    case 'Gaming': return { 
      borderColor: 'border-orange-500/30 group-hover:border-orange-400', 
      bgGradient: 'from-space-950 via-space-900 to-orange-900/20', 
      textColor: 'text-orange-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]',
      accent: 'bg-orange-500',
      iconColor: 'text-orange-500'
    };
    case 'AI': return { 
      borderColor: 'border-violet-500/30 group-hover:border-violet-400', 
      bgGradient: 'from-space-950 via-space-900 to-violet-900/20', 
      textColor: 'text-violet-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
      accent: 'bg-violet-500',
      iconColor: 'text-violet-500'
    };
    case 'Privacy': return { 
      borderColor: 'border-red-500/30 group-hover:border-red-400', 
      bgGradient: 'from-space-950 via-space-900 to-red-900/20', 
      textColor: 'text-red-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(248,113,113,0.15)]',
      accent: 'bg-red-500',
      iconColor: 'text-red-500'
    };
    case 'Infrastructure': return { 
      borderColor: 'border-amber-500/30 group-hover:border-amber-400', 
      bgGradient: 'from-space-950 via-space-900 to-amber-900/20', 
      textColor: 'text-amber-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
      accent: 'bg-amber-500',
      iconColor: 'text-amber-500'
    };
    case 'Stablecoin': return { 
      borderColor: 'border-slate-500/30 group-hover:border-slate-400', 
      bgGradient: 'from-space-950 via-space-900 to-slate-800/40', 
      textColor: 'text-slate-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(148,163,184,0.15)]',
      accent: 'bg-slate-500',
      iconColor: 'text-slate-500'
    };
    default: return { 
      borderColor: 'border-space-700 group-hover:border-pixel-purple', 
      bgGradient: 'from-space-900 to-space-800', 
      textColor: 'text-pixel-purple',
      glow: '',
      accent: 'bg-pixel-purple',
      iconColor: 'text-white'
    };
  }
};

export const Learn: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [selectedType, setSelectedType] = useState<TypeDefinition | null>(null);
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-20 pb-12">
      
      {/* HEADER */}
      <div className="text-center space-y-4 mt-8">
        <h1 className="font-retro text-4xl md:text-6xl text-white text-shadow-retro">
          DATA <span className="text-pixel-cyan">ARCHIVES</span>
        </h1>
        <p className="font-terminal text-xl text-gray-400 tracking-[0.2em] animate-pulse">
          DECRYPTING KNOWLEDGE BASE...
        </p>
      </div>

      {/* SECTION A: CONCEPTS */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b-4 border-space-800 pb-2">
          <Shield className="w-8 h-8 text-pixel-yellow" />
          <h2 className="font-retro text-2xl text-white">CORE CONCEPTS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {concepts.map((c) => (
            <button 
              key={c.id} 
              onClick={() => setSelectedConcept(c)}
              className="group relative h-80 bg-space-950 border-4 border-space-700 w-full text-left focus:outline-none focus:border-pixel-cyan hover:border-pixel-cyan transition-all duration-300 hover:-translate-y-2 shadow-pixel overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-8 h-1 bg-pixel-cyan mb-4 rounded-full group-hover:w-16 transition-all duration-300" />
                <h3 className="font-retro text-xl md:text-2xl text-white mb-2 text-shadow-retro group-hover:text-pixel-yellow transition-colors">
                  {c.title}
                </h3>
                <p className="font-terminal text-sm md:text-lg text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  {c.shortSummary}
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-pixel-cyan font-retro text-xs bg-space-950/50 w-fit px-2 py-1 rounded border border-pixel-cyan/30">
                   <span>ACCESS FILE</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CONCEPT MODAL */}
      <RetroModal 
        isOpen={!!selectedConcept} 
        onClose={() => setSelectedConcept(null)} 
        title={selectedConcept?.title || 'CONCEPT DATA'}
      >
        {selectedConcept && (
          <div className="space-y-8 animate-fade-in">
            {/* Header Image & Summary */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
               <div className="w-full md:w-1/3 aspect-square bg-space-950 border-2 border-space-700 relative overflow-hidden shrink-0 shadow-inner">
                  <img src={selectedConcept.image} className="w-full h-full object-cover" alt={selectedConcept.title} />
               </div>
               <div className="flex-1">
                 <p className="font-terminal text-xl md:text-2xl text-white leading-relaxed mb-6">
                   {selectedConcept.details?.longDescription || selectedConcept.shortSummary}
                 </p>
                 
                 {selectedConcept.details?.analogy && (
                    <div className="bg-space-800/50 border-l-4 border-pixel-purple p-4 relative">
                      <div className="flex items-center gap-2 text-pixel-purple font-retro text-xs mb-2">
                         <Lightbulb className="w-4 h-4" /> ANALOGY
                      </div>
                      <p className="font-terminal text-lg text-gray-300 italic">
                        "{selectedConcept.details.analogy}"
                      </p>
                    </div>
                 )}
               </div>
            </div>

            {/* Data Points */}
            <div className="grid md:grid-cols-2 gap-8 border-t border-space-800 pt-6">
              <div>
                <h4 className="font-retro text-pixel-cyan text-sm mb-4 border-b border-space-700 pb-2 inline-block">KEY ATTRIBUTES</h4>
                <ul className="space-y-3">
                  {selectedConcept.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-terminal text-gray-300 text-lg">
                      <span className="text-pixel-cyan mt-1">▶</span> {b}
                    </li>
                  ))}
                  {selectedConcept.details?.extraBullets?.map((b, i) => (
                    <li key={`extra-${i}`} className="flex items-start gap-3 font-terminal text-gray-300 text-lg">
                      <span className="text-pixel-cyan mt-1">▶</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
              
              {selectedConcept.details?.funFact && (
                 <div>
                   <div className="bg-pixel-yellow/10 border-2 border-pixel-yellow/30 p-5 h-fit shadow-[4px_4px_0_0_rgba(250,204,21,0.2)]">
                      <h4 className="font-retro text-pixel-yellow text-sm mb-2">FUN FACT</h4>
                      <p className="font-terminal text-lg text-white leading-relaxed">
                        {selectedConcept.details.funFact}
                      </p>
                   </div>
                 </div>
              )}
            </div>
            
            {/* Tags Footer */}
            <div className="flex gap-2 flex-wrap mt-4 pt-4 border-t border-space-800">
              {selectedConcept.relatedTags.map(tag => (
                <span key={tag} className="font-retro text-[0.6rem] bg-space-800 text-gray-400 px-2 py-1 border border-space-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </RetroModal>

      {/* SECTION B: ASSET CLASSES (ENHANCED VISUALS) */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b-4 border-space-800 pb-2">
          <Layers className="w-8 h-8 text-pixel-purple" />
          <h2 className="font-retro text-2xl text-white">ASSET CLASSES</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cryptoTypes.map((t) => {
            const styles = getAssetStyle(t.id);
            return (
              <button 
                key={t.name} 
                onClick={() => setSelectedType(t)}
                className={`
                  relative overflow-hidden group h-full flex flex-col text-left
                  border-2 bg-gradient-to-br transition-all duration-300
                  ${styles.borderColor} ${styles.bgGradient} ${styles.glow}
                  hover:-translate-y-1 shadow-lg hover:shadow-2xl rounded-sm
                `}
              >
                {/* Decorative Background Patterns */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Hexagon className={`w-24 h-24 stroke-1 ${styles.textColor}`} />
                </div>
                {/* Dotted Grid Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-5 flex flex-col h-full">
                  {/* Header */}
                  <div className={`flex justify-between items-start mb-4 pb-2 border-b border-white/10`}>
                    <h3 className={`font-retro text-sm uppercase tracking-widest ${styles.textColor}`}>
                      {t.name}
                    </h3>
                    <div className={`w-2 h-2 ${styles.accent} shadow-[0_0_8px_currentColor] rounded-full animate-pulse`} />
                  </div>
                  
                  {/* Body */}
                  <p className="font-terminal text-xl text-gray-300 mb-6 leading-tight flex-grow group-hover:text-white transition-colors">
                    {t.description}
                  </p>
                  
                  {/* Footer Strip */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      {/* Tiny pills for examples */}
                      {t.typicalExamples.slice(0, 3).map(ex => (
                        <span key={ex} className="text-[0.6rem] font-retro px-1.5 py-0.5 bg-space-950/50 border border-white/10 text-gray-400 rounded">
                          {ex}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`pt-3 border-t border-white/5 flex items-center justify-between group-hover:translate-x-1 transition-transform`}>
                       <span className={`font-retro text-[0.6rem] ${styles.textColor} flex items-center gap-1`}>
                         ACCESS DATA
                       </span>
                       <ChevronRight className={`w-4 h-4 ${styles.textColor}`} />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* TYPE MODAL */}
      <RetroModal 
        isOpen={!!selectedType} 
        onClose={() => setSelectedType(null)} 
        title={selectedType?.name.toUpperCase() || 'CLASS DATA'}
      >
        {selectedType && (
          <div className="space-y-8 animate-fade-in">
             <div>
               <p className="font-terminal text-xl md:text-2xl text-white leading-relaxed mb-6">
                 {selectedType.details?.expandedDescription || selectedType.description}
               </p>
               
               {/* Risk Analysis */}
               <div className="bg-red-950/20 border-l-4 border-pixel-red p-4 mb-6">
                  <h4 className="font-retro text-pixel-red text-sm mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> RISK PROFILE
                  </h4>
                  <p className="font-terminal text-lg text-gray-300">
                    {selectedType.riskNotes}
                  </p>
               </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                {/* Use Cases */}
                <div>
                   <h4 className="font-retro text-pixel-purple text-sm mb-3 border-b border-space-700 pb-1 inline-block">PRIMARY UTILITIES</h4>
                   <ul className="space-y-2">
                     {selectedType.details?.useCases?.map((u, i) => (
                        <li key={i} className="font-terminal text-lg text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-pixel-purple shrink-0"></div> {u}
                        </li>
                     ))}
                   </ul>
                </div>

                {/* Examples */}
                <div>
                   <h4 className="font-retro text-white text-sm mb-3 border-b border-space-700 pb-1 inline-block">KNOWN ENTITIES</h4>
                   <div className="space-y-2">
                     {selectedType.details?.exampleCoinsFull?.map((c, i) => (
                        <div key={i} className="flex items-center justify-between bg-space-950 p-3 border border-space-700 hover:border-gray-500 transition-colors">
                           <span className="font-retro text-xs text-white">{c.name}</span>
                           <span className="font-terminal text-pixel-cyan">{c.symbol}</span>
                        </div>
                     ))}
                   </div>
                </div>
             </div>

             <div className="pt-6 border-t border-space-700 flex justify-center">
               <Link to={`/dex?type=${selectedType.id}`} className="w-full md:w-auto">
                  <PixelButton variant="primary" className="w-full flex items-center justify-center gap-2 bg-pixel-purple border-pixel-purple text-white hover:bg-purple-600">
                    <Layers className="w-4 h-4" /> BROWSE DATABASE ({selectedType.name})
                  </PixelButton>
               </Link>
             </div>
          </div>
        )}
      </RetroModal>

      {/* SECTION C: HISTORY LOG */}
      <section>
         <div className="flex items-center gap-3 mb-8 border-b-4 border-space-800 pb-2">
          <History className="w-8 h-8 text-white" />
          <h2 className="font-retro text-2xl text-white">HISTORY LOG</h2>
        </div>
        
        <div className="border-l-4 border-space-700 ml-4 space-y-6 relative">
          {/* End Cap */}
          <div className="absolute -bottom-2 -left-[10px] w-4 h-4 bg-space-700"></div>

          {history.map((ev) => {
            const isExpanded = expandedYear === ev.year;
            return (
              <div 
                key={ev.year} 
                className={`
                  relative pl-10 group cursor-pointer transition-all duration-300 
                  ${isExpanded ? 'py-6 -ml-4 pl-14 bg-space-900/80 border-y border-space-700 shadow-lg' : 'hover:pl-12'}
                `}
                onClick={() => toggleYear(ev.year)}
              >
                {/* Timeline Dot */}
                <div className={`
                  absolute top-1 w-4 h-4 border-2 transition-all duration-300 rotate-45
                  ${isExpanded ? 'bg-pixel-cyan border-pixel-cyan -left-[5px] scale-110 top-6' : 'bg-space-950 border-space-500 -left-[9px] group-hover:border-pixel-cyan group-hover:bg-pixel-cyan'}
                `} />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2 pr-4">
                  <span className={`font-retro text-xl transition-colors ${isExpanded ? 'text-pixel-cyan' : 'text-gray-500 group-hover:text-pixel-cyan'}`}>
                    {ev.year}
                  </span>
                  <div className="flex items-center gap-2">
                     <h3 className={`font-retro text-sm transition-colors ${isExpanded ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                       {ev.title}
                     </h3>
                     {!isExpanded && <ChevronDown className="w-4 h-4 text-space-600 group-hover:text-pixel-cyan opacity-0 group-hover:opacity-100 transition-all" />}
                  </div>
                </div>

                <div className="pr-4 max-w-3xl">
                  <p className={`font-terminal text-xl transition-colors ${isExpanded ? 'text-white font-bold' : 'text-gray-500 group-hover:text-gray-400'}`}>
                    {ev.description}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && ev.details && (
                    <div className="mt-6 pt-6 border-t border-space-700/50 animate-fade-in">
                       <p className="font-terminal text-lg text-gray-300 mb-6 leading-relaxed">
                         {ev.details.longDescription}
                       </p>
                       {ev.details.impactPoints && (
                         <div className="flex flex-wrap gap-3">
                           {ev.details.impactPoints.map((p, i) => (
                             <span key={i} className="font-retro text-[0.6rem] bg-space-950 text-pixel-yellow px-3 py-1 border border-pixel-yellow/30 shadow-sm">
                               ! {p}
                             </span>
                           ))}
                         </div>
                       )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, Gamepad2, ShieldAlert } from 'lucide-react';

export const Home: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[80vh] relative">
      
      {/* HERO: TITLE SCREEN */}
      <div className="relative text-center z-10 animate-fade-in-up flex flex-col items-center">
        
        {/* ANIMATED CENTERPIECE */}
        <div className="mb-8 relative">
            {/* Floating Pixel Earth/Planet */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative animate-float">
               {/* Glow Effect */}
               <div className="absolute inset-0 bg-pixel-cyan/30 blur-3xl rounded-full animate-pulse"></div>
               {/* Pixel Art Image */}
               <img 
                 src="https://api.dicebear.com/9.x/pixel-art/svg?seed=EarthPlanet2&backgroundColor=transparent" 
                 alt="Pixel Earth" 
                 className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] image-pixelated"
               />
            </div>
            
            {/* Orbiting Coin 1 */}
            <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 animate-bounce delay-100">
               <img src="https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/icon/btc.png" className="w-full h-full opacity-80" alt="BTC" />
            </div>
             {/* Orbiting Coin 2 */}
             <div className="absolute bottom-0 left-0 w-6 h-6 md:w-10 md:h-10 animate-bounce delay-700">
               <img src="https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/icon/eth.png" className="w-full h-full opacity-80" alt="ETH" />
            </div>
        </div>

        {/* Title Text */}
        <div className="mb-12 relative inline-block">
           <h1 className="relative font-retro text-5xl md:text-7xl text-white mb-4 text-shadow-retro tracking-tighter z-10">
             CRYPTO<span className="text-transparent bg-clip-text bg-gradient-to-r from-pixel-cyan to-pixel-purple">DEX</span>
           </h1>
           <div className="flex justify-center gap-2">
             <span className="px-2 py-1 bg-space-800 border border-space-700 text-pixel-cyan font-terminal text-sm tracking-widest">
               VER. 1.0
             </span>
             <span className="px-2 py-1 bg-space-800 border border-space-700 text-pixel-purple font-terminal text-sm tracking-widest">
               EST. 2025
             </span>
           </div>
        </div>

        {/* Interaction Area */}
        {!started ? (
           <div className="space-y-6">
             <button 
               onClick={() => setStarted(true)}
               className="font-retro text-xl md:text-2xl text-white animate-pulse hover:text-pixel-cyan hover:scale-110 transition-all duration-200 cursor-pointer flex items-center gap-2 mx-auto"
             >
               <span className="text-pixel-cyan">▶</span> PRESS START
             </button>
             <p className="font-terminal text-gray-500 text-lg">
               INITIALIZE DATABASE...
             </p>
           </div>
        ) : (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8 animate-fade-in-up">
             <MenuCard 
               to="/learn" 
               title="TUTORIAL" 
               subtitle="BEGINNER GUIDE"
               icon={BookOpen} 
               color="text-pixel-yellow"
               borderColor="border-pixel-yellow"
             />
             <MenuCard 
               to="/dex" 
               title="DATABASE" 
               subtitle="BROWSE COINS"
               icon={Database} 
               color="text-pixel-cyan"
               borderColor="border-pixel-cyan"
             />
             <MenuCard 
               to="/quiz" 
               title="SIMULATION" 
               subtitle="TEST SKILLS"
               icon={Gamepad2} 
               color="text-pixel-green"
               borderColor="border-pixel-green"
             />
           </div>
        )}

      </div>

      {/* FOOTER WARNING */}
      <div className="fixed bottom-0 left-0 w-full bg-space-950/90 border-t border-pixel-red/30 p-2 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-pixel-red/80 animate-pulse">
          <ShieldAlert className="w-4 h-4" />
          <span className="font-retro text-[0.6rem] tracking-widest">
            WARNING: NOT FINANCIAL ADVICE. SIMULATION ONLY.
          </span>
        </div>
      </div>

    </div>
  );
};

// Helper for Menu Cards
const MenuCard = ({ to, title, subtitle, icon: Icon, color, borderColor }: any) => (
  <Link to={to} className="group block transform transition-transform hover:-translate-y-2 duration-300">
    <div className={`
      h-full bg-space-900 p-1 border-2 ${borderColor}
      shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]
      relative overflow-hidden
    `}>
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
      <div className="bg-space-950/50 p-6 h-full flex flex-col items-center justify-center text-center border border-white/5 relative z-10">
         <Icon className={`w-12 h-12 mb-4 ${color} group-hover:scale-110 transition-transform duration-300`} />
         <h2 className="font-retro text-lg text-white mb-1 group-hover:text-pixel-cyan transition-colors">{title}</h2>
         <p className="font-terminal text-xl text-gray-500 uppercase tracking-wide group-hover:text-gray-300">{subtitle}</p>
         <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity font-retro text-[0.6rem] text-pixel-cyan">
            ENTER
         </div>
      </div>
    </div>
  </Link>
);
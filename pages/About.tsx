import React from 'react';
import { Github, Linkedin, Database, AlertTriangle, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-fade-in perspective-1000">
      {/* C1/C2: Main White Card Container with Paper Texture & Printed Shadow */}
      {/* Added subtle rotation and paper-texture class */}
      <div className="paper-texture bg-white border-4 border-double border-black shadow-[8px_8px_0_rgba(0,0,0,0.5)] relative overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
        
        {/* C3: Decorative Label Stickers */}
        <div className="absolute top-2 left-2 z-10 hidden md:block border-2 border-black bg-white px-2 py-0.5 transform -rotate-2">
           <span className="font-retro text-[0.4rem] text-black tracking-widest">CRYPTODEX DEVICE</span>
        </div>
        <div className="absolute bottom-4 left-4 z-10 hidden md:block border border-black bg-gray-100 px-2 py-1 transform rotate-1 shadow-sm">
           <span className="font-retro text-[0.4rem] text-gray-600 tracking-widest">SERIAL NO: CDX-2049</span>
        </div>
        
        {/* C3: Field Manual Badge */}
        <div className="absolute top-10 right-4 z-10 hidden md:block border-2 border-red-700 text-red-700 px-3 py-1 transform rotate-12 opacity-80 mix-blend-multiply">
           <span className="font-retro text-[0.5rem] tracking-widest uppercase border-2 border-red-700 p-1">FIELD MANUAL</span>
        </div>

        {/* 1. Retro Header Bar */}
        <div className="bg-black text-white font-terminal text-xs md:text-sm px-4 py-1 flex justify-between items-center select-none relative z-20">
          <span className="tracking-widest pl-12 md:pl-0">CRYPTODEX MANUAL</span>
          <span className="tracking-widest">PAGE 01 / ABOUT</span>
        </div>

        <div className="p-8 md:p-10 relative z-10">
          {/* Title Area */}
          <div className="mb-6 border-b-2 border-black pb-4">
             <h1 className="font-retro text-3xl md:text-4xl text-black mb-2">ABOUT SYSTEM</h1>
             <p className="font-terminal text-lg text-gray-500 italic">
               // SYSTEM V1.0 // BUILD DATE: 2025
             </p>
          </div>
          
          {/* Core Description */}
          <div className="font-terminal text-xl text-gray-800 space-y-6 leading-relaxed">
            <p>
              <strong>CRYPTO DEX v1.0</strong> is a retro-styled educational database designed to demystify the world of decentralized assets.
            </p>
            
            {/* 2. Device Lore */}
            <div className="bg-gray-100 p-3 border-l-4 border-black italic text-gray-600 text-lg shadow-sm">
              "This field manual was recovered from an abandoned research satellite orbiting a forgotten testnet."
            </div>

            <p>
              Built with a "GameBoy Advance" aesthetic philosophy: High contrast, pixel perfection, and zero fluff.
            </p>
            
            {/* Divider */}
            <hr className="border-black border-dashed" />
            
            {/* Tech Stack Section */}
            <div>
              <h2 className="font-retro text-sm mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> TECH STACK
              </h2>
              <ul className="list-square list-inside ml-4 space-y-1">
                <li>React 19 + Vite (Frontend Core)</li>
                <li>Tailwind CSS (Pixel Utility Engine)</li>
                <li>CoinGecko API (Live Market Data Feeds)</li>
                <li>DiceBear API (Procedural Avatar Generation)</li>
                <li>Lucide React (Iconography)</li>
              </ul>
            </div>

            {/* 3. Data Origin & Risk Profile */}
            <div className="bg-gray-50 border-2 border-black p-4 relative shadow-sm">
              <div className="absolute -top-3 left-4 bg-white px-2 font-retro text-xs border border-black">
                DATA ORIGIN METADATA
              </div>
              <div className="space-y-2 text-lg">
                 <div className="flex items-start gap-2">
                    <Database className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold">SOURCE:</span> CoinGecko API (Free Tier). Prices are live but may have rate-limit delays.
                    </div>
                 </div>
                 <div className="flex items-start gap-2 text-red-600">
                    <AlertTriangle className="w-5 h-5 mt-1" />
                    <div>
                      <span className="font-bold">RISK LEVEL:</span> HIGH VOLATILITY.
                      <br/>
                      <span className="font-mono text-sm">RECOMMENDED ACTION: DO YOUR OWN RESEARCH</span>
                    </div>
                 </div>
              </div>
            </div>

             <hr className="border-black border-dashed" />

             {/* 4. For Players / For Builders */}
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="font-retro text-xs mb-2 underline decoration-2 underline-offset-4">FOR PLAYERS</h3>
                   <ul className="list-none space-y-2">
                     <li>► Browse the Dex for asset intel.</li>
                     <li>► Learn core blockchain concepts.</li>
                     <li>► Test your knowledge in the Simulation.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-retro text-xs mb-2 underline decoration-2 underline-offset-4">FOR BUILDERS</h3>
                   <ul className="list-none space-y-2">
                     <li>► Clean React/TypeScript architecture.</li>
                     <li>► Component-based UI design.</li>
                     <li>► Open source code for study.</li>
                   </ul>
                </div>
             </div>

             <hr className="border-black border-dashed" />

             {/* Footer Links */}
             <div className="flex flex-wrap gap-6">
               <a href="https://github.com/LeeSoonDer/Crypto_Dex"
  target="_blank"
  rel="noreferrer" className="flex items-center gap-2 text-black hover:bg-black hover:text-white px-2 py-1 transition-colors border border-transparent hover:border-black">
                 <Github className="w-5 h-5" /> SOURCE CODE
               </a>
               <a href="https://www.linkedin.com/in/lee-soon-der-b86b20260/"
  target="_blank"
  rel="noreferrer" className="flex items-center gap-2 text-black hover:bg-black hover:text-white px-2 py-1 transition-colors border border-transparent hover:border-black">
                 <Linkedin className="w-5 h-5" /> CREATOR
               </a>
             </div>
          </div>
        </div>

        {/* 5. Footer Meta Line */}
        <div className="bg-gray-100 border-t-2 border-black p-2 text-center font-retro text-[0.6rem] text-gray-500 tracking-widest relative z-20">
           PRINTED BY: SPACE_TERMINAL_01 • BUILD: v1.0.3 • LATENCY: 12ms
        </div>

      </div>
    </div>
  );
};

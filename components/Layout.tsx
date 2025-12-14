
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Book, Database, Info } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-4 py-2
        transition-all duration-200 border-b-2
        ${isActive(to) 
          ? 'border-pixel-cyan text-pixel-cyan bg-pixel-cyan/10' 
          : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'}
      `}
    >
      <Icon className="w-4 h-4" />
      <span className="font-retro text-[0.6rem] md:text-xs uppercase tracking-widest hidden sm:inline">{label}</span>
    </Link>
  );

  return (
    <div className="relative min-h-screen flex flex-col font-terminal bg-transparent">
      {/* GLOBAL EFFECTS */}
      <div className="scanlines" />
      
      {/* NAVBAR - HUD Style */}
      <nav className="sticky top-0 z-40 bg-space-950/90 backdrop-blur-md border-b border-space-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-space-800 border border-pixel-cyan flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.2)] group-hover:animate-pulse">
                <div className="w-4 h-4 bg-pixel-cyan"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-retro text-white text-xs tracking-widest group-hover:text-pixel-cyan transition-colors">
                  CRYPTO<span className="text-pixel-purple">DEX</span>
                </span>
                <span className="font-terminal text-[0.6rem] text-gray-500 leading-none tracking-[0.2em]">
                  SYSTEM_V1.0
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="flex items-center gap-1 md:gap-2">
              <NavItem to="/learn" icon={Book} label="Learn" />
              <NavItem to="/dex" icon={Database} label="Dex" />
              <NavItem to="/quiz" icon={Gamepad2} label="Quiz" />
              <NavItem to="/about" icon={Info} label="About" />
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-space-800 bg-space-950 py-8 text-center relative z-10">
        <div className="flex justify-center gap-4 mb-4 font-terminal text-gray-500 text-sm">
          <span>STATUS: ONLINE</span>
          <span>•</span>
          <span>REGION: EARTH</span>
          <span>•</span>
          <span>SECURE: YES</span>
        </div>
        <p className="font-retro text-[0.6rem] text-gray-600 uppercase tracking-widest">
          Created by Lee Soon Der • Educational Purposes Only
        </p>
      </footer>
    </div>
  );
};

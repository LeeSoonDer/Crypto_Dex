
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface RetroModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const RetroModal: React.FC<RetroModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-space-950/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-space-900 border-4 border-space-700 shadow-[0_0_0_4px_rgba(0,0,0,0.3)] relative flex flex-col max-h-[90vh] animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-4 border-space-700 bg-space-800 select-none">
          <h2 className="font-retro text-lg md:text-xl text-white text-shadow-retro uppercase tracking-wider truncate pr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="group p-1 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <div className="border-2 border-space-600 bg-space-900 group-hover:border-pixel-red group-hover:bg-pixel-red transition-colors p-1">
               <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
        
        {/* Footer Hint */}
        <div className="p-2 bg-space-950 border-t-4 border-space-700 text-center hidden md:block">
             <span className="font-terminal text-xs text-gray-500 uppercase tracking-widest">[ESC] TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};

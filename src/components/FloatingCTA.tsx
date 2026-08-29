import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ChevronRight, Zap } from 'lucide-react';

interface FloatingCTAProps {
  onOpenForm: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenForm }) => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Discrete Floating Action Button (Bottom Right) */}
      <AnimatePresence>
        {showFloating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="hidden sm:block fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={onOpenForm}
              className="px-5 py-3 rounded-full bg-[#00D889] text-[#041A13] font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,216,137,0.5)] hover:bg-[#5EF2B0] hover:scale-105 transition-all flex items-center gap-2 group"
            >
              <Zap className="w-4 h-4 fill-current animate-pulse" />
              <span>Quero saber mais</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#041A13]/95 backdrop-blur-xl border-t border-[#0F4232] shadow-2xl">
        <button
          onClick={onOpenForm}
          className="w-full py-3.5 bg-[#00D889] text-[#041A13] font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,216,137,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span>QUERO CONHECER A PÓS</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface FloatingCTAProps {
  onOpenForm: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenForm }) => {
  const [showFloating, setShowFloating] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 700);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop — discreto, canto inferior direito */}
      <AnimatePresence>
        {showFloating && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block fixed bottom-7 right-7 z-40"
          >
            <button onClick={onOpenForm} className="btn btn-primary shadow-[0_10px_30px_-14px_rgba(16,59,50,0.6)]">
              Quero me inscrever
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile — barra fixa inferior */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F4F5F0]/95 backdrop-blur-xl border-t border-[#DDE3DF]">
        <button onClick={onOpenForm} className="btn btn-primary w-full">
          Quero me inscrever
        </button>
      </div>
    </>
  );
};

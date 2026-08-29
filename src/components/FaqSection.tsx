import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/courseData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./17 Tira-Dúvidas</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Perguntas <span className="text-[#00D889]">Frequentes</span>
          </h2>
          <p className="text-base text-[#D7E1DD]/80 font-light">
            Esclareça suas principais dúvidas sobre o formato, pré-requisitos e metodologia do curso.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl border border-[#0F4232] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-[#063D2C]/30 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#00D889] bg-[#063D2C] px-2.5 py-1 rounded">
                      ./0{item.id}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00D889] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-[#0F4232]/50 text-sm text-[#D7E1DD]/90 font-light leading-relaxed bg-[#020B08]/40"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

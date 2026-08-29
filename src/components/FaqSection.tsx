import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/courseData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/50 bg-[#041A13]">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-display text-[#00D889] uppercase tracking-widest block">
            ./07 Tira-Dúvidas
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Perguntas <span className="italic font-serif text-[#00D889] font-normal">Frequentes.</span>
          </h2>
          <p className="text-base text-[#D7E1DD]/85 font-light">
            Esclareça suas principais dúvidas sobre o formato, pré-requisitos e metodologia do curso.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[#0F4232]/60 bg-[#041A13] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-[#063D2C]/20 transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xs font-bold text-[#00D889]">
                      0{item.id}.
                    </span>
                    <h3 className="font-display font-medium text-base sm:text-lg text-white">
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
                      className="px-6 pb-6 pt-2 border-t border-[#0F4232]/50 text-sm text-[#D7E1DD]/85 font-light leading-relaxed bg-[#041A13]"
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


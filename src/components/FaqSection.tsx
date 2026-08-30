import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FAQ_ITEMS } from '../data/courseData';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const reduceMotion = useReducedMotion();

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="surface-shell section">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Cabeçalho */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="t-eyebrow">Tira-dúvidas</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6">
                Perguntas <span className="t-serif text-[#1E4C41]">frequentes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="t-body mt-5">
                Esclareça suas principais dúvidas sobre o formato, pré-requisitos e metodologia do
                curso.
              </p>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8 border-t border-[#DDE3DF]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-painel-${item.id}`;

              return (
                <div key={item.id} className="border-b border-[#DDE3DF]">
                  <h3>
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full py-6 flex items-center gap-6 text-left cursor-pointer group"
                    >
                      <span className="flex-1 font-display font-medium text-[1.05rem] sm:text-[1.2rem] leading-snug text-[#19211E]">
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full border border-[#DDE3DF] flex items-center justify-center text-[#103B32] transition-transform duration-500 ${
                          isOpen ? 'rotate-45 bg-[#E4F4EC] border-[#35C985]/40' : ''
                        }`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                        aria-hidden="true"
                      >
                        <Plus className="w-4 h-4" strokeWidth={1.75} />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 t-body max-w-[60ch]">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

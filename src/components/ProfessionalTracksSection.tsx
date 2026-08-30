import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PROFESSIONAL_TRACKS } from '../data/courseData';
import { Reveal } from './Reveal';

export const ProfessionalTracksSection: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState<string>('saude');
  const reduceMotion = useReducedMotion();

  const activeTrack = PROFESSIONAL_TRACKS.find((t) => t.id === activeTrackId) || PROFESSIONAL_TRACKS[0];

  return (
    <section id="trilhas" className="surface-forest on-forest section">
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Especialização por área</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6">
                Trilhas profissionais <span className="t-serif text-[#8FE3BA]">customizadas.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="t-body">
                Direcione suas atividades, cases e o Projeto Integrador especificamente para a sua
                área de atuação no mercado.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Seletor de trilha */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Trilhas profissionais"
            className="mt-14 flex flex-wrap gap-2 pb-10 border-b border-white/12"
          >
            {PROFESSIONAL_TRACKS.map((track) => {
              const isActive = track.id === activeTrackId;
              return (
                <button
                  key={track.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`trilha-${track.id}`}
                  id={`aba-${track.id}`}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-400 cursor-pointer border ${
                    isActive
                      ? 'bg-[#35C985] text-[#0E2B24] border-[#35C985]'
                      : 'bg-transparent text-[#CBDBD3] border-white/20 hover:border-[#35C985]/60 hover:text-white'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {track.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Conteúdo da trilha */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack.id}
            id={`trilha-${activeTrack.id}`}
            role="tabpanel"
            aria-labelledby={`aba-${activeTrack.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <p className="t-eyebrow">Trilha profissional focada</p>
              <h3 className="t-h3 mt-3">{activeTrack.title}</h3>
              <p className="t-micro mt-6">
                Mentoria de projetos orientada por profissionais do setor · sem pré-requisito em
                código
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="t-eyebrow pb-4 border-b border-white/12">
                Conteúdos e aplicações específicas da trilha
              </p>
              <ul>
                {activeTrack.topics.map((topic, idx) => (
                  <li
                    key={topic}
                    className="flex gap-5 py-5 border-b border-white/10 text-[15px] sm:text-[16px] leading-relaxed text-[#D8E6DF]"
                  >
                    <span className="t-numeral text-[15px] text-[#35C985] pt-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

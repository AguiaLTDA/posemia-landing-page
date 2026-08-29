import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AREAS_DATA, PROFESSIONAL_TRACKS } from '../data/courseData';
import { CheckCircle2 } from 'lucide-react';

export const AudienceTracksSection: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState<string>(AREAS_DATA[0].id);

  const activeArea = AREAS_DATA.find((a) => a.id === activeAreaId) || AREAS_DATA[0];
  const activeTrack = PROFESSIONAL_TRACKS.find((t) => t.id === activeAreaId) || PROFESSIONAL_TRACKS[0];

  return (
    <section id="para-quem-e" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/50 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-display text-[#00D889] uppercase tracking-widest block">
            ./02 Para Quem É
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Uma pós. <span className="italic font-serif text-[#00D889] font-normal">Muitas profissões.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/85 font-light leading-relaxed">
            Selecione a sua área do conhecimento para explorar como o curso adapta seus cases e conteúdos práticos para a sua carreira.
          </p>
        </div>

        {/* Minimal Tab Selectors (Horizontal Pill Bar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-[#0F4232]/60 scrollbar-none">
          {AREAS_DATA.map((area) => {
            const isActive = area.id === activeAreaId;
            return (
              <button
                key={area.id}
                onClick={() => setActiveAreaId(area.id)}
                className={`px-5 py-2.5 text-xs font-display transition-all whitespace-nowrap rounded-full cursor-pointer ${
                  isActive
                    ? 'bg-[#00D889] text-[#041A13] font-semibold shadow-[0_0_20px_rgba(0,216,137,0.3)]'
                    : 'bg-[#063D2C]/40 text-[#D7E1DD]/80 hover:text-white hover:bg-[#063D2C]'
                }`}
              >
                {area.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAreaId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-[#0F4232]/60 p-8 sm:p-10 bg-[#041A13]"
          >
            {/* Left Box: Profissões Atendidas */}
            <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-[#0F4232]/50 lg:pr-8">
              <div>
                <span className="text-[11px] font-display text-[#00D889] uppercase tracking-widest block mb-1">
                  Profissões e Cursos Atendidos
                </span>
                <h3 className="font-serif text-3xl text-white">
                  {activeArea.title}
                </h3>
              </div>

              <div className="space-y-3">
                <span className="text-xs text-[#88A699] uppercase tracking-wider block font-display">
                  Cursos de graduação contemplados:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {activeArea.careers.map((career) => (
                    <div key={career} className="flex items-center gap-2 text-sm text-[#D7E1DD]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D889] shrink-0" />
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box: Tópicos da Trilha Profissional */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-display text-[#00D889] uppercase tracking-widest block mb-1">
                  Trilha de Aplicação Prática
                </span>
                <h3 className="font-serif text-3xl text-white">
                  O que você vai aplicar no seu setor
                </h3>
              </div>

              {activeTrack ? (
                <div className="space-y-3">
                  {activeTrack.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-4 border-b border-[#0F4232]/40 last:border-b-0 flex items-start gap-3"
                    >
                      <span className="text-xs font-display text-[#00D889] font-bold mt-0.5">
                        0{idx + 1}.
                      </span>
                      <p className="text-sm text-[#D7E1DD]/90 leading-relaxed font-light">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#88A699]">
                  Conteúdo customizado para a área profissional durante as disciplinas práticas.
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

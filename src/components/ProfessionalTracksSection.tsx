import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFESSIONAL_TRACKS } from '../data/courseData';
import { Activity, Compass, Terminal, Scale, PieChart, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Compass,
  Terminal,
  Scale,
  PieChart,
  BookOpen
};

export const ProfessionalTracksSection: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState<string>('saude');

  const activeTrack = PROFESSIONAL_TRACKS.find((t) => t.id === activeTrackId) || PROFESSIONAL_TRACKS[0];
  const ActiveIcon = iconMap[activeTrack.icon] || Activity;

  return (
    <section id="trilhas" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-gradient-to-b from-[#041A13] to-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./11 Especialização por Área</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Trilhas Profissionais <span className="text-[#00D889]">Customizadas</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Direcione suas atividades, cases e o Projeto Integrador especificamente para a sua área de atuação no mercado.
          </p>
        </div>

        {/* Track Selector Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PROFESSIONAL_TRACKS.map((track) => {
            const Icon = iconMap[track.icon] || Activity;
            const isActive = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#00D889] text-[#041A13] shadow-[0_0_25px_rgba(0,216,137,0.5)] scale-105'
                    : 'glass-card border border-[#0F4232] text-[#D7E1DD] hover:border-[#00D889]/50 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#041A13]' : 'text-[#00D889]'}`} />
                <span>{track.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Track Detailed Display Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-[#00D889]/40 bg-gradient-to-br from-[#063D2C]/40 to-[#041A13] space-y-8 relative overflow-hidden shadow-[0_0_50px_rgba(0,216,137,0.15)]"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D889]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 border-b border-[#0F4232] pb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#063D2C] border border-[#00D889]/50 flex items-center justify-center text-[#00D889] shadow-lg">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00D889] uppercase tracking-widest">
                    TRILHA PROFISSIONAL FOCADA
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {activeTrack.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-mono text-[#88A699] uppercase tracking-wider">
                  Conteúdos e Aplicações Específicas da Trilha:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeTrack.topics.map((topic) => (
                    <div
                      key={topic}
                      className="p-4 rounded-xl bg-[#041A13]/90 border border-[#0F4232] flex items-start gap-3 hover:border-[#00D889]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00D889] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#D7E1DD] font-medium leading-relaxed">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#0F4232] flex items-center justify-between text-xs font-mono text-[#5EF2B0]">
                <span>Mentoria de projetos orientada por profissionais do setor</span>
                <span className="hidden sm:inline-block">Sem pré-requisito em código</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

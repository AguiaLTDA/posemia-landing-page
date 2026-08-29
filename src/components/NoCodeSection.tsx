import React from 'react';
import { motion } from 'framer-motion';
import { NO_CODE_NOT_REQUIRED, NO_CODE_YOU_WILL_LEARN } from '../data/courseData';
import { XCircle, CheckCircle2, Sparkles } from 'lucide-react';

export const NoCodeSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0A382A] bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00F296]">
            <span>./03 Diferencial Exclusivo</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            IA sem a barreira da <span className="text-[#00F296]">programação.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#E2E8F0] font-light leading-relaxed">
            As tecnologias são aprendidas prioritariamente por meio de plataformas visuais, no-code, low-code, IA generativa e automações inteligentes.
          </p>
          <div className="inline-block px-4 py-2 rounded-xl bg-[#031F16] border border-[#00F296]/40 text-[#00F296] font-mono text-sm font-semibold">
            O objetivo não é formar programadores. O objetivo é formar profissionais capazes de aplicar IA.
          </div>
        </div>

        {/* Side-by-side Visual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: NÃO É NECESSÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 border border-red-500/20 bg-red-950/10 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">Sem Pré-Requisitos</span>
                <h3 className="font-display font-extrabold text-xl text-white">NÃO É NECESSÁRIO</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {NO_CODE_NOT_REQUIRED.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#94A3B8] font-mono">
                  <span className="w-2 h-2 rounded-full bg-red-500/50" />
                  <span className="line-through decoration-red-500/40">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card: VOCÊ APRENDERÁ */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 border border-[#00F296]/40 bg-[#031F16]/30 relative overflow-hidden shadow-[0_0_40px_rgba(0,242,150,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00F296]/20 border border-[#00F296]/50 flex items-center justify-center text-[#00F296]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F296]">Foco em Resultados</span>
                <h3 className="font-display font-extrabold text-xl text-white">VOCÊ APRENDERÁ</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {NO_CODE_YOU_WILL_LEARN.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white font-medium">
                  <Sparkles className="w-4 h-4 text-[#00F296] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  const targetAreas = [
    'Saúde',
    'Direito',
    'Engenharias',
    'Tecnologia',
    'Negócios',
    'Educação',
    'Agro',
    'Comunicação',
    'Gestão'
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-radial-hero">
      {/* Background Giant Watermark Outline Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-15 whitespace-nowrap">
        <span className="font-display font-black text-[12vw] tracking-tighter text-outline-thick uppercase">
          AI APPLIED
        </span>
      </div>

      {/* Decorative 3D Metallic Liquid Ring / Ambient Glow Ring */}
      <div className="absolute top-1/3 right-[10%] w-72 h-72 lg:w-[450px] lg:h-[450px] rounded-full border border-[#00D889]/30 bg-gradient-to-br from-[#063D2C]/40 to-transparent blur-2xl animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#00D889]/40 text-[#00D889] text-xs font-mono tracking-wider uppercase shadow-[0_0_20px_rgba(0,216,137,0.15)]"
        >
          <Sparkles className="w-4 h-4 animate-spin text-[#5EF2B0]" />
          <span>360 horas • Formação Prática • Aberta a Todas as Áreas</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]"
        >
          Inteligência Artificial para{' '}
          <span className="bg-gradient-to-r from-[#00D889] via-[#5EF2B0] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,216,137,0.3)]">
            transformar a sua profissão.
          </span>
        </motion.h1>

        {/* Subtitle / Complement */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-xl text-[#D7E1DD]/90 leading-relaxed font-light"
        >
          Uma pós-graduação multidisciplinar para aprender a utilizar, projetar, automatizar e aplicar Inteligência Artificial —{' '}
          <strong className="font-semibold text-white underline decoration-[#00D889] underline-offset-4">
            mesmo sem saber programar.
          </strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto px-8 py-4 bg-[#00D889] hover:bg-[#5EF2B0] text-[#041A13] font-display font-bold text-sm tracking-wider uppercase rounded-full shadow-[0_0_30px_rgba(0,216,137,0.4)] hover:shadow-[0_0_45px_rgba(0,216,137,0.7)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Quero Conhecer a Pós</span>
          </button>

          <a
            href="#modulos"
            className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-[#063D2C]/60 text-white font-display font-semibold text-sm tracking-wider uppercase rounded-full border border-[#0F4232] hover:border-[#00D889]/60 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Ver Matriz Curricular</span>
          </a>
        </motion.div>

        {/* Target Professional Areas Scroll Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-8 border-t border-[#0F4232]/50 max-w-4xl mx-auto"
        >
          <p className="text-xs font-mono text-[#88A699] uppercase tracking-widest mb-3">
            Formação desenhada para profissionais das áreas:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-[#D7E1DD]">
            {targetAreas.map((area, idx) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#063D2C]/40 border border-[#0F4232] text-[#D7E1DD] hover:border-[#00D889]/40 hover:text-white transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D889]" />
                {area}
                {idx < targetAreas.length - 1 && <span className="text-[#00D889]/30"></span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Circular Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity"
      >
        <a href="#visao-geral" className="pointer-events-auto p-2 rounded-full border border-[#00D889]/30 text-[#00D889] hover:bg-[#00D889]/10 transition-colors">
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

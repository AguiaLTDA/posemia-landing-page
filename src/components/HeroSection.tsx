import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { AiEngineWidget } from './AiEngineWidget';

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
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Giant Watermark Outline Text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-10 whitespace-nowrap">
        <span className="font-editorial font-extrabold text-[14vw] tracking-tighter text-outline-thick uppercase">
          UNIVC AI
        </span>
      </div>

      {/* Decorative Neon Halo Ring */}
      <div className="absolute top-1/4 right-[5%] w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full border border-[#00F296]/20 bg-gradient-to-br from-[#00F296]/10 to-transparent blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Column: Headline & Action CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Institution Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#00F296]/40 text-[#00F296] text-xs font-mono tracking-wider uppercase"
          >
            <Sparkles className="w-4 h-4 text-[#00E5FF] animate-spin" />
            <span>UNIVC • 360h • Aberta a Todas as Áreas</span>
          </motion.div>

          {/* Main Larger Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02]"
          >
            Inteligência Artificial para{' '}
            <span className="bg-gradient-to-r from-[#00F296] via-[#00E5FF] to-[#E2FF54] bg-clip-text text-transparent">
              transformar a sua profissão.
            </span>
          </motion.h1>

          {/* Streamlined Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl text-[#E2E8F0] font-normal leading-relaxed max-w-2xl"
          >
            Aprenda a projetar, automatizar e aplicar Inteligência Artificial na sua carreira —{' '}
            <strong className="text-white font-bold underline decoration-[#00F296] underline-offset-4">
              sem precisar programar.
            </strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenForm}
              className="w-full sm:w-auto px-8 py-4 bg-[#00F296] hover:bg-[#6FFBC9] text-black font-display font-bold text-sm tracking-wider uppercase rounded-full shadow-[0_0_35px_rgba(0,242,150,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Quero Conhecer a Pós</span>
            </button>

            <a
              href="#modulos"
              className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-[#031F16] text-white font-display font-bold text-sm tracking-wider uppercase rounded-full border border-[#0A382A] hover:border-[#00F296]/60 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Ver Matriz Curricular</span>
            </a>
          </motion.div>

          {/* Professional Target Areas Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6 border-t border-[#0A382A]"
          >
            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">
              Desenvolvida para graduados das áreas:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#E2E8F0]">
              {targetAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#05140F] border border-[#0A382A] text-xs font-mono text-[#E2E8F0] hover:border-[#00F296] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F296]" />
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Hero Column: Anexo 4 Dynamic Interactive AiEngineWidget */}
        <div className="lg:col-span-5">
          <AiEngineWidget />
        </div>
      </div>
    </section>
  );
};

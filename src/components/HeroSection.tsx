import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, CheckCircle2 } from 'lucide-react';

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
    'Comunicação'
  ];

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-[#041A13]">
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-10 whitespace-nowrap">
        <span className="font-display font-bold text-[14vw] tracking-tighter text-outline-thick uppercase">
          AI APPLIED
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#063D2C]/60 border border-[#0F4232] text-[#00D889] text-xs font-display tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D889] animate-ping" />
            <span>./00 — Formação Multidisciplinar (360h)</span>
          </motion.div>

          {/* Main Headline with Editorial Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.98]"
          >
            Inteligência Artificial para{' '}
            <span className="italic font-serif text-[#00D889] font-normal">
              transformar
            </span>{' '}
            a sua profissão.
          </motion.h1>

          {/* Subtitle with selective weight */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#D7E1DD]/85 leading-relaxed font-light max-w-2xl"
          >
            Uma pós-graduação desenhada para ensinar você a projetar, automatizar e aplicar soluções de IA no mercado —{' '}
            <span className="text-white font-medium">sem a barreira da programação.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenForm}
              className="px-8 py-4 bg-[#00D889] hover:bg-[#5EF2B0] text-[#041A13] font-display font-semibold text-xs tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(0,216,137,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Quero Conhecer a Pós</span>
            </button>

            <a
              href="#modulos"
              className="px-8 py-4 bg-[#063D2C]/40 hover:bg-[#063D2C] text-white font-display font-medium text-xs tracking-widest uppercase rounded-full border border-[#0F4232] hover:border-[#00D889]/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Ver Matriz Curricular</span>
            </a>
          </motion.div>

          {/* Target Areas subtle horizontal list */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6 border-t border-[#0F4232]/50"
          >
            <span className="text-xs font-display text-[#88A699] uppercase tracking-wider block mb-3">
              Áreas de Atuação Atendidas:
            </span>
            <div className="flex flex-wrap gap-2 text-xs text-[#D7E1DD]">
              {targetAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-[#063D2C]/30 border border-[#0F4232]/60 text-[#D7E1DD]/90 text-[11px] font-display flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#00D889]" />
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Strong Abstract Generative Neural Visual Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square bg-[#063D2C]/20 border border-[#0F4232]/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Background SVG Neural Net Graphic */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Grid backdrop */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(15, 66, 50, 0.4)" strokeWidth="1" />
                </pattern>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00D889" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00D889" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Neural network graph edges */}
              <line x1="80" y1="100" x2="200" y2="70" stroke="#00D889" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />
              <line x1="200" y1="70" x2="320" y2="140" stroke="#00D889" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="80" y1="100" x2="160" y2="230" stroke="#00D889" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="160" y1="230" x2="300" y2="280" stroke="#00D889" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="200" y1="70" x2="300" y2="280" stroke="#00D889" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="160" y1="230" x2="220" y2="340" stroke="#00D889" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="320" y1="140" x2="300" y2="280" stroke="#00D889" strokeWidth="1" strokeOpacity="0.3" />

              {/* Glowing Neural Nodes */}
              <circle cx="80" cy="100" r="16" fill="url(#nodeGlow)" />
              <circle cx="80" cy="100" r="4" fill="#00D889" />

              <circle cx="200" cy="70" r="20" fill="url(#nodeGlow)" />
              <circle cx="200" cy="70" r="5" fill="#FFFFFF" />

              <circle cx="320" cy="140" r="14" fill="url(#nodeGlow)" />
              <circle cx="320" cy="140" r="3.5" fill="#00D889" />

              <circle cx="160" cy="230" r="22" fill="url(#nodeGlow)" />
              <circle cx="160" cy="230" r="6" fill="#00D889" />

              <circle cx="300" cy="280" r="24" fill="url(#nodeGlow)" />
              <circle cx="300" cy="280" r="7" fill="#5EF2B0" />

              <circle cx="220" cy="340" r="12" fill="url(#nodeGlow)" />
              <circle cx="220" cy="340" r="3" fill="#00D889" />
            </svg>

            {/* Inner Content Card overlay */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-[#0F4232]/80 pb-3">
                <span className="text-[11px] font-display text-[#00D889] uppercase tracking-widest">
                  ./AI_ENGINE_V2.6
                </span>
                <span className="text-[10px] font-mono text-[#88A699]">
                  STATUS: ATIVO
                </span>
              </div>
              <p className="text-xs font-mono text-[#D7E1DD]/80 leading-relaxed">
                "Transforme dados brutos, modelos de linguagem e automações visuais em impacto direto na sua carreira."
              </p>
            </div>

            {/* Bottom Metrics HUD */}
            <div className="relative z-10 pt-4 border-t border-[#0F4232]/80 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-2xl font-display font-bold text-white">360h</span>
                <span className="text-[10px] font-display text-[#88A699] uppercase tracking-wider">Carga Horária</span>
              </div>
              <div>
                <span className="block text-2xl font-display font-bold text-[#00D889]">6</span>
                <span className="text-[10px] font-display text-[#88A699] uppercase tracking-wider">Módulos Práticos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
      >
        <a href="#visao-geral" className="p-2 text-[#00D889]">
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};


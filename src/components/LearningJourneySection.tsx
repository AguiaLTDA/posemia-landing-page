import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_MODULES } from '../data/courseData';

export const LearningJourneySection: React.FC = () => {
  return (
    <section id="jornada" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0A382A] bg-black">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00F296]">
            <span>./04 Trajetória Progressiva</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Jornada de <span className="text-[#00F296]">Aprendizagem</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E2E8F0] font-light">
            Seis módulos estruturados em sequência pedagógica direta, do conceito à aplicação autônoma.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#0A382A] ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
          {/* Glowing Animated Connector Beam */}
          <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-[#00F296] via-[#00E5FF] to-[#031F16] shadow-[0_0_15px_rgba(0,242,150,0.8)]" />

          {COURSE_MODULES.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-[#00F296] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#00F296] group-hover:shadow-[0_0_20px_rgba(0,242,150,0.8)] transition-all">
                <div className="w-2 h-2 rounded-full bg-[#00F296] group-hover:bg-black" />
              </div>

              {/* Module Card Content */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#00F296] bg-[#031F16] px-3 py-1 rounded-md border border-[#00F296]/30">
                    MÓDULO {module.id} • {module.hours}h
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    {module.number}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#00F296] transition-colors">
                  {module.title}
                </h3>

                <div className="p-4 rounded-xl bg-black/70 border border-[#0A382A] text-sm text-[#00F296] font-mono italic">
                  "{module.question}"
                </div>

                <p className="text-xs text-[#E2E8F0]/80 font-light">
                  {module.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

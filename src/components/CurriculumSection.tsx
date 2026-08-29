import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_MODULES } from '../data/courseData';
import { Layers, Clock, Award, BookOpen } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  return (
    <section id="modulos" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-gradient-to-b from-[#041A13] to-[#020B08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./05 Estrutura Curricular</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Uma formação completa em <span className="text-[#00D889]">Inteligência Artificial Aplicada</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            360 horas organizadas em seis módulos progressivos de 60 horas cada, totalizando 12 disciplinas teórico-práticas.
          </p>
        </div>

        {/* High-level Modules Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((mod) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-[#0F4232] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#00D889] bg-[#063D2C] px-3 py-1 rounded-md border border-[#00D889]/30">
                    MÓDULO 0{mod.id}
                  </span>
                  <span className="text-xs font-mono text-[#88A699]">60 HORAS</span>
                </div>

                <h3 className="font-display font-bold text-xl text-white leading-snug">
                  {mod.title}
                </h3>

                <div className="space-y-2 pt-2 border-t border-[#0F4232]/60">
                  {mod.courses.map((course) => (
                    <div key={course.title} className="flex items-start gap-2 text-xs text-[#D7E1DD]/90">
                      <BookOpen className="w-4 h-4 text-[#00D889] shrink-0 mt-0.5" />
                      <span>{course.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F4232]/60 flex items-center justify-between text-[11px] font-mono text-[#5EF2B0]">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#00D889]" />
                  {mod.microcertification}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

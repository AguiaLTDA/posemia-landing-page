import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSE_MODULES } from '../data/courseData';
import { ChevronDown, Award, CheckCircle2, FolderKanban, BookOpen, Sparkles } from 'lucide-react';

export const ModuleDetailsSection: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./06 Detalhamento Acadêmico</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Ementa Detalhada dos <span className="text-[#00D889]">6 Módulos</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Clique em cada módulo para explorar os conteúdos das 12 disciplinas, projetos de módulo e microcertificações intermediárias.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {COURSE_MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className="glass-card rounded-2xl border border-[#0F4232] overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-[#063D2C]/30 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#063D2C] border border-[#00D889]/40 flex items-center justify-center font-mono font-bold text-lg text-[#00D889] shrink-0">
                      0{mod.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#00D889] uppercase tracking-wider">
                          MÓDULO {mod.id} • 60h
                        </span>
                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#00D889]/40" />
                        <span className="hidden sm:inline-block text-xs font-mono text-[#88A699]">
                          {mod.number}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-2xl text-white mt-1">
                        {mod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D7E1DD]/70 font-light italic mt-0.5">
                        "{mod.subtitle}"
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 rounded-full border border-[#0F4232] flex items-center justify-center text-[#00D889] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#00D889]/20' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#0F4232]/60 px-6 sm:px-8 py-8 space-y-8 bg-[#020B08]/60"
                    >
                      {/* Courses List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mod.courses.map((course, idx) => (
                          <div key={course.title} className="p-6 rounded-xl bg-[#063D2C]/20 border border-[#0F4232] space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-[#00D889] bg-[#063D2C] px-2.5 py-1 rounded">
                                DISCIPLINA {idx + 1 + (mod.id - 1) * 2} • 30h
                              </span>
                            </div>
                            <h4 className="font-display font-bold text-base text-white">
                              {course.title}
                            </h4>
                            <p className="text-xs text-[#D7E1DD]/80 font-light">
                              {course.description}
                            </p>
                            <div className="space-y-1.5 pt-2 border-t border-[#0F4232]/50">
                              <span className="text-[11px] font-mono text-[#88A699] uppercase tracking-wider block mb-2">
                                Tópicos Abordados:
                              </span>
                              {course.topics.map((topic) => (
                                <div key={topic} className="flex items-center gap-2 text-xs text-[#D7E1DD]/90">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D889] shrink-0" />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Practical Project if applicable */}
                      {mod.project && (
                        <div className="p-5 rounded-xl bg-[#00D889]/10 border border-[#00D889]/30 flex items-start gap-3">
                          <FolderKanban className="w-5 h-5 text-[#00D889] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-mono font-bold text-[#00D889] uppercase tracking-wider block">
                              PROJETO PRÁTICO DO MÓDULO:
                            </span>
                            <p className="text-sm text-white font-medium mt-0.5">
                              {mod.project}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Microcertification Badge */}
                      <div className="p-5 rounded-xl bg-gradient-to-r from-[#063D2C] to-[#041A13] border border-[#00D889]/40 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <Award className="w-6 h-6 text-[#00D889]" />
                          <div>
                            <span className="text-[10px] font-mono text-[#88A699] uppercase tracking-widest block">
                              MICROCERTIFICAÇÃO CONCEDIDA:
                            </span>
                            <span className="font-display font-bold text-sm sm:text-base text-white">
                              {mod.microcertification}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#5EF2B0] bg-[#00D889]/20 px-3 py-1 rounded-full border border-[#00D889]/30">
                          60 HORAS INTEGRALIZADAS
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

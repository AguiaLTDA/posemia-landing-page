import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSE_MODULES, PRACTICAL_PROJECTS, TECH_LABS } from '../data/courseData';
import { ChevronDown, Award, Rocket, Code2, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

export const CurriculumStepperSection: React.FC = () => {
  // Module 1 open by default
  const [openModuleId, setOpenModuleId] = useState<number>(1);

  const toggleModule = (id: number) => {
    setOpenModuleId((prev) => (prev === id ? 0 : id));
  };

  return (
    <section id="modulos" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/50 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-display text-[#00D889] uppercase tracking-widest block">
            ./03 Metodologia & Módulos
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Ementa detalhada dos <span className="italic font-serif text-[#00D889] font-normal">6 módulos.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/85 font-light leading-relaxed">
            Uma jornada de 360 horas estruturada de forma progressiva: do conceito fundamental à aplicação prática da IA no seu setor de atuação.
          </p>
        </div>

        {/* Methodology Compact Highlight Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#0F4232]/60 py-6 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-xs font-display text-[#00D889] font-bold">01.</span>
            <div>
              <h4 className="text-xs font-display font-medium text-white uppercase tracking-wider">Mão na Massa</h4>
              <p className="text-xs text-[#88A699] mt-1 font-light">Projetos práticos em cada módulo orientados a problemas reais.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xs font-display text-[#00D889] font-bold">02.</span>
            <div>
              <h4 className="text-xs font-display font-medium text-white uppercase tracking-wider">6 Microcertificações</h4>
              <p className="text-xs text-[#88A699] mt-1 font-light">Comprove competências no seu currículo a cada etapa concluída.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xs font-display text-[#00D889] font-bold">03.</span>
            <div>
              <h4 className="text-xs font-display font-medium text-white uppercase tracking-wider">Tech Labs Opcionais</h4>
              <p className="text-xs text-[#88A699] mt-1 font-light">Aprofundamento hands-on em Python, APIs e MLOps para quem deseja ir além.</p>
            </div>
          </div>
        </div>

        {/* Vertical Stepper Accordion */}
        <div className="space-y-4">
          {COURSE_MODULES.map((module) => {
            const isOpen = openModuleId === module.id;
            const project = PRACTICAL_PROJECTS.find((p) => p.id === module.id);
            const techLab = TECH_LABS[module.id - 1]; // Map module to techlab option

            return (
              <div
                key={module.id}
                className={`border transition-colors ${
                  isOpen ? 'border-[#00D889]/60 bg-[#041A13]' : 'border-[#0F4232]/60 bg-[#041A13] hover:border-[#0F4232]'
                }`}
              >
                {/* Stepper Module Header Bar */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-display font-bold text-lg sm:text-xl text-[#00D889] tracking-wider shrink-0">
                      {module.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium truncate">
                          {module.title}
                        </h3>
                        <span className="text-[11px] font-display text-[#88A699] px-2 py-0.5 border border-[#0F4232]">
                          {module.hours}h
                        </span>
                      </div>
                      <p className="text-xs text-[#88A699] mt-1 font-light truncate hidden sm:block">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-display text-[#00D889] uppercase tracking-wider hidden md:inline-block">
                      {isOpen ? 'Ocultar Detalhes' : 'Ver Módulo'}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00D889] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Stepper Content Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-[#0F4232]/50 px-6 pb-8 pt-6 space-y-8"
                    >
                      {/* Key Question Callout */}
                      <div className="text-xs font-display text-[#5EF2B0] uppercase tracking-widest">
                        Pergunta Central do Módulo: <span className="text-white normal-case font-serif italic text-base sm:text-lg">"{module.question}"</span>
                      </div>

                      {/* Disciplines Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {module.courses.map((course, idx) => (
                          <div key={idx} className="space-y-3 p-5 border border-[#0F4232]/50 bg-[#063D2C]/10">
                            <div className="flex items-start justify-between gap-2 border-b border-[#0F4232]/60 pb-3">
                              <h4 className="font-display font-medium text-sm text-white">
                                {course.title}
                              </h4>
                              <span className="text-[10px] font-display text-[#00D889] shrink-0">
                                {course.hours}h
                              </span>
                            </div>
                            <p className="text-xs text-[#D7E1DD]/80 leading-relaxed font-light">
                              {course.description}
                            </p>
                            <div className="pt-2 space-y-1.5">
                              <span className="text-[10px] font-display text-[#88A699] uppercase tracking-wider block">
                                Tópicos Abordados:
                              </span>
                              <div className="grid grid-cols-1 gap-1">
                                {course.topics.map((t, i) => (
                                  <div key={i} className="text-[11px] text-[#D7E1DD]/70 flex items-start gap-1.5">
                                    <span className="text-[#00D889]">•</span>
                                    <span>{t}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Deliverables & Microcertification Footer Row */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#0F4232]/50">
                        {/* Microcertification */}
                        <div className="space-y-1">
                          <span className="text-[10px] font-display text-[#00D889] uppercase tracking-wider flex items-center gap-1">
                            <Award className="w-3.5 h-3.5" />
                            Microcertificação Emitida
                          </span>
                          <p className="text-xs text-white font-medium">
                            {module.microcertification}
                          </p>
                        </div>

                        {/* Practical Project */}
                        <div className="space-y-1">
                          <span className="text-[10px] font-display text-[#00D889] uppercase tracking-wider flex items-center gap-1">
                            <Rocket className="w-3.5 h-3.5" />
                            Projeto Prático (Entregável)
                          </span>
                          <p className="text-xs text-white font-medium">
                            {project ? project.title : module.project || 'Solução Prática de IA'}
                          </p>
                          {project && (
                            <p className="text-[11px] text-[#88A699] font-light mt-0.5">
                              {project.description}
                            </p>
                          )}
                        </div>

                        {/* Tech Lab / Code Option Tag */}
                        {techLab && (
                          <div className="space-y-1">
                            <span className="text-[10px] font-display text-[#5EF2B0] uppercase tracking-wider flex items-center gap-1">
                              <Code2 className="w-3.5 h-3.5" />
                              Tech Lab (Opção com Código)
                            </span>
                            <p className="text-xs text-white font-medium">
                              {techLab.title} ({techLab.hours}h)
                            </p>
                            <p className="text-[11px] text-[#88A699] font-light mt-0.5">
                              {techLab.description}
                            </p>
                          </div>
                        )}
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

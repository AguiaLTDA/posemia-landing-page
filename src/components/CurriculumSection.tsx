import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { COURSE_MODULES } from '../data/courseData';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

export const CurriculumSection: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleModule = (id: number) => setOpenModuleId(openModuleId === id ? null : id);

  return (
    <section id="modulos" className="surface-white section">
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Estrutura curricular</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6 max-w-[18ch]">
                Uma formação completa em{' '}
                <span className="t-serif text-[#1E4C41]">Inteligência Artificial Aplicada.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="t-body">
                360 horas em seis módulos progressivos de 60 horas, totalizando 12 disciplinas
                teórico-práticas. Abra um módulo para ver disciplinas, tópicos, projeto e
                microcertificação.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Catálogo de módulos com ementa expansível */}
        <div className="mt-14 sm:mt-20 border-t border-[#DDE3DF]">
          {COURSE_MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            const panelId = `modulo-painel-${mod.id}`;

            return (
              <div key={mod.id} className="border-b border-[#DDE3DF]">
                <h3>
                  <button
                    onClick={() => toggleModule(mod.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-7 flex items-start gap-5 sm:gap-8 text-left group cursor-pointer"
                  >
                    <span className="t-numeral text-[2rem] sm:text-[2.75rem] text-[#C5CFC9] group-hover:text-[#35C985] transition-colors duration-500 shrink-0 w-14">
                      {String(mod.id).padStart(2, '0')}
                    </span>

                    <span className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-8 lg:items-baseline">
                      <span className="lg:col-span-6">
                        <span className="block font-display font-semibold text-[1.2rem] sm:text-[1.5rem] leading-tight tracking-[-0.015em] text-[#19211E]">
                          {mod.title}
                        </span>
                        <span className="block t-micro mt-1.5">
                          Módulo {mod.id} · 60 horas · 2 disciplinas
                        </span>
                      </span>
                      <span className="lg:col-span-6 t-body text-[15px] lg:text-right">
                        {mod.subtitle}
                      </span>
                    </span>

                    <span
                      className={`shrink-0 mt-1 w-9 h-9 rounded-full border border-[#DDE3DF] flex items-center justify-center text-[#103B32] transition-transform duration-500 ${
                        isOpen ? 'rotate-45 bg-[#E4F4EC] border-[#35C985]/40' : ''
                      }`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      aria-hidden="true"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 sm:pl-[88px]">
                        {/* Disciplinas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                          {mod.courses.map((course, idx) => (
                            <div key={course.title}>
                              <p className="t-eyebrow">
                                Disciplina {idx + 1 + (mod.id - 1) * 2} · 30h
                              </p>
                              <h4 className="t-h4 mt-3">{course.title}</h4>
                              <p className="t-body mt-2 text-[15px]">{course.description}</p>

                              <p className="t-micro mt-5 mb-2">Tópicos abordados</p>
                              <ul className="border-t border-[#DDE3DF]">
                                {course.topics.map((topic) => (
                                  <li
                                    key={topic}
                                    className="py-2.5 border-b border-[#E7EBE7] text-[14px] leading-snug text-[#3E4A45] flex gap-3"
                                  >
                                    <span className="dot-accent mt-2" aria-hidden="true" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Projeto do módulo e microcertificação */}
                        <div className="mt-10 pt-8 border-t border-[#DDE3DF] grid grid-cols-1 md:grid-cols-2 gap-8">
                          {mod.project && (
                            <div>
                              <p className="t-eyebrow">Projeto prático do módulo</p>
                              <p className="mt-2 text-[15px] leading-relaxed text-[#19211E]">
                                {mod.project}
                              </p>
                            </div>
                          )}
                          <div>
                            <p className="t-eyebrow">Microcertificação concedida</p>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#19211E]">
                              {mod.microcertification}
                            </p>
                            <p className="t-micro mt-1">60 horas integralizadas</p>
                          </div>
                        </div>
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

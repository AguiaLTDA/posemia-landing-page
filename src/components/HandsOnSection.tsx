import React from 'react';
import { motion } from 'framer-motion';
import { PRACTICAL_PROJECTS } from '../data/courseData';
import { FolderCheck, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const HandsOnSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-gradient-to-b from-[#020B08] to-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./07 Aplicação Prática</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            HANDS-ON DESDE O <span className="text-[#00D889]">PRIMEIRO MÓDULO</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Nesta pós, conhecimento não termina na teoria. Ao longo da formação, cada módulo gera uma aplicação prática concreta.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICAL_PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-[#0F4232] flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#00D889] bg-[#063D2C] px-3 py-1 rounded-md border border-[#00D889]/30">
                    {proj.number}
                  </span>
                  <FolderCheck className="w-5 h-5 text-[#00D889] group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00D889] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-[#D7E1DD]/80 font-light leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F4232]/60 flex items-center text-xs font-mono text-[#5EF2B0] gap-2">
                <span>Entregável de Portfólio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Quote Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#063D2C]/80 via-[#0A261E] to-[#041A13] border border-[#00D889]/40 text-center space-y-2">
          <Sparkles className="w-6 h-6 text-[#00D889] mx-auto animate-pulse" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            “Você conclui a pós com um portfólio real de projetos de Inteligência Artificial.”
          </h3>
          <p className="text-xs text-[#88A699] font-mono">
            Soluções prontas para apresentar em entrevistas, reuniões de negócios ou clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

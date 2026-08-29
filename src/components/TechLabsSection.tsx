import React from 'react';
import { motion } from 'framer-motion';
import { TECH_LABS } from '../data/courseData';
import { Code2, Terminal, Cpu, Database, Server, Info } from 'lucide-react';

export const TechLabsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./10 Aprofundamento Opcional</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Quer ir além? <span className="text-[#00D889]">Vá para o código.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Programação não é obrigatória para concluir a pós. Porém, aos alunos que buscam aprofundamento técnico, oferecemos Tech Labs opcionais em formato hands-on.
          </p>
        </div>

        {/* 5 Tech Labs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {TECH_LABS.map((lab, idx) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-[#0F4232] flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#063D2C] border border-[#00D889]/40 flex items-center justify-center text-[#00D889] group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#5EF2B0] bg-[#063D2C]/80 px-2.5 py-1 rounded">
                    +{lab.hours}h
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00D889] transition-colors">
                  {lab.title}
                </h3>

                <p className="text-xs text-[#D7E1DD]/70 font-light leading-relaxed">
                  {lab.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F4232]/60 flex flex-wrap gap-1.5">
                {lab.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-[#88A699] bg-[#020B08] px-2 py-0.5 rounded border border-[#0F4232]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Banner */}
        <div className="p-4 rounded-xl glass-card border border-[#00D889]/30 flex items-center justify-center gap-3 text-xs text-[#5EF2B0] font-mono max-w-xl mx-auto text-center">
          <Info className="w-4 h-4 text-[#00D889] shrink-0" />
          <span>Os Tech Labs são 100% opcionais e não constituem pré-requisito para aprovação.</span>
        </div>
      </div>
    </section>
  );
};

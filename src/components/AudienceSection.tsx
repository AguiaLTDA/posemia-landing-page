import React from 'react';
import { motion } from 'framer-motion';
import { AREAS_DATA } from '../data/courseData';
import { Activity, Compass, Terminal, Scale, PieChart, BookOpen, PenTool, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Compass,
  Terminal,
  Scale,
  PieChart,
  BookOpen,
  PenTool
};

export const AudienceSection: React.FC = () => {
  return (
    <section id="para-quem-e" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0A382A] bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00F296]">
            <span>./02 Público-Alvo</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Uma pós. <span className="text-[#00F296]">Muitas profissões.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#E2E8F0] font-light">
            Se você possui um diploma de graduação concluído, esta formação foi projetada para sua transição de alto nível para o universo da Inteligência Artificial.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS_DATA.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Activity;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#05140F] border border-[#00F296]/40 flex items-center justify-center text-[#00F296]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#00F296] transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {area.careers.map((career) => (
                      <span
                        key={career}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black border border-[#0A382A] text-xs font-mono text-[#E2E8F0]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#00F296]" />
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="p-8 rounded-2xl glass-card border border-[#00F296]/30 bg-gradient-to-r from-[#031F16] via-black to-black flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Formação Multidisciplinar Aberta
            </h4>
            <p className="text-sm text-[#E2E8F0] font-light max-w-2xl">
              Qualquer diploma de graduação concluído concede acesso. A Inteligência Artificial é uma competência transversal aplicável a todas as carreiras.
            </p>
          </div>
          <a
            href="#inscricao"
            className="px-8 py-3.5 bg-[#00F296] hover:bg-[#6FFBC9] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_0_25px_rgba(0,242,150,0.4)] whitespace-nowrap transition-all"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
};

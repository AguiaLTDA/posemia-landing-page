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
    <section id="para-quem-e" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-black/40">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./02 Público-Alvo</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Uma pós. <span className="text-[#00D889]">Muitas profissões.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Se você possui um diploma de ensino superior (graduação), esta formação foi totalmente desenhada para permitir sua entrada de alto nível no universo da IA.
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
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-[#0F4232] group relative overflow-hidden"
              >
                {/* Accent ambient glow on card hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00D889]/10 rounded-full blur-2xl group-hover:bg-[#00D889]/25 transition-all" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#063D2C] border border-[#00D889]/40 flex items-center justify-center text-[#00D889]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white tracking-wide group-hover:text-[#00D889] transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {area.careers.map((career) => (
                      <span
                        key={career}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#041A13]/80 border border-[#0F4232] text-xs font-mono text-[#D7E1DD]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#00D889]" />
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
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#063D2C] via-[#0A261E] to-[#041A13] border border-[#00D889]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-xl text-white">
              Sua área não está na lista acima?
            </h4>
            <p className="text-sm text-[#D7E1DD]/90 font-light max-w-2xl">
              Qualquer diploma de graduação concluída concede acesso. A inteligência artificial é transversal e aplicável a todas as carreiras do conhecimento.
            </p>
          </div>
          <a
            href="#inscricao"
            className="px-6 py-3 bg-[#00D889] hover:bg-[#5EF2B0] text-[#041A13] font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(0,216,137,0.3)] whitespace-nowrap"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
};

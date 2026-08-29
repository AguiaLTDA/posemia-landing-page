import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TestTube2, Hammer, Rocket, CheckCircle } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'APRENDER',
      subtitle: 'Conteúdo conceitual objetivo',
      desc: 'Fundamentos sólidos sem enrolação acadêmica, focando nos princípios chave da IA.',
      icon: BookOpen
    },
    {
      step: '02',
      title: 'EXPERIMENTAR',
      subtitle: 'Laboratórios guiados',
      desc: 'Prática assistida em plataformas de IA generativa, AutoML e automação no-code.',
      icon: TestTube2
    },
    {
      step: '03',
      title: 'CONSTRUIR',
      subtitle: 'Projetos em cada módulo',
      desc: 'Criação de assistentes, agentes, automações e dashboards entregáveis.',
      icon: Hammer
    },
    {
      step: '04',
      title: 'APLICAR',
      subtitle: 'Problemas reais da sua profissão',
      desc: 'Resolução de gargalos e oportunidades do seu dia a dia profissional.',
      icon: Rocket
    }
  ];

  const methodologyItems = [
    'Aulas expositivas e ao vivo',
    'Estudos de caso reais',
    'Laboratórios práticos guiados',
    'Desafios hands-on',
    'Projetos aplicados',
    'Ferramentas digitais de ponta',
    'IA Generativa & Prompts',
    'No-code & Low-code',
    'Projetos multidisciplinares'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-black/50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D889]">
            <span>./13 Modelo Pedagógico</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Uma metodologia pensada <span className="text-[#00D889]">para quem trabalha.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            Formato híbrido e dinâmico que conecta teoria direta à prática profissional diária.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-[#0F4232] space-y-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00D889] bg-[#063D2C] px-2.5 py-1 rounded">
                      PILAR {pillar.step}
                    </span>
                    <Icon className="w-5 h-5 text-[#00D889] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[#00D889] transition-colors">
                    {pillar.title}
                  </h3>

                  <span className="text-xs font-mono text-[#5EF2B0] block mt-1">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs text-[#D7E1DD]/70 font-light mt-3 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Methodology elements list */}
        <div className="p-8 rounded-2xl glass-card border border-[#0F4232] bg-[#063D2C]/20 max-w-4xl mx-auto space-y-4">
          <h4 className="text-xs font-mono text-[#88A699] uppercase tracking-widest text-center">
            A metodologia da pós combina harmoniosamente:
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {methodologyItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#041A13] border border-[#0F4232] text-xs font-mono text-[#D7E1DD]"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#00D889]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

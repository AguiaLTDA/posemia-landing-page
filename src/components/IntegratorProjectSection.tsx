import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle2, ChevronRight, Rocket, Code2, Database, ShieldAlert, Presentation } from 'lucide-react';

export const IntegratorProjectSection: React.FC = () => {
  const steps = [
    { title: 'PROBLEMA', desc: 'Identificação de dor real na profissão' },
    { title: 'PROCESSO ATUAL', desc: 'Mapeamento do fluxo de trabalho' },
    { title: 'DADOS E CONHECIMENTO', desc: 'Estruturação da base documental' },
    { title: 'SOLUÇÃO DE IA', desc: 'Desenho da arquitetura inteligente' },
    { title: 'PROTÓTIPO', desc: 'Construção da solução funcional' },
    { title: 'VALIDAÇÃO', desc: 'Testes práticos e refinamento' },
    { title: 'GOVERNANÇA E RISCOS', desc: 'Adequação LGPD e segurança' },
    { title: 'PLANO DE IMPLANTAÇÃO', desc: 'Cálculo de ROI e escala' },
    { title: 'PITCH FINAL', desc: 'Apresentação do projeto' }
  ];

  const deliverables = [
    'Aplicativo Inteligente',
    'Agente autônomo de IA',
    'Assistente especialista',
    'Automação de processos',
    'Sistema RAG documental',
    'Dashboard analítico',
    'Modelo preditivo no-code',
    'Produto educacional',
    'Sistema de apoio profissional',
    'Proof of Concept (PoC)',
    'Plano de implantação'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#0F4232]/40 bg-[#041A13]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4C441]">
            <span>./08 Trabalho de Conclusão Prático</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Não queremos apenas um TCC.{' '}
            <span className="text-[#D4C441] underline decoration-[#D4C441]/40 underline-offset-8">
              Queremos uma solução.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#D7E1DD]/80 font-light">
            O projeto começa a ser desenvolvido desde os primeiros módulos. Você identifica um problema real da própria profissão e constrói progressivamente uma solução completa de IA.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-[#88A699] uppercase tracking-widest text-center">
            Etapas de Desenvolvimento do Projeto Integrador:
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-4 rounded-xl border border-[#0F4232] hover:border-[#D4C441]/50 flex flex-col justify-between group transition-all"
              >
                <div className="font-mono text-[10px] font-bold text-[#D4C441] mb-2">
                  0{idx + 1}
                </div>
                <h4 className="font-display font-bold text-xs text-white group-hover:text-[#D4C441] transition-colors">
                  {step.title}
                </h4>
                <p className="text-[10px] text-[#88A699] font-light mt-1">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deliverables List */}
        <div className="p-8 rounded-2xl glass-card border border-[#D4C441]/30 bg-gradient-to-r from-[#063D2C]/40 to-[#041A13] space-y-6">
          <div className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-[#D4C441]" />
            <h3 className="font-display font-bold text-xl text-white">
              Possíveis Entregáveis do Projeto Integrador:
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {deliverables.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#041A13]/90 border border-[#0F4232] text-xs font-mono text-[#D7E1DD] hover:border-[#D4C441] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4C441]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

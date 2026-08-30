import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  PRACTICAL_PROJECTS,
  COURSE_MODULES,
  TECH_LABS,
  SKILLS_LIST,
  TECH_STACK_TAGS
} from '../data/courseData';
import { Reveal } from './Reveal';

/* ------------------------------------------------------------------ *
 * Painéis
 * ------------------------------------------------------------------ */

const PracticalProjectsPanel: React.FC = () => (
  <div>
    <p className="t-lead max-w-3xl">
      Nesta pós, conhecimento não termina na teoria. Ao longo da formação, cada módulo gera uma
      aplicação prática concreta.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 border-t border-[#DDE3DF] pt-10">
      {PRACTICAL_PROJECTS.map((proj) => (
        <article key={proj.id}>
          <div className="flex items-baseline gap-4">
            <span className="t-numeral text-[2.25rem] text-[#103B32]">
              {String(proj.id).padStart(2, '0')}
            </span>
            <span className="t-eyebrow">{proj.number}</span>
          </div>
          <h4 className="t-h4 mt-3">{proj.title}</h4>
          <p className="t-body mt-2 text-[15px]">{proj.description}</p>
        </article>
      ))}
    </div>

    <blockquote className="mt-14 max-w-4xl">
      <p className="t-serif text-[1.45rem] sm:text-[1.85rem] leading-[1.3] text-[#103B32]">
        “Você conclui a pós com um portfólio real de projetos de Inteligência Artificial.”
      </p>
      <footer className="t-micro mt-3">
        Soluções prontas para apresentar em entrevistas, reuniões de negócios ou clientes.
      </footer>
    </blockquote>
  </div>
);

const IntegratorProjectPanel: React.FC = () => {
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
    <div>
      <p className="t-lead max-w-3xl">
        Não queremos apenas um TCC, queremos uma solução. O projeto começa a ser desenvolvido desde
        os primeiros módulos: você identifica um problema real da própria profissão e constrói
        progressivamente uma solução completa de IA.
      </p>

      <p className="t-eyebrow mt-12 pb-4 border-b border-[#DDE3DF]">
        Etapas de desenvolvimento do projeto integrador
      </p>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, idx) => (
          <li key={step.title} className="py-6 pr-8 border-b border-[#DDE3DF]">
            <span className="t-numeral text-[1.35rem] text-[#35C985]">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <h4 className="t-h4 mt-2.5 lowercase first-letter:uppercase">{step.title}</h4>
            <p className="t-micro mt-1">{step.desc}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
        <div className="lg:col-span-4">
          <h4 className="t-h3">Possíveis entregáveis</h4>
          <p className="t-body mt-2 text-[15px]">
            O formato final acompanha o problema que você escolher resolver.
          </p>
        </div>
        <div className="lg:col-span-8 flex flex-wrap gap-2 content-start">
          {deliverables.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MicroCredentialsPanel: React.FC = () => (
  <div>
    <p className="t-lead max-w-3xl">
      Conforme você avança módulo a módulo, conquista microcertificações acadêmicas reconhecidas para
      enriquecer seu currículo imediatamente.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {COURSE_MODULES.map((mod) => (
        <article key={mod.id} className="card card-interactive h-full p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="t-eyebrow">Certificado {String(mod.id).padStart(2, '0')}</span>
              <span className="t-numeral text-[1.35rem] text-[#65726C]">60h</span>
            </div>
            <h4 className="t-h4 mt-3">{mod.microcertification}</h4>
          </div>
          <p className="t-micro mt-6 pt-4 border-t border-[#E7EBE7]">
            Emitido ao concluir o Módulo {mod.id}
          </p>
        </article>
      ))}
    </div>

    <p className="mt-10 max-w-3xl t-body text-[15px]">
      Complete os seis módulos e integralize 360 horas para concluir a{' '}
      <strong className="font-medium text-[#19211E]">
        Pós-Graduação em Inteligência Artificial Aplicada
      </strong>
      , observadas as regras acadêmicas regimentais da instituição.
    </p>
  </div>
);

const TechLabsPanel: React.FC = () => (
  <div>
    <p className="t-lead max-w-3xl">
      Programação não é obrigatória para concluir a pós. Porém, aos alunos que buscam aprofundamento
      técnico, oferecemos Tech Labs opcionais em formato hands-on.
    </p>

    <div className="mt-12 border-t border-[#DDE3DF]">
      {TECH_LABS.map((lab) => (
        <article key={lab.title} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-7 border-b border-[#DDE3DF]">
          <div className="md:col-span-3">
            <h4 className="t-h4">{lab.title}</h4>
            <p className="t-micro mt-1">+{lab.hours} horas · opcional</p>
          </div>
          <div className="md:col-span-6">
            <p className="t-body text-[15px]">{lab.description}</p>
          </div>
          <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end content-start">
            {lab.tags.map((tag) => (
              <span key={tag} className="pill text-[12px] py-1">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>

    <p className="t-micro mt-6">
      Os Tech Labs são 100% opcionais e não constituem pré-requisito para aprovação.
    </p>
  </div>
);

const SkillsPanel: React.FC = () => (
  <div>
    <p className="t-serif text-[1.3rem] sm:text-[1.6rem] leading-snug text-[#3E4A45] max-w-3xl">
      “Você será capaz de transformar problemas profissionais em soluções inteligentes.”
    </p>

    <div className="mt-10 pt-2 border-t border-[#DDE3DF] grid grid-cols-1 md:grid-cols-2 gap-x-16">
      {SKILLS_LIST.map((skill, idx) => (
        <div key={skill} className="flex gap-5 py-3.5 border-b border-[#E7EBE7]">
          <span className="t-numeral text-[13px] text-[#65726C] pt-1.5 w-6 shrink-0">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span className="text-[15px] leading-relaxed text-[#19211E]">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

const MethodologyPanel: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Aprender',
      subtitle: 'Conteúdo conceitual objetivo',
      desc: 'Fundamentos sólidos sem enrolação acadêmica, focando nos princípios chave da IA.'
    },
    {
      step: '02',
      title: 'Experimentar',
      subtitle: 'Laboratórios guiados',
      desc: 'Prática assistida em plataformas de IA generativa, AutoML e automação no-code.'
    },
    {
      step: '03',
      title: 'Construir',
      subtitle: 'Projetos em cada módulo',
      desc: 'Criação de assistentes, agentes, automações e dashboards entregáveis.'
    },
    {
      step: '04',
      title: 'Aplicar',
      subtitle: 'Problemas reais da sua profissão',
      desc: 'Resolução de gargalos e oportunidades do seu dia a dia profissional.'
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
    <div>
      <p className="t-lead max-w-3xl">
        Formato híbrido e dinâmico que conecta teoria direta à prática profissional diária.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#DDE3DF]">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="py-8 pr-8 border-b border-[#DDE3DF] lg:border-b-0">
            <span className="t-numeral text-[2rem] text-[#35C985]">{pillar.step}</span>
            <h4 className="t-h3 mt-3">{pillar.title}</h4>
            <p className="t-micro mt-1">{pillar.subtitle}</p>
            <p className="t-body mt-3 text-[15px]">{pillar.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-[#DDE3DF] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16">
        <p className="lg:col-span-4 t-eyebrow">A metodologia da pós combina</p>
        <div className="lg:col-span-8 flex flex-wrap gap-2">
          {methodologyItems.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ToolsPanel: React.FC = () => (
  <div>
    <p className="t-lead max-w-3xl">
      Aprenda conceitos que permanecem e experimente tecnologias que evoluem. Trabalharemos com as
      ferramentas líderes de mercado para automação, IA generativa, análise de dados e sistemas de
      agentes.
    </p>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
      <p className="lg:col-span-4 t-eyebrow pt-1">Ferramentas em uso</p>
      <ul className="lg:col-span-8 flex flex-wrap gap-x-2 gap-y-1.5">
        {TECH_STACK_TAGS.map((tag, idx) => (
          <li key={tag} className="text-[15px] text-[#3E4A45]">
            {tag}
            {idx < TECH_STACK_TAGS.length - 1 && (
              <span className="text-[#C5CFC9] ml-2" aria-hidden="true">
                ·
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>

    <p className="t-micro mt-10 pt-6 border-t border-[#DDE3DF] max-w-3xl">
      <strong className="font-medium text-[#19211E]">Aviso institucional:</strong> as ferramentas
      utilizadas poderão ser atualizadas ao longo do curso de acordo com a constante evolução do
      mercado global de Inteligência Artificial, assegurando sempre o alinhamento com as melhores
      práticas de mercado.
    </p>
  </div>
);

/* ------------------------------------------------------------------ *
 * Seção com abas
 * ------------------------------------------------------------------ */

export const COMPLEMENTARY_TABS = [
  { id: 'projetos', label: 'Projetos práticos', heading: 'Hands-on desde o primeiro módulo.', Panel: PracticalProjectsPanel },
  { id: 'projeto-integrador', label: 'Projeto integrador', heading: 'Um TCC que vira solução.', Panel: IntegratorProjectPanel },
  { id: 'microcertificacoes', label: 'Microcertificações', heading: 'Uma pós. Seis conquistas.', Panel: MicroCredentialsPanel },
  { id: 'tech-labs', label: 'Tech Labs', heading: 'Quer ir além? Vá para o código.', Panel: TechLabsPanel },
  { id: 'competencias', label: 'Competências', heading: 'Perfil do egresso.', Panel: SkillsPanel },
  { id: 'metodologia', label: 'Metodologia', heading: 'Pensada para quem trabalha.', Panel: MethodologyPanel },
  { id: 'ferramentas', label: 'Ferramentas', heading: 'Ecossistema tecnológico.', Panel: ToolsPanel }
] as const;

type TabId = (typeof COMPLEMENTARY_TABS)[number]['id'];

const isTabId = (value: string): value is TabId =>
  COMPLEMENTARY_TABS.some((tab) => tab.id === value);

export const ComplementaryContentSection: React.FC = () => {
  const [activeId, setActiveId] = useState<TabId>('projetos');
  const reduceMotion = useReducedMotion();

  /** Abre a aba correspondente quando a página é acessada por âncora. */
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && isTabId(hash)) setActiveId(hash);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const active = COMPLEMENTARY_TABS.find((tab) => tab.id === activeId) || COMPLEMENTARY_TABS[0];
  const ActivePanel = active.Panel;

  return (
    <section id="complementares" className="surface-shell section">
      {/* Alvos de âncora — permitem link direto para cada aba */}
      {COMPLEMENTARY_TABS.map((tab) => (
        <span key={tab.id} id={tab.id} className="block" aria-hidden="true" />
      ))}

      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Conteúdos complementares</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-h2 mt-6">
                Tudo o que a formação entrega{' '}
                <span className="t-serif text-[#1E4C41]">além das aulas.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="t-body">
                Escolha um tema para explorar em detalhe: projetos, certificações, competências,
                metodologia e ferramentas.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Abas */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Conteúdos complementares"
            className="scroll-strip mt-12 flex gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0 pb-8 border-b border-[#DDE3DF]"
          >
            {COMPLEMENTARY_TABS.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`aba-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`painel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-400 cursor-pointer border ${
                    isActive
                      ? 'bg-[#103B32] text-white border-[#103B32]'
                      : 'bg-white text-[#3E4A45] border-[#DDE3DF] hover:border-[#35C985] hover:text-[#103B32]'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Painel ativo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`painel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`aba-${active.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-10"
          >
            <h3 className="t-h3 mb-6">{active.heading}</h3>
            <ActivePanel />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

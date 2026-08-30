import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { HeroComposition } from './HeroComposition';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenForm }) => {
  const targetAreas = [
    'Saúde',
    'Direito',
    'Engenharias',
    'Tecnologia',
    'Negócios',
    'Educação',
    'Agro',
    'Comunicação',
    'Gestão'
  ];

  const shortcuts = [
    { label: 'Matriz curricular', href: '#modulos' },
    { label: 'Microcertificações', href: '#microcertificacoes' },
    { label: 'Projetos práticos', href: '#projetos' },
    { label: 'Tech Labs', href: '#tech-labs' },
    { label: 'Competências', href: '#competencias' },
    { label: 'Trilhas profissionais', href: '#trilhas' },
    { label: 'Investimento', href: '#informacoes' }
  ];

  return (
    <section className="surface-shell pt-[124px] pb-16 sm:pt-[152px] sm:pb-24 lg:pt-[168px] lg:pb-32 overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Coluna editorial */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-eyebrow">Pós-graduação · 360 horas</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="t-display mt-6">
                Inteligência Artificial para{' '}
                <span className="t-serif text-[#1E4C41]">transformar sua profissão.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="t-lead mt-7 max-w-[36rem]">
                Uma formação multidisciplinar para profissionais de todas as áreas: aprenda a
                projetar, automatizar e aplicar Inteligência Artificial na sua carreira —{' '}
                <strong className="font-medium text-[#19211E]">sem precisar programar.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button onClick={onOpenForm} className="btn btn-primary">
                  Quero me inscrever
                </button>
                <a href="#visao-geral" className="btn btn-secondary">
                  Conhecer a pós
                </a>
              </div>
            </Reveal>

            {/* Atalhos para os conteúdos complementares */}
            <Reveal delay={0.3}>
              <nav aria-label="Atalhos da página" className="mt-10 pt-8 hairline">
                <p className="t-micro mb-4">Ir direto para</p>
                <div className="scroll-strip flex gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0 pb-1">
                  {shortcuts.map((item) => (
                    <a key={item.href} href={item.href} className="btn-shortcut shrink-0">
                      {item.label}
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </nav>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="mt-10 pt-8 hairline">
                <p className="t-micro mb-4">Desenvolvida para graduados das áreas de</p>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {targetAreas.map((area) => (
                    <span key={area} className="pill">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Composição abstrata */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={24}>
              <HeroComposition />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

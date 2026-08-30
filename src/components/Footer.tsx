import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="surface-forest on-forest pt-20 pb-[92px] sm:pb-10">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Marca institucional */}
          <div className="md:col-span-5">
            <img
              src="/assets/univc-logo-white-vert.png"
              alt="UNIVC - Centro Universitário Vale do Cricaré"
              className="h-14 w-auto object-contain"
            />
            <p className="mt-6 font-display font-semibold text-white text-[15px]">
              Centro Universitário Vale do Cricaré
            </p>
            <p className="t-micro mt-1">Pós-Graduação em Inteligência Artificial Aplicada</p>
            <p className="t-body mt-6 max-w-md text-[15px]">
              Formação de pós-graduação lato sensu reconhecida, multidisciplinar e prática. Voltada
              para aplicação profissional direta de IA Generativa, Automação e Inteligência Analítica
              em todas as áreas do conhecimento.
            </p>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h3 className="t-eyebrow">Navegação</h3>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              {[
                { name: 'Visão Geral', href: '#visao-geral' },
                { name: 'Para Quem É', href: '#para-quem-e' },
                { name: 'Jornada', href: '#jornada' },
                { name: 'Módulos', href: '#modulos' },
                { name: 'Complementares', href: '#complementares' },
                { name: 'Trilhas', href: '#trilhas' },
                { name: 'FAQ', href: '#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#C3D5CC] hover:text-[#35C985] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div className="md:col-span-4">
            <h3 className="t-eyebrow">Atendimento UNIVC</h3>
            <ul className="mt-5 space-y-2.5 text-[15px] text-[#C3D5CC]">
              <li>WhatsApp: (27) 3313-0000</li>
              <li>posgraduacao@ivc.br</li>
              <li>www.ivc.br</li>
              <li className="pt-1 text-[14px] leading-relaxed">
                R. Dr. Raimundo Diniz, 199 - Universitário, São Mateus - ES
              </li>
            </ul>

            <h3 className="t-eyebrow mt-9">Políticas e regras</h3>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              {['Política de Privacidade', 'Regulamento Acadêmico', 'Conformidade LGPD'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#C3D5CC] hover:text-[#35C985] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé legal */}
        <div className="mt-16 pt-7 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="t-micro">
            © {new Date().getFullYear()} UNIVC - Centro Universitário Vale do Cricaré. Todos os
            direitos reservados.
          </p>
          <p className="t-micro">Tecnologia &amp; Inovação Educacional</p>
        </div>
      </div>
    </footer>
  );
};

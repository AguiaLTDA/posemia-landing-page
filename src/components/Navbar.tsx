import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Visão Geral', href: '#visao-geral' },
    { name: 'Para Quem É', href: '#para-quem-e' },
    { name: 'Jornada', href: '#jornada' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Complementares', href: '#complementares' },
    { name: 'Trilhas', href: '#trilhas' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
          isScrolled
            ? 'bg-[#F4F5F0]/85 backdrop-blur-xl border-b border-[#DDE3DF]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="container-page flex items-center justify-between h-[72px]">
          {/* Marca institucional */}
          <a href="#" className="flex items-center gap-3.5 shrink-0" aria-label="UNIVC — página inicial">
            <img
              src="/assets/univc-logo-green.png"
              alt="UNIVC - Centro Universitário Vale do Cricaré"
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <span className="h-7 w-px bg-[#DDE3DF] shrink-0" />
            <span className="text-[11px] sm:text-[12px] leading-tight text-[#3E4A45]">
              Pós-graduação em<br />
              <span className="font-display font-semibold text-[12px] sm:text-[13.5px] text-[#103B32]">
                Inteligência Artificial
              </span>
            </span>
          </a>

          {/* Navegação principal */}
          <div className="hidden xl:flex items-center gap-6 text-[14px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#3E4A45] hover:text-[#103B32] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + menu mobile */}
          <div className="flex items-center gap-2">
            <button onClick={onOpenForm} className="btn btn-primary hidden sm:inline-flex py-2.5 px-5 text-[14px]">
              Inscreva-se
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 -mr-2 text-[#19211E]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F4F5F0]/97 backdrop-blur-xl border-b border-[#DDE3DF]">
          <div className="container-page py-6 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-[#DDE3DF] text-[15px] text-[#19211E]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenForm();
              }}
              className="btn btn-primary w-full mt-6"
            >
              Inscreva-se
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Visão Geral', href: '#visao-geral' },
    { name: 'Para Quem É', href: '#para-quem-e' },
    { name: 'Jornada', href: '#jornada' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Trilhas', href: '#trilhas' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="h-[2.5px] bg-gradient-to-r from-[#00F296] via-[#00E5FF] to-[#E2FF54] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`px-4 lg:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-2xl border-b border-[#0A382A] shadow-2xl'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Official UNIVC Brand Logo */}
          <a href="#" className="flex items-center gap-3 sm:gap-4 group">
            <img
              src="./assets/univc-logo-white-horiz.png"
              alt="UNIVC - Centro Universitário Vale do Cricaré"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="h-7 w-[1px] bg-[#0A382A] hidden sm:block" />
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-extrabold text-white text-xs tracking-wider uppercase flex items-center gap-1.5">
                PÓS EM IA <span className="text-[#00F296]">APLICADA</span>
              </span>
              <span className="text-[10px] text-[#94A3B8] font-mono tracking-widest uppercase">
                Formação Executiva
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#E2E8F0]/80 hover:text-[#00F296] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#00F296] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenForm}
              className="relative group overflow-hidden rounded-full px-6 py-2.5 bg-[#00F296] text-black font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,150,0.6)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Inscreva-se
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#00F296] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E2E8F0] hover:text-[#00F296] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-[#0A382A] px-6 py-6 space-y-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#E2E8F0] hover:text-[#00F296] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenForm();
            }}
            className="w-full mt-4 py-3 bg-[#00F296] text-black font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            Inscreva-se Agora
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </header>
  );
};

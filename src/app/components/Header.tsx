import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#4FBFA5]/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/perfil.png" alt="Foto de perfil" className="w-9 h-9 sm:w-16 sm:h-16 object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#2F3E3A] font-medium text-xs sm:text-base">Dr. Luiz Otávio da Silva Flor de Lima</span>
              <span className="text-[#6B7F79] text-[10px] sm:text-sm">Psicólogo Clínico<br/>CRP 10/10618</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#2F3E3A] hover:text-[#4090eb] transition-colors text-sm lg:text-base"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-[#2F3E3A] hover:text-[#4090eb] transition-colors text-sm lg:text-base"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-[#2F3E3A] hover:text-[#4090eb] transition-colors text-sm lg:text-base"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#4090eb] text-white px-4 lg:px-6 py-2 rounded-full hover:bg-[#31ace6] transition-colors text-sm lg:text-base"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2F3E3A] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-2 flex flex-col gap-2"
          >
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#2F3E3A] hover:text-[#4090eb] transition-colors text-left py-2 text-sm"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-[#2F3E3A] hover:text-[#4090eb] transition-colors text-left py-2 text-sm"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-[#2F3E3A] hover:text-[#4090eb] transition-colors text-left py-2 text-sm"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#4090eb] text-white px-4 py-2 rounded-full hover:bg-[#31ace6] transition-colors text-center text-sm"
            >
              Contato
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

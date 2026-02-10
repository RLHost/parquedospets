
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    
    // Pequeno delay para permitir que o menu mobile feche antes da rolagem
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Compensação do header fixo
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, 'inicio')} 
          className="flex items-center gap-2 group relative z-[110]"
        >
          <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
             <span className="text-xl font-bold">P</span>
          </div>
          <span className="text-xl font-bold text-gray-900 font-title transition-colors">
            Parque <span className="text-orange-500">dos Pets</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-gray-600 hover:text-orange-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-md flex items-center gap-2 active:scale-95"
          >
            <Phone size={18} />
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-orange-600 transition-transform active:scale-90 relative z-[110]" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible z-[101]' : 'opacity-0 invisible z-[-1]'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Drawer */}
      <nav 
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center px-6 gap-8 z-[105] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-6 w-full">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors py-2 border-b-2 border-transparent w-full text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <hr className="w-full border-gray-100" />
        
        <div className="flex gap-8">
          <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 p-3 bg-pink-50 rounded-full active:scale-90 transition-transform"><Instagram size={28} /></a>
          <a href={COMPANY_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 p-3 bg-blue-50 rounded-full active:scale-90 transition-transform"><Facebook size={28} /></a>
        </div>
        
        <a 
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 text-white text-center py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <MessageCircle size={24} />
          Falar no WhatsApp
        </a>
        <p className="text-gray-400 text-sm font-medium">{COMPANY_INFO.phone}</p>
      </nav>
    </header>
  );
};

export default Header;

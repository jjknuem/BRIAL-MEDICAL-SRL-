import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Compass } from 'lucide-react';
import { BrialLogo } from './BrialLogo';

interface NavbarProps {
  onOpenServiceModal: () => void;
  currentView?: 'home' | 'philosophy';
  onNavigateToPhilosophy?: () => void;
  onNavigateToHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenServiceModal,
  currentView = 'home',
  onNavigateToPhilosophy,
  onNavigateToHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string, isPhilosophy = false) => {
    setMobileMenuOpen(false);

    if (isPhilosophy) {
      if (onNavigateToPhilosophy) {
        onNavigateToPhilosophy();
      } else {
        const el = document.getElementById('valores');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (currentView === 'philosophy') {
      if (onNavigateToHome) onNavigateToHome();
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio', isPhilosophy: false },
    { label: 'Misión & Valores', href: '#valores', isPhilosophy: true },
    { label: 'Servicios', href: '#servicios', isPhilosophy: false },
    { label: 'Equipos Médicos', href: '#catalogo', isPhilosophy: false },
    { label: 'Cobertura & Contacto', href: '#contacto', isPhilosophy: false }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'apple-glass shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-md py-3.5 border-b border-black/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Brial Medical Logo */}
          <button
            onClick={() => {
              if (currentView === 'philosophy' && onNavigateToHome) {
                onNavigateToHome();
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center group whitespace-nowrap shrink-0 transition-opacity hover:opacity-90 cursor-pointer text-left"
            aria-label="Brial Medical SRL Inicio"
          >
            <BrialLogo variant="compact" size="md" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#515154]">
            {navLinks.map((link) => {
              const isActive = link.isPhilosophy && currentView === 'philosophy';
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href, link.isPhilosophy)}
                  className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#0080D7] font-semibold underline underline-offset-4 decoration-2 decoration-[#0080D7]'
                      : 'hover:text-[#1d1d1f] hover:underline hover:underline-offset-4 decoration-1 decoration-[#0080D7]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenServiceModal}
              className="apple-button-pill px-5 py-2 text-xs font-medium text-white bg-[#0080D7] hover:bg-[#0070be] shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Solicitar Servicio
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1d1d1f] rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden apple-glass px-6 py-6 border-b border-black/[0.08] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#1d1d1f]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href, link.isPhilosophy)}
                className={`py-1 text-left ${
                  link.isPhilosophy && currentView === 'philosophy'
                    ? 'text-[#0080D7] font-semibold'
                    : 'text-[#515154] hover:text-[#1d1d1f]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-black/5 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenServiceModal();
                }}
                className="apple-button-pill w-full py-2.5 text-xs font-medium text-white bg-[#0080D7] text-center"
              >
                Solicitar Servicio Técnico
              </button>
              <a
                href="tel:+18492069412"
                className="flex items-center justify-center gap-2 text-xs text-[#86868b] py-1 hover:text-[#0080D7]"
              >
                <PhoneCall size={12} />
                <span>Contacto / Urgencias: +1 (849) 206-9412</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

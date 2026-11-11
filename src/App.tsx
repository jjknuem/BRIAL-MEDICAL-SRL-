import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutValues } from './components/AboutValues';
import { ServicesSection } from './components/ServicesSection';
import { CatalogSection } from './components/CatalogSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { SpecModal } from './components/SpecModal';
import { CompanyPhilosophyPage } from './components/CompanyPhilosophyPage';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { MedicalEquipment } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'philosophy'>('home');
  const [selectedForSpec, setSelectedForSpec] = useState<MedicalEquipment | null>(null);
  const [selectedEquipmentForService, setSelectedEquipmentForService] = useState<string>('');
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);

  useEffect(() => {
    // Check if the user loaded with #mision, #valores, #nosotros, #privacidad or #terminos
    if (window.location.hash === '#mision' || window.location.hash === '#filosofia') {
      setCurrentView('philosophy');
    } else if (window.location.hash === '#privacidad') {
      setLegalModalType('privacy');
    } else if (window.location.hash === '#terminos') {
      setLegalModalType('terms');
    }
  }, []);

  const handleOpenServiceModal = (equipmentName?: string) => {
    if (equipmentName) {
      setSelectedEquipmentForService(equipmentName);
    }
    if (currentView === 'philosophy') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('solicitud');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('solicitud');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectForService = (equipment: MedicalEquipment) => {
    setSelectedForSpec(null);
    handleOpenServiceModal(`${equipment.name} (${equipment.model})`);
  };

  const handleExploreCatalog = () => {
    setIsCatalogOpen(true);
    if (currentView === 'philosophy') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('catalogo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('catalogo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] flex flex-col selection:bg-[#0071e3]/20 selection:text-[#0071e3]">
      {/* Apple UI Glassmorphic Sticky Header */}
      <Navbar 
        onOpenServiceModal={() => handleOpenServiceModal()}
        currentView={currentView}
        onNavigateToPhilosophy={() => {
          setCurrentView('philosophy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content: Either Dedicated Philosophy Page or Home Flow */}
      <main className="flex-1">
        {currentView === 'philosophy' ? (
          <CompanyPhilosophyPage
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenServiceModal={() => handleOpenServiceModal()}
          />
        ) : (
          <>
            {/* 1. Inicio (Home): Hero & Certifications */}
            <Hero
              onOpenServiceModal={() => handleOpenServiceModal()}
              onExploreCatalog={handleExploreCatalog}
            />

            {/* 2. Sobre Nosotros & Valores */}
            <AboutValues 
              onOpenFullPhilosophyPage={() => {
                setCurrentView('philosophy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. Servicios y Solicitudes: Cards & Clean Request Form with Live Ticket */}
            <ServicesSection initialEquipment={selectedEquipmentForService} />

            {/* 4. Equipos Médicos: Catalog by Areas with Apple Store Cards */}
            <CatalogSection
              isOpen={isCatalogOpen}
              onToggleOpen={(open) => setIsCatalogOpen(open)}
              onSelectForService={handleSelectForService}
              onSelectForSpec={(eq) => setSelectedForSpec(eq)}
            />

            {/* 5. Ubicación y Contacto: Interactive Map & Contact */}
            <LocationContact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenPhilosophy={() => {
          setCurrentView('philosophy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacyPolicy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Spec Sheet Modal */}
      {selectedForSpec && (
        <SpecModal
          equipment={selectedForSpec}
          onClose={() => setSelectedForSpec(null)}
          onSelectForService={handleSelectForService}
        />
      )}

      {/* Legal Documents Modal */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          isOpen={true}
          onClose={() => setLegalModalType(null)}
          onSwitchType={(type) => setLegalModalType(type)}
        />
      )}
    </div>
  );
}

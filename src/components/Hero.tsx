import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BRAND_CERTIFICATIONS } from '../data/mockData';

interface HeroProps {
  onOpenServiceModal: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenServiceModal, onExploreCatalog }) => {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-white border border-black/[0.06] shadow-2xs text-[13px] text-[#515154] tracking-tight">
            <img
              src="/src/assets/BRIAL LOGO.jpg"
              alt="Brial Medical SRL"
              className="w-5 h-5 object-contain rounded-sm"
            />
            <span className="font-semibold text-[#072042]">Brial Medical SRL</span>
            <span aria-hidden="true" className="text-black/30">·</span>
            <span>Santo Domingo, R.D.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-[#1d1d1f] leading-[1.08] mb-6 text-balance">
            Tecnología médica con la precisión que exige la vida.
          </h1>

          <p className="text-lg sm:text-xl text-[#86868b] font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
            Venta al por mayor de instrumentos y equipos médicos y de laboratorio, instalación electromédica de alta complejidad y soporte técnico especializado 24/7 en toda la República Dominicana.
          </p>

          {/* Pill Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenServiceModal}
              className="apple-button-pill w-full sm:w-auto px-8 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-[15px] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Servicio Técnico</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onExploreCatalog}
              className="apple-button-pill w-full sm:w-auto px-8 py-3.5 bg-black/[0.05] hover:bg-black/[0.08] text-[#1d1d1f] font-medium text-[15px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Explorar Catálogo</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Hero Visual Focal Carrier: Laboratorio Clínico Brial Medical */}
        <div className="relative max-w-6xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] bg-[#1d1d1f] aspect-video sm:aspect-[16/9] relative group">
            <img
              src="/src/assets/laboratorio.jpg"
              alt="Instalaciones y especialistas de laboratorio clínico Brial Medical SRL"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />
            {/* Subtle Gradient Scrim at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/80 font-semibold mb-1 block">
                  Brial Medical SRL · Santo Domingo, R.D.
                </span>
                <p className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                  Instalación, reparación y venta de equipos médicos y de laboratorio
                </p>
              </div>
              <div className="text-xs text-white/95 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 self-start sm:self-auto font-medium shadow-xs">
                Soporte Técnico Especializado
              </div>
            </div>
          </div>
        </div>

        {/* Brands & Certifications Section in Subtle Grayscale */}
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-8">
            Marcas y líneas de referencia en diagnóstico y laboratorio clínico
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {BRAND_CERTIFICATIONS.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-2 text-center group cursor-default"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-[#86868b] mt-0.5">
                  {brand.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

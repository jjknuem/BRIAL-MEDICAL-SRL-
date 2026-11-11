import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { BrialLogo } from './BrialLogo';

interface FooterProps {
  onOpenPhilosophy?: () => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPhilosophy,
  onOpenPrivacyPolicy,
  onOpenTerms
}) => {
  return (
    <footer className="bg-white border-t border-black/[0.06] text-[#86868b] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Brand & Disclaimer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
          <div className="shrink-0">
            <BrialLogo variant="compact" size="md" />
          </div>
          <div className="text-[11px] leading-relaxed max-w-3xl">
            <p className="mb-1">
              * <strong className="text-[#072042]">Brial Medical SRL</strong>. Empresa constituida en la República Dominicana con inicio de operaciones el 3 de mayo de 2022. Especialistas en venta al por mayor de instrumentos y equipos médicos y de laboratorio, instalación y mantenimiento especializado.
            </p>
            <p className="text-[#86868b]">
              Sede única en Santo Domingo, R.D. (18°31'33.7"N 70°01'44.4"W).
            </p>
          </div>
        </div>

        {/* Directory columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-b border-black/[0.06]">
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">Servicios Técnicos</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-[#1d1d1f] transition-colors">Venta Mayorista de Equipos</a></li>
              <li><a href="#servicios" className="hover:text-[#1d1d1f] transition-colors">Instalación y Puesta en Marcha</a></li>
              <li><a href="#servicios" className="hover:text-[#1d1d1f] transition-colors">Mantenimiento Preventivo Especializado</a></li>
              <li><a href="#servicios" className="hover:text-[#1d1d1f] transition-colors">Mantenimiento Correctivo 24/7</a></li>
              <li><a href="#solicitud" className="hover:text-[#1d1d1f] transition-colors">Solicitud de Servicio en Línea</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">Catálogo Especializado</h4>
            <ul className="space-y-2">
              <li><a href="#catalogo" className="hover:text-[#1d1d1f] transition-colors">Quirófano y Anestesia (Dräger, Getinge, Karl Storz)</a></li>
              <li><a href="#catalogo" className="hover:text-[#1d1d1f] transition-colors">Cuidados Intensivos UCI (Hamilton, Zoll, B. Braun)</a></li>
              <li><a href="#catalogo" className="hover:text-[#1d1d1f] transition-colors">Urgencias y Triage (Metro, GE HealthCare, Laerdal)</a></li>
              <li><a href="#catalogo" className="hover:text-[#1d1d1f] transition-colors">Central de Esterilización (Getinge, Steris, Miele)</a></li>
              <li><a href="#catalogo" className="hover:text-[#1d1d1f] transition-colors">Laboratorio Clínico (Rayto Chemray, Mindray, Cobas)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">Ficha Corporativa</h4>
            <ul className="space-y-2">
              <li className="text-emerald-600 font-medium">Estado: Activo</li>
              <li>Inicio: 3 de mayo de 2022</li>
              <li>Sede: Santo Domingo, R.D.</li>
              {onOpenPhilosophy && (
                <li>
                  <button
                    onClick={onOpenPhilosophy}
                    className="text-[#0080D7] font-semibold hover:underline cursor-pointer text-left"
                  >
                    Misión, Visión y Valores
                  </button>
                </li>
              )}
              <li>
                <a
                  href="https://www.instagram.com/brial_medicalservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0080D7] hover:underline flex items-center gap-1"
                >
                  <span>Instagram: Brial Medical Services</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">Contacto Directo</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+18492069412" className="text-[#072042] font-bold hover:text-[#0080D7] transition-colors">
                  +1 (849) 206-9412
                </a>
              </li>
              <li>
                <a href="mailto:info@brialmedical.com" className="hover:text-[#0080D7] transition-colors">
                  info@brialmedical.com
                </a>
              </li>
              <li>Santo Domingo Oeste, R.D.</li>
              <li className="font-mono text-[10px] text-[#86868b]">18°31'33.7"N 70°01'44.4"W</li>
              <li><a href="#contacto" className="text-[#0080D7] hover:underline">Ver en Mapa Interactivo</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            <span>Copyright © {new Date().getFullYear()} Brial Medical SRL. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[#86868b]">
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-[#1d1d1f] transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span aria-hidden="true" className="text-[#86868b]/60">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#1d1d1f] transition-colors cursor-pointer"
            >
              Términos de Servicio Biomédico
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

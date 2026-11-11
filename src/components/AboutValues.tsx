import React from 'react';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  Target, 
  Sparkles, 
  HeartPulse, 
  Shield, 
  Users, 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { BrialLogo } from './BrialLogo';
import { 
  COMPANY_INFO, 
  COMPANY_MISSION, 
  COMPANY_VISION, 
  COMPANY_VALUES 
} from '../data/mockData';

interface AboutValuesProps {
  onOpenFullPhilosophyPage?: () => void;
}

export const AboutValues: React.FC<AboutValuesProps> = ({ onOpenFullPhilosophyPage }) => {
  const iconMap: Record<string, React.ElementType> = {
    Award,
    Clock,
    ShieldCheck,
    Target,
    Sparkles,
    HeartPulse,
    Shield,
    Users
  };

  return (
    <section id="valores" className="py-24 bg-white/75 backdrop-blur-md border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Logo Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-black/[0.04]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#0080D7]/10 text-[#0080D7] text-xs font-semibold tracking-wider uppercase">
              <Compass size={14} />
              <span>Sobre Brial Medical SRL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072042] mb-6 text-balance">
              Ingeniería que respalda la vocación médica.
            </h2>
            <p className="text-base sm:text-lg text-[#86868b] leading-relaxed mb-6">
              <strong className="text-[#072042]">Brial Medical SRL</strong> es una empresa constituida en la República Dominicana con sede central en Santo Domingo. Nos especializamos en la venta al por mayor, distribución, instalación y mantenimiento de instrumentos y equipos médicos y de laboratorio de alta exigencia diagnóstica y hospitalaria.
            </p>

            {/* Official Registration Data Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-[#f5f5f7] rounded-xl border border-black/[0.04]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Actividad</span>
                <span className="font-bold text-[#072042] text-xs truncate block">Venta & Servicio Técnico</span>
              </div>
              <div className="p-3 bg-[#f5f5f7] rounded-xl border border-black/[0.04]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Estado Fiscal</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  Activo (Mayo 2022)
                </span>
              </div>
              <div className="p-3 bg-[#f5f5f7] rounded-xl border border-black/[0.04]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Sede Central</span>
                <span className="font-bold text-[#1d1d1f]">Santo Domingo, R.D.</span>
              </div>
              <div className="p-3 bg-[#f5f5f7] rounded-xl border border-black/[0.04]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Redes Sociales</span>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0080D7] hover:underline truncate block"
                >
                  {COMPANY_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Official Brand Seal Card & Dedicated Page Trigger */}
          <div className="shrink-0 p-6 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] flex flex-col items-center justify-center self-start md:self-center shadow-xs">
            <BrialLogo variant="full" size="lg" />
            <div className="mt-4 text-center w-full">
              {onOpenFullPhilosophyPage && (
                <button
                  onClick={onOpenFullPhilosophyPage}
                  className="apple-button-pill w-full px-4 py-2 bg-white hover:bg-black/5 text-[#072042] text-xs font-semibold border border-black/[0.08] flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Ver Página de Filosofía</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mission & Vision split with exact text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f5f7] border border-black/[0.03] apple-card-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white text-[#0080D7] flex items-center justify-center shadow-2xs">
                  <Target size={22} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0080D7] px-2.5 py-0.5 bg-[#0080D7]/10 rounded-full">
                  Propósito Institucional
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#072042] mb-4 tracking-tight">
                Misión
              </h3>
              <p className="text-[#1d1d1f] leading-relaxed text-[15px] sm:text-base">
                "{COMPANY_MISSION}"
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.04] text-xs text-[#86868b] flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#0080D7]" />
              <span>Soluciones confiables para instituciones de salud</span>
            </div>
          </div>

          {/* Visión */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f5f7] border border-black/[0.03] apple-card-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white text-[#072042] flex items-center justify-center shadow-2xs">
                  <Compass size={22} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#072042] px-2.5 py-0.5 bg-black/[0.05] rounded-full">
                  Visión de Futuro
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#072042] mb-4 tracking-tight">
                Visión
              </h3>
              <p className="text-[#1d1d1f] leading-relaxed text-[15px] sm:text-base">
                "{COMPANY_VISION}"
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.04] text-xs text-[#86868b] flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>Referente nacional en República Dominicana</span>
            </div>
          </div>
        </div>

        {/* 8 Values Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-black/[0.04] text-xs font-semibold text-[#515154] uppercase tracking-wider">
                <span>Pilares de Conducta</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#072042] tracking-tight">
                Nuestros 8 Valores Fundamentales
              </h3>
              <p className="text-sm text-[#86868b] mt-1.5">
                Principios que guían cada asesoría, venta, instalación y servicio técnico.
              </p>
            </div>

            {onOpenFullPhilosophyPage && (
              <button
                onClick={onOpenFullPhilosophyPage}
                className="apple-button-pill px-4 py-2 text-xs font-semibold text-[#0080D7] bg-[#0080D7]/10 hover:bg-[#0080D7]/15 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <span>Ver página dedicada</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((v) => {
              const IconComp = iconMap[v.iconName] || Award;
              return (
                <div
                  key={v.number}
                  className="p-7 rounded-2xl bg-[#f5f5f7] border border-black/[0.03] apple-card-hover group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#0080D7] shadow-2xs group-hover:scale-110 transition-transform duration-300">
                        <IconComp size={20} strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-[#86868b] font-mono tabular-nums">
                        {v.number}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#072042] mb-2 tracking-tight">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

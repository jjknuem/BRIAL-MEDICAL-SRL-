import React, { useEffect } from 'react';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  Target, 
  Sparkles, 
  HeartPulse, 
  Shield, 
  Users, 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Compass, 
  PhoneCall, 
  FileText,
  Instagram
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  COMPANY_MISSION, 
  COMPANY_VISION, 
  COMPANY_VALUES 
} from '../data/mockData';
import { BrialLogo } from './BrialLogo';

interface CompanyPhilosophyPageProps {
  onBackToHome: () => void;
  onOpenServiceModal: () => void;
}

export const CompanyPhilosophyPage: React.FC<CompanyPhilosophyPageProps> = ({
  onBackToHome,
  onOpenServiceModal
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
    <div className="min-h-screen bg-transparent pt-24 pb-20 animate-in fade-in duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#86868b] mb-8 pt-4">
          <button 
            onClick={onBackToHome}
            className="hover:text-[#072042] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Inicio</span>
          </button>
          <span>/</span>
          <span className="text-[#072042] font-semibold">Misión, Visión y Valores</span>
        </div>

        {/* Page Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-black/[0.05] shadow-xs mb-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 rounded-full bg-[#0080D7]/10 text-[#0080D7] text-xs font-semibold tracking-wide uppercase">
                <Compass size={14} />
                <span>Identidad Institucional</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#072042] leading-[1.1] mb-6 text-balance">
                Misión, Visión y Valores
              </h1>

              <p className="text-base sm:text-lg text-[#515154] leading-relaxed max-w-2xl">
                Los principios fundamentales y el marco ético que rigen nuestras operaciones de suministro médico, asesoría técnica y servicio especializado en la República Dominicana.
              </p>

              {/* Fiscal and Operations Strip */}
              <div className="mt-8 pt-6 border-t border-black/[0.05] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#86868b]">
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-[#86868b]">Razón Social</span>
                  <span className="font-bold text-[#072042]">{COMPANY_INFO.name}</span>
                </div>
                <span className="text-black/20 hidden sm:inline">·</span>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-[#86868b]">Operaciones</span>
                  <span className="font-bold text-emerald-600">Activo (Mayo 2022)</span>
                </div>
                <span className="text-black/20 hidden sm:inline">·</span>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-[#86868b]">Ubicación</span>
                  <span className="font-bold text-[#072042]">Santo Domingo, R.D.</span>
                </div>
              </div>
            </div>

            {/* Official Logo Showcase */}
            <div className="shrink-0 p-8 rounded-3xl bg-[#f5f5f7] border border-black/[0.04] flex flex-col items-center justify-center self-start lg:self-center shadow-xs">
              <BrialLogo variant="full" size="xl" showText={false} />
              <div className="text-center mt-3">
                <span className="font-bold text-base tracking-[0.18em] uppercase text-[#072042] block">
                  BRIAL
                </span>
                <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#0080D7] block mt-0.5">
                  MEDICAL SRL
                </span>
                <span className="inline-block mt-2 px-3 py-0.5 bg-white text-[#072042] text-[10px] font-semibold rounded-full border border-black/[0.05] shadow-2xs">
                  República Dominicana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Misión and Visión Two-Column Master Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card Misión */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.05] shadow-xs flex flex-col justify-between apple-card-hover group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#0080D7]/10 text-[#0080D7] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <Target size={24} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0080D7] px-3 py-1 bg-[#0080D7]/10 rounded-full">
                  Propósito Fundamental
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#072042] tracking-tight mb-6">
                Misión
              </h2>

              <blockquote className="text-base sm:text-lg text-[#1d1d1f] leading-relaxed font-normal">
                "{COMPANY_MISSION}"
              </blockquote>
            </div>

            <div className="mt-10 pt-6 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#86868b]">
              <span>Soluciones de calidad · Asesoría profesional</span>
              <CheckCircle2 size={16} className="text-[#0080D7]" />
            </div>
          </div>

          {/* Card Visión */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.05] shadow-xs flex flex-col justify-between apple-card-hover group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#072042]/10 text-[#072042] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <Compass size={24} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#072042] px-3 py-1 bg-black/[0.05] rounded-full">
                  Horizonte Estratégico
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#072042] tracking-tight mb-6">
                Visión
              </h2>

              <blockquote className="text-base sm:text-lg text-[#1d1d1f] leading-relaxed font-normal">
                "{COMPANY_VISION}"
              </blockquote>
            </div>

            <div className="mt-10 pt-6 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#86868b]">
              <span>Referente en República Dominicana · Excelencia técnica</span>
              <CheckCircle2 size={16} className="text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Section 8 Valores Fundamentales */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-black/[0.05] shadow-xs mb-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-black/[0.04] text-xs font-semibold text-[#515154] tracking-wider uppercase">
              <span>Marco Ético y de Conducta</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072042] mb-4">
              Nuestros 8 Valores
            </h2>
            <p className="text-base text-[#86868b] leading-relaxed">
              Los pilares esenciales que guían nuestras decisiones, nuestras relaciones con los clientes y el compromiso inquebrantable de nuestro equipo humano.
            </p>
          </div>

          {/* 8 Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val) => {
              const IconComp = iconMap[val.iconName] || Award;
              return (
                <div
                  key={val.number}
                  className="bg-[#f5f5f7] rounded-2xl p-7 border border-black/[0.03] apple-card-hover flex flex-col justify-between group transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white text-[#0080D7] flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300">
                        <IconComp size={20} strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-[#86868b] font-mono tabular-nums tracking-wider">
                        {val.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#072042] tracking-tight mb-2.5">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/[0.04] text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">
                    Brial Medical SRL
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment and Call to Action */}
        <div className="bg-[#072042] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl mb-12">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080D7]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0080D7] mb-2 block">
              Alianza con el Sector Salud
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
              Comprometidos con el desarrollo y la confiabilidad de su institución.
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              Con sede en Santo Domingo y cobertura nacional, proveemos los equipos, reactivos e insumos que su hospital o laboratorio necesita, respaldados por servicio técnico oportuno y formalidad garantizada.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBackToHome}
                className="apple-button-pill w-full sm:w-auto px-7 py-3.5 bg-white text-[#072042] hover:bg-white/90 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <ArrowLeft size={16} />
                <span>Volver al Catálogo y Servicios</span>
              </button>

              <button
                onClick={onOpenServiceModal}
                className="apple-button-pill w-full sm:w-auto px-7 py-3.5 bg-[#0080D7] hover:bg-[#0070be] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <span>Solicitar Servicio Técnico</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

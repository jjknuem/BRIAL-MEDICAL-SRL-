import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Radio, Navigation, ExternalLink, Check, Copy, Instagram, Building2, Calendar, FileText } from 'lucide-react';
import { COMPANY_INFO, HEADQUARTERS_LOCATION } from '../data/mockData';
import { BrialLogo } from './BrialLogo';

export const LocationContact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(COMPANY_INFO.coordinates.formatted);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps?q=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${COMPANY_INFO.coordinates.lng - 0.02}%2C${COMPANY_INFO.coordinates.lat - 0.015}%2C${COMPANY_INFO.coordinates.lng + 0.02}%2C${COMPANY_INFO.coordinates.lat + 0.015}&layer=mapnik&marker=${COMPANY_INFO.coordinates.lat}%2C${COMPANY_INFO.coordinates.lng}`;

  return (
    <section id="contacto" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0080D7] mb-3">
            Ubicación & Contacto Directo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072042] mb-4 text-balance">
            Sede central en Santo Domingo y cobertura nacional.
          </h2>
          <p className="text-base text-[#86868b] leading-relaxed">
            Instalaciones operativas en la República Dominicana para la venta mayorista, distribución, mantenimiento y calibración de tecnología médica y de laboratorio.
          </p>
        </div>

        {/* Main Grid: Interactive Map + Verified Corporate Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Map with Rounded Corners */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.05] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <h3 className="text-lg font-bold text-[#072042] tracking-tight">
                      Sede Oficial República Dominicana
                    </h3>
                  </div>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    Coordenadas exactas: {COMPANY_INFO.coordinates.formatted}
                  </p>
                </div>

                {/* Quick Map Actions */}
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={handleCopyCoords}
                    className="apple-button-pill px-3 py-1.5 text-xs bg-[#f5f5f7] hover:bg-black/5 text-[#515154] flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedCoords ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    <span>{copiedCoords ? 'Copiadas' : 'Copiar Coordenadas'}</span>
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button-pill px-3.5 py-1.5 text-xs bg-[#0080D7] hover:bg-[#0070be] text-white font-medium flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <ExternalLink size={13} />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Map Iframe with Rounded Corners & Overlay HUD */}
              <div className="relative rounded-2xl overflow-hidden bg-[#e8eef5] border border-black/[0.06] aspect-[16/10] sm:aspect-[16/9] shadow-inner">
                {/* Real OpenStreetMap Interactive Frame */}
                <iframe
                  title="Mapa de Ubicación Brial Medical SRL"
                  src={osmEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />

                {/* Floating GPS HUD Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-black/[0.08] shadow-sm text-xs pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={15} className="text-[#0080D7]" />
                    <span className="font-bold text-[#072042]">Brial Medical SRL</span>
                  </div>
                  <p className="text-[11px] text-[#515154] font-mono">
                    {COMPANY_INFO.coordinates.formatted}
                  </p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                    Única Sede Oficial en el País
                  </p>
                </div>

                {/* Direct Google Maps Floating Pill */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-[#072042] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-black/[0.08] flex items-center gap-1.5 transition-transform hover:scale-105"
                >
                  <Navigation size={13} className="text-[#0080D7]" />
                  <span>Ver Ruta en GPS</span>
                </a>
              </div>
            </div>

            {/* Nationwide Coverage Details */}
            <div className="mt-6 pt-5 border-t border-black/[0.05] grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-[#f5f5f7]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Sede Central</span>
                <span className="text-sm font-bold text-[#072042]">Santo Domingo</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f5f5f7]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Cobertura</span>
                <span className="text-sm font-bold text-[#0080D7]">Nacional (R.D.)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f5f5f7]">
                <span className="text-[10px] text-[#86868b] uppercase font-semibold block">Soporte Urgencias</span>
                <span className="text-sm font-bold text-emerald-600">Atención 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Corporate & Contact Information */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.05] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0080D7]">
                  Ficha Corporativa y Legal
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200/60">
                  Contribuyente Activo
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#072042] tracking-tight mb-1">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-[#86868b] mb-6">
                Sede Operativa y Atención Especializada
              </p>

              {/* Corporate Details Grid */}
              <div className="bg-[#f5f5f7] rounded-2xl p-4.5 mb-6 space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                  <span className="text-[#86868b] flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>Inicio de Operaciones:</span>
                  </span>
                  <span className="font-semibold text-[#1d1d1f]">{COMPANY_INFO.startDate}</span>
                </div>

                <div className="py-1">
                  <span className="text-[#86868b] block mb-1">Actividad Principal:</span>
                  <span className="font-semibold text-[#072042] block leading-snug">
                    {COMPANY_INFO.activity}
                  </span>
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#f5f5f7]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0080D7] flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone size={18} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold text-[#86868b] uppercase block">
                      Teléfono Directo & WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-[#072042] font-bold text-sm sm:text-base hover:text-[#0080D7] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="apple-button-pill text-[10px] px-2.5 py-1 bg-white hover:bg-black/5 text-[#515154] self-center"
                  >
                    {copiedPhone ? 'Copiado' : 'Copiar'}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#f5f5f7]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0080D7] flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#86868b] uppercase block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#072042] font-semibold hover:text-[#0080D7] transition-colors block text-sm"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram Profile */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#f5f5f7]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Instagram size={18} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold text-[#86868b] uppercase block">
                      Perfil en Instagram
                    </span>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#072042] font-bold hover:text-[#0080D7] transition-colors flex items-center gap-1.5 text-sm"
                    >
                      <span>{COMPANY_INFO.instagramName}</span>
                      <ExternalLink size={12} className="text-[#86868b]" />
                    </a>
                    <span className="text-[11px] text-[#86868b]">
                      {COMPANY_INFO.instagramHandle}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-6 pt-5 border-t border-black/[0.05] text-[11px] text-[#86868b] flex items-center justify-between">
              <span>Suministro y contratos de servicio a nivel nacional</span>
              <span className="text-[#072042] font-semibold">República Dominicana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

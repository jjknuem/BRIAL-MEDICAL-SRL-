import React from 'react';
import { X, CheckCircle, Activity, ChevronRight, ExternalLink } from 'lucide-react';
import { MedicalEquipment } from '../types';
import { BrialLogo } from './BrialLogo';

interface SpecModalProps {
  equipment: MedicalEquipment | null;
  onClose: () => void;
  onSelectForService: (eq: MedicalEquipment) => void;
}

export const SpecModal: React.FC<SpecModalProps> = ({ equipment, onClose, onSelectForService }) => {
  if (!equipment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-black/[0.08] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X size={18} />
        </button>

        {/* Header with Brial Logo */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-black/[0.04]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0080D7] mb-1">
              <Activity size={14} />
              <span>Ficha Técnica · {equipment.categoryLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#072042] tracking-tight">
              {equipment.name}
            </h3>
            <p className="text-xs text-[#86868b] mt-1">
              Modelo: {equipment.model} · Fabricante: {equipment.brand}
            </p>
          </div>
          <div className="shrink-0 hidden sm:block">
            <BrialLogo variant="compact" size="sm" />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#515154] leading-relaxed mb-6">
          {equipment.description}
        </p>

        {/* Metrological Specs Table */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-3">
            Especificaciones y Características Principales
          </h4>
          <div className="bg-[#f5f5f7] rounded-2xl overflow-hidden divide-y divide-black/[0.04] text-xs sm:text-sm">
            {equipment.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center px-4 py-3">
                <span className="text-[#86868b] font-medium">{spec.label}</span>
                <span className="font-semibold text-[#1d1d1f] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories / Tags */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-3">
            Aplicación Clínica
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {equipment.standards.map((std, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-[#f5f5f7] border border-black/[0.04] flex items-center gap-2 text-xs"
              >
                <CheckCircle size={14} className="text-[#0071e3] shrink-0" />
                <span className="font-medium text-[#1d1d1f] truncate">{std}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Brand Catalog Link */}
        <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold text-[#1d1d1f] block">Catálogo Oficial de la Marca</span>
            <span className="text-[11px] text-[#86868b]">Documentación técnica directa proporcionada por {equipment.brand}</span>
          </div>
          <a
            href={equipment.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-pill px-4 py-2 bg-white hover:bg-black/[0.04] text-[#0071e3] text-xs font-semibold border border-black/[0.08] inline-flex items-center justify-center gap-1.5 shadow-2xs transition-colors shrink-0"
          >
            <span>Ver Catálogo de la Marca</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Footer action: Only request service */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-black/[0.06]">
          <button
            onClick={onClose}
            className="apple-button-pill py-3 px-6 bg-[#f5f5f7] hover:bg-black/[0.06] text-[#1d1d1f] text-xs font-medium transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForService(equipment);
            }}
            className="apple-button-pill flex-1 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
          >
            <span>Solicitar Servicio para este Equipo</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

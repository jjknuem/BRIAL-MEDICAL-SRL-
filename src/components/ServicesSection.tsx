import React, { useState } from 'react';
import { Wrench, ShieldCheck, Activity, Gauge, CheckCircle2, AlertCircle, FileText, Download, X } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceRequestPayload, ServiceTicket } from '../types';
import { BrialLogo } from './BrialLogo';

interface ServicesSectionProps {
  initialEquipment?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ initialEquipment }) => {
  const [formData, setFormData] = useState<ServiceRequestPayload>({
    hospitalName: '',
    equipmentType: initialEquipment || '',
    serialNumber: '',
    issueDescription: '',
    urgency: 'Prioritaria (12h)',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    preferredDate: ''
  });

  React.useEffect(() => {
    if (initialEquipment) {
      setFormData((prev) => ({ ...prev, equipmentType: initialEquipment }));
    }
  }, [initialEquipment]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<ServiceTicket | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Wrench,
    ShieldCheck,
    Activity,
    Gauge
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.hospitalName.trim() || !formData.equipmentType.trim() || !formData.issueDescription.trim() || !formData.contactPhone.trim()) {
      setFormError('Por favor complete todos los campos obligatorios para generar su solicitud.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomId = Math.floor(1000 + Math.random() * 9000);
      
      const newTicket: ServiceTicket = {
        ticketId: `BM-${randomId}`,
        createdAt: new Date().toLocaleTimeString('es-DO', { hour: '2-digit', minute: '2-digit' }),
        hospitalName: formData.hospitalName,
        equipmentType: formData.equipmentType,
        urgency: formData.urgency,
        estimatedArrival: 'Atención oportuna Brial Medical',
        assignedEngineer: 'Equipo Técnico Brial Medical SRL',
        status: 'Recibido'
      };

      setGeneratedTicket(newTicket);
      setIsSubmitting(false);
    }, 750);
  };

  const handleResetForm = () => {
    setGeneratedTicket(null);
    setFormData({
      hospitalName: '',
      equipmentType: '',
      serialNumber: '',
      issueDescription: '',
      urgency: 'Prioritaria (12h)',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      preferredDate: ''
    });
  };

  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
            Servicios Especializados
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-5 text-balance">
            Soporte de ciclo de vida completo para tecnología médica.
          </h2>
          <p className="text-base text-[#86868b] leading-relaxed">
            Desde la pre-instalación y comisionamiento hospitalario hasta calibraciones metrológicas anuales y atención de contingencias críticas.
          </p>
        </div>

        {/* 4 Elegant Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES_LIST.map((service, index) => {
            const Icon = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.04] apple-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-semibold text-[#86868b] tracking-wider uppercase">
                      0{index + 1}. Servicio
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#0071e3] mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#515154] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/[0.05]">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#515154]">
                        <CheckCircle2 size={14} className="text-[#0071e3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs text-[#86868b]">
                  <span>{service.protocol}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formulario de Solicitud Limpio (Apple Minimalist Style) */}
        <div id="solicitud" className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.05] shadow-sm">
            <div className="max-w-xl mx-auto text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-2 block">
                Mesa de Control Biomédico
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Solicitud de Intervención Técnica
              </h3>
              <p className="text-sm text-[#86868b]">
                Complete los datos para enviar su solicitud técnica. El equipo de Brial Medical SRL atenderá su requerimiento con la mayor prontitud.
              </p>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50/80 border border-red-200/60 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Hospital & Equipment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Hospital o Institución Médica *
                  </label>
                  <input
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleInputChange}
                    placeholder="Ej. Hospital Ángeles, Centro Médico Nacional"
                    required
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Equipo o Dispositivo *
                  </label>
                  <input
                    type="text"
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleInputChange}
                    placeholder="Ej. Monitor Multiparámetro, Tomógrafo, Ventilador"
                    required
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Serial / Model & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Número de Serie / Modelo (Opcional)
                  </label>
                  <input
                    type="text"
                    name="serialNumber"
                    value={formData.serialNumber}
                    onChange={handleInputChange}
                    placeholder="Ej. SN-8942-B / Mod. Quantum 3.0"
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Nivel de Urgencia Operativa *
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none cursor-pointer"
                  >
                    <option value="Normal (48h)">Normal (Mantenimiento / Calibración regular - 48h)</option>
                    <option value="Prioritaria (12h)">Prioritaria (Equipo en falla con sustituto - 12h)</option>
                    <option value="Crítica - UCI / Quirófano (<2h)">Crítica - UCI / Quirófano (&lt; 2h inmediata)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Problem Description */}
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                  Descripción Técnica de la Falla o Solicitud *
                </label>
                <textarea
                  name="issueDescription"
                  rows={3}
                  value={formData.issueDescription}
                  onChange={handleInputChange}
                  placeholder="Detalle el síntoma, código de error en pantalla o servicio requerido..."
                  required
                  className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none resize-none"
                />
              </div>

              {/* Row 4: Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-black/[0.04]">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Responsable de Contacto *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Dr. / Ing. Biomédico"
                    required
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Teléfono Directo / Móvil *
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    placeholder="+1 (849) 000-0000"
                    required
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Correo Institucional
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="biomedica@hospital.com"
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#86868b]">
                  Atención técnica especializada y registro confidencial de la solicitud.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="apple-button-pill w-full sm:w-auto px-8 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm shadow-sm transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitiendo Orden a Central...' : 'Emitir Orden de Servicio'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal / Ticket Generation */}
      {generatedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-black/[0.08] shadow-2xl relative">
            <button
              onClick={handleResetForm}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">
                    Orden Oficial Emitida
                  </span>
                  <h4 className="text-lg font-bold text-[#1d1d1f]">
                    Ticket #{generatedTicket.ticketId}
                  </h4>
                </div>
              </div>
              <div className="hidden sm:block">
                <BrialLogo variant="compact" size="sm" />
              </div>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-5 mb-6 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-[#86868b]">Hospital / Centro:</span>
                <span className="font-semibold text-[#1d1d1f]">{generatedTicket.hospitalName}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-[#86868b]">Dispositivo:</span>
                <span className="font-semibold text-[#1d1d1f]">{generatedTicket.equipmentType}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-[#86868b]">Nivel de Prioridad:</span>
                <span className="font-semibold text-[#0071e3]">{generatedTicket.urgency}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-[#86868b]">Soporte Técnico:</span>
                <span className="font-semibold text-[#1d1d1f]">{generatedTicket.assignedEngineer}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#86868b]">Estado de la Solicitud:</span>
                <span className="font-bold text-emerald-600">{generatedTicket.status}</span>
              </div>
            </div>

            <p className="text-xs text-[#86868b] leading-relaxed mb-6">
              Hemos registrado su solicitud. Nuestro equipo técnico se comunicará directamente con su contacto para coordinar la asistencia o intervención técnica requerida.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  window.print();
                }}
                className="apple-button-pill flex-1 py-3 bg-[#f5f5f7] hover:bg-black/[0.08] text-[#1d1d1f] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download size={14} />
                <span>Imprimir Comprobante</span>
              </button>
              <button
                onClick={handleResetForm}
                className="apple-button-pill flex-1 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <span>Aceptar y Cerrar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

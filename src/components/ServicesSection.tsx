import React, { useState } from 'react';
import { Wrench, ShieldCheck, Activity, Gauge, CheckCircle2, AlertCircle, Download, X, Mail, Send, Copy, Check, ExternalLink } from 'lucide-react';
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
  const [emailDraft, setEmailDraft] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);
  const [copiedEmailBody, setCopiedEmailBody] = useState(false);
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

  const buildEmailDraft = (ticketId: string, data: ServiceRequestPayload) => {
    const subject = `[${ticketId}] Solicitud de Intervención Técnica - ${data.equipmentType} (${data.hospitalName})`;
    const body = [
      `SOLICITUD DE INTERVENCIÓN TÉCNICA (${ticketId})`,
      `--------------------------------------------------`,
      `Remitente: ${data.contactEmail}`,
      `Responsable de Contacto: ${data.contactPerson}`,
      `Teléfono Directo / Móvil: ${data.contactPhone}`,
      `Hospital / Institución Médica: ${data.hospitalName}`,
      `Equipo o Dispositivo: ${data.equipmentType}`,
      `Número de Serie / Modelo: ${data.serialNumber?.trim() || 'No especificado'}`,
      `Nivel de Urgencia Operativa: ${data.urgency}`,
      ``,
      `Descripción Técnica de la Falla o Solicitud:`,
      data.issueDescription.trim(),
    ].join('\n');

    const mailtoUrl = `mailto:info@brialmedical.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@brialmedical.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return { subject, body, mailtoUrl, gmailUrl };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (
      !formData.hospitalName.trim() ||
      !formData.equipmentType.trim() ||
      !formData.issueDescription.trim() ||
      !formData.contactPerson.trim() ||
      !formData.contactPhone.trim() ||
      !formData.contactEmail.trim()
    ) {
      setFormError('Por favor complete todos los campos obligatorios, incluido su correo electrónico.');
      return;
    }

    if (!emailRegex.test(formData.contactEmail.trim())) {
      setFormError('Por favor ingrese un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.ok || !result.ticket) {
        setFormError(result.error || 'No se pudo procesar la solicitud. Verifique los datos e intente nuevamente.');
        setIsSubmitting(false);
        return;
      }

      const ticket: ServiceTicket = result.ticket;
      const draft = buildEmailDraft(ticket.ticketId, formData);

      setEmailDraft(draft);
      setGeneratedTicket(ticket);

      if (!result.sentViaServer) {
        const mailLink = document.createElement('a');
        mailLink.href = draft.mailtoUrl;
        mailLink.style.display = 'none';
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);
      }
    } catch {
      setFormError('Error de conexión con el servidor al enviar la solicitud. Intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    if (!emailDraft) return;
    const fullText = `Para: info@brialmedical.com\nDe: ${formData.contactEmail}\nAsunto: ${emailDraft.subject}\n\n${emailDraft.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedEmailBody(true);
    setTimeout(() => setCopiedEmailBody(false), 2500);
  };

  const handleResetForm = () => {
    setGeneratedTicket(null);
    setEmailDraft(null);
    setCopiedEmailBody(false);
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
                    Correo Electrónico del Solicitante *
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="su-correo@institucion.com"
                    required
                    className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#86868b]">
                  La solicitud se enviará desde su correo hacia <strong className="text-[#1d1d1f]">info@brialmedical.com</strong>.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="apple-button-pill w-full sm:w-auto px-8 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm shadow-sm transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Procesando Solicitud...' : 'Enviar Solicitud a Brial Medical'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation / Direct Email Dispatch Modal */}
      {generatedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-black/[0.08] shadow-2xl relative">
            <button
              onClick={handleResetForm}
              aria-label="Cerrar"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06]">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${generatedTicket.sentViaServer ? 'bg-emerald-50 text-emerald-600' : 'bg-[#0071e3]/10 text-[#0071e3]'}`}>
                  {generatedTicket.sentViaServer ? <CheckCircle2 size={24} /> : <Mail size={24} />}
                </div>
                <div>
                  <span className={`text-xs font-semibold tracking-wider uppercase ${generatedTicket.sentViaServer ? 'text-emerald-600' : 'text-[#0071e3]'}`}>
                    {generatedTicket.sentViaServer ? 'Correo Enviado Correctamente' : 'Listo para Enviar por Correo'}
                  </span>
                  <h4 className="text-lg font-bold text-[#1d1d1f]">
                    Orden #{generatedTicket.ticketId}
                  </h4>
                </div>
              </div>
              <div className="hidden sm:block">
                <BrialLogo variant="compact" size="sm" />
              </div>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-5 mb-5 space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04] gap-3">
                <span className="text-[#86868b] shrink-0">De (Su Correo):</span>
                <span className="font-semibold text-[#1d1d1f] truncate">{generatedTicket.fromEmail}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04] gap-3">
                <span className="text-[#86868b] shrink-0">Para:</span>
                <span className="font-semibold text-[#0071e3] truncate">{generatedTicket.toEmail}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04] gap-3">
                <span className="text-[#86868b] shrink-0">Hospital / Centro:</span>
                <span className="font-semibold text-[#1d1d1f] truncate">{generatedTicket.hospitalName}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04] gap-3">
                <span className="text-[#86868b] shrink-0">Dispositivo:</span>
                <span className="font-semibold text-[#1d1d1f] truncate">{generatedTicket.equipmentType}</span>
              </div>
              <div className="flex justify-between items-center py-1 gap-3">
                <span className="text-[#86868b] shrink-0">Nivel de Prioridad:</span>
                <span className="font-semibold text-[#0071e3] truncate">{generatedTicket.urgency}</span>
              </div>
            </div>

            {generatedTicket.sentViaServer ? (
              <>
                <p className="text-xs text-[#515154] leading-relaxed mb-6">
                  Su solicitud técnica fue enviada directamente a <strong className="text-[#1d1d1f]">{generatedTicket.toEmail}</strong> con dirección de respuesta (<span className="font-medium">Reply-To</span>) hacia <strong className="text-[#1d1d1f]">{generatedTicket.fromEmail}</strong>. Nuestro equipo técnico responderá a la brevedad.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => window.print()}
                    className="apple-button-pill flex-1 py-3 bg-[#f5f5f7] hover:bg-black/[0.08] text-[#1d1d1f] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Imprimir Comprobante</span>
                  </button>
                  <button
                    onClick={handleResetForm}
                    className="apple-button-pill flex-1 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Aceptar y Cerrar</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs text-[#515154] leading-relaxed mb-5">
                  Para enviar el correo directamente desde <strong className="text-[#1d1d1f]">{generatedTicket.fromEmail}</strong> hacia <strong className="text-[#1d1d1f]">{generatedTicket.toEmail}</strong>, confirme el envío en su aplicación de correo o use Gmail Web:
                </p>

                {emailDraft && (
                  <div className="space-y-2.5 mb-5">
                    <a
                      href={emailDraft.mailtoUrl}
                      className="apple-button-pill w-full py-3.5 px-5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <Send size={15} />
                      <span>Abrir App de Correo y Enviar</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={emailDraft.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-button-pill py-2.5 px-4 bg-[#f5f5f7] hover:bg-black/[0.08] text-[#1d1d1f] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Enviar con Gmail</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="apple-button-pill py-2.5 px-4 bg-[#f5f5f7] hover:bg-black/[0.08] text-[#1d1d1f] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedEmailBody ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                        <span>{copiedEmailBody ? 'Copiado' : 'Copiar Correo'}</span>
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleResetForm}
                  className="w-full py-2.5 text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

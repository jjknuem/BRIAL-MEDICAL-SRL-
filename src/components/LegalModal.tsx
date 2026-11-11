import React, { useEffect } from 'react';
import { X, Shield, FileText, CheckCircle2, Lock, Building2, Wrench, Mail, Phone, MapPin } from 'lucide-react';
import { BrialLogo } from './BrialLogo';

export type LegalDocType = 'privacy' | 'terms';

interface LegalModalProps {
  type: LegalDocType;
  isOpen: boolean;
  onClose: () => void;
  onSwitchType: (type: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  isOpen,
  onClose,
  onSwitchType,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-black/[0.08] overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-black/[0.06] flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <BrialLogo variant="compact" size="sm" />
            <div className="h-5 w-px bg-black/[0.1]" />
            <div className="flex gap-1 bg-[#f5f5f7] p-1 rounded-xl">
              <button
                onClick={() => onSwitchType('privacy')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  type === 'privacy'
                    ? 'bg-white text-[#072042] shadow-sm font-semibold'
                    : 'text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => onSwitchType('terms')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  type === 'terms'
                    ? 'bg-white text-[#072042] shadow-sm font-semibold'
                    : 'text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                Términos de Servicio Biomédico
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-full hover:bg-black/5 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-[#1d1d1f]">
          {type === 'privacy' ? (
            /* PRIVACY POLICY CONTENT */
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0080D7] mb-2">
                  <Shield className="w-4 h-4" />
                  <span>Protección Institucional y Tratamiento de Información</span>
                </div>
                <h2 id="legal-modal-title" className="text-2xl sm:text-3xl font-bold text-[#072042] tracking-tight">
                  Política de Privacidad
                </h2>
                <p className="text-sm text-[#86868b] mt-1">
                  Brial Medical SRL · Santo Domingo, República Dominicana · Vigencia actualizada
                </p>
              </div>

              {/* Introduction */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] text-sm text-[#48484a] leading-relaxed">
                En <strong className="text-[#072042]">Brial Medical SRL</strong> reconocemos la importancia estratégica y la confidencialidad de la información gestionada por hospitales, clínicas, laboratorios clínicos y centros de investigación con los que colaboramos. Esta Política describe cómo recopilamos, protegemos y gestionamos los datos corporativos, técnicos y de contacto.
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0080D7]" />
                  1. Datos que Recopilamos
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Recopilamos únicamente los datos necesarios para brindar asesoría profesional, provisión de equipos y soporte técnico especializado:
                </p>
                <ul className="text-sm text-[#48484a] space-y-2 list-disc list-inside pl-2">
                  <li><strong>Datos de contacto institucional:</strong> Nombre de la institución médica, departamento o servicio solicitante, nombre y cargo del contacto responsable, teléfono corporativo y correo electrónico.</li>
                  <li><strong>Información técnica del equipamiento:</strong> Marca, modelo, número de serie, ubicación dentro del centro de salud, historial de fallas y especificaciones de instalación de equipos de laboratorio, quirófano, UCI, urgencias o esterilización.</li>
                  <li><strong>Registros de solicitudes de servicio:</strong> Detalles de requerimientos técnicos formulados a través de nuestros canales oficiales o formulario en línea.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#0080D7]" />
                  2. Uso y Finalidad de la Información
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  La información recopilada se destina exclusivamente a:
                </p>
                <ul className="text-sm text-[#48484a] space-y-2 list-disc list-inside pl-2">
                  <li>Coordinar intervenciones técnicas, mantenimientos preventivos y reparaciones correctivas con agilidad.</li>
                  <li>Elaborar cotizaciones y propuestas técnicas comerciales solicitadas por las instituciones de salud.</li>
                  <li>Mantener la trazabilidad de los servicios técnicos prestados e historiales de calibración de cada equipo.</li>
                  <li>Garantizar una atención oportuna y personalizada conforme a los estándares éticos del sector salud.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0080D7]" />
                  3. Confidencialidad y No Divulgación
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Brial Medical SRL no vende, no alquila ni comercializa datos institucionales ni de contacto a terceros. Nuestro personal técnico y administrativo opera bajo estrictos compromisos de confidencialidad respecto a los protocolos, instalaciones e información interna de las instituciones clientes.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0080D7]" />
                  4. Canales de Contacto y Rectificación
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Para actualizar sus datos de contacto institucional o ejercer sus derechos de consulta y rectificación, puede comunicarse directamente con nuestra sede:
                </p>
                <div className="p-4 rounded-xl bg-[#f5f5f7] text-xs text-[#1d1d1f] space-y-1">
                  <p><strong>Brial Medical SRL</strong></p>
                  <p>Correo electrónico: <a href="mailto:info@brialmedical.com" className="text-[#0080D7] hover:underline">info@brialmedical.com</a></p>
                  <p>Teléfono: <a href="tel:+18492069412" className="text-[#0080D7] hover:underline">+1 (849) 206-9412</a></p>
                  <p>Santo Domingo, República Dominicana</p>
                </div>
              </div>
            </div>
          ) : (
            /* TERMS OF BIOMEDICAL SERVICE CONTENT */
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0080D7] mb-2">
                  <FileText className="w-4 h-4" />
                  <span>Condiciones Técnicas y Operativas de Servicio</span>
                </div>
                <h2 id="legal-modal-title" className="text-2xl sm:text-3xl font-bold text-[#072042] tracking-tight">
                  Términos de Servicio Biomédico
                </h2>
                <p className="text-sm text-[#86868b] mt-1">
                  Brial Medical SRL · Santo Domingo, República Dominicana · Vigencia actualizada
                </p>
              </div>

              {/* Introduction */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] text-sm text-[#48484a] leading-relaxed">
                Los presentes términos regulan la provisión de equipos médicos y de laboratorio, insumos, reactivos e intervenciones de ingeniería y servicio técnico biomédico brindados por <strong className="text-[#072042]">Brial Medical SRL</strong> a instituciones públicas y privadas de salud en la República Dominicana.
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0080D7]" />
                  1. Alcance de los Servicios Técnicos
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Brial Medical SRL ofrece servicios especializados tanto para equipos suministrados por nosotros como para equipos multimarca existentes en las instalaciones del cliente:
                </p>
                <ul className="text-sm text-[#48484a] space-y-2 list-disc list-inside pl-2">
                  <li><strong>Mantenimiento Preventivo Especializado:</strong> Inspecciones periódicas, limpieza interna, lubricación, sustitución de consumibles y verificación de calibración según pautas del fabricante.</li>
                  <li><strong>Mantenimiento Correctivo:</strong> Diagnóstico técnico, reparación electrónica, mecánica u óptica, y reemplazo de partes dañadas con informe técnico de intervención.</li>
                  <li><strong>Instalación y Puesta en Marcha:</strong> Verificación de acometidas eléctricas, hidráulicas y ambientales, nivelación, pruebas funcionales y puesta en servicio.</li>
                  <li><strong>Cobertura Multimarca Universal:</strong> Realizamos mantenimiento de cualquier equipo médico o de laboratorio clínico e industrial, independientemente de la marca o si figura en nuestro catálogo referencial.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0080D7]" />
                  2. Acceso y Condiciones en Instalaciones del Cliente
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Para intervenciones en áreas críticas (Quirófano, UCI, Urgencias, CEMI o Laboratorios):
                </p>
                <ul className="text-sm text-[#48484a] space-y-2 list-disc list-inside pl-2">
                  <li>El cliente facilitará el acceso seguro a las áreas correspondientes y coordinará con el personal de ingeniería biomédica o jefatura de área.</li>
                  <li>Los equipos entregados para mantenimiento deben estar debidamente desinfectados y descontaminados conforme a las normas de bioseguridad hospitalaria.</li>
                  <li>Brial Medical SRL cumple con todas las medidas de bioseguridad, porte de EPP adecuado y protocolos de asepsia requeridos por la institución.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0080D7]" />
                  3. Informes Técnicos y Garantía de Servicio
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Cada intervención técnica concluye con la emisión de un informe de servicio o acta de conformidad detallando:
                </p>
                <ul className="text-sm text-[#48484a] space-y-2 list-disc list-inside pl-2">
                  <li>Datos de identificación del equipo (marca, modelo, serial, ubicación).</li>
                  <li>Diagnóstico inicial, acciones correctivas o preventivas ejecutadas y repuestos instalados.</li>
                  <li>Parámetros de funcionamiento verificados y recomendaciones técnicas operativas para el personal usuario.</li>
                  <li>Firma del ingeniero/técnico biomédico actuante y del responsable del centro de salud.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#072042] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0080D7]" />
                  4. Sede Única y Cobertura Nacional
                </h3>
                <p className="text-sm text-[#48484a] leading-relaxed">
                  Brial Medical SRL opera desde su sede central en Santo Domingo (18°31'33.7"N 70°01'44.4"W) y brinda atención técnica y despacho de equipos y consumibles a nivel nacional en la República Dominicana.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-black/[0.06] bg-[#fafafc] flex items-center justify-between text-xs text-[#86868b]">
          <span>Brial Medical SRL · Santo Domingo, R.D.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#072042] text-white font-medium hover:bg-[#0080D7] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

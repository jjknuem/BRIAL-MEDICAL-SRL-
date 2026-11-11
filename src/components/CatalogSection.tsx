import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  ExternalLink, 
  Layers, 
  Sparkles,
  Stethoscope,
  HeartPulse,
  Flame,
  ShieldCheck,
  FlaskConical
} from 'lucide-react';
import { MEDICAL_EQUIPMENT_DATA } from '../data/mockData';
import { MedicalArea, MedicalEquipment } from '../types';

interface CatalogSectionProps {
  onSelectForService: (equipment: MedicalEquipment) => void;
  onSelectForSpec: (equipment: MedicalEquipment) => void;
  isOpen?: boolean;
  onToggleOpen?: (open: boolean) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectForService,
  onSelectForSpec,
  isOpen: isOpenProp,
  onToggleOpen
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<MedicalArea>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const isCatalogOpen = isOpenProp !== undefined ? isOpenProp : internalIsOpen;

  const handleToggle = (open: boolean) => {
    if (onToggleOpen) {
      onToggleOpen(open);
    } else {
      setInternalIsOpen(open);
    }
  };

  const areaTabs: { id: MedicalArea; label: string; count?: number }[] = [
    { id: 'todos', label: 'Todos los Equipos' },
    { id: 'quirofano', label: 'Quirófano y Anestesia' },
    { id: 'uci', label: 'Cuidados Intensivos (UCI)' },
    { id: 'urgencias', label: 'Urgencias y Emergencias' },
    { id: 'esterilizacion', label: 'Central de Esterilización' },
    { id: 'quimica_clinica', label: 'Química Clínica' },
    { id: 'centrifugas', label: 'Centrífugas' },
    { id: 'hematologia', label: 'Hematología' },
    { id: 'apoyo_muestras', label: 'Apoyo y Muestras' }
  ];

  const filteredEquipment = MEDICAL_EQUIPMENT_DATA.filter((item) => {
    const matchesArea = activeArea === 'todos' || item.area === activeArea;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesSearch;
  });

  const clinicalAreasOverview = [
    {
      title: 'Quirófano y Anestesia',
      desc: 'Máquinas de anestesia, monitores multiparamétricos, mesas, lámparas cialíticas, electrobisturíes y torres de laparoscopia.',
      icon: Stethoscope,
      areaKey: 'quirofano' as MedicalArea
    },
    {
      title: 'Cuidados Intensivos (UCI)',
      desc: 'Ventiladores pulmonares avanzados, bombas de infusión, desfibriladores/marcapasos y camas clínicas automatizadas.',
      icon: HeartPulse,
      areaKey: 'uci' as MedicalArea
    },
    {
      title: 'Urgencias y Emergencias',
      desc: 'Carros de paro equipados, electrocardiógrafos de 12 derivaciones, desfibriladores portátiles y aspiradores de secreciones.',
      icon: Flame,
      areaKey: 'urgencias' as MedicalArea
    },
    {
      title: 'Central de Esterilización (CEMI)',
      desc: 'Autoclaves de vapor de alta capacidad, esterilizadores por peróxido/óxido de etileno y lavadoras termodesinfectadoras.',
      icon: ShieldCheck,
      areaKey: 'esterilizacion' as MedicalArea
    },
    {
      title: 'Laboratorio Clínico e Industrial',
      desc: 'Analizadores de química clínica (Chemray y afines), centrífugas clínicas, hemocitómetros y preparación de muestras.',
      icon: FlaskConical,
      areaKey: 'quimica_clinica' as MedicalArea
    }
  ];

  return (
    <section id="catalogo" className="py-24 bg-white border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0080D7] mb-3">
            Catálogo de Equipos y Soporte Multimarca
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072042] mb-4 text-balance">
            Tecnología médica y servicio técnico integral.
          </h2>
          <p className="text-base text-[#86868b] leading-relaxed">
            Ofrecemos venta, instalación y mantenimiento técnico para Quirófano, UCI, Urgencias, Esterilización y Laboratorio Clínico. Damos soporte y reparación a cualquier otro equipo médico o de laboratorio de su centro de salud.
          </p>
        </div>

        {/* Closed/Collapsed State: Sleek Banner with Overview Cards + Primary Deploy Button */}
        {!isCatalogOpen ? (
          <div className="max-w-4xl mx-auto">
            {/* Clinical Areas Grid Teaser */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {clinicalAreasOverview.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveArea(item.areaKey);
                      handleToggle(true);
                    }}
                    className="p-5 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] hover:bg-black/[0.03] transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-white text-[#0080D7] flex items-center justify-center shadow-2xs mb-3 group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1d1d1f] mb-1.5 group-hover:text-[#0071e3] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#86868b] leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-medium text-[#0080D7]">
                      <span>Ver equipos de esta área</span>
                      <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Master Card to Unfold Catalog or Request Service for ANY equipment */}
            <div className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#f5f5f7] to-[#ebebf0] border border-black/[0.05] shadow-xs">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full bg-white text-[#072042] text-xs font-semibold shadow-2xs">
                <Layers size={13} className="text-[#0080D7]" />
                <span>Catálogo de Referencia & Soporte Universal</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#072042] mb-3">
                ¿Busca un equipo específico o requiere servicio técnico?
              </h3>
              <p className="text-xs sm:text-sm text-[#515154] max-w-xl mx-auto mb-6 leading-relaxed">
                Brindamos instalación, reparación y mantenimiento preventivo y correctivo para <strong>cualquier equipo médico o de laboratorio</strong>, figure o no en esta lista de referencia.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => handleToggle(true)}
                  className="apple-button-pill w-full sm:w-auto px-7 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <span>Desplegar Catálogo de Referencia</span>
                  <ChevronDown size={15} />
                </button>
                <button
                  onClick={() => onSelectForService({
                    id: 'custom-equipment',
                    name: 'Equipo Médico / De Laboratorio General',
                    model: 'Cualquier Modelo o Fabricante',
                    area: 'todos',
                    categoryLabel: 'Servicio Técnico Integral',
                    headline: 'Mantenimiento preventivo, correctivo o instalación para cualquier equipo',
                    description: '',
                    image: '',
                    specs: [],
                    standards: [],
                    brand: 'Multimarca',
                    officialUrl: ''
                  })}
                  className="apple-button-pill w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-black/[0.04] text-[#072042] text-xs sm:text-sm font-semibold border border-black/[0.08] inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Solicitar Servicio para Otro Equipo</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Expanded State: Filter Controls + Equipment Cards + Collapse Trigger */
          <div className="animate-in fade-in duration-300">
            {/* Top Notice: Maintenance for ANY equipment */}
            <div className="mb-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-[#072042]">
                ℹ️ <strong>Recordatorio:</strong> Damos mantenimiento técnico e instalación a <strong>cualquier equipo médico o de laboratorio</strong>, esté o no presente en este listado de referencia.
              </span>
              <button
                onClick={() => onSelectForService({
                  id: 'custom-equipment',
                  name: 'Equipo Médico / De Laboratorio General',
                  model: 'Cualquier Modelo o Fabricante',
                  area: 'todos',
                  categoryLabel: 'Servicio Técnico Integral',
                  headline: 'Mantenimiento preventivo, correctivo o instalación para cualquier equipo',
                  description: '',
                  image: '',
                  specs: [],
                  standards: [],
                  brand: 'Multimarca',
                  officialUrl: ''
                })}
                className="font-semibold text-[#0080D7] hover:underline shrink-0 text-left cursor-pointer"
              >
                Solicitar para otro equipo →
              </button>
            </div>

            {/* Top Bar with Collapse Option */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-black/[0.05]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1d1d1f] uppercase tracking-wider">
                  Listado de Equipos de Referencia
                </span>
              </div>
              <button
                onClick={() => handleToggle(false)}
                className="apple-button-pill px-4 py-2 bg-[#f5f5f7] hover:bg-black/[0.06] text-[#515154] text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Contraer Catálogo</span>
                <ChevronUp size={14} />
              </button>
            </div>

            {/* Filter Controls: Apple Segmented Tabs + Search Bar */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
              {/* Segmented Control Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#f5f5f7] rounded-xl overflow-x-auto max-w-full scrollbar-none w-full lg:w-auto">
                {areaTabs.map((tab) => {
                  const isActive = activeArea === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveArea(tab.id)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold'
                          : 'text-[#86868b] hover:text-[#1d1d1f]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Minimal Search Bar */}
              <div className="relative w-full lg:w-72">
                <Search size={16} className="absolute left-3.5 top-2.5 text-[#86868b]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por equipo, marca, modelo..."
                  className="w-full pl-10 pr-4 py-2 bg-[#f5f5f7] border-0 rounded-xl text-xs sm:text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:bg-white focus:ring-2 focus:ring-[#0071e3] outline-none transition-all"
                />
              </div>
            </div>

            {/* Results Count & Current Filter */}
            <div className="flex items-center justify-between text-xs text-[#86868b] mb-6 px-1">
              <span>Mostrando {filteredEquipment.length} equipos especializados</span>
              <span className="hidden sm:inline">Todos los equipos cuentan con opción de solicitud de servicio técnico</span>
            </div>

            {/* Product Specification Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEquipment.map((equipment) => (
                <div
                  key={equipment.id}
                  className="bg-[#f5f5f7] rounded-3xl p-7 sm:p-8 border border-black/[0.04] apple-card-hover flex flex-col justify-between group"
                >
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-semibold text-[#0071e3] tracking-wide uppercase">
                        {equipment.categoryLabel}
                      </span>
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[#515154] shadow-2xs truncate max-w-[140px]">
                        {equipment.model}
                      </span>
                    </div>

                    {/* Equipment Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2.5">
                      {equipment.name}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed mb-6">
                      {equipment.headline}
                    </p>

                    {/* Technical Specifications preview */}
                    <div className="space-y-2 pt-4 pb-6 border-t border-black/[0.05] text-[12px]">
                      {equipment.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-start justify-between gap-3">
                          <span className="text-[#86868b] shrink-0 font-medium">{spec.label}:</span>
                          <span className="font-semibold text-[#1d1d1f] text-right truncate">{spec.value}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between gap-3 pt-2 text-[11px] border-t border-black/[0.03]">
                        <span className="text-[#86868b] font-medium">Fabricante: <strong className="text-[#1d1d1f]">{equipment.brand}</strong></span>
                        <a
                          href={equipment.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] font-medium hover:underline transition-colors"
                          title={`Ver catálogo oficial de ${equipment.brand}`}
                        >
                          <span>Catálogo Oficial</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <button
                      onClick={() => onSelectForSpec(equipment)}
                      className="apple-button-pill flex-1 py-2.5 bg-white hover:bg-black/[0.04] text-[#1d1d1f] text-xs font-medium border border-black/[0.06] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye size={13} />
                      <span>Ver Ficha</span>
                    </button>
                    <button
                      onClick={() => onSelectForService(equipment)}
                      className="apple-button-pill flex-1 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                    >
                      <span>Solicitar Servicio</span>
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredEquipment.length === 0 && (
              <div className="text-center py-16 bg-[#f5f5f7] rounded-3xl p-8">
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
                  No se encontraron equipos bajo ese criterio.
                </p>
                <p className="text-xs text-[#86868b] mb-4">
                  Consulte con nuestros ingenieros para configuraciones técnicas personalizadas.
                </p>
                <button
                  onClick={() => {
                    setActiveArea('todos');
                    setSearchQuery('');
                  }}
                  className="apple-button-pill px-6 py-2 bg-[#1d1d1f] text-white text-xs font-medium cursor-pointer"
                >
                  Restablecer Filtros
                </button>
              </div>
            )}

            {/* Bottom Collapse Button */}
            <div className="mt-14 text-center">
              <button
                onClick={() => {
                  handleToggle(false);
                  const el = document.getElementById('catalogo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="apple-button-pill px-6 py-3 bg-[#f5f5f7] hover:bg-black/[0.06] text-[#515154] text-xs font-medium inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Contraer Catálogo de Equipos</span>
                <ChevronUp size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

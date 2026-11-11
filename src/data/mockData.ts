import { MedicalEquipment, ServiceItem, ServiceLocation } from '../types';

export const COMPANY_INFO = {
  name: 'Brial Medical SRL',
  status: 'Activo',
  startDate: '3 de mayo de 2022',
  activity: 'Venta al por mayor de instrumentos y equipos médicos y de laboratorio',
  phone: '+1 (849) 206-9412',
  phoneRaw: '+18492069412',
  email: 'info@brialmedical.com',
  instagramName: 'Brial Medical Services',
  instagramHandle: '@brial_medicalservices',
  instagramUrl: 'https://www.instagram.com/brial_medicalservices/',
  coordinates: {
    lat: 18.526028,
    lng: -70.029000,
    formatted: '18°31\'33.7"N 70°01\'44.4"W'
  },
  city: 'Santo Domingo',
  country: 'República Dominicana',
  address: 'Santo Domingo, República Dominicana (18°31\'33.7"N 70°01\'44.4"W)'
};

export const COMPANY_MISSION = 
  "Proveer equipos médicos y de laboratorio, reactivos, insumos y servicios técnicos especializados que contribuyan al funcionamiento eficiente y confiable de las instituciones de salud, ofreciendo soluciones de calidad, asesoría profesional y atención oportuna que respondan a las necesidades de nuestros clientes.";

export const COMPANY_VISION = 
  "Ser una empresa referente en la República Dominicana en la comercialización de equipos médicos y de laboratorio, reconocida por la calidad de sus productos, la excelencia de su servicio técnico, la confianza de sus clientes y su compromiso con el desarrollo del sector salud.";

export const COMPANY_VALUES = [
  {
    number: '01',
    title: 'Calidad',
    description: 'Ofrecer productos y servicios que cumplan con los estándares requeridos para el sector salud.',
    iconName: 'Award'
  },
  {
    number: '02',
    title: 'Responsabilidad',
    description: 'Cumplir nuestros compromisos con seriedad, transparencia y puntualidad.',
    iconName: 'Clock'
  },
  {
    number: '03',
    title: 'Integridad',
    description: 'Actuar con honestidad, ética y respeto en todas nuestras relaciones comerciales.',
    iconName: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Compromiso',
    description: 'Atender las necesidades de nuestros clientes con dedicación y disposición para encontrar soluciones.',
    iconName: 'Target'
  },
  {
    number: '05',
    title: 'Innovación',
    description: 'Mantenernos actualizados con los avances tecnológicos que aporten valor a las instituciones de salud.',
    iconName: 'Sparkles'
  },
  {
    number: '06',
    title: 'Excelencia en el servicio',
    description: 'Brindar atención personalizada, asesoría profesional y soporte técnico oportuno.',
    iconName: 'HeartPulse'
  },
  {
    number: '07',
    title: 'Confianza',
    description: 'Construir relaciones comerciales duraderas basadas en la transparencia, el cumplimiento y la credibilidad.',
    iconName: 'Shield'
  },
  {
    number: '08',
    title: 'Trabajo en equipo',
    description: 'Fomentar la colaboración, el respeto y el aprendizaje continuo para alcanzar objetivos comunes.',
    iconName: 'Users'
  }
];

export const MEDICAL_EQUIPMENT_DATA: MedicalEquipment[] = [
  // 1. ANALIZADORES DE QUÍMICA CLÍNICA
  {
    id: 'eq-qc-rayto-800',
    name: 'Rayto Chemray 800',
    model: 'Chemray 800 Automated Clinical Chemistry System',
    area: 'quimica_clinica',
    categoryLabel: 'Química Clínica Automatizada',
    headline: 'Analizador bioquímico de alto rendimiento con 800 tests/hora para laboratorios de alta demanda',
    description: 'Sistema de química clínica completamente automatizado y de acceso aleatorio. Equipado con 160 cubetas de reacción de cuarzo reutilizables, lavador automático de 8 pasos, refrigeración continua para 160 reactivos y muestreador de alta capacidad con código de barras integrado.',
    image: '/src/assets/images/rayto_chemray_analyzer_1794353897670.jpg',
    specs: [
      { label: 'Velocidad de procesamiento', value: '800 tests/hora (hasta 1200 tests/hora con ISE opcional)' },
      { label: 'Posiciones de reactivos', value: '160 posiciones con sistema de refrigeración Peltier 24h (2-8°C)' },
      { label: 'Volumen de muestra', value: '1.5 µL - 35 µL con detección de coágulos y burbujas' },
      { label: 'Sistema óptico', value: 'Rejilla holográfica cóncava de 12 longitudes de onda (340-800 nm)' }
    ],
    standards: ['CE-IVD', 'FDA Cleared'],
    brand: 'Rayto',
    officialUrl: 'http://www.rayto.com/product/chemistry-analyzer/'
  },
  {
    id: 'eq-qc-rayto-240',
    name: 'Rayto Chemray 240 / 330',
    model: 'Chemray 240 / 330 Series',
    area: 'quimica_clinica',
    categoryLabel: 'Química Clínica Automatizada',
    headline: 'Analizador compacto de acceso aleatorio ideal para laboratorios medianos y ambulatorios',
    description: 'Equipo de sobremesa flexible y confiable con rendimiento constante de 240 a 330 pruebas/hora. Cuenta con sensor de nivel de reactivo, protección anticolisión vertical y horizontal, aguja de muestreo precalentada y bajo consumo de agua.',
    image: '/src/assets/images/rayto_chemray_analyzer_1794353897670.jpg',
    specs: [
      { label: 'Rendimiento constante', value: '240 a 330 tests fotométricos por hora' },
      { label: 'Bandeja de muestras / reactivos', value: '40 a 80 posiciones combinables con enfriamiento 24h' },
      { label: 'Consumo de agua', value: 'Ultra bajo: ≤ 4.5 L/hora de agua desionizada' },
      { label: 'Software de control', value: 'Interfaz intuitiva compatible con LIS bidireccional (HL7)' }
    ],
    standards: ['CE-IVD'],
    brand: 'Rayto',
    officialUrl: 'http://www.rayto.com/product/chemistry-analyzer/'
  },
  {
    id: 'eq-qc-mindray-bs',
    name: 'Mindray BS-240 / BS-400',
    model: 'Mindray BS Series (BS-200 / BS-240 / BS-400)',
    area: 'quimica_clinica',
    categoryLabel: 'Química Clínica Automatizada',
    headline: 'Analizador bioquímico de sobremesa con fotometría de precisión y mezclador independiente',
    description: 'Reconocida serie de bioquímica clínica que combina robustez analítica, mínimo volumen de reacción (100 µL) y mezclador independiente para garantizar homogeneidad óptima en suero, plasma y orina. Pantalla táctil y monitoreo en tiempo real de curva de reacción.',
    image: '/src/assets/images/mindray_bs_biochem_1794353898464.jpg',
    specs: [
      { label: 'Rendimiento analítico', value: '200 a 400 tests/hora constantes según modelo' },
      { label: 'Volumen mínimo de reacción', value: '100 µL (ahorro significativo de reactivo)' },
      { label: 'Muestreo STAT', value: 'Prioridad inmediata para muestras de emergencia' },
      { label: 'Longitudes de onda', value: 'Fotometría invertida de 8 longitudes (340-670 nm)' }
    ],
    standards: ['CE-IVD', 'FDA 510(k)'],
    brand: 'Mindray',
    officialUrl: 'https://www.mindray.com/es/products/laboratory-diagnostics/chemistry/'
  },
  {
    id: 'eq-qc-roche-cobas',
    name: 'Roche Cobas c 311 / c 501',
    model: 'Cobas c Series (c 311 / c 501 / c 502)',
    area: 'quimica_clinica',
    categoryLabel: 'Química Clínica Automatizada',
    headline: 'Estándar global en consolidación de pruebas bioquímicas para laboratorios de alto volumen',
    description: 'Plataforma líder para química clínica e inmunoturbidimetría con casetes de reactivo listos para usar (Cobas c pack), ultrasonido para homogeneización libre de contacto y tiempo de estabilidad a bordo prolongado.',
    image: '/src/assets/images/roche_cobas_analyzer_1794353899497.jpg',
    specs: [
      { label: 'Rendimiento', value: 'Hasta 1000 tests/hora con módulo ISE' },
      { label: 'Manejo de reactivos', value: 'Cobas c pack sellado con código de barras de lectura automática' },
      { label: 'Detección de integridad', value: 'Índices séricos automáticos (hemólisis, ictericia, lipemia)' },
      { label: 'Conectividad', value: 'Cobas link y telemetría de servicio directo' }
    ],
    standards: ['CE-IVD', 'FDA Cleared'],
    brand: 'Roche Diagnostics',
    officialUrl: 'https://diagnostics.roche.com/'
  },
  {
    id: 'eq-qc-beckman-au',
    name: 'Beckman Coulter AU480 / AU680',
    model: 'AU Series (AU480 / AU680)',
    area: 'quimica_clinica',
    categoryLabel: 'Química Clínica Automatizada',
    headline: 'Máxima durabilidad, cubetas de vidrio permanente y bajo costo por determinación',
    description: 'Sistema insigne de alta confiabilidad analítica con cubetas permanentes de vidrio de cuarzo de por vida, micro-volumen de muestra y electrodos ISE de larga duración. Diseñado para trabajo continuo 24/7 sin paradas imprevistas.',
    image: '/src/assets/images/beckman_au_analyzer_1794353899400.jpg',
    specs: [
      { label: 'Velocidad', value: '400 fotométricos/h (AU480) a 800 fotométricos/h (AU680)' },
      { label: 'Cubetas de reacción', value: 'Vidrio de cuarzo permanente (sin consumibles plásticos)' },
      { label: 'Carga de muestras', value: 'Alimentador continuo en racks con detección de coágulos' },
      { label: 'Menú analítico', value: 'Más de 125 ensayos validados (metabolitos, proteínas, drogas terapéuticas)' }
    ],
    standards: ['Laboratorio Clínico', 'Bioquímica Automatizada'],
    brand: 'Beckman Coulter',
    officialUrl: 'https://www.beckmancoulter.com/products/chemistry'
  },

  // 2. CENTRÍFUGAS DE LABORATORIO
  {
    id: 'eq-cent-eppendorf-5702',
    name: 'Eppendorf Centrifuge 5702 / 5810 R',
    model: 'Eppendorf Series 5702 / 5810R (Refrigerada y Estándar)',
    area: 'centrifugas',
    categoryLabel: 'Centrifugación y Separación de Fases',
    headline: 'Centrífuga de mesa de alta precisión para tubos clínicos de ensayo y viales cónicos',
    description: 'Equipos indispensables para la preparación de suero y plasma con control digital microprocesado. Sistema patentado FastTemp para preenfriamiento ultrarrápido (modelo 5810R refrigerado de -9°C a +40°C), tapa motorizada silenciosa y rotores basculantes con tapas herméticas aerosol-tight.',
    image: '/src/assets/images/lab_centrifuge_hettich_1794353388236.jpg',
    specs: [
      { label: 'Velocidad máxima', value: 'Hasta 14,000 RPM (20,800 × g) según rotor' },
      { label: 'Capacidad máxima', value: '4 × 750 mL o hasta 48 tubos de sangre de 15 mL' },
      { label: 'Rango de temperatura', value: '-9°C a +40°C con función ecológica ECO shut-off' },
      { label: 'Seguridad', value: 'Bloqueo automático de tapa, sensor de desbalance y contención de aerosoles' }
    ],
    standards: ['IEC 61010-2-020', 'CE Marked', 'Dispositivo de Laboratorio Clínico'],
    brand: 'Eppendorf',
    officialUrl: 'https://www.eppendorf.com/product-catalog/centrifuges/'
  },
  {
    id: 'eq-cent-hettich-rotofix',
    name: 'Hettich Rotofix 32 A',
    model: 'Hettich Rotofix 32 A Universal',
    area: 'centrifugas',
    categoryLabel: 'Centrifugación y Separación de Fases',
    headline: 'La centrífuga clínica por excelencia para tubos de sangre, orina y citología',
    description: 'Fabricación alemana de alta solidez con carcasa y cámara de centrifugación metálica. Acepta una amplia variedad de tubos vacutainer clínicos, tubos cónicos tipo Falcon de 15 y 50 mL, y accesorios de citocentrifugación para frotis celulares.',
    image: '/src/assets/images/lab_centrifuge_hettich_1794353388236.jpg',
    specs: [
      { label: 'Velocidad máx. / FCR', value: '6,000 RPM / 4,226 × g' },
      { label: 'Capacidad', value: 'Hasta 4 × 100 mL o 32 tubos de extracción de sangre' },
      { label: 'Temporizador digital', value: '1 a 99 minutos o marcha continua' },
      { label: 'Nivel sonoro', value: 'Ultra silenciosa ≤ 52 dB(A)' }
    ],
    standards: ['Laboratorio Clínico', 'Centrifugación Universal'],
    brand: 'Hettich',
    officialUrl: 'https://www.hettichlab.com/en/products/centrifuges/'
  },
  {
    id: 'eq-cent-hermle-z206',
    name: 'Hermle Z 206 A / Z 32 HK',
    model: 'Hermle Z Series (Universal / High-Speed)',
    area: 'centrifugas',
    categoryLabel: 'Centrifugación y Separación de Fases',
    headline: 'Control digital inteligente de RPM y fuerza G para investigación y diagnóstico de rutina',
    description: 'Centrífuga versátil de alto rendimiento con panel digital LCD frontal que permite alternar directamente entre lectura de RPM y RCF (fuerza G). Rotores intercambiables sin necesidad de herramientas complejas.',
    image: '/src/assets/images/lab_centrifuge_hettich_1794353388236.jpg',
    specs: [
      { label: 'Rango de revoluciones', value: '200 a 20,000 RPM (según modelo y rotor)' },
      { label: 'Aceleración y frenado', value: '10 curvas de aceleración y 10 perfiles de frenado gradual' },
      { label: 'Memoria de programas', value: 'Almacena hasta 99 protocolos de centrifugación frecuentes' },
      { label: 'Reconocimiento de rotor', value: 'Detección automática sin riesgo de sobrevelocidad' }
    ],
    standards: ['CE-IVD', 'Seguridad Eléctrica de Laboratorio'],
    brand: 'Hermle',
    officialUrl: 'https://www.hermle-labortechnik.de/en/products/centrifuges.html'
  },
  {
    id: 'eq-cent-micro-5424r',
    name: 'Eppendorf 5424 R / Microcentrífuga',
    model: 'Eppendorf Centrifuge 5424R (Refrigerada para Microtubos)',
    area: 'centrifugas',
    categoryLabel: 'Centrifugación y Separación de Fases',
    headline: 'Microcentrífuga refrigerada especializada en biología molecular, PCR y ADN/ARN',
    description: 'Equipo de referencia mundial para extracción de ácidos nucleicos y purificación de proteínas. Mantiene muestras biológicas estrictamente a 4°C incluso a máxima velocidad (21,130 × g). Rotor de aluminio anodizado aerosol-tight para 24 microtubos de 1.5/2.0 mL.',
    image: '/src/assets/images/lab_centrifuge_hettich_1794353388236.jpg',
    specs: [
      { label: 'Fuerza centrífuga máx.', value: '21,130 × g (15,000 RPM)' },
      { label: 'Rotor estándar', value: '24 × 1.5/2.0 mL con tapa estanca a aerosoles certificada' },
      { label: 'Control térmico', value: '-10°C a +40°C garantizado a velocidad máxima' },
      { label: 'Teclado y pantalla', value: 'Selector rotativo o botones táctiles resistentes a derrames' }
    ],
    standards: ['CE-IVD', 'Certificado Aerosol-Tight Public Health England'],
    brand: 'Eppendorf',
    officialUrl: 'https://www.eppendorf.com/product-catalog/centrifuges/microcentrifuges/'
  },

  // 3. ANALIZADORES DE HEMATOLOGÍA
  {
    id: 'eq-hem-mindray-bc5150',
    name: 'Mindray BC-5150 / BC-20',
    model: 'Mindray BC Series (BC-20 / BC-30 / BC-5150)',
    area: 'hematologia',
    categoryLabel: 'Hematología y Recuento Celular',
    headline: 'Analizador hematológico automatizado diferencial de 5 y 3 partes con dispersión láser',
    description: 'Plataforma líder para hemograma completo que integra citometría de flujo láser tri-angular, tinción química avanzada e impedancia eléctrica. Diseño compacto de sobremesa con pantalla táctil TFT a color de 10.4 pulgadas y procesado de hasta 60 muestras por hora.',
    image: '/src/assets/images/hematology_analyzer_sysmex_1794353389524.jpg',
    specs: [
      { label: 'Parámetros reportados', value: '25 parámetros + 4 diagramas de dispersión + 3 histogramas (5 partes)' },
      { label: 'Volumen de muestra', value: 'Aspiración de solo 15 µL (ideal para pacientes pediátricos y geriátricos)' },
      { label: 'Rendimiento', value: 'Hasta 60 muestras de hemograma por hora' },
      { label: 'Almacenamiento', value: 'Memoria interna para 40,000 resultados con gráficos completos' }
    ],
    standards: ['CE-IVD', 'FDA Cleared', 'Homologación de Laboratorio Clínico'],
    brand: 'Mindray',
    officialUrl: 'https://www.mindray.com/es/products/laboratory-diagnostics/hematology/'
  },
  {
    id: 'eq-hem-sysmex-xn',
    name: 'Sysmex XN-L Series / KX-21N',
    model: 'Sysmex Series (KX-21N 3 partes / XN-L 5 partes)',
    area: 'hematologia',
    categoryLabel: 'Hematología y Recuento Celular',
    headline: 'El referente mundial en exactitud diagnóstica hematológica y citometría fluorescente',
    description: 'Equipos legendarios por su precisión analítica inquebrantable y bajísimo índice de mantenimiento. El modelo Sysmex KX-21N ofrece 18 parámetros confiables de 3 partes, mientras que la serie XN-L proporciona canal dedicado para conteo preciso de plaquetas, reticulocitos y granulocitos inmaduros (IG).',
    image: '/src/assets/images/hematology_analyzer_sysmex_1794353389524.jpg',
    specs: [
      { label: 'Diferencial leucocitario', value: '5 partes con citometría de flujo de fluorescencia con diodo semiconductor' },
      { label: 'Canal de líquidos corporales', value: 'Opción XN-BF para líquido cefalorraquídeo, pleural y sinovial' },
      { label: 'Conteo plaquetario', value: 'Método óptico fluorescente PLT-F de alta resolución contra trombocitopenia' },
      { label: 'Control de calidad', value: 'Integración automática a red Sysmex SNCS' }
    ],
    standards: ['CE-IVD', 'FDA 510(k)', 'Estándar de Oro en Hematología'],
    brand: 'Sysmex',
    officialUrl: 'https://www.sysmex.es/productos/hematologia.html'
  },
  {
    id: 'eq-hem-abbott-celldyn',
    name: 'Abbott Cell-Dyn Ruby / Emerald',
    model: 'Cell-Dyn Series (Emerald 3 partes / Ruby 5 partes)',
    area: 'hematologia',
    categoryLabel: 'Hematología y Recuento Celular',
    headline: 'Tecnología óptica MAPSS patentada para clasificación leucocitaria multidimensional',
    description: 'La tecnología MAPSS (Multi-Angle Polarized Scatter Separation) de Abbott proporciona una separación óptima de neutrófilos, eosinófilos, basófilos, linfocitos y monocitos sin reactivos tóxicos adicionales. Muestreo de tubo cerrado con perforación de tapón para bioseguridad del operario.',
    image: '/src/assets/images/hematology_analyzer_sysmex_1794353389524.jpg',
    specs: [
      { label: 'Tecnología óptica', value: 'Dispersión láser polarizada multiangular (MAPSS)' },
      { label: 'Seguridad biológica', value: 'Aspiración por perforación de tapón cerrado (Cap Piercing)' },
      { label: 'Velocidad', value: 'Hasta 84 muestras/hora en modelo Ruby' },
      { label: 'Conectividad LIS', value: 'Integración nativa bidireccional con historia clínica electrónica' }
    ],
    standards: ['CE-IVD', 'FDA Cleared'],
    brand: 'Abbott',
    officialUrl: 'https://www.corelaboratory.abbott/'
  },

  // 4. EQUIPOS DE APOYO Y PREPARACIÓN DE MUESTRAS
  {
    id: 'eq-apoyo-microscopio',
    name: 'Microscopio Óptico Binocular / Trinocular',
    model: 'Olympus / Leica / Nikon Clinical Series',
    area: 'apoyo_muestras',
    categoryLabel: 'Apoyo y Preparación de Muestras',
    headline: 'Óptica corregida al infinito con iluminación LED para hematología, uroanálisis y parasitología',
    description: 'Microscopios de investigación y rutina clínica con objetivos plano-acromáticos (4x, 10x, 40x, 100x inmersión en aceite), revólver cuádruple o quíntuple invertido, platina mecánica ergonómica sin cremallera sobresaliente y cabezal trinocular con puerto para cámara digital HD.',
    image: '/src/assets/images/lab_support_microscope_1794353389864.jpg',
    specs: [
      { label: 'Sistema óptico', value: 'Óptica infinita UIS2 / CFI60 con corrección de aberración cromática' },
      { label: 'Iluminación', value: 'LED blanco cálido de 3W con temperatura de color constante (50,000h)' },
      { label: 'Cabezal', value: 'Trinocular inclinado a 30° con ajuste interpupilar 48-75 mm' },
      { label: 'Cámara digital opcional', value: 'Sensor CMOS 4K UHD con software de medición celular y captura' }
    ],
    standards: ['Normativa Óptica Médica', 'CE Marked', 'Certificación Ergonómica'],
    brand: 'Olympus / Evident',
    officialUrl: 'https://www.evidentolympus.com/es/microscopes/'
  },
  {
    id: 'eq-apoyo-espectro-uv',
    name: 'Espectrofotómetro UV-Vis / Microvolumen',
    model: 'Thermo Scientific NanoDrop / Spectronic UV-Vis Series',
    area: 'apoyo_muestras',
    categoryLabel: 'Apoyo y Preparación de Muestras',
    headline: 'Medición espectral ultravioleta-visible de 190 a 1100 nm para cuantificación de ADN/ARN y proteínas',
    description: 'Equipos indispensables para investigación biomédica, biotecnología y control de calidad farmacológico. Opciones con sistema pedestal patentado para microvolúmenes (1-2 µL de muestra sin dilución) y cubetas termostatizadas de doble haz.',
    image: '/src/assets/images/clinical_lab_analyzer_1792246942099.jpg',
    specs: [
      { label: 'Rango espectral', value: '190 nm a 1100 nm (rango completo UV-Visible)' },
      { label: 'Volumen de muestra', value: 'Desde 1 µL en modelo NanoDrop o cubeta estándar 10 mm' },
      { label: 'Tiempo de lectura', value: '< 3 segundos por determinación con barrido espectral' },
      { label: 'Fuente de luz', value: 'Lámpara de xenón flash de larga duración' }
    ],
    standards: ['CE Marked', 'Cumplimiento Farmacopea USP/EP', 'Trazabilidad NIST'],
    brand: 'Thermo Scientific',
    officialUrl: 'https://www.thermofisher.com/es/es/home/industrial/spectroscopy-elemental-isotope-analysis/molecular-spectroscopy/ultraviolet-visible-visible-spectrophotometry-uv-vis-vis.html'
  },
  {
    id: 'eq-apoyo-bano-incubadora',
    name: 'Baño de María e Incubadora Digital',
    model: 'Memmert / Thermo Scientific Precision Series',
    area: 'apoyo_muestras',
    categoryLabel: 'Apoyo y Preparación de Muestras',
    headline: 'Control térmico homogéneo para reactivos, cultivos celulares e incubación de sueros',
    description: 'Baños serológicos de acero inoxidable quirúrgico de alta resistencia química con control digital PID y circulación homogénea. Incubadoras bacteriológicas y de laboratorio con convección natural y forzada para mantener temperaturas exactas a 37°C sin fluctuaciones.',
    image: '/src/assets/images/lab_centrifuge_hettich_1794353388236.jpg',
    specs: [
      { label: 'Rango de temperatura', value: 'Ambiente +5°C hasta 95°C (Baño) / hasta 80°C (Incubadora)' },
      { label: 'Estabilidad térmica', value: '± 0.1°C con sensor Pt100 clase A' },
      { label: 'Material interior', value: 'Acero inoxidable electropulido AISI 304 libre de corrosión' },
      { label: 'Seguridad térmica', value: 'Termostato de seguridad independiente contra sobrecalentamiento' }
    ],
    standards: ['DIN 12880', 'CE Marked', 'Seguridad de Laboratorio'],
    brand: 'Memmert',
    officialUrl: 'https://www.memmert.com/es/'
  },
  {
    id: 'eq-apoyo-vortex-agitador',
    name: 'Agitador Vórtice y Mezclador de Tubos',
    model: 'Vortex Mixer & Roller Mixer Professional Series',
    area: 'apoyo_muestras',
    categoryLabel: 'Apoyo y Preparación de Muestras',
    headline: 'Homogenización rápida y segura de tubos de ensayo, viales de sangre y reactivos',
    description: 'Agitadores de vórtice con modo táctil continuo e intermitente de velocidad regulable hasta 3000 RPM. Mezcladores de rodillos basculantes para anticoagulación homogénea de tubos vacutainer con EDTA previo a la entrada al hemocitómetro.',
    image: '/src/assets/images/lab_centrifuge_hettich_1794353388236.jpg',
    specs: [
      { label: 'Velocidad de oscilación', value: '0 a 3,000 RPM regulable' },
      { label: 'Modos de funcionamiento', value: 'Automático por pulsación táctil (Touch) o continuo' },
      { label: 'Base antideslizante', value: 'Cuerpo de fundición de aluminio con patas de silicona amortiguadas' },
      { label: 'Accesorios', value: 'Cabezales intercambiables para microtubos, tubos Falcon y placas' }
    ],
    standards: ['CE Marked', 'Protección IP21'],
    brand: 'Scientific Industries',
    officialUrl: 'https://www.scientificindustries.com/'
  },

  // 5. ÁREA DE QUIRÓFANO (SALA DE OPERACIONES) Y ANESTESIA
  {
    id: 'eq-quir-anestesia',
    name: 'Máquinas de Anestesia',
    model: 'Dräger Primus / Datex-Ohmeda Series',
    area: 'quirofano',
    categoryLabel: 'Quirófano y Anestesia',
    headline: 'Sistemas integrados con vaporizadores, ventiladores mecánicos y monitores de gases anestésicos',
    description: 'Estaciones de anestesia de precisión para procedimientos de alta complejidad con modos ventilatorios avanzados, monitoreo continuo de gases espirados y compatibilidad con agentes halogenados múltiples.',
    image: '',
    specs: [
      { label: 'Ventilador integrado', value: 'Ventilación por pistón de accionamiento eléctrico de alta precisión' },
      { label: 'Monitoreo de gases', value: 'O2, N2O, CO2 y agentes anestésicos volátiles con identificación automática' },
      { label: 'Vaporizadores', value: 'Montaje Selectatec para Isoflurano, Sevoflurano y Desflurano' },
      { label: 'Seguridad', value: 'Sistema antilibro de mezclas hipóxicas y bypass de emergencia' }
    ],
    standards: ['Cirugía Mayor y Alta Complejidad', 'Monitoreo Quirúrgico'],
    brand: 'Dräger',
    officialUrl: 'https://www.draeger.com/es_es/Hospital/Anesthesia-Workstations'
  },
  {
    id: 'eq-quir-monitores',
    name: 'Monitores de Signos Vitales Multiparamétricos',
    model: 'Mindray BeneVision / Philips IntelliVue Series',
    area: 'quirofano',
    categoryLabel: 'Quirófano y Monitoreo Crítico',
    headline: 'Pantallas para el seguimiento continuo de ECG, SpO2, PANI/PAI y temperatura',
    description: 'Pantallas táctiles de grado médico para quirófano y áreas críticas con visualización multi-parámetro de alta resolución, alarmas inteligentes e integración bidireccional a historia clínica.',
    image: '',
    specs: [
      { label: 'Parámetros estándar', value: 'ECG de 3/5/12 derivaciones, SpO2, PANI, Temperatura dual' },
      { label: 'Parámetros invasivos', value: 'Presión arterial invasiva (PAI dual) y capnografía EtCO2' },
      { label: 'Pantalla', value: 'TFT a color de 12 a 19 pulgadas antirreflejo' },
      { label: 'Conectividad', value: 'Módulos plug-and-play e interconexión a central de monitoreo' }
    ],
    standards: ['Soporte Quirúrgico', 'Monitoreo Continuo'],
    brand: 'Mindray',
    officialUrl: 'https://www.mindray.com/es/products/patient-monitoring/'
  },
  {
    id: 'eq-quir-mesas-lamparas',
    name: 'Mesas Quirúrgicas y Lámparas Cialíticas',
    model: 'Getinge Maquet / Mindray HyBase Series',
    area: 'quirofano',
    categoryLabel: 'Infraestructura Quirúrgica',
    headline: 'Sistemas articulados e iluminación LED de alta intensidad sin sombras',
    description: 'Mesas de cirugía radiotransparentes multi-disciplinarias con control motorizado y lámparas cialíticas de suspensión de doble satélite con regulación de campo operatorio e índice de reproducción cromática CRI > 96.',
    image: '',
    specs: [
      { label: 'Capacidad de carga', value: 'Hasta 350 kg de peso del paciente' },
      { label: 'Iluminación cialítica', value: 'Hasta 160,000 Lux LED sin emisión de calor infrarrojo' },
      { label: 'Ajustes motorizados', value: 'Trendelenburg, anti-Trendelenburg, inclinación lateral y altura' },
      { label: 'Radiotransparencia', value: 'Compatible con Arco en C para fluoroscopia transoperatoria' }
    ],
    standards: ['Quirófano General y Especializado', 'Iluminación Quirúrgica'],
    brand: 'Getinge',
    officialUrl: 'https://www.getinge.com/es/productos/mesas-quirurgicas/'
  },
  {
    id: 'eq-quir-electrobisturi',
    name: 'Electrobisturíes (Unidades Electroquirúrgicas)',
    model: 'Medtronic Valleylab / Erbe VIO Series',
    area: 'quirofano',
    categoryLabel: 'Quirófano y Cirugía',
    headline: 'Equipos de corte y coagulación por radiofrecuencia (Monopolar y Bipolar)',
    description: 'Generadores electroquirúrgicos de alta frecuencia con sellado vascular tisular avanzado LigaSure / BiClamp, retroalimentación instantánea de impedancia tisular y sistema de seguridad REM.',
    image: '',
    specs: [
      { label: 'Modos monopolares', value: 'Corte puro, blend y coagulación fulgurante / spray' },
      { label: 'Modos bipolares', value: 'Coagulación bipolar precisa y macrobipolar con autoarranque' },
      { label: 'Sellado vascular', value: 'Oclusión permanente de vasos de hasta 7 mm de diámetro' },
      { label: 'Seguridad', value: 'Monitor de calidad de placa neutra retorno paciente (REM)' }
    ],
    standards: ['Cirugía Abierta y Laparoscópica', 'Alta Frecuencia Quirúrgica'],
    brand: 'Medtronic',
    officialUrl: 'https://www.medtronic.com/es-es/profesionales-sanitarios/productos/quirurgico/electroquirurgico.html'
  },
  {
    id: 'eq-quir-laparoscopia',
    name: 'Torres de Laparoscopia',
    model: 'Karl Storz IMAGE1 S / Stryker 1688 Series',
    area: 'quirofano',
    categoryLabel: 'Cirugía Mínimamente Invasiva',
    headline: 'Sistemas de videoendoscopia en alta definición con fuentes de luz fría e insuflador de CO2',
    description: 'Torres integradas de laparoscopia que incluyen procesador de video 4K / Full HD, fuente de luz LED fría, insuflador digital de CO2 de alto flujo (hasta 45 L/min) con calentamiento de gas y bomba de irrigación.',
    image: '',
    specs: [
      { label: 'Resolución de video', value: 'Ultra HD 4K / Full HD con sensor CMOS de 3 chips' },
      { label: 'Insuflador de gas', value: 'Insuflador electrónico inteligente de CO2 hasta 45 L/min' },
      { label: 'Fuente de luz', value: 'LED de espectro quirúrgico de 300W equivalente con 30,000h de vida útil' },
      { label: 'Ópticas', value: 'Laparoscopios autoclavables de 0°, 30° y 45° en diámetros 5 mm y 10 mm' }
    ],
    standards: ['Cirugía Mínimamente Invasiva', 'Endoscopia Quirúrgica'],
    brand: 'Karl Storz',
    officialUrl: 'https://www.karlstorz.com/'
  },

  // 6. ÁREA DE CUIDADOS INTENSIVOS (UCI / ICU)
  {
    id: 'eq-uci-ventilador',
    name: 'Ventiladores Mecánicos de Cuidados Intensivos',
    model: 'Hamilton Medical C6 / Puritan Bennett 980 Series',
    area: 'uci',
    categoryLabel: 'Cuidados Intensivos y Terapia Respiratoria',
    headline: 'Soporte vital avanzado para soporte respiratorio adulto, pediátrico y neonatal',
    description: 'Ventiladores pulmonares de alta gama para UCI con ventilación adaptativa ASV/INTELLiVENT, monitoreo de mecánica respiratoria pulmonar en tiempo real y flujo rápido para desacople seguro.',
    image: '',
    specs: [
      { label: 'Población diana', value: 'Adulto, pediátrico y neonatal (desde 200 gramos de peso)' },
      { label: 'Modos ventilatorios', value: 'Controlados por volumen/presión, SIMV, BIPAP, APRV y ventilación no invasiva' },
      { label: 'Monitoreo dinámico', value: 'Curvas de flujo, volumen, presión y bucles de compliancia/resistencia' },
      { label: 'Batería de respaldo', value: 'Hasta 4 horas de autonomía para traslados intrahospitalarios' }
    ],
    standards: ['Soporte de Vida Avanzado', 'Cuidados Críticos'],
    brand: 'Hamilton Medical',
    officialUrl: 'https://www.hamilton-medical.com/es/Productos/Ventiladores.html'
  },
  {
    id: 'eq-uci-bombas-infusion',
    name: 'Bombas de Infusión y Jeringas Automáticas',
    model: 'B. Braun Space / BD Alaris Systems',
    area: 'uci',
    categoryLabel: 'Cuidados Intensivos y Terapias Médicas',
    headline: 'Dispositivos para la administración precisa de fármacos vasoactivos y nutrición parenteral',
    description: 'Sistemas modulares apilables de infusión volumétrica y jeringas con software de reducción de errores de medicación (DERS), librerías de fármacos y perfiles para UCI, anestesia y oncología.',
    image: '',
    specs: [
      { label: 'Rango de flujo', value: '0.1 a 1,200 mL/hora con incrementos de 0.01 mL/hora' },
      { label: 'Compatibilidad de jeringas', value: 'Desde 2 mL hasta 50/60 mL con reconocimiento automático' },
      { label: 'Sensores de seguridad', value: 'Sensor ultrasónico de burbujas de aire y sensor de oclusión' },
      { label: 'Conectividad', value: 'Integración en racks compactos con alimentación centralizada' }
    ],
    standards: ['Terapia de Infusión de Precisión', 'Seguridad de Paciente'],
    brand: 'B. Braun',
    officialUrl: 'https://www.bbraun.es/es/productos-y-terapias/terapia-de-infusion/sistemas-de-infusion-automatizados.html'
  },
  {
    id: 'eq-uci-desfibrilador-monitor',
    name: 'Desfibriladores / Monitores Externos',
    model: 'Zoll R Series / Physio-Control Lifepak Series',
    area: 'uci',
    categoryLabel: 'Reanimación y Cuidados Críticos',
    headline: 'Equipos con capacidad de desfibrilación manual/DEA y marcapasos transcutáneo',
    description: 'Desfibriladores bifásicos de alta confiabilidad con ayuda de RCP en tiempo real (CPR Dashboard), marcapasos no invasivo de corriente constante, monitor ECG y registro térmico de eventos.',
    image: '',
    specs: [
      { label: 'Energía de descarga', value: 'Onda bifásica rectilínea de 1 a 200 Joules (o hasta 360 J)' },
      { label: 'Modos de operación', value: 'Manual sincronizado (cardioversión), DEA y modo Marcapasos' },
      { label: 'Ayuda RCP Real CPR', value: 'Sensor de profundidad y frecuencia de compresiones torácicas' },
      { label: 'Impresora', value: 'Registrador térmico integrado de 80 mm para derivaciones y eventos' }
    ],
    standards: ['Reanimación Cardiopulmonar Avanzada', 'Soporte de Emergencia'],
    brand: 'Zoll Medical',
    officialUrl: 'https://www.zoll.com/es/productos/desfibriladores/serie-r'
  },
  {
    id: 'eq-uci-camas',
    name: 'Camas Hospitalarias Hill-Rom / Stryker',
    model: 'Hill-Rom Centrella / Stryker ProCuity Series',
    area: 'uci',
    categoryLabel: 'Cuidados Intensivos y Hospitalización',
    headline: 'Camas articuladas con báscula integrada, control de presión de úlceras y alarmas de salida',
    description: 'Camas clínicas de cuidados intensivos con motorización cuádruple, posición de silla cardíaca en un toque, colchón con terapia de redistribución de presiones y pesaje digital calibrado.',
    image: '',
    specs: [
      { label: 'Báscula integrada', value: 'Pesaje de alta precisión en cualquier posición de la cama' },
      { label: 'Prevención de caídas', value: 'Sensor de salida de cama en 3 zonas con alertas acústicas' },
      { label: 'Superficie de alivio', value: 'Colchón de aire alternante para prevención de lesiones por presión' },
      { label: 'Comandos de enfermería', value: 'Pedales bilaterales manos libres y panel de control central' }
    ],
    standards: ['Hospitalización Crítica', 'Ergonomía Médica'],
    brand: 'Hill-Rom / Baxter',
    officialUrl: 'https://www.hillrom.com/'
  },

  // 7. ÁREA DE URGENCIAS Y EMERGENCIAS (TRIAGE / REANIMACIÓN)
  {
    id: 'eq-urg-carro-paro',
    name: 'Carros de Paro (Crash Carts)',
    model: 'Metro Healthcare / Harloff Series',
    area: 'urgencias',
    categoryLabel: 'Urgencias y Reanimación',
    headline: 'Equipados con laringoscopios, tubos endotraqueales, medicamentos de reanimación y ambús',
    description: 'Carros móviles de respuesta inmediata con bandejas organizadas por código de colores, soporte para desfibrilador rotatorio, portatanque de oxígeno, tabla de masaje cardíaco y precinto de seguridad.',
    image: '',
    specs: [
      { label: 'Material', value: 'Polímero de alta resistencia química con protección antibacteriana Microban' },
      { label: 'Accesorios incluidos', value: 'Porta-sueros telescópico, soporte de desfibrilador y tabla para RCP' },
      { label: 'Cierre de seguridad', value: 'Cierre centralizado por precintos desechables de apertura rápida' },
      { label: 'Ruedas', value: '4 ruedas giratorias de 125 mm con frenos independientes de alta estabilidad' }
    ],
    standards: ['Reanimación Rápida', 'Código Azul Hospitalario'],
    brand: 'Metro Healthcare',
    officialUrl: 'https://metro.com/shop/healthcare/crash-carts/'
  },
  {
    id: 'eq-urg-electrocardiografo',
    name: 'Electrocardiógrafos (ECG de 12 derivaciones)',
    model: 'GE Healthcare MAC / Schiller CARDIOVIT',
    area: 'urgencias',
    categoryLabel: 'Urgencias y Diagnóstico Cardíaco',
    headline: 'Equipos portátiles para la evaluación rápida de eventos coronarios agudos',
    description: 'Electrocardiógrafos diagnósticos de 12 derivaciones con algoritmo avanzado de interpretación automática para detección de isquemia miocárdica e infarto agudo en urgencias.',
    image: '',
    specs: [
      { label: 'Canales de registro', value: '12 derivaciones simultáneas con visualización en pantalla color' },
      { label: 'Algoritmo de análisis', value: 'Interpretación automática de arritmias y segmentos ST (Marquette 12SL)' },
      { label: 'Impresión térmica', value: 'Impresora térmica de alta resolución en papel z-fold estándar' },
      { label: 'Conectividad', value: 'Exportación en formatos PDF, XML y compatibilidad HL7 / DICOM' }
    ],
    standards: ['Cardiología de Urgencias', 'Diagnóstico Coronario'],
    brand: 'GE HealthCare',
    officialUrl: 'https://www.gehealthcare.es/products/diagnostic-ecg'
  },
  {
    id: 'eq-urg-desfibrilador-aspirador',
    name: 'Desfibriladores Portátiles y Aspiradores de Secreciones',
    model: 'Laerdal HeartStart / DeVilbiss Vacu-Aide High-Vacuum',
    area: 'urgencias',
    categoryLabel: 'Emergencias y Triage',
    headline: 'Desfibriladores portátiles de emergencia y aspiradores de secreciones de alto vacío',
    description: 'Conjunto móvil de reanimación y permeabilidad de vía aérea: DEA portátil ligero con indicaciones por voz y aspirador clínico de alto flujo con recipiente colector con filtro hidrofóbico.',
    image: '',
    specs: [
      { label: 'Aspiración de flujo', value: 'Hasta 27 L/min y vacío regulable de 50 a 550 mmHg' },
      { label: 'Recipiente colector', value: 'Vaso autoclaveable de 800-1200 mL con trampa de desbordamiento' },
      { label: 'Alimentación eléctrica', value: 'Batería interna recargable y conexión a 12V DC para ambulancia' },
      { label: 'Portabilidad', value: 'Maletín de transporte ergonómico resistente a impactos y derrames' }
    ],
    standards: ['Emergencias Médicas', 'Soporte Vía Aérea'],
    brand: 'Laerdal / DeVilbiss',
    officialUrl: 'https://laerdal.com/'
  },

  // 8. ÁREA DE ESTERILIZACIÓN (CEMI / CENTRAL DE ESTERILIZACIÓN)
  {
    id: 'eq-est-autoclave',
    name: 'Autoclaves de Vapor',
    model: 'Getinge GSS Series / Tuttnauer Elara',
    area: 'esterilizacion',
    categoryLabel: 'Central de Esterilización (CEMI)',
    headline: 'Esterilizadores de alta capacidad por vapor saturado bajo presión',
    description: 'Esterilizadores hospitalarios de vapor con cámara en acero inoxidable AISI 316L, bomba de vacío de anillo líquido de alto rendimiento y ciclos validados para instrumental quirúrgico y textil.',
    image: '',
    specs: [
      { label: 'Capacidad de cámara', value: 'Desde 1 a 12 unidades de esterilización (STE)' },
      { label: 'Temperatura de trabajo', value: 'Ciclos de 121°C y 134°C con prueba de Bowie-Dick y test de fugas' },
      { label: 'Puertas automáticas', value: 'Doble puerta de guillotina para barrera sanitaria limpia/estéril' },
      { label: 'Registro digital', value: 'Impresora integrada y almacenamiento USB de parámetros de ciclo' }
    ],
    standards: ['Central de Esterilización Hospitalaria', 'Bioseguridad de Instrumental'],
    brand: 'Getinge',
    officialUrl: 'https://www.getinge.com/es/productos/esterilizacion/'
  },
  {
    id: 'eq-est-baja-temperatura',
    name: 'Esterilizadores por Óxido de Etileno o Peróxido de Hidrógeno',
    model: 'Steris V-PRO / ASP STERRAD Low-Temperature Systems',
    area: 'esterilizacion',
    categoryLabel: 'Central de Esterilización (CEMI)',
    headline: 'Esterilización para material termosensible que no resiste altas temperaturas',
    description: 'Sistemas avanzados de esterilización por plasma de peróxido de hidrógeno gaseoso y gas óxido de etileno. No dejan residuos tóxicos, ideales para ópticas de endoscopia, cables de luz y motores quirúrgicos.',
    image: '',
    specs: [
      { label: 'Temperatura del proceso', value: 'Baja temperatura entre 45°C y 55°C (segura para instrumental delicado)' },
      { label: 'Tiempo de ciclo', value: 'Ciclos rápidos desde 28 hasta 55 minutos para reutilización pronta' },
      { label: 'Compatibilidad de lúmenes', value: 'Validado para endoscopios flexibles y rígidos de lumen estrecho' },
      { label: 'Subproductos seguros', value: 'Descomposición en agua y oxígeno (libre de emisiones contaminantes)' }
    ],
    standards: ['Esterilización a Baja Temperatura', 'Protección de Instrumental Óptico'],
    brand: 'Steris',
    officialUrl: 'https://www.steris.com/'
  },
  {
    id: 'eq-est-lavadoras-selladoras',
    name: 'Selladoras de Bolsas y Lavadoras Termodesinfectadoras',
    model: 'Miele Professional PG Series / Hawo Rotary Sealers',
    area: 'esterilizacion',
    categoryLabel: 'Central de Esterilización (CEMI)',
    headline: 'Para el lavado y empaquetado seguro del instrumental quirúrgico',
    description: 'Lavadoras termodesinfectadoras con secado por aire caliente HEPA y selladoras rotativas continuas de grado médico con control de temperatura digital para bolsas de esterilización.',
    image: '',
    specs: [
      { label: 'Temperatura de desinfección', value: 'Desinfección térmica hasta 93°C con valor A0 regulable' },
      { label: 'Velocidad de sellado', value: 'Selladora rotativa continua a 10 metros/minuto' },
      { label: 'Anchura de soldadura', value: 'Costura de sellado de 12 mm de seguridad impermeable' },
      { label: 'Monitoreo', value: 'Control de presión de sellado y registro de temperatura' }
    ],
    standards: ['Termodesinfección Quirúrgica', 'Empaque Estéril'],
    brand: 'Miele Professional',
    officialUrl: 'https://www.miele.es/professional/'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-instalacion',
    title: 'Instalación y Puesta en Marcha',
    subtitle: 'Soporte técnico especializado',
    description: 'Montaje de equipos médicos y de laboratorio, conexiones de precisión y verificación funcional según especificaciones técnicas.',
    iconName: 'Wrench',
    features: [
      'Montaje y adecuación técnica del equipo',
      'Verificación inicial de funcionamiento y parámetros',
      'Asesoría técnica y capacitación de uso al personal',
      'Reporte de puesta en marcha del equipo'
    ],
    protocol: 'Atención técnica oportuna y personalizada'
  },
  {
    id: 'srv-preventivo',
    title: 'Mantenimiento Preventivo',
    subtitle: 'Continuidad operativa y confiabilidad',
    description: 'Planes calendarizados de revisión técnica, sustitución de componentes consumibles y lubricación para evitar paradas operativas.',
    iconName: 'ShieldCheck',
    features: [
      'Inspección y limpieza técnica integral',
      'Sustitución de piezas de desgaste preventivo',
      'Ajustes mecánicos y verificación de tolerancias',
      'Informe detallado del estado del equipo'
    ],
    protocol: 'Planes adaptados a las necesidades de su centro'
  },
  {
    id: 'srv-correctivo',
    title: 'Mantenimiento Correctivo',
    subtitle: 'Respuesta y soporte técnico',
    description: 'Diagnóstico técnico especializado para la pronta resolución de fallas en equipos médicos y de laboratorio con repuestos adecuados.',
    iconName: 'Activity',
    features: [
      'Diagnóstico especializado de averías',
      'Disponibilidad de repuestos e insumos',
      'Reparación y puesta a punto operativa',
      'Soporte técnico directo Brial Medical'
    ],
    protocol: 'Contacto directo: +1 (849) 206-9412'
  },
  {
    id: 'srv-calibracion',
    title: 'Calibración y Ajuste Técnico',
    subtitle: 'Exactitud y confiabilidad metrológica',
    description: 'Validación de mediciones y ajuste de parámetros para asegurar la fiabilidad y exactitud en los resultados diagnósticos.',
    iconName: 'Gauge',
    features: [
      'Verificación de exactitud y repetibilidad',
      'Ajuste técnico de parámetros según manual',
      'Pruebas operativas con controles',
      'Emisión de reporte técnico de verificación'
    ],
    protocol: 'Servicio técnico especializado'
  }
];

// Single real headquarters in Dominican Republic
export const HEADQUARTERS_LOCATION: ServiceLocation = {
  id: 'brial-hq-santo-domingo',
  name: 'Sede Principal Brial Medical SRL',
  city: 'Santo Domingo, República Dominicana',
  address: 'Santo Domingo, R.D. (18°31\'33.7"N 70°01\'44.4"W)',
  phone: '+1 (849) 206-9412',
  emergencyPhone: '+1 (849) 206-9412',
  email: 'info@brialmedical.com',
  activeTechnicians: 14,
  coverageRadiusKm: 180, // Cobertura nacional en toda República Dominicana
  avgResponseTimeMin: 40,
  coordinates: {
    lat: 18.526028,
    lng: -70.029000,
    x: 50,
    y: 50
  }
};

export const BRAND_CERTIFICATIONS = [
  { name: 'Rayto Chemray', label: 'Química Clínica' },
  { name: 'Mindray BS & BC', label: 'Química y Hematología' },
  { name: 'Roche Cobas', label: 'Analizadores Clínicos' },
  { name: 'Beckman Coulter AU', label: 'Bioquímica Clínica' },
  { name: 'Sysmex XN & KX', label: 'Hematología Automatizada' },
  { name: 'Eppendorf', label: 'Centrífugas Clínicas' },
  { name: 'Hettich', label: 'Centrifugación de Muestras' },
  { name: 'Abbott Cell-Dyn', label: 'Hematología Diagnóstica' }
];

export type MedicalArea = 
  | 'todos' 
  | 'quimica_clinica' 
  | 'centrifugas' 
  | 'hematologia' 
  | 'apoyo_muestras' 
  | 'quirofano' 
  | 'uci' 
  | 'urgencias' 
  | 'esterilizacion';

export interface MedicalEquipment {
  id: string;
  name: string;
  model: string;
  area: MedicalArea;
  categoryLabel: string;
  headline: string;
  description: string;
  image: string;
  badge?: string;
  specs: {
    label: string;
    value: string;
  }[];
  standards: string[];
  brand: string;
  officialUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  protocol: string;
}

export interface ServiceRequestPayload {
  hospitalName: string;
  equipmentType: string;
  serialNumber?: string;
  issueDescription: string;
  urgency: 'Normal (48h)' | 'Prioritaria (12h)' | 'Crítica - UCI / Quirófano (<2h)';
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  preferredDate?: string;
}

export interface ServiceTicket {
  ticketId: string;
  createdAt: string;
  hospitalName: string;
  equipmentType: string;
  urgency: string;
  estimatedArrival: string;
  assignedEngineer: string;
  status: 'Recibido' | 'Ingeniero Asignado' | 'En Ruta' | 'En Proceso';
}

export interface ServiceLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  activeTechnicians: number;
  coverageRadiusKm: number;
  avgResponseTimeMin: number;
  coordinates: {
    lat: number;
    lng: number;
    x: number; // percentage for interactive map pin
    y: number;
  };
}

export interface BusinessLine {
  id: string;
  title: string;
  summary: string;
  detail: string;
  highlights: string[];
  icon: 'printer' | 'pen' | 'utensils' | 'mic' | 'building' | 'bed' | 'warehouse';
  image?: string;
}

export interface Officer {
  name: string;
  role: string;
}

export interface CoreValue {
  id: string;
  title: string;
  lines: string[];
  image?: string;
}

export interface Location {
  id: string;
  name: string;
  kind: string;
  address: string;
  phones: string[];
  email: string;
  taxCode: string;
  mapUrl: string;
  image?: string;
}

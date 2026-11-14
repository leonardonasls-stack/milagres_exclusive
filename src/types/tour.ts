export type TourCategory = 'Todos' | 'Jangada' | 'Buggy' | 'Quadriciclo';

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<TourCategory, 'Todos'>;
  destination: string;
  duration: string;
  capacity: string;
  priceLabel: string;
  priceNote: string;
  badge?: string;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  included: string[];
  itinerary: {
    step: string;
    title: string;
    detail: string;
  }[];
  requirements?: string[];
}

export interface FleetItem {
  id: string;
  name: string;
  category: Exclude<TourCategory, 'Todos'>;
  capacity: string;
  powerOrSpec: string;
  comfort: string;
  equipment: string[];
  image: string;
}

export interface RouteItem {
  id: string;
  name: string;
  region: string;
  difficulty: 'Leve' | 'Moderado' | 'Aventura';
  terrain: string;
  duration: string;
  highlights: string[];
  tourSlug: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Segurança' | 'Reservas' | 'Clima & Marés';
}

export interface BookingForm {
  name: string;
  tourSlug: string;
  date: string;
  guests: number;
  notes: string;
}

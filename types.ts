export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  timeRequired: string; // e.g. "4 Hours"
  features: string[];
  recommended?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string; // Mapping to an SVG
  description: string;
  items: ServiceItem[];
}

export interface CartItem extends ServiceItem {
  categoryId: string;
}

export interface CarModel {
  id: string;
  brand: string;
  model: string;
  fuelType: 'Petrol' | 'Diesel' | 'CNG';
}

export type NavOption = 'home' | 'services' | 'express' | 'contact';
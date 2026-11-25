export type MealTier = 'basic' | 'standard' | 'special';

export type PlanDuration = 'single' | 'weekly' | 'monthly';

export type DeliverySlot = 'lunch' | 'dinner';

export interface MealOption {
  id: MealTier;
  name: string;
  tagline: string;
  price: number; // single meal rate
  weeklyPrice: number;
  monthlyPrice: number;
  included: string;
  description: string;
  image: string;
  popular?: boolean;
  calories?: string;
  nutritionalHighlights: string[];
}

export interface DayMenu {
  day: string;
  fullDay: string;
  isToday?: boolean;
  basicSabzi: string;
  standardSabzi: string;
  specialCurry: string;
  dal: string;
  rice: string;
  bread: string;
  sides: string;
  availableSlots: {
    lunch: boolean;
    dinner: boolean;
    lunchStock: number;
    dinnerStock: number;
  };
}

export interface AddOnItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'beverage' | 'sweet' | 'extra';
}

export interface CartItem {
  tier: MealTier;
  planDuration: PlanDuration;
  tierName: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  slot: DeliverySlot;
  deliveryDate: string;
  rotiPreference: string;
  addOns: { [key: string]: number };
}

export interface DeliveryDetails {
  name: string;
  phone: string;
  pincode: string;
  area: string;
  streetAddress: string;
  deliveryNotes: string;
  paymentMethod: 'upi' | 'cod' | 'card';
}

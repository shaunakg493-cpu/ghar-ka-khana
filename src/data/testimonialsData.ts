export interface Testimonial {
  id: string;
  name: string;
  role: string;
  locality: string;
  rating: number;
  review: string;
  mealType: string;
  photo?: string;
  verifiedSubscriber: boolean;
  date: string;
}

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rohan Jadhav',
    role: 'Senior Software Engineer (26 yrs)',
    locality: 'Karve Nagar & Hinjawadi Ph 1',
    rating: 5,
    mealType: 'Standard Veg Meal (Monthly)',
    verifiedSubscriber: true,
    date: 'October 2026',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    review: 'Finding decent food after long 10-hour workdays used to be my biggest headache. Ghar Ka Khana delivers right at 12:45 PM without having to chase delivery drivers. The roti quality is unmatched—soft and warm like mom packed them.'
  },
  {
    id: 't-2',
    name: 'Sneha Kulkarni',
    role: 'Product Designer (25 yrs)',
    locality: 'Baner High Street',
    rating: 5,
    mealType: 'Standard Veg Meal (Weekly)',
    verifiedSubscriber: true,
    date: 'October 2026',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    review: 'I wanted everyday food that was not swimming in oil or restaurant gravies. The fresh tawa chapatis, seasonal sabzi, and toor dal tadka are wholesome and never cause an afternoon food coma. Transparent pricing with zero hidden surcharges.'
  },
  {
    id: 't-3',
    name: 'Pratik Deshmukh',
    role: 'QA Automation Lead (27 yrs)',
    locality: 'Wakad, Bhumkar Chowk',
    rating: 5,
    mealType: 'Special Veg Meal (Weekly)',
    verifiedSubscriber: true,
    date: 'October 2026',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    review: 'My sprint meeting timings change constantly. The flexibility to pause lunch or dinner via WhatsApp with just a few hours notice saved me both money and stomach distress. The paneer dishes taste fresh and authentic.'
  },
  {
    id: 't-4',
    name: 'Neha Bhosale',
    role: 'Financial Analyst (28 yrs)',
    locality: 'Kharadi, EON IT Park',
    rating: 5,
    mealType: 'Basic Veg Meal',
    verifiedSubscriber: true,
    date: 'October 2026',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    review: 'I started with a trial meal because hygiene and portion size are critical for me. The spill-proof packaging is great and the yellow dal tasted like home. It has made eating healthy on busy weekdays effortless.'
  },
  {
    id: 't-5',
    name: 'Rutuja Salunkhe',
    role: 'Marketing Associate (24 yrs)',
    locality: 'Karve Nagar & Kothrud',
    rating: 5,
    mealType: 'Standard Veg Meal (Monthly)',
    verifiedSubscriber: true,
    date: 'October 2026',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    review: 'Having advance visibility of the entire weekly menu is wonderful. No repetitive aloo every day; there is genuine variety with methi, bhindi, and paneer specials. Really feels like a thoughtful friend cooking for you.'
  }
];

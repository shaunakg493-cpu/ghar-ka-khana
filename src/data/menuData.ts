import { MealOption, DayMenu, AddOnItem, DeliverySlot } from '../types/food';

import brandLogo from '../assets/images/logo.png';
import heroThaliImg from '../assets/images/hero_homestyle_thali_1792574490588.jpg';
import basicMealImg from '../assets/images/meal_basic_veg_1792574490540.jpg';
import standardMealImg from '../assets/images/meal_standard_veg_1792574491870.jpg';
import specialMealImg from '../assets/images/meal_special_paneer_1792574491909.jpg';
import ourStoryKitchenImg from '../assets/images/our_story_home_kitchen_1792575700281.jpg';
import hotPhulkasImg from '../assets/images/visual_hot_phulkas_tawa_1792576101917.jpg';
import dalTadkaImg from '../assets/images/visual_dal_tadka_brass_1792576102927.jpg';
import shahiPaneerImg from '../assets/images/visual_shahi_paneer_curry_1792576103245.jpg';
import tiffinPackingImg from '../assets/images/visual_tiffin_packing_spread_1792576103855.jpg';

export const BRAND_ASSETS = {
  logo: brandLogo,
  heroThali: heroThaliImg,
  basicMeal: basicMealImg,
  standardMeal: standardMealImg,
  specialMeal: specialMealImg,
  ourStoryKitchen: ourStoryKitchenImg,
  hotPhulkas: hotPhulkasImg,
  dalTadka: dalTadkaImg,
  shahiPaneer: shahiPaneerImg,
  tiffinPacking: tiffinPackingImg,
};

export const MEAL_OPTIONS: MealOption[] = [
  {
    id: 'basic',
    name: 'Basic Veg Meal',
    tagline: 'Simple, light & comforting weekday staple',
    price: 89,
    weeklyPrice: 510,
    monthlyPrice: 2250,
    included: '3 rotis, seasonal sabzi, dal and rice',
    description: 'Wholesome everyday nourishment cooked with minimal oil and mild spices. Perfect for a balanced, sleepy-free workday lunch.',
    image: BRAND_ASSETS.basicMeal,
    nutritionalHighlights: [
      '3 Fresh Tawa Rotis (100% whole wheat)',
      'Seasonal Sabzi (Aloo Gobi / Bhindi / Louki Chana)',
      'Homestyle Yellow Dal with cumin tempering',
      'Steamed Kolam / White Rice'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Veg Meal',
    tagline: 'Our most popular hearty everyday thali',
    price: 109,
    weeklyPrice: 625,
    monthlyPrice: 2750,
    included: 'Roti, sabzi, dal, rice and salad',
    description: 'Generous homestyle combination featuring 4 soft rotis, rich daily sabzi, slow-simmered dal tadka, basmati rice, and a crisp fresh salad.',
    image: BRAND_ASSETS.standardMeal,
    popular: true,
    nutritionalHighlights: [
      '4 Soft Tawa Rotis with light ghee',
      'Daily Special Mixed Sabzi (Methi Matar / Korma)',
      'Toor Dal Tadka with mustard seeds and curry leaves',
      'Fragrant Long-Grain Basmati Rice',
      'Fresh Crunchy Kachumber Salad & Lemon'
    ]
  },
  {
    id: 'special',
    name: 'Special Veg Meal',
    tagline: 'Rich paneer indulgence & chef special curry',
    price: 139,
    weeklyPrice: 800,
    monthlyPrice: 3500,
    included: 'Roti, paneer/special curry, dal, rice and salad',
    description: 'Weekend-style indulgence crafted for everyday satisfaction. Features premium fresh cottage cheese in rich gravy, homestyle dal fry, jeera rice, and sweets.',
    image: BRAND_ASSETS.specialMeal,
    nutritionalHighlights: [
      '4 Soft Phulkas / Rotis',
      'Shahi Paneer / Paneer Butter Masala / Special Curry',
      'Dal Fry with desi ghee tempering',
      'Cumin-infused Jeera Rice',
      'Fresh Garden Salad with Green Chilly & Pickle'
    ]
  }
];

export const SUBSCRIPTION_TABLE = [
  {
    tier: 'Basic' as const,
    tierId: 'basic' as const,
    singlePrice: 89,
    weeklyPrice: 510,
    weeklySavings: 'Save ₹24',
    monthlyPrice: 2250,
    monthlySavings: 'Save ₹64',
    idealFor: 'Light eaters & everyday simple meals'
  },
  {
    tier: 'Standard' as const,
    tierId: 'standard' as const,
    singlePrice: 109,
    weeklyPrice: 625,
    weeklySavings: 'Save ₹29',
    monthlyPrice: 2750,
    monthlySavings: 'Save ₹84',
    popular: true,
    idealFor: 'Full hearty lunch with fresh salad'
  },
  {
    tier: 'Special' as const,
    tierId: 'special' as const,
    singlePrice: 139,
    weeklyPrice: 800,
    weeklySavings: 'Save ₹34',
    monthlyPrice: 3500,
    monthlySavings: 'Save ₹114',
    idealFor: 'Paneer lovers & premium home feast'
  }
];

export const WEEKLY_MENU: DayMenu[] = [
  {
    day: 'Mon',
    fullDay: 'Monday',
    basicSabzi: 'Aloo Gobi Adraki & Green Peas',
    standardSabzi: 'Seasonal Mixed Veg Korma',
    specialCurry: 'Paneer Butter Masala (Rich tomato-cashew)',
    dal: 'Homestyle Toor Dal Tadka',
    rice: 'Steamed Basmati Rice',
    bread: 'Whole Wheat Tawa Rotis',
    sides: 'Kachumber Salad & Green Mango Pickle',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 18,
      dinnerStock: 25
    }
  },
  {
    day: 'Tue',
    fullDay: 'Tuesday',
    basicSabzi: 'Bhindi Masala (Crispy ladyfinger)',
    standardSabzi: 'Methi Matar Malai Curry',
    specialCurry: 'Kadai Paneer with roasted bell peppers',
    dal: 'Moong Dal with desi ghee & hing',
    rice: 'Jeera Cumin Rice',
    bread: 'Warm Phulkas with ghee brush',
    sides: 'Sliced Cucumber, Onions & Fried Green Chilli',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 22,
      dinnerStock: 30
    }
  },
  {
    day: 'Wed',
    fullDay: 'Wednesday',
    basicSabzi: 'Lauki Chana Dal Dry Sabzi',
    standardSabzi: 'Dum Aloo Banarasi',
    specialCurry: 'Paneer Lababdar with grated cottage cheese',
    dal: 'Slow-cooked Homestyle Dal Makhani',
    rice: 'Fragrant Green Peas Pulao',
    bread: 'Soft Whole Wheat Rotis',
    sides: 'Tomato-Cucumber Slaw & Lemon Wedge',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 14,
      dinnerStock: 28
    }
  },
  {
    day: 'Thu',
    fullDay: 'Thursday',
    basicSabzi: 'Aloo Shimla Mirch (Bell pepper stir-fry)',
    standardSabzi: 'Sev Tomato Curry (Kathiyawadi style)',
    specialCurry: 'Palak Paneer with fresh garlic temper',
    dal: 'Panchratna 5-Lentil Dal',
    rice: 'Steamed Kolam Rice',
    bread: 'Fresh Tawa Rotis',
    sides: 'Crisp Onion Rings & Spicy Lemon Pickle',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 19,
      dinnerStock: 24
    }
  },
  {
    day: 'Fri',
    fullDay: 'Friday',
    basicSabzi: 'Gajar Matar Aloo Homestyle',
    standardSabzi: 'Baingan Bharta (Roasted eggplant curry)',
    specialCurry: 'Shahi Malai Paneer in aromatic gravy',
    dal: 'Yellow Chana Dal Fry with garlic',
    rice: 'Fragrant Jeera Rice',
    bread: 'Soft Golden Phulkas',
    sides: 'Garden Green Salad & Papad Churi',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 12,
      dinnerStock: 22
    }
  },
  {
    day: 'Sat',
    fullDay: 'Saturday',
    basicSabzi: 'Punjabi Chole Masala',
    standardSabzi: 'Pindi Chana & Jeera Aloo',
    specialCurry: 'Matar Paneer Curry with Kasuri Methi',
    dal: 'Dhaba Style Tadka Dal',
    rice: 'Kashmiri Saffron Rice',
    bread: 'Whole Wheat Butter Rotis',
    sides: 'Pickled Sirka Onions & Sweet Chutney',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 20,
      dinnerStock: 26
    }
  },
  {
    day: 'Sun',
    fullDay: 'Sunday',
    basicSabzi: 'Rajma Masala (Sunday Special)',
    standardSabzi: 'Veg Kofta in Cashew Gravy',
    specialCurry: 'Paneer Tikka Gravy Thali',
    dal: 'Creamy Black Urad Dal Tadka',
    rice: 'Ghee Basmati Pulao',
    bread: 'Soft Tawa Phulkas',
    sides: 'Boondi Raita & Gulab Jamun bite',
    availableSlots: {
      lunch: true,
      dinner: true,
      lunchStock: 15,
      dinnerStock: 20
    }
  }
];

export const ADD_ONS: AddOnItem[] = [
  {
    id: 'chaas',
    name: 'Masala Buttermilk (Chaas)',
    price: 25,
    description: '250ml chilled probiotic buttermilk with roasted cumin, rock salt & fresh mint.',
    category: 'beverage'
  },
  {
    id: 'gulab-jamun',
    name: 'Hot Gulab Jamun (2 pcs)',
    price: 30,
    description: 'Fresh melt-in-mouth khoya dumplings soaked in fragrant cardamom rose syrup.',
    category: 'sweet'
  },
  {
    id: 'extra-roti',
    name: 'Extra Rotis (Pair of 2)',
    price: 10,
    description: 'Hot puffed 100% whole wheat tawa chapatis with light desi ghee brush.',
    category: 'extra'
  },
  {
    id: 'roasted-papad',
    name: 'Roasted Urad Papad (2 pcs)',
    price: 15,
    description: 'Crispy fire-roasted Lijjat urad papad with black pepper punch.',
    category: 'extra'
  },
  {
    id: 'fresh-dahi',
    name: 'Fresh Homestyle Dahi (150g)',
    price: 20,
    description: 'Creamy, set whole-milk curd in an eco-friendly sealed container.',
    category: 'extra'
  }
];

export const PUNE_HUBS = [
  { name: 'Karve Nagar & Kothrud', areas: 'Cummins College Rd, Dahanukar Colony, Paud Road, Ideal Colony', lunchEta: '12:30 PM', dinnerEta: '7:30 PM' },
  { name: 'Hinjawadi IT Park', areas: 'Phase 1, Phase 2, Phase 3 & Blue Ridge Township', lunchEta: '12:45 PM', dinnerEta: '7:45 PM' },
  { name: 'Wakad & Bhumkar Chowk', areas: 'Datta Mandir Road, Shankar Kalat Nagar, Pink City', lunchEta: '12:35 PM', dinnerEta: '7:35 PM' },
  { name: 'Baner & Balewadi', areas: 'High Street, Pancard Club Rd, Cummins Tech Hub', lunchEta: '1:00 PM', dinnerEta: '8:00 PM' },
  { name: 'Kharadi & EON Free Zone', areas: 'World Trade Center, EON IT Park, Gera Commerzone', lunchEta: '1:15 PM', dinnerEta: '8:15 PM' },
  { name: 'Magarpatta & Hadapsar', areas: 'Cybercity, Seasons Mall perimeter, Amanora Park', lunchEta: '1:20 PM', dinnerEta: '8:20 PM' },
  { name: 'Viman Nagar & Kalyani Nagar', areas: 'Symbiosis Rd, Giga Space, Cerebrum IT Park', lunchEta: '1:10 PM', dinnerEta: '8:00 PM' }
];

/**
 * Calculates current day index in Indian Standard Time (IST - Pune)
 * 0 = Mon, 1 = Tue, 2 = Wed, 3 = Thu, 4 = Fri, 5 = Sat, 6 = Sun
 */
export const getLiveTodayIndex = (): number => {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short'
    });
    const weekday = formatter.format(new Date());
    const dayMap: Record<string, number> = {
      Mon: 0,
      Tue: 1,
      Wed: 2,
      Thu: 3,
      Fri: 4,
      Sat: 5,
      Sun: 6
    };
    if (typeof dayMap[weekday] === 'number') {
      return dayMap[weekday];
    }
  } catch {
    // Fallback if Intl fails
  }
  const day = new Date().getDay(); // 0 = Sun, 1 = Mon ...
  return (day + 6) % 7;
};

/**
 * Returns whether current time in Pune is lunch or dinner slot
 */
export const getLiveSlot = (): DeliverySlot => {
  try {
    const hour = parseInt(
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false
      }).format(new Date()),
      10
    );
    // After 2:30 PM (14:30), switch to dinner slot
    return hour >= 14 ? 'dinner' : 'lunch';
  } catch {
    const hour = new Date().getHours();
    return hour >= 14 ? 'dinner' : 'lunch';
  }
};

/**
 * Returns formatted live date string in Indian Standard Time e.g. "Friday, 23 Oct"
 */
export const getLiveDateFormatted = (): string => {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    }).format(new Date());
  } catch {
    return new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }
};

/**
 * Returns weekly menu array with dynamic live isToday flag
 */
export const getLiveWeeklyMenu = (): DayMenu[] => {
  const todayIdx = getLiveTodayIndex();
  return WEEKLY_MENU.map((menu, idx) => ({
    ...menu,
    isToday: idx === todayIdx
  }));
};

/**
 * Returns the menu for today's live day
 */
export const getLiveTodayMenu = (): DayMenu => {
  const todayIdx = getLiveTodayIndex();
  return {
    ...WEEKLY_MENU[todayIdx],
    isToday: true
  };
};

export const CONTACT_INFO = {
  phoneNumber: '6290894494',
  formattedPhone: '+91 62908 94494',
  whatsappUrl: 'https://wa.me/916290894494',
  callUrl: 'tel:+916290894494',
  instagramUrl: 'https://www.instagram.com/gharka.khana2026?obrf=MWFhc24wMW9jNmVlYQ==',
  facebookUrl: 'https://www.facebook.com/share/1FDsm91kt7/',
  address: 'Karve Nagar & Hinjawadi Kitchen Hubs, Pune'
};


import React from 'react';
import { Sparkles, Utensils, Heart } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';

interface FoodGalleryProps {
  onOrderNow: () => void;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ onOrderNow }) => {
  const highlights = [
    {
      title: 'Tawa-Fresh Phulkas',
      subtitle: 'Puffed with Ghee',
      desc: '100% whole wheat chakki atta, rolled by hand and puffed on cast iron tawas.',
      image: BRAND_ASSETS.hotPhulkas,
      tag: 'Fresh Every Morning'
    },
    {
      title: 'Comforting Dal Tadka',
      subtitle: 'Desi Ghee Tempering',
      desc: 'Slow-simmered yellow toor dal with crackling mustard seeds, curry leaves, and cumin.',
      image: BRAND_ASSETS.dalTadka,
      tag: 'Zero Acidity'
    },
    {
      title: 'Shahi Paneer Curry',
      subtitle: 'Silk Cashew Gravy',
      desc: 'Tender cottage cheese cubes simmered in fresh tomato-cashew puree with mild spices.',
      image: BRAND_ASSETS.shahiPaneer,
      tag: 'Chef Special'
    },
    {
      title: 'Eco-Insulated Dabbas',
      subtitle: 'Pune Doorstep Delivery',
      desc: 'Packed piping hot in multi-tier stainless steel containers that lock in aroma and heat.',
      image: BRAND_ASSETS.tiffinPacking,
      tag: '100% Spill-Proof'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF2DF] border-b border-[#174B2A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A2D] mb-2">
              <Sparkles className="w-4 h-4 text-[#B83A2D]" />
              <span>Ghar Ki Rasoi Se · Fresh Everyday</span>
            </div>
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight">
              A Feast for the Eyes, Comfort for the Soul
            </h2>
            <p className="text-sm sm:text-base text-[#174B2A]/75 mt-2 max-w-xl">
              Cooked twice daily with pure ingredients you would trust in your own mother&apos;s kitchen. Real food, realistic portions, and unmatched freshness.
            </p>
          </div>

          <button
            onClick={onOrderNow}
            className="inline-flex items-center gap-2 bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer self-start md:self-auto shrink-0"
          >
            <Utensils className="w-4 h-4" />
            <span>Taste Today&apos;s Batch</span>
          </button>
        </div>

        {/* 4-Item Visual Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-[#174B2A]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-[#FAF2DF]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#174B2A]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Poppins'] font-bold text-base text-[#174B2A]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#B83A2D] mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#174B2A]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#174B2A]/10 flex items-center justify-between text-[11px] text-[#174B2A]/70">
                  <span className="flex items-center gap-1 font-medium">
                    <Heart className="w-3 h-3 text-[#B83A2D]" />
                    <span>Pure Veg</span>
                  </span>
                  <button
                    onClick={onOrderNow}
                    className="font-bold text-[#174B2A] hover:underline cursor-pointer"
                  >
                    Order Now &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

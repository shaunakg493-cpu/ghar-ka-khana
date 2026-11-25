import React, { useState } from 'react';
import { ShoppingBag, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { MEAL_OPTIONS } from '../data/menuData';
import { MealTier } from '../types/food';

interface MealCardsProps {
  onOrderMeal: (tier: MealTier) => void;
}

export const MealCards: React.FC<MealCardsProps> = ({ onOrderMeal }) => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="rates-and-meals" className="py-16 md:py-24 bg-[#FAF2DF] border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B83A2D] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B41A]" />
            <span>Honest Rates &amp; Everyday Wholesome Meals</span>
          </div>
          <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight [text-wrap:balance]">
            Choose Your Everyday Meal Type
          </h2>
          <p className="text-sm sm:text-base text-[#174B2A]/75 mt-3 leading-relaxed">
            Transparent pricing with zero hidden packing charges. Each meal is hand-crafted with pure whole wheat, fresh vegetables, and home-style hygiene.
          </p>
        </div>

        {/* 3-Column Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEAL_OPTIONS.map((meal) => {
            const isLoaded = loadedImages[meal.id];

            return (
              <div
                key={meal.id}
                className={`flex flex-col bg-[#FFF7E8] rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                  meal.popular
                    ? 'border-[#174B2A] shadow-xl ring-2 ring-[#174B2A]/10'
                    : 'border-[#174B2A]/15 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Image Container with Zero-Broken-Image Fallback */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#FAF2DF]">
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-[#FAF2DF] flex items-center justify-center p-4">
                      <span className="text-xs font-semibold text-[#174B2A]">
                        {meal.name}
                      </span>
                    </div>
                  )}

                  <img
                    src={meal.image}
                    alt={meal.name}
                    className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(meal.id)}
                    referrerPolicy="no-referrer"
                  />

                  {/* Clean badge indicator */}
                  {meal.popular ? (
                    <div className="absolute top-3 left-3 bg-[#B83A2D] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                      Most Popular
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-[#174B2A]/80 backdrop-blur-md text-[#FFF7E8] text-xs font-medium px-2.5 py-1 rounded-md">
                      Vegetarian
                    </div>
                  )}

                  {/* Single Meal Rate Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#174B2A]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg shadow-md flex items-baseline gap-1">
                    <span className="text-xs text-white/80">Single Meal</span>
                    <span className="font-['Poppins'] font-bold text-lg text-white tabular-nums">
                      ₹{meal.price}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="font-['Poppins'] font-bold text-xl text-[#174B2A]">
                        {meal.name}
                      </h3>
                    </div>

                    <p className="text-xs font-medium text-[#B83A2D] mb-3">
                      {meal.tagline}
                    </p>

                    <div className="bg-[#FAF2DF] rounded-xl p-3 border border-[#174B2A]/10 mb-5">
                      <span className="block text-[11px] uppercase tracking-wider text-[#174B2A]/70 font-semibold mb-1">
                        What&apos;s Included:
                      </span>
                      <p className="font-medium text-xs text-[#174B2A]">
                        {meal.included}
                      </p>
                    </div>

                    {/* Inclusions checklist */}
                    <ul className="space-y-2 mb-6">
                      {meal.nutritionalHighlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#174B2A]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#174B2A] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Ordering Action */}
                  <div className="pt-4 border-t border-[#174B2A]/10">
                    <div className="flex items-center justify-between text-xs text-[#174B2A]/70 mb-3">
                      <span>Weekly (6 meals): <strong className="text-[#174B2A] font-bold tabular-nums">₹{meal.weeklyPrice}</strong></span>
                      <span>Monthly (26 meals): <strong className="text-[#174B2A] font-bold tabular-nums">₹{meal.monthlyPrice}</strong></span>
                    </div>

                    <button
                      onClick={() => onOrderMeal(meal.id)}
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-[0.98] ${
                        meal.popular
                          ? 'bg-[#B83A2D] hover:bg-[#962f24] text-white'
                          : 'bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8]'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span>Order Now · ₹{meal.price}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ChefHat, Truck, CalendarCheck2, MessageCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Pick Your Meal or Plan',
      description: 'Order a single trial thali or set a recurring weekly (6 meals) or monthly (26 meals) subscription with your preferred lunch or dinner slot.',
      icon: CalendarCheck2,
    },
    {
      number: '02',
      title: 'Cooked Fresh Like Home',
      description: 'Every morning and evening, our chefs cook small batches using cold-pressed oils, pure whole wheat chakki atta, and hand-selected vegetables.',
      icon: ChefHat,
    },
    {
      number: '03',
      title: 'Hot Doorstep Delivery',
      description: 'Packed piping hot in food-grade insulated thermal containers and delivered promptly across Pune IT parks and residential societies.',
      icon: Truck,
    },
    {
      number: '04',
      title: 'WhatsApp Flexibility',
      description: 'Client meeting outside? Working from home? Travelling? Simply message our WhatsApp helpline (+91 62908 94494) to pause, resume, or redirect your tiffin anytime.',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF2DF] border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B83A2D] block mb-2">
            Comfort Without Complication
          </span>
          <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight">
            How Ghar Ka Khana Works
          </h2>
          <p className="text-sm sm:text-base text-[#174B2A]/75 mt-3">
            Designed specifically for busy professionals across Pune. No daily ordering fatigue, no greasy restaurant food.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FFF7E8] rounded-2xl p-6 border border-[#174B2A]/15 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#174B2A] text-white flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-['Poppins'] font-bold text-2xl text-[#174B2A]/20 tabular-nums">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-['Poppins'] font-bold text-lg text-[#174B2A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#174B2A]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Brand Promise Callout Box matching Brand Book page 2 */}
        <div className="mt-14 bg-[#174B2A] text-[#FFF7E8] rounded-2xl p-8 md:p-10 shadow-lg text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="text-xs uppercase font-semibold text-white/80 tracking-widest block">
              Our Core Promise
            </span>
            <p className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-white leading-snug">
              &ldquo;We make everyday meals feel a little more like home.&rdquo;
            </p>
            <p className="text-sm text-white/80 max-w-xl mx-auto">
              Prepared without artificial coloring, excessive sodium, or reusable frying oil. Just nourishing everyday food you can eat comfortably 365 days a year.
            </p>
            <div className="pt-2">
              <span className="text-sm font-semibold text-white/90 tracking-wider uppercase font-['Poppins']">
                — Ghar Ka Khana · Thoda Ghar, Har Roz.
              </span>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

      </div>
    </section>
  );
};

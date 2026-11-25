import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_ASSETS, getLiveTodayMenu, getLiveSlot } from '../data/menuData';

interface HeroProps {
  onOpenOrder: (tier?: 'basic' | 'standard' | 'special', plan?: 'single' | 'weekly' | 'monthly') => void;
  onExplorePlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExplorePlans }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const todayMenu = getLiveTodayMenu();
  const liveSlot = getLiveSlot();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7E8] via-[#FFF7E8] to-[#FAF2DF] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column Hero split with balanced typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Clean unboxed kicker (no pill badge) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B83A2D] uppercase mb-4">
              <Sparkles className="w-4 h-4 text-[#B83A2D]" />
              <span>Pune Home-Style Tiffin Subscription</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#174B2A] leading-[1.15] tracking-tight mb-5 [text-wrap:balance]">
              A little ghar ka comfort in your busy workday.
            </h1>

            <p className="text-base sm:text-lg text-[#174B2A]/80 leading-relaxed max-w-2xl mb-8">
              Tired of oily takeout and daily lunch dilemmas? <strong className="text-[#174B2A] font-semibold">Ghar Ka Khana</strong> brings honest, homemade vegetarian thalis right to your office or doorstep across Pune. Warm rotis, balanced seasonal sabzi, slow-simmered dal, and fragrant rice—just like home.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => onOpenOrder('standard', 'single')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Order Today&apos;s Meal · From ₹89</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onExplorePlans}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#174B2A]/5 text-[#174B2A] border border-[#174B2A]/30 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Weekly Plans</span>
              </button>
            </div>

            {/* Clean unboxed proof points (anti-slop rule: clean typographic separators, no pill enclosures) */}
            <div className="pt-6 border-t border-[#174B2A]/10 text-xs sm:text-sm text-[#174B2A]/85 flex flex-wrap items-center gap-y-2 gap-x-4">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
                100% Homestyle Pure Veg
              </span>
              <span aria-hidden="true" className="text-[#174B2A]/30">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
                Zero Excessive Oil or Soda
              </span>
              <span aria-hidden="true" className="text-[#174B2A]/30">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
                Pause or Skip Anytime
              </span>
            </div>
          </div>

          {/* Right Column: Hero High-Fidelity Food Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF7E8] bg-[#FAF2DF]">
              
              {/* Fallback container for Zero-Broken-Image Policy */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#FAF2DF] to-[#f0e5cf] flex items-center justify-center text-center p-6 ${
                  imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } transition-opacity duration-300`}
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#174B2A]/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#174B2A]" />
                  </div>
                  <p className="font-['Poppins'] font-bold text-[#174B2A]">Ghar Ka Khana Special Thali</p>
                  <p className="text-xs text-[#174B2A]/70">Freshly made daily in Pune</p>
                </div>
              </div>

              <img
                src={BRAND_ASSETS.heroThali}
                alt="Ghar Ka Khana authentic Indian vegetarian thali with soft rotis, dal tadka, paneer curry, and steamed rice"
                className={`w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Tag overlay matching Brand Book page 3 styling */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#174B2A]/90 backdrop-blur-md rounded-xl p-3.5 text-white border border-white/20 shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-['Poppins'] font-semibold text-[#FFF7E8] text-sm">
                      Today&apos;s Fresh {liveSlot === 'lunch' ? 'Lunch' : 'Dinner'} ({todayMenu.fullDay})
                    </p>
                    <p className="text-white/80 text-[11px] truncate max-w-[280px]">
                      {todayMenu.basicSabzi} · {todayMenu.dal}
                    </p>
                  </div>
                  <div className="text-right pl-3 border-l border-white/20">
                    <span className="block text-[10px] uppercase text-white/80 font-medium tracking-wide">
                      Single Meal
                    </span>
                    <span className="font-['Poppins'] font-bold text-lg text-white tabular-nums">
                      ₹89<span className="text-xs font-normal text-white/80"> onwards</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative rooted corner embellishment */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#174B2A]/10 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#174B2A]/15 rounded-full blur-2xl -z-10" />
          </div>

        </div>

        {/* 4-Item Proof & Reassurance Row */}
        <div className="mt-14 pt-8 border-t border-[#174B2A]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <span className="block font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#174B2A] tabular-nums">
              ₹89
            </span>
            <span className="text-xs sm:text-sm text-[#174B2A]/70 mt-1 block">
              Transparent Everyday Meal Starting Price
            </span>
          </div>
          <div className="p-3">
            <span className="block font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#174B2A] tabular-nums">
              100%
            </span>
            <span className="text-xs sm:text-sm text-[#174B2A]/70 mt-1 block">
              Whole Wheat Atta &amp; Desi Ghee Phulkas
            </span>
          </div>
          <div className="p-3">
            <span className="block font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#174B2A] tabular-nums">
              2 Slots
            </span>
            <span className="text-xs sm:text-sm text-[#174B2A]/70 mt-1 block">
              Daily Lunch &amp; Dinner Delivery
            </span>
          </div>
          <div className="p-3">
            <span className="block font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#174B2A] tabular-nums">
              Pune Corridors
            </span>
            <span className="text-xs sm:text-sm text-[#174B2A]/70 mt-1 block">
              Karve Nagar, Hinjawadi, Baner &amp; Wakad
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

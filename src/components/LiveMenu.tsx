import React, { useState } from 'react';
import { Clock, Utensils, Flame, Check, AlertCircle, Sparkles, Plus, Calendar } from 'lucide-react';
import { 
  MEAL_OPTIONS, 
  ADD_ONS, 
  getLiveWeeklyMenu, 
  getLiveTodayIndex, 
  getLiveSlot, 
  getLiveDateFormatted 
} from '../data/menuData';
import { DeliverySlot } from '../types/food';

interface LiveMenuProps {
  onSelectMeal: (tierId: 'basic' | 'standard' | 'special', slot: DeliverySlot, day: string) => void;
  onQuickAddExtra: (item: typeof ADD_ONS[0]) => void;
}

export const LiveMenu: React.FC<LiveMenuProps> = ({ onSelectMeal, onQuickAddExtra }) => {
  const liveWeeklyMenu = getLiveWeeklyMenu();
  const liveTodayIndex = getLiveTodayIndex();
  const liveDateFormatted = getLiveDateFormatted();

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(() => liveTodayIndex);
  const [selectedSlot, setSelectedSlot] = useState<DeliverySlot>(() => getLiveSlot());
  
  // Dynamic availability simulation state
  const [soldOutOverride, setSoldOutOverride] = useState<{ [key: string]: boolean }>({});

  const currentMenu = liveWeeklyMenu[selectedDayIndex] || liveWeeklyMenu[0];
  const isViewingToday = selectedDayIndex === liveTodayIndex;

  const isSoldOut = (tier: string) => {
    const key = `${currentMenu.day}-${selectedSlot}-${tier}`;
    return soldOutOverride[key] || false;
  };

  const toggleAvailability = (tier: string) => {
    const key = `${currentMenu.day}-${selectedSlot}-${tier}`;
    setSoldOutOverride(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const stockRemaining = selectedSlot === 'lunch' ? currentMenu.availableSlots.lunchStock : currentMenu.availableSlots.dinnerStock;

  return (
    <section id="aaj-ka-menu" className="py-16 md:py-24 bg-[#FFF7E8] border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B83A2D] uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-[#B83A2D]" />
              <span>Interactive Weekly Roster · Live Pune Kitchen</span>
            </div>
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight">
              Aaj Ka Menu &amp; Daily Specials
            </h2>
            <p className="text-sm sm:text-base text-[#174B2A]/75 mt-1 max-w-xl">
              Freshly cooked twice daily with seasonal market produce. Live for <strong className="text-[#174B2A] font-semibold">{liveDateFormatted}</strong> in Pune.
            </p>
          </div>

          {/* Slot Toggle: Lunch vs Dinner */}
          <div className="flex items-center bg-[#FAF2DF] p-1.5 rounded-xl border border-[#174B2A]/15 self-start md:self-auto shrink-0">
            <button
              onClick={() => setSelectedSlot('lunch')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedSlot === 'lunch'
                  ? 'bg-[#174B2A] text-[#FFF7E8] shadow-sm'
                  : 'text-[#174B2A]/70 hover:text-[#174B2A]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Lunch (12:30 – 1:45 PM)</span>
            </button>
            <button
              onClick={() => setSelectedSlot('dinner')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedSlot === 'dinner'
                  ? 'bg-[#174B2A] text-[#FFF7E8] shadow-sm'
                  : 'text-[#174B2A]/70 hover:text-[#174B2A]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Dinner (7:30 – 8:45 PM)</span>
            </button>
          </div>
        </div>

        {/* Day Selector Ribbon (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {liveWeeklyMenu.map((menu, idx) => {
            const isSelected = selectedDayIndex === idx;
            return (
              <button
                key={menu.day}
                onClick={() => setSelectedDayIndex(idx)}
                className={`flex-1 min-w-[100px] sm:min-w-[120px] py-3 px-3 rounded-xl text-center border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#174B2A] text-[#FFF7E8] border-[#174B2A] shadow-md scale-[1.02]'
                    : 'bg-[#FAF2DF]/70 text-[#174B2A] border-[#174B2A]/10 hover:bg-[#FAF2DF] hover:border-[#174B2A]/25'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span className="font-['Poppins'] font-bold text-sm sm:text-base">
                    {menu.day}
                  </span>
                  {menu.isToday && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      isSelected ? 'bg-[#FFF7E8] text-[#174B2A]' : 'bg-[#B83A2D] text-white shadow-sm'
                    }`}>
                      Today
                    </span>
                  )}
                </div>
                <span className={`block text-[11px] truncate mt-0.5 ${
                  isSelected ? 'text-white/80' : 'text-[#174B2A]/60'
                }`}>
                  {menu.fullDay}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Status & Availability Banner */}
        <div className="bg-[#FAF2DF] rounded-xl p-4 sm:p-5 border border-[#174B2A]/15 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs sm:text-sm font-semibold text-[#174B2A]">
                  {isViewingToday
                    ? `Kitchen Status: Preparing Today's (${currentMenu.fullDay}, ${liveDateFormatted}) ${selectedSlot === 'lunch' ? 'Lunch' : 'Dinner'} Batch`
                    : `Kitchen Status: Viewing Scheduled Roster for ${currentMenu.fullDay} (${selectedSlot === 'lunch' ? 'Lunch' : 'Dinner'})`
                  }
                </p>
                {!isViewingToday && (
                  <button
                    onClick={() => setSelectedDayIndex(liveTodayIndex)}
                    className="text-[11px] font-bold text-[#B83A2D] hover:underline cursor-pointer flex items-center gap-1 bg-[#B83A2D]/10 px-2 py-0.5 rounded-full"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Switch to Today ({liveWeeklyMenu[liveTodayIndex]?.day})</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-[#174B2A]/70 mt-0.5">
                Estimated dispatch in insulated thali containers · Pune delivery hubs (Karve Nagar, Hinjawadi, Baner, Wakad)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <span className="text-[#174B2A]/80 font-medium">
              Slots remaining: <strong className="text-[#174B2A] font-bold tabular-nums">{stockRemaining} Thalis</strong>
            </span>
            <div className="hidden md:flex items-center gap-1 text-[11px] text-[#174B2A]/60 italic">
              (Live kitchen counter)
            </div>
          </div>
        </div>

        {/* 3 Interactive Daily Meal Cards (Basic, Standard, Special) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Basic Veg Meal */}
          {(() => {
            const basic = MEAL_OPTIONS.find(m => m.id === 'basic')!;
            const soldOut = isSoldOut('basic');

            return (
              <div className={`flex flex-col justify-between bg-white rounded-2xl p-6 border transition-all ${
                soldOut ? 'border-neutral-200 bg-neutral-50/70 opacity-80' : 'border-[#174B2A]/15 shadow-sm hover:shadow-md hover:border-[#174B2A]/30'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#174B2A]/70">
                      Meal Type 1
                    </span>
                    <span className="font-['Poppins'] font-bold text-xl text-[#174B2A] tabular-nums">
                      ₹{basic.price}
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-xl text-[#174B2A] mb-1">
                    {basic.name}
                  </h3>
                  <p className="text-xs text-[#174B2A]/70 mb-4">
                    {basic.included}
                  </p>

                  <div className="bg-[#FFF7E8] rounded-xl p-3.5 border border-[#174B2A]/10 space-y-2 mb-4 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">
                        {isViewingToday ? "Today's Sabzi:" : `${currentMenu.day}'s Sabzi:`}
                      </span>
                      <span className="text-[#174B2A]/90 font-medium">{currentMenu.basicSabzi}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Dal:</span>
                      <span className="text-[#174B2A]/80">{currentMenu.dal}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Bread &amp; Rice:</span>
                      <span className="text-[#174B2A]/80">3 Tawa Rotis + {currentMenu.rice}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#174B2A]/75 mb-6">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#174B2A]" />
                      {soldOut ? 'Currently Sold Out' : 'Available for ' + selectedSlot}
                    </span>
                    <button
                      onClick={() => toggleAvailability('basic')}
                      className="text-[11px] underline text-[#B83A2D] hover:text-[#962f24] cursor-pointer"
                    >
                      {soldOut ? 'Simulate Restock' : 'Simulate Out of Stock'}
                    </button>
                  </div>
                </div>

                <button
                  disabled={soldOut}
                  onClick={() => onSelectMeal('basic', selectedSlot, currentMenu.day)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                    soldOut
                      ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                      : 'bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] shadow-sm hover:shadow'
                  }`}
                >
                  {soldOut ? 'Sold Out for this Slot' : `Order Basic Meal · ₹${basic.price}`}
                </button>
              </div>
            );
          })()}

          {/* Card 2: Standard Veg Meal (Featured) */}
          {(() => {
            const standard = MEAL_OPTIONS.find(m => m.id === 'standard')!;
            const soldOut = isSoldOut('standard');

            return (
              <div className={`relative flex flex-col justify-between bg-white rounded-2xl p-6 border-2 transition-all ${
                soldOut ? 'border-neutral-200 bg-neutral-50/70 opacity-80' : 'border-[#174B2A] shadow-md hover:shadow-lg'
              }`}>
                {/* Popular tag */}
                <div className="absolute -top-3.5 left-6 bg-[#174B2A] text-[#F4B41A] text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#F4B41A]" />
                  <span>Most Popular Daily Thali</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#174B2A]">
                      Meal Type 2
                    </span>
                    <span className="font-['Poppins'] font-bold text-2xl text-[#174B2A] tabular-nums">
                      ₹{standard.price}
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-xl text-[#174B2A] mb-1">
                    {standard.name}
                  </h3>
                  <p className="text-xs text-[#174B2A]/70 mb-4">
                    {standard.included}
                  </p>

                  <div className="bg-[#FAF2DF] rounded-xl p-3.5 border border-[#174B2A]/15 space-y-2 mb-4 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Main Sabzi:</span>
                      <span className="text-[#174B2A] font-semibold">{currentMenu.standardSabzi}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Dal:</span>
                      <span className="text-[#174B2A]/80">{currentMenu.dal}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Included:</span>
                      <span className="text-[#174B2A]/80">4 Phulkas + {currentMenu.rice}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Salad:</span>
                      <span className="text-[#174B2A]/80">{currentMenu.sides}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#174B2A]/75 mb-6">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#174B2A]" />
                      {soldOut ? 'Currently Sold Out' : 'Ready & Baking Fresh'}
                    </span>
                    <button
                      onClick={() => toggleAvailability('standard')}
                      className="text-[11px] underline text-[#B83A2D] hover:text-[#962f24] cursor-pointer"
                    >
                      {soldOut ? 'Simulate Restock' : 'Simulate Out of Stock'}
                    </button>
                  </div>
                </div>

                <button
                  disabled={soldOut}
                  onClick={() => onSelectMeal('standard', selectedSlot, currentMenu.day)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    soldOut
                      ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                      : 'bg-[#B83A2D] hover:bg-[#962f24] text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {soldOut ? 'Sold Out for this Slot' : `Order Standard Meal · ₹${standard.price}`}
                </button>
              </div>
            );
          })()}

          {/* Card 3: Special Veg Meal */}
          {(() => {
            const special = MEAL_OPTIONS.find(m => m.id === 'special')!;
            const soldOut = isSoldOut('special');

            return (
              <div className={`flex flex-col justify-between bg-white rounded-2xl p-6 border transition-all ${
                soldOut ? 'border-neutral-200 bg-neutral-50/70 opacity-80' : 'border-[#174B2A]/15 shadow-sm hover:shadow-md hover:border-[#174B2A]/30'
              }`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#174B2A]/70">
                      Meal Type 3
                    </span>
                    <span className="font-['Poppins'] font-bold text-xl text-[#174B2A] tabular-nums">
                      ₹{special.price}
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-xl text-[#174B2A] mb-1">
                    {special.name}
                  </h3>
                  <p className="text-xs text-[#174B2A]/70 mb-4">
                    {special.included}
                  </p>

                  <div className="bg-[#FFF7E8] rounded-xl p-3.5 border border-[#174B2A]/10 space-y-2 mb-4 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Special Curry:</span>
                      <span className="text-[#B83A2D] font-bold">{currentMenu.specialCurry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Dal Fry:</span>
                      <span className="text-[#174B2A]/80">{currentMenu.dal} (Desi Ghee)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Bread &amp; Rice:</span>
                      <span className="text-[#174B2A]/80">4 Rotis + {currentMenu.rice}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[#174B2A] min-w-[70px]">Salad:</span>
                      <span className="text-[#174B2A]/80">{currentMenu.sides}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#174B2A]/75 mb-6">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#174B2A]" />
                      {soldOut ? 'Currently Sold Out' : 'Available with Fresh Paneer'}
                    </span>
                    <button
                      onClick={() => toggleAvailability('special')}
                      className="text-[11px] underline text-[#B83A2D] hover:text-[#962f24] cursor-pointer"
                    >
                      {soldOut ? 'Simulate Restock' : 'Simulate Out of Stock'}
                    </button>
                  </div>
                </div>

                <button
                  disabled={soldOut}
                  onClick={() => onSelectMeal('special', selectedSlot, currentMenu.day)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                    soldOut
                      ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                      : 'bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] shadow-sm hover:shadow'
                  }`}
                >
                  {soldOut ? 'Sold Out for this Slot' : `Order Special Meal · ₹${special.price}`}
                </button>
              </div>
            );
          })()}

        </div>

        {/* Quick Add-ons Strip */}
        <div className="mt-12 pt-8 border-t border-[#174B2A]/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-['Poppins'] font-bold text-base text-[#174B2A] flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#F4B41A]" />
              <span>Ghar Ke Extras &amp; Beverages</span>
            </h4>
            <span className="text-xs text-[#174B2A]/60">Pair with any thali</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ADD_ONS.map(item => (
              <div
                key={item.id}
                className="bg-[#FAF2DF]/70 rounded-xl p-3 border border-[#174B2A]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="font-semibold text-xs text-[#174B2A] leading-tight">
                      {item.name}
                    </span>
                    <span className="font-['Poppins'] font-bold text-xs text-[#174B2A] tabular-nums shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#174B2A]/65 line-clamp-2 mb-2">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => onQuickAddExtra(item)}
                  className="w-full flex items-center justify-center gap-1 bg-[#174B2A]/10 hover:bg-[#174B2A] text-[#174B2A] hover:text-[#FFF7E8] py-1.5 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add · ₹{item.price}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

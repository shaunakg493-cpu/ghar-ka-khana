import React, { useState } from 'react';
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { SUBSCRIPTION_TABLE } from '../data/menuData';
import { MealTier, PlanDuration } from '../types/food';

interface SubscriptionPlansProps {
  onSelectSubscription: (tier: MealTier, plan: PlanDuration) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onSelectSubscription }) => {
  const [selectedDuration, setSelectedDuration] = useState<PlanDuration>('weekly');

  return (
    <section id="subscriptions" className="py-16 md:py-24 bg-[#FFF7E8] border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A2D] mb-2">
              <Calendar className="w-4 h-4 text-[#174B2A]" />
              <span>Section 2 · Planned Subscription Plans</span>
            </div>
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight">
              Predictable Meals, Transparent Savings
            </h2>
            <p className="text-sm sm:text-base text-[#174B2A]/75 mt-2 max-w-xl">
              Save your precious weekday brainpower. Choose Weekly (6 meals) or Monthly (26 meals) with full flexibility to pause or skip anytime.
            </p>
          </div>

          {/* Interactive Duration Switcher */}
          <div className="flex items-center bg-[#FAF2DF] p-1.5 rounded-xl border border-[#174B2A]/15 self-start md:self-auto shrink-0">
            <button
              onClick={() => setSelectedDuration('single')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedDuration === 'single'
                  ? 'bg-[#174B2A] text-[#FFF7E8] shadow-sm'
                  : 'text-[#174B2A]/70 hover:text-[#174B2A]'
              }`}
            >
              Single Meal
            </button>
            <button
              onClick={() => setSelectedDuration('weekly')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedDuration === 'weekly'
                  ? 'bg-[#174B2A] text-[#FFF7E8] shadow-sm'
                  : 'text-[#174B2A]/70 hover:text-[#174B2A]'
              }`}
            >
              Weekly · 6 Meals
            </button>
            <button
              onClick={() => setSelectedDuration('monthly')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedDuration === 'monthly'
                  ? 'bg-[#174B2A] text-[#FFF7E8] shadow-sm'
                  : 'text-[#174B2A]/70 hover:text-[#174B2A]'
              }`}
            >
              Monthly · 26 Meals
            </button>
          </div>
        </div>

        {/* Dynamic Rate Cards based on duration switch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SUBSCRIPTION_TABLE.map((item) => {
            const isWeekly = selectedDuration === 'weekly';
            const isMonthly = selectedDuration === 'monthly';
            
            const currentPrice = isMonthly
              ? item.monthlyPrice
              : isWeekly
              ? item.weeklyPrice
              : item.singlePrice;

            const savings = isMonthly ? item.monthlySavings : isWeekly ? item.weeklySavings : null;

            return (
              <div
                key={item.tierId}
                className={`flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border transition-all ${
                  item.popular
                    ? 'border-[#174B2A] shadow-xl ring-2 ring-[#174B2A]/10 bg-gradient-to-b from-white to-[#FAF2DF]/40'
                    : 'border-[#174B2A]/15 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-['Poppins'] font-bold text-xl text-[#174B2A]">
                      {item.tier} Veg Plan
                    </span>
                    {item.popular && (
                      <span className="bg-[#B83A2D] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Best Value
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#174B2A]/70 mb-6">
                    {item.idealFor}
                  </p>

                  {/* Price display with tabular figures */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#174B2A] tabular-nums">
                      ₹{currentPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#174B2A]/70 font-medium">
                      / {selectedDuration === 'monthly' ? '26 meals' : selectedDuration === 'weekly' ? '6 meals' : 'meal'}
                    </span>
                  </div>

                  {savings && (
                    <div className="inline-block text-xs font-semibold text-[#174B2A] bg-[#174B2A]/10 px-2 py-0.5 rounded mb-6">
                      {savings} vs single meal rates
                    </div>
                  )}

                  <div className="space-y-3 pt-4 border-t border-[#174B2A]/10 mb-8 text-xs text-[#174B2A]/85">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#174B2A] shrink-0" />
                      <span>Free doorstep delivery to office or apartment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#174B2A] shrink-0" />
                      <span>Pause or skip days with 1 tap on WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#174B2A] shrink-0" />
                      <span>Switch between Lunch &amp; Dinner slots freely</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#174B2A] shrink-0" />
                      <span>Eco-friendly insulated stainless/reusable packaging</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectSubscription(item.tierId, selectedDuration)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow active:scale-[0.98] ${
                    item.popular
                      ? 'bg-[#B83A2D] hover:bg-[#962f24] text-white'
                      : 'bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8]'
                  }`}
                >
                  <span>Select {item.tier} Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Master Comparison Table - Exactly matching the uploaded rate sheet */}
        <div className="bg-[#FAF2DF] rounded-2xl p-6 sm:p-8 border border-[#174B2A]/15 overflow-hidden">
          <div className="mb-4">
            <h3 className="font-['Poppins'] font-bold text-lg text-[#174B2A] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#174B2A]" />
              <span>Complete Rate Matrix (From Official Rate Card)</span>
            </h3>
            <p className="text-xs text-[#174B2A]/70">
              Transparent per-meal breakdown for budget clarity.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#174B2A]">
              <thead>
                <tr className="border-b border-[#174B2A]/20 text-xs uppercase font-semibold text-[#174B2A]/70">
                  <th className="py-3 px-4">Plan</th>
                  <th className="py-3 px-4">Basic</th>
                  <th className="py-3 px-4 bg-[#174B2A]/5 font-bold text-[#174B2A]">Standard</th>
                  <th className="py-3 px-4">Special</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#174B2A]/10 font-medium">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#174B2A]">Single meal</td>
                  <td className="py-3.5 px-4 tabular-nums">₹89</td>
                  <td className="py-3.5 px-4 bg-[#174B2A]/5 font-bold tabular-nums">₹109</td>
                  <td className="py-3.5 px-4 tabular-nums">₹139</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#174B2A]">Weekly — 6 meals</td>
                  <td className="py-3.5 px-4 tabular-nums">₹510</td>
                  <td className="py-3.5 px-4 bg-[#174B2A]/5 font-bold tabular-nums">₹625</td>
                  <td className="py-3.5 px-4 tabular-nums">₹800</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#174B2A]">Monthly — 26 meals</td>
                  <td className="py-3.5 px-4 tabular-nums">₹2,250</td>
                  <td className="py-3.5 px-4 bg-[#174B2A]/5 font-bold tabular-nums">₹2,750</td>
                  <td className="py-3.5 px-4 tabular-nums">₹3,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Flexible Pause Policy Note */}
          <div className="mt-6 pt-4 border-t border-[#174B2A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#174B2A]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#174B2A] shrink-0" />
              <span>
                <strong>Working late or travelling?</strong> Inform before 9:00 AM for Lunch or 4:00 PM for Dinner and your unused meal credit is safely rolled forward.
              </span>
            </div>
            <span className="font-semibold text-[#B83A2D] shrink-0">
              Zero forfeiture · Zero cancellation penalty
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock } from 'lucide-react';
import { PUNE_HUBS } from '../data/menuData';

interface PuneCoverageProps {
  onOrderNow: () => void;
}

export const PuneCoverage: React.FC<PuneCoverageProps> = ({ onOrderNow }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHubs = PUNE_HUBS.filter(
    hub =>
      hub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.areas.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="delivery-zones" className="py-16 md:py-24 bg-[#FFF7E8] border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A2D] mb-2">
              <MapPin className="w-4 h-4 text-[#B83A2D]" />
              <span>Dedicated Pune Delivery Network</span>
            </div>
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight">
              Hot Delivery to Your Office &amp; Home
            </h2>
            <p className="text-sm sm:text-base text-[#174B2A]/75 mt-2 max-w-xl">
              We cover Karve Nagar, Kothrud, Hinjawadi, Baner, Wakad, Kharadi, and Magarpatta twice daily with punctual dispatch.
            </p>
          </div>

          {/* Quick Locality Filter */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#174B2A]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Check your Pune locality or IT park..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#174B2A]/20 bg-[#FAF2DF] text-xs sm:text-sm text-[#174B2A] placeholder:text-[#174B2A]/40 focus:outline-none focus:ring-2 focus:ring-[#174B2A]"
            />
          </div>
        </div>

        {/* Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHubs.map((hub) => (
            <div
              key={hub.name}
              className="bg-white rounded-xl p-5 border border-[#174B2A]/15 shadow-sm hover:border-[#174B2A]/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#174B2A]" />
                  <h3 className="font-['Poppins'] font-bold text-base text-[#174B2A]">
                    {hub.name}
                  </h3>
                </div>
                <p className="text-xs text-[#174B2A]/75 leading-relaxed mb-4">
                  {hub.areas}
                </p>
              </div>

              <div className="pt-3 border-t border-[#174B2A]/10 flex items-center justify-between text-xs text-[#174B2A]/80">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#B83A2D]" />
                  <span>Lunch: <strong>{hub.lunchEta}</strong></span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#174B2A]" />
                  <span>Dinner: <strong>{hub.dinnerEta}</strong></span>
                </span>
              </div>
            </div>
          ))}

          {filteredHubs.length === 0 && (
            <div className="col-span-full text-center py-8 bg-[#FAF2DF] rounded-xl border border-dashed border-[#174B2A]/20 p-6">
              <p className="text-sm font-semibold text-[#174B2A]">
                Don&apos;t see your locality?
              </p>
              <p className="text-xs text-[#174B2A]/70 mt-1 mb-4">
                We frequently expand route batches for office clusters with 3+ subscription requests.
              </p>
              <button
                onClick={onOrderNow}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#174B2A] text-[#FFF7E8] text-xs font-semibold rounded-lg hover:bg-[#0f331c] cursor-pointer"
              >
                <span>Request Custom Delivery Route</span>
              </button>
            </div>
          )}
        </div>

        {/* Delivery Guarantee Pill Strip */}
        <div className="mt-8 bg-[#FAF2DF] rounded-xl p-4 border border-[#174B2A]/15 flex flex-wrap items-center justify-around gap-4 text-xs text-[#174B2A]">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
            Spill-Proof Heat Retaining Boxes
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
            Zero Delivery Charges on Subscriptions
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
            Real-Time WhatsApp Dispatch Updates
          </span>
        </div>

      </div>
    </section>
  );
};

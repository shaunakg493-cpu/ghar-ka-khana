import React from 'react';
import { ArrowLeft, Heart, ShieldCheck, Clock, Users, Sparkles, ChefHat, Leaf, CheckCircle2 } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';

interface OurStoryProps {
  onBackToHome: () => void;
  onOpenOrder: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onBackToHome, onOpenOrder }) => {
  return (
    <div className="bg-[#FFF7E8] min-h-screen py-8 md:py-16 text-[#174B2A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#174B2A] hover:text-[#0f331c] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home &amp; Menu</span>
          </button>
        </div>

        {/* Story Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A2D] mb-3">
            <Heart className="w-4 h-4 text-[#B83A2D]" />
            <span>Origins &amp; Culinary Roots</span>
          </div>
          <h1 className="font-['Poppins'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#174B2A] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            How a Longing for Home-Cooked Food Sparked Ghar Ka Khana
          </h1>
          <p className="font-['Poppins'] text-lg sm:text-xl font-medium text-[#B83A2D] italic">
            &ldquo;Thoda Ghar, Har Roz.&rdquo;
          </p>
        </div>

        {/* Featured Story Kitchen Photography */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFF7E8] mb-14 bg-[#FAF2DF]">
          <img
            src={BRAND_ASSETS.ourStoryKitchen}
            alt="Warm home kitchen with whole wheat phulka puffing on tawa and brass spice dabba"
            className="w-full h-[320px] sm:h-[440px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#174B2A]/90 backdrop-blur-md rounded-xl p-4 text-white border border-[#FFF7E8]/20 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#FFF7E8] text-sm">
                From a Small Kitchen in Pune to Hundreds of Everyday Desks
              </span>
              <span className="text-white/80">
                Freshly hand-rolled whole wheat phulkas &amp; slow-cooked dal
              </span>
            </div>
          </div>
        </div>

        {/* Chapter 1: The Origin Story */}
        <div className="space-y-8 text-base text-[#174B2A]/85 leading-relaxed mb-16">
          <div className="border-l-2 border-[#174B2A] pl-5 sm:pl-6 space-y-4">
            <h2 className="font-['Poppins'] text-2xl font-bold text-[#174B2A]">
              01. The Problem with 8 PM in Karve Nagar
            </h2>
            <p>
              Like thousands of young software engineers, designers, and analysts working in Pune’s tech corridors—from Karve Nagar and Kothrud to Hinjawadi and Kharadi—our founders knew the daily fatigue too well. After 10 hours of meetings, standups, and traffic, the most stressful question of the evening was: <em>&ldquo;Aaj khane mein kya mangwayein?&rdquo;</em>
            </p>
            <p>
              Food delivery apps were filled with glossy restaurant curries floating in red oil and food coloring. Mess food was repetitive, and cooking fresh rotis and vegetables from scratch after 8 PM felt impossible. We didn&apos;t want celebratory restaurant dinners every day; we just wanted a comforting katori of yellow dal, soft rotis with a dab of desi ghee, and a seasonal sabzi that didn&apos;t leave us feeling bloated or sluggish.
            </p>
          </div>

          {/* Chapter 2: Listening to 24–28 Year Old Professionals */}
          <div className="border-l-2 border-[#B83A2D] pl-5 sm:pl-6 space-y-4">
            <h2 className="font-['Poppins'] text-2xl font-bold text-[#174B2A]">
              02. The Discovery: Comfort Without Complication
            </h2>
            <p>
              In late 2026, we spent weeks conducting in-depth qualitative conversations with Pune working professionals. What we heard was striking:
            </p>
            <ul className="space-y-2 text-sm text-[#174B2A] bg-white rounded-xl p-5 border border-[#174B2A]/15">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#174B2A] mt-0.5 shrink-0" />
                <span><strong>Rohan (26)</strong> told us finding decent food took too much time, and he wanted fixed-time delivery without having to chase delivery drivers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#174B2A] mt-0.5 shrink-0" />
                <span><strong>Sneha (25)</strong> craved honest chapatis and seasonal greens with transparent pricing and no hidden packing fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#174B2A] mt-0.5 shrink-0" />
                <span><strong>Pratik (27)</strong> needed the freedom to pause his lunch or dinner when meeting schedules shifted unexpectedly.</span>
              </li>
            </ul>
            <p>
              The consensus was clear: people didn’t need more gourmet burgers or 40-minute delivery lotteries. They needed a dependable, wholesome food routine that felt like family cooking.
            </p>
          </div>

          {/* Chapter 3: Our Mission */}
          <div className="bg-[#FAF2DF] rounded-2xl p-8 border border-[#174B2A]/20 text-center space-y-4">
            <span className="text-xs font-bold text-[#B83A2D] uppercase tracking-widest block">
              Our Guiding Mission
            </span>
            <p className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-[#174B2A] leading-snug">
              &ldquo;We make everyday meals feel a little more like home.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-[#174B2A]/80 max-w-2xl mx-auto leading-relaxed">
              We believe everyday food should never be a compromise. You deserve wholesome food cooked with pure whole wheat chakki atta, fresh seasonal produce, and unhurried home-style recipes—delivered right on time to your office desk or apartment door.
            </p>
          </div>

          {/* Chapter 4: The 4 Sacred Kitchen Rules */}
          <div className="space-y-6 pt-4">
            <h2 className="font-['Poppins'] text-2xl font-bold text-[#174B2A]">
              03. The Ghar Ka Khana Kitchen Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white rounded-xl p-5 border border-[#174B2A]/15 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#174B2A] text-white flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-base text-[#174B2A]">
                    Zero Reused Palm Oil
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#174B2A]/75">
                  Commercial kitchens repeatedly fry with heavy palm oil. We strictly cook with cold-pressed sunflower and mustard oil, brushing our phulkas with pure desi cow ghee.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#174B2A]/15 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#174B2A] text-white flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-base text-[#174B2A]">
                    100% Whole Wheat Chakki Atta
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#174B2A]/75">
                  No maida, no artificial dough softeners. Every phulka is rolled fresh and puffed over open fire, staying soft naturally in thermal insulated containers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#174B2A]/15 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#174B2A] text-white flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-base text-[#174B2A]">
                    Small Batches Cooked Twice Daily
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#174B2A]/75">
                  We don’t cook once and reheat all day. The lunch batch is freshly cooked at 10:00 AM, and the dinner batch is prepared at 5:00 PM for peak freshness.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#174B2A]/15 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#174B2A] text-white flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-base text-[#174B2A]">
                    Complete Pause Flexibility
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#174B2A]/75">
                  Work schedules change and travel happens. A simple WhatsApp message pauses your meal credits with zero penalties or bureaucratic hoops.
                </p>
              </div>

            </div>
          </div>

          {/* Chapter 5: Meet the Team */}
          <div className="pt-6 border-t border-[#174B2A]/10 space-y-4">
            <h2 className="font-['Poppins'] text-2xl font-bold text-[#174B2A]">
              04. The Team Behind the Tiffins
            </h2>
            <p className="text-sm sm:text-base text-[#174B2A]/80">
              Ghar Ka Khana was conceptualized in Pune by a close team united by a passion for good food and thoughtful technology:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white rounded-xl p-4 border border-[#174B2A]/15 text-center">
                <span className="font-['Poppins'] font-bold text-sm text-[#174B2A] block">Shounak</span>
                <span className="text-[11px] text-[#174B2A]/60">Brand &amp; Social Content</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#174B2A]/15 text-center">
                <span className="font-['Poppins'] font-bold text-sm text-[#174B2A] block">Yashashree</span>
                <span className="text-[11px] text-[#174B2A]/60">Growth &amp; Integration</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#174B2A]/15 text-center">
                <span className="font-['Poppins'] font-bold text-sm text-[#174B2A] block">Harshwardhan</span>
                <span className="text-[11px] text-[#174B2A]/60">Digital Platform &amp; SEO</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#174B2A]/15 text-center">
                <span className="font-['Poppins'] font-bold text-sm text-[#174B2A] block">Vitthal</span>
                <span className="text-[11px] text-[#174B2A]/60">Customer Insights</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Block */}
        <div className="bg-[#174B2A] rounded-2xl p-8 sm:p-10 text-[#FFF7E8] text-center space-y-5 shadow-xl">
          <h3 className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-white">
            Ready to Taste the Comfort of Home?
          </h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Try a single meal today from ₹89, or set up a hassle-free weekly subscription that keeps you well-nourished through your busiest workdays.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenOrder}
              className="bg-[#B83A2D] hover:bg-[#962f24] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Order Today&apos;s Meal · From ₹89
            </button>
            <button
              onClick={onBackToHome}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer"
            >
              Explore Full Menu &amp; Rates
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

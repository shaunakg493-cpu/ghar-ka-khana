import React from 'react';
import { MapPin, Clock, MessageCircle, Heart, BookOpen, Phone, Instagram, Facebook } from 'lucide-react';
import { BRAND_ASSETS, CONTACT_INFO } from '../data/menuData';

interface FooterProps {
  onNavigateStory?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateStory }) => {
  return (
    <footer className="bg-[#174B2A] text-[#FFF7E8] pt-14 pb-10 border-t border-[#0f331c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column with Bigger, Visible Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={BRAND_ASSETS.logo}
                alt="Ghar Ka Khana Emblem"
                className="w-18 h-18 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white/95 p-1.5 shadow-md border border-white/20 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-['Poppins'] font-bold text-2xl text-white block">
                  Ghar Ka Khana
                </span>
                <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                  Thoda Ghar, Har Roz.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed">
              Wholesome home-style vegetarian meal subscriptions and daily tiffins for busy professionals in Pune. Comfort without complication.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#B83A2D]" />
                Pure Vegetarian Kitchen
              </span>
              <span>·</span>
              <span>Pune, Maharashtra</span>
            </div>

            {/* Social Media & Quick Contact Badges */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Helpline (6290894494)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-transform hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram (@gharka.khana2026)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white text-xs font-semibold transition-transform hover:scale-105"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on Facebook"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#1567d3] text-white text-xs font-semibold transition-transform hover:scale-105"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-wider">
              Explore Menu
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#aaj-ka-menu" className="hover:text-white transition-colors">
                  Aaj Ka Menu (Daily Specials)
                </a>
              </li>
              <li>
                <a href="#rates-and-meals" className="hover:text-white transition-colors">
                  Basic Veg Meal (₹89)
                </a>
              </li>
              <li>
                <a href="#rates-and-meals" className="hover:text-white transition-colors">
                  Standard Veg Meal (₹109)
                </a>
              </li>
              <li>
                <a href="#rates-and-meals" className="hover:text-white transition-colors">
                  Special Veg Meal (₹139)
                </a>
              </li>
            </ul>
          </div>

          {/* Subscription Links */}
          <div className="space-y-3">
            <h4 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-wider">
              Meal Plans &amp; Story
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#subscriptions" className="hover:text-white transition-colors">
                  Weekly Plan (6 Meals)
                </a>
              </li>
              <li>
                <a href="#subscriptions" className="hover:text-white transition-colors">
                  Monthly Plan (26 Meals)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Customer Testimonials
                </a>
              </li>
              {onNavigateStory && (
                <li>
                  <button
                    onClick={onNavigateStory}
                    className="hover:text-white transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3 h-3 text-white/70" />
                    <span>Our Story (Origins &amp; Mission)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3 text-xs text-white/80">
            <h4 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-wider">
              Contact &amp; Hours
            </h4>

            {/* Direct Helpline Number */}
            <div className="bg-[#0f331c] rounded-xl p-3 border border-white/10 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#25D366] tracking-wider block">
                Helpline &amp; Orders
              </span>
              <a
                href={CONTACT_INFO.callUrl}
                className="flex items-center gap-2 text-white hover:text-[#FAF2DF] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="tabular-nums">+91 62908 94494</span>
              </a>
              <p className="text-[11px] text-white/60">Mon – Sun · 9:00 AM – 9:00 PM</p>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <Clock className="w-4 h-4 text-white/80 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-white">Daily Dispatch Slots</p>
                <p>Lunch: 12:30 PM – 1:45 PM</p>
                <p>Dinner: 7:30 PM – 8:45 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-white/80 mt-0.5 shrink-0" />
              <p>{CONTACT_INFO.address}</p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2.5 rounded-lg font-bold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Helpline: 6290894494</span>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Academic Project Disclaimer mandated by Brand Book Page 7 */}
        <div className="mt-8 bg-[#0f331c] rounded-xl p-4 text-[11px] leading-relaxed text-white/70 border border-white/5">
          <p className="font-semibold text-white mb-1">
            Academic Project Disclaimer
          </p>
          <p>
            For academic demonstration only. This is a proposed venture and brand concept; visuals, menu examples, rates, and subscription messaging are conceptual unless separately verified. Do not imply live commercial sales, confirmed operational availability, customer testimonials, or regulatory guarantees without independent verification.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>© {new Date().getFullYear()} Ghar Ka Khana. All rights reserved.</p>
          <p className="italic text-white/80 font-['Poppins']">
            &ldquo;Thoda Ghar, Har Roz.&rdquo;
          </p>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Clock, MapPin, BookOpen, MessageCircle, Instagram, Facebook, Phone } from 'lucide-react';
import { BRAND_ASSETS, CONTACT_INFO } from '../data/menuData';

interface NavbarProps {
  onOpenOrder: (tier?: 'basic' | 'standard' | 'special', plan?: 'single' | 'weekly' | 'monthly') => void;
  cartCount: number;
  isStoryView: boolean;
  onNavigateStory: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  cartCount,
  isStoryView,
  onNavigateStory,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (isStoryView) {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar adhering to ≤ 40px cap */}
      <aside aria-label="Announcement" className="bg-[#174B2A] text-[#FFF7E8] text-xs font-medium py-1.5 px-4 border-b border-[#0f331c]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span>Delivering across Pune &amp; PCMC</span>
            </span>
            <span className="hidden md:inline text-white/30" aria-hidden="true">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span>Lunch by 11:30 AM · Dinner by 6:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#25D366] transition-colors"
              title="WhatsApp Helpline"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="tabular-nums">Helpline: 6290894494</span>
            </a>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-0.5"
                title="Follow us on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-0.5"
                title="Connect on Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Strict 3-Zone Top Bar Contract with Prominent Brand Logo */}
      <header className="sticky top-0 z-40 bg-[#FFF7E8]/98 backdrop-blur-md border-b border-[#174B2A]/15 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-28 flex items-center justify-between gap-6">
          
          {/* Zone 1: Prominent Brand Wordmark & High-Visibility Emblem */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3.5 sm:gap-4 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174B2A] rounded-xl text-left cursor-pointer py-1"
          >
            <div className="relative">
              <img
                src={BRAND_ASSETS.logo}
                alt="Ghar Ka Khana Emblem"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-2xl bg-white p-1 shadow-md border-2 border-[#174B2A]/25 transition-transform group-hover:scale-105 shrink-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Poppins'] font-bold text-2xl sm:text-[1.65rem] tracking-tight text-[#174B2A] leading-tight">
                Ghar Ka Khana
              </span>
              <span className="font-['Poppins'] text-xs font-bold text-[#B83A2D] tracking-wider uppercase mt-0.5">
                Thoda Ghar, Har Roz.
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 single-line clean navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#174B2A]/80">
            <button
              onClick={() => scrollTo('aaj-ka-menu')}
              className={`hover:text-[#174B2A] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                !isStoryView ? 'text-[#174B2A] font-semibold' : ''
              }`}
            >
              Aaj Ka Menu
            </button>
            <button
              onClick={() => scrollTo('rates-and-meals')}
              className="hover:text-[#174B2A] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Meals &amp; Rates
            </button>
            <button
              onClick={() => scrollTo('subscriptions')}
              className="hover:text-[#174B2A] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Subscription Plans
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="hover:text-[#174B2A] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Customer Reviews
            </button>
            <button
              onClick={() => scrollTo('delivery-zones')}
              className="hover:text-[#174B2A] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Pune Hubs
            </button>
            <button
              onClick={onNavigateStory}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isStoryView
                  ? 'bg-[#174B2A] text-white shadow-sm'
                  : 'text-[#174B2A] hover:bg-[#174B2A]/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenOrder()}
              className="relative inline-flex items-center justify-center gap-2 bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>Order Now</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-[#B83A2D] text-white text-xs font-bold px-1.5 py-0.5 rounded-full tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#174B2A] hover:bg-[#174B2A]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174B2A]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown sheet */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#174B2A]/10 bg-[#FFF7E8] px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium text-[#174B2A] hover:bg-[#174B2A]/5"
            >
              Home &amp; Menu
            </button>
            <button
              onClick={() => scrollTo('aaj-ka-menu')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium text-[#174B2A] hover:bg-[#174B2A]/5"
            >
              Aaj Ka Menu (Live)
            </button>
            <button
              onClick={() => scrollTo('rates-and-meals')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium text-[#174B2A] hover:bg-[#174B2A]/5"
            >
              Meals &amp; Rates (₹89 onwards)
            </button>
            <button
              onClick={() => scrollTo('subscriptions')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium text-[#174B2A] hover:bg-[#174B2A]/5"
            >
              Weekly &amp; Monthly Plans
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium text-[#174B2A] hover:bg-[#174B2A]/5"
            >
              Customer Reviews
            </button>
            <button
              onClick={() => scrollTo('delivery-zones')}
              className="block w-full text-left py-2 px-3 rounded text-sm font-medium text-[#174B2A] hover:bg-[#174B2A]/5"
            >
              Pune Delivery Hubs
            </button>
            <button
              onClick={() => {
                onNavigateStory();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded text-sm font-bold text-[#174B2A] bg-[#174B2A]/10"
            >
              Our Story (Origins &amp; Mission)
            </button>

            {/* Mobile Contact & Social Quick Links */}
            <div className="pt-2 border-t border-[#174B2A]/10 space-y-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Helpline: 6290894494</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#1877F2] text-white rounded-lg text-xs font-semibold"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

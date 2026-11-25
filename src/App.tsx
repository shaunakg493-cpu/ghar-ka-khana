import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoodGallery } from './components/FoodGallery';
import { LiveMenu } from './components/LiveMenu';
import { MealCards } from './components/MealCards';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { PuneCoverage } from './components/PuneCoverage';
import { OurStory } from './components/OurStory';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MealTier, PlanDuration, DeliverySlot, AddOnItem } from './types/food';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { trackEvent } from './utils/analytics';
import { CONTACT_INFO } from './data/menuData';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<MealTier>('standard');
  const [selectedPlan, setSelectedPlan] = useState<PlanDuration>('single');
  const [selectedSlot, setSelectedSlot] = useState<DeliverySlot>('lunch');
  const [cartCount, setCartCount] = useState(0);
  const [isStoryView, setIsStoryView] = useState(false);

  const handleOpenOrder = (
    tier: MealTier = 'standard',
    plan: PlanDuration = 'single',
    slot: DeliverySlot = 'lunch'
  ) => {
    setSelectedTier(tier);
    setSelectedPlan(plan);
    setSelectedSlot(slot);
    setOrderModalOpen(true);
    trackEvent('begin_checkout', {
      meal_tier: tier,
      plan_duration: plan,
      delivery_slot: slot,
    });
  };

  const handleSelectMeal = (
    tierId: MealTier,
    slot: DeliverySlot,
    _day: string
  ) => {
    trackEvent('select_meal', { tier: tierId, slot });
    handleOpenOrder(tierId, 'single', slot);
  };

  const handleSelectSubscription = (tier: MealTier, plan: PlanDuration) => {
    trackEvent('select_subscription', { tier, plan });
    handleOpenOrder(tier, plan, 'lunch');
  };

  const handleQuickAddExtra = (_item: AddOnItem) => {
    setCartCount(prev => prev + 1);
    trackEvent('add_extra_item', { item_name: _item.name });
    handleOpenOrder('standard', 'single', 'lunch');
  };

  const handleExplorePlans = () => {
    setIsStoryView(false);
    trackEvent('view_plans_click');
    setTimeout(() => {
      const el = document.getElementById('subscriptions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const navigateToStory = () => {
    setIsStoryView(true);
    trackEvent('view_our_story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setIsStoryView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E8] text-[#174B2A] font-['Inter']">
      
      {/* 1. Header with Bigger Logo & 3-Zone Contract */}
      <Navbar
        onOpenOrder={() => handleOpenOrder('standard', 'single')}
        cartCount={cartCount}
        isStoryView={isStoryView}
        onNavigateStory={navigateToStory}
        onNavigateHome={navigateToHome}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isStoryView ? (
          /* Dedicated Our Story Page */
          <OurStory
            onBackToHome={navigateToHome}
            onOpenOrder={() => handleOpenOrder('standard', 'single')}
          />
        ) : (
          /* Main Homepage & Full Ordering Experience */
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenOrder={handleOpenOrder}
              onExplorePlans={handleExplorePlans}
            />

            {/* 3. Lucrative Food Visuals & Photography Showcase */}
            <FoodGallery
              onOrderNow={() => handleOpenOrder('standard', 'single')}
            />

            {/* 4. Interactive Aaj Ka Menu with Live Availability Engine */}
            <LiveMenu
              onSelectMeal={handleSelectMeal}
              onQuickAddExtra={handleQuickAddExtra}
            />

            {/* 5. Meal Types & Exact Rates Section (Direct from image) */}
            <MealCards
              onOrderMeal={(tier) => handleOpenOrder(tier, 'single')}
            />

            {/* 6. Subscription Plans (Section 2 from image) */}
            <SubscriptionPlans
              onSelectSubscription={handleSelectSubscription}
            />

            {/* 7. Customer Testimonials Section */}
            <Testimonials />

            {/* 8. How It Works & Brand Promise */}
            <HowItWorks />

            {/* 9. Pune Coverage Network */}
            <PuneCoverage
              onOrderNow={() => handleOpenOrder('standard', 'weekly')}
            />
          </>
        )}
      </main>

      {/* 10. Footer with Academic Disclaimer */}
      <Footer onNavigateStory={navigateToStory} />

      {/* Floating Mobile Sticky Order Bar (adheres to ≤ 15% mobile viewport cap) */}
      <aside aria-label="Quick order action" className="md:hidden fixed bottom-3 left-3 right-3 z-30">
        <div className="bg-[#174B2A] text-white p-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center justify-between gap-3">
          <div className="pl-2">
            <span className="text-[10px] uppercase font-bold text-white/80 tracking-wider block">
              Ghar Ka Khana
            </span>
            <span className="text-xs font-semibold text-white">
              Daily Tiffin from ₹89
            </span>
          </div>
          <button
            onClick={() => handleOpenOrder('standard', 'single')}
            className="bg-[#B83A2D] hover:bg-[#962f24] text-white px-4 py-2 rounded-xl text-xs font-bold transition-transform active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer shadow"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white" />
            <span>Order Now</span>
          </button>
        </div>
      </aside>

      {/* Floating Desktop WhatsApp Helpline Button */}
      <aside aria-label="WhatsApp Helpline" className="hidden md:block fixed bottom-6 right-6 z-30">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group hover:-translate-y-0.5 border border-white/20"
          title="WhatsApp Helpline: +91 62908 94494"
        >
          <MessageCircle className="w-5 h-5 text-white animate-pulse" />
          <span className="text-xs font-bold tracking-wide">
            WhatsApp: 6290894494
          </span>
        </a>
      </aside>

      {/* Interactive Order & Checkout Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialTier={selectedTier}
        initialPlan={selectedPlan}
        initialSlot={selectedSlot}
      />

    </div>
  );
}

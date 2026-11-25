import React, { useState, useEffect } from 'react';
import { 
  X, Check, ShieldCheck, MapPin, 
  Clock, IndianRupee, MessageSquare, 
  ShoppingBag, CheckCircle2, ChevronRight, Truck,
  Plus, Minus
} from 'lucide-react';
import { MEAL_OPTIONS, SUBSCRIPTION_TABLE, ADD_ONS, PUNE_HUBS, CONTACT_INFO } from '../data/menuData';
import { MealTier, PlanDuration, DeliverySlot } from '../types/food';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: MealTier;
  initialPlan?: PlanDuration;
  initialSlot?: DeliverySlot;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialTier = 'standard',
  initialPlan = 'single',
  initialSlot = 'lunch',
}) => {
  const [tier, setTier] = useState<MealTier>(initialTier);
  const [plan, setPlan] = useState<PlanDuration>(initialPlan);
  const [slot, setSlot] = useState<DeliverySlot>(initialSlot);
  const [quantity, setQuantity] = useState(1);
  const [rotiPreference, setRotiPreference] = useState('Desi Ghee Phulkas');
  
  // Add-ons count state
  const [selectedAddOns, setSelectedAddOns] = useState<{ [id: string]: number }>({});

  // Delivery form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState('Hinjawadi');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');

  // Confirmation view state
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      if (initialTier) setTier(initialTier);
      if (initialPlan) setPlan(initialPlan);
      if (initialSlot) setSlot(initialSlot);
      setOrderConfirmed(false);
    }
  }, [isOpen, initialTier, initialPlan, initialSlot]);

  if (!isOpen) return null;

  const currentMeal = MEAL_OPTIONS.find(m => m.id === tier) || MEAL_OPTIONS[1];
  const rateRow = SUBSCRIPTION_TABLE.find(r => r.tierId === tier) || SUBSCRIPTION_TABLE[1];

  // Base price computation matching uploaded ratesheet
  const baseRate = plan === 'monthly'
    ? rateRow.monthlyPrice
    : plan === 'weekly'
    ? rateRow.weeklyPrice
    : rateRow.singlePrice;

  const baseTotal = baseRate * quantity;

  // Add-ons total computation
  const addOnsTotal = Object.entries(selectedAddOns).reduce((sum, [id, count]) => {
    const item = ADD_ONS.find(a => a.id === id);
    return sum + (item ? item.price * count : 0);
  }, 0);

  const finalTotal = baseTotal + addOnsTotal;

  const handleAddOnDelta = (id: string, delta: number) => {
    setSelectedAddOns(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `GKK-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);
  };

  const getWhatsAppMessage = () => {
    const planText = plan === 'monthly' ? 'Monthly Plan (26 meals)' : plan === 'weekly' ? 'Weekly Plan (6 meals)' : 'Single Meal';
    const text = `Namaste Ghar Ka Khana!%0A%0AI would like to confirm my order:%0A*Order ID:* ${orderId}%0A*Meal:* ${currentMeal.name} (${planText})%0A*Slot:* ${slot.toUpperCase()}%0A*Roti Preference:* ${rotiPreference}%0A*Total Amount:* ₹${finalTotal}%0A*Customer:* ${fullName}%0A*Address:* ${address}, ${selectedArea}, Pune%0A*Phone:* ${phone}`;
    return `${CONTACT_INFO.whatsappUrl}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#FFF7E8] rounded-2xl shadow-2xl border border-[#174B2A]/20 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#174B2A] text-[#FFF7E8] px-6 py-4 flex items-center justify-between border-b border-[#0f331c] shrink-0">
          <div>
            <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
              Ghar Ka Khana · Online Ordering
            </span>
            <h3 className="font-['Poppins'] font-bold text-lg text-white">
              {orderConfirmed ? 'Order Confirmed!' : 'Configure Your Home-Style Tiffin'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {orderConfirmed ? (
            /* Order Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#174B2A] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-[#B83A2D] tracking-widest block mb-1">
                  Khana Ban Raha Hai!
                </span>
                <h3 className="font-['Poppins'] text-2xl font-bold text-[#174B2A]">
                  Thank you, {fullName || 'Foodie'}!
                </h3>
                <p className="text-sm text-[#174B2A]/75 mt-1">
                  Your order <strong className="text-[#174B2A]">#{orderId}</strong> has been sent to our kitchen.
                </p>
              </div>

              {/* Order Receipt Card */}
              <div className="bg-[#FAF2DF] rounded-xl p-5 border border-[#174B2A]/15 text-left text-xs text-[#174B2A] space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#174B2A]/10 pb-2">
                  <span className="font-semibold">Selected Meal:</span>
                  <span>{currentMeal.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#174B2A]/10 pb-2">
                  <span className="font-semibold">Subscription / Duration:</span>
                  <span className="capitalize">{plan === 'single' ? 'Single Meal' : plan + ' Plan'}</span>
                </div>
                <div className="flex justify-between border-b border-[#174B2A]/10 pb-2">
                  <span className="font-semibold">Slot &amp; Timing:</span>
                  <span className="capitalize">{slot} ({slot === 'lunch' ? '12:30 – 1:45 PM' : '7:30 – 8:45 PM'})</span>
                </div>
                <div className="flex justify-between border-b border-[#174B2A]/10 pb-2">
                  <span className="font-semibold">Delivery To:</span>
                  <span className="text-right truncate max-w-[200px]">{address}, {selectedArea}</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sm text-[#174B2A]">
                  <span>Total Paid / Payable:</span>
                  <span className="font-['Poppins'] text-base text-[#B83A2D] tabular-nums">₹{finalTotal}</span>
                </div>
              </div>

              {/* Live Kitchen Status Simulation */}
              <div className="bg-white rounded-xl p-4 border border-[#174B2A]/15 text-left max-w-md mx-auto space-y-3">
                <p className="font-semibold text-xs text-[#174B2A] flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#B83A2D]" />
                  <span>Estimated Delivery Status</span>
                </p>
                <div className="relative pl-6 space-y-3 text-xs">
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                    <p className="font-semibold text-[#174B2A]">Order Placed &amp; Ingredient Allocated</p>
                    <p className="text-[11px] text-[#174B2A]/60">Fresh vegetables chopped &amp; whole wheat dough prepped</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <p className="font-semibold text-[#174B2A]">Scheduled for {slot === 'lunch' ? 'Morning 11:30 AM' : 'Evening 6:00 PM'} Cook Batch</p>
                    <p className="text-[11px] text-[#174B2A]/60">Packed hot in insulated leakproof dabbas</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Receive Updates on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold bg-[#174B2A]/10 hover:bg-[#174B2A]/20 text-[#174B2A] transition-colors cursor-pointer"
                >
                  Back to Website
                </button>
              </div>

              {/* Direct Helpline Number */}
              <p className="text-[11px] text-[#174B2A]/70 text-center pt-2">
                Questions or changes? Call / WhatsApp Helpline:{' '}
                <a 
                  href={CONTACT_INFO.callUrl} 
                  className="font-bold underline text-[#174B2A] hover:text-[#B83A2D] tabular-nums"
                >
                  {CONTACT_INFO.formattedPhone}
                </a>
              </p>
            </div>
          ) : (
            /* Order Configurator & Checkout Form */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* 1. Plan Duration Switcher */}
              <div>
                <label className="block text-xs font-semibold text-[#174B2A] uppercase tracking-wider mb-2">
                  1. Select Order Type / Subscription Plan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPlan('single')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      plan === 'single'
                        ? 'bg-[#174B2A] text-white border-[#174B2A] shadow-sm'
                        : 'bg-[#FAF2DF] text-[#174B2A] border-[#174B2A]/15 hover:bg-[#FAF2DF]/80'
                    }`}
                  >
                    <span>Single Meal</span>
                    <span className="block text-[10px] font-normal opacity-80">Trial or Today</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlan('weekly')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center relative ${
                      plan === 'weekly'
                        ? 'bg-[#174B2A] text-white border-[#174B2A] shadow-sm'
                        : 'bg-[#FAF2DF] text-[#174B2A] border-[#174B2A]/15 hover:bg-[#FAF2DF]/80'
                    }`}
                  >
                    <span>Weekly · 6 Meals</span>
                    <span className={`block text-[10px] font-semibold ${plan === 'weekly' ? 'text-white/90' : 'text-[#B83A2D]'}`}>Save up to ₹34</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlan('monthly')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center relative ${
                      plan === 'monthly'
                        ? 'bg-[#174B2A] text-white border-[#174B2A] shadow-sm'
                        : 'bg-[#FAF2DF] text-[#174B2A] border-[#174B2A]/15 hover:bg-[#FAF2DF]/80'
                    }`}
                  >
                    <span>Monthly · 26 Meals</span>
                    <span className={`block text-[10px] font-semibold ${plan === 'monthly' ? 'text-white/90' : 'text-[#B83A2D]'}`}>Save up to ₹114</span>
                  </button>
                </div>
              </div>

              {/* 2. Meal Tier Selector with Exact Uploaded Rates */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#174B2A] uppercase tracking-wider">
                    2. Select Meal Tier
                  </label>
                  <span className="text-[11px] text-[#174B2A]/60">Rates match official menu</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {MEAL_OPTIONS.map((m) => {
                    const isSelected = tier === m.id;
                    const tierRate = plan === 'monthly' 
                      ? m.monthlyPrice 
                      : plan === 'weekly' 
                      ? m.weeklyPrice 
                      : m.price;

                    return (
                      <div
                        key={m.id}
                        onClick={() => setTier(m.id)}
                        className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#174B2A] bg-white shadow-md'
                            : 'border-[#174B2A]/10 bg-[#FAF2DF]/60 hover:bg-[#FAF2DF]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-['Poppins'] font-bold text-sm text-[#174B2A]">
                              {m.name}
                            </span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-[#174B2A]" />
                            )}
                          </div>
                          <p className="text-[11px] text-[#174B2A]/70 line-clamp-2 mb-2">
                            {m.included}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#174B2A]/10 flex items-baseline justify-between">
                          <span className="text-[10px] text-[#174B2A]/60 uppercase">Price:</span>
                          <span className="font-['Poppins'] font-bold text-base text-[#B83A2D] tabular-nums">
                            ₹{tierRate}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Slot & Roti Customization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF2DF] p-4 rounded-xl border border-[#174B2A]/15">
                <div>
                  <label className="block text-xs font-semibold text-[#174B2A] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B83A2D]" />
                    <span>Delivery Slot</span>
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSlot('lunch')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        slot === 'lunch'
                          ? 'bg-[#174B2A] text-white'
                          : 'bg-white text-[#174B2A] border border-[#174B2A]/15'
                      }`}
                    >
                      Lunch (12:30 PM)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSlot('dinner')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        slot === 'dinner'
                          ? 'bg-[#174B2A] text-white'
                          : 'bg-white text-[#174B2A] border border-[#174B2A]/15'
                      }`}
                    >
                      Dinner (7:30 PM)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#174B2A] mb-1.5">
                    Roti Preference
                  </label>
                  <select
                    value={rotiPreference}
                    onChange={(e) => setRotiPreference(e.target.value)}
                    className="w-full py-1.5 px-2.5 rounded-lg border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                  >
                    <option value="Desi Ghee Phulkas">Tawa Phulkas with light Ghee</option>
                    <option value="Plain Whole Wheat">Dry Whole Wheat (Zero Oil/Ghee)</option>
                    <option value="Swap with Extra Rice">Swap Rotis for Extra Steamed Rice</option>
                  </select>
                </div>
              </div>

              {/* 4. Add-ons Section */}
              <div>
                <label className="block text-xs font-semibold text-[#174B2A] uppercase tracking-wider mb-2">
                  4. Add Extras to Your Meal (Optional)
                </label>
                <div className="space-y-2">
                  {ADD_ONS.map((addon) => {
                    const count = selectedAddOns[addon.id] || 0;
                    return (
                      <div
                        key={addon.id}
                        className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#174B2A]/10 text-xs"
                      >
                        <div>
                          <span className="font-semibold text-[#174B2A]">{addon.name}</span>
                          <span className="text-[#174B2A]/60 ml-2 tabular-nums">· ₹{addon.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {count > 0 && (
                            <>
                              <button
                                type="button"
                                onClick={() => handleAddOnDelta(addon.id, -1)}
                                className="w-6 h-6 rounded bg-[#174B2A]/10 text-[#174B2A] flex items-center justify-center hover:bg-[#174B2A]/20 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-bold text-xs tabular-nums text-[#174B2A] w-4 text-center">
                                {count}
                              </span>
                            </>
                          )}
                          <button
                            type="button"
                            onClick={() => handleAddOnDelta(addon.id, 1)}
                            className="w-6 h-6 rounded bg-[#174B2A] text-white flex items-center justify-center hover:bg-[#0f331c] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 5. Customer & Delivery Address */}
              <div>
                <label className="block text-xs font-semibold text-[#174B2A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B83A2D]" />
                  <span>5. Delivery Details (Pune)</span>
                </label>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    >
                      {PUNE_HUBS.map(hub => (
                        <option key={hub.name} value={hub.name}>{hub.name} Hub</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Special delivery notes (e.g. Leave at security)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Complete Office Desk / Flat &amp; Building Address *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                  />
                </div>
              </div>

              {/* 6. Payment Method */}
              <div>
                <label className="block text-xs font-semibold text-[#174B2A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-[#174B2A]" />
                  <span>6. Payment Mode</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'bg-[#174B2A] text-white border-[#174B2A]'
                        : 'bg-white text-[#174B2A] border-[#174B2A]/15'
                    }`}
                  >
                    UPI / GPay / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'bg-[#174B2A] text-white border-[#174B2A]'
                        : 'bg-white text-[#174B2A] border-[#174B2A]/15'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#174B2A] text-white border-[#174B2A]'
                        : 'bg-white text-[#174B2A] border-[#174B2A]/15'
                    }`}
                  >
                    Card / Netbanking
                  </button>
                </div>
              </div>

              {/* Bill Summary & Sticky CTA */}
              <div className="pt-4 border-t border-[#174B2A]/15 bg-[#FAF2DF] p-4 rounded-xl">
                <div className="flex items-center justify-between text-xs text-[#174B2A]/70 mb-1">
                  <span>{currentMeal.name} ({plan === 'single' ? 'Single' : plan}):</span>
                  <span className="font-semibold text-[#174B2A] tabular-nums">₹{baseTotal}</span>
                </div>
                {addOnsTotal > 0 && (
                  <div className="flex items-center justify-between text-xs text-[#174B2A]/70 mb-1">
                    <span>Extras &amp; Add-ons:</span>
                    <span className="font-semibold text-[#174B2A] tabular-nums">+₹{addOnsTotal}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-xs text-[#174B2A]/70 mb-2">
                  <span>Insulated Delivery &amp; Packaging:</span>
                  <span className="font-semibold text-emerald-700">FREE</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#174B2A]/10 mb-4">
                  <div>
                    <span className="block text-xs uppercase text-[#174B2A]/60 font-semibold">Total Payable</span>
                    <span className="font-['Poppins'] font-bold text-2xl text-[#174B2A] tabular-nums">
                      ₹{finalTotal}
                    </span>
                  </div>
                  <div className="text-right text-[11px] text-[#174B2A]/70">
                    <ShieldCheck className="w-3.5 h-3.5 inline text-[#174B2A] mr-1" />
                    <span>Safe &amp; Clean Home Delivery</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#B83A2D] hover:bg-[#962f24] text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Confirm Order · ₹{finalTotal}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

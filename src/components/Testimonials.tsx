import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, Camera, X } from 'lucide-react';
import { INITIAL_TESTIMONIALS, Testimonial } from '../data/testimonialsData';

// Robust Avatar component that handles photo loading and graceful initials fallback
const CustomerAvatar: React.FC<{ name: string; photo?: string }> = ({ name, photo }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (photo && !imgFailed) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-11 h-11 rounded-full object-cover border-2 border-[#174B2A]/20 shrink-0"
        referrerPolicy="no-referrer"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div className="w-11 h-11 rounded-full bg-[#174B2A] text-[#FFF7E8] flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-sm border border-[#174B2A]/20">
      {initials}
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formLocality, setFormLocality] = useState('Karve Nagar, Pune');
  const [formMealType, setFormMealType] = useState('Standard Veg Meal');
  const [formRating, setFormRating] = useState(5);
  const [formReview, setFormReview] = useState('');
  const [formPhoto, setFormPhoto] = useState<string>('');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formReview.trim()) return;

    const newTestimonial: Testimonial = {
      id: `t-${Date.now()}`,
      name: formName.trim(),
      role: formRole.trim() || 'Working Professional',
      locality: formLocality,
      rating: formRating,
      review: formReview.trim(),
      mealType: formMealType,
      photo: formPhoto || undefined,
      verifiedSubscriber: true,
      date: 'Just now'
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setIsModalOpen(false);

    // Reset form
    setFormName('');
    setFormRole('');
    setFormReview('');
    setFormPhoto('');
    setFormRating(5);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FFF7E8] border-b border-[#174B2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A2D] mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#174B2A]" />
              <span>Real Customer Stories · Pune &amp; PCMC</span>
            </div>
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#174B2A] tracking-tight">
              What Pune Professionals Say
            </h2>
            <p className="text-sm sm:text-base text-[#174B2A]/75 mt-2 max-w-xl">
              Authentic feedback from working professionals in Karve Nagar, Hinjawadi, Baner, and Wakad who rely on Ghar Ka Khana for everyday lunch and dinner.
            </p>
          </div>

          {/* Action button to share review */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer self-start md:self-auto shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#FFF7E8]" />
            <span>Share Your Experience</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#174B2A]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars (using warm amber #d97706 instead of neon yellow) */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-neutral-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#174B2A]/60">
                    {t.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#174B2A]/85 leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Customer Lockup with optional Photo */}
              <div className="pt-4 border-t border-[#174B2A]/10 flex items-center gap-3">
                <CustomerAvatar name={t.name} photo={t.photo} />

                <div className="min-w-0 flex-1">
                  <h4 className="font-['Poppins'] font-bold text-sm text-[#174B2A] truncate">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#174B2A]/70 truncate">
                    {t.role} · {t.locality}
                  </p>
                  <p className="text-[10px] text-[#B83A2D] font-medium mt-0.5 truncate">
                    {t.mealType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Modal for Submitting a Testimonial */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div 
              className="relative w-full max-w-lg bg-[#FFF7E8] rounded-2xl shadow-2xl border border-[#174B2A]/20 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[#174B2A] text-[#FFF7E8] px-6 py-4 flex items-center justify-between border-b border-[#0f331c]">
                <div>
                  <span className="text-[11px] font-semibold text-[#FFF7E8]/80 uppercase tracking-wider block">
                    Ghar Ka Khana Community
                  </span>
                  <h3 className="font-['Poppins'] font-bold text-lg text-white">
                    Share Your Honest Review
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmitReview} className="p-6 space-y-4">
                
                {/* Name & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#174B2A] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Jadhav"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174B2A] mb-1">
                      Occupation / Age
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer (26)"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    />
                  </div>
                </div>

                {/* Locality & Meal Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#174B2A] mb-1">
                      Pune Locality
                    </label>
                    <select
                      value={formLocality}
                      onChange={(e) => setFormLocality(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    >
                      <option value="Karve Nagar, Pune">Karve Nagar</option>
                      <option value="Hinjawadi, Pune">Hinjawadi (Ph 1, 2, 3)</option>
                      <option value="Baner, Pune">Baner &amp; Balewadi</option>
                      <option value="Wakad, Pune">Wakad</option>
                      <option value="Kharadi, Pune">Kharadi &amp; EON IT Park</option>
                      <option value="Magarpatta, Pune">Magarpatta &amp; Hadapsar</option>
                      <option value="Viman Nagar, Pune">Viman Nagar</option>
                      <option value="PCMC, Pune">Pimpri-Chinchwad</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174B2A] mb-1">
                      Meal / Plan You Ordered
                    </label>
                    <select
                      value={formMealType}
                      onChange={(e) => setFormMealType(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                    >
                      <option value="Basic Veg Meal (₹89)">Basic Veg Meal (₹89)</option>
                      <option value="Standard Veg Meal (₹109)">Standard Veg Meal (₹109)</option>
                      <option value="Special Veg Meal (₹139)">Special Veg Meal (₹139)</option>
                      <option value="Weekly Subscription (6 Meals)">Weekly Subscription</option>
                      <option value="Monthly Subscription (26 Meals)">Monthly Subscription</option>
                    </select>
                  </div>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#174B2A] mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        className="p-1 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= formRating
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-[#174B2A]/70 ml-2 font-medium">
                      {formRating} of 5 Stars
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-semibold text-[#174B2A] mb-1">
                    Your Review / Experience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about the roti softness, dal taste, delivery timing, or how it helped your workday..."
                    value={formReview}
                    onChange={(e) => setFormReview(e.target.value)}
                    className="w-full py-2 px-3 rounded-xl border border-[#174B2A]/20 bg-white text-xs text-[#174B2A] focus:outline-none focus:ring-1 focus:ring-[#174B2A]"
                  />
                </div>

                {/* Optional Photo Field */}
                <div>
                  <label className="block text-xs font-semibold text-[#174B2A] mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#174B2A]" />
                      <span>Photo (Optional)</span>
                    </span>
                    <span className="text-[11px] font-normal text-[#174B2A]/60">
                      Upload your profile or food picture
                    </span>
                  </label>

                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="text-xs text-[#174B2A] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#174B2A]/10 file:text-[#174B2A] hover:file:bg-[#174B2A]/20 cursor-pointer"
                    />
                    {formPhoto && (
                      <img
                        src={formPhoto}
                        alt="Preview"
                        className="w-10 h-10 rounded-full object-cover border border-[#174B2A]/20"
                      />
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-3 border-t border-[#174B2A]/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#174B2A]/70 hover:text-[#174B2A] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#174B2A] hover:bg-[#0f331c] text-[#FFF7E8] text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    Post Review
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

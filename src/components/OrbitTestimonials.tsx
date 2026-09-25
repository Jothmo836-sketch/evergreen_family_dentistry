import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { PATIENT_TESTIMONIALS } from '../data/dentalData.ts';

export const OrbitTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % PATIENT_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + PATIENT_TESTIMONIALS.length) % PATIENT_TESTIMONIALS.length);
  };

  const current = PATIENT_TESTIMONIALS[activeIndex];
  const count = PATIENT_TESTIMONIALS.length;

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-wider text-emerald-700 uppercase mb-3 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Real Community Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Playfair_Display',Georgia,serif] leading-[1.18] text-balance">
            The best dental stories come from patients who found comfort in our care
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Hear from our neighbors in Yreka, Weed, Montague, and across Siskiyou County who trust Evergreen Family Dentistry with their smiles.
          </p>
        </div>

        {/* Orbit Stage Container (Matching video 01:36 - 01:42) */}
        <div className="relative max-w-4xl mx-auto h-[480px] sm:h-[520px] flex items-center justify-center">
          {/* Circular Orbit Ring Guide Line */}
          <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-emerald-100 pointer-events-none" />

          {/* Orbiting Patient Avatars */}
          {PATIENT_TESTIMONIALS.map((t, idx) => {
            // Calculate angle on orbit based on (idx - activeIndex)
            const angleOffset = ((idx - activeIndex) / count) * 2 * Math.PI - Math.PI / 2;
            const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 225;
            const x = Math.cos(angleOffset) * radius;
            const y = Math.sin(angleOffset) * radius;
            const isSelected = idx === activeIndex;

            return (
              <motion.button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                animate={{
                  x,
                  y,
                  scale: isSelected ? 1.25 : 0.9,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                }}
                aria-label={`View testimonial by ${t.name}`}
                className={`absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg border-2 transition-all cursor-pointer z-20 ${
                  isSelected
                    ? 'border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/30'
                    : 'border-white hover:border-emerald-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            );
          })}

          {/* Center Testimonial Card */}
          <div className="relative z-10 max-w-md w-full px-6 py-8 text-center flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center"
              >
                {/* Author Name */}
                <h4 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',Georgia,serif] text-slate-900 mb-0.5">
                  {current.name}
                </h4>

                {/* Author Role & Location */}
                <p className="text-xs text-emerald-700 font-semibold mb-1">
                  {current.service} · {current.location}
                </p>

                <p className="text-[11px] text-slate-400 font-medium mb-4">
                  {current.role}
                </p>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-6 font-normal">
                  “{current.quote}”
                </p>

                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left / Right Circular Arrows (matching video 01:38 - 01:42) */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous Patient Story"
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-400 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next Patient Story"
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md hover:shadow-emerald-600/30 transition-all hover:scale-105 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

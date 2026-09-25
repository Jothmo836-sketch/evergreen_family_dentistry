import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Calendar, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { UPCOMING_CLINICAL_CASES, DentalCaseOrEvent } from '../data/dentalData.ts';

interface UpcomingEventsProps {
  onSelectEvent: (event: DentalCaseOrEvent) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onSelectEvent }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking for full-bleed images (as requested in the original motion video design)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth parallax offsets
  const yShiftFast = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yShiftSlow = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} id="treatments" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-wider text-emerald-700 uppercase mb-3 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Clinical Smile Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Playfair_Display',Georgia,serif] leading-[1.18] text-balance">
            Real transformations, gentle care, and lasting healthy confidence
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Explore our signature restorative and cosmetic dental treatments, each carried out with personalized attention to detail and zero discomfort.
          </p>
        </div>

        {/* ---------------- 3-COLUMN MASONRY GRID (matching video 01:02 - 01:05) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Card 1: Whitening */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[0])}
            className="rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] relative cursor-pointer group"
          >
            <img
              src={UPCOMING_CLINICAL_CASES[0].image}
              alt={UPCOMING_CLINICAL_CASES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                {UPCOMING_CLINICAL_CASES[0].category}
              </span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">
                {UPCOMING_CLINICAL_CASES[0].title}
              </h4>
            </div>
          </motion.div>

          {/* Card 2: Kids Care */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[1])}
            className="rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] relative cursor-pointer group"
          >
            <img
              src={UPCOMING_CLINICAL_CASES[1].image}
              alt={UPCOMING_CLINICAL_CASES[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                {UPCOMING_CLINICAL_CASES[1].category}
              </span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">
                {UPCOMING_CLINICAL_CASES[1].title}
              </h4>
            </div>
          </motion.div>

          {/* Card 3: Porcelain Veneers */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[2])}
            className="rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] relative cursor-pointer group"
          >
            <img
              src={UPCOMING_CLINICAL_CASES[2].image}
              alt={UPCOMING_CLINICAL_CASES[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                {UPCOMING_CLINICAL_CASES[2].category}
              </span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">
                {UPCOMING_CLINICAL_CASES[2].title}
              </h4>
            </div>
          </motion.div>
        </div>

        {/* ---------------- 3-COLUMN MASONRY GRID ROW 2 (Restorative, Emergency & Invisalign) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[4])}
            className="rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] relative cursor-pointer group"
          >
            <img
              src={UPCOMING_CLINICAL_CASES[4].image}
              alt={UPCOMING_CLINICAL_CASES[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                {UPCOMING_CLINICAL_CASES[4].category}
              </span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">
                {UPCOMING_CLINICAL_CASES[4].title}
              </h4>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[3])}
            className="rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] relative cursor-pointer group"
          >
            <img
              src={UPCOMING_CLINICAL_CASES[3].image}
              alt={UPCOMING_CLINICAL_CASES[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                {UPCOMING_CLINICAL_CASES[3].category}
              </span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">
                {UPCOMING_CLINICAL_CASES[3].title}
              </h4>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[5])}
            className="rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] relative cursor-pointer group"
          >
            <img
              src={UPCOMING_CLINICAL_CASES[5].image}
              alt={UPCOMING_CLINICAL_CASES[5].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                {UPCOMING_CLINICAL_CASES[5].category}
              </span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">
                {UPCOMING_CLINICAL_CASES[5].title}
              </h4>
            </div>
          </motion.div>
        </div>

        {/* ---------------- MASSIVE CINEMATIC FULL-WIDTH PARALLAX SCROLL BANNERS (Matching video 01:09 - 01:29) ---------------- */}
        <div className="space-y-14">
          {/* Banner 1: Precision Smile Makeover */}
          <motion.div
            style={{ y: yShiftFast }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[2])}
            className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 cursor-pointer group"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=85"
              alt="Precision Smile Makeover"
              className="w-full h-full object-cover object-center filter brightness-[0.88] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/95 via-black/30 to-transparent" />

            {/* Bottom Left Label matching video typography */}
            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10 text-white">
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-300 uppercase mb-2">
                Cosmetic Smile Design · Yreka, CA
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Playfair_Display',Georgia,serif] text-white group-hover:text-emerald-300 transition-colors">
                Precision Smile Makeover
              </h3>
            </div>

            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-10 hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-semibold group-hover:bg-emerald-500 transition-colors">
              <span>Book Treatment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Banner 2: High-Tech Modern Clinic Suite */}
          <motion.div
            style={{ y: yShiftSlow }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[3])}
            className="relative w-full h-[500px] sm:h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 cursor-pointer group"
          >
            <motion.img
              src="/src/assets/images/dental_hero_clinic_1790293806488.jpg"
              alt="Evergreen Family Dentistry modern operatory"
              className="w-full h-full object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/95 via-black/25 to-transparent" />

            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10 text-white">
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-300 uppercase mb-2">
                Painless Diagnostics & Technology
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Playfair_Display',Georgia,serif] text-white group-hover:text-emerald-300 transition-colors">
                Comfort-First Modern Operatories
              </h3>
            </div>
          </motion.div>

          {/* Banner 3: Gentle Pediatric & Family Smiles */}
          <motion.div
            style={{ y: yShiftFast }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[1])}
            className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 cursor-pointer group"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85"
              alt="Family and pediatric dental care"
              className="w-full h-full object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/95 via-black/25 to-transparent" />

            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10 text-white">
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-300 uppercase mb-2">
                Generations of Healthy Families
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Playfair_Display',Georgia,serif] text-white group-hover:text-emerald-300 transition-colors">
                Gentle Pediatric First Visits
              </h3>
            </div>
          </motion.div>

          {/* Banner 4: Invisalign Clear Orthodontics */}
          <motion.div
            style={{ y: yShiftSlow }}
            onClick={() => onSelectEvent(UPCOMING_CLINICAL_CASES[5])}
            className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 cursor-pointer group"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1800&q=85"
              alt="Invisalign clear aligners smile scan"
              className="w-full h-full object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/95 via-black/25 to-transparent" />

            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10 text-white">
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-300 uppercase mb-2">
                Discrete Orthodontic Alignment
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Playfair_Display',Georgia,serif] text-white group-hover:text-emerald-300 transition-colors">
                Invisalign Clear Aligners
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

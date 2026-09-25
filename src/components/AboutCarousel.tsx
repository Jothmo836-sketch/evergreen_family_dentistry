import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface DentalSlideItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

const DENTAL_SLIDES: DentalSlideItem[] = [
  {
    id: 'cosmetic-smile',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    alt: 'Radiant cosmetic smile makeover',
    title: 'Precision in every smile transformation',
    category: 'Cosmetic Dentistry & Veneers',
    description: 'Dr. Randy Krant combines artistic eye and clinical mastery to correct chips, discoloration, and spacing. With hand-finished porcelain veneers and advanced whitening, achieve a naturally luminous smile.',
    badge: 'Aesthetic Artistry',
  },
  {
    id: 'pediatric-friendly',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    alt: 'Friendly gentle pediatric dental checkup',
    title: 'Gentle, fear-free visits for young smiles',
    category: 'Pediatric & Family Care',
    description: 'We believe childhood dental memories should be joyful. Our gentle hygienists explain every step with warmth and fun, helping little ones build lifelong oral health habits without tears.',
    badge: 'Zero-Anxiety Care',
  },
  {
    id: 'advanced-tech',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Restorative ceramic dental crowns and implants',
    title: 'Restoring natural strength and function',
    category: 'Restorative Crowns & Implants',
    description: 'Protect fractured teeth and permanently replace missing teeth with bio-compatible ceramic crowns and dental implants engineered for natural biting comfort and lifelong stability.',
    badge: 'Long-Lasting Restorations',
  },
];

interface AboutCarouselProps {
  onLearnMore?: () => void;
}

export const AboutCarousel: React.FC<AboutCarouselProps> = ({ onLearnMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % DENTAL_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + DENTAL_SLIDES.length) % DENTAL_SLIDES.length);
  };

  const current = DENTAL_SLIDES[currentIndex];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Split (matching 00:20 - 00:30 structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Tag & Big Headline */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-3 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>About Evergreen Family Dentistry</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Playfair_Display',Georgia,serif] leading-[1.15] text-balance">
              From every gentle checkup to a lifetime of confident, radiant smiles
            </h2>
          </div>

          {/* Right Column: Paragraph & Action Button */}
          <div className="lg:col-span-6 lg:pl-10 flex flex-col justify-between h-full pt-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Located at <strong>310 Evergreen Lane in Yreka, CA</strong>, our practice is anchored in the belief that visiting the dentist should be calming, comfortable, and empowering. Led by <strong>{DENTAL_PRACTICE_INFO.doctor}</strong>, we integrate painless digital diagnostics with personalized dental care tailored to your unique smile goals.
            </p>
            <div>
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-emerald-600/30 cursor-pointer"
              >
                <span>Book a Visit with Dr. Krant</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Showcase Grid (matching video 00:31 - 00:44) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 shadow-xl aspect-[4/3] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-white">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 block mb-1">
                    {current.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',Georgia,serif]">
                    {current.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature Card & Navigation */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col justify-between">
            {/* Secondary companion preview card */}
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[16/9] bg-slate-100 mb-8 relative group">
              <img
                src={DENTAL_SLIDES[(currentIndex + 1) % DENTAL_SLIDES.length].image}
                alt={DENTAL_SLIDES[(currentIndex + 1) % DENTAL_SLIDES.length].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                Next: {DENTAL_SLIDES[(currentIndex + 1) % DENTAL_SLIDES.length].category}
              </div>
            </div>

            {/* Description Text */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {current.description}
            </p>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {DENTAL_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Treatment Slide"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-400 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Treatment Slide"
                  className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md hover:shadow-emerald-600/30 transition-transform hover:scale-105 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

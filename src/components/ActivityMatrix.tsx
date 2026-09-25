import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Heart, Scan, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DENTAL_SERVICE_CATEGORIES, DentalServiceCategory } from '../data/dentalData.ts';

interface ActivityMatrixProps {
  onLearnMore?: (category: DentalServiceCategory) => void;
}

export const ActivityMatrix: React.FC<ActivityMatrixProps> = ({ onLearnMore }) => {
  const [selectedCategory, setSelectedCategory] = useState<DentalServiceCategory>(DENTAL_SERVICE_CATEGORIES[0]);

  const getIcon = (iconName: string, isActive: boolean) => {
    const className = `w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-700'}`;
    switch (iconName) {
      case 'shield':
        return <Shield className={className} />;
      case 'sparkles':
        return <Sparkles className={className} />;
      case 'heart':
        return <Heart className={className} />;
      case 'scan':
        return <Scan className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-wider text-emerald-700 uppercase mb-3 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Comprehensive Clinical Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Playfair_Display',Georgia,serif] leading-[1.18] text-balance">
            Every dental specialty your family needs under one welcoming roof
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 2x2 Category Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DENTAL_SERVICE_CATEGORIES.map((category) => {
              const isActive = selectedCategory.id === category.id;
              return (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  onMouseEnter={() => setSelectedCategory(category)}
                  className={`p-7 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border select-none ${
                    isActive
                      ? 'bg-[#06241b] text-white border-transparent shadow-xl scale-[1.02]'
                      : 'bg-white hover:bg-emerald-50/40 text-slate-900 border-slate-200/80 shadow-sm'
                  }`}
                >
                  {/* Top Icon Badge */}
                  <div className="mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-950/40'
                          : 'bg-emerald-50 text-emerald-800'
                      }`}
                    >
                      {getIcon(category.icon, isActive)}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold font-['Playfair_Display',Georgia,serif] mb-2.5 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? 'text-emerald-100/80' : 'text-slate-500'}`}>
                      {category.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Large Featured Banner Card (Dynamic per selection) */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#06241b] flex flex-col justify-end min-h-[440px] lg:min-h-[500px]">
              {/* Background Image with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 z-0"
                >
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.featuredTitle}
                    className="w-full h-full object-cover"
                  />
                  {/* Deep Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031912] via-[#031912]/60 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Overlay Content */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col items-start">
                <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
                  {selectedCategory.featuredSubtitle}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Playfair_Display',Georgia,serif] leading-tight mb-3">
                  {selectedCategory.featuredTitle}
                </h3>

                <p className="text-xs text-emerald-100/90 leading-relaxed mb-5 max-w-sm">
                  {selectedCategory.description}
                </p>

                {/* Popular treatment bullets */}
                <div className="space-y-1.5 mb-6 w-full">
                  {selectedCategory.popularTreatments.slice(0, 3).map((trt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{trt}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onLearnMore?.(selectedCategory)}
                  className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-emerald-950/50 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book This Treatment</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

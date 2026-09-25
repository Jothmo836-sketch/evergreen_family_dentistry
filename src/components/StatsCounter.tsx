import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface StatsCounterProps {
  onGetStarted?: () => void;
}

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  trigger: boolean;
}

const RollingNumber: React.FC<StatItemProps> = ({ target, suffix, label, trigger }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out exponential curve
      const easeOutProgress = 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeOutProgress * target);

      setDisplayValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [trigger, target]);

  return (
    <div className="flex flex-col">
      <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',Georgia,serif] tabular-nums flex items-baseline">
        <span>{displayValue.toLocaleString()}</span>
        <span className="text-emerald-600 ml-0.5">{suffix}</span>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-snug">
        {label}
      </p>
    </div>
  );
};

export const StatsCounter: React.FC<StatsCounterProps> = ({ onGetStarted }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="stats" className="py-24 bg-[#F8FAF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Paragraph, CTA, and 2x2 Stats Grid */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Playfair_Display',Georgia,serif] leading-[1.18] text-balance">
              From toddlers to grandparents, we care{' '}
              <span className="relative inline-block text-slate-900">
                <span className="relative z-10">gently and devotedly</span>
                <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-emerald-200 -z-0 rounded-sm" />
              </span>{' '}
              for every smile in our community
            </h2>

            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              At Evergreen Family Dentistry in Yreka, we combine gentle clinical mastery with conservative treatment plans. We take pride in transparent discussions, detailed imaging explanations, and making sure you feel completely comfortable at every step.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onGetStarted}
                className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-emerald-600/30 cursor-pointer"
              >
                <span>Schedule Family Visit</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* 2x2 Stats Grid with Animated Rolling Numbers */}
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 pt-10 border-t border-slate-200">
              <RollingNumber
                target={100}
                suffix="%"
                label="Safety & sterilization compliance across all clinical operatories"
                trigger={isInView}
              />
              <RollingNumber
                target={25}
                suffix="+"
                label="Years caring for generations of families in Siskiyou County"
                trigger={isInView}
              />
              <RollingNumber
                target={30}
                suffix="k+"
                label="Healthy, pain-free smiles restored and protected"
                trigger={isInView}
              />
              <RollingNumber
                target={5000}
                suffix="+"
                label="5-star patient reviews and warm community recommendations"
                trigger={isInView}
              />
            </div>
          </div>

          {/* Right Column: Modern Dental Care Operatory Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/5] group"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Compassionate dental hygiene care at Evergreen Family Dentistry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* Floating detail tag on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#041a12]/85 backdrop-blur-md border border-emerald-500/30 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-emerald-400">Painless Care</div>
                  <div className="font-bold text-sm">Gentle Digital Diagnostics</div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-emerald-500/30 border border-emerald-400/40 rounded-full font-medium text-emerald-200">
                  Low-Dose 3D
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, HeartPulse, ArrowRight, CheckCircle2, Sparkles, Stethoscope } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface ExtremeGearProps {
  onLearnMore?: () => void;
}

export const ExtremeGear: React.FC<ExtremeGearProps> = ({ onLearnMore }) => {
  return (
    <section id="safety" className="py-24 bg-[#F8FAF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Clinic Image + Two Value Props (matching video 01:30 - 01:34) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Top Clinical Suite Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-200 group relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Modern, clean dental operatory at Evergreen Family Dentistry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-[#031c14]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-emerald-200 text-xs font-semibold border border-emerald-400/30">
                Painless Ergonomic Clinical Suites · Yreka, CA
              </div>
            </div>

            {/* Two Value Columns with Icons & Learn More Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Prop 1 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-3">
                  <HeartPulse className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-bold text-base text-slate-900 font-['Playfair_Display',Georgia,serif] mb-1">
                  Those who place their trust in us
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Generations of families across Yreka, Montague, and Siskiyou County count on our calm, honest guidance.
                </p>
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>Book a consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Prop 2 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-bold text-base text-slate-900 font-['Playfair_Display',Georgia,serif] mb-1">
                  Gentle comfort, prepared for every need
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  From low-radiation digital imaging to hospital-grade sterilization autoclaves and soothing amenities.
                </p>
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>Schedule visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Action button, and Tech Standards Details */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-['Playfair_Display',Georgia,serif] leading-[1.18] text-balance mb-6">
                Designed for gentle, comfortable visits and equipped with modern dental technology
              </h2>

              <div className="mb-10">
                <button
                  onClick={onLearnMore}
                  className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-emerald-600/30 cursor-pointer"
                >
                  <span>Book Your Appointment</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>

            {/* Dental Tech Standards Card - Inline, no popup! */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-slate-200/80 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 font-['Playfair_Display',Georgia,serif]">
                    Clinical Sterilization & Tech Standards
                  </h4>
                  <span className="text-xs text-slate-500">Evergreen Family Dentistry · Yreka, CA</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                We invest continuously in patient comfort: ultra-low dose digital sensors, intraoral high-def cameras that let you see exactly what we see, and gentle ultrasonic cleaning instruments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  'Class-B Medical Autoclave Sterilization',
                  'Low-Radiation Digital 3D Sensors',
                  'Intraoral HD Diagnostic Cameras',
                  'Memory Foam Ergonomic Chairs',
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Ready to experience anxiety-free care?
                </span>
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>Reserve a Chair</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Phone, Calendar, Sparkles } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface RedArenaCTAProps {
  onContactUs?: () => void;
  onExploreAll?: () => void;
}

export const RedArenaCTA: React.FC<RedArenaCTAProps> = ({ onContactUs, onExploreAll }) => {
  return (
    <section id="arena" className="py-24 bg-[#0a382c] text-white relative overflow-hidden">
      {/* Background Dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Banner Headline (Matching video 01:43 - 01:45) */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome New Patients to Our Yreka Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-['Playfair_Display',Georgia,serif] leading-[1.12] text-balance">
            Restore your full oral health, chew with ease, and{' '}
            <span className="relative inline-block text-emerald-300">
              <span className="relative z-10">grow with us</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-500/30 -z-0 rounded-sm" />
            </span>{' '}
            in a lifetime of radiant smiles and caring dentistry
          </h2>
        </div>

        {/* 3 Interactive Cards / Visual Anchors (Matching video 01:44 - 01:49) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Card 1: Gentle Hygiene Suite */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-emerald-500/30 aspect-[4/3] group relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Gentle dental hygiene suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">Preventive Care</span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">Comprehensive Family Exams</h4>
            </div>
          </div>

          {/* Card 2: Center Modern Dental Icon + Copy + Dual Action Buttons */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-emerald-400/30 shadow-2xl">
            {/* Center Tooth / Clinic Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-xl border-2 border-emerald-300 mb-4 -mt-12 bg-emerald-600 flex items-center justify-center p-1">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80"
                alt="Radiant teeth smile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6 font-normal">
              Accepting new patients of all ages in Yreka, CA. Most major dental insurance plans accepted, plus CareCredit flexible 0% interest financing.
            </p>

            {/* Two Action Buttons: "Call Office" & "Book Online ➔" */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-5 py-2.5 bg-white text-emerald-950 hover:bg-emerald-50 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:scale-105 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Call (530) 842-2585</span>
              </a>

              <button
                onClick={onContactUs}
                className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:scale-105 cursor-pointer"
              >
                <span>Book Online</span>
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </div>

          {/* Card 3: Cosmetic Smile Design */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-emerald-500/30 aspect-[4/3] group relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
              alt="Cosmetic porcelain veneers and crowns"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">Cosmetic Artistry</span>
              <h4 className="text-base font-bold font-['Playfair_Display',Georgia,serif]">Porcelain Veneers & Implants</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

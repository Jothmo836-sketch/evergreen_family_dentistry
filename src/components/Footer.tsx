import React from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface FooterProps {
  onContactUs?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactUs }) => {
  return (
    <footer className="bg-[#041a12] text-white pt-20 pb-12 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start pb-16 border-b border-emerald-500/20">
          {/* Col 1: Brand & Practice Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M12 2L4 12H9L3 20H21L15 12H20L12 2Z" opacity="0.85" />
                  <circle cx="12" cy="18" r="2.5" fill="#ffffff" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Playfair_Display',Georgia,serif]">
                Evergreen <span className="text-emerald-400 font-normal">Family Dentistry</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm mb-6 font-normal">
              Compassionate family, cosmetic, and restorative dental care led by Dr. Randy Dee Krant, DDS. Serving patients of all ages in Yreka, CA and throughout Siskiyou County.
            </p>

            {/* Google Maps Callout */}
            <div className="mb-6">
              <a
                href={DENTAL_PRACTICE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 text-xs font-semibold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open in Google Maps (Directions)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Accepted Insurance tags */}
            <div>
              <h5 className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase mb-2">
                Insurance & Financing
              </h5>
              <p className="text-xs text-emerald-200/70 leading-relaxed">
                Delta Dental · Cigna · MetLife · Guardian · Aetna · CareCredit 0% Financing · HSA/FSA Accepted
              </p>
            </div>
          </div>

          {/* Col 2: Services Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h5 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Dental Services
            </h5>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Exams & Cleanings</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Porcelain Veneers</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Dental Crowns & Bridges</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Invisalign Aligners</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">Emergency Dentistry</a></li>
            </ul>
          </div>

          {/* Col 3: Address, Phone & Hours (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Office Details
            </h5>
            <div className="space-y-3 text-xs text-emerald-100/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{DENTAL_PRACTICE_INFO.name}</div>
                  <div>{DENTAL_PRACTICE_INFO.address}</div>
                  <div>{DENTAL_PRACTICE_INFO.cityStateZip}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <a href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-white font-semibold hover:text-emerald-300">
                    {DENTAL_PRACTICE_INFO.phone}
                  </a>
                  <span className="text-[11px] text-emerald-300/70 block">Alt: {DENTAL_PRACTICE_INFO.altPhone}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Office Hours:</div>
                  <div>Mon – Thu: 8:00 AM – 1:00 PM, 2:00 PM – 4:30 PM</div>
                  <div className="text-[11px] text-emerald-300/80">Friday: Emergency On-Call</div>
                  <div className="text-[11px] text-white/50">Sat – Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Right Feature Card with Action (lg:col-span-3, matching video structure) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-slate-800 aspect-[3/4] group">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                alt="Evergreen Family Dentistry Yreka CA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021810] via-black/30 to-transparent" />

              <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                Accepting New Patients
              </div>

              {/* Bottom Card Action */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-col items-center gap-1.5">
                <button
                  onClick={onContactUs}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Request Visit</span>
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>

            <span className="text-[11px] text-emerald-200/60 mt-3 text-center">
              Licensed Dental Healthcare Facility · Yreka, California
            </span>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <div className="flex items-center gap-2">
            <span>Evergreen Family Dentistry</span>
            <span>·</span>
            <span>Dr. Randy Dee Krant, DDS</span>
            <span>·</span>
            <span>Yreka, CA 96097</span>
          </div>
          <div>
            © {new Date().getFullYear()} Evergreen Family Dentistry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

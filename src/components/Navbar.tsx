import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#041a12]/95 backdrop-blur-md py-3 shadow-lg border-b border-emerald-500/20'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-all shadow-md">
                <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M12 2L4 12H9L3 20H21L15 12H20L12 2Z" opacity="0.9" />
                  <circle cx="12" cy="18" r="2.5" fill="#ffffff" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white font-['Playfair_Display',Georgia,serif] leading-tight">
                  Evergreen <span className="text-emerald-300 font-normal italic">Dentistry</span>
                </span>
              </div>
            </a>

            {/* Essential Nav Links Only */}
            <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-white/90">
              <a href="#services" className="hover:text-emerald-300 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-emerald-300 transition-colors">
                About
              </a>
              <a href="#treatments" className="hover:text-emerald-300 transition-colors">
                Smile Gallery
              </a>
              <a href="#testimonials" className="hover:text-emerald-300 transition-colors">
                Reviews
              </a>
              <a
                href={DENTAL_PRACTICE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-emerald-300/90"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </a>
            </nav>

            {/* Direct Actions: Phone */}
            <div className="flex items-center gap-3">
              {/* Direct Click to Call */}
              <a
                href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-semibold bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-full border border-white/10 transition-colors"
                title="Call office directly"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{DENTAL_PRACTICE_INFO.phone}</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                className="md:hidden p-1.5 text-white/90 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#041a12]/98 backdrop-blur-2xl pt-20 pb-8 px-6 flex flex-col justify-between animate-in fade-in duration-150">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-white pt-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-emerald-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-emerald-300 transition-colors"
            >
              About Practice
            </a>
            <a
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-emerald-300 transition-colors"
            >
              Smile Gallery
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-emerald-300 transition-colors"
            >
              Reviews
            </a>
            <a
              href={DENTAL_PRACTICE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 text-emerald-300 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>310 Evergreen Ln, Yreka (Directions)</span>
            </a>
          </nav>

          <div className="pt-6 flex flex-col gap-3">
            <a
              href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-3 bg-white/10 border border-white/20 text-white rounded-full font-semibold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {DENTAL_PRACTICE_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

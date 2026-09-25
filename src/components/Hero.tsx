import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Instagram, MapPin } from 'lucide-react';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100, visible: false });

  // Fast mouse tracking with amplified response
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
    setCursorPos({ x: clientX - rect.left, y: clientY - rect.top, visible: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setCursorPos((prev) => ({ ...prev, visible: false }));
  };

  // Scroll tracking pinned hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Snappier, high-stiffness spring for rapid aperture reaction
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 22,
    restDelta: 0.001,
  });

  // Circular aperture radius: expands swiftly from 240px to 1400px early in the scroll
  const clipRadius = useTransform(smoothProgress, [0, 0.35], [240, 1400]);

  // Content fade and gentle upward float on scroll
  const contentOpacity = useTransform(smoothProgress, [0.25, 0.55], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.55], [0, -70]);

  // Faster zoom and counter-parallax
  const clinicScale = useTransform(smoothProgress, [0, 0.5], [1.02, 1.18]);
  const outdoorScale = useTransform(smoothProgress, [0, 0.5], [1, 1.12]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[140vh] bg-[#03150f] cursor-default"
    >
      {/* Pinned Sticky Viewport: locks for 100vh while aperture expands rapidly */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Rapid cursor interactive aura glow */}
        {cursorPos.visible && (
          <div
            className="absolute pointer-events-none z-30 w-72 h-72 rounded-full -translate-x-1/2 -translate-y-1/2 bg-emerald-400/10 blur-3xl transition-opacity duration-150"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          />
        )}

        {/* Subtle architectural vertical guide lines */}
        <div className="absolute inset-0 pointer-events-none z-10 max-w-7xl mx-auto px-6 grid grid-cols-4 h-full opacity-35">
          <div className="border-r border-emerald-400/10 h-full" />
          <div className="border-r border-emerald-400/10 h-full" />
          <div className="border-r border-emerald-400/10 h-full" />
          <div className="border-r border-emerald-400/10 h-full" />
        </div>

        {/* ---------------- LAYER 1: BASE OUTER BACKGROUND (RADIANT HEALTHY SMILE) ---------------- */}
        <motion.div
          className="absolute inset-0 z-0 transition-transform duration-75 ease-out"
          style={{
            scale: outdoorScale,
            x: mousePos.x * -42,
            y: mousePos.y * -42,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=85"
            alt="Radiant, healthy natural smile patient"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.06]"
          />
          {/* Deep evergreen vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#031710] via-black/45 to-black/60" />
        </motion.div>

        {/* ---------------- LAYER 2: SCROLL-CONTROLLED CIRCULAR APERTURE (MODERN CLINICAL SUITE) ---------------- */}
        <motion.div
          className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
        >
          <motion.div
            className="w-full h-full relative"
            style={{
              clipPath: useTransform(clipRadius, (r) => `circle(${r}px at 50% 50%)`),
              WebkitClipPath: useTransform(clipRadius, (r) => `circle(${r}px at 50% 50%)`),
            }}
          >
            {/* High-tech modern dental clinic interior with accelerated parallax */}
            <motion.img
              src="/src/assets/images/dental_hero_clinic_1790293806488.jpg"
              alt="State-of-the-art Evergreen Family Dentistry operatory in Yreka"
              style={{
                scale: clinicScale,
                x: mousePos.x * 48,
                y: mousePos.y * 48,
              }}
              className="w-full h-full object-cover object-center filter brightness-[0.88]"
            />
            {/* Scrim over clinic */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021810]/85 via-black/25 to-black/50" />

            {/* Glowing border rim along aperture circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 pointer-events-none shadow-[0_0_60px_rgba(52,211,153,0.3)]"
              style={{
                width: useTransform(clipRadius, (r) => `${r * 2}px`),
                height: useTransform(clipRadius, (r) => `${r * 2}px`),
              }}
            />
          </motion.div>
        </motion.div>

        {/* ---------------- CENTER HERO CONTENT OVERLAY (CLEAN, NO PLAY BUTTON) ---------------- */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pointer-events-auto"
        >
          {/* Main Headline with new Playfair Display font styling */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-['Playfair_Display',Georgia,serif] drop-shadow-2xl text-balance leading-[1.1]"
          >
            Crafting radiant smiles,{' '}
            <span className="inline-block text-emerald-300 italic font-normal">one gentle visit at a time</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow"
          >
            Welcome to Evergreen Family Dentistry. Dr. Randy Krant, DDS and our dedicated team provide painless modern technology, compassionate family care, and stunning smile makeovers in a warm, relaxed environment.
          </motion.p>

          {/* Quick Action Button directly on Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex items-center gap-3.5"
          >
            <button
              onClick={onOpenBooking}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3 rounded-full text-sm shadow-xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Request an Appointment
            </button>
            <a
              href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm border border-white/20 transition-all hover:scale-105"
            >
              Call {DENTAL_PRACTICE_INFO.phone}
            </a>
          </motion.div>
        </motion.div>

        {/* ---------------- BOTTOM LEFT CORNER: SOCIAL / MAPS & PROMO SPECIAL ---------------- */}
        <div className="absolute bottom-6 left-4 sm:left-8 z-20 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <a
              href={DENTAL_PRACTICE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Evergreen Family Dentistry on Google Maps"
              className="px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-1.5 text-xs font-bold transition-transform hover:scale-105 shadow-md"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 shadow-md"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 shadow-md"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Scroll hint indicator (hidden on mobile view) */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]) }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center pointer-events-none text-emerald-200/60"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold mb-1">Scroll to Enter</span>
          <div className="w-4 h-7 rounded-full border border-emerald-400/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

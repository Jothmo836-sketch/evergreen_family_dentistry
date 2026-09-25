/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutCarousel } from './components/AboutCarousel.tsx';
import { StatsCounter } from './components/StatsCounter.tsx';
import { ActivityMatrix } from './components/ActivityMatrix.tsx';
import { UpcomingEvents } from './components/UpcomingEvents.tsx';
import { ExtremeGear } from './components/ExtremeGear.tsx';
import { OrbitTestimonials } from './components/OrbitTestimonials.tsx';
import { RedArenaCTA } from './components/RedArenaCTA.tsx';
import { BookingSection } from './components/BookingSection.tsx';
import { Footer } from './components/Footer.tsx';
import { DentalCaseOrEvent, DentalServiceCategory } from './data/dentalData.ts';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    'Comprehensive Dental Exam & Cleaning'
  );

  // Smooth scroll directly to the Booking Section with target service pre-selected
  const scrollToBooking = (service?: string) => {
    if (service) {
      // Map category or title to the form option
      if (service.toLowerCase().includes('clean') || service.toLowerCase().includes('prevent')) {
        setSelectedService('Comprehensive Dental Exam & Cleaning');
      } else if (service.toLowerCase().includes('pediatric') || service.toLowerCase().includes('kid')) {
        setSelectedService('Pediatric First Dental Visit');
      } else if (service.toLowerCase().includes('whiten')) {
        setSelectedService('Professional Teeth Whitening');
      } else if (service.toLowerCase().includes('veneer') || service.toLowerCase().includes('cosmetic')) {
        setSelectedService('Cosmetic Consultation (Veneers & Makeover)');
      } else if (service.toLowerCase().includes('implant')) {
        setSelectedService('Dental Implant Consultation');
      } else if (service.toLowerCase().includes('crown') || service.toLowerCase().includes('restorat')) {
        setSelectedService('Restorative Crowns, Bridges or Fillings');
      } else if (service.toLowerCase().includes('invisalign') || service.toLowerCase().includes('ortho')) {
        setSelectedService('Invisalign Clear Aligners Assessment');
      } else if (service.toLowerCase().includes('emerg')) {
        setSelectedService('Urgent Dental Pain or Emergency');
      } else {
        setSelectedService(service);
      }
    }

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectEvent = (event: DentalCaseOrEvent) => {
    scrollToBooking(event.title);
  };

  const handleSelectCategory = (category: DentalServiceCategory) => {
    scrollToBooking(category.title);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenBooking={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
      />

      <main className="flex-grow">
        {/* 1. Hero Section with Interactive Dual-Layer Aperture Lens & Scroll Motion */}
        <Hero
          onOpenBooking={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
        />

        {/* 2. About Practice Carousel */}
        <AboutCarousel
          onLearnMore={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
        />

        {/* 3. Rolling Stats & Clinical Excellence */}
        <StatsCounter
          onGetStarted={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
        />

        {/* 4. Interactive 4-Card Service Matrix */}
        <ActivityMatrix
          onLearnMore={handleSelectCategory}
        />

        {/* 5. Treatment Cases & Full-Bleed Parallax Cinematic Banners */}
        <UpcomingEvents
          onSelectEvent={handleSelectEvent}
        />

        {/* 6. Clinical Technology, Sterilization Standards & Patient Comforts */}
        <ExtremeGear
          onLearnMore={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
        />

        {/* 7. Orbital Patient Testimonials */}
        <OrbitTestimonials />

        {/* 8. Signature Evergreen Arena Banner */}
        <RedArenaCTA
          onContactUs={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
          onExploreAll={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Dedicated Embedded Booking Section */}
        <BookingSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      {/* 10. Full Practice Footer with Address, Google Maps CID Link & Hours */}
      <Footer
        onContactUs={() => scrollToBooking('Comprehensive Dental Exam & Cleaning')}
      />
    </div>
  );
}

import React, { useState, forwardRef } from 'react';
import { Sparkles, Clock, MapPin, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DENTAL_PRACTICE_INFO } from '../data/dentalData.ts';

interface BookingSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const BookingSection = forwardRef<HTMLDivElement, BookingSectionProps>(
  ({ selectedService, onServiceChange }, ref) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('2026-10-15');
    const [timePref, setTimePref] = useState('Morning (8:30 AM - 12:00 PM)');
    const [notes, setNotes] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
      });
    };

    return (
      <section
        ref={ref}
        id="booking"
        className="py-24 bg-[#03150f] text-white relative overflow-hidden scroll-mt-12"
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Practice Info & Hours */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-300 uppercase mb-3 bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Reserve Your Appointment</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Playfair_Display',Georgia,serif] leading-[1.15] text-balance mb-6">
                Your gentle, healthy smile begins here
              </h2>

              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Whether you need a routine checkup, a long-overdue dental cleaning, or a consultation for dental implants and veneers, our dedicated Yreka team is here to make your experience completely relaxing and pain-free.
              </p>

              {/* Practice Quick Details Card */}
              <div className="bg-white/5 border border-emerald-500/20 rounded-3xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white font-['Playfair_Display',Georgia,serif]">
                      {DENTAL_PRACTICE_INFO.name}
                    </div>
                    <div className="text-xs text-emerald-100/70">
                      {DENTAL_PRACTICE_INFO.address}, {DENTAL_PRACTICE_INFO.cityStateZip}
                    </div>
                    <a
                      href={DENTAL_PRACTICE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-300 underline hover:text-emerald-200 mt-1 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-emerald-500/10">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs text-emerald-100/70 block">Direct Line:</span>
                    <a
                      href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-sm font-bold text-white hover:text-emerald-300"
                    >
                      {DENTAL_PRACTICE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-emerald-500/10">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-100/70">
                    <span className="text-white font-medium block">Office Hours:</span>
                    <div>Mon – Thu: 8:00 AM – 1:00 PM, 2:00 PM – 4:30 PM</div>
                    <div>Friday: Emergency On-Call</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#052118] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',Georgia,serif] text-white mb-3">
                      Appointment Request Received
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100/80 max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you, <strong className="text-white">{name || 'Patient'}</strong>. Our front office coordinator at Evergreen Family Dentistry has received your request and will call you at <strong className="text-emerald-300">{phone || email}</strong> to confirm your reserved time.
                    </p>

                    <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/20 text-xs text-emerald-100/80 text-left max-w-md mx-auto mb-8 space-y-2">
                      <div><strong className="text-white">Selected Care:</strong> {selectedService}</div>
                      <div><strong className="text-white">Preferred Date & Time:</strong> {date} ({timePref})</div>
                      <div><strong className="text-white">Office:</strong> 310 Evergreen Lane, Yreka, CA 96097</div>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-all"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold font-['Playfair_Display',Georgia,serif] text-white mb-2">
                        Online Appointment Request
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/70">
                        Please fill out the form below. We will confirm your appointment promptly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Reason for Visit */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                          Treatment or Reason for Visit
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => onServiceChange(e.target.value)}
                          className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                        >
                          <option value="Comprehensive Dental Exam & Cleaning" className="bg-[#052118]">
                            Comprehensive Dental Exam & Cleaning
                          </option>
                          <option value="Pediatric First Dental Visit" className="bg-[#052118]">
                            Pediatric First Dental Visit (Children & Teens)
                          </option>
                          <option value="Cosmetic Consultation (Veneers & Makeover)" className="bg-[#052118]">
                            Cosmetic Consultation (Porcelain Veneers & Makeover)
                          </option>
                          <option value="Professional Teeth Whitening" className="bg-[#052118]">
                            Professional Teeth Whitening
                          </option>
                          <option value="Restorative Crowns, Bridges or Fillings" className="bg-[#052118]">
                            Restorative Crowns, Bridges or Fillings
                          </option>
                          <option value="Dental Implant Consultation" className="bg-[#052118]">
                            Dental Implant Consultation
                          </option>
                          <option value="Invisalign Clear Aligners Assessment" className="bg-[#052118]">
                            Invisalign Clear Aligners Assessment
                          </option>
                          <option value="Urgent Dental Pain or Emergency" className="bg-[#052118]">
                            Urgent Dental Pain or Emergency Relief
                          </option>
                        </select>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                            Patient Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Miller"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/35 focus:outline-none focus:border-emerald-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(530) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/35 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/35 focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      {/* Preferred Date & Preferred Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                            Preferred Time Window
                          </label>
                          <select
                            value={timePref}
                            onChange={(e) => setTimePref(e.target.value)}
                            className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                          >
                            <option value="Morning (8:30 AM - 12:00 PM)" className="bg-[#052118]">
                              Morning (8:30 AM - 12:00 PM)
                            </option>
                            <option value="Afternoon (2:00 PM - 4:30 PM)" className="bg-[#052118]">
                              Afternoon (2:00 PM - 4:30 PM)
                            </option>
                            <option value="Earliest Available Opening" className="bg-[#052118]">
                              Earliest Available Opening
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Optional Notes */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-100/90 mb-1.5">
                          Notes or Specific Symptoms (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Tell us if you have tooth sensitivity, anxiety, or want to focus on cosmetic goals..."
                          className="w-full bg-white/5 border border-emerald-500/30 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-white/35 focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      {/* Submit CTA */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg shadow-emerald-950/60 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                        >
                          <span>Confirm & Book Treatment</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>

                      <div className="text-center pt-2 text-[11px] text-emerald-200/60">
                        Prefer to schedule over the phone? Call us directly at{' '}
                        <a
                          href={`tel:${DENTAL_PRACTICE_INFO.phone.replace(/[^0-9]/g, '')}`}
                          className="text-emerald-300 font-semibold underline"
                        >
                          {DENTAL_PRACTICE_INFO.phone}
                        </a>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

BookingSection.displayName = 'BookingSection';

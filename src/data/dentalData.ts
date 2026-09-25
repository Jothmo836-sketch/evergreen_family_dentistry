import clinicInterior from '../assets/images/dental_hero_clinic_1790293806488.jpg';

export interface DentalServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: 'sparkles' | 'shield' | 'heart' | 'smile' | 'scan' | 'clock';
  image: string;
  featuredTitle: string;
  featuredSubtitle: string;
  popularTreatments: string[];
  duration: string;
  recovery: string;
}

export interface DentalCaseOrEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  doctor: string;
  duration: string;
  tagline: string;
  description: string;
  benefits: string[];
}

export interface PatientReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  location: string;
  service: string;
}

export const DENTAL_PRACTICE_INFO = {
  name: 'Evergreen Family Dentistry',
  doctor: 'Dr. Randy Dee Krant, DDS',
  staff: 'Gentle Registered Hygienists & Certified Dental Assistants',
  address: '310 Evergreen Lane',
  cityStateZip: 'Yreka, CA 96097',
  phone: '(530) 842-2585',
  altPhone: '(530) 842-2558',
  email: 'care@evergreenfamilydentistry.org',
  googleMapsUrl: 'https://maps.google.com/?cid=11018043332386125735&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  hours: [
    { days: 'Monday – Thursday', time: '8:00 AM – 1:00 PM, 2:00 PM – 4:30 PM' },
    { days: 'Friday', time: 'Emergency On-Call & By Special Appointment' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
  insuranceAccepted: [
    'Delta Dental',
    'Cigna Dental',
    'MetLife',
    'Guardian',
    'Aetna',
    'CareCredit 0% Financing',
    'FSA / HSA Accepted',
  ],
};

export const DENTAL_SERVICE_CATEGORIES: DentalServiceCategory[] = [
  {
    id: 'preventive',
    title: 'Preventive & Family Dentistry',
    shortDesc: 'Comprehensive cleanings, gentle exams, and digital low-radiation diagnostics for all ages.',
    description: 'Protecting your natural teeth through proactive oral care. From your child’s first milestone checkup to periodontal maintenance, our team ensures every visit is gentle and stress-free.',
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    featuredTitle: 'Gentle checkups & lifelong oral wellness',
    featuredSubtitle: 'Preventive Care',
    popularTreatments: ['Ultrasonic Teeth Cleanings', 'Digital Low-Dose X-Rays', 'Fluoride & Cavity Sealants', 'Oral Cancer Screening'],
    duration: '45 - 60 min',
    recovery: 'Immediate',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry & Smile Makeovers',
    shortDesc: 'Custom porcelain veneers, professional whitening, and aesthetic bonding to illuminate your smile.',
    description: 'Transform your confidence with personalized cosmetic dentistry. Whether correcting chips, closing gaps, or brightening discoloration, we create natural, radiant results.',
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    featuredTitle: 'Radiant, natural smile design tailored to you',
    featuredSubtitle: 'Cosmetic Artistry',
    popularTreatments: ['In-Office Zoom Whitening', 'Hand-Crafted Porcelain Veneers', 'Cosmetic Composite Bonding', 'Enamel Recontouring'],
    duration: '1 - 2 visits',
    recovery: 'None to Minimal',
  },
  {
    id: 'restorative',
    title: 'Restorative Crowns & Implants',
    shortDesc: 'Lifelike ceramic crowns, bridge solutions, and permanent dental implant restorations.',
    description: 'Restore complete chewing power and natural aesthetics. Our high-strength ceramic restorations blend seamlessly with adjacent teeth to preserve bite balance.',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    featuredTitle: 'Durable, seamless restoration of natural function',
    featuredSubtitle: 'Restorative Solutions',
    popularTreatments: ['Tooth-Colored Fillings', 'Ceramic Porcelain Crowns', 'Dental Implant Crowns', 'Gentle Root Canal Therapy'],
    duration: '60 - 90 min',
    recovery: '1 - 2 days',
  },
  {
    id: 'orthodontics',
    title: 'Clear Aligners & Orthodontics',
    shortDesc: 'Discreet Invisalign aligners and bite balancing without metal brackets or wires.',
    description: 'Straighten crooked teeth, resolve crowding, and correct bite alignment with virtually invisible custom aligners, monitored closely by Dr. Krant.',
    icon: 'scan',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    featuredTitle: 'Virtually invisible teeth straightening',
    featuredSubtitle: 'Clear Orthodontics',
    popularTreatments: ['Invisalign Clear Aligners', 'Digital 3D Smile Simulator', 'Bite Alignment Correction', 'Post-Treatment Clear Retainers'],
    duration: '6 - 14 months',
    recovery: 'Comfortable & Removable',
  },
];

export const UPCOMING_CLINICAL_CASES: DentalCaseOrEvent[] = [
  {
    id: 'case-whitening',
    title: 'Deep Enamel Whitening Protocol',
    date: 'Available Daily',
    category: 'Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    doctor: 'Dr. Randy Krant, DDS',
    duration: '60 Minutes',
    tagline: 'Up to 8 shades whiter in a single comfortable appointment.',
    description: 'Our clinical-grade whitening lifts stubborn coffee, tea, and aging stains safely with desensitizing minerals.',
    benefits: ['Safe on sensitive gums', 'Instant visible brightness', 'Includes take-home touch-up kit'],
  },
  {
    id: 'case-pediatric',
    title: 'Gentle Kids First Dental Experience',
    date: 'Mon - Thu Booking',
    category: 'Pediatric Care',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    doctor: 'Evergreen Hygiene Team',
    duration: '45 Minutes',
    tagline: 'Creating positive, anxiety-free dental memories for little explorers.',
    description: 'We take time to introduce children to dental tools gently with fun explanations, prizes, and zero fear.',
    benefits: ['Cavity-fighting fluoride', 'Friendly chair tours', 'Parental co-participation welcome'],
  },
  {
    id: 'case-veneers',
    title: 'Handcrafted Porcelain Veneer Makeovers',
    date: 'Consultation Available',
    category: 'Cosmetic Artistry',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    doctor: 'Dr. Randy Krant, DDS',
    duration: '2 Appointments',
    tagline: 'Flawless symmetry, natural translucency, and permanent stain resistance.',
    description: 'Ultra-thin custom porcelain shells designed to match your facial aesthetics and desired tooth shape perfectly.',
    benefits: ['Precision digital wax-up preview', 'Long-lasting 15+ year durability', 'Natural light transmission'],
  },
  {
    id: 'case-emergency',
    title: 'Same-Day Urgent Tooth Relief',
    date: 'Priority On-Call',
    category: 'Emergency Care',
    image: clinicInterior,
    doctor: 'Emergency Dental Team',
    duration: 'Immediate Triage',
    tagline: 'Fast relief when unexpected dental pain or tooth accidents occur.',
    description: 'We prioritize same-day appointments for knocked-out teeth, cracked restorations, acute toothaches, or swelling.',
    benefits: ['Prompt pain management', 'Immediate digital X-ray diagnostics', 'Gentle tooth preservation'],
  },
  {
    id: 'case-crowns',
    title: 'Custom Ceramic Tooth Restoration',
    date: 'Mon - Thu Booking',
    category: 'Restorative Care',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    doctor: 'Dr. Randy Krant, DDS',
    duration: '2 Visits',
    tagline: 'Protecting fractured or decayed teeth with reinforced ceramic.',
    description: 'Custom-shaded porcelain crowns fabricated to restore complete chewing strength and prevent tooth loss.',
    benefits: ['Metal-free biocompatible ceramic', 'Exact color matching', 'Comfortable chewing function'],
  },
  {
    id: 'case-invisalign',
    title: 'Invisalign Clear Aligner Assessment',
    date: 'Free Consultations',
    category: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    doctor: 'Dr. Randy Krant, DDS',
    duration: '30 Minutes',
    tagline: 'See your projected straight smile before treatment begins.',
    description: 'High-resolution digital optical scanning maps your teeth without messy impression trays.',
    benefits: ['Zero goopy impression putty', 'Preview final smile digitally', 'Flexible payment plans'],
  },
];

export const PATIENT_TESTIMONIALS: PatientReview[] = [
  {
    id: 'review-1',
    name: 'Sarah M.',
    role: 'Yreka Native & Mother of 3',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Dr. Krant and his entire staff are absolute angels. I have had severe dental anxiety since childhood, but their calm, gentle approach made my cleaning and crown completely painless. My kids now love coming to the dentist!',
    rating: 5,
    location: 'Yreka, CA',
    service: 'Family & Restorative Care',
  },
  {
    id: 'review-2',
    name: 'David Reynolds',
    role: 'Local Business Owner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Evergreen Family Dentistry is the best dental office in Siskiyou County. High-tech equipment, spotless facility, transparent pricing, and they never push unnecessary procedures. My dental implant looks and feels 100% natural.',
    rating: 5,
    location: 'Montague, CA',
    service: 'Dental Implant & Crown',
  },
  {
    id: 'review-3',
    name: 'Elena Gonzalez',
    role: 'School Teacher',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Had my teeth whitened and two front veneers done here before my wedding. The results took my breath away. Dr. Krant has a true artist’s eye for detail and natural beauty. Thank you for giving me my dream smile!',
    rating: 5,
    location: 'Yreka, CA',
    service: 'Cosmetic Veneers & Whitening',
  },
  {
    id: 'review-4',
    name: 'Robert K.',
    role: 'Retired Forester',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'I had an unbearable toothache on a Tuesday morning. They squeezed me into their schedule within two hours, relieved the pain immediately, and took care of the tooth. Honest, skilled, and deeply caring people.',
    rating: 5,
    location: 'Weed, CA',
    service: 'Emergency Dental Relief',
  },
  {
    id: 'review-5',
    name: 'Jessica Taylor',
    role: 'Registered Nurse',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'As a healthcare worker, sterilization and patient comfort are huge for me. Evergreen Family Dentistry exceeds every medical standard. Clean, warm, friendly, and efficient. I recommend them to everyone in our community.',
    rating: 5,
    location: 'Yreka, CA',
    service: 'Routine Preventive Exam',
  },
];

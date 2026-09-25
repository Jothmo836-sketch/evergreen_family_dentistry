import paragliderBeach from '../assets/images/paraglider_beach_coastal_1790291367879.jpg';
import hikerMountains from '../assets/images/hero_hiker_mountains_1790291290586.jpg';
import whitewaterCrew from '../assets/images/whitewater_rafting_crew_1790291399478.jpg';
import rockClimber from '../assets/images/rock_climber_granite_1790291456517.jpg';
import cyclistRoad from '../assets/images/hero_cyclist_road_1790291302424.jpg';
import kayakHorizontal from '../assets/images/kayak_horizontal_1790292092310.jpg';
import stadiumSoccer from '../assets/images/soccer_ball_stadium_1790291420023.jpg';
import motocrossDust from '../assets/images/motocross_rider_dust_1790291336800.jpg';
import tentHorizontal from '../assets/images/tent_horizontal_1790292145441.jpg';
import tennisBall from '../assets/images/hero_tennis_ball_1790292062980.jpg';
import skaterHorizontal from '../assets/images/skater_horizontal_1790292121461.jpg';
import quadTrail from '../assets/images/atv_quad_trail_1790291444301.jpg';
import tentRidge from '../assets/images/yellow_tent_mountain_ridge_1790291378740.jpg';
import climbingGear from '../assets/images/climbing_gear_carabiner_1790291431331.jpg';

export interface ActivityCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  featuredTitle: string;
  featuredSubtitle: string;
  location: string;
  difficulty: string;
}

export interface AdventureEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  location: string;
}

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {
    id: 'air',
    title: 'Air & altitude experiences',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem dolor, imperdiet ut placerat sed, ultrices vitae Maecenas.',
    icon: 'wind',
    image: paragliderBeach,
    featuredTitle: 'Waves, winds, and wandering souls',
    featuredSubtitle: 'Adventure',
    location: 'Interlaken & Costa Brava',
    difficulty: 'All Levels Welcome',
  },
  {
    id: 'outdoor',
    title: 'Guided outdoor adventures',
    description: 'Traverse untouched backcountry trails with alpine experts who know every crest, valley, and summit ridge.',
    icon: 'compass',
    image: hikerMountains,
    featuredTitle: 'Alpine trails & untamed mountain ridges',
    featuredSubtitle: 'High Altitude',
    location: 'Dolomites & Rocky Mountains',
    difficulty: 'Moderate to Advanced',
  },
  {
    id: 'water',
    title: 'Water sports & activities',
    description: 'Challenge untamed river rapids, paddle mirror lakes, and surf coastal swells alongside world-class river guides.',
    icon: 'waves',
    image: whitewaterCrew,
    featuredTitle: 'Roaring rapids & crystal white waters',
    featuredSubtitle: 'Aquatic Expedition',
    location: 'Zambezi & Colorado Rivers',
    difficulty: 'Class III-V Rapids',
  },
  {
    id: 'climbing',
    title: 'Rock climbing expeditions',
    description: 'Scale sheer granite monoliths, master multi-pitch ascents, and conquer breathtaking cliffside views.',
    icon: 'mountain',
    image: rockClimber,
    featuredTitle: 'Sheer granite monoliths & vertical limits',
    featuredSubtitle: 'Mountaineering',
    location: 'Yosemite & Chamonix Needle',
    difficulty: '5.9 - 5.12c Grades',
  },
];

export const UPCOMING_EVENTS: AdventureEvent[] = [
  {
    id: 'rafting-grand-canyon',
    title: 'Whitewater Rapid Sprint',
    date: 'January 05, 2026',
    category: 'Water Sports',
    image: whitewaterCrew,
    location: 'Colorado River Canyon',
    duration: '4 Days',
    price: '$850',
    description: 'Embark on a heart-stopping expedition through Class IV rapids with safety equipment and professional river pilots.',
  },
  {
    id: 'alpine-cycling-pass',
    title: 'High Alpine Road Climb',
    date: 'January 10, 2026',
    category: 'Endurance',
    image: cyclistRoad,
    location: 'Passo dello Stelvio, Italy',
    duration: '3 Days',
    price: '$620',
    description: '48 iconic hairpin turns above the clouds. Supported ride with mechanic van and nutrition fueling.',
  },
  {
    id: 'wave-chasers',
    title: 'Wave chasers',
    date: 'January 12, 2026',
    category: 'Water Sports',
    image: kayakHorizontal,
    location: 'Emerald River Fjord',
    duration: '2 Days',
    price: '$450',
    description: 'Kayak through morning mist along ancient cliff lines and hidden waterfall inlets.',
  },
  {
    id: 'stadium-cup',
    title: 'Arena Championship Series',
    date: 'January 28, 2026',
    category: 'Field Sports',
    image: stadiumSoccer,
    location: 'Alpine Arena Sports Complex',
    duration: '1 Day',
    price: '$120',
    description: 'High-intensity competitive invitational tournament under stadium spotlights.',
  },
  {
    id: 'motocross-desert-run',
    title: 'Dune & Dust Motocross Trial',
    date: 'February 02, 2026',
    category: 'Motorsport',
    image: motocrossDust,
    location: 'Mojave Ridge Circuit',
    duration: '3 Days',
    price: '$980',
    description: 'Pro and amateur dirt bike rally stages through technical rocky washes and sand bowls.',
  },
  {
    id: 'mountain-summit-peak',
    title: 'Mountain summit peak',
    date: 'February 08, 2026',
    category: 'High Altitude',
    image: tentHorizontal,
    location: 'Matterhorn Base Plateau',
    duration: '5 Days',
    price: '$1,400',
    description: 'Bivouac camp under subzero alpine stars with crampon glacier traversing at first dawn light.',
  },
  {
    id: 'tennis-pro-invitational',
    title: 'Seaside Court Masters',
    date: 'February 20, 2026',
    category: 'Court Sports',
    image: tennisBall,
    location: 'Riviera Clay Club',
    duration: '2 Days',
    price: '$340',
    description: 'Precision clinic and doubles round-robin coached by former international tour champions.',
  },
  {
    id: 'skate-enthusiast',
    title: 'Skate enthusiast',
    date: 'March 07, 2026',
    category: 'Urban Action',
    image: skaterHorizontal,
    location: 'Pacific Concrete Plaza',
    duration: '1 Day',
    price: '$95',
    description: 'Street skate jam session featuring rail tricks, bowl carving, and video part filming.',
  },
  {
    id: 'atv-backcountry',
    title: 'Canyon Trail Quad Raid',
    date: 'March 18, 2026',
    category: 'Off-Road',
    image: quadTrail,
    location: 'Red Rock Wilderness',
    duration: '2 Days',
    price: '$550',
    description: 'Full-throttle guided 4x4 quad bike tour across slickrock canyons and mountain passes.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'wilson',
    name: 'Wilson Dodds',
    role: 'Weekend explorer & travel blogger',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nisi ornare dolor dapibus tincidunt non eu libero. Sed sagittis neque eu risus maximus hendrerit. Praesent facilisis sapien at urna finibus, et sodales lectus ultrices.',
    rating: 5,
    location: 'Vancouver, Canada',
  },
  {
    id: 'marta',
    name: 'Marta Davis',
    role: 'Backcountry skills mentor',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'The alpine guides at Xpedition operate with unmatched technical precision. Every safety briefing was immaculate, and the high ridge traverse was the defining moment of my year.',
    rating: 5,
    location: 'Innsbruck, Austria',
  },
  {
    id: 'pablo',
    name: 'Pablo Barton',
    role: 'Outdoor readiness expert',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'When you are 4,000 meters above sea level in changing weather, gear reliability and route expertise are everything. Xpedition delivered beyond every expectation.',
    rating: 5,
    location: 'Boulder, Colorado',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Alpine mountaineer & ultrarunner',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'From equipment check to summit push, every detail was orchestrated with calm mastery. Truly a life-changing adventure with teammates who become family.',
    rating: 5,
    location: 'Chamonix, France',
  },
  {
    id: 'chris',
    name: 'Chris Vance',
    role: 'Extreme kayaker & guide',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Pushing personal boundaries in wild nature requires absolute trust in your crew. Xpedition sets the gold standard for expedition leadership.',
    rating: 5,
    location: 'Queenstown, New Zealand',
  },
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'item-1',
    name: 'Xpedition Summit Geo-Dome Tent',
    category: 'High Altitude Gear',
    price: 480,
    image: tentRidge,
    quantity: 1,
  },
  {
    id: 'item-2',
    name: 'Pro Locking Carabiner & Sling Set',
    category: 'Mountaineering',
    price: 135,
    image: climbingGear,
    quantity: 2,
  },
];

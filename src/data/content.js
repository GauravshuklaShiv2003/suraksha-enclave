import {
  ShieldCheck, Video, Zap, Lightbulb, Droplets, Route, Trees, Landmark, Sparkles,
  Plane, Milestone, Factory, Shield, Trophy, Flag, PawPrint, Bus, TrainFront,
  Clapperboard, HeartPulse, Puzzle, Cpu, Truck, Castle, FileCheck2, BadgeCheck,
} from 'lucide-react';

export const BRAND = {
  name: 'Suraksha Enclave',
  tribute: 'A tribute to service. A secure future.',
  headline: 'Where Infrastructure, Opportunity and Growth Converge.',
  subline: 'Where planning meets peaceful living.',
  phone: '+91-9625958689',
  phoneHref: 'tel:+919625958689',
  website: 'www.surakshaenclave.in',
  websiteHref: 'https://www.surakshaenclave.in',
  instagram: '@suraksha_enclavejattari',
  instagramHref: 'https://www.instagram.com/suraksha_enclavejattari',
  address: 'IS-400, Ground Floor, Urbtech Trade Centre, Sector 132, Noida Expressway – 201304',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Urbtech+Trade+Centre+Sector+132+Noida',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Approvals', href: '#approvals' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Growth', href: '#growth' },
  { label: 'Contact', href: '#contact' },
];

export const ABOUT = {
  title: 'Built on the discipline of service. Now open to every family.',
  body: [
    'Suraksha Enclave was first conceived for India’s uniformed forces, shaped by their discipline and the trust they place in order. That same standard now welcomes civilian homeowners and investors.',
    'It is a thoughtfully planned gated environment for families who want to build and for investors who want to hold, with clear documentation, planned infrastructure and organised land ownership from day one.',
  ],
  pillars: [
    { title: 'Discipline', text: 'A layout planned with the order of a cantonment.' },
    { title: 'Trust', text: 'Approvals in hand before a single plot is sold.' },
    { title: 'Clarity', text: 'Clean titles and organised ownership records.' },
  ],
};

export const QUICK_FACTS = [
  { value: 14, suffix: ' Acres', label: 'Total land area' },
  { text: 'Tappal–Aligarh Highway', label: 'Strategic highway frontage' },
  { text: 'Jewar Airport Zone', label: 'Within the airport influence zone' },
];

export const APPROVALS = [
  { icon: FileCheck2, title: 'YEIDA NOC', text: 'No Objection Certificate from the Yamuna Expressway Industrial Development Authority.' },
  { icon: FileCheck2, title: 'ADA NOC', text: 'No Objection Certificate from the Aligarh Development Authority.' },
  { icon: BadgeCheck, title: 'Section 80 CLU', text: 'Change of Land Use approved under Section 80 of the U.P. Revenue Code.' },
  { icon: BadgeCheck, title: 'Approved layout', text: 'Layout plan approved by the competent authority.' },
];

// HUMNE AMENITIES MEIN AAPKI 8 IMAGES LAGAYI HAIN
export const AMENITIES = [
  { icon: ShieldCheck, title: 'Gated & guarded', text: 'Single controlled entry with 24x7 security staff.', img: '/images/gated community.png', featured: false },
  { icon: Video, title: 'CCTV surveillance', text: 'Camera coverage across entries, roads and common areas.', img: '/images/cctv entrance.png' },
  { icon: Zap, title: 'Underground electricity', text: 'Concealed cabling for safer streets and clean skylines.', img: '/images/electricity.png' },
  { icon: Lightbulb, title: 'Street lighting', text: 'Well-lit avenues from dusk to dawn.', img: '/images/street light.jpg' },
  { icon: Droplets, title: 'Sewage & water', text: 'A dedicated sewage treatment plant and water management system.', img: '/images/sewage water.png' },
  { icon: Route, title: 'Wide roads', text: 'Generous carriageways planned for easy movement.', img: '/images/wide roads.png' },
  { icon: Trees, title: 'Parks & green space', text: 'Ample open lawns and tree-lined walks.', img: '/images/park.png' },
  { icon: Landmark, title: 'Temple', text: 'A serene temple space reserved within the enclave.', img: '/images/Golden Temple Courtyard at Sunset.png' },
  {
    icon: Sparkles,
    title: 'Club Henggsha',
    text: 'Space reserved for the enclave’s own clubhouse: a place to gather, unwind and celebrate.',
    img: '/images/cubhouse.mp4', 
    featured: true,
  },
];

// YAHI WAHI SECTION HAI JISME GRAND ENTRANCE AATA HAI. MAINE ISKO VIDEOS SE REPLACE KAR DIYA HAI.
export const GALLERY = [
  { src: '/images/entrance of jattari vid.mp4', title: 'Grand entrance', caption: 'A guarded gateway that sets the tone.', type: 'video' },
  { src: '/images/tree avenue.mp4', title: 'Tree-lined avenues', caption: 'Wide, serene roads surrounded by lush greenery.', type: 'video' },
  { src: '/images/cubhouse.mp4', title: 'Luxury Clubhouse', caption: 'Premium lifestyle with exclusive amenities and pools.', type: 'video' },
  { src: '/images/central park.mp4', title: 'Central greens', caption: 'Beautifully landscaped gardens with classic fountains.', type: 'video' }
];

export const CONNECTIVITY = [
  {
    group: 'Airways',
    items: [{ icon: Plane, name: 'Noida International Airport (Jewar)' }],
  },
  {
    group: 'Expressways',
    items: [
      { icon: Milestone, name: 'Yamuna Expressway' },
      { icon: Milestone, name: 'Proposed Green Expressway' },
    ],
  },
  {
    group: 'Corridors',
    items: [
      { icon: Factory, name: 'Tappal–Bajna Industrial Corridor' },
      { icon: Shield, name: 'Defence Corridor (Khair region)' },
    ],
  },
  {
    group: 'Around you',
    items: [
      { icon: Trophy, name: 'International Cricket Stadium' },
      { icon: Flag, name: 'Buddh International Circuit' },
      { icon: PawPrint, name: 'Proposed Night Safari' },
      { icon: Bus, name: 'Proposed ISBT' },
      { icon: TrainFront, name: 'Proposed Monorail' },
    ],
  },
];

// Schematic map nodes (x/y in % of the map box). Not to scale.
export const MAP_NODES = [
  { label: 'Jewar Airport', x: 22, y: 30 },
  { label: 'Yamuna Expwy', x: 16, y: 66 },
  { label: 'Film City', x: 36, y: 14 },
  { label: 'Tappal–Bajna', x: 80, y: 28 },
  { label: 'Defence Corridor', x: 84, y: 70 },
  { label: 'Buddh Circuit', x: 40, y: 86 },
];

export const GROWTH_DRIVERS = [
  { icon: Clapperboard, name: 'Film City', size: 1000, unit: 'acres', where: 'Sector 21, YEIDA' },
  { icon: Cpu, name: 'Electronic City', size: 700, unit: 'acres', where: 'Sector 7, adjacent to the airport' },
  { icon: HeartPulse, name: 'Medical Device Park', size: 350, unit: 'acres', where: 'Sector 28, YEIDA' },
  { icon: Puzzle, name: 'Toy Park', size: 100, unit: 'acres', where: 'Sector 33, YEIDA' },
  { icon: Castle, name: 'Heritage City', size: 1186, unit: 'hectares', where: 'Tappal–Bajna' },
  { icon: Truck, name: 'Multimodal Logistics Park', where: 'Tappal–Bajna' },
];

export const INVESTMENT = {
  multiple: '3X',
  horizon: '3 years',
  note: 'Expected appreciation for Yamuna Expressway properties, as projected by market observers.',
  comparables: [
    { project: 'ATS Homekraft', price: '₹3.75 Cr', area: '250 sq m', rate: '≈ ₹1.5 L / sq m' },
    { project: 'Gaur Yamuna City', price: '₹1.5 Cr', area: '100 sq m', rate: '≈ ₹1.5 L / sq m' },
  ],
  disclaimer:
    'Appreciation figures are market expectations, not guaranteed returns. Neighbouring prices are approximate and indicative only. Please verify all details independently before investing.',
};
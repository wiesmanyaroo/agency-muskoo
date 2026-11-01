export interface EstatePlot {
  id: string;
  title: string;
  category: 'estate-land' | 'land-banking' | 'commercial';
  location: string;
  stateOrRegion: string;
  priceFormatted: string;
  priceRawNaira: number;
  priceRawUsd: number;
  initialDeposit: string;
  plotSizes: string[];
  titleDocument: 'FCDA Right of Occupancy (R of O)' | 'Certificate of Occupancy (C of O)' | 'Gwagwalada Area Council Allocation (AGIS Recertified)' | 'Gazetted Freehold (Registered Survey)';
  status: 'Selling Fast' | 'New Launch' | 'Few Plots Left' | 'High ROI Pick';
  topography: '100% Dry Table Land' | 'Gently Elevated Ridge' | 'Solid Savannah Table Land';
  roiProjected: string;
  image: string;
  features: string[];
  description: string;
  agisRef?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  quote: string;
  image: string;
  email: string;
  phone: string;
  linkedin?: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  role: string;
  propertyAcquired: string;
  review: string;
  rating: number;
  verifiedTitleHandover: boolean;
  avatar: string;
}

export const ESTATE_PLOTS: EstatePlot[] = [
  {
    id: 'meridian-crest-gwagwalada',
    title: 'Meridian Royal Enclave (Gwagwalada Phase 1)',
    category: 'estate-land',
    location: 'Adjacent University of Abuja Permanent Site, Gwagwalada',
    stateOrRegion: 'Abuja, FCT',
    priceFormatted: '₦ 4,850,000 per 500sqm',
    priceRawNaira: 4850000,
    priceRawUsd: 3250,
    initialDeposit: '₦ 1,000,000 (Spread balance over 12 months)',
    plotSizes: ['300 sqm (3-Bedroom Villa)', '500 sqm (4-Bedroom Penthouse)', '1,000 sqm (Dual Duplex / Flats)'],
    titleDocument: 'FCDA Right of Occupancy (R of O)',
    status: 'Selling Fast',
    topography: '100% Dry Table Land',
    roiProjected: '45% Annual Capital Growth (UniAbuja Corridor)',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    features: ['Instant Physical Allocation & Beaconing', '100% Free from Local Native / Family Claims', 'Paved 15m Wide Access Roads', 'Perimeter Fencing with Armed Security Gatehouse'],
    description: 'An elite gated community designed for university staff, medical directors, civil servants, and savvy investors. Prime dry table land located 5 minutes from UniAbuja Main Gate and 7 minutes from Gwagwalada Specialist Hospital.',
    agisRef: 'AGIS/GWG/2024/0984'
  },
  {
    id: 'heritage-oasis-giri',
    title: 'Heritage Parkland & Green Haven',
    category: 'estate-land',
    location: 'Giri Junction Interchange Axis, Gwagwalada Expressway',
    stateOrRegion: 'Abuja, FCT',
    priceFormatted: '₦ 3,200,000 per 500sqm',
    priceRawNaira: 3200000,
    priceRawUsd: 2150,
    initialDeposit: '₦ 500,000 Initial Commitment',
    plotSizes: ['500 sqm (Standard Executive)', '600 sqm (Commercial Corner Piece)'],
    titleDocument: 'Gwagwalada Area Council Allocation (AGIS Recertified)',
    status: 'New Launch',
    topography: '100% Dry Table Land',
    roiProjected: '38% Annual Projected Appreciation',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=85',
    features: ['Direct Link to Abuja-Lokoja Expressway', 'Underground Drainage Engineering', 'Solar Powered Street Lighting', 'Registered Cadastral Survey with Area Council'],
    description: 'Strategically positioned right before Giri Junction, connecting Gwagwalada seamlessly to Nnamdi Azikiwe International Airport (18 mins) and Central Business District Abuja (35 mins).',
    agisRef: 'AGIS/REC/GIRI/114'
  },
  {
    id: 'apex-land-banking-dobi',
    title: 'Apex Sovereign Agro-Logistics & Land Banking Belt',
    category: 'land-banking',
    location: 'Dobi Expansion Corridor, Gwagwalada Outer Ring',
    stateOrRegion: 'Abuja, FCT',
    priceFormatted: '₦ 12,500,000 per Acre (6 Plots)',
    priceRawNaira: 12500000,
    priceRawUsd: 8300,
    initialDeposit: '30% Down Payment (Custom Holding Agreement)',
    plotSizes: ['1 Acre (6 Plots)', '5 Acres (Institutional Block)', '10+ Hectares (Agro-Commercial Cluster)'],
    titleDocument: 'Certificate of Occupancy (C of O)',
    status: 'High ROI Pick',
    topography: 'Solid Savannah Table Land',
    roiProjected: '50% - 65% Over 24 Months',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85',
    features: ['Guaranteed Corporate Buyback Option (+40% min)', 'Ideal for Light Manufacturing, Warehousing or Land Flip', 'Survey Charted & Registered with Surveyor General FCT', 'Zero Encroachment by Herders or Encroachers'],
    description: 'The highest returning land banking corridor in the FCT. As Abuja continues its rapid decentralization toward Gwagwalada, wholesale acreage along the Dobi ring road is surging in commercial valuation.',
    agisRef: 'FCDA/C-OF-O/2023/4521'
  },
  {
    id: 'pacific-wharf-commercial',
    title: 'Capital Gateway Commercial Strip',
    category: 'commercial',
    location: 'Abuja-Lokoja Highway Frontage, Gwagwalada Central',
    stateOrRegion: 'Abuja, FCT',
    priceFormatted: '₦ 18,000,000 per 1,000sqm',
    priceRawNaira: 18000000,
    priceRawUsd: 12000,
    initialDeposit: '40% Milestone Allocation Deposit',
    plotSizes: ['1,000 sqm (Bank / Plaza Strip)', '2,500 sqm (Shopping Mall / Fuel Station Footprint)'],
    titleDocument: 'Certificate of Occupancy (C of O)',
    status: 'Few Plots Left',
    topography: '100% Dry Table Land',
    roiProjected: '55% Capital Appreciation + Commercial Leasehold',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    features: ['Dual-Carriageway Direct Frontage', 'Heavy Vehicular & Inter-State Traffic', 'Soil Bearing Test Certified for Multi-Story Civil Construction', 'Electricity Grid Tie-In Ready'],
    description: 'High-density commercial plots located along the bustling federal corridor of Gwagwalada. Ideal for corporate branches, logistics dispatch terminals, hotels, and shopping complexes.',
    agisRef: 'FCDA/COMM/GWG/089'
  },
  {
    id: 'oakwood-land-banking-paiko',
    title: 'Savannah Reserve Land Banking Scheme (Phase 2)',
    category: 'land-banking',
    location: 'Paiko Kore Road, Gwagwalada Metropolis',
    stateOrRegion: 'Abuja, FCT',
    priceFormatted: '₦ 1,950,000 per 500sqm',
    priceRawNaira: 1950000,
    priceRawUsd: 1300,
    initialDeposit: '₦ 350,000 (Spread balance over 6 months)',
    plotSizes: ['500 sqm (Standard Parcel)', '1,000 sqm (Double Parcel)'],
    titleDocument: 'Gazetted Freehold (Registered Survey)',
    status: 'Selling Fast',
    topography: '100% Dry Table Land',
    roiProjected: '35% Fixed Capital Yield Covenant',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    features: ['Free from All Customary Land Encumbrances', 'Contractual Buyback Option at Month 18', 'Immediate Survey Plan & Deed Delivery', 'Suitable for Medium-Term Capital Multiplier'],
    description: 'An accessible, high-security land banking entry point tailored for young professionals, civil servants, and diaspora earners looking to secure verified Abuja FCT land with high capital growth.',
    agisRef: 'GWG/AC/REC/2024/771'
  },
  {
    id: 'valencia-estate-kuje-gwagwalada',
    title: 'Valley View Sovereign Heights',
    category: 'estate-land',
    location: 'Gwagwalada - Kuje Link Road Axis',
    stateOrRegion: 'Abuja, FCT',
    priceFormatted: '₦ 6,500,000 per 600sqm',
    priceRawNaira: 6500000,
    priceRawUsd: 4350,
    initialDeposit: '₦ 1,500,000 Initial Allocation Deposit',
    plotSizes: ['600 sqm (Luxury Detached Duplex)', '1,200 sqm (Mansionette Plot)'],
    titleDocument: 'FCDA Right of Occupancy (R of O)',
    status: 'Few Plots Left',
    topography: 'Gently Elevated Ridge',
    roiProjected: '42% Annual Growth',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    features: ['Elevated Panoramic View of Abuja Hills', 'Internal Paved Interlocking Road Network', 'CCTV Surveillance & Gated Security Outpost', 'Recreation Center & Green Area'],
    description: 'A benchmark in suburban living located along the ongoing dual-lane Kuje-Gwagwalada link road, delivering scenic hill views, cool breeze, and institutional security.',
    agisRef: 'AGIS/FCDA/KJ-GWG/312'
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'ceo-founder',
    name: 'Mustapha',
    role: 'Managing Director & Chief Executive Officer (CEO)',
    credentials: 'Founder & Principal Developer, Musko Properties and Real Estate',
    bio: 'With deep roots, visionary leadership, and years of proven stewardship in Abuja real estate, Mustapha established Musko Properties to solve the greatest challenge facing land buyers in Nigeria: trust. Under his leadership, Musko Properties operates with radical transparency—ensuring that every square meter offered across Gwagwalada and the FCT possesses authenticated government titles, complete AGIS clearance, and permanent concrete beacons planted in the soil. He has personally overseen the acquisition, cadastral allocation, and title perfection of premier estate lands for thousands of Nigerian families, civil servants, and diaspora investors.',
    quote: 'In Nigerian real estate, your investment is only as safe as the integrity of the people behind the company. At Musko Properties, I give you my personal assurance: we do not cut corners, we do not sell encumbered land, and we stand by every beacon planted in our soil.',
    image: '/team/mustapha-ceo.jpg',
    email: 'ceo@muskoproperties.ng',
    phone: '+234 805 358 0963',
    linkedin: 'https://linkedin.com',
    highlights: [
      'Champion of 100% scam-free land allocation across Gwagwalada & Abuja FCT',
      'Successfully safeguarded over ₦45 Billion in diaspora and private land capital',
      'Guarantees direct physical beaconing, AGIS title recertification & corporate buyback covenants'
    ]
  },
  {
    id: 'hr-director',
    name: 'Farida Abbas',
    role: 'Head of Human Resources & Corporate Governance',
    credentials: 'B.Sc, CIPM Registered, SPHR, Corporate Ethics Specialist',
    bio: 'Farida Abbas directs human capital, operational ethics, and client fiduciary governance across Musko Properties’ Abuja Central Office and Gwagwalada field command. She oversees our strict adherence to the Economic and Financial Crimes Commission (EFCC) SCUML regulations, ensuring that all client engagements, allocation agreements, and financial transactions adhere to the highest standards of corporate transparency and anti-fraud protocols.',
    quote: 'Our clients—especially those working tirelessly in the UK, North America, the Middle East, and across Nigeria—entrust us with their life savings. Our duty is to protect that trust with spotless integrity and prompt, transparent communication.',
    image: '/team/farida-abbas-hr.jpg',
    email: 'farida.abbas@muskoproperties.ng',
    phone: '+234 802 333 4455',
    linkedin: 'https://linkedin.com',
    highlights: [
      'Oversees strict compliance with EFCC SCUML and CAC corporate governance',
      'Established the 24/7 Diaspora Client Support Desk & WhatsApp Hotline',
      'Maintains a 98% client satisfaction and verified title handover rating'
    ]
  },
  {
    id: 'marketing-director',
    name: 'Labari Monday',
    role: 'Head of Marketing & Client Acquisition',
    credentials: 'B.Sc Marketing, NIMN Fellow, Real Estate Growth Strategist',
    bio: 'Labari Monday spearheads marketing, client acquisition, and property advisory at Musko Properties. He has transformed how land is presented to Nigerian buyers by eliminating deceptive industry tactics and replacing them with transparent video site tours, clear cadastral boundary briefings, and straightforward payment spreads. Labari coordinates regular physical inspection convoys from Abuja City Gate and Nnamdi Azikiwe Airport directly to our Gwagwalada enclaves.',
    quote: 'Marketing in real estate shouldn’t be about hype or empty promises. It’s about presenting real land, verified documents, and showing the client exactly where their beacons stand before they spend a single Naira.',
    image: '/team/labari-monday-marketing.jpg',
    email: 'labari.monday@muskoproperties.ng',
    phone: '+234 809 555 6789',
    linkedin: 'https://linkedin.com',
    highlights: [
      'Organized over 250 successful physical site inspection tours in Gwagwalada',
      'Architect of Musko’s zero-hidden-fees policy (No development levies, No bush entry fees)',
      'Leads investor onboarding across public sector cooperatives, corporate syndicates, and diaspora groups'
    ]
  },
  {
    id: 'assistant-marketing',
    name: 'Mary Shammah Ayuba',
    role: 'Assistant Head of Marketing & Client Relations',
    credentials: 'B.A., CIM Certified, Property Advisory Specialist',
    bio: 'Mary Shammah Ayuba coordinates client onboarding, property consultations, and diaspora document processing at Musko Properties. She ensures that every buyer receives verified cadastral charts, transparent payment schedules, and tracked physical delivery of their original title deeds upon allocation.',
    quote: 'Integrity is our biggest marketing asset. When clients see our physical beacons planted on ground in Gwagwalada and hold their stamped AGIS papers, the trust speaks for itself.',
    image: '/team/mary-shammah-marketing.jpg',
    email: 'mary.ayuba@muskoproperties.ng',
    phone: '+234 814 888 9922',
    linkedin: 'https://linkedin.com',
    highlights: [
      'Facilitated over 350 successful plot inspections and physical beacon handovers',
      'Oversees client documentation, deed signing, and post-allocation follow-up',
      'Leads customer advisory for young professionals, cooperatives, and families'
    ]
  }
];

export const TRUST_ASSURANCES = [
  {
    icon: 'ShieldCheck',
    badge: '100% Title Indemnity',
    title: 'AGIS & FCDA Government Title Verification',
    description: 'Every layout is legally charted against the Abuja Masterplan and registered with the Abuja Geographic Information Systems (AGIS) and Gwagwalada Area Council. Zero encroachment on green belts, government acquisitions, or public utilities.'
  },
  {
    icon: 'CheckCircle2',
    badge: 'Zero Native Disputes',
    title: 'Zero Omo-Onile & Native Community Clearance',
    description: 'We execute full compensation, traditional elder consents, and legal court documentation before any parcel is surveyed. You will never encounter village youth, customary disputes, or harassment on your land.'
  },
  {
    icon: 'MapPin',
    badge: 'Instant Ground Possession',
    title: 'Immediate Physical Concrete Beacon Allocation',
    description: 'We do not allocate on paper alone. When your payment milestone is reached, concrete survey beacons marked with SURCON-registered cadastral coordinates are planted physically in the ground in your presence.'
  },
  {
    icon: 'Building2',
    badge: 'Institutional Safety',
    title: 'Regulated Corporate Accounts & SCUML Compliance',
    description: 'Musko Properties is CAC registered (RC-1849204) and fully certified by the EFCC Special Control Unit Against Money Laundering (SCUML). All funds are deposited into verified corporate bank accounts—never personal accounts.'
  },
  {
    icon: 'Globe',
    badge: 'Diaspora Protection',
    title: 'Protected Diaspora Proxy & Secure DHL Delivery',
    description: 'Nigerians in the UK, US, Canada, UAE, and Europe can appoint trusted proxies or verify directly via video call, receiving tracked DHL/FedEx worldwide delivery of original stamped deeds and survey charts.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Engr. Farouk & Amina Sanusi',
    location: 'Manchester, UK (Diaspora Investors)',
    role: 'Petroleum Geoscientist & Senior NHS Pharmacist',
    propertyAcquired: '2 Commercial Plots + 1 Acre Land Banking (Gwagwalada)',
    review: 'Buying land in Abuja while living abroad used to be a terrifying gamble. Musko Properties completely changed that. From their physical site inspection photos over the UniAbuja corridor in Gwagwalada to verifying the AGIS recertification, everything was transparent. We received our original registered title documents in Manchester via DHL within 3 weeks of completion.',
    rating: 5,
    verifiedTitleHandover: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-2',
    clientName: 'Dr. (Mrs.) Folashade Adelekan',
    location: 'Gwagwalada / Central Business District, Abuja',
    role: 'Chief Medical Consultant, UATH Gwagwalada',
    propertyAcquired: 'Meridian Royal Enclave (2 Plots, 1,000 sqm)',
    review: 'As a consultant at the University of Abuja Teaching Hospital in Gwagwalada, I needed verified land close to the medical center without any native community or omo-onile issues. CEO Mustapha and his team delivered beyond expectations. Physical allocation took place immediately, and my concrete beacons were planted and recorded with the Area Council in my presence.',
    rating: 5,
    verifiedTitleHandover: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-3',
    clientName: 'Alhaji Bashir Mohammed',
    location: 'Kano & Houston, Texas',
    role: 'Managing Director, Horizon Freight Logistics',
    propertyAcquired: 'Apex Sovereign Agro-Logistics Belt (5 Acres, Dobi Road)',
    review: 'What impressed me most was Farida Abbas and Labari Monday’s client service. Every inquiry was answered promptly on WhatsApp, and our physical site inspection was arranged with executive pickup from Nnamdi Azikiwe Airport straight to Gwagwalada with full survey printouts. The land banking appreciation has already surpassed 40% in 15 months.',
    rating: 5,
    verifiedTitleHandover: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  }
];

export const TRUST_METRICS = [
  { value: '4,200+', label: 'Plots Allocated', sub: 'With physical beacons & AGIS verified titles' },
  { value: '100%', label: 'Encumbrance Free', sub: 'Zero litigation or native disputes' },
  { value: '1,850+', label: 'Happy Land Owners', sub: 'Families & investors across Abuja & Diaspora' },
  { value: '₦ 45B+', label: 'Land Assets Managed', sub: 'Delivering average 42% annual capital appreciation' }
];

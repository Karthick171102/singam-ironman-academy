/**
 * SITE CONFIGURATION — bilingual (English / தமிழ்)
 * -------------------------------------------------
 * Everything that still needs Siva Balan's confirmation is marked `TODO`.
 * Fill these in, and the whole site updates — no component edits needed.
 */

export type Lang = "en" | "ta";

export type ProgrammeIcon =
  | "footprints"
  | "timer"
  | "dumbbell"
  | "heart-pulse"
  | "stretch"
  | "users";

export type CredentialIcon = "founder" | "creator" | "graduate";

/** Shared contact values. TODO: confirm with Siva Balan before launch. */
export const contact = {
  /** TODO: official number, e.g. "+91 98765 43210" */
  phone: null as string | null,
  /** TODO: digits only, international format, e.g. "919876543210" */
  whatsapp: null as string | null,
  /** TODO: official email */
  email: null as string | null,
  /** TODO: Google Maps share link */
  mapsUrl: null as string | null,
  /** Justdial lists 6:00 AM – 10:00 PM. TODO: verify batch timings. */
  hoursVerified: false,
};

export const socials = [
  {
    label: "Instagram",
    handle: "@sivabalan_singam",
    followers: "169K",
    href: "https://www.instagram.com/sivabalan_singam/",
    icon: "instagram" as const,
  },
  {
    label: "YouTube",
    handle: "@SivabalanSingam",
    followers: "87.7K",
    href: "https://www.youtube.com/@SivabalanSingam",
    icon: "youtube" as const,
  },
  {
    label: "Threads",
    handle: "@sivabalan_singam",
    followers: "6.6K",
    href: "https://www.threads.net/@sivabalan_singam",
    icon: "threads" as const,
  },
];

const en = {
  meta: {
    brandTop: "SINGAM",
    brandSub: "IRONMAN ACADEMY",
    langName: "English",
    otherLangName: "தமிழ்",
    switchLang: "Switch to Tamil",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    backToTop: "Back to top",
    messageUs: "Message us on",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Marathon Village", href: "#village" },
    { label: "Programmes", href: "#programmes" },
    { label: "Ground Updates", href: "#updates" },
    { label: "FAQ", href: "#faq" },
  ],
  joinCta: "Join the Academy",
  stats: [
    { value: "2025", label: "Founded in Sivagangai", note: "September 2025" },
    { value: "400 m", label: "Running track", note: "In development" },
    { value: "169K", label: "Instagram community", note: "Siva Balan" },
    { value: "87.7K", label: "YouTube subscribers", note: "Siva Balan" },
  ],
  hero: {
    badge: "Founded September 2025",
    location: "Sivagangai, Tamil Nadu",
    rail: "Sivagangai · Tamil Nadu · India",
    line1: "Train strong.",
    line2: "Run far.",
    line3Pre: "Become a",
    line3Accent: "Singam",
    bodyBefore: "Sivagangai's endurance and fitness academy, founded by runner ",
    bodyName: "Siva Balan",
    bodyAfter:
      ". A place to build strength, discipline and a lifelong running habit — and to help build a marathon village with a 400 m track.",
    ctaJoin: "Join the Academy",
    ctaWatch: "Watch our journey",
    ctaVisit: "Visit the ground",
    stamp: "MARATHON VILLAGE · SIVAGANGAI · 400 M TRACK ·",
  },
  marquee: [
    "Marathon Village",
    "400 m Track · In Development",
    "Sivagangai",
    "Endurance",
    "Community Runs",
    "Founded 2025",
  ],
  about: {
    label: "The Founder",
    title: "Built by a runner, for the runners of Sivagangai.",
    quote:
      "I started Singam Ironman Academy because I believe every runner deserves a place to train, learn and grow — from beginners taking their first steps to athletes preparing for marathons.",
    body: [
      "Siva Balan is a Sivagangai-based runner and endurance-sports creator. His work documents the honest side of the sport: marathon blocks, long runs, cadence, shoes, race results and the slow, unglamorous work of building a ground from nothing.",
      "He founded the academy in September 2025 with a larger ambition — a marathon village for Tamil Nadu, anchored by a 400 m running track, where runners of every level can train consistently and belong to something local.",
    ],
    bodyStrong: "marathon village for Tamil Nadu",
    cardRole: "Founder · Runner · Creator",
    cardName: "Siva Balan",
    cardBlurb:
      "Building a running home for Sivagangai — one ground, one long run and one runner at a time.",
    cardChip: "Marathon Village",
    cardLocation: "சிங்கம் · Sivagangai",
    cardFooter: "Singam Ironman Academy",
    cardEst: "Est. 2025",
    caption:
      "Siva Balan — runner, creator and founder of Singam Ironman Academy.",
    follow: "Follow",
    credentials: [
      {
        icon: "founder" as CredentialIcon,
        title: "Founder & Owner",
        detail: "Singam Ironman Academy · since September 2025",
      },
      {
        icon: "creator" as CredentialIcon,
        title: "Endurance creator",
        detail: "169K on Instagram · 87.7K on YouTube · 6.6K on Threads",
      },
      {
        icon: "graduate" as CredentialIcon,
        title: "Engineering graduate",
        detail: "PSNA College of Engineering and Technology",
      },
    ],
  },
  village: {
    label: "The Vision",
    titleTop: "The marathon",
    titleAccent: "village.",
    intro:
      "More than a training ground. A space being built for runners to train consistently, connect with a community, and chase endurance goals in Sivagangai.",
    status: "Under development",
    trackLabel: "Track layout · concept",
    notToScale: "Not to scale",
    centerSub: "Running track",
    specs: [
      { label: "Location", value: "Sivagangai, TN" },
      { label: "Status", value: "In development" },
      { label: "Vision", value: "Marathon village" },
    ],
    features: [
      {
        n: "01",
        title: "A 400 m running track",
        status: "In development",
        body: "A proper measured loop at the centre of the village, so sessions are about effort and repeatability — not guesswork on open roads.",
      },
      {
        n: "02",
        title: "Ground development, in public",
        status: "Ongoing",
        body: "Every stage is documented on Siva Balan's Instagram. Real progress, shared as it happens, instead of a single polished promise.",
      },
      {
        n: "03",
        title: "Room for the community",
        status: "Growing",
        body: "Space for group runs, fitness sessions and academy events — the reason a ground becomes a running community.",
      },
      {
        n: "04",
        title: "An endurance ecosystem",
        status: "Long-term vision",
        body: "Coaching, recovery, race preparation and a culture of showing up. A home base for Tamil Nadu's next generation of endurance athletes.",
      },
    ],
    ctaUpdates: "See ground updates",
    ctaVisit: "Book a visit",
    quote:
      "A marathon village is not built in a week. It is built by a community that keeps showing up.",
    tagEst: "Est. 2025",
  },
  programmes: {
    label: "Programmes",
    title: "Find your starting line.",
    intro:
      "Running, strength, recovery and community. Pick the goal that fits where you are today — the academy will help you build from there.",
    featured: "Flagship",
    enquire: "Enquire about this",
    note: "Batch timings, coach allocation and pricing are confirmed directly with the academy.",
    askLink: "Ask for current details",
    items: [
      {
        id: "beginner",
        title: "Beginner Running",
        icon: "footprints" as ProgrammeIcon,
        summary:
          "Start where you are. Learn safe running form, build consistency, and progress from walking and jogging to regular running.",
        points: ["Run/walk progression", "Form & cadence basics", "Confidence on the ground"],
      },
      {
        id: "marathon",
        title: "Marathon Training",
        icon: "timer" as ProgrammeIcon,
        summary:
          "Structured preparation for 10K, half-marathon and full-marathon goals, built on the same training Siva Balan shares publicly.",
        points: ["10K → full marathon", "Weekly long runs", "Race-day preparation"],
        featured: true,
      },
      {
        id: "strength",
        title: "Strength & Conditioning",
        icon: "dumbbell" as ProgrammeIcon,
        summary:
          "Build the strength, stability and mobility that keep runners durable through a full training block.",
        points: ["Runner-specific strength", "Mobility work", "Injury-aware training"],
      },
      {
        id: "cardio",
        title: "Cardio & General Fitness",
        icon: "heart-pulse" as ProgrammeIcon,
        summary:
          "Improve stamina, heart health and everyday fitness with coached cardio sessions for all levels.",
        points: ["Stamina building", "Weight-loss friendly", "All fitness levels"],
      },
      {
        id: "yoga",
        title: "Yoga & Recovery",
        icon: "stretch" as ProgrammeIcon,
        summary:
          "Improve flexibility, mobility and recovery so you can train consistently instead of surviving from one sore week to the next.",
        points: ["Flexibility & mobility", "Recovery sessions", "Breathing & focus"],
      },
      {
        id: "community",
        title: "Community Runs",
        icon: "users" as ProgrammeIcon,
        summary:
          "Join group runs, academy events and long-run mornings with people chasing the same goals in Sivagangai.",
        points: ["Group long runs", "Academy events", "A local running tribe"],
      },
    ],
  },
  why: {
    label: "Why join",
    titleLine1: "Built for the",
    titleLine2: "long run",
    body: "Anyone can sell you a workout. The academy is built around something longer: a place, a coach and a community you can keep coming back to.",
    ctaJoin: "Join the academy",
    ctaAsk: "Ask a question",
    foundedValue: "2025",
    foundedLabel: "Founded in Sivagangai by Siva Balan",
    unsure: "Not sure where to start?",
    unsureBody:
      "Tell us your goal and we'll suggest a programme and a first session.",
    startHere: "Start here",
    items: [
      {
        title: "A running-first environment",
        body: "Train on ground built around runners and endurance athletes — not a general gym floor with a treadmill in the corner.",
      },
      {
        title: "Learn from a founder who runs",
        body: "Siva Balan is still training, racing and sharing the work publicly. The coaching comes from lived practice, not theory.",
      },
      {
        title: "A local endurance community",
        body: "Group runs and long-run mornings with people from Sivagangai who are chasing the same goals you are.",
      },
      {
        title: "A path from beginner to finisher",
        body: "Start with your first jog and keep going — through 5K, 10K, half marathon and, if you want it, the full 42.2.",
      },
      {
        title: "A growing marathon village",
        body: "Join while the ground is being built, and grow with a facility designed for the long term in Tamil Nadu.",
      },
      {
        title: "Structure, not guesswork",
        body: "Programmes, sessions and recovery are organised around a goal — so your training has direction and a timeline.",
      },
    ],
  },
  gallery: {
    label: "Ground updates",
    title: "The ground is changing.",
    intro:
      "A running timeline of the marathon village — the first steps, the ground work, and the days that followed. Shared as it happens, not after the fact.",
    follow: "Follow the updates",
    disclaimer:
      "Dates reflect public posts by Siva Balan. Photos are illustrative placeholders until the academy's own ground photography is supplied.",
    ctaTitle: "More ground updates",
    ctaBody: "Follow the marathon village as it is built, in real time.",
    items: [
      {
        date: "August 2025",
        title: "First run on our ground",
        body: "Before the track, before the buildings — the first steps on the land that would become the academy's home.",
        href: "https://www.instagram.com/sivabalan_singam/",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
        alt: "Runner training outdoors at first light",
      },
      {
        date: "September 2025",
        title: "Singam Ironman Academy is founded",
        body: "Siva Balan launches the academy with a clear mission: a dedicated place for runners and endurance athletes in Sivagangai.",
        href: "https://www.instagram.com/sivabalan_singam/",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
        alt: "Athlete running on a road at sunrise",
      },
      {
        date: "January 2026",
        title: "Ground work update",
        body: "Development work begins in earnest — shaping the ground that will host group runs, fitness sessions and academy events.",
        href: "https://www.instagram.com/sivabalan_singam/reel/DTpU-VcjZ6o/",
        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
        alt: "Aerial view of running track lanes",
      },
      {
        date: "March 2026",
        title: "Marathon village ground update",
        body: "The vision gets clearer: a marathon village for Sivagangai, with a 400 m running track at its centre.",
        href: "https://www.instagram.com/sivabalan_singam/reel/DWeHKFtjwF_/",
        image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
        alt: "Running track under an open sky",
      },
      {
        date: "April 2026",
        title: "Day 6 on our marathon village",
        body: "A running account of building the ground, day by day — the work behind the vision, shared with the community.",
        href: "https://www.instagram.com/sivabalan_singam/reel/DKJeJF-vKJw/",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
        alt: "Runner on a quiet road in warm evening light",
      },
    ],
  },
  social: {
    label: "Follow the journey",
    titleLine1: "Training out",
    titleLine2: "loud",
    body: "Long runs, marathon blocks, gear, race results and the ground updates behind the marathon village — documented openly for a community of over 250,000 runners and fitness enthusiasts.",
    subscribe: "Subscribe on YouTube",
    instagram: "Instagram",
    watch: "Watch",
    videoTitle: "Night miles through Sivagangai",
    youtube: "YouTube",
  },
  faq: {
    label: "Questions",
    titleLine1: "Good to",
    titleLine2: "know",
    body: "Straight answers about joining, timings, the track and what to expect on your first visit.",
    cta: "Ask your question",
    items: [
      {
        q: "I have never run before. Can I still join?",
        a: "Yes. The beginner programme is designed for people starting from walking and jogging. You do not need a fitness base, a race history or expensive gear to begin — just consistency and a willingness to show up.",
      },
      {
        q: "What are the academy timings?",
        a: "The public listing suggests the ground is open daily from 6:00 AM to 10:00 PM. Exact batch timings are confirmed with the academy before your first visit.",
      },
      {
        q: "Is the 400 m track ready?",
        a: "The 400 m running track and marathon village are under development. Progress is documented publicly on Siva Balan's Instagram, and this page is updated as the ground develops. Check the latest ground update before travelling.",
      },
      {
        q: "How much do programmes cost?",
        a: "Pricing and membership options are confirmed directly with the academy. Fees depend on the programme and batch you choose, so reach out with your goal and preferred timing to get current details.",
      },
      {
        q: "Do you coach for half and full marathons?",
        a: "Yes — marathon preparation is central to the academy, alongside 10K and general fitness goals. Training is structured around your current base, target race and available days per week.",
      },
      {
        q: "Can I visit the ground before joining?",
        a: "Absolutely. A ground visit is the best way to see the facility, meet the community and understand the programmes. Book a visit through the contact form and the academy will confirm a time.",
      },
      {
        q: "Is this an official Ironman triathlon centre?",
        a: "No. \"Ironman\" is part of the academy's brand name and reflects an endurance mindset. Singam Ironman Academy is not presented as an Ironman-certified or Ironman-affiliated training centre.",
      },
    ],
  },
  contact: {
    label: "Join the academy",
    titleLine1: "Start your",
    titleLine2: "running",
    titleAccent: "journey.",
    quote:
      "Or just come and see the ground. The first step is always the hardest — the rest is showing up.",
    address: "Sivagangai, Tamil Nadu, India",
    hours: "Open daily · 6:00 AM – 10:00 PM",
    groundLabel: "The ground",
    mapsPending: "Google Maps pin to be confirmed",
    mapsOpen: "Open in Google Maps",
    timingsLabel: "Timings",
    timingsNote: "Listed publicly — batch timings to be confirmed.",
    timingsVerifiedNote: "Batch timings shared on enquiry.",
    talkLabel: "Talk to us",
    fastestReply: "Instagram DM — fastest reply",
    pendingNote:
      "Official phone, WhatsApp and maps pin are added once confirmed by the academy.",
    goals: [
      "Beginner fitness",
      "Weight loss",
      "5K",
      "10K",
      "Half marathon",
      "Full marathon",
      "General strength",
      "Yoga & recovery",
    ],
    form: {
      title: "Join the academy",
      intro:
        "Tell us about your goal. We'll come back with the right programme and timing.",
      est: "Est. 2025",
      name: "Your name",
      phone: "Phone / WhatsApp",
      goal: "Your goal",
      timing: "Preferred timing",
      message: "Anything else?",
      namePlaceholder: "e.g. Karthik R",
      phonePlaceholder: "+91 98765 43210",
      goalPlaceholder: "Select a goal",
      timingPlaceholder: "Any time",
      messagePlaceholder: "Current fitness, race date, injuries, questions…",
      timingOptions: [
        "Early morning (5–7 AM)",
        "Morning (7–9 AM)",
        "Evening (5–7 PM)",
        "Evening (7–9 PM)",
        "Weekends only",
        "Flexible",
      ],
      privacy:
        "Your details are only used to respond to this enquiry. Nothing is shared publicly.",
      submit: "Send enquiry",
      successThanks: "Thanks,",
      successBody:
        "Your enquiry is ready to send. Choose a channel below to reach the academy directly — or copy the details and send them yourself.",
      summaryGoal: "Goal",
      summaryTiming: "Timing",
      summaryPhone: "Phone",
      summaryName: "Name",
      dm: "DM on Instagram",
      whatsapp: "Send on WhatsApp",
      copy: "Copy details",
      copied: "Copied",
      newEnquiry: "New enquiry",
      demoNote:
        "Demo form: no data is submitted or stored. Connect this form to WhatsApp, email or a form service before launch.",
      flexible: "Flexible",
      errors: {
        name: "Please enter your name.",
        phone: "Enter a valid phone or WhatsApp number.",
        goal: "Pick a goal so we can suggest a programme.",
      },
    },
  },
  footer: {
    blurb:
      "Sivagangai's endurance and fitness academy. Built for the body, the mind and the long run — one runner at a time.",
    explore: "Explore",
    academy: "Academy",
    visit: "Visit",
    links: {
      programmes: "Running programmes",
      marathon: "Marathon training",
      track: "400 m track",
      visit: "Book a ground visit",
    },
    preferences: "Language & appearance",
    enquire: "Enquire on Instagram",
    copyright: (year: number) =>
      `© ${year} Singam Ironman Academy · Sivagangai, Tamil Nadu. All rights reserved.`,
    disclaimer:
      "Singam Ironman Academy is an independent running and fitness academy. \"Ironman\" is used as part of the academy's brand name and does not imply affiliation with, or certification by, the Ironman® triathlon organisation. Track and facility details marked \"planned\" or \"in development\" are not yet complete.",
  },
};

const ta: typeof en = {
  meta: {
    brandTop: "சிங்கம்",
    brandSub: "அயன்மேன் அகாடமி",
    langName: "தமிழ்",
    otherLangName: "English",
    switchLang: "English-க்கு மாறு",
    themeLight: "ஒளி தீமுக்கு மாறு",
    themeDark: "இருள் தீமுக்கு மாறு",
    language: "மொழி",
    theme: "தீம்",
    light: "ஒளி",
    dark: "இருள்",
    menu: "மெனு",
    openMenu: "மெனுவைத் திற",
    closeMenu: "மெனுவை மூடு",
    skip: "உள்ளடக்கத்திற்குச் செல்",
    backToTop: "மேலே செல்",
    messageUs: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
  },
  nav: [
    { label: "எங்களைப் பற்றி", href: "#about" },
    { label: "மாரத்தான் கிராமம்", href: "#village" },
    { label: "பயிற்சித் திட்டங்கள்", href: "#programmes" },
    { label: "மைதான புதுப்பிப்புகள்", href: "#updates" },
    { label: "கேள்விகள்", href: "#faq" },
  ],
  joinCta: "அகாடமியில் சேருங்கள்",
  stats: [
    { value: "2025", label: "சிவகங்கையில் தொடக்கம்", note: "செப்டம்பர் 2025" },
    { value: "400 m", label: "ஓட்டப் பாதை", note: "வளர்ச்சியில்" },
    { value: "169K", label: "இன்ஸ்டாகிராம் சமூகம்", note: "சிவா பாலன்" },
    { value: "87.7K", label: "யூடியூப் சந்தாதாரர்கள்", note: "சிவா பாலன்" },
  ],
  hero: {
    badge: "செப்டம்பர் 2025-ல் தொடங்கியது",
    location: "சிவகங்கை, தமிழ்நாடு",
    rail: "சிவகங்கை · தமிழ்நாடு · இந்தியா",
    line1: "வலிமையாய் பயிற்சி.",
    line2: "வெகுதூரம் ஓடு.",
    line3Pre: "சிங்கமாய்",
    line3Accent: "மாறு",
    bodyBefore: "சிவகங்கையின் சகிப்புத்திறன் மற்றும் உடற்தகுதி அகாடமி, ஓட்டப்பந்தய வீரர் ",
    bodyName: "சிவா பாலன்",
    bodyAfter:
      " அவர்களால் தொடங்கப்பட்டது. வலிமை, ஒழுக்கம் மற்றும் வாழ்நாள் ஓட்டப் பழக்கத்தை உருவாக்கும் இடம் — 400 மீ ஓட்டப் பாதையுடன் மாரத்தான் கிராமத்தை கட்டியெழுப்பவும் உதவுகிறது.",
    ctaJoin: "அகாடமியில் சேருங்கள்",
    ctaWatch: "எங்கள் பயணத்தைப் பாருங்கள்",
    ctaVisit: "மைதானத்தைப் பார்வையிடுங்கள்",
    stamp: "மாரத்தான் கிராமம் · சிவகங்கை · 400 மீ பாதை ·",
  },
  marquee: [
    "மாரத்தான் கிராமம்",
    "400 மீ பாதை · வளர்ச்சியில்",
    "சிவகங்கை",
    "சகிப்புத்திறன்",
    "சமூக ஓட்டங்கள்",
    "2025 தொடக்கம்",
  ],
  about: {
    label: "நிறுவனர்",
    title: "ஓடுபவரால், சிவகங்கையின் ஓட்டப்பந்தய வீரர்களுக்காக கட்டப்பட்டது.",
    quote:
      "ஒவ்வொரு ஓட்டப்பந்தய வீரருக்கும் பயிற்சி பெறவும், கற்றுக்கொள்ளவும், வளரவும் ஒரு இடம் வேண்டும் என்று நான் நம்புவதால் சிங்கம் அயன்மேன் அகாடமியைத் தொடங்கினேன் — முதல் அடி எடுத்து வைக்கும் தொடக்கநிலையாளர்கள் முதல் மாரத்தானுக்குத் தயாராகும் வீரர்கள் வரை.",
    body: [
      "சிவா பாலன் சிவகங்கையைச் சேர்ந்த ஓட்டப்பந்தய வீரரும், சகிப்புத்திறன் விளையாட்டு உள்ளடக்க உருவாக்குநரும் ஆவார். மாரத்தான் பயிற்சி, நீண்ட ஓட்டங்கள், கேடன்ஸ், காலணிகள், போட்டி முடிவுகள் மற்றும் புதிதாக ஒரு மைதானத்தை உருவாக்கும் கடினமான வேலை — இவற்றை அவர் வெளிப்படையாகப் பதிவு செய்கிறார்.",
      "2025 செப்டம்பரில் அவர் அகாடமியைத் தொடங்கினார் — தமிழ்நாட்டுக்கான மாரத்தான் கிராமம் என்ற பெரிய கனவுடன். 400 மீ ஓட்டப் பாதையை மையமாகக் கொண்டு, எல்லா நிலையிலும் உள்ள ஓட்டப்பந்தய வீரர்கள் தொடர்ந்து பயிற்சி பெறவும், உள்ளூர் சமூகத்தின் ஒரு பகுதியாக இருக்கவும் இது உருவாகிறது.",
    ],
    bodyStrong: "தமிழ்நாட்டுக்கான மாரத்தான் கிராமம்",
    cardRole: "நிறுவனர் · ஓட்டப்பந்தய வீரர் · உருவாக்குநர்",
    cardName: "சிவா பாலன்",
    cardBlurb:
      "சிவகங்கைக்கு ஒரு ஓட்டப் புகலிடம் — ஒரு மைதானம், ஒரு நீண்ட ஓட்டம், ஒரு ஓட்டப்பந்தய வீரர் என்று படிப்படியாக.",
    cardChip: "மாரத்தான் கிராமம்",
    cardLocation: "சிங்கம் · சிவகங்கை",
    cardFooter: "சிங்கம் அயன்மேன் அகாடமி",
    cardEst: "2025 தொடக்கம்",
    caption:
      "சிவா பாலன் — ஓட்டப்பந்தய வீரர், உருவாக்குநர் மற்றும் சிங்கம் அயன்மேன் அகாடமியின் நிறுவனர்.",
    follow: "பின்தொடருங்கள்",
    credentials: [
      {
        icon: "founder" as CredentialIcon,
        title: "நிறுவனர் & உரிமையாளர்",
        detail: "சிங்கம் அயன்மேன் அகாடமி · செப்டம்பர் 2025 முதல்",
      },
      {
        icon: "creator" as CredentialIcon,
        title: "சகிப்புத்திறன் உள்ளடக்க உருவாக்குநர்",
        detail: "இன்ஸ்டாகிராமில் 169K · யூடியூபில் 87.7K · த்ரெட்ஸில் 6.6K",
      },
      {
        icon: "graduate" as CredentialIcon,
        title: "பொறியியல் பட்டதாரி",
        detail: "பிஎஸ்என்ஏ பொறியியல் மற்றும் தொழில்நுட்பக் கல்லூரி",
      },
    ],
  },
  village: {
    label: "தொலைநோக்கு",
    titleTop: "மாரத்தான்",
    titleAccent: "கிராமம்.",
    intro:
      "வெறும் பயிற்சி மைதானம் அல்ல. ஓட்டப்பந்தய வீரர்கள் தொடர்ந்து பயிற்சி பெறவும், சமூகத்துடன் இணையவும், சிவகங்கையில் தங்கள் சகிப்புத்திறன் இலக்குகளை நோக்கி செல்லவும் கட்டப்படும் இடம்.",
    status: "வளர்ச்சியில்",
    trackLabel: "பாதை அமைப்பு · வரைபடம்",
    notToScale: "அளவில் இல்லை",
    centerSub: "ஓட்டப் பாதை",
    specs: [
      { label: "இடம்", value: "சிவகங்கை, தமிழ்நாடு" },
      { label: "நிலை", value: "வளர்ச்சியில்" },
      { label: "நோக்கம்", value: "மாரத்தான் கிராமம்" },
    ],
    features: [
      {
        n: "01",
        title: "400 மீ ஓட்டப் பாதை",
        status: "வளர்ச்சியில்",
        body: "கிராமத்தின் மையத்தில் அளவிடப்பட்ட சுற்றுப்பாதை — பயிற்சி முயற்சியையும் மீள்செயலையும் பொருட்படுத்தும், திறந்த சாலையில் ஊகிக்க வேண்டியதில்லை.",
      },
      {
        n: "02",
        title: "மைதான வளர்ச்சி, வெளிப்படையாக",
        status: "தொடர்கிறது",
        body: "ஒவ்வொரு கட்டமும் சிவா பாலனின் இன்ஸ்டாகிராமில் பதிவாகிறது. ஒரே மெருகூட்டப்பட்ட வாக்குறுதிக்குப் பதிலாக, நடக்கும் முன்னேற்றம் நேரடியாகப் பகிரப்படுகிறது.",
      },
      {
        n: "03",
        title: "சமூகத்திற்கான இடம்",
        status: "வளர்ந்து வருகிறது",
        body: "குழு ஓட்டங்கள், உடற்பயிற்சி அமர்வுகள் மற்றும் அகாடமி நிகழ்வுகளுக்கான இடம் — மைதானம் ஒரு ஓட்டச் சமூகமாக மாறுவதற்கான காரணம்.",
      },
      {
        n: "04",
        title: "சகிப்புத்திறன் சூழல்",
        status: "நீண்டகால நோக்கம்",
        body: "பயிற்சி, மீட்பு, போட்டித் தயாரிப்பு மற்றும் தொடர்ந்து வரும் கலாச்சாரம். தமிழ்நாட்டின் அடுத்த தலைமுறை சகிப்புத்திறன் வீரர்களுக்கான இல்லம்.",
      },
    ],
    ctaUpdates: "மைதான புதுப்பிப்புகள்",
    ctaVisit: "பார்வையிட முன்பதிவு",
    quote:
      "மாரத்தான் கிராமம் ஒரு வாரத்தில் கட்டப்படுவதில்லை. தொடர்ந்து வரும் சமூகத்தால் கட்டப்படுகிறது.",
    tagEst: "2025 தொடக்கம்",
  },
  programmes: {
    label: "பயிற்சித் திட்டங்கள்",
    title: "உங்கள் தொடக்கக் கோட்டைக் கண்டறியுங்கள்.",
    intro:
      "ஓட்டம், வலிமை, மீட்பு மற்றும் சமூகம். இன்று நீங்கள் இருக்கும் நிலைக்கு ஏற்ற இலக்கைத் தேர்ந்தெடுங்கள் — அங்கிருந்து அகாடமி உங்களுக்கு உதவும்.",
    featured: "முதன்மை",
    enquire: "இதைப் பற்றி விசாரிக்க",
    note: "அமர்வு நேரங்கள், பயிற்சியாளர் ஒதுக்கீடு மற்றும் கட்டணம் அகாடமியுடன் நேரடியாக உறுதிப்படுத்தப்படும்.",
    askLink: "தற்போதைய விவரங்களைக் கேளுங்கள்",
    items: [
      {
        id: "beginner",
        title: "தொடக்க ஓட்டம்",
        icon: "footprints" as ProgrammeIcon,
        summary:
          "நீங்கள் இருக்கும் இடத்திலிருந்து தொடங்குங்கள். பாதுகாப்பான ஓட்ட நுட்பத்தைக் கற்று, தொடர்ச்சியை உருவாக்கி, நடப்பதிலிருந்து ஜாகிங் வழியாக வழக்கமான ஓட்டத்திற்கு முன்னேறுங்கள்.",
        points: [
          "நடை/ஓட்ட முன்னேற்றம்",
          "நுட்பம் & கேடன்ஸ் அடிப்படை",
          "மைதானத்தில் நம்பிக்கை",
        ],
      },
      {
        id: "marathon",
        title: "மாரத்தான் பயிற்சி",
        icon: "timer" as ProgrammeIcon,
        summary:
          "10K, அரை மாரத்தான் மற்றும் முழு மாரத்தான் இலக்குகளுக்கான ஒழுங்கமைந்த தயாரிப்பு — சிவா பாலன் பொதுவாகப் பகிரும் அதே பயிற்சியின் அடிப்படையில்.",
        points: ["10K → முழு மாரத்தான்", "வாராந்திர நீண்ட ஓட்டங்கள்", "போட்டி நாள் தயாரிப்பு"],
        featured: true,
      },
      {
        id: "strength",
        title: "வலிமை & உடற்தகுதி",
        icon: "dumbbell" as ProgrammeIcon,
        summary:
          "முழு பயிற்சிக் காலத்திலும் ஓட்டப்பந்தய வீரர்களை வலுவாக வைத்திருக்கும் வலிமை, நிலைத்தன்மை மற்றும் இயக்கத்திறன்.",
        points: ["ஓட்டத்திற்கேற்ற வலிமை", "இயக்கத்திறன் பயிற்சி", "காயத்தைக் கவனிக்கும் பயிற்சி"],
      },
      {
        id: "cardio",
        title: "கார்டியோ & பொது உடற்தகுதி",
        icon: "heart-pulse" as ProgrammeIcon,
        summary:
          "அனைத்து நிலைகளுக்கும் பயிற்சியாளருடன் இதய ஆரோக்கியம், சகிப்புத்திறன் மற்றும் அன்றாட உடற்தகுதியை மேம்படுத்துங்கள்.",
        points: ["சகிப்புத்திறன் வளர்ப்பு", "எடை குறைப்புக்கு ஏற்றது", "அனைத்து நிலைகளும்"],
      },
      {
        id: "yoga",
        title: "யோகா & மீட்பு",
        icon: "stretch" as ProgrammeIcon,
        summary:
          "நெகிழ்வு, இயக்கத்திறன் மற்றும் மீட்பை மேம்படுத்தி, ஒவ்வொரு வாரமும் வலியுடன் போராடாமல் தொடர்ந்து பயிற்சி பெறுங்கள்.",
        points: ["நெகிழ்வு & இயக்கத்திறன்", "மீட்பு அமர்வுகள்", "மூச்சு & கவனம்"],
      },
      {
        id: "community",
        title: "சமூக ஓட்டங்கள்",
        icon: "users" as ProgrammeIcon,
        summary:
          "சிவகங்கையில் அதே இலக்குகளைத் துரத்தும் மக்களுடன் குழு ஓட்டங்கள், அகாடமி நிகழ்வுகள் மற்றும் நீண்ட ஓட்டக் காலைகளில் இணையுங்கள்.",
        points: ["குழு நீண்ட ஓட்டங்கள்", "அகாடமி நிகழ்வுகள்", "உள்ளூர் ஓட்டச் சமூகம்"],
      },
    ],
  },
  why: {
    label: "ஏன் சேர வேண்டும்",
    titleLine1: "நீண்ட ஓட்டத்திற்காக",
    titleLine2: "கட்டப்பட்டது",
    body: "யாரும் உங்களுக்கு ஒரு உடற்பயிற்சியை விற்கலாம். ஆனால் அகாடமி நீண்ட காலத்திற்கான ஒன்றை உருவாக்குகிறது: நீங்கள் தொடர்ந்து திரும்பி வரக்கூடிய இடம், பயிற்சியாளர் மற்றும் சமூகம்.",
    ctaJoin: "அகாடமியில் சேருங்கள்",
    ctaAsk: "கேள்வி கேளுங்கள்",
    foundedValue: "2025",
    foundedLabel: "சிவகங்கையில் சிவா பாலனால் தொடங்கப்பட்டது",
    unsure: "எங்கு தொடங்குவது என்று தெரியவில்லையா?",
    unsureBody:
      "உங்கள் இலக்கைத் தெரிவியுங்கள் — பொருத்தமான நிரல் மற்றும் முதல் அமர்வைப் பரிந்துரைப்போம்.",
    startHere: "இங்கே தொடங்குங்கள்",
    items: [
      {
        title: "ஓட்டத்திற்கு முன்னுரிமை தரும் சூழல்",
        body: "ஓட்டப்பந்தய வீரர்களுக்காக கட்டப்பட்ட மைதானத்தில் பயிற்சி — மூலையில் ஒரு டிரெட்மில் உள்ள பொது ஜிம் அல்ல.",
      },
      {
        title: "ஓடும் நிறுவனரிடம் கற்றுக்கொள்ளுங்கள்",
        body: "சிவா பாலன் இன்னும் பயிற்சி பெறுகிறார், போட்டிகளில் ஓடுகிறார், தன் வேலையை வெளிப்படையாகப் பகிர்கிறார். பயிற்சி அனுபவத்திலிருந்து வருகிறது, கோட்பாட்டிலிருந்து அல்ல.",
      },
      {
        title: "உள்ளூர் சகிப்புத்திறன் சமூகம்",
        body: "சிவகங்கையைச் சேர்ந்த, உங்களைப் போலவே இலக்குகளைத் துரத்தும் மக்களுடன் குழு ஓட்டங்கள் மற்றும் நீண்ட ஓட்டக் காலைகள்.",
      },
      {
        title: "தொடக்கநிலையிலிருந்து இலக்கு வரை",
        body: "உங்கள் முதல் ஜாகிங்கில் தொடங்கி தொடருங்கள் — 5K, 10K, அரை மாரத்தான், விரும்பினால் முழு 42.2 வரை.",
      },
      {
        title: "வளர்ந்து வரும் மாரத்தான் கிராமம்",
        body: "மைதானம் கட்டப்படும்போதே இணையுங்கள்; தமிழ்நாட்டில் நீண்ட காலத்திற்காக வடிவமைக்கப்பட்ட வசதியுடன் வளருங்கள்.",
      },
      {
        title: "ஊகமல்ல, ஒழுங்கு",
        body: "திட்டங்கள், அமர்வுகள் மற்றும் மீட்பு ஒரு இலக்கைச் சுற்றி ஒழுங்கமைக்கப்படுகின்றன — உங்கள் பயிற்சிக்கு திசையும் காலக்கெடுவும் இருக்கும்.",
      },
    ],
  },
  gallery: {
    label: "மைதான புதுப்பிப்புகள்",
    title: "மைதானம் மாறிக்கொண்டிருக்கிறது.",
    intro:
      "மாரத்தான் கிராமத்தின் ஓட்டக் காலவரிசை — முதல் அடிகள், மைதான வேலை மற்றும் அதைத் தொடர்ந்த நாட்கள். நடந்த பிறகு அல்ல, நடக்கும்போதே பகிரப்படுகிறது.",
    follow: "புதுப்பிப்புகளைப் பின்தொடருங்கள்",
    disclaimer:
      "தேதிகள் சிவா பாலனின் பொதுப் பதிவுகளைப் பிரதிபலிக்கின்றன. அகாடமியின் சொந்த மைதான புகைப்படங்கள் கிடைக்கும் வரை புகைப்படங்கள் விளக்கமளிக்கும் மாதிரிகள்.",
    ctaTitle: "மேலும் மைதான புதுப்பிப்புகள்",
    ctaBody: "மாரத்தான் கிராமம் கட்டப்படுவதை நேரடியாகப் பின்தொடருங்கள்.",
    items: [
      {
        date: "ஆகஸ்ட் 2025",
        title: "எங்கள் மைதானத்தில் முதல் ஓட்டம்",
        body: "பாதைக்கு முன், கட்டிடங்களுக்கு முன் — அகாடமியின் இல்லமாக மாறப்போகும் நிலத்தில் முதல் அடிகள்.",
        href: "https://www.instagram.com/sivabalan_singam/",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
        alt: "அதிகாலையில் வெளியில் பயிற்சி செய்யும் ஓட்டப்பந்தய வீரர்",
      },
      {
        date: "செப்டம்பர் 2025",
        title: "சிங்கம் அயன்மேன் அகாடமி தொடங்கியது",
        body: "ஓட்டப்பந்தய வீரர்களுக்கும் சகிப்புத்திறன் வீரர்களுக்கும் சிவகங்கையில் ஒரு பிரத்யேக இடம் என்ற தெளிவான நோக்கத்துடன் சிவா பாலன் அகாடமியைத் தொடங்குகிறார்.",
        href: "https://www.instagram.com/sivabalan_singam/",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
        alt: "சூரிய உதயத்தில் சாலையில் ஓடும் வீரர்",
      },
      {
        date: "ஜனவரி 2026",
        title: "மைதான வேலை புதுப்பிப்பு",
        body: "குழு ஓட்டங்கள், உடற்பயிற்சி அமர்வுகள் மற்றும் அகாடமி நிகழ்வுகளை நடத்தப்போகும் மைதானத்தை வடிவமைக்கும் வேலை முழு வீச்சில் தொடங்குகிறது.",
        href: "https://www.instagram.com/sivabalan_singam/reel/DTpU-VcjZ6o/",
        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
        alt: "மேலிருந்து ஓட்டப் பாதை பாதைகள்",
      },
      {
        date: "மார்ச் 2026",
        title: "மாரத்தான் கிராம மைதான புதுப்பிப்பு",
        body: "நோக்கம் தெளிவாகிறது: சிவகங்கைக்கு ஒரு மாரத்தான் கிராமம், அதன் மையத்தில் 400 மீ ஓட்டப் பாதை.",
        href: "https://www.instagram.com/sivabalan_singam/reel/DWeHKFtjwF_/",
        image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
        alt: "திறந்த வானத்தின் கீழ் ஓட்டப் பாதை",
      },
      {
        date: "ஏப்ரல் 2026",
        title: "எங்கள் மாரத்தான் கிராமத்தில் 6வது நாள்",
        body: "மைதானத்தைக் கட்டும் பயணத்தின் நாளுக்கு நாள் பதிவு — கனவுக்குப் பின்னால் உள்ள வேலை, சமூகத்துடன் பகிரப்படுகிறது.",
        href: "https://www.instagram.com/sivabalan_singam/reel/DKJeJF-vKJw/",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
        alt: "மாலை வெளிச்சத்தில் அமைதியான சாலையில் ஓடும் வீரர்",
      },
    ],
  },
  social: {
    label: "பயணத்தைப் பின்தொடருங்கள்",
    titleLine1: "பயிற்சி,",
    titleLine2: "வெளிப்படையாக",
    body: "நீண்ட ஓட்டங்கள், மாரத்தான் பயிற்சி, காலணிகள், போட்டி முடிவுகள் மற்றும் மாரத்தான் கிராமத்தின் மைதான புதுப்பிப்புகள் — 250,000க்கும் மேற்பட்ட ஓட்டப்பந்தய வீரர்கள் மற்றும் உடற்தகுதி ஆர்வலர்களுக்கான சமூகத்திற்காக வெளிப்படையாகப் பதிவு செய்யப்படுகிறது.",
    subscribe: "யூடியூபில் சந்தா செய்யுங்கள்",
    instagram: "இன்ஸ்டாகிராம்",
    watch: "பாருங்கள்",
    videoTitle: "சிவகங்கையில் இரவு ஓட்டம்",
    youtube: "யூடியூப்",
  },
  faq: {
    label: "கேள்விகள்",
    titleLine1: "தெரிந்து",
    titleLine2: "கொள்ளுங்கள்",
    body: "சேர்வது, நேரங்கள், பாதை மற்றும் முதல் வருகையில் என்ன எதிர்பார்க்கலாம் என்பதற்கான நேரடியான பதில்கள்.",
    cta: "உங்கள் கேள்வியைக் கேளுங்கள்",
    items: [
      {
        q: "நான் முன்பு ஓடியதே இல்லை. நான் சேரலாமா?",
        a: "ஆம். தொடக்க நிரல் நடப்பதிலிருந்தும் ஜாகிங் செய்வதிலிருந்தும் தொடங்குபவர்களுக்காக வடிவமைக்கப்பட்டது. தொடங்க உடற்தகுதி அடிப்படை, போட்டி அனுபவம் அல்லது விலை உயர்ந்த உபகரணங்கள் தேவையில்லை — தொடர்ச்சி மட்டுமே.",
      },
      {
        q: "அகாடமி நேரங்கள் என்ன?",
        a: "பொது பட்டியலின்படி மைதானம் தினமும் காலை 6:00 முதல் இரவு 10:00 வரை திறந்திருக்கும். சரியான அமர்வு நேரங்கள் முதல் வருகைக்கு முன் அகாடமியுடன் உறுதி செய்யப்படும்.",
      },
      {
        q: "400 மீ பாதை தயாரா?",
        a: "400 மீ ஓட்டப் பாதையும் மாரத்தான் கிராமமும் வளர்ச்சியில் உள்ளன. முன்னேற்றம் சிவா பாலனின் இன்ஸ்டாகிராமில் பொதுவாகப் பதிவாகிறது; மைதானம் வளரும்போது இந்தப் பக்கமும் புதுப்பிக்கப்படும். பயணம் செய்வதற்கு முன் சமீபத்திய புதுப்பிப்பைப் பாருங்கள்.",
      },
      {
        q: "நிரல்களின் கட்டணம் எவ்வளவு?",
        a: "கட்டணம் மற்றும் உறுப்பினர் விருப்பங்கள் அகாடமியுடன் நேரடியாக உறுதிப்படுத்தப்படும். நீங்கள் தேர்ந்தெடுக்கும் நிரல் மற்றும் அமர்வைப் பொறுத்து கட்டணம் அமையும்; உங்கள் இலக்கையும் விருப்பமான நேரத்தையும் தெரிவித்து தற்போதைய விவரங்களைப் பெறுங்கள்.",
      },
      {
        q: "அரை மற்றும் முழு மாரத்தானுக்கு பயிற்சி அளிக்கிறீர்களா?",
        a: "ஆம் — மாரத்தானுக்கான தயாரிப்பு அகாடமியின் மையமாக உள்ளது, 10K மற்றும் பொது உடற்தகுதியுடன். உங்கள் தற்போதைய அடிப்படை, இலக்கு போட்டி மற்றும் வாரத்திற்கு கிடைக்கும் நாட்களுக்கு ஏற்ப பயிற்சி ஒழுங்கமைக்கப்படும்.",
      },
      {
        q: "சேர்வதற்கு முன் மைதானத்தைப் பார்க்கலாமா?",
        a: "நிச்சயமாக. வசதியைப் பார்த்து, சமூகத்தைச் சந்தித்து, நிரல்களைப் புரிந்துகொள்ள மைதான வருகை சிறந்த வழி. தொடர்பு படிவம் மூலம் வருகையை முன்பதிவு செய்யுங்கள்; அகாடமி நேரத்தை உறுதி செய்யும்.",
      },
      {
        q: "இது அதிகாரப்பூர்வ அயன்மேன் முத்தரப்பு மையமா?",
        a: "இல்லை. \"அயன்மேன்\" அகாடமியின் பிராண்ட் பெயரின் ஒரு பகுதி, சகிப்புத்திறன் மனநிலையைக் குறிக்கிறது. சிங்கம் அயன்மேன் அகாடமி அயன்மேன் சான்றளிக்கப்பட்ட அல்லது இணைக்கப்பட்ட பயிற்சி மையம் அல்ல.",
      },
    ],
  },
  contact: {
    label: "அகாடமியில் சேருங்கள்",
    titleLine1: "உங்கள்",
    titleLine2: "ஓட்டப் பயணத்தை",
    titleAccent: "தொடங்குங்கள்.",
    quote:
      "அல்லது மைதானத்தை வந்து பாருங்கள். முதல் அடியே கடினமானது — மீதமுள்ளது தொடர்ந்து வருவதுதான்.",
    address: "சிவகங்கை, தமிழ்நாடு, இந்தியா",
    hours: "தினமும் திறந்திருக்கும் · காலை 6:00 – இரவு 10:00",
    groundLabel: "மைதானம்",
    mapsPending: "கூகிள் மேப்ஸ் இணைப்பு உறுதி செய்யப்படவில்லை",
    mapsOpen: "கூகிள் மேப்ஸில் திறக்கவும்",
    timingsLabel: "நேரங்கள்",
    timingsNote: "பொதுவில் பட்டியலிடப்பட்டது — அமர்வு நேரங்கள் உறுதி செய்யப்பட வேண்டும்.",
    timingsVerifiedNote: "அமர்வு நேரங்கள் விசாரணையில் தெரிவிக்கப்படும்.",
    talkLabel: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
    fastestReply: "இன்ஸ்டாகிராம் DM — விரைவான பதில்",
    pendingNote:
      "அதிகாரப்பூர்வ தொலைபேசி, வாட்ஸ்அப் மற்றும் மேப்ஸ் இணைப்பு அகாடமியால் உறுதி செய்யப்பட்ட பிறகு சேர்க்கப்படும்.",
    goals: [
      "தொடக்க உடற்தகுதி",
      "எடை குறைப்பு",
      "5K",
      "10K",
      "அரை மாரத்தான்",
      "முழு மாரத்தான்",
      "பொது வலிமை",
      "யோகா & மீட்பு",
    ],
    form: {
      title: "அகாடமியில் சேருங்கள்",
      intro:
        "உங்கள் இலக்கைத் தெரிவியுங்கள். சரியான நிரல் மற்றும் நேரத்துடன் நாங்கள் பதிலளிப்போம்.",
      est: "2025 தொடக்கம்",
      name: "உங்கள் பெயர்",
      phone: "தொலைபேசி / வாட்ஸ்அப்",
      goal: "உங்கள் இலக்கு",
      timing: "விருப்பமான நேரம்",
      message: "வேறு ஏதேனும்?",
      namePlaceholder: "எ.கா. கார்த்திக் ரா",
      phonePlaceholder: "+91 98765 43210",
      goalPlaceholder: "இலக்கைத் தேர்ந்தெடுங்கள்",
      timingPlaceholder: "எந்த நேரமும்",
      messagePlaceholder: "தற்போதைய உடற்தகுதி, போட்டி தேதி, காயங்கள், கேள்விகள்…",
      timingOptions: [
        "அதிகாலை (5–7 மணி)",
        "காலை (7–9 மணி)",
        "மாலை (5–7 மணி)",
        "மாலை (7–9 மணி)",
        "வார இறுதி மட்டும்",
        "நெகிழ்வானது",
      ],
      privacy:
        "உங்கள் விவரங்கள் இந்த விசாரணைக்கு பதிலளிக்க மட்டுமே பயன்படுத்தப்படும். பொதுவில் பகிரப்படாது.",
      submit: "விசாரணையை அனுப்புங்கள்",
      successThanks: "நன்றி,",
      successBody:
        "உங்கள் விசாரணை அனுப்பத் தயார். கீழே ஒரு வழியைத் தேர்ந்தெடுத்து அகாடமியை நேரடியாக அணுகுங்கள் — அல்லது விவரங்களை நகலெடுத்து நீங்களே அனுப்புங்கள்.",
      summaryGoal: "இலக்கு",
      summaryTiming: "நேரம்",
      summaryPhone: "தொலைபேசி",
      summaryName: "பெயர்",
      dm: "இன்ஸ்டாகிராமில் DM",
      whatsapp: "வாட்ஸ்அப்பில் அனுப்பு",
      copy: "விவரங்களை நகலெடு",
      copied: "நகலெடுக்கப்பட்டது",
      newEnquiry: "புதிய விசாரணை",
      demoNote:
        "டெமோ படிவம்: எந்தத் தரவும் அனுப்பப்படவில்லை அல்லது சேமிக்கப்படவில்லை. வெளியீட்டுக்கு முன் WhatsApp, மின்னஞ்சல் அல்லது படிவ சேவையுடன் இணைக்கவும்.",
      flexible: "நெகிழ்வானது",
      errors: {
        name: "உங்கள் பெயரை உள்ளிடுங்கள்.",
        phone: "சரியான தொலைபேசி அல்லது வாட்ஸ்அப் எண்ணை உள்ளிடுங்கள்.",
        goal: "நிரலைப் பரிந்துரைக்க ஒரு இலக்கைத் தேர்ந்தெடுங்கள்.",
      },
    },
  },
  footer: {
    blurb:
      "சிவகங்கையின் சகிப்புத்திறன் மற்றும் உடற்தகுதி அகாடமி. உடலுக்கும், மனதுக்கும், நீண்ட ஓட்டத்திற்கும் கட்டப்பட்டது — ஒரு ஓட்டப்பந்தய வீரர் என்று.",
    explore: "பயணிக்க",
    academy: "அகாடமி",
    visit: "வருகை",
    links: {
      programmes: "ஓட்டப் பயிற்சித் திட்டங்கள்",
      marathon: "மாரத்தான் பயிற்சி",
      track: "400 மீ பாதை",
      visit: "மைதான வருகையை முன்பதிவு செய்",
    },
    preferences: "மொழி & தோற்றம்",
    enquire: "இன்ஸ்டாகிராமில் விசாரிக்க",
    copyright: (year: number) =>
      `© ${year} சிங்கம் அயன்மேன் அகாடமி · சிவகங்கை, தமிழ்நாடு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`,
    disclaimer:
      "சிங்கம் அயன்மேன் அகாடமி ஒரு சுயாதீன ஓட்டம் மற்றும் உடற்தகுதி அகாடமி. \"அயன்மேன்\" அகாடமியின் பிராண்ட் பெயரின் ஒரு பகுதியாகப் பயன்படுத்தப்படுகிறது; இது Ironman® முத்தரப்பு அமைப்புடன் எந்த இணைப்பையும் அல்லது சான்றளிப்பையும் குறிக்கவில்லை. \"திட்டமிடப்பட்டது\" அல்லது \"வளர்ச்சியில்\" என்று குறிக்கப்பட்ட பாதை மற்றும் வசதி விவரங்கள் இன்னும் முடிக்கப்படவில்லை.",
  },
};

export type SiteContent = typeof en;

export const content: Record<Lang, SiteContent> = { en, ta };

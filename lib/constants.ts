export const LINKS = {
  selarStore: "https://selar.com",
  profitMasterclass: "https://selar.com/profit-masterclass",
  executionPlanner: "https://selar.com/execution-planner",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#events", label: "Events" },
  { href: "#resources", label: "Resources" },
  { href: "#podcast", label: "Podcast" },
];

export const quickLinks = [
  { href: LINKS.selarStore, label: "Resource Store", external: true },
  { href: LINKS.profitMasterclass, label: "Profit Masterclass", external: true },
  { href: "#cta", label: "Work With Me", external: false },
  { href: "#podcast", label: "Podcast", external: false },
  { href: "#testimonials", label: "Testimonials", external: false },
];

export const coachTags = [
  { label: "Business Coach", highlight: true },
  { label: "Career Coach", highlight: true },
  { label: "Life Coach", highlight: false },
  { label: "Performance Coach", highlight: false },
  { label: "Behavioral Coach", highlight: false },
  { label: "Financial Expert", highlight: false },
  { label: "Digital Strategist", highlight: false },
  { label: "AI Coach", highlight: false },
  { label: "Futurist", highlight: false },
];

export const servicesList = [
  {
    number: "01",
    icon: "📈",
    title: "Business Coaching",
    description: "Scale your business with proven systems, structure, and strategy. Move from a struggling operator to a thriving owner.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Career Coaching",
    description: "Navigate transitions, build your professional brand, and position yourself for the roles and income you deserve.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Performance Coaching",
    description: "Overcome limiting beliefs, optimize your habits, and unlock peak productivity in every area of your life.",
  },
];

export const industriesList = [
  { icon: "🏛️", name: "Government & Public Sector", sub: "Policy, Administration, Civic Tech" },
  { icon: "🛍️", name: "Retail & E-commerce", sub: "FMCG, Logistics, Supply Chain" },
  { icon: "📱", name: "Technology & IT", sub: "Software, Telecoms, Fintech" },
  { icon: "🏥", name: "Healthcare & Pharmaceuticals", sub: "MedTech, Care Systems" },
  { icon: "⚡", name: "Energy & Utilities", sub: "Renewables, Oil & Gas" },
  { icon: "🎓", name: "Education & EdTech", sub: "Institutions, Direct-to-learner" },
  { icon: "💰", name: "Finance & Banking", sub: "Wealth Management, InsurTech" },
  { icon: "🏗️", name: "Real Estate & Construction", sub: "PropTech, Development" },
];

export const testimonialsList = [
  {
    text: "Having a session with Coach Obafemi gives you an entirely new perspective. He has a unique way of listening to what you say and pulling out what you actually mean.",
    by: "Tech Founder, Lagos",
    variant: "default" as const,
  },
  {
    text: "The clarity I got in 45 minutes saved me from making a 6-month mistake. His approach to business structure is nothing short of brilliant.",
    by: "Creative Director, UK",
    variant: "dark" as const,
  },
  {
    text: "Coach OG doesn't just motivate you; he gives you the framework and holds you accountable until you see the results for yourself.",
    by: "Mid-level Manager, FinTech",
    variant: "red" as const,
  },
];

export const metricsList = [
  "Clarity of Identity & Purpose",
  "Blueprint for Sustainable Execution",
  "Systems Thinking & Structure",
  "Optimized Work/Life Integration",
  "Peak Career Positioning",
  "Bulletproof Wealth Mindset",
];

export const resourcesList = [
  {
    bannerText: "CLARITY",
    bannerClass: "bg-gradient-to-br from-brand-navy-mid via-secondary to-[#0a1128]",
    type: "E-Book",
    title: "10 Questions Every Leader Must Answer",
    description: "A profound diagnostic tool to discover if your current systems are supporting your ultimate vision.",
    linkLabel: "Download for free",
    href: "#",
  },
  {
    bannerText: "STRATEGY",
    bannerClass: "bg-gradient-to-br from-[#1a2b5c] via-[#243b7a] to-secondary",
    type: "Masterclass",
    title: "The Profit & Structure Blueprint",
    description: "A 90-minute intensive audio masterclass on transitioning from a solo-operator to a structured business owner.",
    linkLabel: "Get Access Now",
    href: LINKS.profitMasterclass,
  },
  {
    bannerText: "ACTION",
    bannerClass: "bg-gradient-to-br from-brand-red-dark via-primary to-[#e03a3a]",
    type: "Workbook",
    title: "The 90-Day Execution Planner",
    description: "Bridge the gap between knowing what to do and actually getting it done with this daily accountability framework.",
    linkLabel: "Purchase Planner",
    href: LINKS.executionPlanner,
  },
];

export const eventsList = [
  {
    bannerText: "LAGOS",
    badge: "Upcoming",
    title: "The Structure Masterclass (Live)",
    subtitle: "A 2-day immersive workshop for SMEs processing $100k+ annually but struggling with operational chaos.",
    details: [
      { icon: "📅", text: "October 14-15, 2026" },
      { icon: "📍", text: "Lagos Oriental Hotel" },
    ],
    mainPrice: "₦150,000",
    ctaLabel: "Secure Your Seat",
    ctaHref: "#",
    partners: ["Access Bank", "Lagos Innovates"],
  },
  {
    bannerText: "GLOBAL",
    bannerClass: "bg-gradient-to-br from-[#1a2b5c] via-[#243b7a] to-secondary",
    badge: "Virtual",
    title: "Career Mapping 101",
    subtitle: "How to position yourself for global opportunities without leaving your current job.",
    details: [
      { icon: "📅", text: "November 2, 2026" },
      { icon: "📍", text: "Zoom (Link sent on registration)" },
    ],
    strikePrice: "$99",
    mainPrice: "Free",
    ctaLabel: "Register for Free",
    ctaHref: "#",
    compact: true,
  },
];

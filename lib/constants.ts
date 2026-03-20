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

export const tickerItems = [
  "Business Coaching",
  "Career Development",
  "Life Coaching",
  "Performance Coaching",
  "Mindset Transformation",
  "Financial Coaching",
  "Digital Strategy",
  "AI Coaching",
  "Behavioral Coaching",
  "Kingdom Advancement",
];

export const servicesList = [
  {
    number: "01",
    icon: "🏗️",
    title: "Business Coaching and Strategy",
    description: "From scattered ideas to structured operations. I help entrepreneurs build systems, clarify strategy, and move from idea stage to a real, functioning, growing business.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Career Coaching and Development",
    description: "Navigating transitions, pursuing growth, or feeling stuck. I help career professionals gain clarity, move with purpose, and build a professional life they are proud of.",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Life and Mindset Coaching",
    description: "I specialize in dismantling the mental limitations that keep high-capacity people small. Real growth begins on the inside, and that is exactly where we start.",
  },
  {
    number: "04",
    icon: "⚡",
    title: "Performance and Behavioral Coaching",
    description: "Your patterns and habits determine your results. I work with you at the behavioral level to build sustainable habits and unlock consistent, peak performance.",
  },
  {
    number: "05",
    icon: "💰",
    title: "Financial Coaching and Profit Systems",
    description: "Sales do not always equal profit. I help business owners understand money flow, identify the hidden leaks killing their profit, and build a simple system to protect their earnings.",
  },
  {
    number: "06",
    icon: "🌐",
    title: "Digital Strategy and AI Coaching",
    description: "A futurist and tech enthusiast, I help businesses and professionals leverage digital marketing, AI tools, and emerging technology for real competitive advantage.",
  },
];

export const industriesList = [
  { icon: "🏦", name: "Banking and Finance", sub: "Financial institutions, investment, fintech" },
  { icon: "🌾", name: "Agriculture", sub: "Agribusiness, value chains, rural enterprise" },
  { icon: "🎓", name: "Education", sub: "Schools, EdTech, learning institutions" },
  { icon: "🏥", name: "Health", sub: "Healthcare providers, wellness, medtech" },
  { icon: "🚚", name: "Logistics and Transport", sub: "Supply chain, last-mile delivery, freight" },
  { icon: "🏘️", name: "Real Estate", sub: "Property, development, facility management" },
  { icon: "💻", name: "Tech and IT", sub: "Software, digital products, IT services" },
  { icon: "🛒", name: "Retail and E-commerce", sub: "Consumer goods, online retail, trade" },
  { icon: "🍽️", name: "Hospitality", sub: "Hotels, restaurants, events, tourism" },
  { icon: "📢", name: "Media and Communications", sub: "Content, PR, broadcasting, journalism" },
  { icon: "⛪", name: "Faith and Non-profit", sub: "Churches, NGOs, community development" },
  { icon: "➕", name: "And More", sub: "If you are building something, Coach OG has tools for you" },
];

export const testimonialsList = [
  {
    text: "You cannot be around Coach Obafemi and not think of getting better at what you do. He is always looking out for your strengths and your weaknesses. He is committed to every task before him, even when things do not make sense. He likes to keep his word, and he does. This Man is A Lot.",
    by: "Team Member",
  },
  {
    text: "If you approach Obafemi for anything, you can be sure he will have a valid solution. He is very knowledgeable and full of wisdom across different areas of life. He is sound.",
    by: "Coaching Client",
  },
  {
    text: "He is a true mentor and a vast coach. One who does not waste an opportunity and is relentless in the pursuit of growth, both his own and yours.",
    by: "Business Owner",
  },
  {
    text: "He invests in people. He does not mind putting himself in discomfort for the sake of others. His coaching goes beyond sessions. It becomes a life posture.",
    by: "Team Member",
  },
  {
    text: "He is a resource. Whatever you bring to his table, he commits until there is a way forward. He is not quick to judge, and he never wastes an opportunity.",
    by: "Professional",
  }
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

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
  {
    href: LINKS.profitMasterclass,
    label: "Profit Masterclass",
    external: true,
  },
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
    description:
      "From scattered ideas to structured operations. I help entrepreneurs build systems, clarify strategy, and move from idea stage to a real, functioning, growing business.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Career Coaching and Development",
    description:
      "Navigating transitions, pursuing growth, or feeling stuck. I help career professionals gain clarity, move with purpose, and build a professional life they are proud of.",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Life and Mindset Coaching",
    description:
      "I specialize in dismantling the mental limitations that keep high-capacity people small. Real growth begins on the inside, and that is exactly where we start.",
  },
  {
    number: "04",
    icon: "⚡",
    title: "Performance and Behavioral Coaching",
    description:
      "Your patterns and habits determine your results. I work with you at the behavioral level to build sustainable habits and unlock consistent, peak performance.",
  },
  {
    number: "05",
    icon: "💰",
    title: "Financial Coaching and Profit Systems",
    description:
      "Sales do not always equal profit. I help business owners understand money flow, identify the hidden leaks killing their profit, and build a simple system to protect their earnings.",
  },
  {
    number: "06",
    icon: "🌐",
    title: "Digital Strategy and AI Coaching",
    description:
      "A futurist and tech enthusiast, I help businesses and professionals leverage digital marketing, AI tools, and emerging technology for real competitive advantage.",
  },
];

export const industriesList = [
  {
    icon: "🏦",
    name: "Banking and Finance",
    sub: "Financial institutions, investment, fintech",
  },
  {
    icon: "🌾",
    name: "Agriculture",
    sub: "Agribusiness, value chains, rural enterprise",
  },
  {
    icon: "🎓",
    name: "Education",
    sub: "Schools, EdTech, learning institutions",
  },
  {
    icon: "🏥",
    name: "Health",
    sub: "Healthcare providers, wellness, medtech",
  },
  {
    icon: "🚚",
    name: "Logistics and Transport",
    sub: "Supply chain, last-mile delivery, freight",
  },
  {
    icon: "🏘️",
    name: "Real Estate",
    sub: "Property, development, facility management",
  },
  {
    icon: "💻",
    name: "Tech and IT",
    sub: "Software, digital products, IT services",
  },
  {
    icon: "🛒",
    name: "Retail and E-commerce",
    sub: "Consumer goods, online retail, trade",
  },
  {
    icon: "🍽️",
    name: "Hospitality",
    sub: "Hotels, restaurants, events, tourism",
  },
  {
    icon: "📢",
    name: "Media and Communications",
    sub: "Content, PR, broadcasting, journalism",
  },
  {
    icon: "⛪",
    name: "Faith and Non-profit",
    sub: "Churches, NGOs, community development",
  },
  {
    icon: "➕",
    name: "And More",
    sub: "If you are building something, Coach OG has tools for you",
  },
];

export const pillars = [
  {
    icon: "👂",
    title: "Listen First",
    text: "I hear what you say and what you do not. Real solutions are found in the listening.",
  },
  {
    icon: "🔍",
    title: "Think Critically",
    text: "I analyze, assess, and architect solutions designed to last far beyond the session.",
  },
  {
    icon: "⚙️",
    title: "Build Systems",
    text: "I help you create structures that keep producing results in your business and your life.",
  },
  {
    icon: "🚀",
    title: "Multiply Value",
    text: "My goal is not just your success. It is that your growth enables those around you to grow too.",
  },
];

export interface Testimonial {
  text: string;
  by: string;
  variant?: "dark" | "red" | "light";
}

export const testimonialsList: Testimonial[] = [
  {
    text: "You cannot be around Coach Obafemi and not think of getting better at what you do. He is always looking out for your strengths and your weaknesses. He is committed to every task before him, even when things do not make sense. He likes to keep his word, and he does. This Man is A Lot.",
    by: "Team Member",
    variant: "dark",
  },
  {
    text: "If you approach Obafemi for anything, you can be sure he will have a valid solution. He is very knowledgeable and full of wisdom across different areas of life. He is sound.",
    by: "Coaching Client",
    variant: "light",
  },
  {
    text: "He is a true mentor and a vast coach. One who does not waste an opportunity and is relentless in the pursuit of growth, both his own and yours.",
    by: "Business Owner",
    variant: "light",
  },
  {
    text: "He invests in people. He does not mind putting himself in discomfort for the sake of others. His coaching goes beyond sessions. It becomes a life posture.",
    by: "Team Member",
    variant: "red",
  },
  {
    text: "He is a resource. Whatever you bring to his table, he commits until there is a way forward. He is not quick to judge, and he never wastes an opportunity.",
    by: "Professional",
    variant: "light",
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
    bannerText: "PROFIT",
    bannerClass: "bg-linear-150 from-brand-red-dark to-brand-red-mid",
    type: "Masterclass",
    title: "Business Profitability Masterclass",
    description:
      "Learn why your money disappears even when sales are good. Practical tools for cash tracking, profit protection, and financial clarity.",
    linkLabel: "Get Access",
    href: LINKS.profitMasterclass,
  },
  {
    bannerText: "CAREER",
    bannerClass: "bg-linear-150 from-secondary to-brand-navy-mid",
    type: "Guide",
    title: "Career and Growth Resources",
    description:
      "Templates, guides, and tools for career professionals. Designed to help you navigate your path, accelerate growth, and lead with confidence.",
    linkLabel: "Browse Resources",
    href: LINKS.selarStore,
  },
  {
    bannerText: "MIND",
    bannerClass: "bg-linear-150 from-[#3a2800] to-[#5c4010]",
    type: "Coaching",
    title: "Mindset and Business Tools",
    description:
      "From strategy frameworks to mindset coaching resources, these tools are built for entrepreneurs and leaders ready to operate at a new level.",
    linkLabel: "Explore All",
    href: LINKS.selarStore,
  },
];

export const eventsList = [
  {
    bannerText: "THE VANISHING PROFIT MYSTERY",
    badge: "Live on YouTube",
    title: "Why Money Finishes Even When Sales Are High",
    subtitle:
      "A 60-minute practical business class for entrepreneurs and business owners who make sales but still wonder where the money goes. Coach OG breaks down the 5 hidden profit leaks, how to track your cash, and how to build a simple system that protects your profit.",
    details: [
      { icon: "📅", text: "Friday, 20 March 2026 at 7:00 PM" },
      { icon: "▶️", text: "YouTube Live Session" },
      { icon: "🗂️", text: "Business Profitability Series" },
    ],
    strikePrice: "Early Bird: ₦3,000",
    mainPrice: "₦5,000",
    ctaLabel: "Register Now",
    ctaHref: "#",
    partners: ["LEAN", "AGATE"],
  },
  {
    bannerText: "COMING",
    bannerClass: "bg-gradient-to-br from-[#1a2b5c] to-secondary",
    title: "Career Acceleration Masterclass",
    subtitle:
      "For professionals who want to move faster, earn more, and lead better. Coming soon.",

    ctaLabel: "Join Waitlist",
    ctaHref: "#",
    compact: true,
  },
];

export const podcastTopics = [
  "Business Growth",
  "Career Clarity",
  "Mindset",
  "Leadership",
  "Faith and Work",
  "Strategy",
  "Money",
  "Purpose",
];

export const skillsList = [
  {
    name: "Attentive Listening",
    desc: "He hears what is said and what is not. Solutions live in the silence.",
  },
  {
    name: "Strategic Thinking",
    desc: "Long-term vision. Systems built to outlast the moment.",
  },
  {
    name: "Systems and Documentation",
    desc: "Creating structures that keep producing results without you.",
  },
  {
    name: "Mindset Coaching",
    desc: "Dismantling the mental ceilings that limit high-capacity people.",
  },
  {
    name: "Public Speaking and Training",
    desc: "He breaks things down until they click. Engaging, clear, powerful.",
  },
  {
    name: "Business Development",
    desc: "From idea to full execution. From scattered to structured.",
  },
  {
    name: "Digital Marketing and AI",
    desc: "Future-facing strategy for a digital and AI-driven world.",
  },
  {
    name: "People Development",
    desc: "Making every person a resource, to themselves and to those around them.",
  },
];

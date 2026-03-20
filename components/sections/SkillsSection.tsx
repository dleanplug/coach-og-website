import { SectionHeading } from "@/components/shared/SectionHeading";

const skillsList = [
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

export function SkillsSection() {
  return (
    <section id="skills" className="reveal page-padding py-[100px] bg-warm-white max-lg:py-[72px]">
      <SectionHeading tag="Competencies" title={<>What Coach OG Brings <em className="italic text-primary">to Your Table</em></>} />
      
      <div className="grid grid-cols-4 gap-0.5 mt-14 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {skillsList.map((skill, i) => (
          <div 
            key={i} 
            className="bg-white p-7 border border-border transition-all duration-300 hover:bg-secondary group"
          >
            <div className="font-playfair text-base font-semibold text-text-dark mb-1.5 group-hover:text-brand-gold-light">
              {skill.name}
            </div>
            <p className="text-[0.78rem] leading-[1.6] text-text-muted group-hover:text-white/40">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

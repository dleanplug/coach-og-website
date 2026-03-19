import { SectionHeading } from "@/components/shared/SectionHeading";

export function PhilosophySection() {
  return (
    <section className="reveal py-20 px-20 border-b border-accent/20 max-lg:px-6 max-lg:py-[72px]">
      <div className="max-w-[800px] mx-auto text-center">
        <SectionHeading
          tag="The OG Philosophy"
          title={<>The <em className="italic text-primary">In-to-Out</em> Principle</>}
          center
        />
        
        <p className="font-playfair text-[1.2rem] italic leading-[1.8] text-text-muted mt-8 mb-8">
          &quot;Before you can build a sustainable business, lead a capable team, or command influence in your career, you must first build yourself. The system you deploy externally is only as strong as the structure you possess internally.&quot;
        </p>
        
        <div className="text-[0.8rem] tracking-[3px] uppercase font-bold text-text-dark">
          — Coach Obafemi
        </div>
      </div>
    </section>
  );
}

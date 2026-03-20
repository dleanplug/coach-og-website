import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonialsList } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="reveal page-padding py-[100px] bg-warm-white max-lg:py-[72px]">
      <SectionHeading
        tag="What People Say"
        title={<>Voices of <em className="italic text-primary">Transformation</em></>}
        className="mb-[72px]"
      />
      
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {testimonialsList.map((t, index) => (
          <TestimonialCard
            key={index}
            {...t}
            className={cn(index === 0 && "lg:col-span-2")}
          />
        ))}
      </div>
    </section>
  );
}

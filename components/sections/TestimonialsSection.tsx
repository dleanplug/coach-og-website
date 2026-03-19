import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonialsList } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="reveal px-20 py-[100px] bg-off-white max-lg:px-6 max-lg:py-[72px]">
      <SectionHeading
        tag="Impact Stories"
        title={<>Words from <br />the <em className="italic text-primary">Transformed</em></>}
        className="mb-[72px] max-w-[500px]"
      />
      
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {testimonialsList.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { servicesList } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section
      id='services'
      className='reveal page-padding py-[100px] bg-warm-white max-lg:py-[72px]'>
      <SectionHeading
        tag='What I Do'
        title={
          <>
            How I Can{" "}
            <em className='italic text-primary font-playfair'>Serve You</em>
          </>
        }
        className='mb-[72px]'
      />

      <div className='grid grid-cols-3 gap-0.5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        {servicesList.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </section>
  );
}

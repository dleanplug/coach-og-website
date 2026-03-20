import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { servicesList } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="reveal page-padding py-[100px] bg-off-white  max-lg:py-[72px]">
      <div className="flex justify-between items-end mb-14 max-lg:flex-col max-lg:items-start max-lg:gap-6">
        <SectionHeading
          tag="Core Competencies"
          title={<>Solutions Designed for <br />Your <em className="italic text-primary">Next Level</em></>}
          className="max-w-[600px]"
        />
        <div className="text-[0.88rem] leading-[1.7] text-text-muted font-light max-w-[400px] text-right max-lg:text-left max-lg:w-full">
          Tailored coaching programs that address the root cause of your plateau, providing actionable blueprints for sustainable growth.
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {servicesList.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </section>
  );
}

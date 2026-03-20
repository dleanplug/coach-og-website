import { SectionHeading } from "@/components/shared/SectionHeading";
import { IndustryItem } from "@/components/shared/IndustryItem";
import { industriesList } from "@/lib/constants";

export function IndustriesSection() {
  return (
    <section id="industries" className="reveal page-padding py-[100px] bg-secondary text-white  max-lg:py-[72px]">
      <SectionHeading
        tag="Cross-sector Expertise"
        title="11+ Industries Impacted"
        light
        center
        className="mb-[72px] max-w-[600px] mx-auto text-center"
      />

      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-3">
        {industriesList.map((ind) => (
          <IndustryItem key={ind.name} {...ind} />
        ))}
      </div>
    </section>
  );
}

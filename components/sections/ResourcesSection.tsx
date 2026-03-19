import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCard } from "@/components/shared/ResourceCard";
import { resourcesList, LINKS } from "@/lib/constants";

export function ResourcesSection() {
  return (
    <section id="resources" className="reveal px-20 py-[100px] bg-white max-lg:px-6 max-lg:py-[72px]">
      <div className="flex justify-between items-end mb-[72px] max-lg:flex-col max-lg:items-start max-lg:gap-6">
        <SectionHeading
          tag="Digital Library"
          title={<>Equip <em className="italic text-primary">Yourself</em></>}
          className="max-w-[500px]"
        />
        <a
          href={LINKS.selarStore}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] tracking-[2.5px] uppercase text-primary font-bold border-b border-primary/30 pb-1 transition-colors hover:text-accent hover:border-accent"
        >
          View Full Store
        </a>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {resourcesList.map((res, index) => (
          <ResourceCard key={index} {...res} />
        ))}
      </div>
    </section>
  );
}

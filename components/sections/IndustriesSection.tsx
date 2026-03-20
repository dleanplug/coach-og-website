import { SectionHeading } from "@/components/shared/SectionHeading";
import { industriesList } from "@/lib/constants";

export function IndustriesSection() {
  return (
    <section
      id='industries'
      className='reveal page-padding py-[100px] bg-secondary text-white max-lg:py-[72px] border-t-4 border-accent'>
      <SectionHeading
        tag='Cross-sector Experience'
        title={
          <>
            Industries I Have Worked{" "}
            <em className='italic text-accent'>In and With</em>
          </>
        }
        light
        className='mb-3'
      />
      <p className='text-white/40 text-[0.95rem] leading-[1.8] max-w-[560px] mb-14 font-light'>
        Across over a decade of coaching, consulting, and operational
        experience, Coach OG has worked with professionals and businesses from a
        wide range of sectors.
      </p>

      <div className='grid grid-cols-4 gap-0.5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        {industriesList.map((industry) => (
          <div
            key={industry.name}
            className='group relative py-[30px] px-6 bg-white/2 border border-white/6 transition-all duration-300 hover:bg-accent/6 cursor-default overflow-hidden'>
            <div className='text-[1.5rem] mb-3'>{industry.icon}</div>
            <h3 className='font-sans text-[0.88rem] font-semibold text-white/80 mb-1.5 uppercase tracking-wide'>
              {industry.name}
            </h3>
            <p className='text-[0.75rem] text-white/30 leading-normal'>
              {industry.sub}
            </p>
            {/* Hover accent line at bottom */}
            <div className='absolute bottom-0 left-0 right-0 h-0 bg-primary transition-all duration-300 group-hover:h-[3px]' />
          </div>
        ))}
      </div>
    </section>
  );
}

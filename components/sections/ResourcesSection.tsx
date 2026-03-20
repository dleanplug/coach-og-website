import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCard } from "@/components/shared/ResourceCard";
import { resourcesList, LINKS } from "@/lib/constants";

export function ResourcesSection() {
  return (
    <section
      id='resources'
      className='reveal page-padding py-[100px] bg-white  max-lg:py-[72px]'>
      <div className='mb-[72px] max-lg:flex-col max-lg:items-start max-lg:gap-6'>
        <SectionHeading
          tag='Paid Resources'
          title={
            <>
              Learn from Coach OG{" "}
              <em className='italic text-primary'>On Your Terms</em>
            </>
          }
          className='mb-4'
        />
        <p className='text-text-muted text-[0.95rem] leading-[1.8] max-w-[600px] font-light'>
          Whether you are a business owner, career professional, or someone
          looking to grow, Coach OG has created resources designed to give you
          practical, actionable tools you can use right away.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-6 max-lg:grid-cols-1'>
        {resourcesList.map((res, index) => (
          <ResourceCard key={index} {...res} />
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className='mt-[40px] text-center py-10 px-8 bg-warm-white rounded-[4px] border border-border'>
        <p className='font-playfair text-[1.3rem] italic text-text-dark mb-4 leading-relaxed'>
          Browse the full library of resources built by Coach OG for business
          owners, career professionals, and leaders.
        </p>
        <a
          href={LINKS.selarStore}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-primary text-white px-8 py-4 rounded-[2px] text-[0.75rem] tracking-[2px] uppercase font-bold transition-all hover:bg-accent hover:-translate-y-1 hover:shadow-lg'>
          Visit the Resource Store
        </a>
      </div>
    </section>
  );
}

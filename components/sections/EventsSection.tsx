import { SectionHeading } from "@/components/shared/SectionHeading";
import { EventCard } from "@/components/shared/EventCard";
import { eventsList } from "@/lib/constants";

export function EventsSection() {
  return (
    <section
      id='events'
      className='reveal page-padding py-[100px] bg-warm-white  max-lg:py-[72px]'>
      <SectionHeading
        tag='Live & Virtual Engagements'
        title={
          <>
            Learn in the <em className='italic text-primary'>Room</em>
          </>
        }
        className='mb-[72px]'
      />

      <div className='grid grid-cols-[3fr_2fr] gap-6 items-start max-lg:grid-cols-1'>
        <EventCard {...eventsList[0]} />

        <div className='flex flex-col gap-6'>
          <EventCard {...eventsList[1]} />

          {/* Custom CTA block filling remaining space */}
          <div className='bg-secondary text-white p-10 rounded-[4px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col justify-center border border-accent/20 h-full min-h-[240px]'>
            <h3 className='font-playfair text-[1.4rem] font-bold text-white mb-2 leading-[1.3]'>
              Bring Coach OG to Your City or Organization
            </h3>
            <p className='text-[0.8rem] text-white/50 leading-[1.6] mb-6'>
              Available for corporate training, keynote speaking, and
              specialized executive retreats.
            </p>
            <a
              href='#contact'
              className='inline-block border border-accent text-accent px-6 py-2.5 rounded-[2px] text-[0.65rem] tracking-[2px] uppercase font-bold transition-all hover:bg-accent hover:text-secondary self-start w-auto text-center'>
              Book for Speaking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

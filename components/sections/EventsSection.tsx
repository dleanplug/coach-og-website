import { SectionHeading } from "@/components/shared/SectionHeading";
import { EventCard } from "@/components/shared/EventCard";
import { eventsList } from "@/lib/constants";

export function EventsSection() {
  return (
    <section
      id='events'
      className='reveal page-padding py-[100px] bg-off-white  max-lg:py-[72px]'>
      <SectionHeading
        tag='Live Trainings and Masterclasses'
        title={
          <>
            Upcoming <em className='italic text-primary'>Events</em>
          </>
        }
        className='mb-[72px]'
      />

      <div className='grid grid-cols-[3fr_2fr] gap-6 items-start max-lg:grid-cols-1'>
        <EventCard {...eventsList[0]} />

        <div className='flex flex-col gap-6'>
          <EventCard {...eventsList[1]} />

          {/* Custom CTA block: More Events Loading */}
          <div className='bg-brand-navy-mid text-white py-8 px-7 rounded-[4px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col justify-center border border-white/5 h-full'>
            <div className='text-white/35 text-[0.65rem] tracking-[3px] uppercase font-bold mb-4'>
              More Events Loading
            </div>
            <p className='font-playfair text-base italic font-medium text-white/70 leading-normal'>
              New trainings, masterclasses, and live sessions are always in the
              pipeline. Subscribe to stay notified when the next one drops.
            </p>
            <a
              href='#cta'
              className='text-accent text-[0.7rem] tracking-[2px] uppercase font-bold mt-6 hover:translate-x-1 transition-transform inline-block'>
              Stay Notified &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

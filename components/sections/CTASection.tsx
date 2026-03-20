import { SectionHeading } from "@/components/shared/SectionHeading";

export function CTASection() {
  return (
    <section id='cta' className='relative'>
      <div className='reveal page-padding py-[120px] bg-primary text-center flex flex-col items-center  max-lg:py-20'>
        <SectionHeading
          tag='Competencies'
          title={
            <>
              The cost of staying the same is higher than the{" "}
              <br className='max-lg:hidden' />
              <em className='italic text-primary'>price of transformation.</em>
            </>
          }
          center
          className='mb-8'
        />

        <p className='text-[0.9rem] leading-[1.8] text-text-muted font-light max-w-[500px] mb-11'>
          Stop operating by guesswork. Get the blueprint, build the structure,
          and scale your impact. Your next level requires a new conversation.
        </p>

        <a
          href='https://selar.com/m/og-biz-network'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-primary text-white border border-primary px-10 py-4 rounded-[2px] text-[0.8rem] tracking-[3px] uppercase font-bold transition-all hover:bg-accent hover:border-accent hover:text-secondary hover:-translate-y-1 shadow-[0_20px_40px_rgba(139,26,26,0.3)] hover:shadow-[0_25px_50px_rgba(201,145,61,0.4)] relative overflow-hidden group'>
          <span className='relative z-10'>Start The Conversation Now</span>
          <div className='absolute inset-0 bg-white/20 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:skew-x-12' />
        </a>

        <div className='text-[0.68rem] tracking-[1.5px] uppercase text-text-muted mt-6 flex items-center justify-center gap-3'>
          <span className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse' />
          Currently accepting applications for H2 2026
        </div>
      </div>
    </section>
  );
}

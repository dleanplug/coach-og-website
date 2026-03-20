import { SectionHeading } from "@/components/shared/SectionHeading";
import { pillars } from "@/lib/constants";

export function PhilosophySection() {
  return (
    <section
      id='philosophy'
      className='reveal py-[100px] page-padding bg-brand-red-dark text-white relative overflow-hidden max-lg:py-[72px]'>
      {/* Decorative OG watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0'>
        <span className='font-alumni text-[30vw] text-white/2 leading-none uppercase tracking-[20px]'>
          OG
        </span>
      </div>
      <div className='relative z-10'>
        <SectionHeading
          tag='The OG Philosophy'
          title={
            <>
              I Am a <em className='italic text-accent'>Catalyst</em>, Not Just
              a Coach
            </>
          }
          center
          light
          className='mb-4'
        />

        <p className='max-w-[600px] mx-auto text-center text-white/55 text-[1.05rem] leading-[1.9] font-light mb-14'>
          I do not just share information. I create transformation. My approach
          starts at your core, works through what you believe, and results in
          what you build. Every strategy is rooted in integrity, long-term
          systems thinking, and a deep commitment to your growth.
        </p>

        <div className='grid grid-cols-4 gap-0.5 bg-black/5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className='flex flex-col items-start py-8 px-6 bg-black/20 border border-white/5 transition-colors duration-300 hover:bg-black/35'>
              <div className='text-[1.8rem] mb-4'>{pillar.icon}</div>
              <h3 className='font-playfair text-[1.1rem] font-bold text-brand-gold-light mb-2.5'>
                {pillar.title}
              </h3>
              <p className='text-[0.82rem] leading-[1.7] text-white/40 font-light'>
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

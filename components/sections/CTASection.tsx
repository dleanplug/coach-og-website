export function CTASection() {
  return (
    <section
      id='cta'
      className='relative bg-linear-135 from-brand-red-dark via-brand-red to-brand-red-mid py-[100px] page-padding text-center flex flex-col items-center overflow-hidden max-lg:py-20'>
      {/* Decorative Diagonal Lines */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.015]'
        style={{
          background:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)",
        }}
      />

      <div className='relative z-10 flex flex-col items-center'>
        <span className='text-[0.65rem] tracking-[4px] uppercase text-accent mb-5 font-bold block'>
          Ready to Begin Your Transformation?
        </span>

        <h2 className='font-playfair text-white text-[clamp(2.4rem,4vw,4rem)] font-black leading-[1.1] mb-5'>
          Your Growth Is Someone
          <em className='font- italic text-accent block mt-2'>
            Else&apos;s Miracle
          </em>
        </h2>

        <p className='text-white/60 text-base max-w-[520px] leading-[1.85] font-light mb-11'>
          When you become the best version of yourself, you become a resource to
          the people around you. That is the Coach OG mandate, and it is what
          every session is built to achieve.
        </p>

        <a
          href='mailto:hello@coachobafemi.com'
          className='inline-block bg-white text-secondary px-[52px] py-[18px] rounded-[2px] text-[0.75rem] tracking-[3px] font-bold uppercase transition-all hover:bg-accent hover:text-secondary hover:-translate-y-0.5 shadow-xl'>
          Let&apos;s Work Together
        </a>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { coachTags } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id='hero'
      className='min-h-screen bg-secondary grid grid-cols-2 pt-20 relative overflow-hidden max-lg:grid-cols-1'>
      {/* Background pattern */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(139,26,26,0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201,145,61,0.12) 0%, transparent 50%),
            repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px)
          `,
        }}
      />

      {/* Left column */}
      <div className='flex flex-col justify-center px-20 py-20 relative z-10 animate-[fadeUp_1s_0.3s_both] max-lg:px-6 max-lg:py-16'>
        {/* Eyebrow */}
        <div className='flex items-center gap-3.5 text-[0.68rem] tracking-[5px] uppercase text-accent mb-7'>
          <span className='w-9 h-px bg-accent shrink-0' aria-hidden='true' />
          Your Transformation Starts Here
        </div>

        {/* Title */}
        <h1 className='font-playfair text-[clamp(3.2rem,5vw,5.5rem)] font-black leading-none text-white mb-2.5'>
          Coach <span className='italic text-accent'>Obafemi</span>
        </h1>

        {/* Sub-identity */}
        <div className='font-display text-base tracking-[8px] text-white/35 mb-8'>
          Also known as OG
        </div>

        {/* Tag badges */}
        <div className='flex flex-wrap gap-2 mb-8'>
          {coachTags.map(({ label, highlight }) => (
            <span
              key={label}
              className={
                highlight
                  ? "text-[0.65rem] tracking-[1.5px] uppercase border border-accent text-accent px-3 py-1 rounded-[2px]"
                  : "text-[0.65rem] tracking-[1.5px] uppercase border border-accent/35 text-white/50 px-3 py-1 rounded-[2px]"
              }>
              {label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className='text-base leading-[1.85] text-white/55 max-w-[460px] mb-11 font-light'>
          I help business owners, entrepreneurs, and career professionals{" "}
          <em className='not-italic text-white/85 font-medium'>
            see who they truly are
          </em>{" "}
          and build the systems, clarity, and strategy to become everything they
          were designed to be. From the inside out.
        </p>

        {/* Actions */}
        <div className='flex gap-3.5 flex-wrap'>
          <Link
            href='#cta'
            className='inline-block bg-primary text-white px-9 py-[15px] rounded-[2px] text-[0.72rem] tracking-[2.5px] uppercase font-semibold border border-brand-red-mid transition-all hover:bg-accent hover:border-accent hover:-translate-y-0.5 no-underline'>
            Start Your Journey
          </Link>
          <Link
            href='#about'
            className='inline-block border border-accent/50 text-accent px-9 py-[15px] rounded-[2px] text-[0.72rem] tracking-[2.5px] uppercase font-medium transition-all hover:bg-accent hover:text-secondary hover:-translate-y-0.5 no-underline'>
            About Coach OG
          </Link>
        </div>
      </div>

      {/* Right column — photo placeholder */}
      <div className='relative flex items-center justify-center px-20 py-20 animate-[fadeUp_1s_0.5s_both] z-10 max-lg:hidden'>
        <div className='relative w-full max-w-[420px]'>
          {/* Offset border frame */}
          <div
            aria-hidden='true'
            className='absolute top-6 -right-6 w-full h-full border border-accent/30 rounded-[4px]'
          />

          {/* Photo box */}
          <div className='w-full aspect-3/4 rounded-[4px] relative z-10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]'>
            <Image
              src='/coach-obafemi-hero.png'
              alt='Coach Obafemi'
              fill
              sizes="(max-width: 1024px) 0vw, 420px"
              className='object-cover object-top'
              priority
            />

            {/* Gradient overlay */}
            <div
              aria-hidden='true'
              className='absolute bottom-0 left-0 right-0 h-1/2 z-0 pointer-events-none'
              style={{
                background:
                  "linear-gradient(to top, rgba(10,17,40,0.95) 0%, rgba(10,17,40,0.6) 50%, transparent 100%)",
              }}
            />

            {/* Name badge */}
            <div className='absolute bottom-10 left-0 right-0 z-10 px-7 py-6'>
              <div className='font-playfair text-2xl font-bold text-white tracking-[1px]'>
                Coach Obafemi
              </div>
              <div className='text-[0.68rem] tracking-[2px] uppercase text-accent mt-1'>
                Business &amp; Life Transformation Coach
              </div>
            </div>
          </div>

          {/* Floating stat */}
          <div className='absolute -bottom-12 -left-8 z-20 bg-accent text-secondary px-6 py-3 rounded-[4px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] min-w-[160px]'>
            <h3 className='font-playfair text-[2.8rem] font-black leading-none text-secondary'>
              500+
            </h3>
            <p className='text-[0.62rem] tracking-[2px] uppercase text-secondary/85 mt-1'>
              Lives Transformed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

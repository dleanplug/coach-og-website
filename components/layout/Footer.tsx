import Link from "next/link";
import { navLinks, quickLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className='bg-secondary pt-14 pb-9 page-padding  max-lg:pt-12 max-lg:pb-7'>
      <div className='grid grid-cols-[2fr_1fr_1fr] gap-[60px] pb-11 border-b border-white/6 max-lg:grid-cols-1 max-lg:gap-8'>
        {/* Brand column */}
        <div>
          <div className='font-alumni text-[2rem] tracking-[5px] text-accent mb-3 uppercase'>
            Coach OG
          </div>
          <p className='text-[0.85rem] text-white/35 leading-[1.7] font-light mb-5 max-w-[300px]'>
            Coach Obafemi Samson Ogunyoye. Business Coach. Career Coach. Life
            Coach. Performance Coach. Behavioral Coach. Financial Expert.
            Digital Strategist. AI Coach. Futurist.
          </p>
          <div className='text-[0.7rem] tracking-[1px] text-white/25'>
            Built from the inside out. Driven by purpose. Powered by faith.
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <div className='text-[0.65rem] tracking-[3px] uppercase text-accent mb-5'>
            Navigation
          </div>
          <ul className='flex flex-col gap-2.5 list-none'>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='text-[0.82rem] text-white/40 no-underline transition-colors hover:text-accent'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links column */}
        <div>
          <div className='text-[0.65rem] tracking-[3px] uppercase text-accent mb-5'>
            Quick Links
          </div>
          <ul className='flex flex-col gap-2.5 list-none'>
            {quickLinks.map(({ href, label, external }) => (
              <li key={href}>
                <Link
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className='text-[0.82rem] text-white/40 no-underline transition-colors hover:text-accent'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='pt-7 flex justify-between items-center text-[0.72rem] text-white/20 max-lg:flex-col max-lg:gap-2.5 max-lg:text-center'>
        <span>© 2026 Coach Obafemi Samson Ogunyoye. All rights reserved.</span>
        <span>Designed for impact. Built for legacy.</span>
      </div>
    </footer>
  );
}

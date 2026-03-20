import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between page-padding py-[18px] bg-secondary/95 backdrop-blur-lg border-b border-accent/20 animate-[fadeDown_0.8s_ease_both] '>
      <Link
        href='#hero'
        className='flex items-center gap-4 font-display text-2xl tracking-[4px] text-accent uppercase'>
        <Image src='/logo-white.png' alt='OG Logo' width={60} height={60} />
        {/* Coach OG */}
      </Link>

      <ul className='flex gap-8 list-none max-lg:hidden'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className='text-[0.73rem] tracking-[2px] uppercase text-white/55 font-medium transition-colors hover:text-accent'>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href='#cta'
        className='bg-primary text-primary-foreground border border-primary/80 rounded-[2px] px-6 py-2.5 text-[0.72rem] tracking-[2px] uppercase font-semibold hover:bg-accent hover:text-secondary transition-colors no-underline'>
        Work With Me
      </Link>
    </nav>
  );
}

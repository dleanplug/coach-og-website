import Link from "next/link";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  bannerText: string;
  bannerClass: string;
  type: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  className?: string;
}

export function ResourceCard({
  bannerText,
  bannerClass,
  type,
  title,
  description,
  linkLabel,
  href,
  className,
}: ResourceCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[4px] overflow-hidden border border-accent/20 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)]",
        className,
      )}>
      {/* Banner */}
      <div
        className={cn(
          "relative h-[140px] flex items-center justify-center overflow-hidden",
          bannerClass,
        )}>
        <span
          aria-hidden='true'
          className='font-alumni text-5xl tracking-[6px] text-white/12 select-none pointer-events-none'>
          {bannerText}
        </span>
        <span className='absolute top-3 right-3 bg-white/12 backdrop-blur-md text-white/70 text-[0.6rem] tracking-[2px] uppercase px-2.5 py-1 rounded-[2px]'>
          {type}
        </span>
      </div>

      {/* Body */}
      <div className='px-[22px] pt-[22px] pb-[26px]'>
        <h3 className='font-playfair text-[1.1rem] font-bold text-text-dark mb-2 leading-[1.3]'>
          {title}
        </h3>
        <p className='text-[0.82rem] text-text-muted leading-[1.6] mb-[18px] font-light'>
          {description}
        </p>
        <Link
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1.5 text-[0.7rem] tracking-[2px] uppercase text-primary font-semibold no-underline transition-[gap] hover:gap-2.5'>
          {linkLabel} <span>→</span>
        </Link>
      </div>
    </div>
  );
}

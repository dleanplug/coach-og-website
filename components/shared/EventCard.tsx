import Link from "next/link";
import { cn } from "@/lib/utils";

interface EventDetail {
  icon: string;
  text: string;
}

interface EventCardProps {
  bannerText: string;
  bannerClass?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  details?: EventDetail[];
  strikePrice?: string;
  mainPrice?: string;
  ctaLabel: string;
  ctaHref: string;
  partners?: string[];
  compact?: boolean;
  className?: string;
}

export function EventCard({
  bannerText,
  bannerClass,
  badge,
  title,
  subtitle,
  details,
  strikePrice,
  mainPrice,
  ctaLabel,
  ctaHref,
  partners,
  compact = false,
  className,
}: EventCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[4px] overflow-hidden border border-accent/20 bg-card transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] h-full",
        className,
      )}>
      {/* Banner */}
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden",
          compact ? "h-[140px]" : "h-[220px]",
          bannerClass ??
            "bg-linear-to-br from-brand-red-dark via-primary to-[#c23030]",
        )}>
        <span
          aria-hidden='true'
          className='font-display text-[2.5rem] tracking-[4px] text-white/8 text-center px-5 select-none pointer-events-none'>
          {bannerText}
        </span>
        {badge && (
          <span className='absolute top-4 left-4 bg-accent text-secondary text-[0.6rem] tracking-[2.5px] uppercase px-3 py-1 rounded-[2px] font-bold'>
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className={cn("px-7", compact ? "pt-5 pb-6" : "pt-7 pb-8")}>
        <h3
          className={cn(
            "font-playfair font-bold text-text-dark leading-[1.3] mb-2.5",
            compact ? "text-[1.05rem]" : "text-[1.3rem]",
          )}>
          {title}
        </h3>

        {subtitle && (
          <p
            className={cn(
              "text-text-muted leading-[1.6] font-light mb-5",
              compact ? "text-[0.78rem] mb-3" : "text-[0.85rem]",
            )}>
            {subtitle}
          </p>
        )}

        {details && details.length > 0 && (
          <div className='flex flex-col gap-2 mb-6'>
            {details.map((d, i) => (
              <div
                key={i}
                className='flex items-center gap-2.5 text-[0.82rem] text-text-muted'>
                <span className='text-[0.9rem] w-[18px] text-center'>
                  {d.icon}
                </span>
                <span>{d.text}</span>
              </div>
            ))}
          </div>
        )}

        {(strikePrice || mainPrice) && (
          <div className='inline-flex gap-3 items-center mb-5'>
            {strikePrice && (
              <span className='text-[0.9rem] text-text-muted line-through'>
                {strikePrice}
              </span>
            )}
            {mainPrice && (
              <span className='font-playfair text-[1.3rem] font-bold text-primary'>
                {mainPrice}
              </span>
            )}
          </div>
        )}

        <Link
          href={ctaHref}
          className='ml-3 inline-flex justify-center items-center bg-primary text-primary-foreground border border-primary/80 rounded-[2px] px-4 py-3 text-[0.7rem] tracking-[2px] uppercase font-semibold hover:bg-accent hover:border-accent hover:text-secondary transition-all'
          {...(ctaHref.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}>
          {ctaLabel}
        </Link>

        {partners && partners.length > 0 && (
          <div className='flex items-center gap-2.5 mt-4'>
            <span className='text-[0.65rem] tracking-[1.5px] uppercase text-text-muted'>
              In partnership with
            </span>
            {partners.map((p) => (
              <span
                key={p}
                className='bg-warm-white border border-accent/20 px-3 py-1 rounded-[2px] text-[0.65rem] tracking-[1.5px] uppercase text-text-muted'>
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

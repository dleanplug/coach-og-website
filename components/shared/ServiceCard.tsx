import { cn } from "@/lib/utils";

interface ServiceCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({
  number,
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white px-9 py-10 border border-border overflow-hidden transition-all duration-300 hover:bg-warm-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]",
        className,
      )}>
      {/* Decorative red border on hover */}
      <div className='absolute left-0 top-0 bottom-0 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-[2px]' />

      {/* Watermark number */}
      <div className='absolute top-4 right-6 font-alumni font-extralight text-[4rem] text-black/3 leading-none pointer-events-none select-none'>
        {number}
      </div>

      <div className='text-[2rem] mb-6'>{icon}</div>
      <h3 className='font-playfair text-[1.25rem] font-bold text-text-dark mb-4 leading-tight'>
        {title}
      </h3>
      <p className='text-[0.9rem] leading-[1.8] text-text-muted font-light'>
        {description}
      </p>
    </div>
  );
}

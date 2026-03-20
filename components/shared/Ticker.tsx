"use client";

interface TickerProps {
  items: string[];
}

export function Ticker({ items }: TickerProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className='bg-brand-red-dark py-4 overflow-hidden whitespace-nowrap'
      aria-hidden='true'>
      <div
        className='inline-flex animate-[slide_30s_linear_infinite]'
        style={{ willChange: "transform" }}>
        {doubled.map((item, i) => (
          <span key={i} className='inline-flex items-center'>
            <span className='font-alumni text-[0.85rem] tracking-[5px] text-white/70 px-6 uppercase'>
              {item}
            </span>
            <span className='text-accent px-0'>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

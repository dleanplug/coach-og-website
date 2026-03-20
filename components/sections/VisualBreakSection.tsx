export function VisualBreakSection() {
  return (
    <div className='h-[380px] overflow-hidden relative grid grid-cols-[2fr_1fr_1fr] gap-1 max-lg:grid-cols-1 max-lg:h-auto'>
      {/* Panel 1 */}
      <div className='relative overflow-hidden group max-lg:h-[200px]'>
        <div className='w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 bg-linear-to-br from-primary to-brand-red-dark'>
          <div className='font-playfair text-[clamp(1.1rem,1.8vw,1.5rem)] italic text-white/85 px-9 py-8 leading-normal text-center'>
            &ldquo;Every external achievement is the harvest of an internal
            conversation.&rdquo;
          </div>
        </div>
        <div className='absolute bottom-5 left-5 text-[0.68rem] tracking-[3px] uppercase text-white/60 pointer-events-none'>
          Coach OG on Growth
        </div>
      </div>

      {/* Panel 2 */}
      <div className='relative overflow-hidden group max-lg:h-[200px]'>
        <div className='w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 bg-linear-to-br from-brand-navy-mid to-[#0d1520]'>
          <div className='font-alumni font-light text-[clamp(2.5rem,4vw,5rem)] tracking-[2px] text-white/12 text-center p-5'>
            COACH
          </div>
        </div>
        <div className='absolute bottom-5 left-5 text-[0.68rem] tracking-[3px] uppercase text-white/60 pointer-events-none'>
          Strategy
        </div>
      </div>

      {/* Panel 3 */}
      <div className='relative overflow-hidden group max-lg:h-[200px]'>
        <div className='w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 bg-linear-to-br from-[#3a2800] to-secondary'>
          <div className='font-alumni font-light text-[clamp(2.5rem,4vw,5rem)] tracking-[2px] text-white/12 text-center p-5'>
            BUILD
          </div>
        </div>
        <div className='absolute bottom-5 left-5 text-[0.68rem] tracking-[3px] uppercase text-white/60 pointer-events-none'>
          Legacy
        </div>
      </div>
    </div>
  );
}

import { SectionHeading } from "@/components/shared/SectionHeading";
import { PodcastEqualizer } from "@/components/shared/PodcastEqualizer";

export function PodcastSection() {
  return (
    <section id="podcast" className="reveal page-padding py-[100px] bg-secondary text-white  max-lg:py-[72px]">
      <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12">
        {/* Left column */}
        <div>
          <SectionHeading
            tag="The Inside-Out Audio Experience"
            title={<>The <em className="italic text-accent">Coach OG</em> Podcast</>}
            light
          />
          
          <p className="text-[0.9rem] leading-[1.8] text-white/60 mb-8 max-w-[480px]">
            Deep dives into behavioral psychology, market dynamics, career positioning, and the unspoken truths of sustainable success. Listen weekly across all major platforms.
          </p>
          
          <div className="flex gap-4 mb-2 flex-wrap">
            {["Spotify", "Apple Podcasts", "Google Podcasts"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-[2px] text-[0.7rem] tracking-[1.5px] uppercase text-white/80 transition-all hover:bg-accent hover:text-secondary hover:border-accent"
              >
                {platform}
              </a>
            ))}
          </div>
          
          <PodcastEqualizer />
        </div>

        {/* Right column — latest episode card */}
        <div className="relative p-10 bg-linear-to-br from-[#16234b] to-secondary border border-white/8 rounded-[4px] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          <div className="text-[0.62rem] tracking-[3px] uppercase text-accent mb-4 border border-accent/30 inline-block px-3 py-1 rounded-[2px]">
            Latest Episode
          </div>
          <h3 className="font-playfair text-[1.6rem] font-bold text-white leading-[1.2] mb-3">
            Why Your Business Structure is Rejecting Capital
          </h3>
          <p className="text-[0.8rem] text-white/50 leading-[1.6] mb-6">
            In this episode, Coach OG breaks down the invisible barriers that prevent SMEs from scaling beyond their first major revenue milestone...
          </p>
          
          {/* Audio player UI mockup */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <button
              className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-secondary text-xl transition-transform hover:scale-105"
              aria-label="Play episode"
            >
              ▶
            </button>
            <div className="flex-1">
              <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
                <div className="h-full bg-accent w-1/3" />
              </div>
              <div className="flex justify-between text-[0.6rem] text-white/40 mt-1.5 font-mono">
                <span>15:42</span>
                <span>45:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

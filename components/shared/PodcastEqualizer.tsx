"use client";

const bars = [
  { height: "40%", delay: "0s" },
  { height: "80%", delay: "0.1s" },
  { height: "60%", delay: "0.2s" },
  { height: "100%", delay: "0.3s" },
  { height: "70%", delay: "0.4s" },
  { height: "50%", delay: "0.5s" },
  { height: "90%", delay: "0.6s" },
];

export function PodcastEqualizer() {
  return (
    <div className="flex items-end gap-1 mt-6 h-8">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-1 rounded-[2px] bg-accent animate-[eq_0.8s_ease-in-out_infinite_alternate]"
          style={{ height: bar.height, animationDelay: bar.delay }}
        />
      ))}
    </div>
  );
}

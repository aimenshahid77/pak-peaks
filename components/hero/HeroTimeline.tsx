"use client";

import { motion } from "framer-motion";
import { SLIDES } from "./slides";

interface HeroTimelineProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function HeroTimeline({ activeIndex, onSelect }: HeroTimelineProps) {
  const timelineTop = `calc(${(activeIndex / (SLIDES.length - 1)) * 100}% - 7px)`;

  return (
    <div className="absolute left-5 top-24 z-30 hidden h-[68vh] flex-col items-center md:flex">
      <div className="relative h-full w-7">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/22" />
        <motion.div
          className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-white/60 bg-white shadow-[0_0_0_7px_rgba(255,255,255,0.13)]"
          animate={{ top: timelineTop }}
          transition={{ type: "spring", stiffness: 190, damping: 26 }}
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => onSelect(index)}
              className="relative flex h-7 w-7 items-center justify-center"
              aria-label={`Show ${slide.title}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-transparent" : "bg-white/45"
                }`}
              />
              {index === activeIndex && (
                <span className="absolute left-7 rounded-full bg-white/18 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

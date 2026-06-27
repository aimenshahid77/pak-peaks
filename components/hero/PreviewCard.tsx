"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TourSlide } from "@/types/slider";

interface PreviewCardProps {
  slide: TourSlide;
  isActive: boolean;
  onClick: () => void;
}

export default function PreviewCard({ slide, isActive, onClick }: PreviewCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group w-[145px] min-w-[145px] snap-start text-left md:w-[170px] md:min-w-[170px] lg:w-[195px] lg:min-w-[195px]"
      aria-pressed={isActive}
    >
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="line-clamp-1 text-xs font-bold text-white">{slide.title}</p>
          <div className="mt-1 flex gap-1">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={`h-1 w-1 rounded-full ${dot < 4 ? "bg-white/80" : "bg-white/30"
                  }`}
              />
            ))}
          </div>
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
          {slide.category}
        </span>
      </div>

      <div className="relative h-[200px] overflow-hidden rounded-md border border-white/12 bg-white/10 shadow-2xl shadow-black/25 md:h-[280px]">
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          fill
          sizes="(max-width: 768px) 130px, 170px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/5" />
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-lg">
          <span className="h-4 w-3 rounded-b-sm rounded-t-[1px] border-2 border-current border-t-0" />
        </div>
        <div
          className={`absolute inset-0 rounded-md transition ${isActive ? "ring-2 ring-white/85" : "ring-0 ring-white/0"
            }`}
        />
      </div>
    </motion.button>
  );
}

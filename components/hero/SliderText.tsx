"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { TourSlide } from "@/types/slider";

interface SliderTextProps {
  slide: TourSlide;
  activeIndex: number;
  onExplore: () => void;
}

const categoryLabels: Record<TourSlide["category"], string> = {
  Wheels: "Tours on Wheels",
  Foot: "Tours on Foot",
};

export default function SliderText({
  slide,
  activeIndex,
  onExplore,
}: SliderTextProps) {
  const titleWords = slide.title.split(" ");

  return (
    <div className="absolute inset-y-0 left-0 z-30 flex w-full flex-col justify-end px-8 pb-64 pt-28 md:w-[55%] md:px-20 md:pb-32 xl:px-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-3xl"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
            }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/90"
          >
            Pak Peaks / {categoryLabels[slide.category]}
          </motion.p>

          <h1 className="mb-4 overflow-hidden">
            <span className="flex flex-wrap gap-x-4 gap-y-1">
              {titleWords.map((word, index) => (
                <span key={word} className="inline-block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: "105%", opacity: 0 },
                      visible: {
                        y: "0%",
                        opacity: 1,
                        transition: {
                          duration: 0.72,
                          delay: index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                      exit: {
                        y: "-105%",
                        opacity: 0,
                        transition: { duration: 0.28, delay: index * 0.03 },
                      },
                    }}
                    className="block text-[clamp(3rem,10vw,6.6rem)] font-black uppercase leading-[0.92] tracking-normal text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.55, delay: 0.35 },
              },
              exit: { opacity: 0, transition: { duration: 0.15 } },
            }}
            className="mb-4 h-px w-full max-w-xl origin-left bg-white/55"
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: 0.45 },
              },
              exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
            }}
            className="max-w-xl text-sm leading-7 text-white/78 md:text-[15px]"
          >
            {slide.description}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.58 },
              },
              exit: { opacity: 0, transition: { duration: 0.15 } },
            }}
            className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58"
          >
            <span>{slide.duration}</span>
            <span>{slide.elevation}</span>
            <span>{slide.bestSeason}</span>
          </motion.div>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 },
              },
              exit: { opacity: 0, transition: { duration: 0.15 } },
            }}
            onClick={onExplore}
            className="mt-7 inline-flex h-14 items-center gap-5 rounded-md bg-sky-600 px-7 text-sm font-bold text-white shadow-2xl shadow-sky-950/40 transition-all hover:bg-sky-500 active:scale-95"
          >
            Explore
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeroTimeline from "./HeroTimeline";
import PreviewCard from "./PreviewCard";
import SliderText from "./SliderText";
import { SLIDES } from "./slides";

function NavArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
      aria-label={isPrev ? "Previous slide" : "Next slide"}
    >
      <svg
        className={`h-4 w-4 text-white ${isPrev ? "rotate-180" : ""}`}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </motion.button>
  );
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = (index + SLIDES.length) % SLIDES.length;
      setDirection(index >= activeIndex ? 1 : -1);
      setActiveIndex(nextIndex);
    },
    [activeIndex]
  );

  const activeSlide = SLIDES[activeIndex];
  const railSlides = [
    ...SLIDES.slice(activeIndex + 1),
    ...SLIDES.slice(0, activeIndex),
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeSlide.id}
          custom={direction}
          variants={{
            enter: (value: number) => ({ opacity: 0, scale: 1.06, x: value * 26 }),
            center: {
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            },
            exit: (value: number) => ({
              opacity: 0,
              scale: 0.98,
              x: value * -26,
              transition: { duration: 0.55, ease: "easeInOut" },
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={activeSlide.imageUrl}
            alt={activeSlide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.0)_78%)]" />

      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,transparent_25%,rgba(0,0,0,0.35)_100%)]" />

      <HeroTimeline activeIndex={activeIndex} onSelect={goTo} />
      <SliderText
        slide={activeSlide}
        activeIndex={activeIndex}
        onExplore={() => goTo(activeIndex + 1)}
      />
      <div className="absolute bottom-24 left-8 right-0 z-30 md:bottom-auto md:left-auto md:right-4 md:top-[18%] md:w-[42vw] lg:w-[44vw] xl:w-[46vw] lg:right-6 xl:right-8">
        <div className="flex snap-x gap-2 overflow-x-auto pb-4 pr-2 scrollbar-hide">
          {railSlides.map((slide, railIndex) => {
            const slideIndex = SLIDES.findIndex((item) => item.id === slide.id);

            return (
              <PreviewCard
                key={`${slide.id}-${railIndex}`}
                slide={slide}
                isActive={slideIndex === activeIndex}
                onClick={() => goTo(slideIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

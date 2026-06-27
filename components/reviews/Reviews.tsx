"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Barlow_Condensed } from "next/font/google";
import { REVIEWS } from "./reviewsData";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const total = REVIEWS.length;

    const goTo = (newIndex: number) => {
        setDirection(newIndex > index ? 1 : -1);
        setIndex((newIndex + total) % total);
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.x < -80) goTo(index + 1);
        else if (info.offset.x > 80) goTo(index - 1);
    };

    const prevReview = REVIEWS[(index - 1 + total) % total];
    const nextReview = REVIEWS[(index + 1) % total];
    const activeReview = REVIEWS[index];

    return (
        <section
            id="reviews"
            className="relative bg-sky-500 py-24 px-6 md:px-12 xl:px-24 overflow-hidden"
        >
            <div
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0"
                style={{
                    background:
                        "linear-gradient(to bottom, #f5f7fa 0%, rgba(245,247,250,0) 100%)",
                }}
            />

            <div className="relative z-10 max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2
                        className={`${barlow.className} text-white text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight`}
                    >
                        What travelers say <br className="hidden md:block" /> about us
                    </h2>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => goTo(index - 1)}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-600 hover:bg-sky-50 transition-colors shadow-md"
                            aria-label="Previous review"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => goTo(index + 1)}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-600 hover:bg-sky-50 transition-colors shadow-md"
                            aria-label="Next review"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[420px] md:h-[400px] flex items-center justify-center">
                    <div className="hidden lg:block absolute left-0 w-[260px] h-[320px] rounded-[28px] bg-white/15 px-7 py-7 select-none pointer-events-none">
                        <div className="flex gap-0.5 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    className={`h-3.5 w-3.5 ${s <= prevReview.rating
                                        ? "fill-white/50 text-white/50"
                                        : "text-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed line-clamp-5">
                            {prevReview.text}
                        </p>
                        <div className="mt-6">
                            <p className="text-white/50 text-sm font-bold">{prevReview.name}</p>
                            <p className="text-white/30 text-xs">{prevReview.role}</p>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute right-0 w-[260px] h-[320px] rounded-[28px] bg-white/15 px-7 py-7 select-none pointer-events-none">
                        <div className="flex gap-0.5 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    className={`h-3.5 w-3.5 ${s <= nextReview.rating
                                        ? "fill-white/50 text-white/50"
                                        : "text-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed line-clamp-5">
                            {nextReview.text}
                        </p>
                        <div className="mt-6">
                            <p className="text-white/50 text-sm font-bold">{nextReview.name}</p>
                            <p className="text-white/30 text-xs">{nextReview.role}</p>
                        </div>
                    </div>

                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeReview.id}
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
                                center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                                exit: (dir: number) => ({ opacity: 0, x: dir * -60, transition: { duration: 0.3 } }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.6}
                            onDragEnd={handleDragEnd}
                            className="relative z-10 w-full max-w-[680px] h-[360px] md:h-[340px] rounded-[28px] bg-[#f5f7fa] shadow-2xl shadow-sky-900/20 cursor-grab active:cursor-grabbing overflow-hidden"
                        >
                            <div className="flex h-full flex-col md:flex-row">
                                {/* Text */}
                                <div className="flex-1 flex flex-col justify-center px-8 py-8 md:px-10 md:py-10">
                                    <div className="flex gap-0.5 mb-4">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star
                                                key={s}
                                                className={`h-4 w-4 ${s <= activeReview.rating
                                                    ? "fill-amber-400 text-amber-400"
                                                    : "text-slate-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                                        {activeReview.text}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-6 bg-sky-500" />
                                        <div>
                                            <p className="text-gray-900 font-bold text-sm">
                                                {activeReview.name}
                                            </p>
                                            <p className="text-gray-400 text-xs">{activeReview.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative hidden md:block w-[42%] shrink-0">
                                    <Image
                                        src={activeReview.imageUrl}
                                        alt={activeReview.name}
                                        fill
                                        sizes="280px"
                                        className="object-cover object-top"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fa] via-transparent to-transparent w-12" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex md:hidden items-center justify-center gap-3 mt-8">
                    <button
                        onClick={() => goTo(index - 1)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-600 shadow-md"
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => goTo(index + 1)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-600 shadow-md"
                        aria-label="Next review"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Barlow_Condensed } from "next/font/google";
import { FAQS } from "./faqData";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

export default function Faq() {
    const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId((current) => (current === id ? null : id));
    };

    return (
        <section id="faq" className="bg-[#f5f7fa] py-24 px-6 md:px-12 xl:px-24">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
                    {/* LEFT — sticky intro column */}
                    <div className="md:col-span-4">
                        <div className="md:sticky md:top-28">
                            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-600 mb-5">
                                FAQ
                            </span>

                            <h2
                                className={`${barlow.className} text-gray-900 text-[clamp(2.2rem,4.5vw,3.2rem)] font-black uppercase leading-[0.95] mb-5`}
                            >
                                Got Questions?{" "}
                                <span className="text-sky-500">We Have Answers.</span>
                            </h2>

                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-7">
                                Everything you need to know before planning your next
                                expedition across Pakistan&apos;s northern frontiers.
                            </p>


                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-6 py-3 transition-colors"
                            >
                                Plan Your Trip
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — accordion list */}
                    <div className="md:col-span-8 flex flex-col gap-4">
                        {FAQS.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggle(faq.id)}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-gray-900 font-bold text-sm md:text-base">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 ${isOpen ? "rotate-180 bg-sky-500" : ""
                                                }`}
                                        >
                                            <ChevronDown
                                                className={`h-4 w-4 ${isOpen ? "text-white" : "text-gray-500"
                                                    }`}
                                            />
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section >
    );
}
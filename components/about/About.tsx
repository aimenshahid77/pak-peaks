"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

const STATS = [
    { value: "500+", label: "Tours Completed" },
    { value: "12+", label: "Years Experience" },
    { value: "98%", label: "Happy Travelers" },
    { value: "20+", label: "Destinations" },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-white px-6 pt-0 pb-24 md:px-12 xl:px-24"
        >
            <div className="max-w-screen-xl mx-auto">

                {/* MAIN ROW */}
                <div className="relative flex flex-row items-stretch gap-6 mb-16">

                    {/* LEFT — ABOUT US at top, tagline at bottom */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-[200px] shrink-0 flex flex-col justify-between"
                    >
                        {/* ABOUT + US stacked at top */}
                        <div>
                            <h2
                                className={`${barlow.className} text-[90px] font-black uppercase leading-[0.85] tracking-tight text-gray-900 mt-7`}
                            >
                                ABOUT
                            </h2>
                            <h2
                                className={`${barlow.className} text-[90px] font-black uppercase leading-[0.85] tracking-tight text-sky-500`}
                            >
                                US
                            </h2>
                        </div>

                        {/* Tagline pushed to bottom */}
                        <div>
                            <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.22em] mb-2">
                                Pak Peaks Travels and Tours
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Boutique expeditions through northern Pakistan built for
                                mountain roads, high trails, and thoughtful travel.
                            </p>
                        </div>
                    </motion.div>

                    {/* CENTER — image starts from mid, aligned with Our Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex-1 relative rounded-2xl overflow-hidden"
                        style={{ height: "260px", alignSelf: "flex-start", marginTop: "100px" }}
                    >
                        <Image
                            src="/destinations/hunza-valley.jpg"
                            alt="Hunza Valley"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* RIGHT — small image + Our Philosophy, all at bottom */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-[280px] shrink-0 flex flex-col gap-4 justify-end"
                    >
                        <div className="relative h-[130px] rounded-2xl overflow-hidden">
                            <Image
                                src="/destinations/fairy-meadows.jpg"
                                alt="Fairy Meadows"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="text-gray-900 text-xl font-black mb-2">
                                Our Philosophy
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                At Pak Peaks, we believe every journey to the mountains
                                should feel personal. Small groups, handpicked guesthouses,
                                and guides who grew up in these valleys. That is what sets
                                us apart.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* STATS ROW */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4"
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col gap-1"
                        >
                            <span
                                className={`${barlow.className} text-5xl font-black text-sky-500`}
                            >
                                {stat.value}
                            </span>
                            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
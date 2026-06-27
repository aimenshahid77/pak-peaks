"use client";

import { Barlow_Condensed } from "next/font/google";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

const CircularGallery = dynamic(() => import("./CircularGallery"), {
    ssr: false,
});

const DESTINATIONS = [
    {
        image: "/destinations/hunza-valley.jpg",
        text: "Hunza Valley",
    },
    {
        image: "/destinations/skardu.jpg",
        text: "Skardu",
    },
    {
        image: "/destinations/fairy-meadows.jpg",
        text: "Fairy Meadows",
    },
    {
        image: "/destinations/naran-kaghan.jpg",
        text: "Naran Kaghan",
    },
    {
        image: "/destinations/k2-base-camp.jpg",
        text: "K2 Base Camp",
    },
    {
        image: "/destinations/khunjerab-pass.jpg",
        text: "Khunjerab Pass",
    },
    {
        image: "/destinations/swat.jpg",
        text: "Swat Valley",
    },
    {
        image: "/destinations/neelum-valley.jpg",
        text: "Neelum Valley",
    },
    {
        image: "/destinations/chitral.jpg",
        text: "Chitral",
    },
];

export default function Destinations() {
    return (
        <section
            id="destinations"
            className="bg-[#0a0f1e] py-20 overflow-hidden"
        >
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 xl:px-24 mb-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                            Where Do You Want To Go
                        </p>
                        <h2
                            className={`${barlow.className} text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-[0.88] text-white`}
                        >
                            OUR
                            <br />
                            DESTINATIONS
                        </h2>
                    </div>

                    <p className="text-white/50 text-sm max-w-sm leading-relaxed md:text-right">
                        Scroll through Pakistan's most breathtaking regions.
                        Every destination is a world of its own.
                    </p>
                </motion.div>
            </div>

            {/* Gallery — full width, no padding */}
            <div style={{ height: "600px", position: "relative", width: "100%" }}>
                <CircularGallery
                    items={DESTINATIONS}
                    bend={2}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollSpeed={2}
                    scrollEase={0.05}
                    font="bold 28px Poppins"
                    fontUrl="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
                />
            </div>
        </section>
    );
}
"use client";

import dynamic from "next/dynamic";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

const DomeGallery = dynamic(() => import("./DomeGallery"), {
    ssr: false,
});

const GALLERY_IMAGES = [
    { src: "/destinations/hunza-valley.jpg", alt: "Hunza Valley" },
    { src: "/destinations/skardu.jpg", alt: "Skardu" },
    { src: "/destinations/fairy-meadows.jpg", alt: "Fairy Meadows" },
    { src: "/destinations/k2-base-camp.jpg", alt: "K2 Base Camp" },
    { src: "/destinations/naran-kaghan.jpg", alt: "Naran Kaghan" },
    { src: "/destinations/khunjerab-pass.jpg", alt: "Khunjerab Pass" },
    { src: "/destinations/swat.jpg", alt: "Swat Valley" },
    { src: "/destinations/neelum-valley.jpg", alt: "Neelum Valley" },
    { src: "/destinations/chitral.jpg", alt: "Chitral" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="bg-[#f5f7fa] min-h-screen">
            <div className="px-6 md:px-12 xl:px-24 pt-20 pb-6">
                <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                    Our Work
                </p>
                <h2
                    className={`${barlow.className} text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-[0.88] text-gray-900`}
                >
                    PHOTO
                    <br />
                    GALLERY
                </h2>
            </div>

            {/* Dome — takes remaining height */}
            <div style={{ width: "100%", height: "80vh" }}>
                <DomeGallery
                    // images={GALLERY_IMAGES}
                    fit={0.8}
                    minRadius={600}
                    maxVerticalRotationDeg={0}
                    segments={34}
                    dragDampening={2}
                    grayscale={false}
                    overlayBlurColor="#f5f7fa"
                />
            </div>
        </section>
    );
}
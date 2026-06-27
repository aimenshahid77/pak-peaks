"use client";

import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { SERVICES } from "./servicesData";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

export default function Services() {
    return (
        <section id="services" className="bg-[#f5f7fa] pt-24 pb-12 px-6 md:px-12 xl:px-24">
            <div className="max-w-screen-xl mx-auto">
                <div className="mb-4 text-center md:text-left">
                    <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
                        What We Offer
                    </p>
                    <h2
                        className={`${barlow.className} text-gray-900 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tight mb-4`}
                    >
                        Our Services
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto md:mx-0">
                        Tailored trips across Pakistan&apos;s stunning northern landscapes.
                    </p>
                </div>
            </div>

            <ScrollStack
                useWindowScroll={true}
                itemDistance={120}
                itemScale={0.04}
                itemStackDistance={40}
                stackPosition="22%"
                scaleEndPosition="12%"
                baseScale={0.86}
                blurAmount={0.6}
            >
                {SERVICES.map((service) => (
                    <ScrollStackItem key={service.id}>
                        <div className="bg-white rounded-[28px] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                            <div className="flex flex-col md:flex-row md:items-stretch">
                                <div className="relative h-[260px] md:h-[340px] md:w-[46%] shrink-0">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 46vw"
                                        className="object-cover"
                                    />
                                    <div
                                        className={`${barlow.className} absolute top-5 left-5 text-white text-2xl font-black drop-shadow-md`}
                                    >
                                        {service.number}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center px-8 py-8 md:px-12">
                                    <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                                        {service.description}
                                    </p>
                                    <div className="mt-6 h-px w-16 bg-sky-500" />
                                </div>
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </section>
    );
}
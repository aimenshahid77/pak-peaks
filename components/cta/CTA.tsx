"use client";

import { motion } from "framer-motion";
import { Barlow_Condensed } from "next/font/google";
import { ArrowRight, Phone, Mail } from "lucide-react";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["800", "900"],
});

const TOUR_LINKS = [
    { label: "Hunza Valley", href: "#destinations" },
    { label: "Skardu", href: "#destinations" },
    { label: "Fairy Meadows", href: "#destinations" },
    { label: "Naran Kaghan", href: "#destinations" },
    { label: "K2 Base Camp", href: "#destinations" },
    { label: "Khunjerab Pass", href: "#destinations" },
];

const USEFUL_LINKS = [
    { label: "Tours", href: "#tours" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Destinations", href: "#destinations" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100064210866704",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/pak_peaks_tours",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        label: "Threads",
        href: "#",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.01v-.017c.027-3.579.877-6.43 2.528-8.474C5.845 1.207 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.797 3.109 3.327 5.408l-2.244.539c-.388-1.728-1.172-3.06-2.279-3.946C16.692 3.003 14.863 2.44 12.64 2.43h-.01c-2.873.02-5.016.86-6.37 2.499-1.353 1.638-2.043 4.022-2.063 7.075v.015c.02 3.049.71 5.433 2.063 7.075 1.354 1.639 3.497 2.48 6.37 2.499h.01c2.2-.013 3.834-.531 5.07-1.596 1.318-1.14 1.986-2.77 2.042-4.987H12.19V12.5h10.093l.003.31c.06 3.188-.802 5.662-2.563 7.35C18.003 21.907 15.398 23.981 12.186 24z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

export default function CTA() {
    return (
        <section id="contact" className="bg-[#0a0f1e] pt-24 pb-0 px-6 md:px-12 xl:px-24">
            <div className="max-w-screen-xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-16 border-b border-white/10"
                >
                    <div>
                        <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                            Ready to Explore?
                        </p>
                        <h2 className={`${barlow.className} text-white text-[clamp(3rem,7vw,5.5rem)] font-black uppercase leading-[0.88]`}>
                            Plan Your Next
                            <br />
                            <span className="text-sky-500">Adventure</span>
                        </h2>
                    </div>
                    <a
                        href="mailto:info@pakpeaks.org"
                        className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-full transition-colors self-start md:self-end shrink-0"
                    >
                        Get In Touch
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4 flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                                    <path d="M3 19 9 8l4 6 3-4 5 9H3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-white text-sm font-black uppercase tracking-wide leading-none">Pak Peaks</p>
                                <p className="text-white/40 text-[9px] uppercase tracking-[0.22em] mt-0.5">Travels and Tours</p>
                            </div>
                        </div>

                        <p className="text-white/40 text-xs leading-relaxed max-w-[240px]">
                            Boutique expeditions through northern Pakistan built for mountain roads, high trails, and thoughtful travel.
                        </p>

                        <div className="flex items-center gap-3">
                            {SOCIALS.map(({ svg, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors"
                                >
                                    {svg}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2.5">
                                <Phone className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                                <span className="text-white/60 text-xs">+92 334 5352749</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                                <a
                                    href="mailto:info@pakpeaks.org"
                                    className="text-white/60 text-xs hover:text-white transition-colors"
                                >
                                    info@pakpeaks.org
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-2"
                    >
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Tours</h4>
                        <ul className="flex flex-col gap-3">
                            {TOUR_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-white/45 text-xs hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="md:col-span-2"
                    >
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Useful Pages</h4>
                        <ul className="flex flex-col gap-3">
                            {USEFUL_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-white/45 text-xs hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-white/25 text-[10px]">
                        Copyright {new Date().getFullYear()} Pak Peaks Travels and Tours. All rights reserved.
                    </p>
                    <p className="text-white/25 text-[10px]">Built for the mountains.</p>
                </div>

            </div>
        </section>
    );
}
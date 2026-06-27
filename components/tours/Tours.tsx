"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TourCard from "./TourCard";
import { TOURS } from "./toursData";
import type { TourCategory } from "./toursData";

const CATEGORIES: TourCategory[] = ["All", "Wheels", "Foot", "Family", "Corporate"];
const DURATIONS = ["All", "3 Days", "5 Days", "6 Days", "7 Days", "10 Days", "21 Days"];
const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low", "Most Recent"];

export default function Tours() {
    const [activeCategory, setActiveCategory] = useState<TourCategory>("All");
    const [activeDuration, setActiveDuration] = useState("All");
    const [sortBy, setSortBy] = useState("Default");

    const filtered = TOURS.filter((tour) => {
        const catMatch = activeCategory === "All" || tour.category === activeCategory;
        const durMatch =
            activeDuration === "All" ||
            tour.duration.startsWith(activeDuration.replace(" Days", ""));
        return catMatch && durMatch;
    }).sort((a, b) => {
        if (sortBy === "Price: Low to High")
            return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
        if (sortBy === "Price: High to Low")
            return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
        return 0;
    });

    return (
        <section id="tours" className="bg-[#f5f7fa] py-24 px-6 md:px-12 xl:px-24">
            <div className="max-w-screen-xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">
                        Explore Our Packages
                    </p>
                    <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight">
                        Find Your Perfect <br />
                        <span className="text-sky-500">Tour Package</span>
                    </h2>
                </div>

                {/* Main layout: sidebar + content */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* LEFT SIDEBAR */}
                    <div className="md:w-56 shrink-0">
                        <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                            <h3 className="text-slate-900 font-bold text-base mb-4">
                                Package Offers
                            </h3>
                            <div className="flex flex-col gap-1">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeCategory === cat
                                            ? "bg-sky-500 text-white"
                                            : "text-slate-600 hover:bg-slate-50 border-b border-slate-100"
                                            }`}
                                    >
                                        {cat}
                                        {activeCategory === cat && (
                                            <span className="text-white text-base leading-none">›</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1">

                        {/* Sort + Duration row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                            <div className="flex gap-2 flex-wrap">
                                {DURATIONS.map((dur) => (
                                    <button
                                        key={dur}
                                        onClick={() => setActiveDuration(dur)}
                                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${activeDuration === dur
                                            ? "bg-slate-900 text-white"
                                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                                            }`}
                                    >
                                        {dur}
                                    </button>
                                ))}
                            </div>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-full outline-none cursor-pointer"
                            >
                                {SORT_OPTIONS.map((opt) => (
                                    <option key={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        {/* Cards grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                        >
                            {filtered.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                            {filtered.length === 0 && (
                                <p className="col-span-3 text-center text-slate-400 py-16">
                                    No tours match your filters.
                                </p>
                            )}
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
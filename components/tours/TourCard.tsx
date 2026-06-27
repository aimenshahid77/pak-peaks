"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Tour } from "./toursData";
import { MapPin, Clock, Star } from "lucide-react";

export default function TourCard({ tour }: { tour: Tour }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            {/* Tag */}
            {tour.tag && (
                <div className="absolute top-3 left-3 z-10 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {tour.tag}
                </div>
            )}

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={tour.imageUrl}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Location */}
                <div className="flex items-center gap-1 text-sky-500 text-xs font-semibold mb-1">
                    <MapPin className="h-3 w-3" />
                    {tour.location}
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-lg leading-tight mb-3">
                    {tour.title}
                </h3>

                {/* Meta row */}
                <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                    <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tour.duration}
                    </span>
                    <span>{tour.elevation}</span>
                    <span>{tour.bestSeason}</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 mb-4" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`h-3.5 w-3.5 ${star <= tour.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-slate-200"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center gap-3">
                        <span className="text-slate-900 font-bold text-sm">
                            {tour.price}
                        </span>
                        <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
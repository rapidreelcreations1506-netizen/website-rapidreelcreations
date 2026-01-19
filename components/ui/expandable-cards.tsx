"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export const ExpandableCards = ({
    items,
}: {
    items: {
        title: string;
        category: string;
        image: string;
        href: string;
        instagramUrl?: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col md:flex-row h-[900px] md:h-[500px] w-full gap-2 overflow-hidden bg-black">
            {items.map((item, index) => (
                <div
                    key={item.title}
                    className={cn(
                        "relative flex-1 h-full min-h-[200px] md:min-h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:flex-[3] group",
                        // removed conditional classes
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Dark Overlay */}
                    <div className={cn(
                        "absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-20",
                        // removed conditional classes
                    )} />

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none">
                        <div className={cn(
                            "transition-all duration-300 transform pointer-events-auto",
                            hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100" // Always visible
                        )}>
                            <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-500 border border-red-600/30 text-xs font-mono mb-2 backdrop-blur-md">
                                {item.category}
                            </span>
                            <h3 className={cn(
                                "font-bold text-white transition-all duration-300",
                                hoveredIndex === index ? "text-2xl md:text-4xl" : "text-xl"
                            )}>
                                {item.title}
                            </h3>

                            <div className={cn(
                                "overflow-hidden transition-all duration-500 flex flex-col sm:flex-row gap-3",
                                hoveredIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                            )}>
                                <Link href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-colors text-sm font-medium border border-white/10">
                                    <Play className="w-4 h-4 fill-current" /> View Case Study
                                </Link>

                                {item.instagramUrl && (
                                    <Link href={item.instagramUrl} target="_blank" className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-full backdrop-blur-md transition-all text-sm font-medium shadow-lg hover:shadow-pink-500/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                        Watch on Instagram
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Centered Play Button (Only visible on hover) - OPTIONAL decoration now */}
                    <div className={cn(
                        "absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300",
                        hoveredIndex === index ? "opacity-0 scale-150" : "opacity-0 scale-75" // Hiding this as we have explicit buttons now
                    )}>
                    </div>

                </div>
            ))}
        </div>
    );
};

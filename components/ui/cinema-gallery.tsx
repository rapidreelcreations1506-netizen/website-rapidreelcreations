"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    src: string;
}

export const CinemaGallery = ({ projects }: { projects: Project[] }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }, [projects.length]);

    // Auto-Scroll: Every 4 seconds, unless user is hovering
    useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [nextSlide, isHovering]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const INSTAGRAM_URL = "https://www.instagram.com/rapidreel_creations/";

    return (
        <div
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >

            {/* 1. Ambient Background (Blurred current image) */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={projects[index].src + "-bg"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0 bg-cover bg-center blur-3xl scale-110 opacity-30 brightness-50 pointer-events-none"
                    style={{ backgroundImage: `url(${projects[index].src})` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

            {/* 2. Main Content Container - Responsive Layout */}
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-24 pb-24 md:py-0 h-full">

                {/* TEXT SECTION (Left) */}
                <div className="flex-1 space-y-6 text-center md:text-left max-w-xl order-2 md:order-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={projects[index].id + "-text"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4 mx-auto md:mx-0">
                                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-white">{projects[index].category}</span>
                            </div>

                            <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-4 leading-tight min-h-[3rem] md:min-h-[5rem]">
                                {projects[index].title}
                            </h1>

                            <p className="text-zinc-300 text-sm md:text-xl leading-relaxed font-light mb-8 max-w-md mx-auto md:mx-0">
                                {projects[index].description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => window.open(INSTAGRAM_URL, "_blank")}
                                    className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-2 group transform active:scale-95"
                                >
                                    <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                                    Watch Project
                                </button>
                                <button
                                    onClick={() => window.open(INSTAGRAM_URL, "_blank")}
                                    className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2 transform active:scale-95"
                                >
                                    <Instagram className="w-5 h-5" />
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* IMAGE/VIDEO CARD (Right) */}
                <div className="flex-1 relative w-full flex items-center justify-center order-1 md:order-2 h-[400px] md:h-[600px] mb-8 md:mb-0">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={projects[index].id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.4 }
                            }}
                            className="absolute w-full max-w-[280px] md:max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                        >
                            <Image
                                src={projects[index].src}
                                alt={projects[index].title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Gloss Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* 3. Navigation Controls (Bottom) */}
            <div className="flex md:absolute bottom-8 md:bottom-10 left-0 right-0 items-center justify-center gap-6 z-20 pb-10 md:pb-0">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white backdrop-blur-md group active:scale-95"
                    aria-label="Previous Project"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="flex gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > index ? 1 : -1);
                                setIndex(idx);
                            }}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                idx === index ? "w-8 bg-red-600" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                            )}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white backdrop-blur-sm group active:scale-95"
                    aria-label="Next Project"
                >
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </div>
    );
};

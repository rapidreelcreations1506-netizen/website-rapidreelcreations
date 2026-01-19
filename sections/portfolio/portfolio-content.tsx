"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { Instagram, Youtube, ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { CardSpotlight } from "@/components/ui/card-spotlight";

// Data
const projects = [
    {
        title: "Neon City Run",
        role: "Fitness",
        category: "Gyms",
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "EcoBloom Reveal",
        role: "Brand",
        category: "Brands",
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "Tuscany Vows",
        role: "Wedding",
        category: "Weddings",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3200&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "PowerFit Transformation",
        role: "Promo",
        category: "Gyms",
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "Tech Expo 2025",
        role: "Event",
        category: "Events",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "Summer Vibes Vlog",
        role: "Travel",
        category: "Events",
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "Abstract Art",
        role: "Creative",
        category: "Brands",
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "Urban Drift",
        role: "Automotive",
        category: "Brands",
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
    {
        title: "Gaming Setup",
        role: "Tech",
        category: "Brands",
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/"
    },
];

export function PortfolioContent() {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Events", "Weddings", "Gyms", "Brands"];

    const filteredCards = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans overflow-x-hidden">
            <Navbar />

            {/* 1. Header Section with Spotlight */}
            <section className="relative pt-24 pb-12 text-center px-4 overflow-hidden">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-red-600">Portfolio</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                        Explore our collection of high-impact visuals. <br className="hidden md:block" />
                        Captured with precision. Edited for speed.
                    </p>
                </motion.div>
            </section>

            {/* 2. Modern Pill Filters */}
            <section className="sticky top-20 z-40 py-4 bg-black/80 backdrop-blur-md border-b border-white/5 mb-8">
                <div className="flex flex-wrap justify-center gap-3 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                                : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. The Grid (Responsive & Mobile Fitted) */}
            <section className="px-4 md:px-8 pb-10 min-h-[50vh]">
                {/* Mobile: 1 Column, Desktop: 3 Columns */}
                <FocusCards cards={filteredCards} />

                {/* Load More Button - Reduced Spacing */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => window.open("https://www.instagram.com/rapidreel_creations/", "_blank")}
                        className="px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors uppercase text-xs font-bold tracking-widest flex items-center gap-2 group"
                    >
                        Load More Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            {/* 4. Social Feed (Compact & Unique) */}
            <section className="py-12 bg-zinc-950 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Latest on Social</h2>
                        <p className="text-zinc-500">Daily updates from the field.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Instagram Card - Compact Height [280px] */}
                        <a href="https://www.instagram.com/rapidreel_creations/" target="_blank" className="block h-[280px] rounded-[24px]">
                            <CardSpotlight className="h-full rounded-[24px] border border-white/10 bg-black cursor-pointer hover:shadow-[0_0_50px_rgba(220,38,38,0.3)] transition-all duration-500 p-0 overflow-hidden relative group">
                                {/* Background: Visible & Enhanced */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611262588024-d12430b98169?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700" />

                                {/* Lite Red Hover Overlay */}
                                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                                {/* Readability Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 relative z-10">
                                    {/* Compact Icon */}
                                    <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <Instagram className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 text-white">Instagram</h3>
                                    <p className="text-zinc-300 text-xs mb-3 max-w-xs line-clamp-2">Behind the scenes, quick tips, and our latest viral hits.</p>
                                    <span className="text-white font-bold text-[10px] tracking-widest uppercase border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">Follow @rapidreel_creations</span>
                                </div>
                            </CardSpotlight>
                        </a>

                        {/* YouTube Card - Compact Height [280px] */}
                        <a href="https://www.youtube.com/@rapidreelcreations" target="_blank" className="block h-[280px] rounded-[24px]">
                            <CardSpotlight className="h-full rounded-[24px] border border-white/10 bg-black cursor-pointer hover:shadow-[0_0_50px_rgba(220,38,38,0.3)] transition-all duration-500 p-0 overflow-hidden relative group">
                                {/* Background: Visible & Enhanced */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2900&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700" />

                                {/* Lite Red Hover Overlay */}
                                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                                {/* Readability Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 relative z-10">
                                    {/* Compact Icon */}
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                                        <Youtube className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 text-white">YouTube</h3>
                                    <p className="text-zinc-300 text-xs mb-3 max-w-xs line-clamp-2">In-depth tutorials and 4K showreels.</p>
                                    <span className="text-white font-bold text-[10px] tracking-widest uppercase border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">Subscribe Channel</span>
                                </div>
                            </CardSpotlight>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}

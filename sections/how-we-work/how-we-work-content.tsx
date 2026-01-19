"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Sparkles, Aperture, Layers, CheckCircle2 } from "lucide-react";

export function HowWeWorkContent() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-4 text-center relative z-10">
                {/* Vibrant Red Ambience */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none -z-10 opacity-60" />

                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                    The <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">Rapid Reel</span> <br /> Workflow
                </h1>
                <p className="mt-6 font-medium text-lg md:text-xl text-neutral-200 max-w-lg mx-auto border-t border-b border-red-900/50 py-4 bg-black/30 backdrop-blur-sm">
                    We Shoot. We Edit. We Deliver. <br />
                    <span className="text-sm font-normal text-red-200/70 mt-2 block tracking-wider">YOUR END-TO-END PARTNER</span>
                </p>
            </div>

            {/* High-Gloss Grid */}
            <div className="container mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">

                    {/* Phase 01: Plan (Large) */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[400px] border border-white/10 hover:border-red-500/50 transition-all duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                        className=""
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="max-w-xs relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-white">
                                <div className="p-3 bg-red-600 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-red-500 drop-shadow-sm">Phase 01</span>
                            </div>
                            <h2 className="text-left text-3xl font-bold text-white mb-4 drop-shadow-md">
                                Strategic <br /><span className="text-neutral-400">Planning</span>
                            </h2>
                            <p className="text-left text-neutral-200 leading-relaxed font-medium">
                                Viral content isn't luck; it's engineering. We research your niche, identify winning hooks, and script content designed to capture attention in the first 3 seconds.
                            </p>
                        </div>
                        <Image
                            src="/images/home-reel-concert.png"
                            width={500}
                            height={500}
                            alt="Strategy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="absolute -right-4 lg:-right-[10%] -bottom-10 object-contain rounded-2xl opacity-100 group-hover:scale-105 transition-all duration-700 shadow-2xl"
                        />
                    </WobbleCard>

                    {/* Phase 02: Shoot (Standard) */}
                    <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-black border border-white/10 hover:border-red-500/50 transition-all duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-bl from-red-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="full relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-white">
                                <div className="p-3 bg-red-600 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                    <Aperture className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-red-500 drop-shadow-sm">Phase 02</span>
                            </div>
                            <h2 className="text-left text-3xl font-bold text-white mb-4 drop-shadow-md">
                                Agile <br /><span className="text-neutral-400">Production</span>
                            </h2>
                            <p className="mt-4 text-left text-neutral-200 leading-relaxed font-medium">
                                We are shooters at heart. Using high-end mobile and cinema gear, we capture authentic moments on-location with speed and precision.
                            </p>
                        </div>
                    </WobbleCard>

                    {/* Phase 03: Edit (Large) */}
                    <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[400px] bg-black border border-white/10 hover:border-red-500/50 transition-all duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="max-w-md relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-white">
                                <div className="p-3 bg-red-600 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                    <Layers className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-red-500 drop-shadow-sm">Phase 03</span>
                            </div>
                            <h2 className="text-left text-3xl font-bold text-white mb-4 drop-shadow-md">
                                Retention <br /><span className="text-neutral-400">Editing</span>
                            </h2>
                            <p className="mt-4 text-left text-neutral-200 leading-relaxed font-medium">
                                The edit is where the story comes alive. We use algorithmic pacing, dynamic captions, and sound design to ensure high-retention and engagement.
                            </p>
                        </div>
                        <Image
                            src="/images/portfolio-tech.png"
                            width={500}
                            height={500}
                            alt="Editing"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl opacity-100 group-hover:scale-105 transition-all duration-700 shadow-2xl"
                        />
                    </WobbleCard>

                    {/* Phase 04: Deliver (Standard) */}
                    <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-black border border-white/10 hover:border-red-500/50 transition-all duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-tl from-red-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="h-full relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-white">
                                <div className="p-3 bg-red-600 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-red-500 drop-shadow-sm">Phase 04</span>
                            </div>
                            <h2 className="text-left text-3xl font-bold text-white mb-4 drop-shadow-md">
                                Launch & <br /><span className="text-neutral-400">Grow</span>
                            </h2>
                            <p className="mt-4 text-left text-neutral-200 leading-relaxed font-medium">
                                Optimised delivery for Reels, Shorts, and TikTok. We provide the files, thumbnails, and strategy you need to dominate the feed.
                            </p>
                        </div>
                    </WobbleCard>
                </div>
            </div>

            <Footer />
        </main>
    );
}

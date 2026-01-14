"use client";
import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Zap, Film, HeartHandshake } from "lucide-react";

export function CorePhilosophySection() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                        Our <span className="text-red-600">DNA</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        The principles that drive every cut, transition, and delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-red-900 min-h-[250px] lg:min-h-[300px]"
                        className=""
                    >
                        <div className="max-w-xs">
                            <Zap className="w-10 h-10 text-white mb-4" />
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Speed is our <span className="text-red-200">Currency.</span>
                            </h2>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                In the age of attention, delay is death. We've engineered a workflow that eliminates latency, delivering broadcast-ready content while the event is still trending.
                            </p>
                        </div>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[250px] lg:min-h-[300px]">
                        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            <Film className="w-8 h-8 text-red-500 mb-4 inline-block mr-2" />
                            Cinematic by Default.
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            Mobile content shouldn't look cheap. We bring cinema-grade color science and storytelling to every vertical reel.
                        </p>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-zinc-900 min-h-[300px] lg:min-h-[400px] xl:min-h-[300px]">
                        <div className="max-w-sm relative z-20">
                            <HeartHandshake className="w-10 h-10 text-red-500 mb-4" />
                            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Obsessed with <span className="text-red-500">Service.</span>
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                We don't just take orders; we partner with you. From the first storyboard to the final export, we work as an extension of your own creative team.
                            </p>
                        </div>
                        <Image
                            src="/images/cta-bg.png"
                            width={500}
                            height={500}
                            alt="Studio Handshake"
                            className="absolute right-0 bottom-0 w-[60%] lg:w-auto lg:-right-[40%] lg:-bottom-10 grayscale object-contain rounded-2xl opacity-50 lg:opacity-100 z-10 pointer-events-none"
                        />
                    </WobbleCard>
                </div>
            </div>
        </section>
    );
}

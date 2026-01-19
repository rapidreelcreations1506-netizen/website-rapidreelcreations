"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { CtaBanner } from "@/sections/home/cta-banner"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "framer-motion"
import { Zap, Smartphone, Share2, TrendingUp, Music, Clock } from "lucide-react"
import React from "react"
import Image from "next/image"

export function ServicesContent() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">
            <Navbar />

            {/* 1. Hero: Focus on SPEED and RESULT */}
            <section className="relative w-full overflow-hidden bg-black py-20 md:py-24">
                <AuroraBackground className="absolute inset-0 h-full w-full pointer-events-none opacity-50" showRadialGradient={true}>
                    <div className="absolute inset-0 bg-black/50" />
                </AuroraBackground>

                <motion.div
                    initial={{ opacity: 0.0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative z-10 flex flex-col gap-6 items-center justify-center px-4 max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-sm font-medium text-white mb-4 backdrop-blur-md">
                        <Zap className="w-4 h-4 mr-2 text-red-500" /> Next-Gen Content Creation
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
                        Shot. Edited. <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">Posted.</span>
                    </h1>
                    <p className="font-medium text-lg md:text-2xl text-zinc-300 max-w-2xl drop-shadow-md">
                        Instant high-quality social reels delivered <span className="text-white font-bold decoration-red-500 underline decoration-2 underline-offset-4">before the event ends.</span>
                    </p>
                </motion.div>
            </section>

            {/* 2. Services: The Instant Reel workflow */}
            <section className="py-12 bg-black relative z-10">
                <div className="container px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-10 text-center md:text-left">
                            Specialized in <span className="text-red-600">Vertical Video</span>
                        </h2>
                        <BentoGrid className="max-w-6xl mx-auto">
                            {items.map((item, i) => (
                                <BentoGridItem
                                    key={i}
                                    title={item.title}
                                    description={item.description}
                                    header={item.header}
                                    icon={item.icon}
                                    className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                                />
                            ))}
                        </BentoGrid>
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <CtaBanner />

            <Footer />
        </main>
    )
}

const ImageHeader = ({ src }: { src: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
        <Image
            src={src}
            fill
            className="object-cover transition-transform duration-500 group-hover/bento:scale-110 opacity-70 group-hover/bento:opacity-100"
            alt="Service Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    </div>
);

const items = [
    {
        title: "Instant Event Reels",
        description: "The event isn't over, but your highlight reel is already live. We shoot and edit on-site for immediate viral impact.",
        header: <ImageHeader src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop" />,
        icon: <Zap className="h-4 w-4 text-red-500" />,
    },
    {
        title: "Wedding 'Content Creator'",
        description: "Not the traditional videographer. We capture the candid, fun, behind-the-scenes moments perfectly formatted for Reels & TikTok.",
        header: <ImageHeader src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3200&auto=format&fit=crop" />,
        icon: <Share2 className="h-4 w-4 text-red-500" />,
    },
    {
        title: "Gym & Fitness",
        description: "Raw, energetic, and fast-paced. We capture your PRs and workouts with the dynamic look that fitness algorithms love.",
        header: <ImageHeader src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop" />,
        icon: <TrendingUp className="h-4 w-4 text-red-500" />,
    },
    {
        title: "Trending Audio Sync",
        description: "We don't just edit; we sync your footage to the latest trending sounds to maximize reach and engagement.",
        header: <ImageHeader src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop" />,
        icon: <Music className="h-4 w-4 text-red-500" />,
    },
    {
        title: "Corporate BTS",
        description: "Show the human side of your business. Authentic behind-the-scenes content that builds trust.",
        header: <ImageHeader src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940&auto=format&fit=crop" />,
        icon: <Smartphone className="h-4 w-4 text-red-500" />,
    },
    {
        title: "Same-Day Delivery",
        description: "Zero wait time. Receive your edited 4K vertical videos within hours, not weeks.",
        header: <ImageHeader src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop" />,
        icon: <Clock className="h-4 w-4 text-red-500" />,
    },
];

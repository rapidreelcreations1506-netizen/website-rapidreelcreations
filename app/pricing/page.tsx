"use client";

import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { MovingBorder, Button as MovingBorderButton } from "@/components/ui/moving-border";
import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from "framer-motion";
import { Check, Star, Zap, Flame, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-red-900/50 selection:text-white overflow-x-hidden">

            {/* Hero Section with Red Spotlight */}
            <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="#DC2626"
                />
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-4 md:mb-6">
                            Invest in <br /> <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">Dominance.</span>
                        </h1>
                        <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed border-t border-b border-white/5 py-4 md:py-6">
                            We don't sell "hours". We sell <span className="text-white font-bold">Attention</span>. <br />
                            Choose the level of impact your brand requires.
                        </p>
                    </motion.div>
                </div>

                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none -z-10" />
            </section>

            {/* The Vault (Pricing Cards) */}
            <section className="pb-20 md:pb-32 px-4 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">

                    {/* Tier 1: The Spark (Hourly) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                    >
                        <div className="h-full bg-zinc-950/50 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col hover:bg-zinc-900/50 transition-colors duration-500 group shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 border border-white/10 group-hover:border-red-500/50 transition-colors">
                                    <Zap className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-zinc-400 uppercase tracking-widest mb-2">The Spark</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl md:text-4xl font-black text-white">₹1,199</span>
                                    <span className="text-sm text-zinc-500 font-medium">/ session</span>
                                </div>
                                <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                                    The entry point. Perfect for quick shoots, specific clips, or testing the waters with professional quality.
                                </p>
                            </div>

                            <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                                {[
                                    "iPhone 14+ Models (Log Profile)",
                                    "Professional Audio",
                                    "Professional Video Editing",
                                    "30-45 Mins Delivery",
                                    "Extra Hours: ₹799/hr"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                        <Check className="w-4 h-4 text-zinc-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full bg-zinc-800 hover:bg-white hover:text-black text-white font-bold tracking-wide transition-all duration-300 h-12">
                                Book Hourly
                            </Button>
                        </div>
                    </motion.div>

                    {/* Tier 2: Monthly Package (Retainer - Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="h-full relative transform scale-100 md:scale-105 z-10" // Scales up on Desktop only
                    >
                        {/* Moving Border Wrapper for the Highlight */}
                        <MovingBorderButton
                            borderRadius="1.5rem"
                            containerClassName="w-full h-full bg-transparent min-h-[500px]" // Ensure min-height/width on mobile
                            className="bg-black/90 border-red-500/20 text-white w-full h-full"
                            duration={3000}
                            as="div"
                        >
                            <div className="h-full w-full p-6 md:p-8 flex flex-col relative z-20">
                                {/* Popular Badge */}
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-[0_4px_10px_rgba(220,38,38,0.5)]">
                                    Most Popular
                                </div>

                                <div className="mb-6 text-left w-full">
                                    <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 border border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                        <Flame className="w-7 h-7 text-red-500" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-red-500 uppercase tracking-widest mb-2">Monthly Package</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-black text-white">Retainer</span>
                                    </div>
                                    <p className="text-neutral-300 text-sm mt-4 leading-relaxed font-medium">
                                        Dominance requires consistency. A dedicated monthly partnership to flood your feed with high-conversion content.
                                    </p>
                                </div>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent mb-6 md:mb-8" />

                                <ul className="space-y-3 md:space-y-4 mb-8 flex-grow w-full text-left">
                                    {[
                                        "12-15 Reels Per Month",
                                        "Strategy & Scripting Included",
                                        "Monthly on-location Shoot",
                                        "Thumbnail Design",
                                        "30-45 Mins Delivery",
                                        "Dedicated Creative Director"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                                            <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-red-500" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold tracking-wide h-12 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 border border-red-400/20">
                                    Start Your Retainer
                                </Button>
                                <p className="text-center text-xs text-zinc-500 mt-3">Limited spots available per month.</p>
                            </div>
                        </MovingBorderButton>
                    </motion.div>

                    {/* Tier 3: The Inferno (Enterprise) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="h-full"
                    >
                        <WobbleCard containerClassName="h-full bg-zinc-950 border border-white/5 shadow-2xl group min-h-[500px]">
                            <div className="p-2 md:p-4 flex flex-col h-full relative z-10">
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10 group-hover:border-white/30 transition-colors">
                                        <Crown className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-zinc-400 uppercase tracking-widest mb-2">The Inferno</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl md:text-4xl font-black text-white">Custom</span>
                                        {/* <span className="text-sm text-zinc-500 font-medium">/ event</span> */}
                                    </div>
                                    <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                                        For those building a legacy. Large-scale event coverage, documentaries, and commercial productions.
                                    </p>
                                </div>

                                <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                                    {[
                                        "Multi-Day Event Coverage",
                                        "Full Production Crew",
                                        "Same-Day Edit (SDE) Available",
                                        "Documentary Style Editing",
                                        "Commercial Rights"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                            <Check className="w-4 h-4 text-zinc-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="outline" className="w-full border-zinc-700 hover:border-white text-white hover:bg-white hover:text-black font-bold tracking-wide transition-all duration-300 bg-transparent h-12">
                                    Request Custom Quote
                                </Button>
                            </div>
                        </WobbleCard>
                    </motion.div>

                </div>
            </section>

            {/* FAQ Section */}
            <section className="pb-24 md:pb-32 container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Common Queries</h2>
                </div>

                <div className="space-y-4">
                    <FaqItem
                        question="Why are your rates higher than freelancers?"
                        answer="You aren't paying for a person with a phone. You are paying for a production system, professional lighting/audio, and a strategy designed to generate ROI. Reliability and speed cost money."
                    />
                    <FaqItem
                        question="What is included in the 'Monthly Package'?"
                        answer="Everything you need to grow. We handle the ideation, the shoot, the edit, and the delivery. It's a 'Done-For-You' content machine."
                    />
                    <FaqItem
                        question="Do you travel for events?"
                        answer="We primarily serve Hyderabad and surrounding Telangana regions. Out-of-station travel can be arranged for select 'Inferno' projects with additional logistics coverage."
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-zinc-900">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 md:py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{question}</span>
                <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform duration-300", isOpen && "rotate-180")} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-4 md:pb-6 text-zinc-400 leading-relaxed font-light text-sm md:text-base">
                    {answer}
                </p>
            </motion.div>
        </div>
    )
}

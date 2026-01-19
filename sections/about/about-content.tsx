"use client";
import React from "react";
import Image from "next/image";
import { Footer } from "@/components/shared/footer";
import { Zap, Film, HeartHandshake, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";

// --- Data ---
const team = [
    {
        name: "Sanjay",
        role: "Founder & CEO",
        bio: "Sanjay brings a visionary eye and a passion for storytelling, transforming raw footage into captivating narratives.",
        image: "/images/sanjay-real.png"
    },
    {
        name: "Rakesh",
        role: "Co-Founder & Managing Director",
        bio: "Rakesh is the backbone of RapidReel, meticulously managing all production logistics to ensure seamless delivery.",
        image: "/images/rakesh-real.png"
    }
];

const dnaItems = [
    {
        title: "Speed is our Currency",
        description: "In the age of attention, delay is death. We've engineered a workflow that eliminates latency.",
        icon: <Zap className="w-8 h-8 text-red-500" />
    },
    {
        title: "Cinematic by Default",
        description: "Mobile content shouldn't look cheap. We bring cinema-grade color science to every reel.",
        icon: <Film className="w-8 h-8 text-red-500" />
    },
    {
        title: "Obsessed with Service",
        description: "We work as an extension of your creative team. Your vision is our blueprint.",
        icon: <HeartHandshake className="w-8 h-8 text-red-500" />
    }
];

export function AboutContent() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30">

            {/* 1. Hero Section - The Monolith */}
            <section className="relative h-[50vh] md:h-[70vh] flex flex-col items-center justify-center pt-32 md:pt-20 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                <h1 className="relative z-10 text-5xl md:text-9xl font-black tracking-tighter text-center px-4">
                    WE ARE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">RAPID REEL</span>
                </h1>

                <p className="relative z-10 mt-8 text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-lg text-center px-6">
                    Redefining the velocity of visual storytelling.
                </p>
            </section>

            {/* 2. The Narrative - Mobile Optimized Stream */}
            <section className="py-6 md:py-24 px-6 md:px-12 bg-zinc-950">
                <div className="max-w-4xl mx-auto space-y-8 md:space-y-24">

                    {/* Origin Story */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold text-white">The Origin</h2>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                Rapid Reel Creations was born from a singular vision: to bring <span className="text-white font-medium">cinematic quality</span> to the fast-paced world of social media. We noticed a gap in the market — clients had to choose between speed and quality.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/images/about-abstract-1.png"
                                    alt="Our Origin"
                                    fill
                                    className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold text-white">The Solution</h2>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                We decided to eliminate that choice. By leveraging modern editing workflows and a team of passionate creators, we deliver broadcast-level visuals with zero latency. We are a young, hungry team obsessed with perfection.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/images/cta-bg.png"
                                    alt="Our Solution"
                                    fill
                                    className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our DNA - Simple Grid */}
            <section className="py-6 md:py-24 bg-black border-y border-white/5">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-red-600">DNA</span></h2>
                        <p className="text-zinc-500">The code that runs our company.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {dnaItems.map((item, index) => (
                            <CardSpotlight
                                key={index}
                                className="h-full p-8 flex flex-col items-start justify-between hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 border-white/5 bg-zinc-900/50"
                            >
                                <div className="relative z-10 w-full">
                                    <div className="mb-6 p-4 rounded-full bg-black border border-white/10 w-fit group-hover:bg-red-950/30 transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                                </div>
                            </CardSpotlight>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Visionaries - Replicating Home Page Style */}
            <section className="py-12 md:py-24 bg-zinc-950 overflow-hidden">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The <span className="text-red-600">Visionaries</span></h2>
                        <p className="text-zinc-500">Orchestrating the magic behind every frame.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="group relative h-[500px] w-full rounded-2xl overflow-hidden cursor-pointer border border-zinc-900/50 shadow-2xl">
                                {/* Background Image */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                    <div className="transform transition-transform duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                                        <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                                        {/* Description under the name as requested */}
                                        <p className="text-red-500 font-mono text-sm uppercase tracking-widest mb-4 font-bold">
                                            {member.role}
                                        </p>
                                        <div className="h-auto overflow-hidden transition-all duration-500">
                                            <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-medium drop-shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Border Hover */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The Architect (Developer Spotlight) */}
            <section className="py-12 md:py-24 bg-black border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">The <span className="text-red-600">Architect</span></h2>
                        <p className="text-zinc-500 text-sm md:text-base">The engineering mind behind the digital experience.</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <CardSpotlight className="flex flex-col items-center text-center bg-zinc-950/50 border-zinc-800 p-6 md:p-10 overflow-hidden relative" color="#DC2626" radius={300}>

                            {/* Circular Image - Smaller & Responsive */}
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-5 rounded-full p-1 bg-gradient-to-br from-red-600 to-black shrink-0">
                                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-black">
                                    <Image
                                        src="/images/developer-siva.jpg"
                                        alt="Goram Siva Prasad - Tech Lead"
                                        fill
                                        className="object-cover object-top hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 150px, 200px"
                                    />
                                </div>
                                <div className="absolute bottom-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 border-2 md:border-4 border-black rounded-full z-10" title="Available for Hire">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                </div>
                            </div>

                            {/* Content - Compact Typography */}
                            <div className="relative z-10 flex flex-col items-center w-full">

                                <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tighter">
                                    Goram Siva
                                </h3>
                                <p className="text-red-500 text-sm md:text-base font-bold tracking-widest uppercase mb-4">
                                    Lead Fullstack Engineer
                                </p>

                                <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base max-w-lg">
                                    The architect behind <span className="text-white">RapidReel Creations</span>. I build high-performance digital experiences that merge cinematic aesthetics with robust engineering.
                                </p>

                                {/* Contact Grid - Stacked for Mobile, Row for Tablet+ */}
                                <div className="w-full max-w-md">
                                    <div className="p-1 rounded-xl bg-gradient-to-b from-white/10 to-transparent">
                                        <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-white/5">
                                            <p className="text-zinc-500 text-xs font-medium mb-3 uppercase tracking-wider">Accepting Freelance Projects</p>
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mrsivagoram@gmail.com" target="_blank" rel="noopener noreferrer" className="relative z-20 flex-1 flex items-center justify-center gap-2 group p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300">
                                                    <div className="p-1.5 rounded bg-zinc-800 group-hover:bg-red-600 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                    </div>
                                                    <span className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">Email Me</span>
                                                </a>
                                                <a href="https://wa.me/919505231281?text=Hi%20Goram%2C%20I%20visited%20the%20RapidReel%20Creations%20website%20and%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="relative z-20 flex-1 flex items-center justify-center gap-2 group p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300">
                                                    <div className="p-1.5 rounded bg-zinc-800 group-hover:bg-red-600 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                                    </div>
                                                    <span className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">WhatsApp Me</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}

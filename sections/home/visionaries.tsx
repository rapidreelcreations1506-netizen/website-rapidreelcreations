"use client"
import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
]

export function VisionariesSection() {
    return (
        <section className="py-12 md:py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(120,0,0,0.1),transparent_50%)]" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                        The <span className="text-red-600">Visionaries</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Orchestrating the magic behind every frame.
                    </p>
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

                            {/* Gradient Overlay - Stronger for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                <div className="transform transition-transform duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{member.name}</h3>
                                    <p className="text-red-500 font-mono text-sm uppercase tracking-widest mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 font-bold">
                                        {member.role}
                                    </p>
                                    <div className="h-auto md:h-0 md:group-hover:h-auto overflow-hidden transition-all duration-500">
                                        <p className="text-zinc-200 leading-relaxed text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200 drop-shadow-sm font-medium">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Border Gradient */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Join CTA */}
                <div className="mt-16 text-center">
                    <p className="text-zinc-500 mb-6 font-medium">Think you have the eye?</p>
                    <a href="/join-creator">
                        <button className="px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-white font-bold hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-red-900/20 group">
                            Join the Roster <span className="group-hover:translate-x-1 inline-block transition-transform ml-2">→</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

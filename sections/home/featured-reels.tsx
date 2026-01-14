"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ExpandableCards } from "@/components/ui/expandable-cards"

export function FeaturedReels() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                            Selected <span className="text-red-600">Masterpieces</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-xl">
                            A curated gallery of our finest work. Hover to expand.
                        </p>
                    </div>
                    <Link href="/portfolio" className="hidden md:block">
                        <Button variant="ghost" className="text-zinc-400 hover:text-white group">
                            View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Expandable Accordion Gallery */}
            <div className="w-full max-w-[1400px] mx-auto px-4">
                <ExpandableCards items={cases} />
            </div>

            <div className="flex justify-center mt-12 md:hidden">
                <Link href="/portfolio">
                    <Button variant="outline" className="rounded-full border-zinc-800 text-white hover:bg-white hover:text-black">
                        View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

const cases = [
    {
        title: "Live Concert Energy",
        category: "Events",
        image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/",
        instagramUrl: "https://www.instagram.com/rapidreel_creations/",
    },
    {
        title: "Cinematic Vows",
        category: "Weddings",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3200&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/",
        instagramUrl: "https://www.instagram.com/rapidreel_creations/",
    },
    {
        title: "Tech Innovation",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/",
        instagramUrl: "https://www.instagram.com/rapidreel_creations/",
    },
    {
        title: "High Intensity",
        category: "Fitness",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop",
        href: "https://www.instagram.com/rapidreel_creations/",
        instagramUrl: "https://www.instagram.com/rapidreel_creations/",
    },
];

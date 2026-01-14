"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function ModernGallery() {
    return (
        <div className="h-screen py-20 w-full relative">

            {/* Section Header */}
            <div className="relative z-10 px-6 mb-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Curated <span className="text-red-600">Masterpieces</span>
                </h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    A selection of our most impactful campaigns. Click on any card to explore the story behind the frame.
                </p>
            </div>

            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House of Parties</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                High-energy event coverage capturing the electric atmosphere of Hyderabad's premier nightlife. Fast cuts, neon grading, and beat-synced editing.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Urban Fitness</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A gritty, motivating brand campaign for a leading gym chain. Focusing on sweat, determination, and the architecture of the human body.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Tech Unveiled</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Product launch videography that treats hardware like jewelry. Macro shots, clean lighting, and sophisticated motion graphics.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">The Wedding Edit</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Timeless storytelling for a grand celebration. Blending candid moments with cinematic composition to create a modern heirloom.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: "/images/home-reel-concert.png",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: "/images/home-reel-gym.png",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: "/images/portfolio-tech.png",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail: "/images/home-reel-fashion.png",
    },
];

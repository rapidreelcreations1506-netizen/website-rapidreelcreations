"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: any;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => {
        return (
            <Link
                href={card.href || "#"}
                target="_blank"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                    "rounded-2xl relative bg-zinc-900 border border-white/5 overflow-hidden h-60 md:h-[22rem] w-full transition-all duration-300 ease-out",
                    hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50"
                )}
            >
                <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end py-8 px-6",
                        "opacity-100" // Text always visible
                    )}
                >
                    <div className="text-xl md:text-3xl font-bold text-white drop-shadow-lg">
                        {card.title}
                        <p className="text-sm md:text-base text-red-500 font-bold mt-2 tracking-widest uppercase shadow-black drop-shadow-md">
                            {card.role}
                        </p>
                        <p className="text-xs text-zinc-300 mt-4 opacity-80 flex items-center gap-1">
                            View on Instagram &rarr;
                        </p>
                    </div>
                </div>
            </Link>
        );
    }
);

Card.displayName = "Card";

type Card = {
    title: string;
    role: string;
    src: string;
    href: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    if (!cards) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title + index}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}

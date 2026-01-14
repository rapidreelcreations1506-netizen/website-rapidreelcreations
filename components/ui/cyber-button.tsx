"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    glitch?: boolean;
}

export const CyberButton = ({
    children,
    variant = "primary",
    className,
    glitch = true,
    ...props
}: CyberButtonProps) => {
    return (
        <Button
            className={cn(
                "relative group overflow-hidden font-mono tracking-widest uppercase transition-all duration-300",
                // Base Shape - Angled Corners
                "clip-path-polygon-[10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px]",
                // Explicit clip-path style since Tailwind arbitrary values can sometimes be tricky with complex polygons, 
                // but we'll try standard utility first or fallback to inline style if needed.
                // Actually, let's use a wrapper for the shape or just standard borders for now to be safe,
                // but a true cyberpunk button needs that angled cut.
                // Let's use a standard shape for now but "Tech" borders.
                "rounded-none border-0", // Reset standard rounded

                // Variants
                variant === "primary" && "bg-red-600 text-white hover:bg-red-700",
                variant === "secondary" && "bg-cyan-500 text-black hover:bg-cyan-400",
                variant === "outline" && "bg-transparent border border-red-600/50 text-red-500 hover:bg-red-600/10 hover:border-red-600 hover:text-red-400",

                className
            )}
            style={{
                clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)"
            }}
            {...props}
        >
            {/* Background Glitch Layer */}
            {glitch && (
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-200 skew-x-12" />
            )}

            {/* Text Content */}
            <span className="relative flex items-center gap-2">
                {children}
            </span>

            {/* Decor: Corner Ticks */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
        </Button>
    );
};

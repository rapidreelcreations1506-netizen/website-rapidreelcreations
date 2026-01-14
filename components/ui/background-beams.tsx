"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Beams />
        </div>
    );
};

const Beams = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-50">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/20 blur-[100px] rounded-full animate-pulse`} />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,1))]" />
            </div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Moving Beams */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 w-[60rem] h-[20rem] bg-gradient-to-r from-transparent via-red-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] blur-3xl opacity-20 animate-beam" />
                <div className="absolute top-1/2 left-1/2 w-[60rem] h-[20rem] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-[45deg] blur-3xl opacity-20 animate-beam-delay" />
            </div>
        </div>
    )
}

"use client"

import { motion } from "framer-motion"

export function GlobalAmbience() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Cinematic Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-[1] w-full h-full">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Ambient Red Glows - Moving slowly */}
            <motion.div
                className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-red-900/10 blur-[120px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-red-900/10 blur-[120px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
            />
        </div>
    )
}

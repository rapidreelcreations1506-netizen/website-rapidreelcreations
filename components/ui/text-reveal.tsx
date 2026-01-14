"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function TextReveal({
    text,
    className,
    delay = 0
}: {
    text: string
    className?: string
    delay?: number
}) {
    // Split text into lines/words if needed, but for now simple line mask
    const words = text.split(" ")

    return (
        <div className={cn("overflow-hidden flex flex-wrap gap-x-[0.3em] gap-y-1", className)}>
            {words.map((word, i) => (
                <span key={i} className="relative overflow-hidden inline-block leading-tight pb-1">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.33, 1, 0.68, 1],
                            delay: delay + i * 0.05
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </div>
    )
}

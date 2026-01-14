"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"

const words = ["Capture", "Edit", "Deliver", "Rapid Reel"]

export function Preloader() {
    const [index, setIndex] = useState(0)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(() => setIsLoading(false), 1000)
            return
        }

        const timeout = setTimeout(() => {
            setIndex(index + 1)
        }, index === 0 ? 1200 : 1400)

        return () => clearTimeout(timeout)
    }, [index])

    const containerVariants: Variants = {
        exit: {
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
            pointerEvents: 'none',
            transitionEnd: { display: "none" }
        }
    }

    const textVariants: Variants = {
        initial: { y: "100%" },
        enter: {
            y: "0%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
        },
        exit: {
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
        }
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader-branded"
                    variants={containerVariants}
                    exit="exit"
                    // FORCE position in inline style to ensure measure() succeeds
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100000,
                        backgroundColor: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    className="overflow-hidden"
                >
                    {dimension.height > 0 && (
                        <>
                            {/* APERTURE RINGS */}
                            <div
                                className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
                                style={{ position: 'absolute' }}
                            >
                                {/* Large Outer Ring */}
                                <motion.div
                                    className="absolute w-[45vw] h-[45vw] min-w-[320px] min-h-[320px] border-[1px] border-zinc-800 rounded-full opacity-30"
                                    style={{ position: 'absolute' }}
                                    initial={{ scale: 0.8, rotate: 0 }}
                                    animate={{ scale: 1, rotate: 180 }}
                                    exit={{ scale: 3, opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                                    transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                                />

                                {/* Medium Ring */}
                                <motion.div
                                    className="absolute w-[35vw] h-[35vw] min-w-[260px] min-h-[260px] border-[1px] border-white/10 rounded-full"
                                    style={{ position: 'absolute' }}
                                    initial={{ scale: 0.9, rotate: 90 }}
                                    animate={{ scale: 1, rotate: -90 }}
                                    exit={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
                                    transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                />

                                {/* Moving Red Arc */}
                                <motion.div
                                    className="absolute w-[35vw] h-[35vw] min-w-[260px] min-h-[260px] rounded-full border-t-[4px] border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
                                    style={{ position: 'absolute' }}
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                                />

                                {/* Inner Solid Circle (Mask) */}
                                <motion.div
                                    className="absolute w-[22vw] h-[22vw] min-w-[200px] min-h-[200px] bg-black rounded-full z-10 border border-zinc-900"
                                    style={{ position: 'absolute' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 50, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <div
                                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                                style={{ position: 'absolute' }}
                            >
                                <div
                                    className="overflow-hidden h-[80px] md:h-[120px] flex items-center justify-center relative"
                                    style={{ position: 'relative' }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.h1
                                            key={index}
                                            variants={textVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            // FORCE position in inline style for layout projection
                                            style={{ position: 'relative' }}
                                            className="text-white text-3xl md:text-5xl font-black tracking-widest uppercase z-50"
                                        >
                                            {words[index]}
                                            <span className="text-red-600">.</span>
                                        </motion.h1>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
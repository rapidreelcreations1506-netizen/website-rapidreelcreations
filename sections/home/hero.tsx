"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { UserPlus } from "lucide-react"

export function HeroSection() {
    return (
        <AuroraBackground className="bg-black">
            <div className="relative flex flex-col gap-0 items-center justify-center px-4 pt-24 md:pt-0 pb-10 md:pb-0">

                {/* Text Block with Staggered Animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                    className="flex flex-col items-center justify-center text-center font-extrabold tracking-tighter leading-[0.9] text-white"
                >

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
                        }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] py-0 my-0"
                    >
                        Capture. Edit.
                    </motion.h1>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
                        }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] py-0 my-0"
                    >
                        Deliver.
                    </motion.h1>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
                        }}
                        className="flex flex-wrap justify-center gap-2 md:gap-5 py-0 my-0 mt-2"
                    >
                        <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem]">Within</span>
                        <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-red-600 drop-shadow-[0_0_50px_rgba(220,38,38,0.8)]">Minutes.</span>
                    </motion.div>

                </motion.div>

                {/* Buttons - Fade in after text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full mt-10 md:mt-16"
                >
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full h-16 px-12 text-xl font-bold shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all hover:scale-105 w-full sm:w-auto hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] border border-red-500/50">
                            Get a Quote
                        </Button>
                    </Link>

                    <Link href="/join-creator" className="w-full sm:w-auto">
                        <Button variant="outline" className="border-zinc-800 bg-black/40 text-white hover:bg-zinc-900/80 hover:border-zinc-700 rounded-full h-16 px-12 text-xl font-bold backdrop-blur-md w-full sm:w-auto transition-all group">
                            <UserPlus className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" /> Join as a Creator
                        </Button>
                    </Link>
                </motion.div>

            </div>
        </AuroraBackground>
    )
}

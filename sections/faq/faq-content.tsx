"use client"


import { Footer } from "@/components/shared/footer"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Search } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/spotlight"

const faqData = [
    {
        id: "01",
        question: "What is your typical turnaround time?",
        answer: "Speed is our DNA. For social media reels, we often deliver within hours of the shoot. Larger events and complex edits typically take 3-5 business days. We define the timeline before we shoot, so you never have to guess."
    },
    {
        id: "02",
        question: "Do you travel for shoots?",
        answer: "We are proudly based in Hyderabad and currently serve clients primarily within the city and surrounding areas. For special projects outside Hyderabad, travel logistics can be discussed upon request."
    },
    {
        id: "03",
        question: "What formats do you deliver?",
        answer: "We are platform-native. You get 9:16 (Vertical) for Reels/TikTok, 16:9 (Landscape) for YouTube/Cinema, and 4:5 for Feed Posts. Just tell us where it's going, and we optimize the codec and ratio."
    },
    {
        id: "04",
        question: "How does the booking process work?",
        answer: "It's streamlined: 1. Contact us via the form. 2. We send a custom proposal or you book a slot. 3. 50% deposit secures the date. 4. We shoot, edit, and deliver."
    },
    {
        id: "05",
        question: "Do you provide the raw footage?",
        answer: "Raw footage is available as an add-on or included in our 'Inferno' enterprise packages. For standard edits, we archive projects for 6 months should you need future re-edits."
    },
    {
        id: "06",
        question: "What gear do you use?",
        answer: "We believe in the power of mobile cinematography. We shoot exclusively on iPhone 14 Pro Max and above, paired with professional gimbals, lighting, and audio gear to deliver stunning, agile, and authentic visuals."
    }
]

export function FaqContent() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-red-900/50 selection:text-white pb-10 md:pb-20 overflow-x-hidden">

            {/* Header Section */}
            <section className="relative pt-24 md:pt-40 pb-12 md:pb-24 text-center container px-4 mx-auto max-w-5xl">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="#DC2626"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-900/10 backdrop-blur-md">
                        <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Knowledge Base</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">
                        Answers in <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">Rapid</span> Speed.
                    </h1>
                    <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Curated intelligence on our workflow, logistics, and technical capabilities.
                    </p>
                </motion.div>

                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none -z-10" />
            </section>

            {/* Holographic Grid */}
            <section className="container px-4 mx-auto max-w-6xl pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqData.map((item, index) => (
                        <FaqCard key={index} item={item} index={index} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}

function FaqCard({ item, index }: { item: any, index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer",
                isOpen
                    ? "bg-zinc-900/80 border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                    : "bg-zinc-950/50 border-white/5 hover:border-white/10 hover:bg-zinc-900/30"
            )}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Active Glow Gradient */}
            {isOpen && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent pointer-events-none" />
            )}

            <div className="p-6 md:p-8 relative z-10">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={cn(
                                "text-xs font-mono font-bold tracking-widest transition-colors duration-300",
                                isOpen ? "text-red-500" : "text-zinc-600"
                            )}>
                                {item.id}
                            </span>
                            {isOpen && (
                                <span className="h-[1px] w-8 bg-red-500/50" />
                            )}
                        </div>
                        <h3 className={cn(
                            "text-lg md:text-xl font-bold transition-colors duration-300 leading-tight",
                            isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"
                        )}>
                            {item.question}
                        </h3>
                    </div>

                    {/* Interaction Icon */}
                    <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0",
                        isOpen
                            ? "bg-red-600 border-red-500 text-white rotate-180"
                            : "bg-zinc-900 border-zinc-800 text-zinc-500 group-hover:border-zinc-600 group-hover:text-white"
                    )}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="pt-6">
                                <p className="text-zinc-300 leading-relaxed font-light text-base md:text-lg border-t border-red-900/30 pt-4">
                                    {item.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

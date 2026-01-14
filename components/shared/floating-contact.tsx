"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

// Real-world Brand Icons (SVGs)
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

const GmailIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="#EA4335" d="M19.5 3h-15C2.85 3 1.5 4.35 1.5 6v12c0 1.65 1.35 3 3 3h15c1.65 0 3-1.35 3-3V6c0-1.65-1.35-3-3-3zm-.375 3L12 10.125 4.875 6H19.125zM19.5 19.5h-15V7.5l7.5 4.125L19.5 7.5v12z" />
    </svg>
)

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M19.95 21a1 1 0 0 1-1.05-.9 17 17 0 0 1-5.6-5.6 1 1 0 0 1 .9-1.05 2.15 2.15 0 0 0 1.5-1.5l.8-2.4a2.15 2.15 0 0 0-1.5-1.5h-2.4a2.15 2.15 0 0 0-1.5 1.5 17 17 0 0 0 11.2 11.2 2.15 2.15 0 0 0 1.5-1.5v-2.4a2.15 2.15 0 0 0-1.5-1.5l-2.4.8a2.15 2.15 0 0 0-1.5 1.5z" />
    </svg>
)

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState<string | null>(null)

    const toggleOpen = () => setIsOpen(!isOpen)

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text)
        setCopied(label)
        setTimeout(() => setCopied(null), 2000)
    }

    const contacts = {
        whatsapp: "917780131283",
        phone1: "+91 7780131283",
        phone2: "+91 6301965094",
        email: "rapidreelcreations1506@gmail.com"
    }

    return (
        <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end sm:bottom-10 sm:right-10 gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-3 items-center mb-2"
                    >
                        {/* WhatsApp */}
                        <a href={`https://wa.me/${contacts.whatsapp}`} target="_blank" rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform">
                            <div className="w-6 h-6"><WhatsAppIcon /></div>
                        </a>

                        {/* Phone */}
                        <a href={`tel:${contacts.phone1}`}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/40 hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5 fill-current" />
                        </a>

                        {/* Email */}
                        <a href={`mailto:${contacts.email}`}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-red-500 shadow-lg shadow-white/20 hover:scale-110 transition-transform">
                            <div className="w-6 h-6"><GmailIcon /></div>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                layoutId="contact-trigger"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl relative z-[9999]",
                    isOpen ? "bg-zinc-800 rotate-90" : "bg-gradient-to-br from-red-600 to-orange-600 animate-pulse-slow",
                    "shadow-red-900/40 border-4 border-black ring-2 ring-white/10"
                )}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
                            <X className="w-6 h-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                            <div className="relative">
                                <Phone className="w-6 h-6 text-white fill-white" />
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}

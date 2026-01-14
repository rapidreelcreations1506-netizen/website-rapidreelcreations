"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    // usage of useScroll replaced with vanilla listener to prevent warning loops
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Process", href: "/how-we-work" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQs", href: "/faq" },
        { name: "Join Team", href: "/join-creator" },
        { name: "Contact", href: "/contact" },
    ]

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <>
            {/* Desktop Floating Capsule Navbar */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-6 left-1/2 -translate-x-1/2 z-[9999]",
                    "hidden lg:flex items-center justify-between",
                    "w-[95%] max-w-7xl h-16 px-2 pr-2",
                    "bg-zinc-950/80 backdrop-blur-md",
                    "border border-zinc-800",
                    "rounded-full shadow-2xl shadow-black/50"
                )}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 pl-6 shrink-0 relative">
                    <div className="relative h-14 w-40 overflow-hidden">
                        <Image
                            src="/images/logo.jpg"
                            alt="Logo"
                            fill
                            className="object-contain object-left"
                            sizes="160px" // Adjusted to match the actual display width
                        // REMOVED priority to fix the console warning
                        />
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-1 mx-2 relative">
                    {navLinks.map((link) => {
                        const active = isActive(link.href)
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-[13px] lg:text-sm font-medium transition-colors z-10",
                                    active ? "text-white" : "text-zinc-400 hover:text-white"
                                )}
                            >
                                {active && (
                                    <motion.div
                                        layoutId="navbar-active-pill"
                                        className="absolute inset-0 bg-red-600 rounded-full -z-10 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* CTA Button */}
                <div className="shrink-0">
                    <Link href="/contact">
                        <Button
                            className="rounded-full bg-white text-black hover:bg-zinc-200 font-bold px-6 h-11 border-none"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </motion.header>

            {/* Mobile Navbar (Simplified Floating Bar) */}
            <div
                className={cn(
                    "lg:hidden fixed top-2 z-[50000]",
                    "left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] max-w-md", // Also tightening width slightly
                    "flex items-center justify-between",
                    "bg-zinc-950/90 backdrop-blur-md border border-zinc-800",
                    "rounded-full px-4 py-3 shadow-2xl"
                )}
            >
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <div className="relative h-12 w-32 overflow-hidden">
                        <Image
                            src="/images/logo.jpg"
                            alt="Logo"
                            fill
                            className="object-contain object-left"
                            sizes="128px"
                        // REMOVED priority and loading="eager" to fix the warning
                        />
                    </div>
                </Link>

                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-white bg-zinc-900 rounded-full border border-zinc-800 shrink-0 relative z-50 hover:bg-zinc-800 transition-colors"
                    aria-label="Open Menu"
                >
                    <Menu className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60000] bg-black flex flex-col p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-xl font-bold text-white">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 pb-20">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-3xl font-bold",
                                        isActive(link.href) ? "text-red-500" : "text-zinc-500 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8">
                                <Button className="w-full h-14 rounded-full text-lg font-bold bg-red-600 hover:bg-red-700 text-white">
                                    Get Started Project
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
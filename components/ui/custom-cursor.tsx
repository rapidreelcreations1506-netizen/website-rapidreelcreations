"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if hovering over clickable elements
            if (target.closest('button') || target.closest('a') || target.closest('[role="button"]') || target.tagName === 'INPUT') {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", updateMousePosition)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [])

    return (
        <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-[99999] mix-blend-exclusion">
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full"
                animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8, scale: isHovering ? 0 : 1 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />

            {/* Trailing Ring (Expands on hover) */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
            >
                {/* Text inside cursor when hovering (Optional, luxury feel) */}
                {isHovering && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-black uppercase"
                    >
                        View
                    </motion.span>
                )}
            </motion.div>
        </div>
    )
}

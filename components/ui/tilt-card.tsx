"use client"

import React, { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

const ROTATION_RANGE = 20
const HALF_ROTATION_RANGE = 20 / 2

export function TiltCard({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const transform = useMotionTemplate`rotateX(${mouseXSpring}deg) rotateY(${mouseYSpring}deg)`

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE / width - HALF_ROTATION_RANGE
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE / height - HALF_ROTATION_RANGE

        const rX = mouseY * -1
        const rY = mouseX

        x.set(rX)
        y.set(rY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={className}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    )
}

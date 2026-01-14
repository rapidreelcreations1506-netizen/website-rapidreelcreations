"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Camera, Clapperboard } from "lucide-react"
import { CardSpotlight } from "@/components/ui/card-spotlight"

const services = [
  {
    icon: <Zap className="h-8 w-8 text-red-500" />,
    title: "Instant Event Reels",
    description: "We shoot, edit, and deliver stunning highlight reels within minutes of the action happening.",
    badge: "Within Minutes",
    href: "/services"
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-red-500" />,
    title: "Cinematic Weddings",
    description: "Transform your special day into a movie. High-end color grading, drone shots, and emotional storytelling.",
    badge: "24-48 Hours",
    href: "/services"
  },
  {
    icon: <Camera className="h-8 w-8 text-red-500" />,
    title: "Brand Promotions",
    description: "High-energy short-form content designed to stop the scroll and convert viewers into customers.",
    badge: "Same Day",
    href: "/services"
  }
]

export function ServicesPreviewSection() {
  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #220000 0%, transparent 50%)" }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Our Rapid Reel <span className="text-red-600">Services</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Speed without compromise. We deliver broadcast-quality content at the speed of social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <CardSpotlight
              key={index}
              className="h-full p-6 md:p-8 flex flex-col items-start justify-between hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 border-white/10 md:border-transparent bg-zinc-900/50 md:bg-black"
            >
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-red-950/20 rounded-2xl border border-red-900/30 w-fit">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 w-full flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                <span className="text-xs font-mono text-red-400 bg-red-950/30 px-3 py-1 rounded-full border border-red-900/30">
                  {service.badge}
                </span>
                <Link href={service.href} className="group flex items-center gap-2 text-sm font-medium text-white hover:text-red-500 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </CardSpotlight>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/services">
            <Button variant="outline" size="lg" className="rounded-full border-zinc-800 text-white hover:bg-white hover:text-black transition-all px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

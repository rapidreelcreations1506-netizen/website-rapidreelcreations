import { Footer } from "@/components/shared/footer"
import { HeroSection } from "@/sections/home/hero"
import { ServicesPreviewSection } from "@/sections/home/services-preview"
import { FeaturedReels } from "@/sections/home/featured-reels"
import { VisionariesSection } from "@/sections/home/visionaries"
import { CtaBanner } from "@/sections/home/cta-banner"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { TextReveal } from "@/components/ui/text-reveal"

/* ✅ SEO METADATA (VERY IMPORTANT) */
export const metadata = {
  title: "RapidReel Creations |Professional Video Editing & Social Media Reel Services",
  description:
    "RapidReel Creations is a professional video editing service helping creators, influencers, and businesses turn raw footage into high-performing content. We specialize in social media reels, YouTube shorts, promotional videos, and highlight edits optimized for engagement and growth.",
  keywords: [
    "video editing services",
    "social media reels",
    "YouTube shorts",
    "promotional videos",
    "video editor for creators",
    "highlight edits",
    "Instagram reels editor",
    "TikTok video editor",
    "RapidReel Creations"
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1">
        {/* Hero already contains visual headline */}
        <HeroSection />

        <ServicesPreviewSection />
        <FeaturedReels />
        <VisionariesSection />

        {/* ✅ BRAND MANIFESTO SECTION - Tightened Layout */}
        <section className="py-12 px-4 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <CardSpotlight className="w-full bg-zinc-950/50 border-zinc-800 p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <div className="relative z-10 space-y-6 max-w-4xl mx-auto">

                {/* Visual Eye-Catch */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-900/10 text-red-500 text-xs font-bold tracking-widest uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Not Just Editors
                </div>

                {/* Headline - Static for perfect spacing */}
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                  We are <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-600">Rapid Reel Makers.</span>
                </h2>

                {/* Core Process Loop - Responsive */}
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-xl md:text-2xl font-bold text-zinc-500 py-4">
                  <span className="text-white">Capture.</span>
                  <span className="text-zinc-700">→</span>
                  <span className="text-white">Edit.</span>
                  <span className="text-zinc-700">→</span>
                  <span className="text-red-500 drop-shadow-md">Deliver Instantly.</span>
                </div>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  We don't just cut footage. We engineer speed. From the moment the camera stops rolling,
                  our workflow begins. Optimized for retention, algorithm dominance, and
                  <span className="text-zinc-200"> instant deployment</span>.
                </p>

              </div>
            </CardSpotlight>
          </div>
        </section>

        <CtaBanner />
      </div>

      <Footer />
    </main>
  )
}

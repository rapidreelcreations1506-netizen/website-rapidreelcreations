
import { Footer } from "@/components/shared/footer"
import { HeroSection } from "@/sections/home/hero"
import { ServicesPreviewSection } from "@/sections/home/services-preview"
import { FeaturedReels } from "@/sections/home/featured-reels"
import { VisionariesSection } from "@/sections/home/visionaries"
import { CtaBanner } from "@/sections/home/cta-banner"


export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">

      <div className="flex-1">
        <HeroSection />
        <ServicesPreviewSection />

        <FeaturedReels />
        <VisionariesSection />
        <CtaBanner />
      </div>
      <Footer />
    </main>
  )
}

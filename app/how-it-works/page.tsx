import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Clapperboard, Mail, Send } from "lucide-react"

const steps = [
    { icon: <Mail className="h-6 w-6" />, title: "1. Brief & Contact", desc: "Fill out our form or book a call. We discuss your vision, goals, and timeline." },
    { icon: <Camera className="h-6 w-6" />, title: "2. Shoot / Transfer", desc: "We schedule the shoot OR you send us your raw footage via our secure portal." },
    { icon: <Clapperboard className="h-6 w-6" />, title: "3. Magic Edit", desc: "Our editors get to work. We add music, VFX, color grade, and sound design." },
    { icon: <Send className="h-6 w-6" />, title: "4. Review & Deliver", desc: "We send a draft for your feedback. Once approved, we deliver high-res files ready to post." }
]

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-1 pt-24">
                <section className="container px-4 md:px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        How We Work
                    </h1>
                    <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
                        A streamlined process designed for speed and quality.
                    </p>
                </section>

                <section className="container px-4 md:px-6 pb-24">
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.desc}</p>

                                {/* Connector Line (Desktop) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

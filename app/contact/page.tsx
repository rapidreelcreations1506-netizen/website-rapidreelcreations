"use client"

import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { CustomSelect } from "@/components/ui/custom-select"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, ArrowRight, Instagram, Youtube, Linkedin, Facebook } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<{ type: "success" | "error" | null, message: string }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true);
        setResult({ type: null, message: "" });

        const formData = {
            access_key: "ffab3a16-7dfa-4f07-8de4-4b1b22dfbe3e",
            name: formState.name,
            email: formState.email,
            // Set the Email Subject Line
            subject: formState.subject ? `RapidReel Inquiry: ${formState.subject}` : "New Contact Form Inquiry",
            // Explicitly add the selected topic to the email body
            event_type: formState.subject || "Not Specified",
            message: formState.message,
            botcheck: false
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const json = await res.json();

            if (json.success) {
                setResult({ type: "success", message: "Message sent! We'll be in touch shortly." });
                setFormState({ name: "", email: "", subject: "", message: "" });
            } else {
                setResult({ type: "error", message: "Something went wrong. Please try again." });
            }
        } catch (error) {
            setResult({ type: "error", message: "Connection failed. Please check your internet." });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-red-900/50 selection:text-white overflow-x-hidden relative">
            <BackgroundBeams className="opacity-40" />

            <div className="relative z-10 pt-24 pb-10 md:pt-32 md:pb-16 text-center container px-4 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                        Let's Talk <span className="text-red-600">Business.</span>
                    </h1>
                    <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Ready to start your next project with us? Fill out the form below or reach out directly.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <section className="relative z-10 pb-20 md:pb-32 container px-4 mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div className="space-y-8 bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                            <ContactItem
                                icon={Mail}
                                label="Email Us"
                                value="rapidreelcreations1506@gmail.com"
                                href="mailto:rapidreelcreations1506@gmail.com"
                            />
                            <ContactItem
                                icon={Phone}
                                label="Call Us"
                                value="+91 7780131283"
                                href="tel:+917780131283"
                                subValue="+91 6301965094"
                            />
                            <ContactItem
                                icon={MapPin}
                                label="Visit Us"
                                value="Hyderabad, India"
                            />
                        </div>

                        {/* Social Media Icons - Real Icons */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 pl-2">Follow Us</h3>
                            <div className="flex gap-4">
                                <SocialButton href="https://www.instagram.com/rapidreel_creations/" icon={Instagram} />
                                <SocialButton href="https://www.youtube.com/@rapidreelcreations" icon={Youtube} />
                                <SocialButton href="https://www.linkedin.com/company/rapidreel-creations/" icon={Linkedin} />
                                <SocialButton href="https://www.facebook.com/people/RapidReel-Creations/61586176177216/" icon={Facebook} />
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Contact Form (Glassmorphism) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-neutral-900/50 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            <div className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            autoComplete="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-neutral-700"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            autoComplete="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-neutral-700"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-neutral-400">Subject</label>
                                    <CustomSelect
                                        id="subject"
                                        value={formState.subject}
                                        onChange={(value) => setFormState({ ...formState, subject: value })}
                                        options={[
                                            { value: "Event Coverage", label: "Event Coverage" },
                                            { value: "Wedding Film", label: "Wedding Film" },
                                            { value: "Commercial/Brand", label: "Commercial/Brand" },
                                            { value: "Collaboration", label: "Collaboration" },
                                            { value: "Other", label: "Other" }
                                        ]}
                                        placeholder="Select a topic"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-neutral-700 resize-none"
                                        placeholder="Tell us a bit about your project..."
                                        required
                                    />
                                </div>

                                <AnimatePresence>
                                    {result.type && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            className={`p-3 rounded-lg flex items-center gap-2 ${result.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}
                                        >
                                            {result.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                            <p className="text-sm font-medium">{result.message}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold h-12 rounded-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-lg shadow-red-900/20"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message <ArrowRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function ContactItem({ icon: Icon, label, value, href, subValue }: { icon: any, label: string, value: string, href?: string, subValue?: string }) {
    return (
        <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-red-600">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm font-medium text-zinc-500 mb-1">{label}</p>
                {href ? (
                    <a href={href} className="text-lg md:text-xl font-bold text-white hover:text-red-500 transition-colors break-all block">
                        {value}
                    </a>
                ) : (
                    <p className="text-lg md:text-xl font-bold text-white break-all">{value}</p>
                )}
                {subValue && (
                    <a href={`tel:${subValue.replace(/\s/g, '')}`} className="text-lg md:text-xl font-bold text-white hover:text-red-500 transition-colors block mt-1">
                        {subValue}
                    </a>
                )}
            </div>
        </div>
    )
}

function SocialButton({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1"
        >
            <Icon className="w-5 h-5" />
        </a>
    )
}
"use client";

import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { CustomSelect } from "@/components/ui/custom-select";
import { motion } from "framer-motion";
import { Send, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const roleOptions = [
    { value: "Video Editor (Long Form)", label: "Video Editor (Long Form)" },
    { value: "Reels/Shorts Editor", label: "Reels/Shorts Editor" },
    { value: "Motion Graphic Artist", label: "Motion Graphic Artist" },
    { value: "Scriptwriter", label: "Scriptwriter" },
    { value: "Thumbnail Designer", label: "Thumbnail Designer" },
];

export default function JoinCreatorPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [role, setRole] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        portfolio: "",
        why: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!role) {
            alert("Please select a specialization");
            return;
        }

        setStatus("submitting");

        const submissionData = {
            access_key: "ffab3a16-7dfa-4f07-8de4-4b1b22dfbe3e",
            name: formData.name,
            email: formData.email,
            subject: `New Creator Application: ${role}`,
            role: role,
            portfolio: formData.portfolio,
            message: formData.why, // Mapping pitch to message for standard viewing
            pitch: formData.why,   // Keeping original key too
            botcheck: false
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            const json = await res.json();

            if (json.success) {
                setStatus("success");
                setFormData({ name: "", email: "", portfolio: "", why: "" });
                setRole("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-red-900/50 selection:text-white pb-10 md:pb-20 overflow-x-hidden relative">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none -z-10" />

            {/* Header */}
            <section className="relative pt-32 pb-12 md:pb-20 overflow-hidden px-4">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#DC2626" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-900/10 backdrop-blur-md">
                            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Join the Team</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-none">
                            Draft Your <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">Legacy.</span>
                        </h1>
                        <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We don't hire employees. We recruit <span className="text-white font-bold">visual alchemists</span>. If you can stop the scroll, you belong here.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-3xl mx-auto bg-zinc-950/80 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                    {/* Decorative Gradient Line */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12 md:py-20"
                        >
                            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                <Send className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Application Sent.</h3>
                            <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">Your portfolio is now in our system. Our creative director reviews every submission personally. Expect a response within 48 hours.</p>
                            <Link href="/">
                                <Button className="mt-10 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 h-12 px-8 rounded-full font-semibold transition-all hover:scale-105">Return to Base</Button>
                            </Link>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-wider group-focus-within:text-red-500 transition-colors">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase tracking-wider group-focus-within:text-red-500 transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-300"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="role" className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Your Specialization</label>
                                <CustomSelect
                                    id="role"
                                    options={roleOptions}
                                    value={role}
                                    onChange={setRole}
                                    placeholder="Select your role..."
                                    className="bg-black/50"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="portfolio" className="text-xs font-bold text-zinc-500 uppercase tracking-wider group-focus-within:text-red-500 transition-colors">Portfolio Link</label>
                                <input
                                    type="url"
                                    id="portfolio"
                                    autoComplete="url"
                                    value={formData.portfolio}
                                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                    required
                                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-300"
                                    placeholder="https://"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="why" className="text-xs font-bold text-zinc-500 uppercase tracking-wider group-focus-within:text-red-500 transition-colors">The Pitch</label>
                                <textarea
                                    id="why"
                                    rows={4}
                                    value={formData.why}
                                    onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-all duration-300 resize-none"
                                    placeholder="Tell us why you're the 1%..."
                                />
                            </div>

                            {status === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Something went wrong. Please check your internet and try again.</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold h-14 rounded-xl text-lg shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {status === "submitting" ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Transmitting...
                                    </span>
                                ) : "Submit Application"}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}

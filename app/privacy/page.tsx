import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans">
            <Navbar />
            <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>Last updated: January 2026</p>
                    <p>
                        Respecting your privacy is fundamental to us at RapidReel Creations. This privacy policy
                        document outlines the types of personal information is received and collected by
                        RapidReel Creations and how it is used.
                    </p>
                    <h3>Information Collection</h3>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form,
                        sign up for a newsletter, or communicate with us directly.
                    </p>
                    <h3>Use of Information</h3>
                    <p>
                        Any information we collect from you may be used to personalize your experience,
                        improve our website, or process transactions.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

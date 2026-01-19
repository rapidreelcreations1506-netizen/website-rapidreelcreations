import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";


export const metadata = {
    title: "Terms & Conditions | RapidReel Creations",
    description: "Read our Terms & Conditions to understand the rules and regulations for using our website and services.",
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans">
            <Navbar />
            <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms & Conditions</h1>
                <div className="prose prose-invert prose-lg text-zinc-400">
                    <p>Last updated: January 2026</p>
                    <p>
                        Welcome to RapidReel Creations. These terms and conditions outline the rules and regulations
                        for the use of our Website and Services.
                    </p>
                    <h3>Acceptance of Terms</h3>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue
                        to use RapidReel Creations if you do not agree to take all of the terms and conditions stated
                        on this page.
                    </p>
                    <h3>License</h3>
                    <p>
                        Unless otherwise stated, RapidReel Creations and/or its licensors own the intellectual property
                        rights for all material on RapidReel Creations. All intellectual property rights are reserved.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

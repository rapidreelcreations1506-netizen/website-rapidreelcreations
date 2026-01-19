
import { Metadata } from "next";
import { PricingContent } from "@/sections/pricing/pricing-content";

export const metadata: Metadata = {
    title: "Pricing & Packages | RapidReel Creations",
    description: "Invest in dominance. Hourly shoots, monthly retainer packages, and custom enterprise solutions. High-quality video editing and content creation.",
    openGraph: {
        title: "Pricing - Invest in Dominance | RapidReel Creations",
        description: "Done-For-You content machines. Check our packages.",
        url: "https://rapidreelcreations.com/pricing",
    },
};

export default function PricingPage() {
    return <PricingContent />;
}

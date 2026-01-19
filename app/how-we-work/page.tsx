
import { Metadata } from "next";
import { HowWeWorkContent } from "@/sections/how-we-work/how-we-work-content";

export const metadata: Metadata = {
    title: "The Rapid Reel Workflow | How We Work",
    description: "From strategic planning to viral launch. Our 4-step process: Plan, Produce, Edit, and Deliver. Your end-to-end video partner.",
    openGraph: {
        title: "How We Work | RapidReel Creations",
        description: "Our proven workflow for creating viral content. Strategy, Production, Editing, and Launch.",
        url: "https://rapidreelcreations.com/how-we-work",
    },
};

export default function HowWeWorkPage() {
    return <HowWeWorkContent />;
}

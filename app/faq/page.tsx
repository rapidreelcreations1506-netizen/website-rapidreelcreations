
import { Metadata } from "next";
import { FaqContent } from "@/sections/faq/faq-content";

export const metadata: Metadata = {
    title: "FAQ | RapidReel Creations",
    description: "Answers in rapid speed. Learn about our turnaround times, delivery formats, booking process, and equipment.",
    openGraph: {
        title: "FAQ - Common Questions | RapidReel Creations",
        description: "Curated intelligence on our workflow and logistics.",
        url: "https://rapidreelcreations.com/faq",
    },
};

export default function FaqPage() {
    return <FaqContent />;
}

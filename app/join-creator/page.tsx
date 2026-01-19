
import { Metadata } from "next";
import { JoinCreatorContent } from "@/sections/join-creator/join-creator-content";

export const metadata: Metadata = {
    title: "Join Our Team | RapidReel Creations",
    description: "We don't hire employees. We recruit visual alchemists. If you are a video editor, motion designer, or scriptwriter, draft your legacy here.",
    openGraph: {
        title: "Careers - Join the Team | RapidReel Creations",
        description: "Looking for top-tier creative talent. Apply now.",
        url: "https://rapidreelcreations.com/join-creator",
    },
};

export default function JoinCreatorPage() {
    return <JoinCreatorContent />;
}

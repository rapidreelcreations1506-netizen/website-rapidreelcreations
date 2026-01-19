
import { Metadata } from "next";
import { AboutContent } from "@/sections/about/about-content";

export const metadata: Metadata = {
    title: "About Us | RapidReel Creations",
    description: "Redefining video editing. We are a team of visionary creators obsessed with speed and cinematic quality. Meet our founders, Sanjay and Rakesh.",
    openGraph: {
        title: "About RapidReel Creations",
        description: "The story behind the speed. Learn about our origin, our DNA, and the team orchestrating the magic.",
        url: "https://rapidreelcreations.com/about",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}

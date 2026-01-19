
import { Metadata } from "next";
import { PortfolioContent } from "@/sections/portfolio/portfolio-content";

export const metadata: Metadata = {
    title: "Our Portfolio | RapidReel Creations",
    description: "Explore our collection of high-impact visuals, event highlights, and viral social media reels. Fitness, Brands, Corporate, and Wedding video editing.",
    openGraph: {
        title: "Our Portfolio | RapidReel Creations",
        description: "Check out our latest video editing projects. Turning raw footage into viral masterpieces.",
        url: "https://rapidreelcreations.com/portfolio",
    },
};

export default function PortfolioPage() {
    return <PortfolioContent />;
}

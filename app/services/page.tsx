
import { Metadata } from "next";
import { ServicesContent } from "@/sections/services/services-content";

export const metadata: Metadata = {
  title: "Services | RapidReel Creations",
  description: "Specialized vertical video editing services. Instant event reels, wedding content creation, fitness videos, and corporate BTS. Shot. Edited. Posted.",
  openGraph: {
    title: "Services | RapidReel Creations",
    description: "Fast-paced, high-quality video editing for social media growth. See our specialized services.",
    url: "https://rapidreelcreations.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}

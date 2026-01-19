
import { Metadata } from "next";
import { ContactContent } from "@/sections/contact/contact-content";

export const metadata: Metadata = {
    title: "Contact Us | RapidReel Creations",
    description: "Ready to start your next project? Let's talk business. Reach out for event coverage, wedding films, and brand collaborations in Hyderabad.",
    openGraph: {
        title: "Contact RapidReel Creations",
        description: "Book your shoot or discuss a collaboration. We are ready.",
        url: "https://rapidreelcreations.com/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
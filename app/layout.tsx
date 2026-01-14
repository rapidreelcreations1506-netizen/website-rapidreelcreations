import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";
import { FloatingContact } from "@/components/shared/floating-contact";
import { ChatWidget } from "@/components/shared/chat-widget";
import { Preloader } from "@/components/ui/preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rapidreelcreations.com'),
  title: {
    default: "RapidReel Creations | Professional Video Editing",
    template: "%s | RapidReel Creations"
  },
  description: "Capture. Edit. Deliver. We turn raw footage into viral masterpieces. Professional video editing services for creators, brands, and events.",
  keywords: ["video editing", "reels editor", "portfolio", "creative agency", "video production", "filmmaking", "visual storytelling"],
  openGraph: {
    title: "RapidReel Creations | Professional Video Editing",
    description: "Capture. Edit. Deliver. Professional video editing services for creators and brands.",
    url: "https://rapidreelcreations.com",
    siteName: "RapidReel Creations",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this exists or use a generic portfolio image
        width: 1200,
        height: 630,
        alt: "RapidReel Creations Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidReel Creations",
    description: "Professional video editing for the modern web.",
    // images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/tab-logo.png",
    apple: "/images/tab-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RapidReel Creations",
              "url": "https://rapidreelcreations.com",
              "logo": "https://rapidreelcreations.com/images/tab-logo.png",
              "sameAs": [
                "https://www.instagram.com/rapidreel_creations/",
                "https://www.youtube.com/@rapidreelcreations"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9999999999",
                "contactType": "customer service"
              }
            })
          }}
        />
        <Preloader />
        {children}
        <Navbar />
        <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none flex flex-col items-end gap-4 sm:bottom-10 sm:right-10">
          {/* Wrapper to manage stacking if needed, but components are fixed positioned */}
        </div>
        <FloatingContact />
        <ChatWidget />
      </body>
    </html>
  );
}

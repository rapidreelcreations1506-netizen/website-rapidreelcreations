import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden">
            {/* Top Glowing Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-12 md:mb-24">

                    {/* Brand & Mission - Spans 4 columns */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-8">
                        <Link href="/" className="block">
                            <div className="relative h-14 w-56">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="RapidReel Creations"
                                    fill
                                    className="object-contain object-left"
                                    sizes="200px" // Optimized for footer logo
                                    loading="eager"
                                />
                            </div>
                        </Link>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-sm">
                            We don't just edit videos; we engineer attention. The professional choice for creators who demand excellence.
                        </p>
                        <div className="flex flex-col gap-2 pt-4">
                            <a href="mailto:rapidreelcreations1506@gmail.com" className="text-zinc-200 hover:text-red-500 transition-colors text-lg font-medium flex items-center gap-2 group">
                                rapidreelcreations1506@gmail.com <ArrowUpRight className="w-4 h-4 text-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <p className="text-zinc-500 flex gap-4">
                                <span>+91 7780131283</span>
                                <span>•</span>
                                <span>+91 6301965094</span>
                            </p>
                        </div>
                    </div>

                    {/* Navigation - Spans rest */}
                    <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-white font-medium text-lg tracking-wide border-b border-zinc-800 pb-2 inline-block">Company</h4>
                            <ul className="space-y-4">
                                {['Home', 'About Us', 'How We Work', 'FAQ'].map((item) => (
                                    <li key={item}>
                                        <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} className="text-zinc-500 hover:text-red-400 transition-colors duration-300 block hover:translate-x-1">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white font-medium text-lg tracking-wide border-b border-zinc-800 pb-2 inline-block">Services</h4>
                            <ul className="space-y-4">
                                {['Event Reels', 'Wedding Reels', 'Promo Videos', 'Social Content'].map((item) => (
                                    <li key={item}>
                                        <Link href="/services" className="text-zinc-500 hover:text-red-400 transition-colors duration-300 block hover:translate-x-1">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white font-medium text-lg tracking-wide border-b border-zinc-800 pb-2 inline-block">Socials</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.instagram.com/rapidreel_creations/" target="_blank" className="text-zinc-500 hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 group">
                                        <Instagram className="w-5 h-5 group-hover:stroke-pink-500 transition-colors" /> Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@rapidreelcreations" target="_blank" className="text-zinc-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-2 group">
                                        <Youtube className="w-5 h-5 group-hover:stroke-red-600 transition-colors" /> YouTube
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/rapidreel-creations/" target="_blank" className="text-zinc-500 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2 group">
                                        <Linkedin className="w-5 h-5 group-hover:stroke-blue-500 transition-colors" /> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/people/RapidReel-Creations/61586176177216/" target="_blank" className="text-zinc-500 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group">
                                        <Facebook className="w-5 h-5 group-hover:stroke-blue-600 transition-colors" /> Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Giant Text Logo */}
                <div className="pt-8 border-t border-zinc-900 border-dashed relative">
                    <div className="w-full overflow-hidden">
                        <h1 className="text-[12vw] leading-[0.8] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950 md:from-zinc-800 md:to-zinc-950 uppercase tracking-tighter select-none md:hover:from-red-900 md:hover:to-zinc-950 transition-all duration-700 cursor-default">
                            RAPID REEL
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-zinc-600 text-sm">
                        <p>&copy; 2026 RapidReel Creations.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-red-500 transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

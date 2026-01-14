"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CtaBanner() {
    return (
        <div className="w-full px-4">
            <CardSpotlight className="w-full max-w-6xl mx-auto h-auto min-h-[400px] flex flex-col items-center justify-center p-10 border-neutral-800 bg-neutral-950/50">
                <div className="relative z-10 text-center space-y-6">
                    <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Create the <span className="text-red-600">Extraordinary.</span>
                    </h2>
                    <p className="text-neutral-300 max-w-xl mx-auto text-lg">
                        Join the top 1% of creators. We bring the skills, the gear, and the vision.
                        You bring the story.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact">
                            <Button className="bg-white text-black hover:bg-neutral-200 hover:text-red-600 rounded-full h-14 px-10 text-xl font-bold transition-all hover:scale-105 group">
                                Start Your Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardSpotlight>
        </div>
    );
}

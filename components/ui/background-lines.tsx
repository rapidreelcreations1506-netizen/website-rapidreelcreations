"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundLines = ({
    children,
    className,
    svgOptions,
}: {
    children?: React.ReactNode;
    className?: string;
    svgOptions?: {
        duration?: number;
    };
}) => {
    return (
        <div
            className={cn(
                "relative h-[30rem] w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center",
                className
            )}
        >
            <div className="absolute inset-0 w-full h-full bg-neutral-950 z-0">
                <SVGPattern {...svgOptions} />
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

const SVGPattern = ({ duration }: { duration?: number }) => {
    return (
        <div className="absolute top-0 w-full h-full flex items-center justify-center opacity-30">
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,50 Q25,30 50,50 T100,50"
                    fill="none"
                    stroke="rgba(220, 38, 38, 0.5)"
                    strokeWidth="0.5"
                    initial={{ d: "M0,50 Q25,30 50,50 T100,50" }}
                    animate={{
                        d: [
                            "M0,50 Q25,30 50,50 T100,50",
                            "M0,50 Q25,70 50,50 T100,50",
                            "M0,50 Q25,30 50,50 T100,50",
                        ],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.path
                    d="M0,50 Q25,40 50,50 T100,50"
                    fill="none"
                    stroke="rgba(100, 100, 100, 0.3)"
                    strokeWidth="0.5"
                    initial={{ d: "M0,50 Q25,40 50,50 T100,50" }}
                    animate={{
                        d: [
                            "M0,50 Q25,40 50,50 T100,50",
                            "M0,50 Q25,60 50,50 T100,50",
                            "M0,50 Q25,40 50,50 T100,50",
                        ],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Add more paths for complexity if needed */}
            </svg>

            {/* We can use a more complex predefined pattern if CSS blobs aren't enough */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
        </div>
    );
};

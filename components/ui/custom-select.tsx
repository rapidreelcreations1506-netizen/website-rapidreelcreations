"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    id?: string;
}

export function CustomSelect({ options, value, onChange, placeholder = "Select an option", className, id }: CustomSelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Close on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabel = options.find((opt) => opt.value === value)?.label;

    return (
        <div className={cn("relative w-full", className)} ref={containerRef}>
            <button
                type="button"
                id={id}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-left flex items-center justify-between transition-colors focus:outline-none focus:border-red-600",
                    isOpen ? "border-red-600" : "hover:border-zinc-700"
                )}
            >
                <span className={cn("block truncate", !value ? "text-zinc-500" : "text-white")}>
                    {selectedLabel || placeholder}
                </span>
                <ChevronDown className={cn("w-4 h-4 text-zinc-500 transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto"
                    >
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "w-full px-4 py-3 text-left flex items-center justify-between transition-colors text-sm",
                                    value === option.value
                                        ? "bg-red-900/20 text-red-500"
                                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                                )}
                            >
                                {option.label}
                                {value === option.value && <Check className="w-4 h-4 text-red-600" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

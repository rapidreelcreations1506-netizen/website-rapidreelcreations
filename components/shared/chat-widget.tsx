"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, MessageSquare, Minimize2, Sparkles, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type Step = "name" | "phone" | "email" | "eventType" | "message" | "sending" | "success" | "error"

interface FormData {
    name: string;
    phone: string;
    email: string;
    eventType: string;
    message: string;
}

interface Message {
    role: "bot" | "user";
    content: string;
    isError?: boolean;
}

// Validation Regex Patterns
const VALIDATION = {
    name: /^[a-zA-Z\s]{2,50}$/, // Only letters and spaces, 2-50 chars
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, // Basic phone format
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Standard email
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState<Step>("name")
    const [formData, setFormData] = useState<FormData>({
        name: "", phone: "", email: "", eventType: "", message: ""
    })
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    // Initial State
    const initialMessages: Message[] = [
        { role: "bot", content: "Hello! Welcome to RapidReel Creations." },
        { role: "bot", content: "I can help you get a custom quote or start a project. What's your name?" }
    ]
    const [messages, setMessages] = useState<Message[]>(initialMessages)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const toggleOpen = () => setIsOpen(!isOpen)

    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages, isOpen, isTyping])

    useEffect(() => {
        if (isOpen && step !== "sending" && step !== "success" && step !== "error") {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen, step])

    const simulateBotResponse = (content: string, nextStep: Step | null, delay = 1000) => {
        setIsTyping(true)
        setTimeout(() => {
            setIsTyping(false)
            setMessages(prev => [...prev, { role: "bot", content }])
            if (nextStep) setStep(nextStep)
        }, delay)
    }

    const resetChat = () => {
        setStep("name")
        setMessages(initialMessages)
        setFormData({ name: "", phone: "", email: "", eventType: "", message: "" })
    }

    const handleSend = async () => {
        if (!inputValue.trim() && step !== "message") return;

        // Prevent multiple rapid clicks
        if (isTyping || step === "sending") return;

        const userMsg = inputValue.trim()

        // Add User Message immediately
        setMessages(prev => [...prev, { role: "user", content: userMsg }])
        setInputValue("")

        // --- VALIDATION AND LOGIC ---
        switch (step) {
            case "name":
                if (!VALIDATION.name.test(userMsg)) {
                    simulateBotResponse("That doesn't look like a valid name. Please use letters only (no numbers).", null, 600)
                    return // Clean exit, stay on "name" step
                }
                setFormData(prev => ({ ...prev, name: userMsg }))
                simulateBotResponse(`Hi ${userMsg}! nice to meet you. What's the best phone number to reach you at?`, "phone")
                break;

            case "phone":
                if (!VALIDATION.phone.test(userMsg)) {
                    // More specific error
                    simulateBotResponse("Please enter a valid phone number (digits only, e.g., 9876543210).", null, 600)
                    return
                }
                setFormData(prev => ({ ...prev, phone: userMsg }))
                simulateBotResponse("Got it. And your email address?", "email")
                break;

            case "email":
                if (!VALIDATION.email.test(userMsg)) {
                    simulateBotResponse("That seems to be an invalid email (needs @ and .domain). Please try again.", null, 600)
                    return
                }
                setFormData(prev => ({ ...prev, email: userMsg }))
                simulateBotResponse("Great. What type of project are you planning? (e.g., Wedding, Corporate, Music Video)", "eventType")
                break;

            case "eventType":
                if (userMsg.length < 3) {
                    simulateBotResponse("Please be a bit more specific (at least 3 characters).", null, 600)
                    return
                }
                setFormData(prev => ({ ...prev, eventType: userMsg }))
                simulateBotResponse("Understood. Please provide some details about your vision (at least 10 chars).", "message")
                break;

            case "message":
                if (userMsg.length < 10) {
                    simulateBotResponse("That's a bit short. Please tell us a little more about what you need (min 10 characters) so we can help.", null, 600)
                    return
                }

                const finalData = { ...formData, message: userMsg }
                setFormData(finalData)
                setIsTyping(true)
                setStep("sending")

                try {
                    const res = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            access_key: "ffab3a16-7dfa-4f07-8de4-4b1b22dfbe3e", // Rapid Reel Access Key
                            name: finalData.name,
                            email: finalData.email,
                            subject: `New Lead: ${finalData.name} - ${finalData.eventType}`,
                            message: `
                                Name: ${finalData.name}
                                Phone: ${finalData.phone}
                                Email: ${finalData.email}
                                Event Type: ${finalData.eventType}
                                Message: ${finalData.message}
                            `,
                            botcheck: false,
                        }),
                    });

                    const json = await res.json();

                    if (json.success) {
                        setStep("success")
                        setMessages(prev => [...prev, { role: "bot", content: "Perfect! We've received your details. I'll reset myself now..." }])

                        // AUTO-CLOSE AND RESET LOGIC
                        setTimeout(() => {
                            setIsOpen(false) // Close the chat window
                            setTimeout(() => {
                                resetChat() // Reset state in background for next time
                            }, 500)
                        }, 4000) // Wait 4 seconds for user to read success message

                    } else {
                        console.error("Web3Forms Error:", json)
                        setStep("error")
                        setMessages(prev => [...prev, { role: "bot", content: "Something went wrong. Please try contacting us via WhatsApp." }])
                    }
                } catch (error) {
                    console.error("Fetch Error:", error)
                    setStep("error")
                    setMessages(prev => [...prev, { role: "bot", content: "Connection failed. Please check your internet." }])
                } finally {
                    setIsTyping(false)
                }
                break;
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend()
        }
    }

    return (
        <div className="fixed bottom-6 left-6 z-[9990] flex flex-col items-start font-sans antialiased">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: "bottom left" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-4 w-[calc(100vw-3rem)] sm:w-[380px] h-[450px] sm:h-[550px] bg-[#09090b]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-white/5 p-4 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/20">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-sm">Rapid Studio Assistant</h3>
                                    <div className="flex items-center gap-1.5 opacity-60">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <p className="text-[10px] text-white font-medium uppercase tracking-wide">Online Now</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={toggleOpen} className="text-zinc-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-md">
                                <ChevronDown className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "flex w-full",
                                        msg.role === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={cn(
                                        "max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-sm",
                                        msg.role === "user"
                                            ? "bg-red-600 text-white rounded-2xl rounded-br-sm"
                                            : "bg-zinc-800/80 text-zinc-200 rounded-2xl rounded-bl-sm border border-white/5"
                                    )}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-800/50 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/5">
                            {step === "success" ? (
                                <div className="text-center py-2">
                                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
                                        <Sparkles className="w-5 h-5 text-green-500" />
                                    </div>
                                    <p className="text-white font-medium text-sm">Message Sent!</p>
                                    <p className="text-xs text-zinc-500 mt-1">Closing chat in a moment...</p>
                                </div>
                            ) : (
                                <div className="flex gap-2 relative">
                                    <input
                                        ref={inputRef}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        disabled={isTyping || step === "sending"}
                                        placeholder={isTyping ? "Assistant is typing..." : "Type your message..."}
                                        className="flex-1 bg-black/20 border border-white/10 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 placeholder:text-zinc-500 transition-all"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!inputValue.trim() || isTyping || step === "sending"}
                                        className="bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl w-12 h-12 flex items-center justify-center transition-all shadow-lg shadow-red-900/20"
                                    >
                                        <Send className="w-5 h-5 ml-0.5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher Button */}
            <motion.button
                onClick={toggleOpen}
                layoutId="chat-launcher"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative z-[9999] transition-all duration-300",
                    isOpen ? "bg-zinc-800 rotate-90" : "bg-white text-black hover:bg-zinc-200"
                )}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <div className="relative">
                        <MessageSquare className="w-6 h-6 fill-current" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 border-2 border-white rounded-full flex items-center justify-center">
                            <span className="w-full h-full rounded-full animate-ping bg-red-500 opacity-75 absolute" />
                        </span>
                    </div>
                )}
            </motion.button>
        </div>
    )
}

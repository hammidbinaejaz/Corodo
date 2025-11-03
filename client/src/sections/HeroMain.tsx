"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { RoboAnimation } from "@/components/robo-animation";
import { FloatingPaper } from "@/components/floating-paper";
import { SparklesCore } from "@/components/sparkles2";
import { ArrowRight, Map } from "lucide-react";


export default function HeroMain() {
    return (
        <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 relative z-20 overflow-hidden">
            <div className="mt-[12vh]"></div>
            <div className="h-full w-full absolute inset-0 z-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className="absolute inset-0 overflow-hidden -z-30">
                <FloatingPaper count={3} />
            </div>
            <AnimatedGradientText>
                ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                    className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#60a5fa] via-[#1e40af] to-[#60a5fa] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}
                >
                    Introducing Corodo
                </span>
            </AnimatedGradientText>
            <div className="relative z-20 mx-auto my-6 text-center">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                    Hammid
                </h1>
                <p className="text-xl md:text-2xl font-medium text-neutral-300 mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
                    AI & ML Engineer | Builder of Corodo
                </p>
                <div className="mt-4 text-center text-3xl font-semibold tracking-tight text-neutral-300 md:text-5xl">
                    <p>AI-Powered Career Guidance</p>
                    <div className="mt-2 md:mt-4"><Cover className="py-2">Your Path to Professional Success</Cover></div>
                </div>
            </div>
            <p className="relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-base font-medium text-gray-300 md:text-lg lg:text-lg">
                Get personalized career advice and roadmap guidance tailored to your goals.
            </p>
            
            {/* CTA Buttons */}
            <div className="relative z-20 flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 items-center justify-center">
                <Link 
                    href="/advisor"
                    className={cn(
                        "group relative px-8 py-4 rounded-xl bg-[#1e40af] text-white font-semibold text-lg",
                        "transition-all duration-300 hover:bg-[#1e3a94] hover:shadow-lg hover:shadow-[#1e40af]/50",
                        "hover:scale-105 active:scale-95",
                        "flex items-center gap-2"
                    )}
                >
                    <span>Try AI Advisor</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#60a5fa] to-[#1e40af] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                </Link>
                
                <Link 
                    href="/roadmap"
                    className={cn(
                        "group relative px-8 py-4 rounded-xl border-2 border-[#1e40af]/50 text-[#1e40af] font-semibold text-lg",
                        "bg-[#1e40af]/5 backdrop-blur-sm",
                        "transition-all duration-300 hover:bg-[#1e40af]/10 hover:border-[#1e40af] hover:shadow-lg hover:shadow-[#1e40af]/20",
                        "hover:scale-105 active:scale-95",
                        "flex items-center gap-2"
                    )}
                >
                    <Map className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Explore Roadmaps</span>
                </Link>
            </div>
        </div>
    );
}

"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroFrameProps {
    children: React.ReactNode;
}

export function HeroFrame({ children }: HeroFrameProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Scroll mapping
    // 0 to 200px scroll -> scale down from 1 to 0.94, borderRadius 0 to 32
    const scale = useTransform(scrollY, [0, 200], [1, 0.94]);
    const borderRadius = useTransform(scrollY, [0, 200], [0, 32]);
    const y = useTransform(scrollY, [0, 200], [0, 24]);
    // Subtle opacity/brightness change (optional)

    // Outer background lightens as we scroll down to reveal content below
    // Handled by the parent page background, but the Hero stays dark inside.

    return (
        <div ref={containerRef} className="relative w-full h-auto min-h-screen pt-[64px] pb-12 flex justify-center perspective-[1200px]">
            <motion.div
                style={{
                    scale,
                    borderRadius,
                    y,
                }}
                className={cn(
                    "w-full max-w-[1400px] mx-auto", // Max width constraint
                    "bg-[#0a0a0c] text-white", // Force dark theme inside this box
                    "overflow-hidden shadow-2xl origin-top",
                    "will-change-transform" // Performance optimization
                )}
            >
                {children}
            </motion.div>
        </div>
    );
}

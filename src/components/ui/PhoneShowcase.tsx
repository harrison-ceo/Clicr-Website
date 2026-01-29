"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface PhoneShowcaseProps {
    images: (string | { src: string; objectFit?: "cover" | "contain" | "fill"; hideStatusBar?: boolean })[]; // [Main, Left, Right]
}

export function PhoneShowcase({ images }: PhoneShowcaseProps) {
    // Scroll Motion Hooks
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // --- Transforms ---
    const springConfig = { stiffness: 100, damping: 20, restDelta: 0.001 };

    // Mobile-aware transforms
    const xLeftRaw = useTransform(scrollYProgress, [0, 0.5], [0, -140]);
    const xLeftMobileRaw = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

    const xRightRaw = useTransform(scrollYProgress, [0, 0.5], [0, 140]);
    const xRightMobileRaw = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

    const rotateLeftRaw = useTransform(scrollYProgress, [0, 0.5], [0, 8]);
    const rotateRightRaw = useTransform(scrollYProgress, [0, 0.5], [0, -8]);
    const yShiftRaw = useTransform(scrollYProgress, [0, 0.5], [0, 20]);
    const scaleCenterRaw = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

    // Springs
    const xLeft = useSpring(xLeftRaw, springConfig);
    const xLeftMobile = useSpring(xLeftMobileRaw, springConfig);
    const xRight = useSpring(xRightRaw, springConfig);
    const xRightMobile = useSpring(xRightMobileRaw, springConfig);

    const rotateLeft = useSpring(rotateLeftRaw, springConfig);
    const rotateRight = useSpring(rotateRightRaw, springConfig);
    const yShift = useSpring(yShiftRaw, springConfig);
    const scaleCenter = useSpring(scaleCenterRaw, springConfig);

    // Normalization helper
    const getImage = (img: string | { src: string; objectFit?: "cover" | "contain" | "fill"; hideStatusBar?: boolean } | undefined) => {
        if (!img) return { src: "", objectFit: "cover" as const, hideStatusBar: false };
        if (typeof img === "string") return { src: img, objectFit: "cover" as const, hideStatusBar: false };
        return { src: img.src, objectFit: img.objectFit || "cover", hideStatusBar: img.hideStatusBar };
    };

    const main = getImage(images[0]);
    const left = getImage(images[1]);
    const right = getImage(images[2]);

    // Fallbacks if only main provided
    const leftImage = left.src ? left : main;
    const rightImage = right.src ? right : main;

    return (
        <div ref={containerRef} className="relative w-full max-w-[1000px] h-[400px] sm:h-[500px] md:h-[700px] flex justify-center items-center perspective-[2000px] overflow-visible">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[1200px] pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-500/15 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen" />
            </div>

            {/* Left Phone */}
            <motion.div
                initial={{ opacity: 0, x: -30, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 12 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute left-[10%] sm:left-[15%] md:left-[10%] top-[15%] md:top-[10%] w-[130px] sm:w-[180px] md:w-[280px] z-10 will-change-transform"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
                <motion.div style={{
                    x: shouldReduceMotion ? 0 : (typeof window !== 'undefined' && window.innerWidth < 768 ? xLeftMobile : xLeft),
                    rotateY: shouldReduceMotion ? 0 : rotateLeft,
                    y: shouldReduceMotion ? 0 : yShift
                }}>
                    <PhoneFrame src={leftImage.src} alt="App Screenshot" objectFit={leftImage.objectFit} hideStatusBar={leftImage.hideStatusBar} />
                </motion.div>
            </motion.div>

            {/* Right Phone */}
            <motion.div
                initial={{ opacity: 0, x: 30, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: -12 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute right-[10%] sm:right-[15%] md:right-[10%] top-[15%] md:top-[10%] w-[130px] sm:w-[180px] md:w-[280px] z-10 will-change-transform"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
                <motion.div style={{
                    x: shouldReduceMotion ? 0 : (typeof window !== 'undefined' && window.innerWidth < 768 ? xRightMobile : xRight),
                    rotateY: shouldReduceMotion ? 0 : rotateRight,
                    y: shouldReduceMotion ? 0 : yShift
                }}>
                    <PhoneFrame src={rightImage.src} alt="App Screenshot" objectFit={rightImage.objectFit} hideStatusBar={rightImage.hideStatusBar} />
                </motion.div>
            </motion.div>

            {/* Center Phone (Main) */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-30 w-[160px] sm:w-[220px] md:w-[320px] will-change-transform"
            >
                <motion.div style={{
                    scale: shouldReduceMotion ? 1 : scaleCenter
                }}>
                    <PhoneFrame src={main.src} alt="App Screenshot - Main" isMain objectFit={main.objectFit} hideStatusBar={main.hideStatusBar} />
                </motion.div>
            </motion.div>

        </div>
    );
}

function PhoneFrame({ src, alt, isMain = false, objectFit = "cover", hideStatusBar = false }: { src: string; alt: string; isMain?: boolean; objectFit?: "cover" | "contain" | "fill"; hideStatusBar?: boolean }) {
    return (
        <div className={cn(
            "relative w-full aspect-[9/19.5] bg-black rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-3 shadow-2xl border-[3px] md:border-[6px] border-[#1a1a1a] overflow-hidden",
            "ring-1 ring-white/10",
            isMain ? "shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)]" : "shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)]"
        )}>
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[12px] md:h-[24px] w-[25%] md:w-[30%] bg-black rounded-b-lg md:rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[1.6rem] md:rounded-[2.5rem] overflow-hidden bg-[#000]">
                {src && (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className={cn(
                            "object-cover origin-top transition-transform duration-500",
                            objectFit === "contain" && "object-contain",
                            objectFit === "fill" && "object-fill",
                            // Less aggressive cropping for status bar removal
                            hideStatusBar ? "scale-[1.02] -translate-y-[1%]" : "scale-100"
                        )}
                        priority={isMain}
                        sizes="(max-width: 768px) 160px, 320px"
                    />
                )}
            </div>

            {/* Reflection/Gloss Overlay */}
            <div className="absolute inset-0 w-full h-full rounded-[2rem] md:rounded-[3rem] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent z-10 mix-blend-overlay" />
        </div>
    );
}

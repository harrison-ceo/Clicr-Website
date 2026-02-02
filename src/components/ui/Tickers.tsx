"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate, motion } from "framer-motion";

export function CountTicker({
    from = 50000,
    to = 1500000,
    delay = 0.5,
    duration = 3,
    className = "",
}: {
    from?: number;
    to?: number;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(from);
    const [displayValue, setDisplayValue] = useState("50K+");

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                const controls = animate(count, to, { duration: duration, ease: "easeOut" });
                return () => controls.stop();
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, delay, to, count, duration]);

    useEffect(() => {
        return count.on("change", (latest) => {
            if (latest >= 1000000) {
                setDisplayValue((latest / 1000000).toFixed(1) + "M+");
            } else if (latest >= 1000) {
                setDisplayValue(Math.floor(latest / 1000) + "K+");
            } else {
                setDisplayValue(Math.floor(latest).toString());
            }
        });
    }, [count]);

    return (
        <span ref={ref} className={className}>
            {displayValue}
        </span>
    );
}

const SETUP_STATES = [
    "2 Weeks",
    "1 Week",
    "6 Days",
    "5 Days",
    "4 Days",
    "3 Days",
    "2 Days",
    "24 Hours",
    "12 Hours",
    "6 Hours",
    "3 Hours",
    "1 Hour",
    "45 Min",
    "30 Min",
    "15 Min",
    "< 6 Min",
];

export function SetupTicker({
    delay = 0.5,
    duration = 3,
    className = "",
}: {
    delay?: number;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [text, setText] = useState(SETUP_STATES[0]);

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                // Animate a value from 0 to total states - 1
                const controls = animate(0, SETUP_STATES.length - 1, {
                    duration: duration,
                    ease: "linear", // Linear is better for text replacement
                    onUpdate: (value) => {
                        const index = Math.floor(value);
                        // Ensure we don't go out of bounds
                        const safeIndex = Math.min(index, SETUP_STATES.length - 1);
                        setText(SETUP_STATES[safeIndex]);
                    },
                });
                return () => controls.stop();
            }, delay * 1000);

            return () => clearTimeout(timeout);
        }
    }, [isInView, delay, duration]);

    return (
        <span ref={ref} className={className}>
            {text}
        </span>
    );
}

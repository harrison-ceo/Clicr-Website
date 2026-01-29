import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
    name: string;
    src: string;
    alt: string;
};

const DEFAULT_LOGOS: Logo[] = [
    { name: "Grand Central", src: "/logos/grand-central.png", alt: "Grand Central Station" },
    { name: "TikTok", src: "/logos/tiktok.png", alt: "TikTok" },
    { name: "House of Yes", src: "/logos/house-of-yes.png", alt: "House of Yes Brooklyn" },
];

export default function LogoCloud({ logos = DEFAULT_LOGOS, className }: { logos?: Logo[]; className?: string }) {
    return (
        <section className={cn("py-14 md:py-18 bg-white border-b border-gray-100", className)}>
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                {/* Headline */}
                <h3 className="text-[12px] md:text-[13px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-12">
                    Trusted by Operators and Venues
                </h3>

                {/* Logos Container */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="relative group flex items-center justify-center transition-all duration-500 ease-in-out cursor-default"
                        >
                            <div className={cn(
                                "relative flex items-center justify-center",
                                logo.name === "Grand Central" ? "h-[70px] md:h-[96px] w-auto min-w-[140px]" : "h-[40px] md:h-[56px] w-auto min-w-[100px]"
                            )}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    height={80}
                                    width={200}
                                    className="h-full w-auto object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footnote */}
                <div className="mt-12 w-full flex justify-center">
                    <p className="text-[11px] md:text-[12px] text-gray-400 font-medium">
                        Logos represent pilots, partnerships, or active user testing.
                    </p>
                </div>
            </div>
        </section >
    );
}

"use client";

// Import Next
import Image from "next/image";
import Link from "next/link";
// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";
// Import de Lucide Icons
import { Quote } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";
// Import des datas
import { teamMembers, values } from "@/data/about";

// Page About
export default function AboutPage() {
    const containerRef = useRef(null);

    // Scroll pour le watermark
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 0.5], ["5%", "-25%"]);

    return (
        <div
            className="bg-[#FDFBF7] min-h-screen overflow-hidden relative"
            ref={containerRef}
        >

            {/* Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Texte de fond "FAMIGLIA" */}
            <div className="absolute top-[5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        FAMIGLIA FAMIGLIA
                    </h2>
                </motion.div>
            </div>

            <div className="relative z-10">
                {/* Titre + Description */}
                <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-italian-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                            Notre Histoire
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                            Une histoire de <br/>
                            <span className="italic text-italian-gold font-light">Famille.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            Depuis 1985, La Dolce Vita est le gardien d'un savoir-faire transmis de génération en génération. Une histoire d'amour entre Bruxelles et la Toscane.
                        </p>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
"use client";

// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// Composant Hero de la page " La carte "
export default function MenuHero() {
    const containerRef = useRef(null);

    // Scroll pour le texte de fond
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["12%", "-20%"]);

    return (
        <div ref={containerRef}>
            {/* Texte de fond "LA CARTA" */}
            <div className="absolute top-[8.5%] md:top-[12.7%] lg:top-[15.5%] xl:top-[6.5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        LA CARTA
                    </h2>
                </motion.div>
            </div>

            {/* Header */}
            <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                        <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                            Esperienza
                        </span>
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                        L'Art de la <br/>
                        <span className="italic text-italian-gold font-light">Dégustation.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
                        Une invitation au voyage culinaire à travers les terroirs d'Italie.
                        Découvrez une sélection de produits d'exception et de recettes authentiques.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}

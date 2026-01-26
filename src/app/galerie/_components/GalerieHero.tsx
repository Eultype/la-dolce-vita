"use client";

// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// Composant Hero de la page " Galerie "
export default function GalerieHero() {
    const containerRef = useRef(null);

    // Scroll pour le texte de fond
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

    return (
        <div ref={containerRef}>
            {/* Texte de fond "GALLERIA" */}
            <div className="absolute top-[10.2%] md:top-[10.3%] lg:top-[13%] xl:top-[4.7%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        GALLERIA
                    </h2>
                </motion.div>
            </div>

            {/* Header */}
            <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase block">
                                Atmosfera
                            </span>
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                        Instants de <br/>
                        <span className="italic text-italian-gold font-light">Vie.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
                        Une mosaïque de souvenirs et de lumières. Plongez dans l'atmosphère unique de La Dolce Vita, là où chaque détail compte.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}

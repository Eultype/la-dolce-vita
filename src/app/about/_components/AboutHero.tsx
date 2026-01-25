"use client";

// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// Composant Hero de la page " À propos "
export default function AboutHero() {
    const containerRef = useRef(null);

    // Scroll pour le watermark
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["25%", "-30%"]);

    return (
        <div ref={containerRef}>
            {/* Texte de fond "FAMIGLIA" */}
            <div className="absolute top-[5.2%] md:top-[9.0%] lg:top-[11.5%] xl:top-[4.5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        FAMIGLIA
                    </h2>
                </motion.div>
            </div>

            {/* Titre + Description */}
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
                            La Nostra Storia
                        </span>
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                        Une histoire de <br/>
                        <span className="italic text-italian-gold font-light">Famille.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
                        Depuis 1985, La Dolce Vita est le gardien d'un savoir-faire transmis de génération en génération. Une histoire d'amour entre Bruxelles et la Toscane.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}

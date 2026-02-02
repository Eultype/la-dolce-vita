"use client";

// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// Composant Hero de la page " Contact "
export default function ContactHero() {
    const containerRef = useRef(null);

    // Scroll pour le texte de fond
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

    return (
        <div ref={containerRef}>
            {/* Texte de fond "CONTATTO" */}
            <div className="absolute top-[6%] md:top-[5%] lg:top-[6.5%] xl:top-[5.5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap flex justify-end">
                    <h2 className="font-serif text-[20vw] leading-none font-bold text-black tracking-tighter">
                        CONTATTO
                    </h2>
                </motion.div>
            </div>

            {/* Header */}
            <section className="container mx-auto px-4 text-center mb-24 relative z-10 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                        <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                            Parliamo Insieme
                        </span>
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl text-foreground font-medium leading-[1.1] mb-8">
                        Entrons en <br/>
                        <span className="italic text-italian-gold font-light">Contact.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed mx-auto">
                        Une question sur notre carte ? Une demande de privatisation ?
                        Ou simplement envie de dire bonjour ? Nous sommes à votre écoute.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}

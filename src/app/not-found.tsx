"use client";

// Import Next
import Link from "next/link";
// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";
// Import des composants
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const containerRef = useRef(null);

    // Effet de parallaxe
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["3%", "-12%"]);

    return (
        <div 
            className="bg-[#FDFBF7] min-h-screen flex flex-col items-center justify-center overflow-hidden relative group" 
            ref={containerRef}
        >
            
            {/* Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Texte de fond "PERDUTO" */}
            <div className="absolute top-[10%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        PERDUTO PERDUTO
                    </h2>
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex items-center gap-4"
                >
                    <div className="h-px w-8 bg-italian-gold/40"></div>
                    <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                        Errore
                    </span>
                    <div className="h-px w-8 bg-italian-gold/40"></div>
                </motion.div>

                {/* Titre */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-8"
                >
                    Page non <br/>
                    <span className="italic text-italian-gold font-light">Trouvée.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-12"
                >
                    Il semblerait que ce plat ne soit plus à la carte. <br className="hidden md:block" />
                    Cette page est introuvable, comme la recette secrète de la Nonna.
                </motion.p>

                {/* Bouton retour à l'accueil */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Button 
                        asChild 
                        variant="hero" 
                        size="xl" 
                        className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-italian-gold hover:text-white transition-all duration-500 shadow-xl border-none uppercase text-xs tracking-[0.2em] font-bold"
                    >
                        <Link href="/">
                            Retour à l'accueil
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

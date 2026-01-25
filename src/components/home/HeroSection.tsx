"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import de React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";
// Import des composants
import { Button } from "@/components/ui/button";

// Composant de la section Hero
const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax fluide
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Variantes d'animation cohérentes
    const titleVariant = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
        }
    };
    return (
        <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#1a1512]">
            {/* Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/scene-restaurant2.jpg"
                    alt="Cuisine italienne authentique"
                    fill
                    className="object-cover opacity-90"
                    priority
                    sizes="100vw"
                    quality={100}
                />
                {/* Overlay chaud */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1a1512]/90 z-10" />
            </motion.div>

            {/* Contenu */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="max-w-6xl mx-auto flex flex-col items-center"
                >
                    {/* Signature "Depuis 1985" */}
                    <motion.div
                        variants={titleVariant}
                        className="mb-6 md:mb-8 flex flex-col items-center gap-3"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-px w-8 md:w-12 bg-italian-gold/40"></div>
                            <span className="text-italian-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                                Since 1985
                            </span>
                            <div className="h-px w-8 md:w-12 bg-italian-gold/40"></div>
                        </div>
                        <span className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-light">
                            Ristorante • Pizzeria
                        </span>
                    </motion.div>

                    {/* Titre principal */}
                    <h1 className="flex flex-col items-center justify-center overflow-hidden leading-[0.85]">
                        <motion.span
                            variants={titleVariant}
                            className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-medium text-[#f0ebe0]"
                        >
                            LA <span className="tracking-tight">DOLCE</span>
                        </motion.span>
                        <motion.span
                            variants={titleVariant}
                            transition={{ delay: 0.1 }}
                            className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-light text-italian-gold italic relative z-10 mr-[0.20em]"
                        >
                            VITA
                        </motion.span>
                    </h1>

                    {/* Slogan */}
                    <motion.p
                        variants={titleVariant}
                        transition={{ delay: 0.2 }}
                        className="mt-4 md:mt-6 text-lg md:text-xl text-white/80 font-light max-w-lg mx-auto leading-relaxed"
                    >
                        L'art de vivre à l'italienne. <br/>
                        Une cuisine de cœur, d'histoire et de passion.
                    </motion.p>

                    {/* Boutons d'action*/}
                    <motion.div
                        variants={titleVariant}
                        transition={{ delay: 0.4 }}
                        className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-6 items-center"
                    >
                        {/* Bouton Découvrir la carte */}
                        <Button variant="hero" size="xl" className="rounded-full px-10 h-14 md:h-16 text-base md:text-lg min-w-[180px] bg-white text-black hover:bg-italian-gold hover:text-white border-none transition-all duration-500" asChild>
                            <Link href="/menu">Découvrir la Carte</Link>
                        </Button>
                        
                        {/* Bouton Réserver */}
                        <Button variant="outline" size="xl" className="rounded-full px-10 h-14 md:h-16 text-base md:text-lg min-w-[180px] border-white/30 text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-500" asChild>
                            <Link href="/reservation">Réserver</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Indicateur de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] uppercase tracking-[0.6em] text-italian-gold/50 font-medium">Scroll</span>
                <div className="w-[1px] h-12 overflow-hidden">
                    <motion.div 
                        animate={{ 
                            y: ["-100%", "100%"] 
                        }}
                        transition={{ 
                            duration: 2.5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="w-full h-full bg-gradient-to-b from-transparent via-italian-gold/60 to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

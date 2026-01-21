"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
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
                    src="/images/hero-italian.jpg"
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
                    {/* Badge "Signature" */}
                    <motion.div
                        variants={titleVariant}
                        className="mb-6 md:mb-10"
                    >
                        <span className="inline-block py-1 px-3 border border-italian-gold/50 rounded-full text-italian-gold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-sm">
                            Since 1985
                        </span>
                    </motion.div>

                    {/* Titre principal */}
                    <h1 className="flex flex-col items-center justify-center overflow-hidden leading-[0.9]">
                        <motion.span 
                            variants={titleVariant}
                            className="font-serif text-6xl md:text-8xl lg:text-[11rem] font-medium text-[#f0ebe0] tracking-tight"
                        >
                            LA DOLCE
                        </motion.span>
                        <motion.span 
                            variants={titleVariant}
                            transition={{ delay: 0.1 }}
                            className="font-serif text-6xl md:text-8xl lg:text-[11rem] font-light text-italian-gold italic relative z-10"
                        >
                            VITA
                        </motion.span>
                    </h1>

                    {/* Tagline */}
                    <motion.p
                        variants={titleVariant}
                        transition={{ delay: 0.2 }}
                        className="mt-8 md:mt-12 text-lg md:text-xl text-white/80 font-light max-w-lg mx-auto leading-relaxed"
                    >
                        L'art de vivre à l'italienne. <br/>
                        Une cuisine de cœur, d'histoire et de passion.
                    </motion.p>

                    {/* Boutons */}
                    <motion.div
                        variants={titleVariant}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
                    >
                        <Button variant="hero" size="xl" className="rounded-full px-10 h-14 md:h-16 text-base md:text-lg min-w-[180px]" asChild>
                            <Link href="/menu">Découvrir la Carte</Link>
                        </Button>
                        <Button variant="outline" size="xl" className="rounded-full px-10 h-14 md:h-16 text-base md:text-lg min-w-[180px] border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-colors" asChild>
                            <Link href="/reservation">Réserver</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Indicateur de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-italian-gold to-transparent opacity-60"></div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-italian.jpg"
                    alt="Cuisine italienne authentique"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 hero-overlay z-10" />
            </div>

            {/* Contenu */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Décoration */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="gold-accent" />
                    </motion.div>

                    {/* Sous-titre */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4"
                    >
                        Ristorante Italiano
                    </motion.p>

                    {/* Titre */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
                    >
                        La Dolce Vita
                    </motion.h1>

                    {/* Slogan */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-10 italic font-serif"
                    >
                        L'art de la cuisine italienne authentique
                    </motion.p>

                    {/* Boutons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button variant="hero" size="xl" asChild>
                            <Link href="/menu">Découvrir le Menu</Link>
                        </Button>
                        <Button variant="heroOutline" size="xl" asChild>
                            <Link href="/reservation">Réserver une Table</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Indicateur de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

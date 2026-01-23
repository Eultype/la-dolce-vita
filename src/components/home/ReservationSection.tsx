"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import React
import { useRef } from "react";
// Import Framer Motion
import { motion, useScroll, useTransform, useInView } from "framer-motion";
// Import des composants
import { Button } from "@/components/ui/button";

const ReservationSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
    
    // Parallax léger pour l'image de fond
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden" ref={containerRef}>
            
            {/* Image de fond */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
                    <Image
                        src="/images/table3.jpg"
                        alt="Ambiance conviviale trattoria"
                        fill
                        className="object-cover opacity-80"
                        quality={90}
                    />
                </motion.div>
                {/* Overlay renforcé pour lisibilité sur image complexe */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#1a1512] z-10" />
            </div>

            {/* Contenu Principal */}
            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                        Prenotazione
                    </span>
                    
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-10">
                        Votre table <br/>
                        <span className="italic font-light text-italian-gold">vous attend.</span>
                    </h2>
                    
                    <div className="flex justify-center">
                        <Button 
                            variant="hero" 
                            size="xl" 
                            className="rounded-full px-12 h-16 bg-italian-gold text-white hover:bg-white hover:text-[#1a1512] border-none transition-all duration-500 shadow-2xl text-lg tracking-widest uppercase font-bold" 
                            asChild
                        >
                            <Link href="/reservation">
                                Réserver
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReservationSection;

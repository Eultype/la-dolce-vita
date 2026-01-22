"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import React
import { useRef } from "react";
// Import Framer Motion
import { motion, useScroll, useTransform, useInView } from "framer-motion";
// Import Lucide Icons
import { ArrowRight } from "lucide-react";
// Import Composants
import { Button } from "@/components/ui/button";
// Import des datas
import { dishes } from "@/data/menu";

// Composant de la section "Aperçu du menu"
const MenuPreviewSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
    
    // Parallax pour le texte de fond "LA CARTA"
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    
    // Inversion du sens par rapport à la section précédente pour le rythme
    const xText = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

    return (
        <section className="pb-24 md:pb-40 pt-0 md:pt-12 bg-[#FDFBF7] overflow-hidden relative" ref={containerRef}>
            
            {/* Texte de fond "LA CARTA" */}
            <div className="absolute top-[10%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[22vw] leading-none font-bold text-black tracking-tighter">
                        LA CARTA LA CARTA
                    </h2>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                
                {/* Header */}
                <div className="max-w-4xl mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-italian-gold/40"></div>
                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.5em] uppercase">
                                La Selezione
                            </span>
                        </div>
                        
                        <h2 className="font-serif text-5xl md:text-7xl text-foreground font-medium leading-[1.1] mb-6">
                            Le goût du <br/>
                            <span className="text-italian-gold italic font-light">partage authentique.</span>
                        </h2>
                        
                        <p className="text-muted-foreground text-xl leading-relaxed font-light max-w-2xl">
                            Une cuisine de cœur qui rassemble les générations autour de saveurs vraies et de produits d'exception.
                        </p>
                    </motion.div>
                </div>

                {/* Grilles de plat */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={dish.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col cursor-pointer"
                        >
                            {/* Images */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden p-3 border border-italian-gold/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-2">
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            
                            {/* Détails */}
                            <div className="space-y-3 px-2">
                                <div className="flex justify-between items-baseline border-b border-italian-gold/10 py-3 transition-colors duration-500 group-hover:border-italian-gold/40 relative">
                                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-italian-gold">
                                        {dish.name}
                                    </h3>
                                    <span className="text-italian-gold font-serif text-xl md:text-2xl italic">
                                        {dish.price}€
                                    </span>
                                    {/* Ligne qui s'anime au survol */}
                                    <div className="absolute bottom-0 left-0 w-0 h-px bg-italian-gold transition-all duration-700 group-hover:w-full" />
                                </div>
                                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                                    {dish.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bouton découvrir la carte */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <Button variant="link" className="text-foreground text-lg hover:text-italian-gold transition-colors group p-0" asChild>
                        <Link href="/menu" className="flex items-center gap-2">
                            Découvrir toute notre carte 
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 text-italian-gold" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default MenuPreviewSection;

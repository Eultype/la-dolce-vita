"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    
    const xText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <section className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden relative" ref={containerRef}>
            
            {/* Background Text "Watermark" */}
            <div className="absolute top-[15%] -left-[10%] w-[120%] overflow-hidden pointer-events-none opacity-[0.04]">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[18vw] leading-none font-bold text-black tracking-tighter">
                        CUCINA CUCINA
                    </h2>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Colonne de gauche : Image en arche */}
                    <div className="lg:col-span-6 relative">
                        <motion.div
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[4/5] w-full rounded-t-[15rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/restaurant-interior.jpg"
                                alt="Intérieur La Dolce Vita"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[2s]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                        
                        {/* Petit détail Gold pour rappeler le Hero */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FDFBF7] rounded-full flex items-center justify-center hidden md:flex"
                        >
                            <div className="w-24 h-24 border border-italian-gold/30 rounded-full flex items-center justify-center p-4 text-center">
                                <span className="font-serif italic text-italian-gold text-sm leading-tight">Cucina<br/>Autentica</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Colonne de droite : Texte et bouton */}
                    <div className="lg:col-span-6 space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Même style de badge que le Hero */}
                            <span className="inline-block py-1 px-3 border border-italian-gold/30 rounded-full text-italian-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                                Notre Histoire
                            </span>
                            
                            {/* Titre */}
                            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground font-medium leading-[1.1] mb-8">
                                L'Italie dans <br/>
                                <span className="text-italian-gold italic font-light">sa plus pure expression.</span>
                            </h2>
                            
                            <p className="text-muted-foreground text-xl leading-relaxed font-light mb-10 max-w-lg">
                                La Dolce Vita n'est pas un concept, c'est une maison. Une cuisine sincère, héritée de nos grands-mères toscanes, où le produit est roi et le temps suspendu.
                            </p>

                            {/* Points Clés  */}
                            <div className="grid grid-cols-2 gap-8 border-t border-italian-gold/20 pt-8">
                                <div>
                                    <div className="font-serif text-4xl text-foreground mb-1">100%</div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Fait Maison</div>
                                </div>
                                <div>
                                    <div className="font-serif text-4xl text-foreground mb-1">DOP</div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Produits Certifiés</div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Button variant="link" className="p-0 text-foreground text-lg hover:text-italian-gold transition-colors group" asChild>
                                    <Link href="/about" className="flex items-center gap-2">
                                        Notre Philosophie 
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 text-italian-gold" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

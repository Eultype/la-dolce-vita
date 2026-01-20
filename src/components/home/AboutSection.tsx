"use client";
// Import Next
import Image from "next/image";
// Import Framer Motion
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
// Import React
import { useRef } from "react";

// Composant section About
const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-background pattern-italian" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-elevated">
                            <Image
                                src="/images/restaurant-interior.jpg"
                                alt="Intérieur du restaurant La Dolce Vita"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Cadre décoratif */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-lg -z-10" />
                    </motion.div>

                    {/* Contenu */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">
                                Notre Histoire
                            </p>
                            <h2 className="section-title">
                                Une tradition familiale depuis 1985
                            </h2>
                        </div>

                        <div className="gold-accent" />

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Fondé par la famille Rossi, La Dolce Vita perpétue depuis près de 40 ans
                            les traditions culinaires de la Toscane. Chaque plat raconte une histoire,
                            celle de nos ancêtres et de leur passion pour la gastronomie italienne.
                        </p>

                        {/* Statistiques */}
                        <div className="grid sm:grid-cols-3 gap-6 pt-6">
                            {[
                                { value: "40", label: "Années d'expérience" },
                                { value: "100%", label: "Produits frais" },
                                { value: "∞", label: "Passion" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="text-center p-4 bg-card rounded-lg shadow-soft"
                                >
                                    <div className="font-serif text-3xl font-bold text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Valeurs */}
                        <div className="pt-4 space-y-4">
                            <h3 className="font-serif text-xl font-semibold text-foreground">
                                Nos valeurs
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Produits frais importés d'Italie chaque semaine",
                                    "Recettes traditionnelles transmises de génération en génération",
                                    "Pâtes et pizzas faites maison quotidiennement",
                                    "Une ambiance chaleureuse et authentique",
                                ].map((value, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                        className="flex items-center gap-3 text-muted-foreground"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                                        {value}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

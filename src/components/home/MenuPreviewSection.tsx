"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import de React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useInView } from "framer-motion";
// Import de Lucide Icons
import { ArrowRight } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";

// Liste des exemples de plats à la carte
const dishes = [
    {
        name: "Pizza Margherita",
        description: "Mozzarella di Bufala, tomates San Marzano, basilic frais",
        price: "16€",
        image: "/images/pizza-dish.jpg",
        category: "Pizzas",
    },
    {
        name: "Carbonara Romana",
        description: "Guanciale, pecorino romano, œuf, poivre noir",
        price: "18€",
        image: "/images/pasta-dish.jpg",
        category: "Pâtes",
    },
    {
        name: "Tiramisù Classico",
        description: "Mascarpone, café espresso, biscuits Savoiardi, cacao",
        price: "9€",
        image: "/images/tiramisu-dish.jpg",
        category: "Desserts",
    },
];

// Composant de l'aperçu du menu
const MenuPreviewSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
            {/* Décoration de fond subtile */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-italian-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="text-italian-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                        Gastronomia
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Le Meilleur de l'Italie
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-px bg-italian-gold/30" />
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Une sélection rigoureuse de nos plats signature, préparés avec des produits 
                        d'excellence importés et beaucoup d'amour.
                    </p>
                </motion.div>

                {/* Grille des plats */}
                <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-16">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={dish.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-md text-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        {dish.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <div className="flex justify-between items-baseline mb-4">
                                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-italian-gold transition-colors duration-300">
                                        {dish.name}
                                    </h3>
                                    <span className="text-italian-gold font-serif text-xl italic">
                                        {dish.price}
                                    </span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                                    {dish.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Appel à l'action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <Button variant="outline" size="xl" className="rounded-full px-12 border-italian-gold/30 text-foreground hover:bg-italian-gold hover:text-white transition-all duration-300" asChild>
                        <Link href="/menu" className="flex items-center gap-3">
                            Découvrir toute la carte
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default MenuPreviewSection;

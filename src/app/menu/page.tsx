"use client";

// Import Next
import Link from "next/link";
// Import React
import { useRef, useState } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";
// Import de Lucide Icons
import { Salad, Beef, Pizza, Grape, Martini } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";
import { dishes } from "@/data/menu";
import { MenuListItem } from "./_components/MenuListItem";
import PastaIcon from "@/components/ui/PastaIcon";
import DessertIcon from "@/components/ui/DessertIcon";

const categories = ["Antipasti", "Primi Piatti", "Secondi Piatti", "Le Pizze", "Dolci", "Vini", "Bevande"];

// Page La carte
export default function MenuPage() {
    const containerRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState("Antipasti");

    // Scroll pour le watermark "LA CARTA"
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["-5%", "-20%"]);

    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative" ref={containerRef}>

            {/* Texte de fond "LA CARTA" */}
            <div className="absolute top-[7%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        LA CARTA LA CARTA
                    </h2>
                </motion.div>
            </div>

            <div className="relative z-10">

                {/* Header */}
                <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px w-12 bg-italian-gold/40"></div>
                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                                Esperienza
                            </span>
                            <div className="h-px w-12 bg-italian-gold/40"></div>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                            L'Art de la <br/>
                            <span className="italic text-italian-gold font-light">Dégustation.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mx-auto">
                            Une invitation au voyage culinaire à travers les terroirs d'Italie.
                            Découvrez une sélection de produits d'exception et de recettes authentiques.
                        </p>
                    </motion.div>
                </section>

                {/* Navigation des catégories */}
                <nav className="sticky top-20 z-40 bg-[#FDFBF7]/80 backdrop-blur-md border-y border-italian-gold/20 py-6 mb-12">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center flex-wrap gap-8 md:gap-16">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group ${
                                        activeCategory === cat ? "text-italian-gold" : "text-foreground/40 hover:text-foreground"
                                    }`}
                                >
                                    {cat}
                                    <span className={`absolute -bottom-2 left-0 h-px bg-italian-gold transition-all duration-500 ${
                                        activeCategory === cat ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Titre de la catégorie active */}
                <section className="container mx-auto px-4 mb-16">
                    <motion.div
                        key={activeCategory + "-title"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center flex flex-col items-center gap-4"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground italic">
                            {activeCategory === "Antipasti" ? "Entrées" :
                             activeCategory === "Primi Piatti" ? "Pasta" :
                             activeCategory === "Secondi Piatti" ? "Viandes et Poissons" :
                             activeCategory === "Le Pizze" ? "Pizze Artisanales" :
                             activeCategory === "Dolci" ? "Desserts Maison" :
                             activeCategory === "Vini" ? "Vins" :
                             "Apéritifs et Digestifs"}
                        </h2>
                        <div className="w-12 h-px bg-italian-gold/30"></div>

                        {/* Icône dynamique */}
                        <div className="text-italian-gold opacity-60">
                            {activeCategory === "Antipasti" && <Salad className="w-6 h-6" />}
                            {activeCategory === "Primi Piatti" && <PastaIcon size={24} />}
                            {activeCategory === "Secondi Piatti" && <Beef className="w-6 h-6" />}
                            {activeCategory === "Le Pizze" && <Pizza className="w-6 h-6" />}
                            {activeCategory === "Dolci" && <DessertIcon size={24} />}
                            {activeCategory === "Vini" && <Grape className="w-6 h-6" />}
                            {activeCategory === "Bevande" && <Martini className="w-6 h-6" />}
                        </div>
                    </motion.div>
                </section>

                {/* Contenu du menu */}
                <section className="container mx-auto px-4 max-w-6xl relative">

                    {/* Arches du menu */}
                    <div className="absolute -top-12 left-4 right-4 h-24 border-t-2 border-x-2 border-italian-gold/10 rounded-t-full pointer-events-none block"></div>
                    <div className="absolute -bottom-12 left-4 right-4 h-24 border-b-2 border-x-2 border-italian-gold/10 rounded-b-full pointer-events-none block"></div>

                    {/* Filet vertical */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-italian-gold/10 hidden md:block"></div>

                    <div className="relative z-10 px-8 py-12">
                        {/* Affichage des plats filtrés */}
                        {(() => {
                            const filteredDishes = dishes.filter(dish => dish.category === activeCategory);
                            const subCategories = Array.from(new Set(filteredDishes.map(d => d.subCategory).filter(Boolean)));

                            if (subCategories.length > 0) {
                                return (
                                    <div className="space-y-24">
                                        {subCategories.map((subCat) => (
                                            <div key={subCat as string} className="space-y-12">
                                                {/* Titre de sous-catégorie */}
                                                <div className="flex items-center gap-6 justify-center relative z-10">
                                                    <div className="h-px w-8 bg-italian-gold/20"></div>
                                                    <h3 className="font-serif text-2xl text-italian-gold italic px-6 bg-[#FDFBF7] relative z-20">{subCat as string}</h3>
                                                    <div className="h-px w-8 bg-italian-gold/20"></div>
                                                </div>
                                                {/* Grille des plats pour la sous-catégorie courante */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                                                    {filteredDishes
                                                        .filter(d => d.subCategory === subCat)
                                                        .map((dish, i) => (
                                                            <MenuListItem key={dish.name} dish={dish} index={i} />
                                                        ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                            return (
                            /* Affichage standard (Pizzas, Pâtes, etc.) */
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                                {filteredDishes.map((dish, i) => (
                                    <MenuListItem key={dish.name} dish={dish} index={i} />
                                ))}
                            </div>
                            );
                        })()}
                    </div>
                </section>

                {/* Message */}
                <section className="container mx-auto px-4 py-24 text-center">
                    <div className="max-w-2xl mx-auto space-y-12">
                        <div className="w-16 h-px bg-italian-gold/30 mx-auto" />
                        <p className="font-serif italic text-2xl text-muted-foreground font-light">
                            "Tous nos plats sont préparés à la minute. Pour toute allergie, n'hésitez pas à en informer notre équipe."
                        </p>
                        <div className="w-16 h-px bg-italian-gold/30 mx-auto" />

                        <div>
                            <Button variant="hero" size="xl" className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-italian-gold hover:text-white transition-all duration-500 shadow-xl" asChild>
                                <Link href="/reservation">
                                    Réserver mon Expérience
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
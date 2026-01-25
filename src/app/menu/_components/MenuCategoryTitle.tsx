"use client";

// Import de Framer Motion
import { motion } from "framer-motion";
// Import de Lucide Icons
import { Salad, Beef, Pizza, Grape, Martini } from "lucide-react";
// Import des composants
import PastaIcon from "@/components/ui/PastaIcon";
import DessertIcon from "@/components/ui/DessertIcon";

interface MenuCategoryTitleProps {
    activeCategory: string;
}

// Composant MenuCategoryTitle de la page " La carte "
export default function MenuCategoryTitle({ activeCategory }: MenuCategoryTitleProps) {
    return (
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
    );
}

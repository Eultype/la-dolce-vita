"use client";

// Import de Framer Motion
import { motion } from "framer-motion";
// Import de Lucide Icons
import { Quote } from "lucide-react";

// Composant Manifeste de la page " À propos "
export default function AboutManifesto() {
    return (
        <section className="container mx-auto px-4 mb-32 md:mb-48 text-center relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full"
            >
                <div className="relative py-6 px-4">
                    {/* Quote gauche */}
                    <Quote className="absolute top-0 left-0 w-10 h-10 text-italian-gold/20 fill-current opacity-50" />
                    <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8 italic text-foreground font-light px-8 w-full">
                        "Nous n'avons pas hérité de recettes, nous avons hérité d'une mémoire. Chaque assiette est un souvenir que nous partageons avec vous."
                    </h3>
                    {/* Quote droit */}
                    <Quote className="absolute bottom-0 right-0 w-10 h-10 text-italian-gold/20 fill-current opacity-50 rotate-180" />
                </div>

                {/* Auteur */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-italian-gold font-bold uppercase tracking-widest text-sm">Maria Rossi</span>
                    <span className="text-muted-foreground text-xs uppercase tracking-widest">Chef Propriétaire</span>
                </div>
            </motion.div>
        </section>
    );
}

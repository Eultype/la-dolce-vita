"use client";

// Import de Framer Motion
import { motion } from "framer-motion";
// Import de Lucide Icons
import { Quote } from "lucide-react";

// Composant Citation de la page " Galerie "
export default function GalerieQuote() {
    return (
        <section className="w-full mb-40 relative px-4 md:px-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl relative"
            >
                {/* Quote gauche */}
                <Quote className="absolute -top-12 left-0 w-10 h-10 text-italian-gold/20 fill-current opacity-50 hidden md:block" />

                <div className="max-w-4xl mx-auto text-center px-4">
                    <h3 className="font-serif text-3xl md:text-5xl leading-tight text-foreground italic font-light relative z-10">
                        "C'est en regardant par la fenêtre que le voyage [culinaire] commence."
                    </h3>
                </div>

                {/* Quote droit */}
                <Quote className="absolute -bottom-12 right-0 w-10 h-10 text-italian-gold/20 fill-current opacity-50 rotate-180 hidden md:block" />
            </motion.div>
        </section>
    );
}

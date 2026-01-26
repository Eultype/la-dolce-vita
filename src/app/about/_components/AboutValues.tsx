"use client";

// Import de Framer Motion
import { motion } from "framer-motion";
// Import des datas
import { values } from "@/data/about";

// Composant Valeurs de la page " À propos "
export default function AboutValues() {
    return (
        <section className="container mx-auto px-4 mb-10 relative z-10">
            <div className="text-center mb-20">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px w-12 bg-italian-gold/30"></div>
                    <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                        L'Eredità
                    </span>
                    <div className="h-px w-12 bg-italian-gold/30"></div>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-medium">
                    L'Héritage <span className="italic text-italian-gold font-light">Intemporel.</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
                {values.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="space-y-4"
                    >
                        <div className="w-12 h-12 border border-italian-gold/30 rounded-full mx-auto flex items-center justify-center mb-6">
                            <span className="text-italian-gold font-serif italic text-lg">{i + 1}</span>
                        </div>
                        <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

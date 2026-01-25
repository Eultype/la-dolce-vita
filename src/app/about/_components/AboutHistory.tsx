"use client";

// Import Next
import Image from "next/image";
// Import de Framer Motion
import { motion } from "framer-motion";

// Composant histoire de la page " À propos "
export default function AboutHistory() {
    return (
        <section className="container mx-auto px-4 mt-10 mb-32 md:mb-48 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Image à Gauche */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-5 relative"
                >
                    {/* Photo archive */}
                    <div className="relative aspect-[5/3] w-full overflow-hidden rounded-sm shadow-2xl border border-italian-gold/30 p-2 bg-white">
                        <div className="relative w-full h-full overflow-hidden border border-black/5">
                            <Image
                                src="/images/Giuseppe.jpg"
                                alt="Giuseppe, le fondateur"
                                fill
                                className="object-cover sepia-[0.3]"
                            />
                        </div>
                    </div>

                    {/* Signature manuscrite */}
                    <div className="absolute -bottom-6 -right-6 md:-right-8 bg-white p-4 shadow-lg border border-italian-gold/10">
                        <span className="font-serif italic text-italian-gold text-xl block">Giuseppe, 1985</span>
                    </div>
                </motion.div>

                <div className="lg:col-span-1"></div>

                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-6 space-y-8 order-2 lg:order-1"
                >
                    <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center gap-4">
                        Le Origini
                        <span className="h-px w-12 bg-italian-gold/30"></span>
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-medium">
                        L'Origine du <span className="italic text-italian-gold font-light">Goût.</span>
                    </h2>
                    <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                        <p>
                            Tout a commencé avec une valise et un rêve. Quand Giuseppe Rossi est arrivé à Bruxelles, il n'avait que les recettes de sa grand-mère et une passion dévorante pour les produits vrais.
                        </p>
                        <p>
                            Il a ouvert "La Dolce Vita" avec une idée simple : offrir aux Bruxellois l'hospitalité qu'il recevait chez lui, en Toscane. Pas de chichis, juste le goût.
                        </p>
                        <p>
                            Aujourd'hui, c'est sa fille, Maria, qui perpétue l'âme de la maison, en y ajoutant une touche de modernité sans jamais trahir l'héritage.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

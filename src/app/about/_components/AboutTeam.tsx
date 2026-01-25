"use client";

// Import Next
import Image from "next/image";
import Link from "next/link";
// Import de Framer Motion
import { motion } from "framer-motion";
// Import des composants
import { Button } from "@/components/ui/button";
// Import des datas
import { teamMembers } from "@/data/about";

// Composant Équipe de la page " À propos "
export default function AboutTeam() {
    return (
        <section className="container mx-auto px-4 mb-10 relative z-10">
            <div className="max-w-3xl mb-20 text-left">
                <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                    <span className="h-px w-12 bg-italian-gold/30"></span>
                    La Squadra
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-medium mb-6">
                    Les Gardiens du <span className="italic text-italian-gold font-light">Savoir-faire.</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl border-l-2 border-italian-gold/20 pl-6">
                    Derrière chaque plat se cache une main experte, un regard attentif et un cœur passionné. Voici ceux qui font vivre l'âme de la maison au quotidien.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group text-center"
                    >
                        {/* L'Arche Équipe */}
                        <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 rounded-t-full shadow-lg border-2 border-italian-gold/30 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-serif text-2xl text-foreground mb-1">{member.name}</h3>
                        <p className="text-italian-gold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                        <p className="text-muted-foreground font-light italic text-sm">"{member.quote}"</p>
                    </motion.div>
                ))}
            </div>

            {/* Bouton CTA */}
            <div className="text-center pb-32 pt-32">
                <Button variant="hero" size="xl" className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-italian-gold hover:text-white transition-all duration-500 shadow-xl" asChild>
                    <Link href="/menu">
                        Découvrir la Carte
                    </Link>
                </Button>
            </div>
        </section>
    );
}

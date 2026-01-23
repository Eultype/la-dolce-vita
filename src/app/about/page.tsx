"use client";

// Import Next
import Image from "next/image";
import Link from "next/link";
// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";
// Import de Lucide Icons
import { Quote } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";
// Import des datas
import { teamMembers, values } from "@/data/about";

// Page About
export default function AboutPage() {
    const containerRef = useRef(null);

    // Scroll pour le watermark
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xText = useTransform(scrollYProgress, [0, 0.5], ["5%", "-25%"]);

    return (
        <div
            className="bg-[#FDFBF7] min-h-screen overflow-hidden relative"
            ref={containerRef}
        >

            {/* Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Texte de fond "FAMIGLIA" */}
            <div className="absolute top-[5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        FAMIGLIA FAMIGLIA
                    </h2>
                </motion.div>
            </div>

            <div className="relative z-10">
                {/* Titre + Description */}
                <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-italian-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                            Notre Histoire
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                            Une histoire de <br/>
                            <span className="italic text-italian-gold font-light">Famille.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                            Depuis 1985, La Dolce Vita est le gardien d'un savoir-faire transmis de génération en génération. Une histoire d'amour entre Bruxelles et la Toscane.
                        </p>
                    </motion.div>
                </section>

                {/* Origines */}
                <section className="container mx-auto px-4 mt-10 mb-32 md:mb-48">
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
                                        src="/images/giuseppe.jpg"
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

                {/*  L'Héritage (Piliers) */}
                <section className="container mx-auto px-4 mb-10">
                    <div className="text-center mb-20">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-px w-12 bg-italian-gold/30"></div>
                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                                Héritage
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
                                <h4 className="font-serif text-2xl text-foreground">{item.title}</h4>
                                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Manifeste */}
                <section className="container mx-auto px-4 mb-32 md:mb-48 text-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <div className="relative py-6 px-4">
                            <Quote className="absolute top-0 left-0 w-10 h-10 text-italian-gold/20 fill-current opacity-50" />
                            <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8 italic text-foreground font-light px-8 w-full">
                                "Nous n'avons pas hérité de recettes, nous avons hérité d'une mémoire. Chaque assiette est un souvenir que nous partageons avec vous."
                            </h3>
                            <Quote className="absolute bottom-0 right-0 w-10 h-10 text-italian-gold/20 fill-current opacity-50 rotate-180" />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-italian-gold font-bold uppercase tracking-widest text-sm">Maria Rossi</span>
                            <span className="text-muted-foreground text-xs uppercase tracking-widest">Chef Propriétaire</span>
                        </div>
                    </motion.div>
                </section>

                {/* La Squadra */}
                <section className="container mx-auto px-4 mb-10">
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
                                {/* L'Arche Équipe avec effet N&B -> Couleur au survol de l'image */}
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
                </section>

                {/* Bouton CTA */}
                <div className="text-center pb-32 pt-0">
                    <Button variant="hero" size="xl" className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-italian-gold hover:text-white transition-all duration-500 shadow-xl" asChild>
                        <Link href="/menu">
                            Découvrir la Carte
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
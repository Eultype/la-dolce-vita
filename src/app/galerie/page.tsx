"use client";

// Import Next
import Image from "next/image";
// Import React
import { useRef } from "react";
// Import de Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";
// Import de Lucide Icons
import { Quote } from "lucide-react";
// Import des données
import { galleryImages } from "@/data/gallery";

// Page galerie
export default function GaleriePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["-10%", "-20%"]);

    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative" ref={containerRef}>
            
            {/* Texte de fond "GALLERIA" */}
            <div className="absolute top-[5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="font-serif text-[25vw] leading-none font-bold text-black tracking-tighter">
                        GALLERIA GALLERIA
                    </h2>
                </motion.div>
            </div>

            {/* Header */}
            <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase block">
                                Atmosfera
                            </span>
                        <div className="h-px w-12 bg-italian-gold/40"></div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-[1.1] mb-12">
                        Instants de <br/>
                        <span className="italic text-italian-gold font-light">Vie.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        Une mosaïque de souvenirs et de lumières. Plongez dans l'atmosphère unique de La Dolce Vita, là où chaque détail compte.
                    </p>
                </motion.div>
            </section>

            {/* La galerie */}
            <section className="container mx-auto px-4 pb-40 relative z-10 max-w-7xl">

                {/* Image archée */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white p-2 md:p-3 shadow-2xl rounded-t-[500px] mb-12 border border-italian-gold/10"
                >
                    <div className="relative w-full h-full overflow-hidden rounded-t-[500px]">
                        <Image
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* La mosaïque */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 grid-flow-dense">
                    {galleryImages.slice(1).map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            className={`relative group ${image.span} bg-white p-2 md:p-3 shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl border border-italian-gold/5 rounded-sm`}
                        >
                            <div className="relative w-full h-full aspect-square md:aspect-auto md:min-h-[250px] overflow-hidden rounded-sm bg-gray-100">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Citation */}
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
        </div>
    );
}

"use client";

// Import Next
import Image from "next/image";
// Import de Framer Motion
import { motion } from "framer-motion";
// Import des données
import { galleryImages } from "@/data/gallery";

// Composant Grille d'images de la page " Galerie "
export default function GalerieGrid() {
    return (
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
    );
}

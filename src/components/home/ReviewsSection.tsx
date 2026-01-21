"use client";

// Import React
import { useRef } from "react";
// Import Framer Motion
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
// Import Lucide Icons
import { Star, Quote } from "lucide-react";

// Liste des avis du site
const reviews = [
    {
        name: "Marie L.",
        rating: 5,
        text: "Une expérience culinaire exceptionnelle ! Les pâtes fraîches sont à tomber et le service est irréprochable. On se croirait vraiment en Italie.",
        date: "Décembre 2024",
    },
    {
        name: "Jean-Pierre M.",
        rating: 5,
        text: "Meilleur restaurant italien de Paris, sans hésitation. La pizza margherita est authentique et le tiramisu est divin. Réservation indispensable !",
        date: "Novembre 2024",
    },
    {
        name: "Sophie D.",
        rating: 5,
        text: "Cadre magnifique, ambiance romantique parfaite. Le chef nous a même préparé un plat spécial pour notre anniversaire. Merci pour ce moment magique.",
        date: "Octobre 2024",
    },
];

// Composant de la section
const ReviewsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-background" ref={ref}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Titres */}
                    <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">
                        Témoignages
                    </p>
                    <h2 className="section-title">Ce Que Disent Nos Clients</h2>
                    <div className="flex justify-center mt-4">
                        <div className="gold-accent" />
                    </div>
                </motion.div>

                {/* Grille des avis */}
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="relative bg-card rounded-lg p-8 shadow-card"
                        >
                            {/* Icone de citation */}
                            <div className="absolute -top-4 left-8">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <Quote className="w-4 h-4 text-primary-foreground" />
                                </div>
                            </div>

                            {/* Étoiles */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-accent text-accent"
                                    />
                                ))}
                            </div>

                            {/* Avis */}
                            <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            {/* Auteur et date */}
                            <div className="flex justify-between items-center pt-4 border-t border-border">
                                <div>
                                    <p className="font-semibold text-foreground">{review.name}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Résumé des avis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-soft">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                            ))}
                        </div>
                        <span className="text-muted-foreground">
                            <span className="font-semibold text-foreground">4.9/5</span> basé sur +500 avis
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReviewsSection;
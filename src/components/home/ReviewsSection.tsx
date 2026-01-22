"use client";

// Import React
import { useState, useEffect, useRef } from "react";
// Import Framer Motion
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
// Import Lucide Icons
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
// Import des datas
import { reviews } from "@/data/reviews";

// Composant de la section
const ReviewsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);

    // Parallax pour le texte de fond "EMOZIONE"
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    
    const xText = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Auto-play optionnel (lent)
    useEffect(() => {
        const timer = setInterval(nextReview, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pb-24 md:pb-32 pt-0 md:pt-12 bg-[#FDFBF7] relative overflow-hidden" ref={ref}>
            
            {/* Texte de fond "EMOZIONE" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <motion.div style={{ x: xText }} className="whitespace-nowrap text-center">
                    <h2 className="font-serif text-[20vw] leading-none font-bold text-black tracking-tighter">
                        EMOZIONE
                    </h2>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                {/* Header */}
                <div className="mb-16 flex justify-center items-center gap-4">
                    <div className="h-px w-8 bg-italian-gold/30"></div>
                    <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                        PAROLE
                    </span>
                    <div className="h-px w-8 bg-italian-gold/30"></div>
                </div>

                {/* Slider de citation */}
                <div className="relative min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            {/* Étoiles */}
                            <div className="flex gap-2 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 text-italian-gold fill-italian-gold" />
                                ))}
                            </div>

                            {/* Avis */}
                            <div className="relative mb-10 px-4 md:px-12">
                                <Quote className="absolute -top-8 -left-4 w-12 h-12 text-italian-gold/10 fill-current opacity-50" />
                                <h3 className="font-serif text-3xl md:text-5xl leading-tight text-foreground italic font-light">
                                    "{reviews[currentIndex].text}"
                                </h3>
                                <Quote className="absolute -bottom-8 -right-4 w-12 h-12 text-italian-gold/10 fill-current opacity-50 rotate-180" />
                            </div>

                            {/* Auteur */}
                            <div className="space-y-2">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                                    {reviews[currentIndex].name}
                                </p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                    {reviews[currentIndex].date}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Contrôles Latéraux */}
                    <button 
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-italian-gold/30 hover:text-italian-gold transition-colors hidden md:block"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button 
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-italian-gold/30 hover:text-italian-gold transition-colors hidden md:block"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>

                {/* Indicateurs  */}
                <div className="flex justify-center gap-3 mt-12">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                                index === currentIndex ? "bg-italian-gold w-4" : "bg-italian-gold/20"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
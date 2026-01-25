"use client";

// Import Next & React
import Image from "next/image";
import { useState, useRef } from "react";
// Import Framer Motion
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// Import Lucide Icons
import { Calendar, Users, ChevronRight, ChevronLeft, Check } from "lucide-react";
// Import Components
import { Button } from "@/components/ui/button";
// Import Types
import { ReservationFormData } from "@/types/reservation";

// Import Steps Components
import StepGuests from "./_components/steps/StepGuests";
import StepDate from "./_components/steps/StepDate";
import StepTime from "./_components/steps/StepTime";
import StepContact from "./_components/steps/StepContact";

const INITIAL_DATA: ReservationFormData = {
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    notes: "",
};

const TOTAL_STEPS = 4;

export default function ReservationPage() {
    const containerRef = useRef(null);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<ReservationFormData>(INITIAL_DATA);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Scroll parallax pour le texte de fond
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const xText = useTransform(scrollYProgress, [0, 1], ["25%", "-20%"]);

    // Gestion des champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Navigation
    const nextStep = () => setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    // Soumission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setIsSubmitted(true), 1500);
    };

    // Formattage date pour affichage
    const formatDateDisplay = (dateStr: string) => {
        if (!dateStr) return "Choisir une date";
        return new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    };

    return (
        <div className="bg-[#FDFBF7] overflow-hidden relative" ref={containerRef}>
            <div className="relative z-10 pt-32 pb-20 container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Benvenuti</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-foreground font-medium">
                        Réservez votre <span className="italic text-italian-gold">Table</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mx-auto">

                    {/* Colonne de gauche : Formulaire */}
                    <div className="lg:col-span-8 order-2 lg:order-1">

                        {/* Barre de progression */}
                        <div className="mb-10 px-4 max-w-2xl mx-auto">
                            <div className="h-[1px] w-full relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-italian-gold"
                                    initial={{ width: "25%" }}
                                    animate={{ width: isSubmitted ? "100%" : `${(step / TOTAL_STEPS) * 100}%` }}
                                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                                />
                            </div>
                        </div>

                        <div className="min-h-[600px] overflow-hidden relative rounded-sm">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        onSubmit={handleSubmit}
                                        className="bg-white p-4 md:p-12 border border-italian-gold/10 shadow-xl rounded-sm min-h-[600px] flex flex-col w-full"
                                    >
                                        <div className="flex-1">
                                            {/* Compteur d'étape interne */}
                                            <div className="flex justify-end mb-8">
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold italic">
                                                    0{step} <span className="mx-2 opacity-30">/</span> 0{TOTAL_STEPS}
                                                </span>
                                            </div>

                                            {/* Rendu des étapes */}
                                            {step === 1 && <StepGuests formData={formData} setFormData={setFormData} onNext={nextStep} />}
                                            {step === 2 && <StepDate formData={formData} onChange={handleChange} formatDateDisplay={formatDateDisplay} />}
                                            {step === 3 && <StepTime formData={formData} setFormData={setFormData} />}
                                            {step === 4 && <StepContact formData={formData} onChange={handleChange} />}
                                        </div>

                                        {/* Boutons de navigation */}
                                        <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-50">
                                            {step > 1 ? (
                                                <Button type="button" variant="outline" onClick={prevStep} className="gap-2 border-gray-200 hover:border-italian-gold text-muted-foreground hover:text-italian-gold">
                                                    <ChevronLeft className="w-4 h-4" /> Retour
                                                </Button>
                                            ) : (
                                                <div></div>
                                            )}

                                            {step < 4 ? (
                                                <Button
                                                    type="button"
                                                    onClick={nextStep}
                                                    disabled={step === 2 && !formData.date}
                                                    variant="hero"
                                                    className="px-10 gap-2 bg-foreground text-background hover:bg-italian-gold hover:text-white disabled:opacity-30"
                                                >
                                                    Continuer <ChevronRight className="w-4 h-4" />
                                                </Button>
                                            ) : (
                                                <Button type="submit" variant="hero" className="px-10 gap-2 bg-italian-gold text-white hover:bg-foreground">
                                                    Réserver Maintenant
                                                </Button>
                                            )}
                                        </div>
                                    </motion.form>
                                ) : (
                                    /* Message de succès */
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white py-8 text-center border border-italian-gold/20 shadow-xl"
                                    >
                                        <div className="w-24 h-24 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto text-[#2E7D32] mb-8 border border-[#2E7D32]/20">
                                            <Check className="w-12 h-12" />
                                        </div>
                                        <h3 className="font-serif text-4xl mb-4 text-foreground">Grazie Mille, {formData.name.split(' ')[0]} !</h3>
                                        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                                            Votre table est réservée. Nous avons hâte de vous accueillir pour ce moment spécial.
                                        </p>
                                        <div className="bg-[#FDFBF7] p-8 max-w-sm mx-auto rounded-sm mb-8 border border-italian-gold/10">
                                            <p className="font-serif text-xl mb-2">{formatDateDisplay(formData.date)}</p>
                                            <p className="text-italian-gold font-bold text-3xl mb-1">{formData.time}</p>
                                            <p className="text-muted-foreground text-sm uppercase tracking-widest">{formData.guests} Personnes</p>
                                        </div>
                                        <Button
                                            variant="hero"
                                            className="bg-foreground text-background hover:bg-italian-gold hover:text-white transition-all duration-300 px-12 h-14 rounded-none"
                                            onClick={() => {setIsSubmitted(false); setStep(1); setFormData(INITIAL_DATA)}}
                                        >
                                            Nouvelle Réservation
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Colonne de droite : Récapitulatif */}
                    <div className="lg:col-span-4 order-1 lg:order-2 sticky top-32 transition-all duration-500">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full lg:aspect-[3/4.5] rounded-t-[1000px] overflow-hidden bg-[#1a1512] text-white shadow-2xl border-4 border-double border-italian-gold/30 p-8 flex flex-col items-center pt-10 lg:pt-24"
                        >
                            {/* Fond image */}
                            <div className="absolute inset-0 z-0 opacity-20">
                                <Image
                                    src="/images/table3.jpg"
                                    alt="Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

                            {/* Contenu Récap */}
                            <div className="relative z-20 w-full max-w-xs mx-auto text-center h-full flex flex-col">
                                <div className="mb-10">
                                    <h4 className="font-serif text-3xl italic text-italian-gold mb-2">Riepilogo</h4>
                                    <div className="h-px w-20 bg-italian-gold/50 mx-auto"></div>
                                </div>

                                <div className="space-y-10 flex-1">
                                    {/* Invités */}
                                    <div className="group">
                                        <div className="flex items-center justify-center gap-3 text-italian-gold/70 text-[10px] uppercase tracking-widest mb-2">
                                            <Users className="w-3 h-3" /> Invités
                                        </div>
                                        <p className="font-serif text-3xl">
                                            {formData.guests} <span className="text-base font-light italic text-white/60">Pers.</span>
                                        </p>
                                    </div>

                                    {/* Date & Heure */}
                                    <div className="group">
                                        <div className="flex items-center justify-center gap-3 text-italian-gold/70 text-[10px] uppercase tracking-widest mb-2">
                                            <Calendar className="w-3 h-3" /> Appuntamento
                                        </div>
                                        <p className="font-serif text-2xl transition-all duration-300 group-hover:text-italian-gold">
                                            {formData.date ? formatDateDisplay(formData.date) : "..."}
                                        </p>
                                        <p className="text-3xl font-light text-italian-gold mt-2">
                                            {formData.time ? `${formData.time}` : "--:--"}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="mt-auto pt-8 border-t border-white/10">
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest">La Dolce Vita • Bruxelles</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
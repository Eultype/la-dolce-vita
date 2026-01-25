"use client";

// Import Framer Motion
import { motion } from "framer-motion";
// Import Lucide Icons
import { Check } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";
// Import Types
import { ReservationFormData } from "@/types/reservation";

// Interface
interface ReservationSuccessProps {
    formData: ReservationFormData;
    formatDateDisplay: (date: string) => string;
    resetForm: () => void;
}

// Composant message de succès de la page " Réservation "
export default function ReservationSuccess({ formData, formatDateDisplay, resetForm }: ReservationSuccessProps) {
    return (
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
                onClick={resetForm}
            >
                Nouvelle Réservation
            </Button>
        </motion.div>
    );
}

"use client";

// Import Framer Motion
import { motion } from "framer-motion";
// Import Lucide Icons
import { ChevronRight, ChevronLeft } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";
// Import des composants étapes
import StepGuests from "./steps/StepGuests";
import StepDate from "./steps/StepDate";
import StepTime from "./steps/StepTime";
import StepContact from "./steps/StepContact";
// Import Types
import { ReservationFormData } from "@/types/reservation";

// Interface
interface ReservationFormProps {
    step: number;
    totalSteps: number;
    formData: ReservationFormData;
    setFormData: (data: ReservationFormData) => void;
    errors: Record<string, string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    nextStep: () => void;
    prevStep: () => void;
    submitForm: (e?: React.FormEvent) => void;
    formatDateDisplay: (dateStr: string) => string;
}

// Composant Formulaire de la page " Réservation "
export default function ReservationForm({ 
    step, totalSteps, formData, setFormData, errors, 
    handleChange, nextStep, prevStep, submitForm, formatDateDisplay 
}: ReservationFormProps) {
    return (
        <motion.form
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            onSubmit={submitForm}
            className="bg-white p-4 md:p-12 border border-italian-gold/10 shadow-xl rounded-sm min-h-[600px] flex flex-col w-full"
        >
            <div className="flex-1">
                {/* Compteur d'étape interne */}
                <div className="flex justify-end mb-8">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold italic">
                        0{step} <span className="mx-2 opacity-30">/</span> 0{totalSteps}
                    </span>
                </div>

                {/* Rendu des étapes */}
                {step === 1 && ( <StepGuests formData={formData} setFormData={setFormData} onNext={nextStep} /> )}
                {step === 2 && ( <StepDate formData={formData} onChange={handleChange} formatDateDisplay={formatDateDisplay}/> )}
                {step === 3 && ( <StepTime formData={formData} setFormData={setFormData}/> )}
                {step === 4 && ( <StepContact formData={formData} onChange={handleChange} errors={errors}/> )}
            </div>

            {/* Boutons de navigation */}
            <div className="flex items-center justify-between pt-4 mt-auto border-t gap-1 border-gray-50">
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
    );
}

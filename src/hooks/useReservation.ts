"use client";

// Import React
import { useState } from "react";
// Import des types
import { ReservationFormData } from "@/types/reservation";
// Import des lib
import { reservationSchema } from "@/lib/schemas";

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

export function useReservation() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<ReservationFormData>(INITIAL_DATA);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Gestion des champs (Event standard : input, select...)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Effacer l'erreur quand l'utilisateur corrige
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    // Navigation
    const nextStep = () => {
        // Validation basique avant de passer à l'étape suivante
        if (step === 2 && !formData.date) return;
        if (step === 3 && !formData.time) return;
        
        setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    };
    
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    // Soumission avec Validation Zod
    const submitForm = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        // Validation avec Zod
        const result = reservationSchema.safeParse(formData);

        if (!result.success) {
            const formattedErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                const key = String(issue.path[0]);
                formattedErrors[key] = issue.message;
            });
            setErrors(formattedErrors);
            return false;
        }

        // Si valide
        setErrors({});
        // Simulation d'appel API
        setTimeout(() => setIsSubmitted(true), 1500);
        return true;
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setStep(1);
        setFormData(INITIAL_DATA);
        setErrors({});
    };

    // Formattage date pour affichage
    const formatDateDisplay = (dateStr: string) => {
        if (!dateStr) return "Choisir une date";
        return new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    };

    return {
        step,
        totalSteps: TOTAL_STEPS,
        formData,
        setFormData,
        errors,
        isSubmitted,
        handleChange,
        nextStep,
        prevStep,
        submitForm,
        resetForm,
        formatDateDisplay
    };
}

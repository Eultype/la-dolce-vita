"use client";

// Import React
import { useRef } from "react";
// Import Framer Motion
import { AnimatePresence } from "framer-motion";
// Import Custom Hook
import { useReservation } from "@/hooks/useReservation";
// Import des composants de la page " Réservation "
import ReservationHeader from "./_components/ReservationHeader";
import ReservationProgress from "./_components/ReservationProgress";
import ReservationSummary from "./_components/ReservationSummary";
import ReservationSuccess from "./_components/ReservationSuccess";
import ReservationForm from "./_components/ReservationForm";

// Page de réservation
export default function ReservationPage() {
    const containerRef = useRef(null);
    
    // Logique
    const {
        step,
        totalSteps,
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
    } = useReservation();

    return (
        <div className="bg-[#FDFBF7] overflow-hidden relative" ref={containerRef}>
            <div className="relative z-10 pt-32 pb-20 container mx-auto px-4">
                {/* Header */}
                <ReservationHeader />
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* Colonne de gauche : Formulaire */}
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        {/* Fil de progression */}
                        <ReservationProgress 
                            step={step} 
                            totalSteps={totalSteps} 
                            isSubmitted={isSubmitted} 
                        />
                        <div className="min-h-[600px] overflow-hidden relative rounded-sm">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                        // Formulaire
                                    <ReservationForm 
                                        step={step}
                                        totalSteps={totalSteps}
                                        formData={formData}
                                        setFormData={setFormData}
                                        errors={errors}
                                        handleChange={handleChange}
                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                        submitForm={submitForm}
                                        formatDateDisplay={formatDateDisplay}
                                    />
                                ) : (
                                    // Message de succès
                                    <ReservationSuccess 
                                        formData={formData}
                                        formatDateDisplay={formatDateDisplay}
                                        resetForm={resetForm}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* Colonne de droite : Récapitulatif */}
                    {/* Arche récapitulatif */}
                    <ReservationSummary 
                        formData={formData} 
                        formatDateDisplay={formatDateDisplay} 
                    />
                </div>
            </div>
        </div>
    );
}

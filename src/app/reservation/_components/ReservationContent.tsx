"use client";

// Import Framer Motion
import { AnimatePresence } from "framer-motion";
// Import Hook
import { useReservation } from "@/hooks/useReservation";
// Import Composants
import ReservationProgress from "./ReservationProgress";
import ReservationForm from "./ReservationForm";
import ReservationSuccess from "./ReservationSuccess";
import ReservationSummary from "./ReservationSummary";

export default function ReservationContent() {
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Colonne de gauche : Formulaire */}
            <div className="lg:col-span-8 order-2 lg:order-1">
                <ReservationProgress 
                    step={step} 
                    totalSteps={totalSteps} 
                    isSubmitted={isSubmitted} 
                />
                <div className="min-h-[600px] overflow-hidden relative rounded-sm">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
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
            <ReservationSummary 
                formData={formData} 
                formatDateDisplay={formatDateDisplay} 
            />
        </div>
    );
}

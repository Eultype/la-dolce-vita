"use client";

// Import Framer Motion
import { motion } from "framer-motion";

// Interface
interface ReservationProgressProps {
    step: number;
    totalSteps: number;
    isSubmitted: boolean;
}

// Composant barre de progression de la page " Réservation "
export default function ReservationProgress({ step, totalSteps, isSubmitted }: ReservationProgressProps) {
    return (
        <div className="mb-10 px-4 max-w-2xl mx-auto">
            <div className="h-[1px] w-full relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-italian-gold"
                    initial={{ width: "25%" }}
                    animate={{ width: isSubmitted ? "100%" : `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                />
            </div>
        </div>
    );
}

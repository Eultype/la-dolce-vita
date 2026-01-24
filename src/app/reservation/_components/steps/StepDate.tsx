"use client";

import { Calendar } from "lucide-react";
import { ReservationFormData } from "@/types/reservation";

interface StepProps {
    formData: ReservationFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formatDateDisplay: (date: string) => string;
}

export default function StepDate({ formData, onChange, formatDateDisplay }: StepProps) {
    return (
        <div className="space-y-8">
            <h3 className="font-serif text-3xl mb-24">Quel jour nous rejoignez-vous ?</h3>
            <div className="max-w-md mx-auto space-y-4">
                <label className="text-xs uppercase tracking-widest font-bold text-italian-gold flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Sélectionner une date
                </label>
                <input
                    type="date" name="date" required
                    value={formData.date} onChange={onChange}
                    className="w-full border-b-2 border-gray-100 py-6 text-3xl font-serif bg-transparent focus:outline-none focus:border-italian-gold transition-colors text-center"
                />
                <p className="text-center text-muted-foreground italic text-sm pt-4 italic">
                    {formData.date && formatDateDisplay(formData.date)}
                </p>
            </div>
        </div>
    );
}
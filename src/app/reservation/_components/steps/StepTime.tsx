"use client";

import { cn } from "@/lib/utils";
import { ReservationFormData } from "@/types/reservation";

interface StepProps {
    formData: ReservationFormData;
    setFormData: (data: ReservationFormData) => void;
}

export default function StepTime({ formData, setFormData }: StepProps) {
    return (
        <div className="space-y-10">
            <h3 className="font-serif text-3xl mb-20">À quelle heure ?</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(t => (
                    <button
                        key={t} type="button"
                        onClick={() => setFormData({...formData, time: t})}
                        className={cn(
                            "py-4 border rounded-sm font-serif text-xl transition-all",
                            formData.time === t
                                ? "border-italian-gold bg-italian-gold text-white shadow-lg scale-105"
                                : "border-gray-100 hover:border-italian-gold/50"
                        )}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
}
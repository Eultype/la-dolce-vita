"use client";

import { cn } from "@/lib/utils";
import { ReservationFormData } from "@/types/reservation";

interface StepProps {
    formData: ReservationFormData;
    setFormData: (data: ReservationFormData) => void;
    onNext: () => void;
}

export default function StepGuests({ formData, setFormData, onNext }: StepProps) {
    return (
        <div className="space-y-10 text-center">
            <h3 className="font-serif text-3xl mb-20">Pour combien de personnes ?</h3>
            <div className="grid grid-cols-4 gap-4 w-full max-w-md mx-auto" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                {[1,2,3,4,5,6,7,8].map(num => (
                    <button
                        key={num} type="button"
                        onClick={() => {
                            setFormData({...formData, guests: num.toString()});
                            setTimeout(onNext, 300); // Auto-next
                        }}
                        className={cn(
                            "aspect-square border-2 rounded-sm flex items-center justify-center transition-all duration-300",
                            formData.guests === num.toString()
                                ? "border-italian-gold bg-italian-gold/5 text-italian-gold scale-105 shadow-md"
                                : "border-gray-100 hover:border-italian-gold/30"
                        )}
                    >
                        <span className="font-serif text-3xl">{num}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
"use client";

import { ReservationFormData } from "@/types/reservation";

interface StepProps {
    formData: ReservationFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function StepContact({ formData, onChange }: StepProps) {
    return (
        <div className="space-y-8">
            <h3 className="font-serif text-3xl mb-6">Dernière étape</h3>

            <div className="grid gap-6">
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Nom Complet</label>
                    <input
                        type="text" name="name" required
                        placeholder="Giuseppe Rossi"
                        value={formData.name} onChange={onChange}
                        className="w-full border-b border-gray-200 py-4 text-xl font-serif bg-transparent focus:outline-none focus:border-italian-gold placeholder:text-gray-300"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email</label>
                        <input
                            type="email" name="email" required
                            placeholder="email@exemple.com"
                            value={formData.email} onChange={onChange}
                            className="w-full border-b border-gray-200 py-4 text-xl font-serif bg-transparent focus:outline-none focus:border-italian-gold placeholder:text-gray-300"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Téléphone</label>
                        <input
                            type="tel" name="phone" required
                            placeholder="+32 4..."
                            value={formData.phone} onChange={onChange}
                            className="w-full border-b border-gray-200 py-4 text-xl font-serif bg-transparent focus:outline-none focus:border-italian-gold placeholder:text-gray-300"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Notes Particulières</label>
                    <textarea
                        name="notes" rows={2}
                        placeholder="Allergies, chaise haute..."
                        value={formData.notes} onChange={onChange}
                        className="w-full py-4 text-lg font-serif bg-transparent focus:outline-none focus:border-italian-gold resize-none"
                    />
                </div>
            </div>
        </div>
    );
}
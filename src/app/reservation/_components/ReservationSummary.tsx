"use client";

// Import Next & React
import Image from "next/image";
// Import Framer Motion
import { motion } from "framer-motion";
// Import Lucide Icons
import { Calendar, Users } from "lucide-react";
// Import Types
import { ReservationFormData } from "@/types/reservation";

// Interface
interface ReservationSummaryProps {
    formData: ReservationFormData;
    formatDateDisplay: (date: string) => string;
}

// Composant arche récapitulatif de la page " Réservation "
export default function ReservationSummary({ formData, formatDateDisplay }: ReservationSummaryProps) {
    return (
        <div className="lg:col-span-4 order-1 lg:order-2 sticky top-32 transition-all duration-500">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:aspect-[3/4.5] rounded-3xl rounded-t-[1000px] overflow-hidden bg-[#1a1512] text-white shadow-2xl border-4 border-double border-italian-gold/30 p-8 flex flex-col items-center pt-10 lg:pt-24"
            >
                {/* Fond image */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/table3.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

                {/* Contenu Récap */}
                <div className="relative z-20 w-full max-w-xs mx-auto text-center h-full flex flex-col">
                    <div className="mb-10">
                        <h4 className="font-serif text-3xl italic text-italian-gold mb-2">Riepilogo</h4>
                        <div className="h-px w-20 bg-italian-gold/50 mx-auto"></div>
                    </div>

                    <div className="space-y-10 flex-1">
                        {/* Invités */}
                        <div className="group">
                            <div className="flex items-center justify-center gap-3 text-italian-gold/70 text-[10px] uppercase tracking-widest mb-2">
                                <Users className="w-3 h-3" /> Invités
                            </div>
                            <p className="font-serif text-3xl">
                                {formData.guests} <span className="text-base font-light italic text-white/60">Pers.</span>
                            </p>
                        </div>

                        {/* Date & Heure */}
                        <div className="group">
                            <div className="flex items-center justify-center gap-3 text-italian-gold/70 text-[10px] uppercase tracking-widest mb-2">
                                <Calendar className="w-3 h-3" /> Appuntamento
                            </div>
                            <p className="font-serif text-2xl transition-all duration-300 group-hover:text-italian-gold">
                                {formData.date ? formatDateDisplay(formData.date) : "..."}
                            </p>
                            <p className="text-3xl font-light text-italian-gold mt-2">
                                {formData.time ? `${formData.time}` : "--:--"}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-8 border-t border-white/10">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">La Dolce Vita • Bruxelles</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

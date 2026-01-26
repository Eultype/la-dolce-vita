"use client";

// Import react
import { useState } from "react";
// Import Framer Motion
import { motion } from "framer-motion";
// Import Lucide Icons
import { Send, ArrowRight } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";
// Imports Validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/schemas";

// Composant Formulaire de la page " Contact "
export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Initialisation du formulaire
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    // Fonction de soumission (ne s'exécute que si Zod valide les données)
    const onSubmit = async (data: ContactFormValues) => {
        // Simulation d'appel API
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Données valides envoyées :", data);
        setIsSubmitted(true);
        reset(); // Réinitialise le formulaire
    };

    return (
        <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="bg-white p-8 md:p-12 border border-italian-gold/10 shadow-xl relative">
                {!isSubmitted ? (
                                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                                            <div>
                                                                <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Scrivici</span>
                                                                <h2 className="font-serif text-3xl mb-2">Envoyez un message</h2>
                                                            </div>                        
                        <div className="grid gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Nom & Prénom</label>
                                <input 
                                    type="text" 
                                    {...register("name")}
                                    className={`w-full border-b py-3 text-lg font-serif bg-transparent focus:outline-none transition-colors placeholder:text-gray-300 ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-italian-gold'}`}
                                    placeholder="Votre nom"
                                />
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email</label>
                                <input 
                                    type="email" 
                                    {...register("email")}
                                    className={`w-full border-b py-3 text-lg font-serif bg-transparent focus:outline-none transition-colors placeholder:text-gray-300 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-italian-gold'}`}
                                    placeholder="votre@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Message</label>
                                <textarea 
                                    rows={4}
                                    {...register("message")}
                                    className={`w-full border-b py-3 text-lg font-serif bg-transparent focus:outline-none transition-colors resize-none placeholder:text-gray-300 ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-italian-gold'}`}
                                    placeholder="Comment pouvons-nous vous aider ?"
                                />
                                {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button type="submit" variant="hero" disabled={isSubmitting} className="bg-foreground text-background hover:bg-italian-gold hover:text-white px-8 rounded-none h-14 w-full md:w-auto disabled:opacity-50">
                                {isSubmitting ? "Envoi..." : "Envoyer le message"} 
                                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-20 space-y-6">
                        <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto text-[#2E7D32]">
                            <Send className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-3xl">Message Envoyé</h3>
                        <p className="text-muted-foreground font-light">
                            Merci de nous avoir contacté. Nous reviendrons vers vous d'ici 24h.
                        </p>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                            Écrire un autre message
                        </Button>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";

export default function ContactPage() {
    const containerRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Parallax pour le texte de fond
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const xText = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulation d'envoi
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative" ref={containerRef}>

            {/* Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Texte de fond "CONTATTO" */}
            <div className="absolute top-[5.5%] md:top-4.5%] lg:top-[5.5%] xl:top-[4.5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none z-0">
                <motion.div style={{ x: xText }} className="whitespace-nowrap flex justify-end">
                    <h2 className="font-serif text-[20vw] leading-none font-bold text-black tracking-tighter">
                        CONTATTO
                    </h2>
                </motion.div>
            </div>

            <div className="relative z-10 pt-32 pb-0">

                {/* Header */}
                <section className="container mx-auto px-4 text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px w-12 bg-italian-gold/40"></div>
                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                                Parliamo Insieme
                            </span>
                            <div className="h-px w-12 bg-italian-gold/40"></div>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl text-foreground font-medium leading-[1.1] mb-8">
                            Entrons en <br/>
                            <span className="italic text-italian-gold font-light">Contact.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed mx-auto">
                            Une question sur notre carte ? Une demande de privatisation ?
                            Ou simplement envie de dire bonjour ? Nous sommes à votre écoute.
                        </p>
                    </motion.div>
                </section>

                {/* Contenu */}
                <section className="container mx-auto px-4 mb-32 relative z-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Colonne de gauche : Coordonnées et horaires */}
                        <motion.div
                            className="lg:col-span-6 space-y-12"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Informazioni</span>
                                <h3 className="font-serif text-4xl mb-6">Nous trouver</h3>
                                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                                    Situé au cœur d'Ixelles, La Dolce Vita est un refuge pour les amoureux de la gastronomie italienne authentique.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 border border-italian-gold/30 rounded-full flex items-center justify-center text-italian-gold flex-shrink-0 group-hover:bg-italian-gold group-hover:text-white transition-colors duration-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-xl mb-2">Adresse</h4>
                                        <p className="text-muted-foreground font-light">{contactInfo.address.street}<br/>{contactInfo.address.zip} {contactInfo.address.city}, {contactInfo.address.country}</p>
                                        <a href={contactInfo.address.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold mt-2 inline-block border-b border-transparent hover:border-foreground transition-all">Itinéraire</a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 border border-italian-gold/30 rounded-full flex items-center justify-center text-italian-gold flex-shrink-0 group-hover:bg-italian-gold group-hover:text-white transition-colors duration-500">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-serif text-xl mb-2">Horaires</h4>
                                        <ul className="space-y-1">
                                            {contactInfo.openingHours.map((item, index) => (
                                                <li key={index} className="text-muted-foreground font-light flex lg:gap-4">
                                                    <strong className="font-medium text-foreground min-w-[40px]">{item.day} : </strong>
                                                    <span>{item.hours}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 border border-italian-gold/30 rounded-full flex items-center justify-center text-italian-gold flex-shrink-0 group-hover:bg-italian-gold group-hover:text-white transition-colors duration-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h4 className="font-serif text-xl mb-2">Contact</h4>
                                        <a href={contactInfo.contact.phoneLink} className="text-muted-foreground font-light hover:text-italian-gold transition-colors mb-1">
                                            {contactInfo.contact.phone}
                                        </a>
                                        <a href={contactInfo.contact.emailLink} className="text-muted-foreground font-light hover:text-italian-gold transition-colors">
                                            {contactInfo.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Colonne de droite : Formulaire de contact */}
                        <motion.div 
                            className="lg:col-span-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 md:p-12 border border-italian-gold/10 shadow-xl relative">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div>
                                            <span className="text-italian-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Scrivici</span>
                                            <h3 className="font-serif text-3xl mb-2">Envoyez un message</h3>
                                        </div>
                                        
                                        <div className="grid gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Nom & Prénom</label>
                                                <input 
                                                    type="text" 
                                                    required
                                                    className="w-full border-b border-gray-200 py-3 text-lg font-serif bg-transparent focus:outline-none focus:border-italian-gold transition-colors placeholder:text-gray-300"
                                                    placeholder="Votre nom"
                                                />
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email</label>
                                                <input 
                                                    type="email" 
                                                    required
                                                    className="w-full border-b border-gray-200 py-3 text-lg font-serif bg-transparent focus:outline-none focus:border-italian-gold transition-colors placeholder:text-gray-300"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Message</label>
                                                <textarea 
                                                    rows={4}
                                                    required
                                                    className="w-full border-b border-gray-200 py-3 text-lg font-serif bg-transparent focus:outline-none focus:border-italian-gold transition-colors resize-none placeholder:text-gray-300"
                                                    placeholder="Comment pouvons-nous vous aider ?"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4 flex justify-end">
                                            <Button type="submit" variant="hero" className="bg-foreground text-background hover:bg-italian-gold hover:text-white px-8 rounded-none h-14 w-full md:w-auto">
                                                Envoyer le message <ArrowRight className="w-4 h-4 ml-2" />
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
                    </div>
                </section>

                {/* Carte */}
                <section className="relative h-[60vh] w-full z-0">
                    <div className="absolute inset-0 opacity-100">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.465823346613!2d4.36336327685511!3d50.83548265911564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4900da00001%3A0x4000000000000000!2sRue%20de%20la%20Paix%2012%2C%201050%20Ixelles%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}
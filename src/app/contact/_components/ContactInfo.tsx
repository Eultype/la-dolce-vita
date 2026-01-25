"use client";

// Import de Framer Motion
import { motion } from "framer-motion";
// Import de Lucide Icons
import { MapPin, Phone, Clock } from "lucide-react";
// Import datas
import { contactInfo } from "@/data/contact";

// Composant Coordonnées de la page " Contact "
export default function ContactInfo() {
    return (
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
    );
}

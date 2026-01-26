"use client";

// Import Next
import Link from "next/link";
// Import de Lucide Icons
import { Instagram, Facebook } from "lucide-react";
// Import Data
import { contactInfo } from "@/data/contact";

// Composant du Footer
export function Footer() {
    return (
        <footer className="bg-[#1a1512] text-[#f0ebe0] pt-24 pb-12 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                {/* Grille principale - 4 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-16">
                    
                    {/* Colonne 1 : Marque & Réseaux */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl font-bold tracking-tight">La Dolce <span className="italic text-italian-gold">Vita</span></h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            L'authenticité italienne au cœur de Bruxelles. Une cuisine de passion depuis 1985.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-italian-gold hover:border-italian-gold hover:text-[#1a1512] transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-italian-gold hover:border-italian-gold hover:text-[#1a1512] transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 : Navigation */}
                    <div className="space-y-6">
                        <span className="text-italian-gold text-xs font-bold tracking-[0.2em] uppercase block">
                            Explorer
                        </span>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Accueil</Link></li>
                            <li><Link href="/about" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">À propos de nous</Link></li>
                            <li><Link href="/menu" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Notre Carte</Link></li>
                            <li><Link href="/galerie" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Galerie</Link></li>
                            <li><Link href="/reservation" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Réserver</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Contactez-nous</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact & Adresse */}
                    <div className="space-y-6">
                        <span className="text-italian-gold text-xs font-bold tracking-[0.2em] uppercase block">
                            Nous trouver
                        </span>
                        <address className="not-italic text-sm text-white/80 leading-relaxed font-light">
                            {contactInfo.address.street}<br />
                            {contactInfo.address.zip} {contactInfo.address.city}
                        </address>
                        <div className="space-y-6">
                            <span className="text-italian-gold text-xs font-bold tracking-[0.2em] uppercase block">Réservations</span>
                            <a href={contactInfo.contact.phoneLink} className="block text-sm font-bold hover:text-italian-gold transition-colors">
                                {contactInfo.contact.phone}
                            </a>
                        </div>
                    </div>

                    {/* Colonne 4 : Horaires */}
                    <div className="space-y-6">
                        <span className="text-italian-gold text-xs font-bold tracking-[0.2em] uppercase block">
                            Horaires
                        </span>
                        <ul className="space-y-3 text-white/60 text-sm font-light">
                            {contactInfo.openingHours.map((item, index) => (
                                <li key={index} className="flex items-start border-b border-white/5 pb-2">
                                    <span className="w-24 font-medium shrink-0">{item.day}</span>
                                    <span className={item.hours === "Fermé" ? "text-italian-gold" : ""}>{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section Bas de page : Titre Géant & Copyright */}
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="w-full text-center">
                        <h2 className="font-serif text-[13vw] leading-none text-white/5 font-bold tracking-tight select-none pointer-events-none mb-12 mx-auto">
                            LA DOLCE VITA
                        </h2>
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30 gap-4 border-t border-white/5 pt-8">
                        <p>© 2026 La Dolce Vita. Bruxelles.</p>
                        
                        <div className="flex gap-8">
                            <Link href="/mentions" className="hover:text-white transition-colors">Mentions</Link>
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                        </div>

                        <a 
                            href="https://github.com/Eultype" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-italian-gold transition-colors duration-300"
                        >
                            Développé avec passion par Samuël Darry
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

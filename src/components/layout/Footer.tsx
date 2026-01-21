"use client";

// Import Next
import Link from "next/link";
// Import de Lucide Icons
import { Instagram, Facebook } from "lucide-react";

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
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-italian-gold hover:border-italian-gold hover:text-[#1a1512] transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-italian-gold hover:border-italian-gold hover:text-[#1a1512] transition-all duration-300">
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
                            <li><Link href="/menu" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Notre Carte</Link></li>
                            <li><Link href="/galerie" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Galerie</Link></li>
                            <li><Link href="/reservation" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">Réserver</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact & Adresse */}
                    <div className="space-y-6">
                        <span className="text-italian-gold text-xs font-bold tracking-[0.2em] uppercase block">
                            Nous trouver
                        </span>
                        <address className="not-italic text-lg text-white/80 leading-relaxed font-light">
                            42 Rue de la Gastronomie<br />
                            1000 Bruxelles
                        </address>
                        <div className="space-y-1">
                            <p className="text-white/60 text-sm">Réservations :</p>
                            <a href="tel:+3221234567" className="block text-xl font-serif hover:text-italian-gold transition-colors">
                                +32 2 123 45 67
                            </a>
                        </div>
                    </div>

                    {/* Colonne 4 : Horaires */}
                    <div className="space-y-6">
                        <span className="text-italian-gold text-xs font-bold tracking-[0.2em] uppercase block">
                            Horaires
                        </span>
                        <ul className="space-y-3 text-white/60 text-sm font-light">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Lun - Ven</span>
                                <span>12h-14h30 / 19h-23h</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Samedi</span>
                                <span>19h-23h30</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Dimanche</span>
                                <span className="text-italian-gold">Fermé</span>
                            </li>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}
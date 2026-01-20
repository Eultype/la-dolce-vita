// Import Next
import Link from "next/link";
// Import de Lucide-React
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

// Composant Footer
export function Footer() {
    return (
        <footer className="bg-italian-brown text-primary-foreground">
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Marque */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold">La Dolce Vita</h3>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed">
                            Une expérience culinaire italienne authentique au cœur de Paris.
                            Tradition, passion et saveurs depuis 1985.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            {/* TikTok */}
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                                aria-label="TikTok"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Coordonnées de contact */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            {/* Adresse */}
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                                <span className="text-primary-foreground/70">
                                    42 Rue de la Gastronomie<br />
                                    75008 Paris, France
                                </span>
                            </li>
                            {/* Téléphone */}
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href="tel:+33123456789" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                    01 23 45 67 89
                                </a>
                            </li>
                            {/* Email */}
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:contact@ladolcevita.fr" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                                    contact@ladolcevita.fr
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Horaires */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold">Horaires</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-accent shrink-0" />
                                <div className="text-primary-foreground/70">
                                    <p>Lun - Ven: 12h - 14h30</p>
                                    <p>& 19h - 23h</p>
                                </div>
                            </li>
                            <li className="pl-8 text-primary-foreground/70">
                                <p>Samedi: 19h - 23h30</p>
                            </li>
                            <li className="pl-8 text-primary-foreground/70">
                                <p>Dimanche: Fermé</p>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: "/", label: "Accueil" },
                                { href: "/menu", label: "Notre Menu" },
                                { href: "/galerie", label: "Galerie" },
                                { href: "/reservation", label: "Réservation" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Droit d'auteur / Mentions / Politique de confidentialités */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
                        <p>© 2025 La Dolce Vita. Tous droits réservés.</p>
                        <div className="flex gap-6">
                            <Link href="/mentions-legales" className="hover:text-primary-foreground transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/politique-confidentialite" className="hover:text-primary-foreground transition-colors">
                                Politique de confidentialité
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
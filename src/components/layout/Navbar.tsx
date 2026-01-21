"use client";

// Import de Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// Import de React
import { useState, useEffect } from "react";
// Import de Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import de Lucide Icons
import { Menu, X } from "lucide-react";
// Import des composants
import { Button } from "@/components/ui/button";

// Liste des liens de navigation
const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/menu", label: "Menu" },
    { href: "/galerie", label: "Galerie" },
    { href: "/reservation", label: "Réservation" },
    { href: "/contact", label: "Contact" },
];

// Composant Navbar
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Détection du scroll pour changer l'apparence
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Détermine si on est sur la page d'accueil (pour l'effet de transparence initiale)
    const isHome = pathname === "/";

    // Couleurs dynamiques selon l'état
    const textColor = isHome && !isScrolled ? "text-white" : "text-foreground";
    const hoverColor = isHome && !isScrolled ? "hover:text-white/80" : "hover:text-italian-gold";
    const logoColor = isHome && !isScrolled ? "text-white" : "text-foreground";
    // Bouton : Blanc/Transparent sur Hero --- Noir/Or au scroll
    const buttonClass = isHome && !isScrolled 
        ? "border-white/30 text-white hover:bg-white hover:text-black rounded-full" 
        : "bg-foreground text-background hover:bg-italian-gold hover:text-white border-none rounded-full";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                        <div className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>
                            La Dolce <span className="italic font-light">Vita</span>
                        </div>
                    </Link>

                    {/* Navigation Ordinateur */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${textColor} ${hoverColor}`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isHome && !isScrolled ? 'bg-white' : 'bg-italian-gold'}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Boutons CTA & Menu mobile */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className={`px-6 text-xs uppercase tracking-widest font-bold border transition-colors ${
                                    isHome && !isScrolled 
                                        ? "border-white/30 text-white hover:bg-white hover:text-black" 
                                        : "bg-foreground text-background border-transparent hover:bg-italian-gold hover:text-white"
                                } rounded-full`} 
                                asChild
                            >
                                <Link href="/reservation">Réserver</Link>
                            </Button>
                        </div>

                        {/* Bouton Menu Mobile */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-[#1a1512] flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-serif text-4xl md:text-5xl text-[#f0ebe0] hover:text-italian-gold transition-colors italic"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8"
                            >
                                <Button variant="hero" size="xl" className="rounded-full px-12" asChild>
                                    <Link href="/reservation" onClick={() => setIsOpen(false)}>Réserver une table</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

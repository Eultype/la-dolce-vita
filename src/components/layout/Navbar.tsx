"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/menu", label: "Menu" },
    { href: "/galerie", label: "Galerie" },
    { href: "/reservation", label: "Réservation" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <span className="font-playfair text-2xl font-bold text-primary">
                            La Dolce Vita
                        </span>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-foreground/80"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Phone */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:+33123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="w-4 h-4" />
                            01 23 45 67 89
                        </a>
                        <Button variant="default" size="sm" asChild>
                            <Link href="/reservation">Réserver</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-lg font-medium py-2 ${
                                        pathname === link.href
                                            ? "text-primary"
                                            : "text-foreground/80"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-border">
                                <Button variant="default" className="w-full" asChild>
                                    <Link href="/reservation" onClick={() => setIsOpen(false)}>Réserver une table</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
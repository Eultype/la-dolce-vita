"use client";

// Import Next
import Link from "next/link";
// Import des composants
import { Button } from "@/components/ui/button";

// Composant MenuCTA de la page " La carte "
export default function MenuCTA() {
    return (
        <section className="container mx-auto px-4 py-24 text-center">
            <div className="max-w-2xl mx-auto space-y-12">
                <div className="w-16 h-px bg-italian-gold/30 mx-auto" />
                {/* Signature */}
                <p className="font-serif italic text-2xl text-muted-foreground font-light">
                    "Tous nos plats sont préparés à la minute. Pour toute allergie, n'hésitez pas à en informer notre équipe."
                </p>
                <div className="w-16 h-px bg-italian-gold/30 mx-auto" />

                {/* Bouton réserver mon expérience*/}
                <div>
                    <Button variant="hero" size="xl" className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-italian-gold hover:text-white transition-all duration-500 shadow-xl" asChild>
                        <Link href="/reservation">
                            Réserver mon Expérience
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

// Import des composants locaux
import MenuHero from "./_components/MenuHero";
import MenuContent from "./_components/MenuContent";
import MenuCTA from "./_components/MenuCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "La Carte",
    description: "Découvrez notre sélection de pâtes fraîches, pizzas artisanales et spécialités italiennes authentiques.",
};

// Page La carte - SERVER COMPONENT
export default function MenuPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative">
            <div className="relative z-10">
                {/* Hero */}
                <MenuHero />
                {/* Contenu du menu */}
                <MenuContent />
                {/* Footer CTA */}
                <MenuCTA />
            </div>
        </div>
    );
}
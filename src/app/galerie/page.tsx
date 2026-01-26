// Import des composants de la page " Galerie "
import GalerieHero from "./_components/GalerieHero";
import GalerieGrid from "./_components/GalerieGrid";
import GalerieQuote from "./_components/GalerieQuote";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galerie",
    description: "Immersion visuelle dans l'ambiance et les plats de La Dolce Vita.",
};

// Page galerie
export default function GaleriePage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative">
            {/* Header */}
            <GalerieHero />
            {/* Grille d'images (Arche et mosaïque) */}
            <GalerieGrid />
            {/* Citation */}
            <GalerieQuote />
        </div>
    );
}

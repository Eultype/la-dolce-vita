"use client";

// Import des composants locaux
import GalerieHero from "./_components/GalerieHero";
import GalerieGrid from "./_components/GalerieGrid";
import GalerieQuote from "./_components/GalerieQuote";

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
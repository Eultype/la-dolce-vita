"use client";

// Import des composants de la page About
import AboutHero from "./_components/AboutHero";
import AboutHistory from "./_components/AboutHistory";
import AboutValues from "./_components/AboutValues";
import AboutManifesto from "./_components/AboutManifesto";
import AboutTeam from "./_components/AboutTeam";

// Page About
export default function AboutPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative">

            {/* Overlay global */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
            {/* Header */}
            <AboutHero />
            {/* Histoire */}
            <AboutHistory />
            {/* Valeurs */}
            <AboutValues />
            {/* Manifeste */}
            <AboutManifesto />
            {/* Équipe */}
            <AboutTeam />
        </div>
    );
}

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
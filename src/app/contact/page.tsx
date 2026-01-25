"use client";

// Import des composants de la page " Contact "
import ContactHero from "./_components/ContactHero";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";
import ContactMap from "./_components/ContactMap";

// Page contact
export default function ContactPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative">

            {/* Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
            {/* Header */}
            <ContactHero />
            {/* Contenu principal */}
            <section className="container mx-auto px-4 mb-32 relative z-20">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Coordonnées */}
                    <ContactInfo />
                    {/* Formulaire */}
                    <ContactForm />
                </div>
            </section>
            {/* Carte google */}
            <ContactMap />
        </div>
    );
}
// Import des composants de la page " Contact "
import ContactHero from "./_components/ContactHero";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";
import ContactMap from "./_components/ContactMap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Une question ou une demande spéciale ? Contactez l'équipe de La Dolce Vita.",
};

// Page contact
export default function ContactPage() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative">
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

// Import des composants de la page d'accueil
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MenuPreviewSection from "@/components/home/MenuPreviewSection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <AboutSection />
            <MenuPreviewSection />

            {/* Futures sections */}
            <section className="py-20 text-center">
                <p className="text-muted-foreground">En construction ...</p>
            </section>
        </div>
    );
}
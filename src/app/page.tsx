// Import des composants de la page d'accueil
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MenuPreviewSection from "@/components/home/MenuPreviewSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ReservationSection from "@/components/home/ReservationSection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <AboutSection />
            <MenuPreviewSection />
            <ReviewsSection />
            <ReservationSection />
        </div>
    );
}
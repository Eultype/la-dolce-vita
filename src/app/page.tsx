// Import des composants de la page d'accueil
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MenuPreviewSection from "@/components/home/MenuPreviewSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ReservationSection from "@/components/home/ReservationSection";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "La Dolce Vita",
        "image": "https://la-dolce-vita.be/images/hero-italian.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue de la Paix 12",
            "addressLocality": "Ixelles",
            "postalCode": "1050",
            "addressCountry": "BE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.8354,
            "longitude": 4.3633
        },
        "url": "https://la-dolce-vita.be",
        "telephone": "+32 2 123 45 67",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "18:30",
                "closes": "22:30"
            }
        ],
        "menu": "https://la-dolce-vita.be/menu",
        "servesCuisine": "Italienne",
        "priceRange": "€€"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <AboutSection />
            <MenuPreviewSection />
            <ReviewsSection />
            <ReservationSection />
        </div>
    );
}
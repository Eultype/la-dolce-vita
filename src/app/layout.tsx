import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair"
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export const metadata: Metadata = {
    title: {
        default: "La Dolce Vita | Restaurant Italien Authentique Bruxelles",
        template: "%s | La Dolce Vita"
    },
    description: "Cuisine italienne traditionnelle au cœur de Bruxelles. Pâtes fraîches, produits D.O.P. et ambiance chaleureuse depuis 1985.",
    keywords: ["restaurant italien", "Bruxelles", "pâtes fraîches", "gastronomie italienne", "La Dolce Vita", "réservation restaurant"],
    authors: [{ name: "La Dolce Vita" }],
    creator: "La Dolce Vita",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://la-dolce-vita.be",
        siteName: "La Dolce Vita",
        title: "La Dolce Vita | Restaurant Italien Authentique",
        description: "L'art de vivre à l'italienne. Une cuisine de cœur, d'histoire et de passion à Bruxelles.",
        images: [
            {
                url: "/images/hero-italian.jpg",
                width: 1200,
                height: 630,
                alt: "La Dolce Vita Restaurant"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "La Dolce Vita | Restaurant Italien Authentique",
        description: "Cuisine italienne traditionnelle et ambiance chaleureuse à Bruxelles.",
        images: ["/images/hero-italian.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
                <SmoothScroll>
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
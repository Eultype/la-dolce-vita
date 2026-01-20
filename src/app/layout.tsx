import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
    title: "La Dolce Vita | Restaurant Italien Authentique",
    description: "Cuisine italienne traditionnelle, pâtes fraîches et ambiance chaleureuse.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
    }>) {
        return (
            <html lang="fr" className="scroll-smooth">
                <body className={`${inter.variable} ${playfair.variable} antialiase bg-background text-foreground`}>
                    {children}
                </body>
            </html>
        );
}
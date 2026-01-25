"use client";

// Import React
import { useState } from "react";
// Import des composants de la page La carte
import MenuHero from "./_components/MenuHero";
import MenuNavigation from "./_components/MenuNavigation";
import MenuCategoryTitle from "./_components/MenuCategoryTitle";
import MenuList from "./_components/MenuList";
import MenuCTA from "./_components/MenuCTA";

const categories = ["Antipasti", "Primi Piatti", "Secondi Piatti", "Le Pizze", "Dolci", "Vini", "Bevande"];

// Page La carte
export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("Antipasti");

    return (
        <div className="bg-[#FDFBF7] min-h-screen overflow-hidden relative">

            <div className="relative z-10">
                {/* Hero */}
                <MenuHero />
                {/* Navigation */}
                <MenuNavigation 
                    categories={categories} 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory} 
                />
                {/* Titre */}
                <MenuCategoryTitle activeCategory={activeCategory} />
                {/* Liste des plats */}
                <MenuList activeCategory={activeCategory} />
                {/* CTA */}
                <MenuCTA />
            </div>
        </div>
    );
}

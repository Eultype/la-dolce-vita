"use client";

// Import React
import { useState } from "react";
// Import des composants
import MenuNavigation from "./MenuNavigation";
import MenuCategoryTitle from "./MenuCategoryTitle";
import MenuList from "./MenuList";

const categories = ["Antipasti", "Primi Piatti", "Secondi Piatti", "Le Pizze", "Dolci", "Vini", "Bevande"];

export default function MenuContent() {
    const [activeCategory, setActiveCategory] = useState("Antipasti");

    return (
        <>
            <MenuNavigation 
                categories={categories} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
            />
            <MenuCategoryTitle activeCategory={activeCategory} />
            <MenuList activeCategory={activeCategory} />
        </>
    );
}

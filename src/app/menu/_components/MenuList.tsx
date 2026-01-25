"use client";

// Import des données
import { dishes } from "@/data/menu";
// Import des composants
import { MenuListItem } from "./MenuListItem";

interface MenuListProps {
    activeCategory: string;
}

// Composant MenuList de la page " La carte "
export default function MenuList({ activeCategory }: MenuListProps) {
    return (
        <section className="container mx-auto px-4 max-w-6xl relative">

            {/* Arches du menu */}
            <div className="absolute -top-12 left-4 right-4 h-24 border-t-2 border-x-2 border-italian-gold/10 rounded-t-full pointer-events-none block"></div>
            <div className="absolute -bottom-12 left-4 right-4 h-24 border-b-2 border-x-2 border-italian-gold/10 rounded-b-full pointer-events-none block"></div>

            {/* Filet vertical */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-italian-gold/10 hidden md:block"></div>

            <div className="relative z-10 px-8 py-12">
                {/* Affichage des plats filtrés */}
                {(() => {
                    const filteredDishes = dishes.filter(dish => dish.category === activeCategory);
                    const subCategories = Array.from(new Set(filteredDishes.map(d => d.subCategory).filter(Boolean)));

                    if (subCategories.length > 0) {
                        return (
                            <div className="space-y-16">
                                {subCategories.map((subCat) => (
                                    <div key={subCat as string} className="space-y-12">
                                        {/* Titre de sous-catégorie */}
                                        <div className="flex items-center gap-6 justify-center relative z-10">
                                            <div className="h-px w-8 bg-italian-gold/20"></div>
                                            <h3 className="font-serif text-2xl text-italian-gold italic px-4 bg-[#FDFBF7] relative z-20">{subCat as string}</h3>
                                            <div className="h-px w-8 bg-italian-gold/20"></div>
                                        </div>
                                        {/* Grille des plats pour la sous-catégorie courante */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                                            {filteredDishes
                                                .filter(d => d.subCategory === subCat)
                                                .map((dish, i) => (
                                                    <MenuListItem key={dish.name} dish={dish} index={i} />
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                    return (
                    /* Affichage standard (Pizzas, Pâtes, etc.) */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                        {filteredDishes.map((dish, i) => (
                            <MenuListItem key={dish.name} dish={dish} index={i} />
                        ))}
                    </div>
                    );
                })()}
            </div>
        </section>
    );
}
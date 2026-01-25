"use client";

interface MenuNavigationProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

// Composant MenuNavigation de la page " La carte "
export default function MenuNavigation({ categories, activeCategory, setActiveCategory }: MenuNavigationProps) {
    return (
        <nav className="sticky top-20 z-40 bg-[#FDFBF7]/80 backdrop-blur-md border-y border-italian-gold/20 py-6 mb-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-center flex-wrap gap-8 md:gap-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group ${
                                activeCategory === cat ? "text-italian-gold" : "text-foreground/40 hover:text-foreground"
                            }`}
                        >
                            {cat}
                            <span className={`absolute -bottom-2 left-0 h-px bg-italian-gold transition-all duration-500 ${
                                activeCategory === cat ? "w-full" : "w-0 group-hover:w-full"
                            }`} />
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

"use client";

// Composant Header de la page " Réservation "
export default function ReservationHeader() {
    return (
        <div className="text-center mb-16">
            <span className="text-italian-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Benvenuti</span>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground font-medium">
                Réservez votre <span className="italic text-italian-gold">Table</span>
            </h1>
        </div>
    );
}

// Import des composants locaux
import ReservationHeader from "./_components/ReservationHeader";
import ReservationContent from "./_components/ReservationContent";

// Page de réservation - SERVER COMPONENT
export default function ReservationPage() {
    return (
        <div className="bg-[#FDFBF7] overflow-hidden relative">
            <div className="relative z-10 pt-32 pb-20 container mx-auto px-4">
                {/* Header */}
                <ReservationHeader />
                {/* Contenu interactif */}
                <ReservationContent />
            </div>
        </div>
    );
}
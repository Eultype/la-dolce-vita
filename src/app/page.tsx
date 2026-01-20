import HeroSection from "@/components/home/HeroSection";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />

            {/* Futures sections */}
            <section className="py-20 text-center">
                <p className="text-muted-foreground">En construction ...</p>
            </section>
        </div>
    );
}
"use client";

// Composant Map google de la page " Contact "
export default function ContactMap() {
    return (
        <section className="relative h-[60vh] w-full z-0">
            <div className="absolute inset-0 opacity-100">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.465823346613!2d4.36336327685511!3d50.83548265911564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4900da00001%3A0x4000000000000000!2sRue%20de%20la%20Paix%2012%2C%201050%20Ixelles%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Emplacement du restaurant La Dolce Vita sur Google Maps"
                    className="w-full h-full"
                ></iframe>
            </div>
        </section>
    );
}

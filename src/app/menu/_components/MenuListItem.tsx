"use client";

import { motion } from "framer-motion";

interface Dish {
    name: string;
    description: string;
    price: string;
    origin: string;
}

export const MenuListItem = ({ dish, index }: { dish: Dish; index: number }) => (
    <motion.div
        key={dish.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group flex justify-between items-start gap-6 border-b border-italian-gold/5 hover:border-italian-gold/20 transition-colors cursor-pointer"
    >
        <div className="space-y-2 flex-grow">
            <div className="flex items-baseline gap-4">
                {/* Nom du plat */}
                <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-italian-gold transition-colors">
                    {dish.name}
                </h3>
                {/* Pointillés du prix */}
                <div className="flex-grow border-b border-dotted border-italian-gold/30 mb-1.5" />
                {/* Prix */}
                <span className="font-serif text-xl italic text-italian-gold">
                    {dish.price}€
                </span>
            </div>
            {/* Description du plat */}
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-md">
                {dish.description}
            </p>
            <div className="flex gap-4 pt-2">
                <span className="text-[8px] font-bold uppercase tracking-widest text-italian-gold/60">{dish.origin}</span>
                {index % 2 === 0 && <span className="text-[8px] font-bold uppercase tracking-widest text-italian-terracotta/60">Popular</span>}
            </div>
        </div>
    </motion.div>
);

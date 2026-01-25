import { z } from "zod";

// Schéma pour le formulaire de Contact
export const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  message: z.string().min(10, { message: "Votre message doit contenir au moins 10 caractères." }),
});

// Type déduit automatiquement
export type ContactFormValues = z.infer<typeof contactSchema>;

// Schéma pour le formulaire de Réservation
export const reservationSchema = z.object({
  date: z.string().min(1, { message: "Veuillez sélectionner une date." }),
  time: z.string().min(1, { message: "Veuillez choisir une heure." }),
  guests: z.string(), // On garde string car c'est souvent un select/radio
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  phone: z.string().min(9, { message: "Numéro de téléphone invalide." }), 
  notes: z.string().optional(),
});

// Type déduit automatiquement
export type ReservationFormValues = z.infer<typeof reservationSchema>;

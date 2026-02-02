"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, CheckCircle2, Quote } from "lucide-react";

export default function ParrainagePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://placehold.co/1920x1080/1a365d/ffffff?text=Parrainage+Orphelin"
                    alt="Enfant heureux"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative container mx-auto px-4 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Parrainer un orphelin
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90"
                    >
                        Pour 50€ par mois, offrez un avenir meilleur.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Explanation Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Pourquoi parrainer ?</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Le parrainage est un acte d'amour durable. Votre soutien mensuel de 50€ permet de couvrir les besoins essentiels de l'enfant : nourriture, vêtements, scolarité et soins médicaux.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Vous construisez une relation privilégiée avec votre filleul(e) à travers des échanges de lettres et des nouvelles régulières.
                        </p>
                        <a
                            href="https://pay.sumup.com/b2c/Q1ICOX75"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-secondary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-transform hover:scale-105 shadow-lg"
                        >
                            <Heart className="fill-current" />
                            Parrainer maintenant (50€/mois)
                        </a>
                        <p className="mt-4 text-sm text-gray-500 italic">Reçu fiscal annuel disponible.</p>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://placehold.co/600x800/60a5fa/ffffff?text=Enfant+Ecole"
                            alt="Enfant à l'école"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Process Section */}
                <div className="bg-primary/5 rounded-3xl p-12 mb-24">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Comment ça marche ?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Je m'engage", desc: "Je remplis le formulaire de don sécurisé pour mettre en place le parrainage." },
                            { title: "Je reçois son dossier", desc: "Nous vous envoyons la photo et l'histoire de votre filleul(e) sous 48h." },
                            { title: "Je suis son évolution", desc: "Vous recevez des bulletins scolaires et des nouvelles régulièrement." }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-md text-center">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Témoignages</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow border border-gray-100 relative">
                            <Quote className="absolute top-6 left-6 text-secondary/20 w-12 h-12" />
                            <p className="text-gray-600 italic mb-6 relative z-10 pt-6">
                                "Parrainer Amina a changé ma vie. Recevoir ses dessins et voir ses progrès à l'école est ma plus grande fierté."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                                    <Image src="https://placehold.co/100x100/ccc/fff?text=S" alt="Sarah" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-primary">Sarah L.</p>
                                    <p className="text-sm text-gray-500">Marraine depuis 2 ans</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow border border-gray-100 relative">
                            <Quote className="absolute top-6 left-6 text-secondary/20 w-12 h-12" />
                            <p className="text-gray-600 italic mb-6 relative z-10 pt-6">
                                "Je sais exactement où va mon argent. L'association est transparente et je me sens utile pour ces enfants."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                                    <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Karim" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-primary">Karim B.</p>
                                    <p className="text-sm text-gray-500">Parrain depuis 4 ans</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary mb-8 text-center">Questions Fréquentes</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2">Puis-je arrêter le parrainage quand je veux ?</h3>
                            <p className="text-gray-600">Oui, le parrainage est sans engagement de durée, même si nous encourageons la continuité pour la stabilité de l'enfant.</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2">Le don est-il déductible des impôts ?</h3>
                            <p className="text-gray-600">Oui, vous recevrez un reçu fiscal vous permettant de déduire 66% du montant de vos impôts.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

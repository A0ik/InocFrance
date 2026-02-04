"use client"


import Image from "next/image";
import { HandCoins, PieChart } from "lucide-react";

export default function DonPage() {


    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary text-white pt-32 pb-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/don-hero.jpg')] opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">Soutenez Nos Actions</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Chaque don compte. Votre générosité permet de financer les urgences et d'assurer nos missions quotidiennes.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Simplified Donation Block */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 text-center">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center gap-3">
                        <HandCoins className="w-8 h-8 text-secondary" />
                        Faire un don
                    </h2>

                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        Vous serez redirigé vers notre plateforme de paiement sécurisée SumUp où vous pourrez choisir le montant de votre don.
                    </p>

                    <a
                        href="https://pay.sumup.com/b2c/QTYMONDZ"
                        target="_blank"
                        className="inline-block bg-primary text-white px-12 py-4 rounded-xl text-xl font-bold hover:bg-primary/90 transition-transform hover:scale-[1.01] shadow-xl"
                    >
                        Accéder au paiement sécurisé
                    </a>
                    <p className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-1">
                        Paiement 100% sécurisé via SumUp
                    </p>
                </div>

                {/* Transparency Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                            <PieChart className="w-8 h-8 text-secondary" />
                            Transparence
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Nous nous engageons à utiliser vos dons de la manière la plus efficace possible.
                            Chaque euro est tracé pour garantir qu'il arrive bien aux bénéficiaires.
                        </p>
                        <ul className="space-y-4 mt-6">
                            <li className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-secondary w-16 text-right">92%</span>
                                <span className="text-gray-600">Missions sociales et humanitaires</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-gray-400 w-16 text-right">5%</span>
                                <span className="text-gray-600">Frais de fonctionnement</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-gray-400 w-16 text-right">3%</span>
                                <span className="text-gray-600">Frais de collecte</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-[16px] border-primary border-t-secondary border-r-secondary transform rotate-45"></div>
                        {/* Simple CSS Pie Chart representation */}
                    </div>
                </div>

            </div>
        </div>
    );
}

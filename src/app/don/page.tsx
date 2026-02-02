"use client"

import { useState } from "react";
import Image from "next/image";
import { HandCoins, PieChart } from "lucide-react";

export default function DonPage() {
    const [amount, setAmount] = useState<number | null>(50);
    const amounts = [10, 25, 50, 100];

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/000000/ffffff?text=Hands')] opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">Soutenez Nos Actions</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Chaque don compte. Votre générosité permet de financer les urgences et d'assurer nos missions quotidiennes.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Donation Selector */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
                    <h2 className="text-2xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                        <HandCoins className="w-8 h-8 text-secondary" />
                        Je fais un don libre
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {amounts.map((val) => (
                            <button
                                key={val}
                                onClick={() => setAmount(val)}
                                className={`py-4 rounded-xl text-xl font-bold transition-all ${amount === val
                                        ? "bg-secondary text-primary-foreground shadow-lg scale-105"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {val} €
                            </button>
                        ))}
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ou montant libre (€)</label>
                        <input
                            type="number"
                            placeholder="Autre montant"
                            className="w-full p-4 text-center text-xl font-bold border border-gray-300 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                            onChange={(e) => setAmount(Number(e.target.value) || null)}
                        />
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl mb-8 text-center">
                        <p className="text-primary font-medium">
                            Votre don de {amount || "..."} € ne vous coûtera réellement que <span className="font-bold">{(amount ? amount * 0.34 : 0).toFixed(2)} €</span> après déduction fiscale.
                        </p>
                    </div>

                    <a
                        href="https://pay.sumup.com/b2c/QTYMONDZ"
                        target="_blank"
                        className="block w-full bg-primary text-white text-center py-5 rounded-xl text-xl font-bold hover:bg-primary/90 transition-transform hover:scale-[1.01] shadow-xl"
                    >
                        Confirmer mon don
                    </a>
                    <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center gap-1">
                        Paiement sécurisé via SumUp
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

"use client"

import Image from "next/image";
import { Droplets, MapPin, Users } from "lucide-react";

export default function PuitsPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-blue-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">L'Eau, c'est la Vie</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Construire un puits, c'est offrir la santé, l'éducation et la vie à tout un village.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-6xl space-y-20">

                {/* Tchad Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-[300px] md:h-auto">
                            <Image
                                src="/images/puits-tchad.jpg"
                                alt="Puits Tchad"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-0 left-0 bg-primary/90 text-white px-6 py-2 rounded-br-2xl font-bold">
                                TCHAD
                            </div>
                        </div>
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-primary mb-2">Puits Familial / Villageois au Tchad</h2>
                            <div className="text-3xl font-bold text-secondary mb-6">1000 € <span className="text-lg text-gray-500 font-normal">/ puits</span></div>

                            <div className="space-y-4 mb-8">
                                <p className="text-gray-700">
                                    Au Tchad, l'accès à l'eau est un défi majeur. Les femmes et les enfants parcourent des kilomètres pour trouver de l'eau souvent insalubre.
                                </p>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Users className="w-5 h-5 text-secondary" />
                                    <span>Bénéficiaires : 20 à 50 familles</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                    <span>Zone : Villages ruraux isolés</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Droplets className="w-5 h-5 text-secondary" />
                                    <span>Profondeur : 30 à 50 mètres</span>
                                </div>
                            </div>

                            <a
                                href="https://pay.sumup.com/b2c/QJRBJ8FV"
                                target="_blank"
                                className="inline-block w-full text-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-md"
                            >
                                Financer un puits au Tchad (1000€)
                            </a>
                            <p className="text-center text-xs text-gray-400 mt-2">*Financement participatif possible</p>
                        </div>
                    </div>
                </div>

                {/* Pakistan Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2">
                        <div className="order-2 md:order-1 p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-primary mb-2">Pompe à eau au Pakistan</h2>
                            <div className="text-3xl font-bold text-secondary mb-6">400 € <span className="text-lg text-gray-500 font-normal">/ pompe</span></div>

                            <div className="space-y-4 mb-8">
                                <p className="text-gray-700">
                                    Installation de pompes manuelles robustes pour fournir de l'eau potable facilement accessible aux communautés pauvres.
                                </p>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Users className="w-5 h-5 text-secondary" />
                                    <span>Bénéficiaires : 5 à 10 familles</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                    <span>Zone : Zones rurales du Pakistan</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Droplets className="w-5 h-5 text-secondary" />
                                    <span>Durée de vie : +10 ans</span>
                                </div>
                            </div>

                            <a
                                href="https://pay.sumup.com/b2c/QZC6CDL4"
                                target="_blank"
                                className="inline-block w-full text-center bg-secondary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all hover:scale-[1.02] shadow-md"
                            >
                                Financer une pompe au Pakistan (400€)
                            </a>
                        </div>
                        <div className="relative h-[300px] md:h-auto order-1 md:order-2">
                            <Image
                                src="/images/puits-pakistan.jpg"
                                alt="Puits Pakistan"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-0 right-0 bg-secondary text-primary-foreground px-6 py-2 rounded-bl-2xl font-bold">
                                PAKISTAN
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="text-center pt-8">
                    <h2 className="text-2xl font-bold text-primary mb-8">Puits Réalisés</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={`/images/puits-${i}.jpg`}
                                    alt={`Puits réalisé ${i}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

"use client"

import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary text-white pt-36 pb-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">Contactez-nous</h1>
                    <p className="text-xl opacity-90">
                        Une question sur vos dons ou nos actions ? Nous sommes là pour vous répondre.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">

                    {/* Info Side */}
                    <div className="bg-secondary/10 p-12 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-primary mb-8">Informations</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">contact@innocentsfrance.org</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Adresse</h3>
                                    <p className="text-gray-600">10 Rue de la Solidarité<br />75000 Paris, France</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Réseaux Sociaux</h3>
                                    <p className="text-gray-600 italic">
                                        Nous n'avons pas de réseaux sociaux pour le moment.
                                        Privilégiez l'email ou le formulaire.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-white/50 p-6 rounded-xl border border-white/60">
                            <h3 className="font-bold text-primary mb-2">Devenir Bénévole ?</h3>
                            <p className="text-sm text-gray-600">
                                Envoyez-nous un email avec vos compétences et disponibilités. Nous recherchons toujours des cœurs vaillants.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">Envoyez un message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Votre Nom</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="Jean Dupont" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Votre Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="jean@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all">
                                    <option>Demande d'information</option>
                                    <option>Problème technique don</option>
                                    <option>Presse / Partenariat</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="Votre message..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                                Envoyer
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

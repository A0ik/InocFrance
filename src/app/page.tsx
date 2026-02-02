"use client"

import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { CountryCard } from "@/components/ui/country-card";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Droplets, Gift } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const countries = [
  { name: "Maroc", image: "https://placehold.co/400x300/1a365d/white?text=Maroc", desc: "Aide aux familles et orphelins dans les zones rurales." },
  { name: "Sénégal", image: "https://placehold.co/400x300/1a365d/white?text=Senegal", desc: "Soutien éducatif et alimentaire." },
  { name: "Tchad", image: "https://placehold.co/400x300/1a365d/white?text=Tchad", desc: "Construction de puits et accès à l'eau." },
  { name: "Soudan", image: "https://placehold.co/400x300/1a365d/white?text=Soudan", desc: "Soutien aux réfugiés et aide médicale." },
  { name: "Gaza", image: "https://placehold.co/400x300/1a365d/white?text=Gaza", desc: "Parrainage d'orphelins, éducation et colis alimentaires." },
  { name: "Pakistan", image: "https://placehold.co/400x300/1a365d/white?text=Pakistan", desc: "Accès à l'eau et aide aux veuves." },
];

function Counter({ from, to, label }: { from: number; to: number; label: string }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = (to - from) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [from, to]);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <span className="text-5xl font-bold text-primary mb-2">{count}+</span>
      <span className="text-gray-600 font-medium uppercase tracking-wide text-sm">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      {/* Hero Section using ScrollExpandMedia */}
      <div className="h-screen relative">
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc="/video.mp4"
          bgImageSrc="https://placehold.co/1920x1080/60a5fa/ffffff?text=Background"
          title="INNOCENTS FRANCE"
          date="Ensemble pour eux"
          scrollToExpand="Découvrir nos actions"
          textBlend={true}
        >
          <div className="flex flex-col items-center justify-center gap-6 mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Nos Actions sur le terrain
            </h2>
            {/* Content shown after scroll expansion */}
          </div>
        </ScrollExpandMedia>

        {/* ABSOLUTE OVERLAY FOR HERO BUTTONS - Ensures they are clickable immediately */}
        <div className="absolute inset-x-0 bottom-[10%] md:bottom-[30%] z-[60] flex flex-col items-center justify-center pointer-events-none">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pointer-events-auto w-full px-4">
            <a
              href="https://pay.sumup.com/b2c/QTYMONDZ"
              target="_blank"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl border-2 border-transparent w-full md:w-auto text-center"
            >
              Faire un don
            </a>
            <Link
              href="/parrainage"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-xl w-full md:w-auto text-center"
            >
              Parrainer un enfant
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="py-12 bg-secondary/10">
        <ScrollVelocity velocity={3} className="text-primary/20">
          Espoir • Solidarité • Action • Avenir •
        </ScrollVelocity>
      </div>

      {/* Nos Actions Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="actions">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nos Actions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous intervenons dans 7 pays pour apporter une aide concrète aux populations les plus vulnérables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryCard
              key={country.name}
              country={country.name}
              image={country.image}
              description={country.desc}
            />
          ))}
        </div>
      </section>

      {/* Parrainage Highlight */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1a365d/ffffff?text=Pattern')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-secondary/20 px-4 py-1 rounded-full text-secondary font-semibold text-sm">
                PROGRAMME PHARE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Parrainer un orphelin, <br />
                <span className="text-secondary">c'est changer une vie.</span>
              </h2>
              <p className="text-lg opacity-90 max-w-xl">
                Pour seulement 50€/mois, vous assurez à un enfant orphelin un toit, de la nourriture,
                une éducation et des soins médicaux. Un lien unique se crée entre vous et votre filleul(e).
              </p>
              <div className="pt-4">
                <Link
                  href="/parrainage"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  <Heart className="w-5 h-5 fill-primary" />
                  Je parraine maintenant
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white/20">
                <Image
                  src="https://placehold.co/600x800/1e40af/ffffff?text=Enfant+Souriant"
                  alt="Enfant parrainé"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Projets */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Autres Projets</h2>
          <p className="text-xl text-gray-600">Soutenez nos actions ponctuelles et durables</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/colis" className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image src="https://placehold.co/600x400/orange/white?text=Colis+Alimentaire" alt="Colis" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <Gift className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Colis Alimentaires</h3>
                <p className="text-gray-600 mb-4 flex-1">Distribution de colis pour le Ramadan et les urgences.</p>
                <span className="text-secondary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/puits" className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image src="https://placehold.co/600x400/blue/white?text=Puits" alt="Puits" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <Droplets className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Construction de Puits</h3>
                <p className="text-gray-600 mb-4 flex-1">Offrez l'accès à l'eau potable au Tchad et au Pakistan.</p>
                <span className="text-secondary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/don" className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image src="https://placehold.co/600x400/green/white?text=Don+Libre" alt="Don Libre" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <Heart className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Don Libre</h3>
                <p className="text-gray-600 mb-4 flex-1">Soutenez nos actions générales selon vos moyens.</p>
                <span className="text-secondary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                  Faire un don <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Notre Impact</h2>
            <p className="text-lg text-gray-600">Grâce à votre générosité, nous avons pu réaliser :</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Counter from={0} to={150} label="Orphelins Parrainés" />
            <Counter from={0} to={5000} label="Colis Distribués" />
            <Counter from={0} to={20} label="Puits Construits" />
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-primary text-white py-12 pb-24 border-t border-white/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-outfit">INNOCENTS FRANCE</h3>
            <p className="opacity-80 max-w-sm">Association humanitaire d'aide aux orphelins et aux mamans en difficulté.</p>
            <p className="mt-4 text-sm opacity-60">Reçu fiscal disponible pour chaque don.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link href="/" className="hover:text-secondary">Accueil</Link></li>
              <li><Link href="/parrainage" className="hover:text-secondary">Parrainage</Link></li>
              <li><Link href="/colis" className="hover:text-secondary">Colis</Link></li>
              <li><Link href="/puits" className="hover:text-secondary">Puits</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 opacity-80">
              <li>Contactez-nous via le formulaire</li>
              <li>Pas de réseaux sociaux</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

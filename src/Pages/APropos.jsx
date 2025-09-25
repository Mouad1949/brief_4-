import React from "react";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import ChiffresCles from "../Components/APropos/ChiffresCles";
import Timeline from "../Components/APropos/Timeline";

export default function APropos() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">

      <div className="p-8">
        {/* En-tête */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#F2613F]">À propos de ArtConnect Maroc</h1>
          <p className="mt-4 text-xl text-[#9B3922]">
            Connecter les passionnés d’art et les artisans marocains
          </p>
        </header>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#F2613F]">Notre mission</h2>
          <p className="mt-4 text-lg text-[#9B3922]">
            Promouvoir l’art et la culture marocains à travers une plateforme immersive qui connecte les passionnés d’art, les artisans et les amateurs de culture.
          </p>
        </section>

        {/* Chiffres clés */}
        <ChiffresCles />

        {/* Timeline */}
        <Timeline />
      </div>
    </div>
  );
}

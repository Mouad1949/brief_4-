// src/Components/Oeuvres.jsx
import React from "react";

export default function Oeuvres() {
  const oeuvres = [
    {
      id: 1,
      titre: "Tapis berbère",
      image: "/src/assets/tapis.jpeg",
      region: "Taznakht, Maroc",
    },
    {
      id: 2,
      titre: "Zellige traditionnel",
      image: "/src/assets/zellige.jpeg",
      region: "Fès, Maroc",
    },
    {
      id: 3,
      titre: "Plâtre sculpté",
      image: "/src/assets/platre.jpg",
      region: "Marrakech, Maroc",
    },
    {
      id: 4,
      titre: "Poterie artisanale",
      image: "/src/assets/pottery.jpeg",
      region: "Safi, Maroc",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-[#9B3922] mb-6">
        Dernières Œuvres
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {oeuvres.map((oeuvre) => (
          <div
            key={oeuvre.id}
            className="bg-[#481E14] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
          >
            {/* Image */}
            <img
              src={oeuvre.image}
              alt={oeuvre.titre}
              className="w-full h-48 object-cover"
            />

            {/* Contenu */}
            <div className="p-4 text-white">
              <h3 className="text-lg font-bold">{oeuvre.titre}</h3>
              <p className="text-sm text-gray-300">{oeuvre.region}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

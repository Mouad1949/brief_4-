import React from "react";
import tapis from "../assets/tapis.jpeg";
import pottery from "../assets/pottery.jpeg";
import platre from "../assets/platre.jpg";
import bois from "../assets/bois.jpeg";
import calligraphie from "../assets/calligraphie.jpg";

const derniersAjouts = [
  { id: 1, titre: "Tapis berbère", image: tapis },
  { id: 2, titre: "Pottery de Fès", image: pottery },
  { id: 3, titre: "Plâtre sculpté", image: platre },
  { id: 4, titre: "Bois sculpté", image:bois  },
  { id: 5, titre: "Calligraphie arabe", image: calligraphie },
];

export default function DerniersAjouts() {
  return (
    <section className="bg-[#0C0C0C] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#F2613F] mb-4">
        Derniers ajouts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {derniersAjouts.map((item) => (
          <div
            key={item.id}
            className="bg-[#481E14] rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.titre}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="text-[#9B3922] font-semibold text-center">
                {item.titre}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

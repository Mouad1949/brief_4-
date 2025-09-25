import React from "react";
import tapis from "../../assets/tapis.jpeg";
import pottery from "../../assets/pottery.jpeg";
import platre from "../../assets/platre.jpg";
import bois from "../../assets/bois.jpeg";
import calligraphie from "../../assets/calligraphie.jpg";

const derniersAjouts = [
  { id: 1, titre: "Tapis berbère", image: tapis },
  { id: 2, titre: "Pottery de Fès", image: pottery },
  { id: 3, titre: "Plâtre sculpté", image: platre },
  { id: 4, titre: "Bois sculpté", image:bois  },
  { id: 5, titre: "Calligraphie arabe", image: calligraphie },
];

export default function DerniersAjouts() {
  return (
    <div className="">
      <section className="border-2 border-[#F2613F] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#F2613F] mb-4">
        Derniers ajouts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {derniersAjouts.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.titre}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="text-[#9B3922] font-semibold m-4">
                {item.titre}
              </h3>
              
            </div>
            <div className='m-4'>
              <button className="inline-block cursor-pointer rounded bg-[#9B3922] px-6 py-3 font-medium text-white shadow hover:bg-transparent hover:text-[#9B3922] border border-[#9B3922] transition">Ajouter des favoris</button>
            </div>
          </div>
          
        ))}
        
      </div>
    </section>
    </div>
  );
}

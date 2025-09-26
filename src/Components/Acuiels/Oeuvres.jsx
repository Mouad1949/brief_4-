
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
    {
      id: 5,
      titre: "Poterie artisanale",
      image: "/src/assets/pottery.jpeg",
      region: "Safi, Maroc",
    }
  ];

  return (
    <div className="">
    <section className="border-2 border-[#F2613F] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#F2613F] mb-4">
        Dernières Œuvres
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {oeuvres.map((item) => (
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
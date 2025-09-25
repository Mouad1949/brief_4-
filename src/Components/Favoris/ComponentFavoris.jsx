import React from 'react'
import even1 from '../../assets/even1.jpg'
import even2 from '../../assets/evn2.jpg'
import even3 from '../../assets/even3.jpg'
import even4 from '../../assets/even4.jpg'

const favoris = [
  { id: 1, titre: "evenements Fès", image: even1 },
  { id: 2, titre: "evenements Rabat", image: even2 },
  { id: 3, titre: "evenements Casablanca", image: even3 },
  { id: 4, titre: "evenements Marrakech", image:even4 },
];
function ComponentFavoris() {
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-[#9B3922] mb-6">
        Dernières Œuvres
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favoris.map((oeuvre) => (
          <div
            key={oeuvre.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
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
            <div className='m-4'>
              <button className="inline-block rounded bg-[#9B3922] px-6 py-3 font-medium text-white shadow hover:bg-transparent hover:text-[#9B3922] border border-[#9B3922] transition">Retirer des favoris</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ComponentFavoris
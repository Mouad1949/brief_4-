import React from 'react'
import even1 from '../assets/even1.jpg'
import even2 from '../assets/evn2.jpg'
import even3 from '../assets/even3.jpg'
import even4 from '../assets/even4.jpg'

const evenements = [
  { id: 1, titre: "evenements Fès", image: even1 },
  { id: 2, titre: "evenements Rabat", image: even2 },
  { id: 3, titre: "evenements Casablanca", image: even3 },
  { id: 4, titre: "evenements Marrakech", image:even4 },
  { id: 5, titre: "evenements Marrakech", image:even4 }
];
function Evenements() {
  return (
    <div>
      <section className="border-2 border-[#F2613F] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#F2613F] mb-4">
        Les Événements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {evenements.map((item) => (
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
  )
}

export default Evenements
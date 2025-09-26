import React from 'react'
import artisan1 from '../../assets/artisan1.jpg';
import artisan2 from '../../assets/artisan2.jpg';
import artisan3 from '../../assets/artisan3.jpg';
import artisan4 from '../../assets/artisan4.jpg';
// import artisan5 from '../../assets/artisan5.jpg';  

const favoris = [
  { id: 1, titre: "evenements Fès", image: artisan1 },
  { id: 2, titre: "evenements Rabat", image: artisan2 },
  { id: 3, titre: "evenements Casablanca", image: artisan3 },
  { id: 4, titre: "evenements Marrakech", image:artisan4 },
  // { id: 5, titre: "evenements Marrakech", image:artisan5 }
];
function ComponentFavoris() {
  return (
    <div>
      <section className="">
      <h2 className="text-2xl font-bold text-[#F2613F] mb-4">
        Vos favoris
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favoris.map((item) => (
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
              <button className="inline-block cursor-pointer  rounded bg-[#9B3922] px-6 py-3 font-medium text-white shadow hover:bg-transparent hover:text-[#9B3922] border border-[#9B3922] transition">Retirer des favoris</button>
            </div>
          </div>
          
        ))}
        
      </div>
    </section>
    </div>
  )
}

export default ComponentFavoris
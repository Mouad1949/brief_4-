import React, { useContext } from 'react'
import { FavorisContext } from '../../Context/FavorisProvider'




function ComponentFavoris() {

  const {favoris ,setFavoris} = useContext(FavorisContext);
  const handleRemove = (id) => {
    const updated = favoris.filter((item) => item.id !== id);
    setFavoris(updated);
  };
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
              <button onClick={()=>handleRemove(item.id)} className="inline-block cursor-pointer  rounded bg-[#9B3922] px-6 py-3 font-medium text-white shadow hover:bg-transparent hover:text-[#9B3922] border border-[#9B3922] transition">Retirer des favoris</button>
            </div>
          </div>
          
        ))}
        
      </div>
    </section>
    </div>
  )
}

export default ComponentFavoris
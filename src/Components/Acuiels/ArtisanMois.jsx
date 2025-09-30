import React, { useContext } from "react";
import { ArtisanContext } from "../../Context/ArtisanProvider";

function ArtisanMois() {
  const {artisans} = useContext(ArtisanContext);
  return (
    <div>
      <section className="border-2 border-[#F2613F] p-4 rounded-lg ">
        <h2 className="text-2xl font-bold text-[#F2613F] mb-4">
          Les Artisan du mois
        </h2>

        {artisans.length === 0 ? (
          <p>Aucune artisan trouvée...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {artisans.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.titre}
                  className="w-full h-32 object-cover"
                />
                <div className="">
                  <h3 className="text-[#9B3922] font-semibold m-2">
                    {item.nom}
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-[#9B3922] font-semibold m-2">
                    {item.specialite}
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-[#9B3922] font-semibold m-2">
                    {item.ville}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default ArtisanMois;

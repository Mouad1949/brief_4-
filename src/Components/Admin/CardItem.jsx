import { useContext } from "react";
import React from 'react'
import { ArtisanContext } from "../../Context/ArtisanProvider";
import { OeuvresContext } from "../../Context/OeuvresProvider";
import { CategorieContext } from "../../Context/CategorieProvider";
import { EvenementContext } from "../../Context/EvenementProvider";



function CardItem({ onModifierClick }) {
  const { oeuvres } = useContext(OeuvresContext)
  const {artisans} = useContext(ArtisanContext)
  const { evenements } = useContext(EvenementContext);

  const allArt = [...oeuvres,...artisans,...evenements];
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allArt.map((item,index) => (
            <div
              key={item.id || index}
              className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.nom}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h3 className="text-[#9B3922] font-semibold m-4">
                  {item.nom}
                </h3>
              </div>
              <div className="m-4">
                <button
                  onClick={onModifierClick}
                  className="text-[#9B3922] cursor-pointer border-2 border-[#9B3922] rounded px-3 py-1 font-bold mx-4 hover:bg-[#9B3922] hover:text-white"
                >
                  Modifier
                </button>
                <button className="bg-red-600 cursor-pointer text-white rounded px-3 py-1 font-bold mx-4">
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CardItem
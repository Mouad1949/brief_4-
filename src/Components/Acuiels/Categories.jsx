import React, { useContext } from "react";
import { CategorieContext } from "../../Context/CategorieProvider";
export default function Categories() {
  const {categories} = useContext(CategorieContext)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-[#9B3922] mb-6">
        Catégories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#481E14] rounded-2xl p-6 text-center shadow-lg 
                       hover:bg-[#9B3922] cursor-pointer transition text-white"
          >
            <p className="text-lg font-medium">{cat.nom}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
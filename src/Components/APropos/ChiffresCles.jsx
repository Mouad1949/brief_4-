import React from "react";

export default function ChiffresCles() {
  const chiffres = [
    { valeur: "2025", description: "Année de lancement" },
    { valeur: "+200", description: "Traditions référencées" },
    { valeur: "100+", description: "Artisans connectés" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
      {chiffres.map((item, index) => (
        <div
          key={index}
          className="bg-[#481E14] p-6 rounded-xl text-center shadow-lg"
        >
          <h3 className="text-4xl font-bold text-[#F2613F]">{item.valeur}</h3>
          <p className="mt-2 text-[#9B3922]">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

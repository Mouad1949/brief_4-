import React, { useState } from "react";

export default function BlocRecherche() {
  const [motCle, setMotCle] = useState("");
  const [region, setRegion] = useState("");

  const handleRecherche = () => {
    alert(`Recherche pour : ${motCle} - Région : ${region}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mb-16 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-6 text-[#F2613F]">
        Rechercher une œuvre
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Input mot-clé */}
        <input
          type="text"
          placeholder="Mot-clé"
          value={motCle}
          onChange={(e) => setMotCle(e.target.value)}
          className="flex-1 px-4 py-2 rounded border border-[#481E14] focus:outline-none focus:ring-2 focus:ring-[#F2613F]"
        />

        {/* Sélecteur région */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="flex-1 px-4 py-2 rounded border border-[#481E14] focus:outline-none focus:ring-2 focus:ring-[#F2613F]"
        >
          <option value="">Toutes les régions</option>
          <option value="tanger-tetouan-al-hoceima">Tanger-Tétouan-Al Hoceïma</option>
          <option value="fes-meknes">Fès-Meknès</option>
          <option value="rabat-sale-kenitra">Rabat-Salé-Kénitra</option>
          <option value="beni-mellal-khenifra">Béni Mellal-Khénifra</option>
          <option value="casablanca-settat">Casablanca-Settat</option>
          <option value="marrakech-safi">Marrakech-Safi</option>
          <option value="draa-tafilalet">Drâa-Tafilalet</option>
          <option value="souss-massa">Souss-Massa</option>
          <option value="guelmim-oued-noun">Guelmim-Oued Noun</option>
          <option value="laayoune-sakia-el-hamra">Laâyoune-Sakia El Hamra</option>
          <option value="dakhla-oued-ed-dahab">Dakhla-Oued Ed-Dahab</option>
        </select>

        {/* Bouton */}
        <button
          onClick={handleRecherche}
          className="px-6 py-2 cursor-pointer rounded text-white font-medium transition duration-200"
          style={{ backgroundColor: "#9B3922" }}
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}
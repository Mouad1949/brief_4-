import React from "react";
import ComponentButton from "../Components/Admin/ComponentButton";
export default function Admin() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#F2613F] mb-4">Tableau de bord Admin</h1>
      <p>Gestion des œuvres — créez, modifiez et organisez les contenus</p>
      <div className="p-4">
          <ComponentButton />
      </div>
    </div>
  );
}
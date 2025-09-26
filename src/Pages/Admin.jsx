import React from "react";
import AddForm from "../Components/Admin/AddForm";
import SearchForm from "../Components/Admin/SearchForm";
import CardItem from "../Components/Admin/CardItem";
import ComponentModification from "../Components/Admin/ComponentModification";
export default function Admin() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#F2613F] mb-4">Tableau de bord Admin</h1>
      <p>Gestion des œuvres — créez, modifiez et organisez les contenus</p>
      <div className="p-4">
          <AddForm />
      </div>
      <div className="p-4">
          <ComponentModification />
      </div>
      {/* <div className="p-4">
          <CardItem />
      </div> */}
    </div>
  );
}
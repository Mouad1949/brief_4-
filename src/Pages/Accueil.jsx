import React from "react";
import ComponentBanner from "../Components/ComponentBanner";
import Evenements from "../Components/Evenements";
import ArtisanMois from "../Components/ArtisanMois";
// import BlocRecherche from "../Components/BlocRecherche";
// import DerniersAjouts from "../Components/DerniersAjouts";
export default function Accueil() {
  return (
    <div>
      <ComponentBanner />
      {/* <BlocRecherche />
      <DerniersAjouts /> */}
      
      <div className="p-4">
        <Evenements />
      </div>
      <div className="p-4">
        <ArtisanMois />
      </div>
    </div>
  );
}

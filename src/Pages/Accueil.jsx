
import React from "react";
import ComponentBanner from "../Components/ComponentBanner";
import BlocRecherche from "../Components/BlocRecherche";
import DerniersAjouts from "../Components/DerniersAjouts";
import Categories from "../Components/Categories";
import Oeuvres from "../Components/Oeuvres";
import Evenements from "../Components/Evenements";
import ArtisanMois from "../Components/ArtisanMois";

export default function Accueil() {
  return (
    <div>
      <ComponentBanner />
      <div className="p-4">
        <BlocRecherche />
      </div>
      <div className="p-4">
        <DerniersAjouts />
      </div>
      <div className="p-4">
        <Categories />
      </div>
      <div className="p-4">
        <Oeuvres />
      </div>
      <div className="p-4">
        <Evenements />
      </div>
      <div className="p-4">
        <ArtisanMois />
      </div>

    </div>
  );
}


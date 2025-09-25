
import React from "react";
import ComponentBanner from "../Components/Acuiels/ComponentBanner";
import BlocRecherche from "../Components/Acuiels/BlocRecherche";
import DerniersAjouts from "../Components/Acuiels/DerniersAjouts";
import Categories from "../Components/Acuiels/Categories";
import Oeuvres from "../Components/Acuiels/Oeuvres";
import Evenements from "../Components/Acuiels/Evenements";
import ArtisanMois from "../Components/Acuiels/ArtisanMois";

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


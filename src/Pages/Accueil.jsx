
import React from "react";
import ComponentBanner from "../Components/ComponentBanner";
import BlocRecherche from "../Components/BlocRecherche";
import DerniersAjouts from "../Components/DerniersAjouts";
import Categories from "../Components/Categories";
import Oeuvres from "../Components/Oeuvres";
export default function Accueil() {
  return (
    <div>
      <ComponentBanner />
      <BlocRecherche />
      <DerniersAjouts />
      <Categories />
      <Oeuvres />
    </div>
  );
}


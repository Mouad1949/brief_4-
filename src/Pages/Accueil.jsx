
import React from "react";
import ComponentBanner from "../Components/ComponentBanner";
import BlocRecherche from "../Components/BlocRecherche";
import DerniersAjouts from "../Components/DerniersAjouts";
export default function Accueil() {
  return (
    <div>
      <ComponentBanner />
      <BlocRecherche />
      <DerniersAjouts />
    </div>
  );
}


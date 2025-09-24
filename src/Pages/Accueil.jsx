
import React from "react";
import ComponentBanner from "../Components/ComponentBanner";
import ComponentBanner from "../Components/BlocRecherche";
import ComponentBanner from "../Components/DerniersAjouts";
export default function Accueil() {
  return (
    <div>
      <ComponentBanner />
      <BlocRecherche />
      <DerniersAjouts />
    </div>
  );
}


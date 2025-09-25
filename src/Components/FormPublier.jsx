import React, { useState } from "react";
import InputText from "./InputText";
import Select from "./Select";
import Button from "./Button";
import FileUpload from "./FileUpload";

export default function FormPublier() {
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");
  const [region, setRegion] = useState("");
  const [fichier, setFichier] = useState(null);
  const [message, setMessage] = useState("");

  const categories = ["Peinture", "Sculpture", "Tapis", "Plâtre", "Calligraphie"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre || !categorie || !region || !fichier) {
      setMessage("Tous les champs sont obligatoires !");
      return;
    }
    console.log({ titre, categorie, region, fichier });
    setMessage("Publication réussie !");
    setTitre("");
    setCategorie("");
    setRegion("");
    setFichier(null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
      <h2 className="text-[#F2613F] text-xl font-bold mb-4">Ajouter une œuvre ou un artisanat</h2>

      <InputText
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Titre de l'oeuvre"
      />

      <Select
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
        options={categories}
        placeholder="Sélection de catégorie"
      />

      <InputText
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Région / ville"
      />

      <FileUpload onChange={(e) => setFichier(e.target.files[0])} />

      <Button type="submit">Publier</Button>

      {message && <p className="text-[#F2613F] text-center">{message}</p>}
    </form>
  );
}

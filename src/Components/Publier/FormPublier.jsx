import React, { useState } from "react";
import InputText from "./InputText";
import Select from "./Select";
import FileUpload from "./FileUpload";
import Button from "./Button";

export default function FormPublier() {
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const categories = ["Peinture", "Sculpture", "Tapis", "Plâtre", "Calligraphie"];

  // Fonction pour uploader l'image (Cloudinary)
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "TON_UPLOAD_PRESET"); 
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/TON_CLOUD_NAME/image/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Erreur upload image :", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titre || !categorie || !region || !image) {
      setMessage("Tous les champs sont obligatoires !");
      return;
    }

    const imageUrl = await handleImageUpload(image);
    if (!imageUrl) {
      setMessage("Erreur lors de l'upload de l'image !");
      return;
    }

    console.log({ titre, categorie, region, imageUrl });
    setMessage("Publication réussie !");

    setTitre("");
    setCategorie("");
    setRegion("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputText
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Titre de l'œuvre"
      />

      <Select
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
        options={categories}
        placeholder="Sélectionner une catégorie"
      />

      <InputText
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Région"
      />

      <FileUpload onChange={setImage} />

      <Button type="submit">Publier</Button>

      {message && <p className="text-center text-[#F2613F]">{message}</p>}
    </form>
  );
}

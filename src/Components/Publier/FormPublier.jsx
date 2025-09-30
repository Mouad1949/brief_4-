import React, { useContext, useState } from "react";
import InputText from "./InputText";
import FileUpload from "./FileUpload";
import Button from "./Button";
import axios from "axios";
import { OeuvresContext } from "../../Context/OeuvresProvider";
import { CategorieContext } from "../../Context/CategorieProvider";
import { useRef } from "react";

export default function FormPublier() {
  const [nom, setNom] = useState("");
  const [category, setCategorie] = useState("");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const {addOeuvre} = useContext(OeuvresContext);

  const {categories} = useContext(CategorieContext);
  
  const fileInputRef = useRef(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !category || !region || !image) {
      setMessage("Tous les champs sont obligatoires !");
      return;
    }

    let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "brief_React"); 

        try{
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dh8xcvzyi/image/upload",
            formData
          );
          imageUrl = res.data.secure_url;
        } catch (err) {
          console.error("Erreur upload:", err);
          alert("Erreur lors de l’upload de l’image");
          return;
        }
      }

    addOeuvre({ nom, category, region, image: imageUrl });
    setMessage("Publication réussie !");

    setNom("");
    setCategorie("");
    setRegion("");
    fileInputRef.current.value = "";
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputText
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom de l'œuvre"
      />

      <select value={category} className="p-2 rounded border border-[#481E14] text-black"
        onChange={(e) => setCategorie(e.target.value)}
      >
        <option value="">Sélectionner une catégorie</option>
        {categories.map(item => (
          <option key={item.id} value={item.nom}>
            {item.nom}
          </option>
        ))}
      </select>


      <InputText
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Région"
      />

      <FileUpload onChange={setImage} ref={fileInputRef} />

      <button
      type='submit'
      className="bg-[#9B3922] hover:bg-[#F2613F] transition-colors p-2 rounded font-bold text-white">
      puplier
      </button>

      {message && <p className="text-center text-[#F2613F]">{message}</p>}
    </form>
  );
}

import React, { useContext, useState, useRef } from "react";
import { OeuvresContext } from "../../Context/OeuvresProvider";
import axios from "axios";

export default function AddForm({ onCancel }) {
  const [nom, setNom] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [ville , setVille] = useState("")
  const [lieu , setLieu] = useState("")
  const [date , setDate] = useState("")
  const [specialite , setSpecialite] = useState("")

  const buttons = ["Oeuvre", "Catégories", "Artisans", "Evenement"];
  const [active, setActive] = useState("Oeuvre");
  const fileInputRef = useRef(null);
  const { addOeuvre } = useContext(OeuvresContext);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !description) {
      alert("Le titre et la description sont obligatoires !");
      return;
    }
    let imageUrl = "";
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "brief_React");

      try {
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

    addOeuvre({ nom, category, region, description, image: imageUrl });
    setNom("");
    setCategory("");
    setRegion("");
    setDescription("");
    fileInputRef.current.value = "";
    setImage(null);
  };

  return (
    <div>
      <div className="flex justify-baseline mb-6">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`inline-block mx-4 cursor-pointer rounded px-6 py-3 font-medium shadow border transition
          ${
            active === btn
              ? "bg-[#9B3922] text-white border-[#9B3922]"
              : "text-[#9B3922] border-[#9B3922] hover:bg-[#9B3922] hover:text-white"
          }`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="border-2 border-[#F2613F] p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-bold text-[#F2613F] mb-4">
          Ajouter {active}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Common field: Nom */}
          <input
            type="text"
            placeholder={
              active === "Evenement" ? "Nom de l'événement..." : "Nom..."
            }
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="p-2 rounded-lg border-2 border-[#F2613F]"
          />

          {/* Dynamic fields */}
          {active === "Oeuvre" && (
            <>
              <input
                type="text"
                placeholder="Catégorie..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 rounded-lg border-2 border-[#F2613F]"
              />
              <input
                type="text"
                placeholder="Région..."
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="p-2 rounded-lg border-2 border-[#F2613F]"
              />
            </>
          )}

          {active === "Evenement" && (
            <>
              <input
                type="text"
                placeholder="Lieu..."
                value={lieu}
                onChange={(e) => setLieu(e.target.value)}
                className="p-2 rounded-lg border-2 border-[#F2613F]"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 rounded-lg border-2 border-[#F2613F]"
              />
            </>
          )}

          {active === "Artisans" && (
            <>
              <input
                type="text"
                placeholder="Spécialité..."
                value={specialite}
                onChange={(e) => setSpecialite(e.target.value)}
                className="p-2 rounded-lg border-2 border-[#F2613F]"
              />
              <input
                type="text"
                placeholder="Ville..."
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="p-2 rounded-lg border-2 border-[#F2613F]"
              />
            </>
          )}

          {active != 'Catégories' &&(
            <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="p-2 rounded-lg border-2 border-[#F2613F] col-span-2"
          />
          )}

          <div className="flex gap-4 col-span-2">
            <button
              type="submit"
              className="bg-[#F2613F] px-4 py-2 rounded-lg font-bold hover:bg-[#9B3922]"
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-800"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

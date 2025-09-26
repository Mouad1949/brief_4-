import React, { useState } from "react";

export default function AddForm({ onCancel, onSave }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Le titre et la description sont obligatoires !");
      return;
    }
    onSave({ title, category, region, description, image });
    setTitle("");
    setCategory("");
    setRegion("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-xl font-bold text-[#F2613F] mb-4">Ajouter une œuvre</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Titre..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white"
        />
        <input
          type="text"
          placeholder="Catégorie..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white"
        />
        <input
          type="text"
          placeholder="Région..."
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white"
        />
        <textarea
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white col-span-2"
        ></textarea>

        <input
          type="text"
          placeholder="URL de l'image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white col-span-2"
        />

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
  );
}

import React from "react";

export default function SearchForm({ onClose }) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-xl font-bold text-[#F2613F] mb-4">Modification</h2>
      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Titre..."
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white"
        />
        <input
          type="text"
          placeholder="Catégorie..."
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white"
        />
        <input
          type="text"
          placeholder="Région..."
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white"
        />
        <input
          type="text"
          placeholder="Description..."
          className="p-2 rounded-lg bg-[#0C0C0C] border border-[#9B3922] text-white col-span-2"
        />
        <button
          type="submit"
          className="bg-[#F2613F] col-span-2 py-2 rounded-lg font-bold hover:bg-[#9B3922]"
        >
          Modifier
        </button>
          <button onClick={onClose} className="text-[#9B3922] border border-[#9B3922] col-span-2 py-2 rounded-lg font-bold hover:text-white" >
        Cancel
      </button>
      </form>      
    
    </div>
  );
}


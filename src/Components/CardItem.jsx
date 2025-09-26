import React from "react";

export default function CardItem({ title, description, image, onEdit, onDelete }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#F2613F]">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="bg-[#9B3922] px-3 py-1 rounded-lg hover:bg-[#F2613F]"
          >
            Modifier
          </button>
          <button
            onClick={onDelete}
            className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-800"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

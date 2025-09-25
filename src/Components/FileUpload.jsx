import React from "react";

export default function FileUpload({ onChange }) {
  return (
    <label className="flex items-center justify-center gap-2 bg-[#F2613F] text-white rounded-full p-2 cursor-pointer w-max">
      <span>Téléverser votre document</span>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
}

import React from "react";

export default function FileUpload({ onChange }) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onChange(e.target.files[0])}
      className="p-2 rounded border border-[#481E14] text-black"
    />
  );
}

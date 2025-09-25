import React from "react";

export default function InputText({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 rounded border border-[#481E14] text-black"
    />
  );
}

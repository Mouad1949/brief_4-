import React from "react";

export default function InputText({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F2613F]"
    />
  );
}

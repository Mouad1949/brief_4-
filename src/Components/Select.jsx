import React from "react";

export default function Select({ value, onChange, options, placeholder }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F2613F]"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

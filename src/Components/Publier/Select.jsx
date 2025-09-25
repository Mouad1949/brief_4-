import React from "react";

export default function Select({ value, onChange, options, placeholder }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-2 rounded border border-[#481E14] text-black"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

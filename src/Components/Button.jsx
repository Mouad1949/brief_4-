import React from "react";

export default function Button({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#F2613F] text-white rounded-full p-2 font-bold hover:bg-[#9B3922] transition-colors"
    >
      {children}
    </button>
  );
}

import React from "react";

export default function Button({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#9B3922] hover:bg-[#F2613F] transition-colors p-2 rounded font-bold text-white"
    >
      {children}
    </button>
  );
}

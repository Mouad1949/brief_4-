import React from "react";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import FormPublier from "../Components/Publier/FormPublier";

export default function Publier() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#0C0C0C] text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#F2613F]">Publier une œuvre</h2>
      <FormPublier />
    </div>
  );
}



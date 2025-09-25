import React from "react";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import FormPublier from "../Components/FormPublier";

export default function Publier() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <main className="flex-grow flex justify-center items-center p-6">
        <FormPublier />
      </main>
     
    </div>
  );
}


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Accueil from "./Pages/Accueil";
import Publier from "./pages/Publier";
import Favoris from "./pages/Favoris";
import APropos from "./pages/APropos";
import AdminDashboard from "./Pages/Admin";
import Footer from "./Components/layout/Footer";
import { OeuvresProvider } from "./Context/OeuvresProvider";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <OeuvresProvider>
          <BrowserRouter>
            <Navbar />
            <main className="container mx-auto px-4 py-6 flex-grow">
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/publier" element={<Publier />} />
                <Route path="/favoris" element={<Favoris />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </OeuvresProvider>
      
    </div>
  );
}

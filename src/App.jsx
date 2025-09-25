import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Accueil from "./Pages/Accueil";
import Publier from "./pages/Publier";
import Favoris from "./pages/Favoris";
import APropos from "./pages/APropos";
import AdminDashboard from "./Pages/Admin";
import Footer from "./Components/layout/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/publier" element={<Publier />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

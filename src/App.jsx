import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Accueil from "./pages/Accueil";
import Publier from "./pages/Publier";
import Favoris from "./pages/Favoris";
import APropos from "./pages/APropos";
import AdminDashboard from "./Pages/Admin";
<<<<<<< HEAD
import Footer from "./Components/layout/Footer";
=======
import Footer from './Components/layout/Footer';
>>>>>>> b47db11dc7e3cf4417979a078b9fb5c17d65ce4c

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







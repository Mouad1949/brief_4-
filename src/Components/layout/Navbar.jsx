import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, PlusCircle, Heart, Info, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const liens = [
    { chemin: "/", texte: "Accueil", icone: <Home size={16} /> },
    { chemin: "/publier", texte: "Publier", icone: <PlusCircle size={16} /> },
    { chemin: "/favoris", texte: "Favoris", icone: <Heart size={16} /> },
    { chemin: "/a-propos", texte: "À propos", icone: <Info size={16} /> },
    { chemin: "/admin", texte: "Admin", icone: <User size={16} /> },
  ];

  return (
    <header className="bg-[#0C0C0C] text-[#9B3922] p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png" 
            alt="Logo ArtConnect"
            className="w-17 h-17"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-4 items-center">
          {liens.map((lien) => (
            <Link
              key={lien.chemin}
              to={lien.chemin}
              className={`flex items-center gap-1 ${
                location.pathname === lien.chemin
                  ? "text-[#F2613F] font-bold"
                  : "hover:text-[#F2613F]"
              }`}
            >
              {lien.icone} <span>{lien.texte}</span>
            </Link>
          ))}
        </nav>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col mt-2 gap-2">
          {liens.map((lien) => (
            <Link
              key={lien.chemin}
              to={lien.chemin}
              className={`flex items-center gap-1 ${
                location.pathname === lien.chemin
                  ? "text-[#F2613F] font-bold"
                  : "hover:text-[#F2613F]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {lien.icone} <span>{lien.texte}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}



// src/components/Timeline.jsx
import React from "react";

export default function Timeline() {
  const events = [
    { num: 1, title: "Lancement de la plateforme ArtConnect Maroc", date: "Janvier 2025" },
    { num: 2, title: "Référencement de plus de 200 traditions", date: "Mars 2025" },
    { num: 3, title: "Connexion de plus de 100 artisans", date: "Juin 2025" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold text-[#F2613F]">Timeline</h2>
      <div className="mt-8 space-y-8">
        {events.map((event, index) => (
          <div key={index} className="flex items-center">
            <div className="w-16 h-16 bg-[#F2613F] rounded-full flex items-center justify-center text-white font-bold">
              {event.num}
            </div>
            <div className="ml-6 text-[#9B3922]">
              <p className="text-lg">{event.title}</p>
              <p className="text-sm">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

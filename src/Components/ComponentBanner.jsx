import React from 'react'

function ComponentBanner() {
  return (
    <div>
    <section className="bg-white">
      <div className="max-w-screen px-4 py-16 sm:px-6 lg:px-8 lg:py-24 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            ArtConnect Maroc
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            ArtConnect Maroc est une plateforme dédiée à la valorisation du patrimoine 
            culturel marocain. Elle connecte les passionnés d’art, les artisans et les 
            amateurs de traditions.
          </p>
          <div>
            <a
              href="#"
              className="inline-block rounded bg-[#9B3922] px-6 py-3 font-medium text-white shadow hover:bg-transparent hover:text-[#9B3922] border border-[#9B3922] transition"
            >
              Publier une œuvre
            </a>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="./images/banner.jpeg"
            alt="banner"
            className="w-[500px] h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
</section>


    </div>
  )
}

export default ComponentBanner
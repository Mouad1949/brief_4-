import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-[#0C0C0C]">
        <div className="max-w-screen mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Use grid with 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            
            {/* Left Section */}
            <div>
              <h3 className="text-[#F2613F] font-bold text-2xl">ArtConnect Maroc</h3>
              <p className="mt-4 text-[#FFFFFF] text-sm">
                ArtConnect Maroc est une plateforme dédiée à la valorisation
                du patrimoine culturel marocain.
              </p>

              <ul className="mt-8 flex gap-6">
                {/* Facebook */}
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#F2613F] transition hover:opacity-75"
                  >
                    <span className="sr-only ">Facebook</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {/* Instagram */}
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#F2613F]  transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06..."
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {/* Dribbble */}
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#F2613F]  transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48..."
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {/* WhatsApp */}
                <li>
                  <a
                    href="https://wa.me/212612345678"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#F2613F]  transition hover:opacity-75"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.01 2.004c-5.523 0-10 4.477-10..." />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Center Section */}
            <div className="flex justify-center">
              <a
                href="mailto:contact@artconnect.ma"
                className="text-[#FFFFFF] transition hover:opacity-75"
              >
                contact@artconnect.ma
              </a>
            </div>

            {/* Right Section */}
            <div className="flex justify-center md:justify-end">
              <ul className="space-y-2 text-center md:text-right">
                <li><a href="#" className="text-[#F2613F] hover:opacity-75">Accueil</a></li>
                <li><a href="#" className="text-[#F2613F] hover:opacity-75">Publier</a></li>
                <li><a href="#" className="text-[#F2613F] hover:opacity-75">Favoris</a></li>
                <li><a href="#" className="text-[#F2613F] hover:opacity-75">À propos</a></li>
                <li><a href="#" className="text-[#F2613F] hover:opacity-75">Admin</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pb-4">
          <p className="text-xs text-[#FFFFFF] text-center">
            © 2025 ArtConnect Maroc. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer

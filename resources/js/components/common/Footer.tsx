import React from 'react';
import { Link, usePage } from '@inertiajs/react'; // Utilisez le routeur de votre choix
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

// Définition des props pour le composant
const Footer = () => {
  const { props } = usePage();
  const user = props.auth.user;

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique pour soumettre l'email à votre API ici
    alert('Merci pour votre inscription ! (Fonctionnalité à implémenter)');
  };

  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* SECTION NEWSLETTER */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold">
                Restez informé
              </h3>
              <p className="mt-2 text-indigo-100">
                Inscrivez-vous à notre newsletter pour recevoir les dernières offres et nouvelles.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="w-full md:w-1/2 flex flex-col sm:flex-row mt-4 md:mt-0">
              <input
                type="email"
                name="news-letter"
                placeholder="Entrez votre adresse email"
                className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SECTION PRINCIPALE DU FOOTER */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1: Logo et Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-bold text-indigo-600">
              Makira
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Votre plateforme de confiance pour la gestion de carrière et les opportunités professionnelles.
            </p>
          </div>

          {/* Colonne 2: Liens "Pour moi" */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Pour moi</h4>
            <ul className="space-y-2">
              {user ? (
                <li>
                  <Link href="/profile" className="hover:text-indigo-600 transition-colors">
                    Mon Profil
                  </Link>
                </li>
              ) : (
                 <li>
                  <Link href="/login" className="hover:text-indigo-600 transition-colors">
                    Se Connecter
                  </Link>
                </li>
              )}
              <li>
                <Link href="/contact" className="hover:text-indigo-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Liens "Liens Rapides" */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 transition-colors">
                  À propos de nous
                </Link>
              </li>
              {/* Lien conditionnel pour l'administrateur */}
              {user && user.role === 'admin' && (
                <li>
                  <Link href="/candidates" className="hover:text-indigo-600 transition-colors">
                    Candidats
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Colonne 4: Réseaux Sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Suivez-nous</h4>
            <p className="text-sm text-gray-600 mb-4">
              Rejoignez-nous sur les réseaux sociaux pour ne rien manquer.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors text-xl">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors text-xl">
                <Twitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors text-xl">
                <Instagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors text-xl">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION COPYRIGHT */}
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Makira. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              Fait avec ❤️ par votre équipe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
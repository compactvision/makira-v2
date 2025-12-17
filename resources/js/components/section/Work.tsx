import React from 'react';
import { Check, User, Search, Briefcase, FileText, ArrowRight } from 'lucide-react';

const Work = () => {
  const steps = [
    {
      id: 1,
      icon: <User size={40} />,
      title: "Créez<br>Votre Compte",
      description: "Créez un compte pour trouver le meilleur emploi correspondant à vos attentes.",
      color: "blue"
    },
    {
      id: 2,
      icon: <Search size={40} />,
      title: "Recherchez<br>Votre Emploi",
      description: "Parcourez nos offres pour trouver le poste qui vous correspond.",
      color: "yellow"
    },
    {
      id: 3,
      icon: <Briefcase size={40} />,
      title: "Postulez<br>à Votre Rêve",
      description: "Envoyez votre candidature pour le poste de vos rêves.",
      color: "pink"
    },
    {
      id: 4,
      icon: <FileText size={40} />,
      title: "Téléchargez<br>Votre CV",
      description: "Complétez votre profil en ajoutant votre curriculum vitae.",
      color: "green"
    }
  ];

  const features = [
    "Travail de confiance et de qualité",
    "Emplois internationaux / nationaux",
    "Pas de frais supplémentaires",
    "Entreprises leaders"
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          shadow: 'shadow-blue-200'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-600',
          shadow: 'shadow-yellow-200'
        };
      case 'pink':
        return {
          bg: 'bg-pink-100',
          text: 'text-pink-600',
          shadow: 'shadow-pink-200'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          shadow: 'shadow-green-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          shadow: 'shadow-gray-200'
        };
    }
  };

  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne de gauche */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                  Comment ça marche
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Suivez nos étapes, nous vous guiderons.
                </h2>
              </div>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 mt-1 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step) => {
                const colors = getColorClasses(step.color);
                return (
                  <div key={step.id} className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className={`p-8 h-full ${colors.bg} ${colors.shadow} shadow-md`}>
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-5xl font-bold ${colors.text} opacity-20`}>
                            {String(step.id).padStart(2, '0')}
                          </span>
                          <div className={`p-3 rounded-lg ${colors.text} ${colors.bg}`}>
                            {step.icon}
                          </div>
                        </div>
                        
                        <h3 
                          className={`text-xl font-bold mb-3 ${colors.text}`}
                          dangerouslySetInnerHTML={{ __html: step.title }}
                        />
                        
                        <p className="text-gray-700 mb-4 flex-grow">
                          {step.description}
                        </p>
                        
                        <div className="flex items-center font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          <span>En savoir plus</span>
                          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
import AppShell from '@/layouts/app-shell';
import { Award, CheckCircle, Users } from 'lucide-react';

export default function About() {
    return (
        <AppShell>
            <div className="min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 px-4 py-8">
                    <div className="container mx-auto">
                        <div className="flex items-center space-x-2 text-sm">
                            <a
                                href="/"
                                className="text-blue-600 transition-colors hover:text-blue-800"
                            >
                                Accueil
                            </a>
                            <span className="text-gray-400">/</span>
                            <span className="font-medium text-gray-700">
                                À propos de nous
                            </span>
                        </div>
                        <h1 className="mt-2 text-3xl font-bold text-gray-800">
                            À propos de nous
                        </h1>
                    </div>
                </div>

                {/* Section Contenu */}
                <div className="bg-white px-4 py-20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/* Colonne de gauche - Notre Mission */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-4 text-2xl font-bold text-gray-800">
                                        Notre Mission
                                    </h3>
                                    <p className="leading-relaxed text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                                            <CheckCircle
                                                className="text-blue-600"
                                                size={18}
                                            />
                                        </div>
                                        <span className="text-gray-700">
                                            Expertise reconnue
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                                            <CheckCircle
                                                className="text-blue-600"
                                                size={18}
                                            />
                                        </div>
                                        <span className="text-gray-700">
                                            Service personnalisé
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                                            <CheckCircle
                                                className="text-blue-600"
                                                size={18}
                                            />
                                        </div>
                                        <span className="text-gray-700">
                                            Innovation continue
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Colonne de droite - Nos Valeurs */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-4 text-2xl font-bold text-gray-800">
                                        Nos Valeurs
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex space-x-4">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                                                <Award
                                                    className="text-blue-600"
                                                    size={24}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 text-lg font-semibold text-gray-800">
                                                    Qualité
                                                </h4>
                                                <p className="text-gray-600">
                                                    Nous nous engageons à
                                                    fournir des services de la
                                                    plus haute qualité.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                                                <Users
                                                    className="text-blue-600"
                                                    size={24}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 text-lg font-semibold text-gray-800">
                                                    Collaboration
                                                </h4>
                                                <p className="text-gray-600">
                                                    Le travail d'équipe est au
                                                    cœur de notre approche.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Statistiques */}
                <div className="bg-gray-50 px-4 py-20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="rounded-lg bg-white p-8 shadow-md">
                                    <h2 className="mb-2 text-4xl font-bold text-gray-800">
                                        1500+
                                    </h2>
                                    <span className="font-medium text-blue-600">
                                        Clients satisfaits
                                    </span>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="rounded-lg bg-white p-8 shadow-md">
                                    <h2 className="mb-2 text-4xl font-bold text-gray-800">
                                        10
                                    </h2>
                                    <span className="font-medium text-blue-600">
                                        Années d'expérience
                                    </span>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="rounded-lg bg-white p-8 shadow-md">
                                    <h2 className="mb-2 text-4xl font-bold text-gray-800">
                                        100%
                                    </h2>
                                    <span className="font-medium text-blue-600">
                                        Satisfaction client
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}

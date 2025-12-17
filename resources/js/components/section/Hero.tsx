import { router, usePage } from '@inertiajs/react';
import { Briefcase, Search, TrendingUp, Users, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Hero = ({ notification }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showNotification, setShowNotification] = useState(!!notification);
    const [isVisible, setIsVisible] = useState(false);
    const { props } = usePage();
    const user = props.auth.user;

    useEffect(() => {
        setShowNotification(!!notification);
    }, [notification]);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user?.role === 'admin') {
            router.visit(`/admin/search?q=${encodeURIComponent(searchTerm)}`, {
                preserveScroll: true,
            });
        } else {
            router.visit('/resume', { preserveScroll: true });
        }
    };

    const handleTagClick = (tag: string) => {
        setSearchTerm(tag);
        if (user?.role === 'admin') {
            router.visit(`/admin/search?q=${encodeURIComponent(tag)}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Grille de fond subtile */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
            </div>

            {/* Cercles animés flottants pour l'ambiance */}
            <div className="animate-float absolute top-20 left-10 h-96 w-96 rounded-full bg-gray-700/10 blur-3xl"></div>
            <div className="animate-float-delayed absolute top-40 right-10 h-96 w-96 rounded-full bg-gray-600/10 blur-3xl"></div>
            <div className="animate-float-slow absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-gray-700/10 blur-3xl"></div>

            <div
                className={`relative z-10 container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                {/* Notification simplifiée */}
                {showNotification && notification && (
                    <div
                        className={`animate-slide-down mx-auto mb-8 flex max-w-2xl transform items-center justify-between rounded-xl p-4 shadow-xl backdrop-blur-md transition-all duration-500 ${
                            notification.type === 'success'
                                ? 'border border-green-500/50 bg-green-500/20'
                                : 'border border-red-500/50 bg-red-500/20'
                        }`}
                    >
                        <span className="font-medium text-white">
                            {notification.message}
                        </span>
                        <button
                            onClick={() => setShowNotification(false)}
                            className="ml-4 text-white transition-colors hover:text-gray-300"
                        >
                            <X size={20} />
                        </button>
                    </div>
                )}

                <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
                    {/* Section Gauche */}
                    <div className="w-full space-y-8 text-center lg:w-1/2 lg:text-left">
                        {/* Titre simplifié */}
                        <div className="space-y-4">
                            <h1 className="animate-fade-in text-4xl font-thin text-white md:text-6xl lg:text-8xl">
                                Makira
                            </h1>
                            <h2 className="animate-fade-in animation-delay-300 text-2xl font-bold text-white md:text-4xl lg:text-6xl">
                                Data Consultants Members
                            </h2>
                            <p className="animate-fade-in animation-delay-500 text-base text-gray-300 md:text-lg lg:text-xl">
                                Trouvez les meilleurs talents pour vos projets
                                data
                            </p>
                        </div>

                        {/* Statistiques simplifiées */}
                        <div className="animate-fade-in animation-delay-700 flex flex-wrap justify-center gap-6 lg:justify-start">
                            <div className="flex items-center gap-3 rounded-2xl border border-gray-700/50 bg-gray-800/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
                                <div className="rounded-xl bg-gray-700 p-3 shadow-lg">
                                    <Briefcase
                                        className="text-white"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">
                                        2,500+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Missions
                                    </div>
                                </div>
                            </div>

                            <div className="animation-delay-200 flex items-center gap-3 rounded-2xl border border-gray-700/50 bg-gray-800/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
                                <div className="rounded-xl bg-gray-700 p-3 shadow-lg">
                                    <Users className="text-white" size={24} />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">
                                        1,200+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Consultants
                                    </div>
                                </div>
                            </div>

                            <div className="animation-delay-400 flex items-center gap-3 rounded-2xl border border-gray-700/50 bg-gray-800/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
                                <div className="rounded-xl bg-gray-700 p-3 shadow-lg">
                                    <TrendingUp
                                        className="text-white"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white">
                                        98%
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Satisfaction
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Barre de recherche ou Bouton d'action */}
                        <div className="group animate-fade-in animation-delay-900 relative">
                            {user?.role === 'admin' ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="relative flex flex-col items-center gap-4 rounded-full border border-gray-700/50 bg-gray-800/50 p-2 shadow-xl backdrop-blur-xl md:flex-row">
                                        <div className="w-full flex-1 px-6 py-2">
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) =>
                                                    setSearchTerm(
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full bg-transparent text-lg text-white placeholder-gray-400 outline-none"
                                                placeholder="Titre du poste, mots-clés, compétences..."
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="flex items-center gap-2 rounded-full bg-gray-700 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-600 active:scale-95"
                                        >
                                            <Search size={20} />
                                            <span>Rechercher</span>
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        onClick={() => router.visit('/profile')}
                                        className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500 active:scale-95"
                                    >
                                        <Users size={20} />
                                        <span>Compléter mon profil</span>
                                    </button>
                                </div>
                            )}
                        </div>

                       
                    </div>

                    {/* Section Droite - Cercle animé */}
                    <div className="animate-fade-in animation-delay-600 relative flex w-full items-center justify-center lg:w-1/2">
                        <div className="relative aspect-square h-full w-full max-w-lg">
                            {/* Anneau extérieur animé */}
                            <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-gray-700/30"></div>

                            {/* Cercle principal */}
                            <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30 shadow-2xl backdrop-blur-sm">
                                <div className="space-y-4 p-8 text-center">
                                    <h3 className="text-3xl font-bold text-white">
                                        Rejoignez notre équipe
                                    </h3>
                                    <p className="mx-auto max-w-xs text-gray-400">
                                        Faites partie d'une communauté de
                                        consultants passionnés par la data.
                                    </p>
                                    {/* Icône centrale */}
                                    <div className="flex justify-center">
                                        <div className="rounded-full border border-gray-600/50 bg-gray-700/50 p-4">
                                            <Users
                                                className="text-white"
                                                size={48}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations CSS personnalisées */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-30px) translateX(20px); }
                    66% { transform: translateY(20px) translateX(-20px); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-float { animation: float 8s ease-in-out infinite; }
                .animate-float-delayed { animation: float 8s ease-in-out 2s infinite; }
                .animate-float-slow { animation: float 12s ease-in-out 1s infinite; }
                .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
                .animate-slide-down { animation: slide-down 0.5s ease-out; }
                .animate-spin-slow { animation: spin-slow 30s linear infinite; }
                
                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                .animation-delay-700 { animation-delay: 700ms; }
                .animation-delay-900 { animation-delay: 900ms; }
                .animation-delay-1000 { animation-delay: 1000ms; }
                .animation-delay-1100 { animation-delay: 1100ms; }
            `}</style>
        </div>
    );
};

export default Hero;

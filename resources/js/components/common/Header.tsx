import { Link, usePage } from '@inertiajs/react';
import {
    Briefcase,
    ChevronDown,
    Home,
    Info,
    LogOut,
    Mail,
    Settings,
    UserCircle,
    UserPlus,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
    const { props } = usePage();
    const user = props.auth.user;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Détecter le scroll pour changer l'apparence du header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu mobile quand on clique ailleurs
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                isUserMenuOpen &&
                !(e.target as Element).closest('.user-menu-container')
            ) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isUserMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 shadow-lg backdrop-blur-lg'
                    : 'bg-white/80 shadow-md backdrop-blur-md'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* LOGO avec animation */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link
                            href="/"
                            className="group flex items-center space-x-2"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-50 blur transition-opacity group-hover:opacity-75"></div>
                                <div className="relative transform rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 p-2 text-white transition-transform duration-300 group-hover:scale-110">
                                    <Briefcase size={24} />
                                </div>
                            </div>
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                                Makira
                            </span>
                        </Link>
                    </div>

                    {/* NAVIGATION PRINCIPALE (Desktop) avec indicateurs actifs */}
                    <nav className="hidden space-x-2 lg:flex">
                        {[
                            { href: '/', label: 'Accueil', icon: Home },
                            { href: '/about', label: 'À propos', icon: Info },
                            { href: '/contact', label: 'Contact', icon: Mail },
                        ].map((item) => {
                            const Icon = item.icon;
                            const isActive = props.ziggy.location === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group relative flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? 'bg-indigo-50 text-indigo-600'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                                    }`}
                                >
                                    <Icon
                                        size={18}
                                        className="transition-transform group-hover:scale-110"
                                    />
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* SECTION DROITE (Boutons) */}
                    <div className="hidden items-center space-x-4 lg:flex">
                        {user ? (
                            // Utilisateur connecté avec menu déroulant
                            <div className="user-menu-container relative">
                                <button
                                    onClick={toggleUserMenu}
                                    className="group flex items-center space-x-3 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-gray-50"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur transition-opacity group-hover:opacity-75"></div>
                                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white shadow-lg">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500 capitalize">
                                            {user.role}
                                        </p>
                                    </div>
                                    <ChevronDown
                                        size={16}
                                        className={`text-gray-400 transition-transform duration-300 ${
                                            isUserMenuOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {/* Menu déroulant */}
                                {isUserMenuOpen && (
                                    <div className="animate-slide-down absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl">
                                        <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-3">
                                            <p className="text-sm font-semibold text-gray-900">
                                                {user.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {user.email}
                                            </p>
                                        </div>

                                        <div className="py-2">
                                            {user.role === 'admin' ? (
                                                /* Admin: Dashboard only */
                                                <Link
                                                    href="/dashboard"
                                                    className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                                                >
                                                    <Settings size={18} />
                                                    <span>Dashboard</span>
                                                </Link>
                                            ) : (
                                                /* Candidate: Profile only */
                                                <Link
                                                    href="/profile"
                                                    className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                                                >
                                                    <UserCircle size={18} />
                                                    <span>Mon Profil</span>
                                                </Link>
                                            )}

                                            <div className="my-2 border-t border-gray-100"></div>

                                            <Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="flex w-full items-center space-x-3 px-4 py-2.5 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
                                            >
                                                <LogOut size={18} />
                                                <span>Déconnexion</span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Utilisateur non connecté avec boutons animés
                            <div className="flex items-center space-x-3">
                                <Link
                                    href="/login"
                                    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-indigo-600"
                                >
                                    Se connecter
                                </Link>
                                <Link
                                    href="/register"
                                    className="group relative overflow-hidden rounded-lg px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-opacity"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                    <span className="relative flex items-center space-x-2">
                                        <UserPlus size={18} />
                                        <span>S'inscrire</span>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* BOUTON MENU MOBILE */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="relative rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">
                                Ouvrir le menu principal
                            </span>
                            <div className="relative h-6 w-6">
                                <span
                                    className={`absolute top-1 left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ${
                                        isMobileMenuOpen
                                            ? 'top-2.5 rotate-45'
                                            : ''
                                    }`}
                                ></span>
                                <span
                                    className={`absolute top-2.5 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                                        isMobileMenuOpen ? 'opacity-0' : ''
                                    }`}
                                ></span>
                                <span
                                    className={`absolute top-4 left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ${
                                        isMobileMenuOpen
                                            ? 'top-2.5 -rotate-45'
                                            : ''
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* MENU MOBILE avec animation */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                }`}
                id="mobile-menu"
            >
                <div className="space-y-2 border-t border-gray-100 bg-white/95 px-4 pt-2 pb-4 backdrop-blur-lg">
                    {[
                        { href: '/', label: 'Accueil', icon: Home },
                        { href: '/about', label: 'À propos', icon: Info },
                        { href: '/contact', label: 'Contact', icon: Mail },
                    ].map((item) => {
                        const Icon = item.icon;
                        const isActive = props.ziggy.location === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${
                                    isActive
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                                }`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    {/* Section utilisateur dans le menu mobile */}
                    <div className="space-y-2 border-t border-gray-100 pt-4">
                        {user ? (
                            <>
                                <div className="flex items-center space-x-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500 capitalize">
                                            {user.role}
                                        </p>
                                    </div>
                                </div>

                                {user.role === 'admin' ? (
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all hover:bg-gray-50 hover:text-indigo-600"
                                    >
                                        <Settings size={20} />
                                        <span>Dashboard</span>
                                    </Link>
                                ) : (
                                    <Link
                                        href="/profile"
                                        className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all hover:bg-gray-50 hover:text-indigo-600"
                                    >
                                        <UserCircle size={20} />
                                        <span>Mon Profil</span>
                                    </Link>
                                )}

                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left text-red-600 transition-all hover:bg-red-50"
                                >
                                    <LogOut size={20} />
                                    <span>Déconnexion</span>
                                </Link>
                            </>
                        ) : (
                            <div className="space-y-2">
                                <Link
                                    href="/login"
                                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-gray-700 transition-all hover:border-indigo-600 hover:text-indigo-600"
                                >
                                    Se connecter
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 font-medium text-white transition-all hover:from-indigo-700 hover:to-purple-700"
                                >
                                    <UserPlus size={20} />
                                    <span>S'inscrire</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Styles pour les animations */}
            <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
        </header>
    );
};

export default Header;

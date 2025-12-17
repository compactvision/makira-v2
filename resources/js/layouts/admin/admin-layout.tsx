import { Link, router, usePage } from '@inertiajs/react';
import {
    Bell,
    Calendar,
    ChevronRight,
    FileText,
    Home,
    LogOut,
    Mail,
    Menu,
    Search,
    User,
    Users,
    X,
} from 'lucide-react';
import React, { useState } from 'react';

const AdminLayout = ({
    children,
    title = 'Tableau de bord',
}: {
    children: React.ReactNode;
    title?: string;
}) => {
    // Récupérer les données de la page actuelle (props, url, etc.) via Inertia
    const { props, url } = usePage();
    const userProfile = (props.auth as any).userProfile || {};
    const user = props.auth.user || { name: 'Invité', email: '', avatar: '' };

    // États pour gérer l'ouverture/fermeture de la sidebar et les sous-menus
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    // Fonction pour gérer la déconnexion avec Inertia
    const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.post('/logout');
    };

    // Fonction pour vérifier si un lien de menu est actif - CORRIGÉE
    const isActive = (path: string) => {
        // Vérification exacte pour éviter que /dashboard soit actif quand on est sur /dashboard/candidat
        if (url === path) return true;
        
        // Gérer les cas avec slash final
        if (url === path + '/') return true;
        
        // Pour les sous-menus, vérifier si l'URL correspond exactement ou si elle commence par le chemin + '/'
        if (url.startsWith(path + '/')) return true;
        
        return false;
    };

    // Structure de menu améliorée avec sous-menus
    const getMenuItems = (role: string) => {
        if (role === 'admin') {
            return [
                {
                    path: '/dashboard',
                    label: 'Tableau de bord',
                    icon: <Home size={20} />,
                },
                {
                    path: '/dashboard/candidat',
                    label: 'Candidats',
                    icon: <Users size={20} />,
                    submenu: [
                        {
                            path: '/dashboard/candidat',
                            label: 'Liste des candidats',
                        },
                        {
                            path: '/dashboard/candidat/ajouter',
                            label: 'Ajouter un candidat',
                        },
                    ],
                },
            ];
        } else {
            // Menu pour les candidats
            return [
                {
                    path: '/profile',
                    label: 'Mon Profil',
                    icon: <User size={20} />,
                },
                {
                    path: '/resume',
                    label: 'Mon CV',
                    icon: <FileText size={20} />,
                },
            ];
        }
    };

    const menuItems = getMenuItems(user?.role || 'candidate');

    // Fonction pour basculer l'ouverture des sous-menus
    const toggleSubmenu = (path: string) => {
        if (activeSubmenu === path) {
            setActiveSubmenu('');
        } else {
            setActiveSubmenu(path);
        }
    };

    // Données de notification simulées
    const notifications = [
        {
            id: 1,
            title: 'Nouvelle candidature',
            message: 'Jean Dupont a postulé à l\'offre "Développeur Senior"',
            time: 'Il y a 5 minutes',
            type: 'info',
        },
        {
            id: 2,
            title: 'Entretien confirmé',
            message: "L'entretien avec Marie Martin est confirmé pour demain",
            time: 'Il y a 1 heure',
            type: 'success',
        },
        {
            id: 3,
            title: 'Rappel',
            message: "N'oubliez pas de valider les nouvelles offres d'emploi",
            time: 'Il y a 3 heures',
            type: 'warning',
        },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar pour desktop */}
            <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex w-64 flex-col">
                    {/* Sidebar */}
                    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src="/images/logo.png"
                                alt="Makira"
                            />
                            <span className="ml-2 text-xl font-bold text-gray-900">
                                Makira
                            </span>
                        </div>

                        {/* Navigation Desktop */}
                        <nav className="mt-8 flex-1 space-y-1 px-2">
                            {menuItems.map((item) => (
                                <div key={item.path}>
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() =>
                                                    toggleSubmenu(item.path)
                                                }
                                                className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium transition-all duration-200 ${
                                                    isActive(item.path)
                                                        ? 'bg-indigo-600 text-white shadow-md'
                                                        : 'text-gray-600 hover:bg-gray-100/80 hover:pl-3 hover:text-indigo-600'
                                                } `}
                                            >
                                                <span
                                                    className={`mr-3 flex-shrink-0 transition-colors ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'}`}
                                                >
                                                    {item.icon}
                                                </span>
                                                <span className="flex-1 text-left">
                                                    {item.label}
                                                </span>
                                                <ChevronRight
                                                    size={16}
                                                    className={`transform transition-transform duration-200 ${activeSubmenu === item.path ? 'rotate-90' : ''} ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'}`}
                                                />
                                            </button>

                                            {/* Sous-menu Desktop */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSubmenu === item.path ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <ul className="mt-1 space-y-1">
                                                    {item.submenu.map(
                                                        (subitem) => (
                                                            <li
                                                                key={
                                                                    subitem.path
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        subitem.path
                                                                    }
                                                                    className={`group flex items-center rounded-md py-2 pr-2 pl-11 text-sm font-medium transition-all duration-200 ${
                                                                        url ===
                                                                        subitem.path
                                                                            ? 'bg-indigo-50 text-indigo-600'
                                                                            : 'text-gray-600 hover:bg-gray-50 hover:pl-12 hover:text-indigo-600'
                                                                    } `}
                                                                >
                                                                    {
                                                                        subitem.label
                                                                    }
                                                                </Link>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-all duration-200 ${
                                                isActive(item.path)
                                                    ? 'bg-indigo-600 text-white shadow-md'
                                                    : 'text-gray-600 hover:bg-gray-100/80 hover:pl-3 hover:text-indigo-600'
                                            } `}
                                        >
                                            <span
                                                className={`mr-3 flex-shrink-0 transition-colors ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'}`}
                                            >
                                                {item.icon}
                                            </span>
                                            <span>{item.label}</span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Profile Desktop */}
                        <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                            <div className="group block w-full flex-shrink-0">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="inline-block h-9 w-9 rounded-full"
                                            src={
                                                userProfile.photo ||
                                                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff`
                                            }
                                            alt={user.name}
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            {user.name}
                                        </p>
                                        <form
                                            onSubmit={handleLogout}
                                            className="mt-1"
                                        >
                                            <button
                                                type="submit"
                                                className="flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700"
                                            >
                                                <LogOut
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                Se déconnecter
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile sidebar */}
            <div
                className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? '' : 'hidden'}`}
            >
                <div
                    className="bg-opacity-75 fixed inset-0 bg-gray-600"
                    onClick={() => setSidebarOpen(false)}
                ></div>
                <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    {/* Sidebar Mobile */}
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                                className="h-8 w-auto"
                                src="/images/logo.png"
                                alt="Makira"
                            />
                            <span className="ml-2 text-xl font-bold text-gray-900">
                                Makira
                            </span>
                        </div>

                        {/* Navigation Mobile */}
                        <nav className="mt-8 px-2">
                            {menuItems.map((item) => (
                                <div key={item.path}>
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() =>
                                                    toggleSubmenu(item.path)
                                                }
                                                className={`group flex w-full items-center rounded-md px-2 py-2 text-base font-medium transition-colors ${
                                                    isActive(item.path)
                                                        ? 'bg-indigo-100 text-indigo-700'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                } `}
                                            >
                                                <span className="mr-4 flex-shrink-0">
                                                    {item.icon}
                                                </span>
                                                <span className="flex-1">
                                                    {item.label}
                                                </span>
                                                <ChevronRight
                                                    size={16}
                                                    className={`transform transition-transform ${activeSubmenu === item.path ? 'rotate-90' : ''}`}
                                                />
                                            </button>

                                            {/* Sous-menu Mobile */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${activeSubmenu === item.path ? 'max-h-60' : 'max-h-0'}`}
                                            >
                                                <ul className="mt-1 space-y-1">
                                                    {item.submenu.map(
                                                        (subitem) => (
                                                            <li
                                                                key={
                                                                    subitem.path
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        subitem.path
                                                                    }
                                                                    className={`group flex items-center rounded-md py-2 pr-2 pl-10 text-base font-medium transition-colors ${
                                                                        url ===
                                                                        subitem.path
                                                                            ? 'bg-indigo-50 text-indigo-700'
                                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                                    } `}
                                                                >
                                                                    {
                                                                        subitem.label
                                                                    }
                                                                </Link>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            className={`group flex items-center rounded-md px-2 py-2 text-base font-medium transition-colors ${
                                                isActive(item.path)
                                                    ? 'bg-indigo-100 text-indigo-700'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            } `}
                                        >
                                            <span className="mr-4 flex-shrink-0">
                                                {item.icon}
                                            </span>
                                            <span>{item.label}</span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Profile Mobile */}
                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                        <div className="group block w-full flex-shrink-0">
                            <div className="flex items-center">
                                <div>
                                    <img
                                        className="inline-block h-10 w-10 rounded-full"
                                        src={
                                            userProfile.photo ||
                                            `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff`
                                        }
                                        alt={user.name}
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                        {user.name}
                                    </p>
                                    <form
                                        onSubmit={handleLogout}
                                        className="mt-1"
                                    >
                                        <button
                                            type="submit"
                                            className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700"
                                        >
                                            <LogOut
                                                size={16}
                                                className="mr-1"
                                            />
                                            Se déconnecter
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex w-0 flex-1 flex-col overflow-hidden">
                {/* Top bar */}
                <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
                    <button
                        className="border-r border-gray-200 px-4 text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <div className="flex flex-1 items-center justify-between px-4">
                        <div className="flex flex-1">
                            {/* Search bar */}
                            <div className="w-full max-w-lg lg:max-w-xs">
                                <label htmlFor="search" className="sr-only">
                                    Rechercher
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                                        placeholder="Rechercher..."
                                        type="search"
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="ml-4 flex items-center space-x-3 md:ml-6">
                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    className="rounded-full p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    onClick={() =>
                                        setShowNotifications(!showNotifications)
                                    }
                                >
                                    <Bell className="h-6 w-6" />
                                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                                </button>

                                {/* Notifications dropdown */}
                                {showNotifications && (
                                    <div className="ring-opacity-5 absolute right-0 z-50 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none">
                                        <div className="p-4">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                Notifications
                                            </h3>
                                            <div className="mt-2">
                                                {notifications.map(
                                                    (notification) => (
                                                        <div
                                                            key={
                                                                notification.id
                                                            }
                                                            className="border-b border-gray-100 py-3 last:border-0"
                                                        >
                                                            <div className="flex items-start">
                                                                <div className="flex-shrink-0">
                                                                    {notification.type ===
                                                                        'info' && (
                                                                        <div className="rounded-full bg-blue-100 p-1">
                                                                            <Mail className="h-4 w-4 text-blue-600" />
                                                                        </div>
                                                                    )}
                                                                    {notification.type ===
                                                                        'success' && (
                                                                        <div className="rounded-full bg-green-100 p-1">
                                                                            <Users className="h-4 w-4 text-green-600" />
                                                                        </div>
                                                                    )}
                                                                    {notification.type ===
                                                                        'warning' && (
                                                                        <div className="rounded-full bg-yellow-100 p-1">
                                                                            <Calendar className="h-4 w-4 text-yellow-600" />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="ml-3 w-0 flex-1">
                                                                    <p className="text-sm font-medium text-gray-900">
                                                                        {
                                                                            notification.title
                                                                        }
                                                                    </p>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        {
                                                                            notification.message
                                                                        }
                                                                    </p>
                                                                    <p className="mt-1 text-xs text-gray-400">
                                                                        {
                                                                            notification.time
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                            <div className="mt-4">
                                                <Link
                                                    href="/dashboard/notifications"
                                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Voir toutes les
                                                    notifications
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Profile dropdown */}
                            <div className="relative">
                                <button
                                    className="flex max-w-xs items-center rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    onClick={() => setShowProfile(!showProfile)}
                                >
                                    <span className="sr-only">
                                        Ouvrir le menu
                                    </span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={
                                            userProfile.photo ||
                                            `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff`
                                        }
                                        alt={user.name}
                                    />
                                </button>

                                {/* Profile dropdown */}
                                {showProfile && (
                                    <div className="ring-opacity-5 absolute right-0 z-50 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none">
                                        <div className="px-4 py-3">
                                            <p className="text-sm">
                                                Connecté en tant que
                                            </p>
                                            <p className="truncate text-sm font-medium text-gray-900">
                                                {user.email}
                                            </p>
                                        </div>
                                        <div className="py-1">
                                            <Link
                                                href="/dashboard/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Mon profil
                                            </Link>
                                            <Link
                                                href="/dashboard/settings"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Paramètres
                                            </Link>
                                            <form onSubmit={handleLogout}>
                                                <button
                                                    type="submit"
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Se déconnecter
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <h1 className="text-2xl font-bold text-white">
                            {title}
                        </h1>
                        <p className="mt-1 text-sm text-indigo-100">
                            Bienvenue, {user.name}
                        </p>
                    </div>
                </div>

                {/* Main content scrollable */}
                <main className="relative flex-1 overflow-y-auto focus:outline-none">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
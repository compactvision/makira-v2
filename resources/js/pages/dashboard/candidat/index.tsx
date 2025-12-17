// resources/js/Pages/Candidates/Index.jsx
import AdminLayout from '@/layouts/admin/admin-layout';
import { Link, router, usePage } from '@inertiajs/react';
import {
    Briefcase,
    Calendar,
    CheckCircle,
    Download,
    Eye,
    Filter,
    Mail,
    MapPin,
    Phone,
    Search,
    Trash2,
    UserPlus,
    XCircle, // Added icons for status
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Helper for debounce could be useful, but for now simple state update on blur or enter key, or simple effect
// Let's use simple effect with debounce or just button trigger.
// Standard in Inertia is often using pickBy and router.get

const CandidatesIndex = () => {
    const { props } = usePage();
    const { candidates, filters, categories } = props as any;

    // States for filters
    const [searchQuery, setSearchQuery] = useState(filters?.search || '');
    const [selectedCategory, setSelectedCategory] = useState(
        filters?.category || 'all',
    );
    const [selectedStatus, setSelectedStatus] = useState(
        filters?.status || 'all',
    );
    // Ensure sortBy uses the filter value only if it's a string, to avoid Array.prototype.sort collision
    const [sortBy, setSortBy] = useState(
        typeof filters?.sort === 'string' ? filters.sort : 'newest',
    );
    const [showFilters, setShowFilters] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [candidateToDelete, setCandidateToDelete] = useState<any>(null);

    // Debounce search
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchQuery !== (filters?.search || '')) {
                applyFilters();
            }
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    // Apply filters when dropdowns change
    const handleFilterChange = (key: string, value: string) => {
        if (key === 'category') setSelectedCategory(value);
        if (key === 'status') setSelectedStatus(value);
        if (key === 'sort') setSortBy(value);

        // We need to trigger the router reload, but let's do it in a unified function or effect.
        // Doing it directly here for dropdowns is fast enough.

        const newFilters = {
            search: searchQuery,
            category: key === 'category' ? value : selectedCategory,
            status: key === 'status' ? value : selectedStatus,
            sort: key === 'sort' ? value : sortBy,
        };

        router.get('/dashboard/candidat', newFilters, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
    };

    const applyFilters = () => {
        router.get(
            '/dashboard/candidat',
            {
                search: searchQuery,
                category: selectedCategory,
                status: selectedStatus,
                sort: sortBy,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    // Fonction pour supprimer un candidat
    const handleDelete = (candidate: any) => {
        setCandidateToDelete(candidate);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (candidateToDelete) {
            router.delete(`/dashboard/candidat/${candidateToDelete.id}`, {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setCandidateToDelete(null);
                },
            });
        }
    };

    // Fonction pour changer de page
    const handlePageChange = (url: string) => {
        if (url) {
            router.get(url, {}, { preserveState: true, preserveScroll: true });
        }
    };

    // Fonction pour obtenir la couleur du statut
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new':
                return 'bg-blue-100 text-blue-800';
            case 'reviewed':
                return 'bg-yellow-100 text-yellow-800';
            case 'interview':
                return 'bg-purple-100 text-purple-800';
            case 'hired':
                return 'bg-green-100 text-green-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Fonction pour obtenir le libellé du statut
    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'new':
                return 'Nouveau';
            case 'reviewed':
                return 'En cours';
            case 'interview':
                return 'Entretien';
            case 'hired':
                return 'Embauché';
            case 'rejected':
                return 'Refusé';
            default:
                return status;
        }
    };

    return (
        <AdminLayout title="Liste des candidats">
            <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                {/* En-tête avec actions */}
                <div className="mb-4 flex flex-col space-y-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Liste des candidats
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            {candidates.total} candidat
                            {candidates.total > 1 ? 's' : ''} trouvé
                            {candidates.total > 1 ? 's' : ''}
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Link
                            href="/dashboard/candidat/ajouter"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:px-4 sm:text-sm"
                        >
                            <UserPlus size={16} className="mr-2" />
                            <span className="hidden sm:inline">
                                Ajouter un candidat
                            </span>
                            <span className="sm:hidden">Ajouter</span>
                        </Link>
                        <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:px-4 sm:text-sm">
                            <Download size={16} className="mr-2" />
                            <span className="hidden sm:inline">Exporter</span>
                            <span className="sm:hidden">Export</span>
                        </button>
                    </div>
                </div>

                {/* Filtres et recherche */}
                <div className="mb-4 rounded-lg bg-white p-3 shadow sm:mb-6 sm:p-4">
                    {/* Bouton pour afficher/masquer les filtres sur mobile */}
                    <div className="mb-3 flex items-center justify-between sm:hidden">
                        <span className="text-sm font-medium text-gray-700">
                            Filtres
                        </span>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <Filter size={20} />
                        </button>
                    </div>

                    <div
                        className={`${showFilters ? 'block' : 'hidden'} sm:block`}
                    >
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-9 text-sm leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:outline-none sm:pl-10"
                                    placeholder="Rechercher..."
                                />
                            </div>

                            <div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            'category',
                                            e.target.value,
                                        )
                                    }
                                    className="block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="all">
                                        Toutes les catégories
                                    </option>
                                    {categories &&
                                        categories.map((category: string) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            <div>
                                <select
                                    value={selectedStatus}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            'status',
                                            e.target.value,
                                        )
                                    }
                                    className="block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="all">
                                        Tous les statuts
                                    </option>
                                    <option value="new">Nouveau</option>
                                    <option value="reviewed">En cours</option>
                                    <option value="interview">Entretien</option>
                                    <option value="hired">Embauché</option>
                                    <option value="rejected">Refusé</option>
                                </select>
                            </div>

                            <div>
                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            'sort',
                                            e.target.value,
                                        )
                                    }
                                    className="block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                >
                                    <option value="newest">Plus récents</option>
                                    <option value="oldest">Plus anciens</option>
                                    <option value="name">Par nom</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des candidats */}
                <div className="overflow-hidden bg-white shadow sm:rounded-md">
                    {candidates.data.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {candidates.data.map((candidate: any) => {
                                const hasProfile = !!candidate.user.profile;
                                const isActive = candidate.user.is_active;
                                const profile = candidate.user.profile || {};

                                return (
                                    <li
                                        key={candidate.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <div className="px-3 py-3 sm:px-4 sm:py-5">
                                            {/* Mobile view - Card style */}
                                            <div className="sm:hidden">
                                                <div className="flex items-start space-x-3">
                                                    <img
                                                        className="h-12 w-12 rounded-full object-cover"
                                                        src={
                                                            profile.photo ||
                                                            `https://ui-avatars.com/api/?name=${encodeURIComponent(candidate.user.name)}&background=random`
                                                        }
                                                        alt={
                                                            candidate.user.name
                                                        }
                                                    />
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <p className="truncate text-sm font-medium text-gray-900">
                                                                {hasProfile
                                                                    ? profile.name
                                                                    : candidate
                                                                          .user
                                                                          .name}
                                                            </p>
                                                            {isActive &&
                                                                hasProfile && (
                                                                    <span
                                                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(profile.status)}`}
                                                                    >
                                                                        {getStatusLabel(
                                                                            profile.status,
                                                                        )}
                                                                    </span>
                                                                )}
                                                        </div>

                                                        {/* Status CV */}
                                                        <div className="mt-1 mb-1">
                                                            {isActive ? (
                                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                                    <CheckCircle
                                                                        size={
                                                                            10
                                                                        }
                                                                        className="mr-1"
                                                                    />{' '}
                                                                    CV Envoyé
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                                                    <XCircle
                                                                        size={
                                                                            10
                                                                        }
                                                                        className="mr-1"
                                                                    />{' '}
                                                                    CV Non
                                                                    envoyé
                                                                </span>
                                                            )}
                                                        </div>

                                                        {isActive &&
                                                        hasProfile ? (
                                                            <>
                                                                <p className="truncate text-sm text-gray-500">
                                                                    {profile.poste ||
                                                                        'Poste non renseigné'}
                                                                </p>
                                                                <div className="mt-1 flex items-center text-xs text-gray-500">
                                                                    <MapPin
                                                                        size={
                                                                            12
                                                                        }
                                                                        className="mr-1 flex-shrink-0"
                                                                    />
                                                                    <span className="truncate">
                                                                        {profile.country ||
                                                                            'Pays N/A'}
                                                                        ,{' '}
                                                                        {profile.city ||
                                                                            'Ville N/A'}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <p className="text-xs text-gray-400 italic">
                                                                Informations
                                                                limitées
                                                            </p>
                                                        )}

                                                        <div className="mt-3 flex justify-end space-x-1">
                                                            {isActive &&
                                                                profile.phone && (
                                                                    <a
                                                                        href={`tel:${profile.phone}`}
                                                                        className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-green-50 hover:text-green-600"
                                                                        title="Appeler"
                                                                    >
                                                                        <Phone
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                    </a>
                                                                )}
                                                            <a
                                                                href={`mailto:${candidate.user.email}`}
                                                                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                                                                title="Envoyer un email"
                                                            >
                                                                <Mail
                                                                    size={16}
                                                                />
                                                            </a>
                                                            {isActive && (
                                                                <Link
                                                                    href={`/dashboard/candidat/${candidate.id}`}
                                                                    className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                                                                    title="Voir le profil"
                                                                >
                                                                    <Eye
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </Link>
                                                            )}
                                                            <button
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        candidate,
                                                                    )
                                                                }
                                                                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                                                                title="Supprimer"
                                                            >
                                                                <Trash2
                                                                    size={16}
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Desktop view - Table style */}
                                            <div className="hidden sm:block">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img
                                                            className="h-12 w-12 rounded-full object-cover"
                                                            src={
                                                                profile.photo ||
                                                                `https://ui-avatars.com/api/?name=${encodeURIComponent(candidate.user.name)}&background=random`
                                                            }
                                                            alt={
                                                                candidate.user
                                                                    .name
                                                            }
                                                        />
                                                        <div className="ml-4">
                                                            <div className="flex items-center">
                                                                <h3 className="text-sm font-medium text-gray-900 sm:text-base">
                                                                    {isActive ? (
                                                                        <Link
                                                                            href={`/dashboard/candidat/${candidate.id}`}
                                                                            className="transition-colors hover:text-indigo-600"
                                                                        >
                                                                            {hasProfile
                                                                                ? profile.name
                                                                                : candidate
                                                                                      .user
                                                                                      .name}
                                                                        </Link>
                                                                    ) : (
                                                                        <span>
                                                                            {
                                                                                candidate
                                                                                    .user
                                                                                    .name
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </h3>
                                                                {isActive ? (
                                                                    <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                                        <CheckCircle
                                                                            size={
                                                                                10
                                                                            }
                                                                            className="mr-1"
                                                                        />{' '}
                                                                        CV
                                                                        Envoyé
                                                                    </span>
                                                                ) : (
                                                                    <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                                                        <XCircle
                                                                            size={
                                                                                10
                                                                            }
                                                                            className="mr-1"
                                                                        />{' '}
                                                                        CV Non
                                                                        envoyé
                                                                    </span>
                                                                )}
                                                                {isActive &&
                                                                    hasProfile && (
                                                                        <span
                                                                            className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(profile.status)}`}
                                                                        >
                                                                            {getStatusLabel(
                                                                                profile.status,
                                                                            )}
                                                                        </span>
                                                                    )}
                                                            </div>
                                                            {isActive ? (
                                                                <>
                                                                    <p className="text-sm text-gray-500">
                                                                        {profile.poste ||
                                                                            'Poste non renseigné'}
                                                                    </p>
                                                                    <div className="mt-1 flex items-center text-sm text-gray-500">
                                                                        <MapPin
                                                                            size={
                                                                                14
                                                                            }
                                                                            className="mr-1"
                                                                        />
                                                                        {profile.country ||
                                                                            'N/A'}
                                                                        ,{' '}
                                                                        {profile.city ||
                                                                            'N/A'}
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <p className="text-sm text-gray-500">
                                                                    En attente
                                                                    de
                                                                    soumission
                                                                    du CV
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        {isActive &&
                                                            profile.phone && (
                                                                <a
                                                                    href={`tel:${profile.phone}`}
                                                                    className="rounded-full p-2 text-gray-400 transition-colors hover:bg-green-50 hover:text-green-600"
                                                                    title="Appeler"
                                                                >
                                                                    <Phone
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                </a>
                                                            )}
                                                        <a
                                                            href={`mailto:${candidate.user.email}`}
                                                            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                                                            title="Envoyer un email"
                                                        >
                                                            <Mail size={18} />
                                                        </a>
                                                        {isActive && (
                                                            <Link
                                                                href={`/dashboard/candidat/${candidate.id}`}
                                                                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                                                                title="Voir le profil"
                                                            >
                                                                <Eye
                                                                    size={18}
                                                                />
                                                            </Link>
                                                        )}
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    candidate,
                                                                )
                                                            }
                                                            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                                                            title="Supprimer"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                                {isActive && hasProfile && (
                                                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                                                        <div className="flex items-center">
                                                            <Briefcase
                                                                size={14}
                                                                className="mr-1"
                                                            />
                                                            {profile.experience ||
                                                                'Expérience non renseignée'}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Calendar
                                                                size={14}
                                                                className="mr-1"
                                                            />
                                                            {profile.appliedAt
                                                                ? new Date(
                                                                      profile.appliedAt,
                                                                  ).toLocaleDateString(
                                                                      'fr-FR',
                                                                  )
                                                                : 'Date N/A'}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <div className="py-12 text-center">
                            <UserPlus className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                                Aucun candidat trouvé
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Essayez de modifier vos critères de recherche.
                            </p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {candidates.links && candidates.links.length > 3 && (
                    <div className="rounded-b-lg border-t border-gray-200 bg-white px-4 py-3 shadow-sm sm:px-6">
                        <div className="flex items-center justify-between sm:hidden">
                            {candidates.prev_page_url && (
                                <button
                                    onClick={() =>
                                        handlePageChange(
                                            candidates.prev_page_url,
                                        )
                                    }
                                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Précédent
                                </button>
                            )}
                            {candidates.next_page_url && (
                                <button
                                    onClick={() =>
                                        handlePageChange(
                                            candidates.next_page_url,
                                        )
                                    }
                                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Suivant
                                </button>
                            )}
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Affichage de{' '}
                                    <span className="font-medium">
                                        {candidates.from}
                                    </span>{' '}
                                    à{' '}
                                    <span className="font-medium">
                                        {candidates.to}
                                    </span>{' '}
                                    sur{' '}
                                    <span className="font-medium">
                                        {candidates.total}
                                    </span>{' '}
                                    résultats
                                </p>
                            </div>
                            <div>
                                <nav
                                    className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                                    aria-label="Pagination"
                                >
                                    {candidates.links.map(
                                        (link: any, i: number) => {
                                            // Don't show "Previous" and "Next" texts if we want icons, or render custom.
                                            // Default Laravel pagination returns HTML entities. We can strip or just use label.
                                            // Simple rendering logic:
                                            let label = link.label;
                                            if (label === '&laquo; Previous')
                                                label = '<';
                                            if (label === 'Next &raquo;')
                                                label = '>';

                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() =>
                                                        handlePageChange(
                                                            link.url,
                                                        )
                                                    }
                                                    disabled={
                                                        !link.url || link.active
                                                    }
                                                    className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                                                        link.active
                                                            ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600'
                                                            : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                                                    } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label,
                                                    }}
                                                />
                                            );
                                        },
                                    )}
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal de confirmation de suppression */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:h-screen sm:align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <Trash2 className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Supprimer le candidat
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Êtes-vous sûr de vouloir
                                                supprimer le candidat "
                                                {candidateToDelete?.user.name}"
                                                ? Cette action ne peut pas être
                                                annulée.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={confirmDelete}
                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Supprimer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowDeleteModal(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default CandidatesIndex;

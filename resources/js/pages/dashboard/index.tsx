// resources/js/Pages/Dashboard.jsx
import AdminLayout from '@/layouts/admin/admin-layout';
import { usePage, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Briefcase,
    Calendar,
    Clock,
    Download,
    FileText,
    Filter,
    MoreHorizontal,
    TrendingDown,
    TrendingUp,
    UserPlus,
    Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const { props } = usePage();
    const { user } = props.auth as any;
    const {
        stats,
        recentApplications,
        recentJobs,
        chartData: initialChartData,
    } = props as any;

    // États pour les données dynamiques
    const [selectedPeriod, setSelectedPeriod] = useState('week');
    const [recentApplicationsData, setRecentApplicationsData] = useState(
        recentApplications || [],
    );
    const [recentJobsData, setRecentJobsData] = useState(recentJobs || []);
    const [chartData, setChartData] = useState(initialChartData || []);

    // Mettre à jour les états si les props changent
    useEffect(() => {
        setRecentApplicationsData(recentApplications || []);
        setRecentJobsData(recentJobs || []);
        setChartData(initialChartData || []);
    }, [recentApplications, recentJobs, initialChartData]);

    // Fonction pour obtenir la couleur du statut
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new':
                return 'bg-blue-100 text-blue-800';
            case 'reviewed':
                return 'bg-yellow-100 text-yellow-800';
            case 'interview':
                return 'bg-purple-100 text-purple-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            case 'hired':
                return 'bg-green-100 text-green-800';
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
            case 'rejected':
                return 'Refusé';
            case 'hired':
                return 'Embauché';
            default:
                return status;
        }
    };

    return (
        <AdminLayout title="Tableau de bord">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* En-tête avec actions rapides */}
               

                {/* Cartes de statistiques */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Carte 1: Candidats */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
                        <div className="p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Total Candidats
                                        </dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                {stats.totalCandidates}
                                            </div>
                                            <div className={`ml-2 flex items-baseline text-sm font-semibold ${stats.candidatesTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {stats.candidatesTrend >= 0 ? (
                                                    <TrendingUp className="h-4 w-4 flex-shrink-0 self-center text-green-500" />
                                                ) : (
                                                    <TrendingDown className="h-4 w-4 flex-shrink-0 self-center text-red-500" />
                                                )}
                                                <span className="sr-only">
                                                    {stats.candidatesTrend >= 0 ? 'Augmentation' : 'Diminution'}
                                                </span>
                                                {Math.abs(stats.candidatesTrend)}%
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-6 py-3">
                            <div className="text-sm">
                                <Link href="/dashboard/candidat" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors">
                                    Voir tous les candidats
                                    <ArrowRight className="ml-1 inline h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Carte 2: CV Envoyés */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
                        <div className="p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                    <Briefcase className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            CV Envoyés
                                        </dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                {stats.totalApplications}
                                            </div>
                                            <div className={`ml-2 flex items-baseline text-sm font-semibold ${stats.applicationsTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {stats.applicationsTrend >= 0 ? (
                                                    <TrendingUp className="h-4 w-4 flex-shrink-0 self-center text-green-500" />
                                                ) : (
                                                    <TrendingDown className="h-4 w-4 flex-shrink-0 self-center text-red-500" />
                                                )}
                                                <span className="sr-only">
                                                    {stats.applicationsTrend >= 0 ? 'Augmentation' : 'Diminution'}
                                                </span>
                                                {Math.abs(stats.applicationsTrend)}%
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-6 py-3">
                            <div className="text-sm">
                                <Link href="/dashboard/candidat?status=sent" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors">
                                    Voir les CV envoyés
                                    <ArrowRight className="ml-1 inline h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Graphique et activités récentes */}
                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Graphique */}
                    <div className="bg-white shadow rounded-lg lg:col-span-2">
                        <div className="px-6 py-5 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Activité de la semaine
                                </h3>
                                <div className="flex items-center space-x-2 text-sm">
                                    <button
                                        onClick={() => setSelectedPeriod('day')}
                                        className={`px-3 py-1 rounded-md transition-colors ${selectedPeriod === 'day' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Jour
                                    </button>
                                    <button
                                        onClick={() => setSelectedPeriod('week')}
                                        className={`px-3 py-1 rounded-md transition-colors ${selectedPeriod === 'week' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Semaine
                                    </button>
                                    <button
                                        onClick={() => setSelectedPeriod('month')}
                                        className={`px-3 py-1 rounded-md transition-colors ${selectedPeriod === 'month' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Mois
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Graphique simplifié (remplacez par un vrai composant de graphique) */}
                            <div className="flex h-64 items-end justify-between space-x-2">
                                {chartData.map((item: any, index: number) => {
                                    const maxVal = Math.max(...chartData.map((d: any) => d.applications || 1));
                                    return (
                                        <div key={index} className="flex flex-1 flex-col items-center">
                                            <div className="relative h-full w-full rounded-t bg-gray-100">
                                                <div
                                                    className="absolute right-0 bottom-0 left-0 rounded-t bg-indigo-500 transition-all duration-500"
                                                    style={{
                                                        height: `${((item.applications || 0) / (maxVal || 1)) * 100}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <p className="mt-2 text-xs text-gray-500">
                                                {item.name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                                <div className="flex items-center">
                                    <div className="mr-2 h-3 w-3 rounded-full bg-indigo-500"></div>
                                    <span className="text-gray-600">Candidatures</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-600">Entretiens</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
                                    <span className="text-gray-600">Embauches</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tâches rapides */}
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-6 py-5 border-b border-gray-200">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Actions rapides
                            </h3>
                        </div>
                        <div className="p-6 space-y-3">
                            <Link
                                href="/dashboard/candidat"
                                className="block rounded-md border border-gray-200 p-3 transition-all duration-200 hover:bg-gray-50 hover:border-indigo-300"
                            >
                                <div className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 rounded-md bg-indigo-100 p-2">
                                        <UserPlus className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Voir tout les candidats
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Voir la liste des candidats
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Candidatures et offres récentes */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Candidatures récentes */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Candidatures récentes
                                </h3>
                                <Link
                                    href="/dashboard/candidat"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-900 transition-colors"
                                >
                                    Voir tout
                                </Link>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {recentApplicationsData.length > 0 ? (
                                recentApplicationsData.map((application: any) => (
                                    <div
                                        key={application.id}
                                        className="px-6 py-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center min-w-0">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-10 w-10 rounded-full object-cover"
                                                        src={`https://ui-avatars.com/api/?name=${application.name}&background=random`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-4 min-w-0 flex-1">
                                                    <p className="text-sm font-medium text-gray-900 truncate">
                                                        {application.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate">
                                                        {application.position} • {application.company}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 ml-4">
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}
                                                >
                                                    {getStatusLabel(application.status)}
                                                </span>
                                                <button className="text-gray-400 hover:text-gray-500 transition-colors">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Clock size={14} className="mr-1" />
                                                {application.date}
                                            </div>
                                            <div className="mt-2 flex items-center space-x-2 sm:mt-0">
                                                <Link
                                                    href={`/dashboard/candidat/${application.id}`}
                                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-900 transition-colors"
                                                >
                                                    Voir le profil
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="px-6 py-10 text-center text-sm text-gray-500 italic">
                                    Aucune candidature récente
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
// resources/js/Pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  FileText,
  Clock,
  Star,
  ArrowRight,
  Eye,
  Download,
  Filter,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  UserPlus,
  Building
} from 'lucide-react';
import AdminLayout from '@/layouts/admin/admin-layout';

const Dashboard = () => {
    const { props } = usePage();
    const user = props.auth.user;
    
    // États pour les données dynamiques
    const [selectedPeriod, setSelectedPeriod] = useState('week');
    const [recentApplications, setRecentApplications] = useState([]);
    const [recentJobs, setRecentJobs] = useState([]);
    const [chartData, setChartData] = useState([]);
    
    // Simuler le chargement des données
    useEffect(() => {
        // Simuler des données d'applications récentes
        setRecentApplications([
            { id: 1, name: 'Jean Dupont', position: 'Développeur Senior', company: 'TechCorp', date: 'Il y a 2 heures', status: 'new' },
            { id: 2, name: 'Marie Martin', position: 'Designer UX', company: 'DesignHub', date: 'Il y a 5 heures', status: 'reviewed' },
            { id: 3, name: 'Pierre Durand', position: 'Chef de projet', company: 'InnovateCo', date: 'Hier', status: 'interview' },
            { id: 4, name: 'Sophie Lefebvre', position: 'Data Analyst', company: 'DataDrive', date: 'Hier', status: 'new' },
            { id: 5, name: 'Thomas Bernard', position: 'Développeur Full Stack', company: 'WebSolutions', date: 'Il y a 2 jours', status: 'rejected' }
        ]);
        
        // Simuler des données d'offres récentes
        setRecentJobs([
            { id: 1, title: 'Développeur React', company: 'TechCorp', location: 'Paris', applications: 24, daysLeft: 5 },
            { id: 2, title: 'Designer UI/UX', company: 'DesignHub', location: 'Lyon', applications: 18, daysLeft: 10 },
            { id: 3, title: 'Chef de produit', company: 'InnovateCo', location: 'Marseille', applications: 32, daysLeft: 15 }
        ]);
        
        // Simuler des données pour le graphique
        setChartData([
            { name: 'Lun', applications: 12, interviews: 5, hires: 2 },
            { name: 'Mar', applications: 19, interviews: 8, hires: 3 },
            { name: 'Mer', applications: 15, interviews: 6, hires: 1 },
            { name: 'Jeu', applications: 25, interviews: 10, hires: 4 },
            { name: 'Ven', applications: 22, interviews: 9, hires: 3 },
            { name: 'Sam', applications: 8, interviews: 3, hires: 1 },
            { name: 'Dim', applications: 5, interviews: 2, hires: 0 }
        ]);
    }, []);
    
    // Fonction pour obtenir la couleur du statut
    const getStatusColor = (status) => {
        switch(status) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'reviewed': return 'bg-yellow-100 text-yellow-800';
            case 'interview': return 'bg-purple-100 text-purple-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            case 'hired': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    
    // Fonction pour obtenir le libellé du statut
    const getStatusLabel = (status) => {
        switch(status) {
            case 'new': return 'Nouveau';
            case 'reviewed': return 'En cours';
            case 'interview': return 'Entretien';
            case 'rejected': return 'Refusé';
            case 'hired': return 'Embauché';
            default: return status;
        }
    };
    
    return (
        <AdminLayout title="Tableau de bord">
            {/* En-tête avec actions rapides */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
                    <p className="mt-1 text-sm text-gray-500">Bienvenue sur votre tableau de bord, {user.name}</p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Filter size={16} className="inline mr-2" />
                        Filtrer
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Download size={16} className="inline mr-2" />
                        Exporter
                    </button>
                </div>
            </div>
            
            {/* Cartes de statistiques */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {/* Carte 1: Candidats */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Total Candidats</dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900">1,250</div>
                                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                            <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                                            <span className="sr-only">Augmentation</span>
                                            12%
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-700 hover:text-indigo-600">
                                Voir tous les candidats
                                <ArrowRight className="h-4 w-4 inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Carte 2: Offres d'emploi */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                <Briefcase className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Offres actives</dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900">150</div>
                                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                            <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                                            <span className="sr-only">Augmentation</span>
                                            8%
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-700 hover:text-indigo-600">
                                Voir toutes les offres
                                <ArrowRight className="h-4 w-4 inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Carte 3: Entretiens */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Entretiens cette semaine</dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900">24</div>
                                        <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                                            <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                                            <span className="sr-only">Diminution</span>
                                            3%
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-700 hover:text-indigo-600">
                                Voir le calendrier
                                <ArrowRight className="h-4 w-4 inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Carte 4: Taux de conversion */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Taux de conversion</dt>
                                    <dd className="flex items-baseline">
                                        <div className="text-2xl font-semibold text-gray-900">3.2%</div>
                                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                            <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                                            <span className="sr-only">Augmentation</span>
                                            1.2%
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-700 hover:text-indigo-600">
                                Voir les statistiques
                                <ArrowRight className="h-4 w-4 inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Graphique et activités récentes */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
                {/* Graphique */}
                <div className="lg:col-span-2 bg-white shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Activité de la semaine</h3>
                            <div className="flex items-center space-x-2 text-sm">
                                <button 
                                    onClick={() => setSelectedPeriod('day')}
                                    className={`px-3 py-1 rounded-md ${selectedPeriod === 'day' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Jour
                                </button>
                                <button 
                                    onClick={() => setSelectedPeriod('week')}
                                    className={`px-3 py-1 rounded-md ${selectedPeriod === 'week' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Semaine
                                </button>
                                <button 
                                    onClick={() => setSelectedPeriod('month')}
                                    className={`px-3 py-1 rounded-md ${selectedPeriod === 'month' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Mois
                                </button>
                            </div>
                        </div>
                        
                        {/* Graphique simplifié (remplacez par un vrai composant de graphique) */}
                        <div className="h-64 flex items-end justify-between space-x-2">
                            {chartData.map((item, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center">
                                    <div className="w-full bg-gray-200 rounded-t relative">
                                        <div 
                                            className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t" 
                                            style={{ height: `${(item.applications / 30) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">{item.name}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                                <span className="text-gray-600">Candidatures</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                <span className="text-gray-600">Entretiens</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                <span className="text-gray-600">Embauches</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tâches rapides */}
                <div className="bg-white shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Actions rapides</h3>
                        <div className="space-y-3">
                            <a href="#" className="block p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-2 mr-3">
                                        <UserPlus className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Ajouter un candidat</p>
                                        <p className="text-xs text-gray-500">Importer manuellement un nouveau candidat</p>
                                    </div>
                                </div>
                            </a>
                            
                            <a href="#" className="block p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-green-100 rounded-md p-2 mr-3">
                                        <Briefcase className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Publier une offre</p>
                                        <p className="text-xs text-gray-500">Créer une nouvelle offre d'emploi</p>
                                    </div>
                                </div>
                            </a>
                            
                            <a href="#" className="block p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-purple-100 rounded-md p-2 mr-3">
                                        <Calendar className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Planifier un entretien</p>
                                        <p className="text-xs text-gray-500">Organiser un entretien avec un candidat</p>
                                    </div>
                                </div>
                            </a>
                            
                            <a href="#" className="block p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-yellow-100 rounded-md p-2 mr-3">
                                        <FileText className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Générer un rapport</p>
                                        <p className="text-xs text-gray-500">Exporter les données du mois</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Candidatures et offres récentes */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Candidatures récentes */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Candidatures récentes</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Voir tout
                            </a>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {recentApplications.map((application) => (
                            <div key={application.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={`https://ui-avatars.com/api/?name=${application.name}&background=random`} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{application.name}</div>
                                            <div className="text-sm text-gray-500">{application.position} • {application.company}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                                            {getStatusLabel(application.status)}
                                        </span>
                                        <button className="text-gray-400 hover:text-gray-500">
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
                                        <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                                            Voir le profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Offres récentes */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Offres récentes</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Voir tout
                            </a>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {recentJobs.map((job) => (
                            <div key={job.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{job.title}</div>
                                        <div className="text-sm text-gray-500">{job.company} • {job.location}</div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Actif
                                        </span>
                                        <button className="text-gray-400 hover:text-gray-500">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Users size={14} className="mr-1" />
                                            {job.applications} candidats
                                        </div>
                                        <div className="flex items-center">
                                            <Clock size={14} className="mr-1" />
                                            {job.daysLeft} jours restants
                                        </div>
                                    </div>
                                    <div className="mt-2 flex items-center space-x-2 sm:mt-0">
                                        <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                                            Voir les détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
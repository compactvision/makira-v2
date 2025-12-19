// resources/js/Pages/Candidates/Show.tsx
import AdminLayout from '@/layouts/admin/admin-layout';
import { formatDate } from '@/lib/utils';
import { Link, useForm } from '@inertiajs/react';
import {
    ArrowLeft,
    Award,
    Briefcase,
    Calendar,
    CheckCircle,
    Clock,
    Code,
    DollarSign,
    ExternalLink,
    Facebook,
    Globe,
    GraduationCap,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    User,
} from 'lucide-react';
import React, { useState } from 'react';

const CandidateShow = ({ candidate: user }: { candidate: any }) => {
    // The prop is named 'candidate' in the controller, but it represents the User model.
    // We strictly use 'user' to verify fields, but for UI mapping we can destructure cleanly.

    // Helper to access nested profile safely
    const profile = user.user_profile || {};
    const resume = user.resume || {};

    // Skills might be strings or objects { name, level }
    const skills = resume.skills || profile.skills || [];
    const itSkills = resume.it_skills || []; // Laravel snake_case
    const employments = resume.employments || [];
    const educations = resume.educations || [];

    // Social links from the new relationship
    const socialLinks = user.social_links || [];
    const facebook = socialLinks.find(
        (s: any) => s.platform === 'facebook',
    )?.url;
    const linkedin = socialLinks.find(
        (s: any) => s.platform === 'linkedin',
    )?.url;
    const whatsapp = socialLinks.find(
        (s: any) => s.platform === 'whatsapp',
    )?.url;
    const instagram = socialLinks.find(
        (s: any) => s.platform === 'instagram',
    )?.url;

    const [activeTab, setActiveTab] = useState('about');
    const {
        data: formData,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/dashboard/candidat/${user.id}/email`, {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleDownloadCV = () => {
        // Implement PDF download if available, or print
        window.print();
    };

    const getSkillColor = (level: number) => {
        if (level >= 90) return 'bg-green-500';
        if (level >= 80) return 'bg-blue-500';
        if (level >= 70) return 'bg-yellow-500';
        return 'bg-gray-400';
    };

    // Helper to get name safely
    const displayName = profile.name || user.name;
    const displayEmail = profile.email || user.email;

    return (
        <AdminLayout title={`Détails du candidat - ${displayName}`}>
            <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                {/* Bouton de retour */}
                <div className="mb-4 sm:mb-6">
                    <Link
                        href="/dashboard/candidat"
                        className="inline-flex items-center text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour à la liste
                    </Link>
                </div>

                {/* En-tête du candidat avec design plus sobre et élégant */}
                <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md sm:mb-8">
                    <div className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6">
                            <div className="relative">
                                <img
                                    src={
                                        profile.photo ||
                                        `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=6366f1&color=fff&size=200`
                                    }
                                    alt={displayName}
                                    className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg sm:h-40 sm:w-40"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=6366f1&color=fff&size=200`;
                                    }}
                                />
                                {user.is_active && (
                                    <div
                                        className="absolute right-2 bottom-2 h-6 w-6 rounded-full border-2 border-white bg-green-500"
                                        title="CV Envoyé"
                                    ></div>
                                )}
                            </div>

                            <div className="flex-1">
                                <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                                    {displayName}
                                </h1>
                                <p className="mb-4 text-lg text-gray-600 sm:text-xl">
                                    {profile.poste ||
                                        resume.title ||
                                        'Poste non renseigné'}
                                </p>

                                <div className="flex flex-wrap justify-center gap-3 text-sm sm:gap-4 sm:text-base">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="mr-1 h-4 w-4" />
                                        {profile.country && profile.city
                                            ? `${profile.country} / ${profile.city}`
                                            : profile.address ||
                                              'Localisation non renseignée'}
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <DollarSign className="mr-1 h-4 w-4" />
                                        {profile.expected_salary || 'N/A'}{' '}
                                        $/mois
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="mr-1 h-4 w-4" />
                                        {profile.experience || 'Exp. N/A'}
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                {profile.phone && (
                                    <a
                                        href={`tel:${profile.phone}`}
                                        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700"
                                    >
                                        <Phone className="mr-2 h-4 w-4" />
                                        Contacter
                                    </a>
                                )}
                                {/* <button
                                    onClick={handleDownloadCV}
                                    className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-6 py-3 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-gray-700"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Imprimer CV
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Onglets de navigation responsive avec design plus sobre */}
                <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md sm:mb-8">
                    <div className="border-b border-gray-200">
                        <nav
                            className="scrollbar-hide flex overflow-x-auto"
                            aria-label="Tabs"
                        >
                            {[
                                { id: 'about', label: 'À propos', icon: User },
                                {
                                    id: 'experience',
                                    label: 'Expérience',
                                    icon: Briefcase,
                                },
                                {
                                    id: 'education',
                                    label: 'Formation',
                                    icon: GraduationCap,
                                },
                                { id: 'contact', label: 'Contact', icon: Mail },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 sm:px-6 sm:text-base ${
                                        activeTab === tab.id
                                            ? 'border-b-2 border-indigo-600 text-indigo-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <tab.icon className="mr-2 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-8">
                    {/* Contenu principal */}
                    <div className="space-y-6 sm:space-y-8 xl:col-span-2">
                        {activeTab === 'about' && (
                            <>
                                {/* Carte d'informations personnelles avec design plus sobre */}
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Informations personnelles
                                        </h3>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                            {[
                                                {
                                                    icon: DollarSign,
                                                    label: 'Salaire souhaité',
                                                    value: `${profile.expected_salary || 'N/A'} $/mois`,
                                                    color: 'text-indigo-600',
                                                },
                                                {
                                                    icon: Clock,
                                                    label: 'Expérience',
                                                    value:
                                                        profile.experience ||
                                                        'Non renseigné',
                                                    color: 'text-green-600',
                                                },
                                                {
                                                    icon: User,
                                                    label: 'Genre',
                                                    value:
                                                        profile.sex ||
                                                        'Non renseigné',
                                                    color: 'text-purple-600',
                                                },
                                                {
                                                    icon: Phone,
                                                    label: 'Téléphone',
                                                    value:
                                                        profile.phone ||
                                                        'Non renseigné',
                                                    color: 'text-yellow-600',
                                                },
                                                {
                                                    icon: Mail,
                                                    label: 'Email',
                                                    value:
                                                        displayEmail ||
                                                        'Non renseigné',
                                                    color: 'text-blue-600',
                                                },
                                                {
                                                    icon: Award,
                                                    label: 'Qualification',
                                                    value:
                                                        profile.qualification ||
                                                        'Non renseigné',
                                                    color: 'text-red-600',
                                                },
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-3 rounded-lg bg-gray-50 p-3 transition-colors duration-200 hover:bg-gray-100 sm:p-4"
                                                >
                                                    <div
                                                        className={`rounded-lg p-2 ${item.color} bg-opacity-10`}
                                                    >
                                                        <item.icon
                                                            className={`h-5 w-5 ${item.color}`}
                                                        />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-xs font-medium text-gray-500 sm:text-sm">
                                                            {item.label}
                                                        </p>
                                                        <p className="text-sm font-semibold break-words text-gray-900 sm:text-base">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {profile.address && (
                                            <div className="mt-4 rounded-lg bg-gray-50 p-3 sm:mt-6 sm:p-4">
                                                <div className="flex items-start space-x-3">
                                                    <div className="bg-opacity-10 rounded-lg bg-gray-600 p-2 text-gray-600">
                                                        <MapPin className="h-5 w-5" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs font-medium text-gray-500 sm:text-sm">
                                                            Adresse
                                                        </p>
                                                        <p className="text-sm font-semibold break-words text-gray-900 sm:text-base">
                                                            {profile.address}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Carte de description avec design plus sobre */}
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            À propos de {displayName}
                                        </h3>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 sm:text-base">
                                            {resume.summary ||
                                                profile.description ||
                                                'Aucune description disponible'}
                                        </p>
                                    </div>
                                </div>

                                {/* Carte de compétences linguistiques avec design plus sobre */}
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Compétences linguistiques
                                        </h3>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm break-words text-gray-700 sm:text-base">
                                                {profile.language ||
                                                    'Aucune compétence linguistique renseignée'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Carte de compétences informatiques avec design plus sobre */}
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Compétences informatiques
                                        </h3>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="space-y-3 sm:space-y-4">
                                            {itSkills && itSkills.length > 0 ? (
                                                itSkills.map(
                                                    (
                                                        skill: any,
                                                        index: number,
                                                    ) => (
                                                        <div
                                                            key={index}
                                                            className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                                                        >
                                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                                <Code className="h-4 w-4 flex-shrink-0 text-indigo-600 sm:h-5 sm:w-5" />
                                                                <span className="text-sm font-medium text-gray-900 sm:text-base">
                                                                    {skill.name}
                                                                </span>
                                                            </div>
                                                            <div className="flex w-full items-center space-x-2 sm:w-auto sm:space-x-3">
                                                                {/* Assuming level is available */}
                                                                {skill.level ? (
                                                                    <>
                                                                        <div className="h-2 flex-1 rounded-full bg-gray-200 sm:w-24 lg:w-32">
                                                                            <div
                                                                                className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                                                                                style={{
                                                                                    width: `${skill.level}%`,
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                        <span className="flex-shrink-0 text-xs font-medium text-gray-500 sm:text-sm">
                                                                            {
                                                                                skill.level
                                                                            }
                                                                            %
                                                                        </span>
                                                                    </>
                                                                ) : (
                                                                    <span className="text-xs text-gray-400 sm:text-sm">
                                                                        Niveau
                                                                        non
                                                                        spécifié
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ),
                                                )
                                            ) : (
                                                <p className="text-sm text-gray-500 sm:text-base">
                                                    Aucune compétence
                                                    informatique renseignée
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Carte de compétences générales avec design plus sobre */}
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Compétences
                                        </h3>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {skills && skills.length > 0 ? (
                                                skills.map(
                                                    (
                                                        skill: any,
                                                        index: number,
                                                    ) => (
                                                        <span
                                                            key={index}
                                                            className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 sm:px-4 sm:py-2 sm:text-sm"
                                                        >
                                                            {typeof skill ===
                                                            'string'
                                                                ? skill
                                                                : skill.name}
                                                        </span>
                                                    ),
                                                )
                                            ) : (
                                                <p className="text-sm text-gray-500 sm:text-base">
                                                    Aucune compétence renseignée
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'experience' && (
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Expérience professionnelle
                                    </h3>
                                </div>
                                <div className="p-4 sm:p-6">
                                    {employments && employments.length > 0 ? (
                                        <div className="space-y-6 sm:space-y-8">
                                            {employments.map(
                                                (
                                                    employment: any,
                                                    index: number,
                                                ) => (
                                                    <div
                                                        key={index}
                                                        className="relative border-l-2 border-gray-200 pb-6 pl-6 last:border-l-0 sm:pb-8 sm:pl-8"
                                                    >
                                                        <div className="absolute top-0 left-0 h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-600 sm:h-4 sm:w-4"></div>
                                                        <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                                            <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
                                                                {
                                                                    employment.position
                                                                }
                                                            </h4>
                                                            <div className="mt-1 flex items-center text-xs text-gray-500 sm:mt-0 sm:text-sm">
                                                                <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                                                                {formatDate(
                                                                    employment.start_date,
                                                                )}{' '}
                                                                -{' '}
                                                                {employment.end_date ||
                                                                    'Présent'}
                                                            </div>
                                                        </div>
                                                        <p className="mb-2 text-sm font-medium text-indigo-600 sm:text-base">
                                                            {employment.company}
                                                        </p>
                                                        <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 sm:text-base">
                                                            {
                                                                employment.description
                                                            }
                                                        </p>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-500 sm:text-base">
                                            Aucune expérience professionnelle
                                            renseignée
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Formation et éducation
                                    </h3>
                                </div>
                                <div className="p-4 sm:p-6">
                                    {educations && educations.length > 0 ? (
                                        <div className="space-y-6 sm:space-y-8">
                                            {educations.map(
                                                (
                                                    education: any,
                                                    index: number,
                                                ) => (
                                                    <div
                                                        key={index}
                                                        className="relative border-l-2 border-gray-200 pb-6 pl-6 last:border-l-0 sm:pb-8 sm:pl-8"
                                                    >
                                                        <div className="absolute top-0 left-0 h-3 w-3 -translate-x-1/2 rounded-full bg-green-600 sm:h-4 sm:w-4"></div>
                                                        <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                                            <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
                                                                {
                                                                    education.degree
                                                                }
                                                            </h4>
                                                            <div className="mt-1 flex items-center text-xs text-gray-500 sm:mt-0 sm:text-sm">
                                                                <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                                                                {formatDate(
                                                                    education.start_date,
                                                                )}{' '}
                                                                -{' '}
                                                                {education.end_date ||
                                                                    'Présent'}
                                                            </div>
                                                        </div>
                                                        <p className="mb-2 text-sm font-medium text-green-600 sm:text-base">
                                                            {education.school}
                                                        </p>
                                                        <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 sm:text-base">
                                                            {
                                                                education.description
                                                            }
                                                        </p>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-500 sm:text-base">
                                            Aucune formation renseignée
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Contactez {displayName}
                                    </h3>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4 sm:space-y-6"
                                    >
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="mb-1 block text-sm font-medium text-gray-700 sm:mb-2"
                                                >
                                                    Nom
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            'name',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:px-4 sm:py-3 sm:text-base"
                                                    placeholder="Votre nom"
                                                />
                                                {errors.name && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="mb-1 block text-sm font-medium text-gray-700 sm:mb-2"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            'email',
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:px-4 sm:py-3 sm:text-base"
                                                    placeholder="Votre email"
                                                />
                                                {errors.email && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="mb-1 block text-sm font-medium text-gray-700 sm:mb-2"
                                            >
                                                Téléphone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:px-4 sm:py-3 sm:text-base"
                                                placeholder="Votre numéro de téléphone"
                                            />
                                            {errors.phone && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="mb-1 block text-sm font-medium text-gray-700 sm:mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setData(
                                                        'message',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:px-4 sm:py-3 sm:text-base"
                                                placeholder="Votre message..."
                                            ></textarea>
                                            {errors.message && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.message}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className={`inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
                                            >
                                                <Send className="mr-2 h-4 w-4" />
                                                {processing
                                                    ? 'Envoi en cours...'
                                                    : 'Envoyer le message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Barre latérale responsive avec design plus sobre */}
                    <div className="space-y-6 sm:space-y-8 xl:col-span-1">
                        {/* Carte de localisation avec design plus sobre */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Localisation
                                </h3>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3 sm:space-y-4">
                                    {profile.address && (
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600" />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Adresse
                                                </p>
                                                <p className="text-sm break-words text-gray-900">
                                                    {profile.address}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {profile.city && (
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600" />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Ville
                                                </p>
                                                <p className="text-sm break-words text-gray-900">
                                                    {profile.city}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {profile.country && (
                                        <div className="flex items-start space-x-3">
                                            <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600" />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Pays
                                                </p>
                                                <p className="text-sm break-words text-gray-900">
                                                    {profile.country}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Carte simplifiée */}
                                <div className="mt-4 flex h-32 items-center justify-center rounded-lg bg-gray-100 sm:mt-6 sm:h-48">
                                    <MapPin className="h-6 w-6 text-gray-400 sm:h-8 sm:w-8" />
                                    <span className="ml-2 text-xs text-gray-500 sm:text-sm">
                                        Carte non disponible
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Carte de réseaux sociaux avec design plus sobre */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Réseaux sociaux
                                </h3>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3">
                                    {linkedin && (
                                        <a
                                            href={linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 rounded-lg bg-blue-50 p-3 transition-colors duration-200 hover:bg-blue-100"
                                        >
                                            <Linkedin className="h-5 w-5 flex-shrink-0 text-blue-600" />
                                            <span className="truncate text-sm font-medium text-gray-900">
                                                LinkedIn
                                            </span>
                                            <ExternalLink className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400" />
                                        </a>
                                    )}

                                    {facebook && (
                                        <a
                                            href={facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 rounded-lg bg-indigo-50 p-3 transition-colors duration-200 hover:bg-indigo-100"
                                        >
                                            <Facebook className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                                            <span className="truncate text-sm font-medium text-gray-900">
                                                Facebook
                                            </span>
                                            <ExternalLink className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400" />
                                        </a>
                                    )}

                                    {instagram && (
                                        <a
                                            href={instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 rounded-lg bg-pink-50 p-3 transition-colors duration-200 hover:bg-pink-100"
                                        >
                                            <Instagram className="h-5 w-5 flex-shrink-0 text-pink-600" />
                                            <span className="truncate text-sm font-medium text-gray-900">
                                                Instagram
                                            </span>
                                            <ExternalLink className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400" />
                                        </a>
                                    )}

                                    {whatsapp && (
                                        <a
                                            href={
                                                whatsapp.startsWith('http')
                                                    ? whatsapp
                                                    : `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 rounded-lg bg-green-50 p-3 transition-colors duration-200 hover:bg-green-100"
                                        >
                                            <MessageCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                                            <span className="truncate text-sm font-medium text-gray-900">
                                                WhatsApp
                                            </span>
                                            <ExternalLink className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400" />
                                        </a>
                                    )}

                                    {socialLinks.length === 0 && (
                                        <p className="text-sm text-gray-500">
                                            Aucun réseau social renseigné
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Carte d'actions rapides avec design plus sobre */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Actions rapides
                                </h3>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3">
                                    {profile.phone && (
                                        <a
                                            href={`tel:${profile.phone}`}
                                            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                                        >
                                            <Phone className="mr-2 h-4 w-4" />
                                            Appeler
                                        </a>
                                    )}

                                    <a
                                        href={`mailto:${displayEmail}`}
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                                    >
                                        <Mail className="mr-2 h-4 w-4" />
                                        Envoyer un email
                                    </a>

                                    {/* <button
                                        onClick={handleDownloadCV}
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Télécharger le CV
                                    </button> */}

                                    {/* Edit route not implemented yet
                                    <Link 
                                        href={`/dashboard/candidat/${user.id}/edit`}
                                        className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 text-sm sm:text-base"
                                    >
                                        <Edit className="h-4 w-4 mr-2" />
                                        Modifier le profil
                                    </Link>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default CandidateShow;

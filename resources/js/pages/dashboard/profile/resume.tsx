import Modal from '@/components/common/Modal';
import AdminLayout from '@/layouts/admin/admin-layout';
import { formatDate } from '@/lib/utils';
import { router, useForm, usePage } from '@inertiajs/react';
import {
    Briefcase,
    CheckCircle,
    Code,
    Edit,
    GraduationCap,
    Plus,
    Trash2,
    User,
} from 'lucide-react';
import React, { useState } from 'react';

interface Employment {
    id?: number;
    position: string;
    company: string;
    start_date: string;
    end_date: string;
    description: string;
    is_current: boolean;
}

interface Education {
    id?: number;
    school: string;
    degree: string;
    field_of_study: string;
    start_date: string;
    end_date: string;
    description: string;
    is_current: boolean;
}

interface ITSkill {
    id?: number;
    name: string;
    level: string;
    last_used: string;
    start_year: string;
    start_month: string;
}

interface ResumeData {
    title: string;
    skills: string[];
    summary: string;
    employments: Employment[];
    educations: Education[];
    it_skills: ITSkill[];
}

const Resume = () => {
    const { props } = usePage();
    const user = props.auth.user;
    const resumeData = (props as any).resume || {
        title: '',
        skills: [],
        summary: '',
        employments: [],
        educations: [],
        it_skills: [],
    };

    // États pour les modales
    const [showTitleModal, setShowTitleModal] = useState(false);
    const [showSkillsModal, setShowSkillsModal] = useState(false);
    const [showEmploymentModal, setShowEmploymentModal] = useState(false);
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showItSkillsModal, setShowItSkillsModal] = useState(false);
    const [showSummaryModal, setShowSummaryModal] = useState(false);

    // État pour l'édition
    const [editingEmployment, setEditingEmployment] =
        useState<Employment | null>(null);
    const [editingEducation, setEditingEducation] = useState<Education | null>(
        null,
    );
    const [editingItSkill, setEditingItSkill] = useState<ITSkill | null>(null);

    // Forms avec useForm d'Inertia
    const titleForm = useForm({
        title: resumeData.title || '',
    });

    const skillsForm = useForm({
        skills: resumeData.skills?.join(', ') || '',
    });

    const employmentForm = useForm<Employment>({
        position: '',
        company: '',
        start_date: '',
        end_date: '',
        description: '',
        is_current: false,
    });

    const educationForm = useForm<Education>({
        school: '',
        degree: '',
        field_of_study: '',
        start_date: '',
        end_date: '',
        description: '',
        is_current: false,
    });

    const itSkillForm = useForm<ITSkill>({
        name: '',
        level: '',
        last_used: '',
        start_year: '',
        start_month: '',
    });

    const summaryForm = useForm({
        summary: resumeData.summary || '',
    });

    // Fonctions de soumission
    const handleTitleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        titleForm.post('/resume/update-title', {
            preserveScroll: true,
            onSuccess: () => {
                setShowTitleModal(false);
            },
        });
    };

    const handleSkillsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        skillsForm.post('/resume/update-skills', {
            preserveScroll: true,
            onSuccess: () => {
                setShowSkillsModal(false);
            },
        });
    };

    const handleEmploymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingEmployment
            ? `/resume/employment/${editingEmployment.id}/update`
            : '/resume/employment/add';

        employmentForm.post(url, {
            preserveScroll: true,
            onSuccess: () => {
                setShowEmploymentModal(false);
                setEditingEmployment(null);
                employmentForm.reset();
            },
        });
    };

    const handleEducationSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingEducation
            ? `/resume/education/${editingEducation.id}/update`
            : '/resume/education/add';

        educationForm.post(url, {
            preserveScroll: true,
            onSuccess: () => {
                setShowEducationModal(false);
                setEditingEducation(null);
                educationForm.reset();
            },
        });
    };

    const handleItSkillSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingItSkill
            ? `/resume/it-skill/${editingItSkill.id}/update`
            : '/resume/it-skill/add';

        itSkillForm.post(url, {
            preserveScroll: true,
            onSuccess: () => {
                setShowItSkillsModal(false);
                setEditingItSkill(null);
                itSkillForm.reset();
            },
        });
    };

    const handleSummarySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        summaryForm.post('/resume/update-summary', {
            preserveScroll: true,
            onSuccess: () => {
                setShowSummaryModal(false);
            },
        });
    };

    // Fonctions pour ouvrir les modales d'édition
    const openEmploymentModal = (employment?: Employment) => {
        if (employment) {
            setEditingEmployment(employment);
            employmentForm.setData(employment);
        } else {
            setEditingEmployment(null);
            employmentForm.reset();
        }
        setShowEmploymentModal(true);
    };

    const openEducationModal = (education?: Education) => {
        if (education) {
            setEditingEducation(education);
            educationForm.setData(education);
        } else {
            setEditingEducation(null);
            educationForm.reset();
        }
        setShowEducationModal(true);
    };

    const openItSkillModal = (skill?: ITSkill) => {
        if (skill) {
            setEditingItSkill(skill);
            itSkillForm.setData(skill);
        } else {
            setEditingItSkill(null);
            itSkillForm.reset();
        }
        setShowItSkillsModal(true);
    };

    // Fonctions de suppression
    const deleteEmployment = (id: number) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette expérience ?')) {
            router.delete(`/resume/employment/${id}/delete`, {
                preserveScroll: true,
            });
        }
    };

    const deleteEducation = (id: number) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette éducation ?')) {
            router.delete(`/resume/education/${id}/delete`, {
                preserveScroll: true,
            });
        }
    };

    const deleteItSkill = (id: number) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette compétence ?')) {
            router.delete(`/resume/it-skill/${id}/delete`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout title="Mon CV">
            <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
                {/* Messages de succès */}
                {titleForm.recentlySuccessful && (
                    <div className="mb-6 flex items-start space-x-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 shadow-md">
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        <p className="flex-1 text-sm font-medium">
                            Titre mis à jour avec succès!
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    {/* Colonne principale */}
                    <div className="space-y-6 xl:col-span-2">
                        {/* Section Titre du CV */}
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Titre du CV
                                </h3>
                                <button
                                    onClick={() => {
                                        titleForm.setData(
                                            'title',
                                            resumeData.title || '',
                                        );
                                        setShowTitleModal(true);
                                    }}
                                    className="text-gray-500 transition-colors hover:text-gray-700"
                                >
                                    <Edit size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700">
                                    {resumeData.title || 'Aucun titre défini'}
                                </p>
                            </div>
                        </div>

                        {/* Section Compétences */}
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Compétences
                                </h3>
                                <button
                                    onClick={() => {
                                        skillsForm.setData(
                                            'skills',
                                            resumeData.skills?.join(', ') || '',
                                        );
                                        setShowSkillsModal(true);
                                    }}
                                    className="text-gray-500 transition-colors hover:text-gray-700"
                                >
                                    <Edit size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills &&
                                    resumeData.skills.length > 0 ? (
                                        resumeData.skills.map(
                                            (skill: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
                                                >
                                                    {skill}
                                                </span>
                                            ),
                                        )
                                    ) : (
                                        <span className="text-gray-500">
                                            Aucune compétence
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Section Expérience */}
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Expérience
                                </h3>
                                <button
                                    onClick={() => openEmploymentModal()}
                                    className="text-gray-500 transition-colors hover:text-gray-700"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                {resumeData.employments &&
                                resumeData.employments.length > 0 ? (
                                    <div className="space-y-6">
                                        {resumeData.employments.map(
                                            (
                                                employment: Employment,
                                                index: number,
                                            ) => (
                                                <div
                                                    key={employment.id || index}
                                                    className="border-l-2 border-gray-300 pb-6 pl-4 last:border-l-0"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-gray-900">
                                                                {
                                                                    employment.position
                                                                }
                                                            </h4>
                                                            <p className="text-gray-600">
                                                                {
                                                                    employment.company
                                                                }
                                                            </p>
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                {formatDate(
                                                                    employment.start_date,
                                                                )}{' '}
                                                                -{' '}
                                                                {employment.is_current
                                                                    ? 'Présent'
                                                                    : formatDate(
                                                                          employment.end_date,
                                                                      )}
                                                            </p>
                                                            <p className="mt-2 text-gray-700">
                                                                {
                                                                    employment.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="ml-4 flex space-x-2">
                                                            <button
                                                                onClick={() =>
                                                                    openEmploymentModal(
                                                                        employment,
                                                                    )
                                                                }
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                <Edit
                                                                    size={16}
                                                                />
                                                            </button>
                                                            {employment.id && (
                                                                <button
                                                                    onClick={() =>
                                                                        deleteEmployment(
                                                                            employment.id!,
                                                                        )
                                                                    }
                                                                    className="text-red-600 hover:text-red-900"
                                                                >
                                                                    <Trash2
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">
                                        Aucune expérience
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Section Éducation */}
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Éducation
                                </h3>
                                <button
                                    onClick={() => openEducationModal()}
                                    className="text-gray-500 transition-colors hover:text-gray-700"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                {resumeData.educations &&
                                resumeData.educations.length > 0 ? (
                                    <div className="space-y-6">
                                        {resumeData.educations.map(
                                            (
                                                education: Education,
                                                index: number,
                                            ) => (
                                                <div
                                                    key={education.id || index}
                                                    className="border-l-2 border-gray-300 pb-6 pl-4 last:border-l-0"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-gray-900">
                                                                {
                                                                    education.degree
                                                                }
                                                            </h4>
                                                            <p className="text-gray-600">
                                                                {
                                                                    education.school
                                                                }
                                                            </p>
                                                            {education.field_of_study && (
                                                                <p className="text-sm text-gray-500">
                                                                    {
                                                                        education.field_of_study
                                                                    }
                                                                </p>
                                                            )}
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                {formatDate(
                                                                    education.start_date,
                                                                )}{' '}
                                                                -{' '}
                                                                {education.is_current
                                                                    ? 'Présent'
                                                                    : formatDate(
                                                                          education.end_date,
                                                                      )}
                                                            </p>
                                                            <p className="mt-2 text-gray-700">
                                                                {
                                                                    education.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="ml-4 flex space-x-2">
                                                            <button
                                                                onClick={() =>
                                                                    openEducationModal(
                                                                        education,
                                                                    )
                                                                }
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                <Edit
                                                                    size={16}
                                                                />
                                                            </button>
                                                            {education.id && (
                                                                <button
                                                                    onClick={() =>
                                                                        deleteEducation(
                                                                            education.id!,
                                                                        )
                                                                    }
                                                                    className="text-red-600 hover:text-red-900"
                                                                >
                                                                    <Trash2
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">
                                        Aucune éducation
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Section Compétences Informatiques */}
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Compétences Informatiques
                                </h3>
                                <button
                                    onClick={() => openItSkillModal()}
                                    className="text-gray-500 transition-colors hover:text-gray-700"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                {resumeData.it_skills &&
                                resumeData.it_skills.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                        Compétence
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                        Niveau
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                        Dernière utilisation
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                        Expérience depuis
                                                    </th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {resumeData.it_skills.map(
                                                    (
                                                        skill: ITSkill,
                                                        index: number,
                                                    ) => (
                                                        <tr
                                                            key={
                                                                skill.id ||
                                                                index
                                                            }
                                                        >
                                                            <td className="px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-900">
                                                                {skill.name}
                                                            </td>
                                                            <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-500">
                                                                {skill.level}
                                                            </td>
                                                            <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-500">
                                                                {
                                                                    skill.last_used
                                                                }
                                                            </td>
                                                            <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-500">
                                                                {
                                                                    skill.start_month
                                                                }{' '}
                                                                {
                                                                    skill.start_year
                                                                }
                                                            </td>
                                                            <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-500">
                                                                <div className="flex space-x-2">
                                                                    <button
                                                                        onClick={() =>
                                                                            openItSkillModal(
                                                                                skill,
                                                                            )
                                                                        }
                                                                        className="text-indigo-600 hover:text-indigo-900"
                                                                    >
                                                                        <Edit
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                    </button>
                                                                    {skill.id && (
                                                                        <button
                                                                            onClick={() =>
                                                                                deleteItSkill(
                                                                                    skill.id!,
                                                                                )
                                                                            }
                                                                            className="text-red-600 hover:text-red-900"
                                                                        >
                                                                            <Trash2
                                                                                size={
                                                                                    16
                                                                                }
                                                                            />
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ),
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className="text-gray-500">
                                        Aucune compétence informatique
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Section Résumé */}
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Résumé du profil
                                </h3>
                                <button
                                    onClick={() => {
                                        summaryForm.setData(
                                            'summary',
                                            resumeData.summary || '',
                                        );
                                        setShowSummaryModal(true);
                                    }}
                                    className="text-gray-500 transition-colors hover:text-gray-700"
                                >
                                    <Edit size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="whitespace-pre-line text-gray-700">
                                    {resumeData.summary ||
                                        'Aucun résumé défini'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne latérale */}
                    <div className="space-y-6 xl:col-span-1">
                        {/* Actions */}
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                Actions
                            </h3>
                            <button
                                onClick={() => {
                                    router.post(
                                        '/resume/toggle-active',
                                        {},
                                        {
                                            preserveScroll: true,
                                        },
                                    );
                                }}
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                            >
                                {(user as any).is_active
                                    ? 'Retirer mon CV'
                                    : 'Publier mon CV'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal Titre */}
                {showTitleModal && (
                    <Modal
                        title="Titre du CV"
                        icon={<Briefcase className="h-6 w-6 text-indigo-600" />}
                        onClose={() => setShowTitleModal(false)}
                        onSubmit={handleTitleSubmit}
                        processing={titleForm.processing}
                    >
                        <p className="mb-4 text-sm text-gray-600">
                            C'est la première chose que les recruteurs
                            remarquent dans votre profil. Décrivez brièvement ce
                            qui vous rend unique.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Titre
                                </label>
                                <textarea
                                    id="title"
                                    rows={4}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Ex: Développeur Full Stack chez Google"
                                    value={titleForm.data.title}
                                    onChange={(e) =>
                                        titleForm.setData(
                                            'title',
                                            e.target.value,
                                        )
                                    }
                                />
                                {titleForm.errors.title && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {titleForm.errors.title}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}

                {/* Modal Compétences */}
                {showSkillsModal && (
                    <Modal
                        title="Compétences"
                        icon={<Code className="h-6 w-6 text-purple-600" />}
                        onClose={() => setShowSkillsModal(false)}
                        onSubmit={handleSkillsSubmit}
                        processing={skillsForm.processing}
                    >
                        <p className="mb-4 text-sm text-gray-600">
                            Listez vos compétences séparées par des virgules :
                        </p>
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="skills"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Compétences
                                </label>
                                <input
                                    id="skills"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                                    placeholder="Ex : Leadership, Management, Communication"
                                    value={skillsForm.data.skills}
                                    onChange={(e) =>
                                        skillsForm.setData(
                                            'skills',
                                            e.target.value,
                                        )
                                    }
                                />
                                <div className="mt-2 text-xs text-gray-500">
                                    {
                                        skillsForm.data.skills
                                            .split(',')
                                            .filter(
                                                (skill) => skill.trim() !== '',
                                            ).length
                                    }{' '}
                                    compétence(s) saisie(s)
                                </div>
                                {skillsForm.errors.skills && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {skillsForm.errors.skills}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}

                {/* Modal Expérience */}
                {showEmploymentModal && (
                    <Modal
                        title={
                            editingEmployment
                                ? "Modifier l'expérience"
                                : 'Ajouter une expérience'
                        }
                        icon={<Briefcase className="h-6 w-6 text-green-600" />}
                        onClose={() => {
                            setShowEmploymentModal(false);
                            setEditingEmployment(null);
                            employmentForm.reset();
                        }}
                        onSubmit={handleEmploymentSubmit}
                        processing={employmentForm.processing}
                        size="lg"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="position"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Poste
                                </label>
                                <input
                                    id="position"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                    placeholder="Poste"
                                    value={employmentForm.data.position}
                                    onChange={(e) =>
                                        employmentForm.setData(
                                            'position',
                                            e.target.value,
                                        )
                                    }
                                />
                                {employmentForm.errors.position && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {employmentForm.errors.position}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Organisation
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                    placeholder="Organisation"
                                    value={employmentForm.data.company}
                                    onChange={(e) =>
                                        employmentForm.setData(
                                            'company',
                                            e.target.value,
                                        )
                                    }
                                />
                                {employmentForm.errors.company && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {employmentForm.errors.company}
                                    </p>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Est-ce que vous y travaillez actuellement ?
                                </label>
                                <div className="mt-2 flex space-x-4">
                                    <div className="flex items-center">
                                        <input
                                            id="is_current_yes"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                                            checked={
                                                employmentForm.data.is_current
                                            }
                                            onChange={() =>
                                                employmentForm.setData(
                                                    'is_current',
                                                    true,
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="is_current_yes"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Oui
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="is_current_no"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                                            checked={
                                                !employmentForm.data.is_current
                                            }
                                            onChange={() =>
                                                employmentForm.setData(
                                                    'is_current',
                                                    false,
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="is_current_no"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Non
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="start_date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Date de début
                                </label>
                                <input
                                    id="start_date"
                                    type="date"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                    value={employmentForm.data.start_date}
                                    onChange={(e) =>
                                        employmentForm.setData(
                                            'start_date',
                                            e.target.value,
                                        )
                                    }
                                />
                                {employmentForm.errors.start_date && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {employmentForm.errors.start_date}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="end_date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Date de fin
                                </label>
                                <input
                                    id="end_date"
                                    type="date"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                    value={employmentForm.data.end_date}
                                    onChange={(e) =>
                                        employmentForm.setData(
                                            'end_date',
                                            e.target.value,
                                        )
                                    }
                                    disabled={employmentForm.data.is_current}
                                />
                                {employmentForm.errors.end_date && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {employmentForm.errors.end_date}
                                    </p>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                    placeholder="Description du poste"
                                    value={employmentForm.data.description}
                                    onChange={(e) =>
                                        employmentForm.setData(
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                />
                                {employmentForm.errors.description && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {employmentForm.errors.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}

                {/* Modal Éducation */}
                {showEducationModal && (
                    <Modal
                        title={
                            editingEducation
                                ? "Modifier l'éducation"
                                : 'Ajouter une éducation'
                        }
                        icon={
                            <GraduationCap className="h-6 w-6 text-indigo-600" />
                        }
                        onClose={() => {
                            setShowEducationModal(false);
                            setEditingEducation(null);
                            educationForm.reset();
                        }}
                        onSubmit={handleEducationSubmit}
                        processing={educationForm.processing}
                        size="lg"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="school"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Établissement
                                </label>
                                <input
                                    id="school"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Établissement"
                                    value={educationForm.data.school}
                                    onChange={(e) =>
                                        educationForm.setData(
                                            'school',
                                            e.target.value,
                                        )
                                    }
                                />
                                {educationForm.errors.school && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {educationForm.errors.school}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="degree"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Diplôme
                                </label>
                                <input
                                    id="degree"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Diplôme"
                                    value={educationForm.data.degree}
                                    onChange={(e) =>
                                        educationForm.setData(
                                            'degree',
                                            e.target.value,
                                        )
                                    }
                                />
                                {educationForm.errors.degree && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {educationForm.errors.degree}
                                    </p>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="field_of_study"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Domaine d'étude
                                </label>
                                <input
                                    id="field_of_study"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Domaine d'étude"
                                    value={educationForm.data.field_of_study}
                                    onChange={(e) =>
                                        educationForm.setData(
                                            'field_of_study',
                                            e.target.value,
                                        )
                                    }
                                />
                                {educationForm.errors.field_of_study && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {educationForm.errors.field_of_study}
                                    </p>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Est-ce votre éducation actuelle ?
                                </label>
                                <div className="mt-2 flex space-x-4">
                                    <div className="flex items-center">
                                        <input
                                            id="edu_is_current_yes"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            checked={
                                                educationForm.data.is_current
                                            }
                                            onChange={() =>
                                                educationForm.setData(
                                                    'is_current',
                                                    true,
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="edu_is_current_yes"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Oui
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="edu_is_current_no"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            checked={
                                                !educationForm.data.is_current
                                            }
                                            onChange={() =>
                                                educationForm.setData(
                                                    'is_current',
                                                    false,
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="edu_is_current_no"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Non
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="edu_start_date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Début de l'étude
                                </label>
                                <input
                                    id="edu_start_date"
                                    type="date"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={educationForm.data.start_date}
                                    onChange={(e) =>
                                        educationForm.setData(
                                            'start_date',
                                            e.target.value,
                                        )
                                    }
                                />
                                {educationForm.errors.start_date && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {educationForm.errors.start_date}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="edu_end_date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Fin de l'étude
                                </label>
                                <input
                                    id="edu_end_date"
                                    type="date"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={educationForm.data.end_date}
                                    onChange={(e) =>
                                        educationForm.setData(
                                            'end_date',
                                            e.target.value,
                                        )
                                    }
                                    disabled={educationForm.data.is_current}
                                />
                                {educationForm.errors.end_date && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {educationForm.errors.end_date}
                                    </p>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="edu_description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="edu_description"
                                    rows={4}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Description de l'étude"
                                    value={educationForm.data.description}
                                    onChange={(e) =>
                                        educationForm.setData(
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                />
                                {educationForm.errors.description && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {educationForm.errors.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}

                {/* Modal Compétences Informatiques */}
                {showItSkillsModal && (
                    <Modal
                        title={
                            editingItSkill
                                ? 'Modifier la compétence'
                                : 'Ajouter une compétence informatique'
                        }
                        icon={<Code className="h-6 w-6 text-yellow-600" />}
                        onClose={() => {
                            setShowItSkillsModal(false);
                            setEditingItSkill(null);
                            itSkillForm.reset();
                        }}
                        onSubmit={handleItSkillSubmit}
                        processing={itSkillForm.processing}
                        size="lg"
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="it_skill_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Compétence
                                </label>
                                <input
                                    id="it_skill_name"
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                                    placeholder="Compétence"
                                    value={itSkillForm.data.name}
                                    onChange={(e) =>
                                        itSkillForm.setData(
                                            'name',
                                            e.target.value,
                                        )
                                    }
                                />
                                {itSkillForm.errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {itSkillForm.errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="it_skill_level"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Niveau
                                </label>
                                <select
                                    id="it_skill_level"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                                    value={itSkillForm.data.level}
                                    onChange={(e) =>
                                        itSkillForm.setData(
                                            'level',
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="Débutant">Débutant</option>
                                    <option value="Intermédiaire">
                                        Intermédiaire
                                    </option>
                                    <option value="Avancé">Avancé</option>
                                    <option value="Expert">Expert</option>
                                </select>
                                {itSkillForm.errors.level && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {itSkillForm.errors.level}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="it_skill_last_used"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Dernière utilisation
                                </label>
                                <select
                                    id="it_skill_last_used"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                                    value={itSkillForm.data.last_used}
                                    onChange={(e) =>
                                        itSkillForm.setData(
                                            'last_used',
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="">Sélectionner</option>
                                    {Array.from(
                                        { length: 10 },
                                        (_, i) => new Date().getFullYear() - i,
                                    ).map((year) => (
                                        <option
                                            key={year}
                                            value={year.toString()}
                                        >
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                {itSkillForm.errors.last_used && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {itSkillForm.errors.last_used}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="it_skill_start_year"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Année de début
                                </label>
                                <select
                                    id="it_skill_start_year"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                                    value={itSkillForm.data.start_year}
                                    onChange={(e) =>
                                        itSkillForm.setData(
                                            'start_year',
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="">Sélectionner</option>
                                    {Array.from(
                                        { length: 30 },
                                        (_, i) => new Date().getFullYear() - i,
                                    ).map((year) => (
                                        <option
                                            key={year}
                                            value={year.toString()}
                                        >
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                {itSkillForm.errors.start_year && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {itSkillForm.errors.start_year}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="it_skill_start_month"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mois de début
                                </label>
                                <select
                                    id="it_skill_start_month"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                                    value={itSkillForm.data.start_month}
                                    onChange={(e) =>
                                        itSkillForm.setData(
                                            'start_month',
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="Janvier">Janvier</option>
                                    <option value="Février">Février</option>
                                    <option value="Mars">Mars</option>
                                    <option value="Avril">Avril</option>
                                    <option value="Mai">Mai</option>
                                    <option value="Juin">Juin</option>
                                    <option value="Juillet">Juillet</option>
                                    <option value="Août">Août</option>
                                    <option value="Septembre">Septembre</option>
                                    <option value="Octobre">Octobre</option>
                                    <option value="Novembre">Novembre</option>
                                    <option value="Décembre">Décembre</option>
                                </select>
                                {itSkillForm.errors.start_month && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {itSkillForm.errors.start_month}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}

                {/* Modal Résumé */}
                {showSummaryModal && (
                    <Modal
                        title="Résumé du profil"
                        icon={<User className="h-6 w-6 text-pink-600" />}
                        onClose={() => setShowSummaryModal(false)}
                        onSubmit={handleSummarySubmit}
                        processing={summaryForm.processing}
                    >
                        <p className="mb-4 text-sm text-gray-600">
                            Votre résumé de profil doit mentionner les points
                            forts de votre carrière et de votre formation, vos
                            intérêts professionnels et le type de carrière que
                            vous recherchez.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="summary"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Résumé
                                </label>
                                <textarea
                                    id="summary"
                                    rows={6}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                                    placeholder="Décrivez votre parcours professionnel..."
                                    value={summaryForm.data.summary}
                                    onChange={(e) =>
                                        summaryForm.setData(
                                            'summary',
                                            e.target.value,
                                        )
                                    }
                                />
                                {summaryForm.errors.summary && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {summaryForm.errors.summary}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </AdminLayout>
    );
};

export default Resume;

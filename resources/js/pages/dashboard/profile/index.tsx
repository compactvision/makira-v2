// resources/js/Pages/Profile.jsx
import AdminLayout from '@/layouts/admin/admin-layout';
import { router, useForm, usePage } from '@inertiajs/react';
import {
    Briefcase,
    Calendar,
    Camera,
    DollarSign,
    Edit,
    Facebook,
    Globe,
    GraduationCap,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Save,
    User,
} from 'lucide-react';
import React from 'react';

const Profile = () => {
    const { props } = usePage();
    const user = props.auth.user;
    const userProfile = (props as any).userProfile || {};
    const userSocialLinks = (props as any).socialLinks || {};

    // Form pour le profil principal
    const profileForm = useForm({
        name: userProfile.name || user.name || '',
        birthDate: userProfile.birth_date || '',
        sex: userProfile.sex || '',
        status: userProfile.status || '',
        phone: userProfile.phone || '',
        email: userProfile.email || user.email || '',
        website: userProfile.website || '',
        qualification: userProfile.qualification || '',
        language: userProfile.language || '',
        jobCategory: userProfile.job_category || '',
        experience: userProfile.experience || '',
        currentSalary: userProfile.current_salary || '',
        expectedSalary: userProfile.expected_salary || '',
        country: userProfile.country || '',
        city: userProfile.city || '',
        postcode: userProfile.postcode || '',
        address: userProfile.address || '',
        description: userProfile.description || '',
    });

    // Form pour les liens sociaux
    const socialForm = useForm({
        facebook: userSocialLinks.facebook?.url || '',
        linkedin: userSocialLinks.linkedin?.url || '',
        whatsapp: userSocialLinks.whatsapp?.url || '',
        instagram: userSocialLinks.instagram?.url || '',
    });

    // State for photo upload
    const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
    const photoInputRef = React.useRef<HTMLInputElement>(null);

    // Handle photo selection
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            // Upload photo using router.post with FormData
            const formData = new FormData();
            formData.append('photo', file);

            router.post('/user-profile/update-photo', formData, {
                preserveScroll: true,
                onSuccess: () => {
                    // Reload page to get updated photo from server
                    router.reload({ only: ['auth'] });
                },
                onError: () => {
                    setPhotoPreview(null);
                },
            });
        }
    };

    // Trigger file input click
    const handlePhotoButtonClick = () => {
        photoInputRef.current?.click();
    };

    // Fonction pour soumettre le formulaire de profil
    const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        profileForm.post('/user-profile/update', {
            preserveScroll: true,
            onSuccess: () => {
                // Les données sont automatiquement mises à jour par Inertia
            },
        });
    };

    // Fonction pour soumettre les liens sociaux
    const handleSocialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socialForm.post('/social-links/update', {
            preserveScroll: true,
            onSuccess: () => {
                // Les données sont automatiquement mises à jour par Inertia
            },
        });
    };

    return (
        <AdminLayout title="Mon profil">
            <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* En-tête avec photo de profil */}
                <div className="mb-6 overflow-hidden rounded-xl bg-white shadow-md">
                    <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <div className="absolute -bottom-12 left-6">
                            <div className="relative">
                                <img
                                    src={
                                        photoPreview ||
                                        userProfile.photo ||
                                        user.avatar ||
                                        `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`
                                    }
                                    alt="Photo de profil"
                                    className="h-24 w-24 rounded-full border-4 border-white object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={handlePhotoButtonClick}
                                    className="absolute right-0 bottom-0 rounded-full bg-indigo-600 p-1 text-white shadow-md transition-colors hover:bg-indigo-700"
                                >
                                    <Camera size={16} />
                                </button>
                                <input
                                    ref={photoInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-14 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {profileForm.data.name || 'Nom non défini'}
                                </h1>
                                <p className="text-gray-600">
                                    {profileForm.data.jobCategory ||
                                        'Poste non défini'}
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <button
                                    type="button"
                                    onClick={handlePhotoButtonClick}
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                >
                                    <Edit size={16} className="mr-2" />
                                    Modifier la photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Formulaire de profil */}
                    <div className="lg:col-span-2">
                        <div className="overflow-hidden rounded-xl bg-white shadow-md">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                                <h2 className="text-xl font-semibold text-white">
                                    Informations de base
                                </h2>
                            </div>
                            <form
                                onSubmit={handleProfileSubmit}
                                className="p-6"
                            >
                                {profileForm.recentlySuccessful && (
                                    <div className="mb-4 rounded-md border border-green-400 bg-green-100 p-4 text-green-700">
                                        Votre profil a été mis à jour avec
                                        succès!
                                    </div>
                                )}

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Nom complet */}
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Votre nom complet
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={profileForm.data.name}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'name',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Jean Dupont"
                                            />
                                        </div>
                                        {profileForm.errors.name && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Date de naissance */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Votre date de naissance
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Calendar className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="date"
                                                value={
                                                    profileForm.data.birthDate
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'birthDate',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.birthDate ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {profileForm.errors.birthDate && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.birthDate}
                                            </p>
                                        )}
                                    </div>

                                    {/* Sexe */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Sexe
                                        </label>
                                        <select
                                            value={profileForm.data.sex}
                                            onChange={(e) =>
                                                profileForm.setData(
                                                    'sex',
                                                    e.target.value,
                                                )
                                            }
                                            className={`block w-full rounded-md border px-3 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.sex ? 'border-red-500' : 'border-gray-300'}`}
                                        >
                                            <option value="">
                                                Sélectionner
                                            </option>
                                            <option value="Homme">Homme</option>
                                            <option value="Femme">Femme</option>
                                        </select>
                                        {profileForm.errors.sex && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.sex}
                                            </p>
                                        )}
                                    </div>

                                    {/* Statut marital */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Statut marital
                                        </label>
                                        <select
                                            value={profileForm.data.status}
                                            onChange={(e) =>
                                                profileForm.setData(
                                                    'status',
                                                    e.target.value,
                                                )
                                            }
                                            className={`block w-full rounded-md border px-3 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.status ? 'border-red-500' : 'border-gray-300'}`}
                                        >
                                            <option value="">
                                                Sélectionner
                                            </option>
                                            <option value="Marié">Marié</option>
                                            <option value="Célibataire">
                                                Célibataire
                                            </option>
                                            <option value="Divorcé">
                                                Divorcé
                                            </option>
                                        </select>
                                        {profileForm.errors.status && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.status}
                                            </p>
                                        )}
                                    </div>

                                    {/* Téléphone */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Téléphone
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Phone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={profileForm.data.phone}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="(251) 1234-456-7890"
                                            />
                                        </div>
                                        {profileForm.errors.phone && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Adresse email
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                value={profileForm.data.email}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="jean.dupont@example.com"
                                            />
                                        </div>
                                        {profileForm.errors.email && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Site web */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Site Web
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Globe className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={profileForm.data.website}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'website',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.website ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="https://example.com"
                                            />
                                        </div>
                                        {profileForm.errors.website && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.website}
                                            </p>
                                        )}
                                    </div>

                                    {/* Qualification */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Qualification
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <GraduationCap className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={
                                                    profileForm.data
                                                        .qualification
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'qualification',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.qualification ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Master en informatique"
                                            />
                                        </div>
                                        {profileForm.errors.qualification && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {
                                                    profileForm.errors
                                                        .qualification
                                                }
                                            </p>
                                        )}
                                    </div>

                                    {/* Langue */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Langue
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Globe className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={
                                                    profileForm.data.language
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'language',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.language ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Français, Anglais"
                                            />
                                        </div>
                                        {profileForm.errors.language && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.language}
                                            </p>
                                        )}
                                    </div>

                                    {/* Catégorie d'emploi */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Catégorie d'emploi
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Briefcase className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={
                                                    profileForm.data.jobCategory
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'jobCategory',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.jobCategory ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Informatique & Logiciel"
                                            />
                                        </div>
                                        {profileForm.errors.jobCategory && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.jobCategory}
                                            </p>
                                        )}
                                    </div>

                                    {/* Expérience */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Expérience
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Briefcase className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={
                                                    profileForm.data.experience
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'experience',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="5 ans"
                                            />
                                        </div>
                                        {profileForm.errors.experience && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.experience}
                                            </p>
                                        )}
                                    </div>

                                    {/* Salaire actuel */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Salaire actuel
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <DollarSign className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                value={
                                                    profileForm.data
                                                        .currentSalary
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'currentSalary',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.currentSalary ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="65000"
                                            />
                                        </div>
                                        {profileForm.errors.currentSalary && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {
                                                    profileForm.errors
                                                        .currentSalary
                                                }
                                            </p>
                                        )}
                                    </div>

                                    {/* Salaire attendu */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Salaire attendu
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <DollarSign className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                value={
                                                    profileForm.data
                                                        .expectedSalary
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'expectedSalary',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.expectedSalary ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="75000"
                                            />
                                        </div>
                                        {profileForm.errors.expectedSalary && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {
                                                    profileForm.errors
                                                        .expectedSalary
                                                }
                                            </p>
                                        )}
                                    </div>

                                    {/* Pays */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Pays
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Globe className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={profileForm.data.country}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'country',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.country ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="France"
                                            />
                                        </div>
                                        {profileForm.errors.country && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.country}
                                            </p>
                                        )}
                                    </div>

                                    {/* Ville */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Ville
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={profileForm.data.city}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'city',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Paris"
                                            />
                                        </div>
                                        {profileForm.errors.city && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.city}
                                            </p>
                                        )}
                                    </div>

                                    {/* Code postal */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Code postal
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={
                                                    profileForm.data.postcode
                                                }
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'postcode',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.postcode ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="75001"
                                            />
                                        </div>
                                        {profileForm.errors.postcode && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.postcode}
                                            </p>
                                        )}
                                    </div>

                                    {/* Adresse complète */}
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Adresse complète
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start pt-3 pl-3">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={profileForm.data.address}
                                                onChange={(e) =>
                                                    profileForm.setData(
                                                        'address',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="123 Rue de la République, 75001 Paris, France"
                                            />
                                        </div>
                                        {profileForm.errors.address && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.address}
                                            </p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            value={profileForm.data.description}
                                            onChange={(e) =>
                                                profileForm.setData(
                                                    'description',
                                                    e.target.value,
                                                )
                                            }
                                            rows={4}
                                            className={`block w-full rounded-md border px-3 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${profileForm.errors.description ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Décrivez-vous..."
                                        />
                                        {profileForm.errors.description && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {profileForm.errors.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={profileForm.processing}
                                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <Save size={18} className="mr-2" />
                                        {profileForm.processing
                                            ? 'Enregistrement en cours...'
                                            : 'Enregistrer les modifications'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Formulaire des réseaux sociaux */}
                    <div className="lg:col-span-1">
                        <div className="overflow-hidden rounded-xl bg-white shadow-md">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                                <h2 className="text-xl font-semibold text-white">
                                    Réseaux sociaux
                                </h2>
                            </div>
                            <form onSubmit={handleSocialSubmit} className="p-6">
                                {socialForm.recentlySuccessful && (
                                    <div className="mb-4 rounded-md border border-green-400 bg-green-100 p-4 text-green-700">
                                        Vos liens sociaux ont été mis à jour
                                        avec succès!
                                    </div>
                                )}

                                <div className="space-y-4">
                                    {/* Facebook */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Facebook
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Facebook className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={socialForm.data.facebook}
                                                onChange={(e) =>
                                                    socialForm.setData(
                                                        'facebook',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${socialForm.errors.facebook ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="https://www.facebook.com/"
                                            />
                                        </div>
                                        {socialForm.errors.facebook && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {socialForm.errors.facebook}
                                            </p>
                                        )}
                                    </div>

                                    {/* LinkedIn */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            LinkedIn
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Linkedin className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={socialForm.data.linkedin}
                                                onChange={(e) =>
                                                    socialForm.setData(
                                                        'linkedin',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${socialForm.errors.linkedin ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="https://www.linkedin.com/in/"
                                            />
                                        </div>
                                        {socialForm.errors.linkedin && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {socialForm.errors.linkedin}
                                            </p>
                                        )}
                                    </div>

                                    {/* WhatsApp */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            WhatsApp
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Phone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={socialForm.data.whatsapp}
                                                onChange={(e) =>
                                                    socialForm.setData(
                                                        'whatsapp',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${socialForm.errors.whatsapp ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="+33 6 12 34 56 78"
                                            />
                                        </div>
                                        {socialForm.errors.whatsapp && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {socialForm.errors.whatsapp}
                                            </p>
                                        )}
                                    </div>

                                    {/* Instagram */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Instagram
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Instagram className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={
                                                    socialForm.data.instagram
                                                }
                                                onChange={(e) =>
                                                    socialForm.setData(
                                                        'instagram',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`block w-full rounded-md border py-3 pr-3 pl-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${socialForm.errors.instagram ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="https://www.instagram.com/"
                                            />
                                        </div>
                                        {socialForm.errors.instagram && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {socialForm.errors.instagram}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={socialForm.processing}
                                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <Save size={18} className="mr-2" />
                                        {socialForm.processing
                                            ? 'Enregistrement en cours...'
                                            : 'Enregistrer les modifications'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Profile;

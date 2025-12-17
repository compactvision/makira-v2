import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';

import { Checkbox } from '@/components/ui/checkbox';
import {
    faBriefcase,
    faChartLine,
    faEnvelope,
    faEye,
    faEyeSlash,
    faLock,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    // Fonction pour vérifier la force du mot de passe
    const checkPasswordStrength = (password: string) => {
        if (password.length === 0) {
            setPasswordStrength('');
            return;
        }

        // Calcul simple de la force du mot de passe
        let strength = 0;

        // Vérification de la longueur
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;

        // Vérifications de la variété des caractères
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        // Mise à jour de l'UI en fonction de la force
        if (strength <= 2) {
            setPasswordStrength('weak');
        } else if (strength <= 4) {
            setPasswordStrength('medium');
        } else {
            setPasswordStrength('strong');
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 p-4">
            <Head title="S'inscrire" />

            {/* Formes flottantes en arrière-plan */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 opacity-10"></div>
                <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/2 translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-br from-pink-400 to-red-500 opacity-10"></div>
                <div className="absolute top-1/2 left-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-10"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl">
                <div className="bg-opacity-95 overflow-hidden rounded-3xl bg-white shadow-2xl backdrop-blur-lg">
                    <div className="grid md:grid-cols-2">
                        {/* Section gauche - Informations */}
                        <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-8 md:flex lg:p-12">
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <div className="relative z-10 text-center text-white">
                                <div className="mb-8">
                                    <img
                                        src="/images/logo.png"
                                        alt="Makira"
                                        className="mx-auto mb-6 h-20"
                                    />
                                    <h1 className="mb-4 text-3xl font-bold">
                                        Rejoignez Makira
                                    </h1>
                                    <p className="text-lg opacity-90">
                                        Créez votre compte et accédez à des
                                        opportunités uniques
                                    </p>
                                </div>

                                <div className="mt-12 space-y-6">
                                    <div className="flex transform items-start space-x-4 transition-transform hover:scale-105">
                                        <div className="bg-opacity-20 rounded-full bg-white p-3">
                                            <FontAwesomeIcon
                                                icon={faUserPlus}
                                                className="text-xl"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold">
                                                Inscription simple
                                            </h3>
                                            <p className="opacity-80">
                                                Créez votre compte en quelques
                                                étapes seulement
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex transform items-start space-x-4 transition-transform hover:scale-105">
                                        <div className="bg-opacity-20 rounded-full bg-white p-3">
                                            <FontAwesomeIcon
                                                icon={faBriefcase}
                                                className="text-xl"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold">
                                                Opportunités de carrière
                                            </h3>
                                            <p className="opacity-80">
                                                Accédez à des offres d'emploi
                                                adaptées à votre profil
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex transform items-start space-x-4 transition-transform hover:scale-105">
                                        <div className="bg-opacity-20 rounded-full bg-white p-3">
                                            <FontAwesomeIcon
                                                icon={faChartLine}
                                                className="text-xl"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold">
                                                Suivi de progression
                                            </h3>
                                            <p className="opacity-80">
                                                Suivez l'évolution de vos
                                                candidatures en temps réel
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section droite - Formulaire */}
                        <div className="p-8 lg:p-12">
                            <div className="mx-auto max-w-md">
                                <div className="mb-8 text-center">
                                    <h2 className="mb-2 text-3xl font-bold text-gray-800">
                                        Créer un compte
                                    </h2>
                                    <p className="text-gray-600">
                                        Rejoignez notre communauté dès
                                        aujourd'hui
                                    </p>
                                </div>

                                <form onSubmit={submit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Nom complet
                                        </Label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    className="text-gray-400"
                                                />
                                            </div>
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="name"
                                                name="name"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        'name',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Jean Dupont"
                                                className="rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                        </div>
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Adresse email
                                        </Label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className="text-gray-400"
                                                />
                                            </div>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                tabIndex={2}
                                                autoComplete="email"
                                                name="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="exemple@email.com"
                                                className="rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                        </div>
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="password"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Mot de passe
                                        </Label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <FontAwesomeIcon
                                                    icon={faLock}
                                                    className="text-gray-400"
                                                />
                                            </div>
                                            <Input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                required
                                                tabIndex={3}
                                                autoComplete="new-password"
                                                name="password"
                                                value={data.password}
                                                placeholder="•••••••"
                                                onChange={(e) => {
                                                    setData(
                                                        'password',
                                                        e.target.value,
                                                    );
                                                    checkPasswordStrength(
                                                        e.target.value,
                                                    );
                                                }}
                                                className="rounded-lg border border-gray-300 py-3 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword,
                                                        )
                                                    }
                                                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={
                                                            showPassword
                                                                ? faEyeSlash
                                                                : faEye
                                                        }
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Indicateur de force du mot de passe */}
                                        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className={`h-full transition-all duration-300 ${
                                                    passwordStrength === 'weak'
                                                        ? 'w-1/3 bg-red-500'
                                                        : passwordStrength ===
                                                            'medium'
                                                          ? 'w-2/3 bg-yellow-500'
                                                          : passwordStrength ===
                                                              'strong'
                                                            ? 'w-full bg-green-500'
                                                            : ''
                                                }`}
                                            ></div>
                                        </div>
                                        <div className="mt-1 text-xs text-gray-500">
                                            {passwordStrength === 'weak' &&
                                                'Force: Faible'}
                                            {passwordStrength === 'medium' &&
                                                'Force: Moyenne'}
                                            {passwordStrength === 'strong' &&
                                                'Force: Forte'}
                                        </div>

                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="password_confirmation"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Confirmer le mot de passe
                                        </Label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <FontAwesomeIcon
                                                    icon={faLock}
                                                    className="text-gray-400"
                                                />
                                            </div>
                                            <Input
                                                id="password_confirmation"
                                                type={
                                                    showConfirmPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                required
                                                tabIndex={4}
                                                autoComplete="new-password"
                                                name="password_confirmation"
                                                value={
                                                    data.password_confirmation
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'password_confirmation',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="•••••••"
                                                className="rounded-lg border border-gray-300 py-3 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowConfirmPassword(
                                                            !showConfirmPassword,
                                                        )
                                                    }
                                                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={
                                                            showConfirmPassword
                                                                ? faEyeSlash
                                                                : faEye
                                                        }
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                        />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="terms"
                                            name="terms"
                                            checked={data.terms}
                                            onCheckedChange={(checked) =>
                                                setData('terms', !!checked)
                                            }
                                            required
                                            tabIndex={5}
                                        />
                                        <Label
                                            htmlFor="terms"
                                            className="text-sm text-gray-700"
                                        >
                                            J'accepte les{' '}
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-500"
                                            >
                                                conditions d'utilisation
                                            </a>{' '}
                                            et la{' '}
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-500"
                                            >
                                                politique de confidentialité
                                            </a>
                                        </Label>
                                    </div>
                                    <InputError message={errors.terms} />

                                    <Button
                                        type="submit"
                                        className="w-full transform rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg focus:outline-none"
                                        tabIndex={6}
                                        disabled={processing}
                                    >
                                        {processing && (
                                            <Spinner className="mr-2" />
                                        )}
                                        S'inscrire
                                    </Button>
                                </form>

                                <div className="mt-6 text-center text-sm text-gray-600">
                                    Vous avez déjà un compte?{' '}
                                    <TextLink
                                        href={route('login')}
                                        className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
                                        tabIndex={7}
                                    >
                                        Se connecter
                                    </TextLink>
                                </div>

                                <div className="mt-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white px-2 text-gray-500">
                                                Ou s'inscrire avec
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

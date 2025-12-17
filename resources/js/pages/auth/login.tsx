import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import {
    faEnvelope,
    faEye,
    faEyeSlash,
    faHeadset,
    faLock,
    faRocket,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 p-4">
            <Head title="Connexion" />

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
                                        Bienvenue sur Makira
                                    </h1>
                                    <p className="text-lg opacity-90">
                                        Votre plateforme de gestion de carrière
                                    </p>
                                </div>

                                <div className="mt-12 space-y-6">
                                    <div className="flex transform items-start space-x-4 transition-transform hover:scale-105">
                                        <div className="bg-opacity-20 rounded-full bg-white p-3">
                                            <FontAwesomeIcon
                                                icon={faShieldAlt}
                                                className="text-xl"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold">
                                                Sécurité renforcée
                                            </h3>
                                            <p className="opacity-80">
                                                Vos données sont protégées avec
                                                le plus grand soin
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex transform items-start space-x-4 transition-transform hover:scale-105">
                                        <div className="bg-opacity-20 rounded-full bg-white p-3">
                                            <FontAwesomeIcon
                                                icon={faRocket}
                                                className="text-xl"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold">
                                                Performance optimale
                                            </h3>
                                            <p className="opacity-80">
                                                Une expérience utilisateur
                                                rapide et fluide
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex transform items-start space-x-4 transition-transform hover:scale-105">
                                        <div className="bg-opacity-20 rounded-full bg-white p-3">
                                            <FontAwesomeIcon
                                                icon={faHeadset}
                                                className="text-xl"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold">
                                                Support dédié
                                            </h3>
                                            <p className="opacity-80">
                                                Notre équipe est à votre
                                                disposition 24/7
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
                                        Connexion
                                    </h2>
                                    <p className="text-gray-600">
                                        Accédez à votre espace personnel
                                    </p>
                                </div>

                                <form onSubmit={submit} className="space-y-6">
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
                                                name="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                placeholder="exemple@email.com"
                                                className="rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            />
                                        </div>
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label
                                                htmlFor="password"
                                                className="text-sm font-medium text-gray-700"
                                            >
                                                Mot de passe
                                            </Label>
                                            {canResetPassword && (
                                                <TextLink
                                                    href={route(
                                                        'password.request',
                                                    )}
                                                    className="text-sm text-indigo-600 hover:text-indigo-500"
                                                    tabIndex={5}
                                                >
                                                    Mot de passe oublié?
                                                </TextLink>
                                            )}
                                        </div>
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
                                                name="password"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        'password',
                                                        e.target.value,
                                                    )
                                                }
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="•••••••"
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
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            checked={data.remember}
                                            onCheckedChange={(checked) =>
                                                setData('remember', !!checked)
                                            }
                                            tabIndex={3}
                                        />
                                        <Label
                                            htmlFor="remember"
                                            className="text-sm text-gray-700"
                                        >
                                            Se souvenir de moi
                                        </Label>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full transform rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg focus:outline-none"
                                        tabIndex={4}
                                        disabled={processing}
                                    >
                                        {processing && (
                                            <Spinner className="mr-2" />
                                        )}
                                        Se connecter
                                    </Button>
                                </form>

                                {canRegister && (
                                    <div className="mt-6 text-center text-sm text-gray-600">
                                        Pas de compte?{' '}
                                        <TextLink
                                            href={route('register')}
                                            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
                                            tabIndex={5}
                                        >
                                            S'inscrire
                                        </TextLink>
                                    </div>
                                )}

                                <div className="mt-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white px-2 text-gray-500">
                                                Ou continuer avec
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {status && (
                <div className="mt-4 mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </div>
    );
}

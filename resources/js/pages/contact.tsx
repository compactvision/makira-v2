import AppShell from '@/layouts/app-shell';
import {
    FileText,
    Mail,
    Mail as MailIcon,
    MapPin,
    Phone,
    Send,
    User,
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ici vous pouvez ajouter la logique pour envoyer le formulaire
        console.log('Données du formulaire:', formData);
        // Réinitialiser le formulaire après envoi
        setFormData({
            username: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gray-50">
                {/* Breadcrumb */}
                <div className="bg-gray-100 px-4 py-8">
                    <div className="container mx-auto">
                        <div className="flex items-center space-x-2 text-sm">
                            <a
                                href="/"
                                className="text-blue-600 transition-colors hover:text-blue-800"
                            >
                                Accueil
                            </a>
                            <span className="text-gray-400">/</span>
                            <span className="font-medium text-gray-700">
                                Contact
                            </span>
                        </div>
                        <h1 className="mt-2 text-3xl font-bold text-gray-800">
                            Contact
                        </h1>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="px-4 py-16">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* Formulaire de contact */}
                            <div className="rounded-lg bg-white p-8 shadow-lg">
                                <div className="mb-8">
                                    <h2 className="mb-4 text-3xl font-bold text-gray-800">
                                        Envoyer un message
                                    </h2>
                                    <p className="text-gray-600">
                                        N'hésitez pas à nous contacter et nous
                                        vous répondrons dans les plus brefs
                                        délais.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                placeholder="Nom"
                                            />
                                        </div>

                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <MailIcon className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <Phone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                placeholder="Téléphone"
                                            />
                                        </div>

                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                placeholder="Sujet"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full resize-none rounded-md border border-gray-300 px-3 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex items-center rounded-md bg-blue-600 px-8 py-3 font-bold text-white transition duration-300 hover:bg-blue-700"
                                        >
                                            <Send className="mr-2" size={18} />
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Informations de contact */}
                            <div className="space-y-8">
                                <div className="rounded-lg bg-white p-8 shadow-lg">
                                    <div className="space-y-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <MapPin className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                                    Dans la région ?
                                                </h3>
                                                <p className="text-gray-600">
                                                    avenue mon adresse numero 3
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <Phone className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                                    N'hésitez pas à nous
                                                    contacter
                                                </h3>
                                                <p className="text-gray-600">
                                                    <a
                                                        href="tel:+2439002344241"
                                                        className="transition-colors hover:text-blue-600"
                                                    >
                                                        +243 900 234 4241
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">
                                                    <a
                                                        href="tel:+2439002343219"
                                                        className="transition-colors hover:text-blue-600"
                                                    >
                                                        +243 900 234 3219
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                                <Mail className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                                    Support
                                                </h3>
                                                <p className="text-gray-600">
                                                    <a
                                                        href="mailto:infohelp@gmail.com"
                                                        className="transition-colors hover:text-blue-600"
                                                    >
                                                        infohelp@gmail.com
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">
                                                    <a
                                                        href="mailto:support12@gmail.com"
                                                        className="transition-colors hover:text-blue-600"
                                                    >
                                                        support12@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Carte Google Maps */}
                                <div className="h-96 overflow-hidden rounded-lg shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        title="Google Maps"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}

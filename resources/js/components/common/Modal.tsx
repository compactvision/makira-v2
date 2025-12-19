import { X } from 'lucide-react';

// Composant Modal réutilisable
const Modal = ({
    title,
    icon,
    children,
    onClose,
    onSubmit,
    processing = false,
    size = 'md',
}: any) => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0">
                <div
                    className="bg-opacity-75 fixed inset-0 bg-gray-500 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                ></div>

                {/* Contenu de la modal - correction ici */}
                <div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:align-middle">
                    <form onSubmit={onSubmit}>
                        {/* En-tête de la modal */}
                        <div className="border-b border-gray-200 bg-white px-4 pt-5 pb-4 sm:flex sm:items-center sm:justify-between sm:px-6 sm:pb-4">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:h-10 sm:w-10">
                                    {icon}
                                </div>
                                <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">
                                    {title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex rounded-md p-2 text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none sm:p-1"
                            >
                                <span className="sr-only">Fermer</span>
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Corps de la modal */}
                        <div className="px-4 py-5 sm:p-6 sm:pb-4">
                            {children}
                        </div>

                        {/* Pied de la modal */}
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={processing}
                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Fermer
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-indigo-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                {processing
                                    ? 'Enregistrement en cours...'
                                    : 'Enregistrer'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;

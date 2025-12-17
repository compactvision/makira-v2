import { X } from "lucide-react";

// Composant Modal réutilisable
const Modal = ({ title, icon, children, onClose, onSubmit, size = 'md' }: any) => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
                <div 
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
                    aria-hidden="true"
                    onClick={onClose}
                ></div>
                
                {/* Contenu de la modal - correction ici */}
                <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                    <form onSubmit={onSubmit}>
                        {/* En-tête de la modal */}
                        <div className="bg-white px-4 pt-5 pb-4 sm:px-6 sm:pb-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:h-10 sm:w-10">
                                    {icon}
                                </div>
                                <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">{title}</h3>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-md p-2 inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:p-1"
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
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Fermer
                            </button>
                            <button
                                type="submit"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
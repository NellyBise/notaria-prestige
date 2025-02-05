import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/outline'

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <HomeIcon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">
              Achat et vente immobilière
            </h3>
            <p className="text-gray-700">
              Nous vous accompagnons dans toutes les étapes de l'achat ou de la
              vente de votre bien immobilier.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">
              Successions et donations
            </h3>
            <p className="text-gray-700">
              Nous vous aidons à gérer les successions et à optimiser vos
              donations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <DocumentTextIcon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Conseils juridiques</h3>
            <p className="text-gray-700">
              Bénéficiez de conseils juridiques personnalisés pour toutes vos
              démarches notariales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

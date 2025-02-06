export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center px-4">
        <p>&copy; 2023 Notaria Prestige. Tous droits réservés.</p>
        <p>123 Rue de la République, 66000 Perpignan</p>
        <p>Téléphone : +33 4 68 12 34 56</p>
      </div>
      <p className="mt-4 text-sm text-center">
        Site conçu par{' '}
        <a
          href="https://www.nelly-bise.fr/"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Nelly Bise
        </a>
      </p>
    </footer>
  )
}

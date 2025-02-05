export default function Hero() {
  return (
    <section className="bg-[url('/bureau.jpg')] bg-cover bg-center h-72">
      <div className="flex flex-col items-center justify-center h-full px-4 bg-white/60 w-full h-full">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Bienvenue chez Notaria Prestige
        </h2>
        <p className="text-lg mb-8 text-center">
          Votre partenaire de confiance pour tous vos besoins notariaux.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Contactez-nous
        </a>
      </div>
    </section>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4 md:px-12">
        <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 italic mb-2">
              "Excellent service, très professionnel et réactif."
            </p>
            <p className="font-semibold">- Pierre Dubois</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 italic mb-2">
              "Je recommande vivement Notaria Prestige pour tous vos besoins
              notariaux."
            </p>
            <p className="font-semibold">- Stéphanie Laurent</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 italic mb-2">
              "Très satisfait de l'accompagnement et des conseils fournis."
            </p>
            <p className="font-semibold">- Paul Durand</p>
          </div>
        </div>
      </div>
    </section>
  )
}

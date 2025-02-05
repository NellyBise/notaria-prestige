export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Contactez-nous</h2>
        <p className="text-lg mb-8 text-center">
          Nous sommes à votre disposition pour répondre à toutes vos questions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-12 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Informations de contact
            </h3>
            <p className="text-gray-700 mb-2">
              123 Rue de la République, 66000 Perpignan
            </p>
            <p className="text-gray-700 mb-2">Téléphone : +33 4 68 12 34 56</p>
            <p className="text-gray-700 mb-2">
              Email : contact@notariaprestige.com
            </p>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.995617392818!2d2.352236315678677!3d48.85837007928747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef8e8!2s123%20Rue%20de%20la%20R%C3%A9publique%2C%2075000%20Paris!5e0!3m2!1sfr!2sfr!4v1633042774782!5m2!1sfr!2sfr"
                className="w-full max-w-3xl h-72 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Envoyez-nous un message
            </h3>
            <form className="flex flex-col">
              <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 self-center"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import bureau from '../src/bureau.jpg'

export default function Hero() {
  return (
    <section className="relative h-72 sm:h-80">
      <Image
        src={bureau}
        alt="Bureau"
        className="-z-10 absolute inset-0 w-full h-full object-cover"
        quality={75}
        priority={false}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw,
               33vw"
      />
      <div className="flex flex-col items-center justify-center h-full px-4 bg-white/60 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Bienvenue chez Notaria Prestige
        </h2>
        <p className="text-lg mb-8 text-center">
          Votre partenaire de confiance pour tous vos besoins notariaux.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white text-lg px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Contactez-nous
        </a>
      </div>
    </section>
  )
}

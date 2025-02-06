import Image from 'next/image'
import jean from '../src/jean.jpg'
import marie from '../src/marie.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4 md:px-12">
        <h2 className="text-3xl font-bold mb-4">À propos de nous</h2>
        <p className="text-lg mb-8">
          Notaria Prestige est une étude notariale dédiée à fournir des services
          de qualité à ses clients. Avec des années d'expérience, nous nous
          engageons à vous offrir des conseils juridiques fiables et
          personnalisés.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12">
        <div className="text-center">
          <Image
            src={jean}
            alt="Jean Dupont"
            className="rounded-full mx-auto mb-4 h-48 md:h-96 object-cover object-top"
            quality={75}
            sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw,
               33vw"
          />
          <h3 className="text-xl font-semibold mb-2">Jean Dupont</h3>
          <p className="text-gray-700">
            Notaire associé avec plus de 15 ans d'expérience dans le domaine
            immobilier et les successions.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={marie}
            alt="Marie Martin"
            className="rounded-full mx-auto mb-4 h-48 md:h-96 object-cover object-top"
            quality={75}
            priority={false}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw,
               33vw"
          />
          <h3 className="text-xl font-semibold mb-2">Marie Martin</h3>
          <p className="text-gray-700">
            Notaire spécialisée en droit de la famille et en conseils juridiques
            personnalisés.
          </p>
        </div>
      </div>
    </section>
  )
}

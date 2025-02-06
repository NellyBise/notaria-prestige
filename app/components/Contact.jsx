'use client'

import Map from './Map'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.section
      id="contact"
      className="bg-gray-100 py-20"
      ref={ref}
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
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
            <div className="relative z-10 mt-8">
              <Map />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Envoyez-nous un message
            </h3>
            <form className="flex flex-col">
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="message"
                  rows="6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white text-lg px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 self-center"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

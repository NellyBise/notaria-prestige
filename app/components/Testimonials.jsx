'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-white"
      ref={ref}
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
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
    </motion.section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Composant Map qui sera chargé dynamiquement
const MapComponent = () => {
  useEffect(() => {
    // Import Leaflet uniquement côté client
    const L = require('leaflet')
    require('leaflet/dist/leaflet.css')

    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    })

    const map = L.map('map').setView([42.6983987, 2.8924666], 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    const customIcon = L.icon({
      iconUrl: '/marker.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41], // Point de l'icône qui correspond à la position du marqueur
      popupAnchor: [1, -34], // Point à partir duquel la popup s'ouvre
    })

    L.marker([42.6983987, 2.8924666], { icon: customIcon })
      .addTo(map)
      .bindPopup('<b>Notaria Prestige</b><br>Étude notariale')
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return <div id="map" className="w-full max-w-3xl h-72 rounded-lg shadow-lg" />
}

const Map = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-3xl h-72 rounded-lg shadow-lg bg-gray-200" />
  ),
})

export default Map

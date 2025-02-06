import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({
  variable: '--font-Lora',
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Notaria Prestige - notaires à Perpignan',
  description:
    "Notaria Prestige, votre partenaire de confiance pour tous vos besoins notariaux à Perpignan. Achat et vente immobilière, successions, donations et conseils juridiques personnalisés. Contactez-nous dès aujourd'hui.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${lora.variable} antialiased`}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Helpers Hub - Helping Hands, Caring Hearts',
  description: 'Helpers Hub is dedicated to providing compassionate care and support services to those in need. Our mission is to make a difference through helping hands and caring hearts.',
  keywords: 'helpers, care, support, community, charity, assistance',
  openGraph: {
    title: 'Helpers Hub - Helping Hands, Caring Hearts',
    description: 'Compassionate care and support services for the community',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

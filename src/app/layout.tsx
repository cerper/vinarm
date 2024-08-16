import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-monteserrat',
})

export const metadata: Metadata = {
  title: 'Vinarm',
  description: 'Pa‘pasarla brutal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  w-full max-w-[1920px] font-montserrat bg-vinarmGreen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

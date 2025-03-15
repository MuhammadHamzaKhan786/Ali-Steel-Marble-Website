import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Steel - Premium Steel & Marble Solutions',
  description: 'Providing premium steel and marble solutions since 1995. Quality, reliability, and innovation are at the core of everything we do.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  )
} 
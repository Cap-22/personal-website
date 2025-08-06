import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ForAI - A creative design studio for AI companies',
  description: 'A creative design studio for AI companies. We make the work we believe in, work we\'re proud to have made, work worth being known for.',
  keywords: 'AI design, creative studio, web design, UI/UX, artificial intelligence',
  authors: [{ name: 'ForAI Design Studio' }],
  openGraph: {
    title: 'ForAI - A creative design studio for AI companies',
    description: 'A creative design studio for AI companies. We make the work we believe in, work we\'re proud to have made, work worth being known for.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForAI - A creative design studio for AI companies',
    description: 'A creative design studio for AI companies. We make the work we believe in, work we\'re proud to have made, work worth being known for.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
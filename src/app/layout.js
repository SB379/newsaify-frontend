import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewsAIfy',
  description: 'Your AI Powered News Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  )
}

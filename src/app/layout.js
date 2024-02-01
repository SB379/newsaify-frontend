import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBar from './NavBar';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewsAIfy',
  description: 'Your AI Powered News Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='flex flex-col w-[100vw] h-[100vh]'>
      {/* <NavBar/> */}
      <body className={inter.className}>{children}</body>
      <Analytics/>
      <SpeedInsights/>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rehabify',
  description: 'Information System for Drugs and Alcohol Rehabilitation Center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
      <div className="w-full h-full min-h-screen flex flex-col justify-between items-center overflow-x-hidden  mx-auto my-0 px-0">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        </body>
    </html>
  )
}

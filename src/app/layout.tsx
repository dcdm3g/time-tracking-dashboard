import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Time Tracking Dashboard',
  description: 'Personal time tracking dashboard UI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          rubik.className + ' grid min-h-screen place-content-center py-20'
        }
      >
        {children}
      </body>
    </html>
  )
}

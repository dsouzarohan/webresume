import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Rohan D'souza",
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="noise-bg z-10"></div>
        {children}
      </body>
    </html>
  )
}

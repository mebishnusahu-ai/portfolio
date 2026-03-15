import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Software Solutions at Bhilai',
  description: 'Get in touch with Bishnu & Deepika for software solutions, web development, restaurant website creation, or hotel management systems in Bhilai.',
  keywords: ['software solutions at bhilai', 'restaurant website create in bhilai', 'hotel website create bhilai', 'hire web developer bhilai'],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

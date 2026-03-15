import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Software Engineers in Bhilai',
  description: 'Meet Bishnu Prasad Sahu and Deepika Tendulkar, leading software engineers in Bhilai providing specialized software solutions, web development, and hotel website creation.',
  keywords: ['software solutions in bhilai', 'software engineer bhilai', 'web development bhilai', 'deepika tandulkar bhilai', 'bishnu prasad sahu bhilai'],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

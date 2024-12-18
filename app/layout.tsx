import './global.css'
import type { Metadata } from 'next'
import { baseUrl } from './sitemap'
import { inter } from 'app/ui/fonts';


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Charly Krenn',
    template: '%s | Charly Krenn',
  },
  description: '[WIP]', //TODO update the metadata
  openGraph: {
    title: 'Charly Krenn',
    description: '[WIP]',
    url: baseUrl,
    siteName: 'Charly Krenn',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        inter.className
      )}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

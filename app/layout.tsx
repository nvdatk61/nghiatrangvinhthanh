import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Serenity Grove — Cemetery Management System',
  description: 'A dignified, respectful cemetery record management system for Serenity Grove Memorial Gardens.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

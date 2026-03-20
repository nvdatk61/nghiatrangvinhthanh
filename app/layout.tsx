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
        url: '/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Logo-Doan-Thanh-NIen-Cong-San-Ho-Chi-Minh.webp',
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

import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-mono',
})

export const metadata: Metadata = {
  title: 'GrēxGrid — Energy Sovereignty for Every Community',
  description:
    'GrēxGrid gives communities the tools to generate, store, trade, and own their energy — no waiting for a national grid that was never designed to reach you.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={
        {
          '--ff-display': `var(--font-cormorant), Georgia, serif`,
          '--ff-body': `var(--font-dm-sans), system-ui, sans-serif`,
          '--ff-mono': `var(--font-ibm-mono), 'Courier New', monospace`,
        } as React.CSSProperties
      }
      className={`${cormorantGaramond.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

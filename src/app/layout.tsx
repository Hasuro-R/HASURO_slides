import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteName = "HASURO's slides"
const description = "HASUROのスライド集です。"
const url = "https://slides.hasuro.com"

export const metadata: Metadata = {
  title: siteName,
  description,
  openGraph: {
    title: {
      default: siteName,
      template: "%s",
    },
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: {
      default: siteName,
      template: "%s",
    },
    description,
    site: "@HASURO_dev",
    creator: "@HASURO_dev",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Ashish Medithe - AI/ML Enthusiast & IoT Developer",
  description:
    "Second-year B.Tech (ECE) student at IIIT Sri City, passionate about AI/ML and IoT systems. Experienced in machine learning algorithms and foundational deep learning.",
  keywords: ["Ashish Medithe", "AI", "Machine Learning", "IoT", "IIIT Sri City", "ECE", "Developer", "Portfolio"],
  authors: [{ name: "Ashish Medithe", url: "mailto:ashishmedithe500@gmail.com" }],
  creator: "Ashish Medithe",
  publisher: "Ashish Medithe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashish-medithe.vercel.app",
    title: "Ashish Medithe - AI/ML Enthusiast & IoT Developer",
    description: "Second-year B.Tech (ECE) student at IIIT Sri City, passionate about AI/ML and IoT systems.",
    siteName: "Ashish Medithe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Medithe - AI/ML Enthusiast & IoT Developer",
    description: "Second-year B.Tech (ECE) student at IIIT Sri City, passionate about AI/ML and IoT systems.",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ea580c" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

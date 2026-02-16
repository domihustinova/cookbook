import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Inter, Poppins, Roboto } from "next/font/google"
import localFont from "next/font/local"
import type React from "react"

import "@/styles/globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const wotfard = localFont({
  src: "../public/font/wotfard-regular-webfont.woff2",
  display: "swap",
  variable: "--font-wotfard",
})

export const metadata: Metadata = {
  title: "Cookbook",
  description: "Create your own cookbook",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${wotfard.variable} ${wotfard.className} mx-auto min-h-screen text-green-darkest`}
      >
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}

export default RootLayout

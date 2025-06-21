import Header from "@/app/header/header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import Footer from "./footer/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "surfer-kim Blog",
  description: "Personal blog and portfolio of Kim Surfer - Full Stack Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

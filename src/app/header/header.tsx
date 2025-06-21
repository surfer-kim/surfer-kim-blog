"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Project", href: "/project" },
    { name: "About", href: "/about" },
  ]

  const isActive = (href: string) => {
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              {/* Logo Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-teal-500"
              >
                <path d="M8 4L4 8V24L8 28H24L28 24V8L24 4H8Z" fill="currentColor" fillOpacity="0.1" />
                <path d="M8 4L4 8V24L8 28H24L28 24V8L24 4H8Z" stroke="currentColor" strokeWidth="2" />
                <path d="M12 12L20 20M20 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-900">surfer-kim Blog</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${isActive(item.href) ? "text-teal-600" : "text-gray-700"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-teal-600 px-2 py-1 rounded-md ${isActive(item.href) ? "text-teal-600 bg-teal-50" : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

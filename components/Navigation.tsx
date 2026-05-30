'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-110 transition-elegant">
              <Logo />
            </div>
            <span className="text-xl font-bold text-primary-blue">Helpers'Hub</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-elegant"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 rounded-lg md:rounded-none`}>
            <Link href="/" className="block md:inline text-gray-700 hover:text-primary-blue font-medium py-2 md:py-0 transition-elegant">
              Home
            </Link>
            <Link href="/services" className="block md:inline text-gray-700 hover:text-primary-blue font-medium py-2 md:py-0 transition-elegant">
              Services
            </Link>
            <Link href="/how-it-works" className="block md:inline text-gray-700 hover:text-primary-blue font-medium py-2 md:py-0 transition-elegant">
              How it Works
            </Link>
            <Link href="/about" className="block md:inline text-gray-700 hover:text-primary-blue font-medium py-2 md:py-0 transition-elegant">
              About
            </Link>
            <Link href="/contact" className="block md:inline text-gray-700 hover:text-primary-blue font-medium py-2 md:py-0 transition-elegant">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-blue font-medium transition-elegant">
              Log in
            </button>
            <button className="btn-accent">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

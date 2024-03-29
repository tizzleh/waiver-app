// components/Navbar.tsx
import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <svg
              className="h-6 w-6 mr-3 text-yellow-500 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 8.586V7z" clipRule="evenodd" />
            </svg>
            <span>Your Company</span>
          </div>
        </Link>

        <div className="space-x-4">
          <Link href="/admin">
            <div className="hover:text-yellow-500 transition-colors duration-200">Admin</div>
          </Link>
          <Link href="/gym">
            <div className="hover:text-yellow-500 transition-colors duration-200">Gym</div>
          </Link>
          <Link href="/climber">
            <div className="hover:text-yellow-500 transition-colors duration-200">Climber</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


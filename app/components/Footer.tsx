// components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 mt-8">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 mr-3 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 8.586V7z" clipRule="evenodd" />
          </svg>
          <span>Your Company</span>
        </div>
        <div>
          <span>© {year} Your Company. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


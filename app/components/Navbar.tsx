// components/Navbar.tsx
import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 py-4 px-6 pb-6">
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
            <span>{process.env.COMPANY_NAME}</span>
          </div>
        </Link>
    <div>
      <Link href="/admin/page.tsx">
        <div className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
          Go to destination
        </div>
      </Link>
    </div>
        <div className="container no-underline mx-auto flex justify-between items-center">
          <Link href="/admin/page.tsx">
            <div className="no-underline text-white">Admin</div>
          </Link>
          <Link href="/gym/page.tsx">
            <div className=" text-gray-100 hover:text-yellow-500 transition-colors duration-200">Gym</div>
          </Link>
          <Link href="/climber/admin/page.tsx">
            <div className="text-white hover:text-yellow-500 focus:outline-none no-underline transition-colors duration-200">Climber</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


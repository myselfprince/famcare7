import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="text-white body-font bg-[#103C63]">
      <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white md:mb-0">
            <Image alt="femcare logo" src={"/images/Logo.png"} width={115} height={64}/>
        </Link>

        {/* Navigation */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-300">
            Home
          </Link>
          <Link href="/femai" className="mr-5 hover:text-gray-300">
            FemAI
          </Link>
          <Link href="/blogs" className="mr-5 hover:text-gray-300">
            Blogs
          </Link>
          <Link href="/femplayer" className="mr-5 hover:text-gray-300">
            FemPlayer
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-300">
            Period Relief
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/login" className="mr-5 hover:text-gray-300">
            Sign in
          </Link>
        </nav>

        {/* Button */}
        <button className="inline-flex items-center bg-[#90E0EF] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">
          <Link href="/signup" className=" hover:text-gray-300">
            SignUp
          </Link>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
    
  )
}

export default Navbar
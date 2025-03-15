import React from 'react'
import Link from 'next/link'
import Cards from './Cards'

const Homepage = () => {
  return (<>
    <div
      className="relative bg-cover bg-center h-[88vh] flex items-center"
      style={{ backgroundImage: "url('/images/HomePage.png')" }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative text-[#103C63] container mx-auto px-13 flex flex-col items-start space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Thrive with <br /> FemCare+ Magic
        </h1>
        <p className="text-lg md:text-xl text-[#0077B6] italic">
          Start your health glow-up today
        </p>
        <Link href="/get-started">
          <button className="bg-[#103C63] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#214F77] cursor-pointer transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>

    <div className='bg-[#CAF0F8]'>

    <Cards />
    <h1>Hello</h1>
    </div>


    
    </>
  )
}

export default Homepage
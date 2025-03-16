import React from 'react'
import Link from 'next/link'
import Cards from './Cards'
import Image from 'next/image'

const Homepage = () => {
  return (<>
    <div
      className="relative bg-cover bg-center h-[88vh] flex items-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
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
        <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src="/images/image2.png"
            alt="hero"
            width={720}
            height={600}
            className="object-cover object-center rounded"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div className='flex-col justify-center mb-3'>
          <h1 className="title-font sm:text-5xl text-3xl mb-4 text-gray-900 font-bold">
          Welcome to FemCare+ 
          </h1>
          <h3 className='text-black block text-center -mt-3 text-xl font-semibold'> Your Health, Your Way</h3>
        </div>

          <p className="mb-8 leading-relaxed w-2/3 text-black">
          At FemCare+, we empower you with personalized health solutions. Our FemAI routine generator crafts daily wellness plans tailored to your age, menstrual cycle, and more—think yoga for period pain or stress relief tips. From periods to holistic care, we’ve got your back, so every woman can thrive!
          </p>
          
        </div>
      </div>
    </section>

    </div>


    
    </>
  )
}

export default Homepage
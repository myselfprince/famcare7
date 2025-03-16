import React from 'react'
import Navbar from '@/components/Navbar'
import Homepage from '@/components/Homepage'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
const Home = () => {
  return (
    <main className=' bg-[#CAF0F8]'>
      {/* <Navbar /> */}
      <Homepage />
      <Testimonials />

      <div className='h-96 bg-white'>

      </div>
    
    </main>
  )
}

export default Home
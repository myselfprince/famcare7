'use client'
import React from 'react'
import { Button } from './ui/button';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className='nex-space py-12 px-24 bg-[#103C63] text-white pb-24'>
        <div className='flex md:w-1/2 '>
            <p className='flex h-[30px] bg-[#90E0EF] w-[2px] rounded'> 
            </p>
            <h3 className='ml-2 text-lg font-semibold text-[#90E0EF]'>Testimonials</h3>
        </div>
        <div className='mt-3 flex justify-between items-center'>
            <div className='text-xl md:text-3xl font-bold'>
                <h3 className='w-3/4 md:w-full text-[#CAF0F8]'>Trusted by Patients, Loved by Doctors</h3>
                {/* <h3>Doctors</h3> */}
            </div>
            <Button className="bg-[#00B4D8] cursor-pointer" variant={"default"} size={"lg"}> All Testimonials</Button>
        </div>
        <div className='flex justify-center items-center mx-auto mt-12'>
        <IoIosArrowDropleftCircle className='text-3xl md:text-5xl mr-7 cursor-pointer'/>

        <div className='flex flex-col text-sm mx-2 px-1 md:w-5/12 w-3/4 justify-center items-end '>
        <p className=''>“I love website-name patient-centered approach to healthcare. Their platform has made it easy for me to manage my medical history and book
appointments with specialists. Highly recommended!”</p>
            <div className='flex mt-2 text-[12px]'>
                <Image src={"/icons/icon 1.png"} height={40} width={40} alt='testimonial'/>
                <div className=''>
                <p>Brain Davis</p>
                <p className='-my-1'>CMO, Trendsetter Styles</p>
                </div>
            </div>
        </div>
        <IoIosArrowDroprightCircle className='text-3xl ml-7 md:text-5xl cursor-pointer'/>

        </div>




    </div>
  )
}

export default Testimonials
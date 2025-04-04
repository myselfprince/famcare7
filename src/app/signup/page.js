'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const SignupPage = () => {
  const router = useRouter()
  const [agreeTerms, setAgreeTerms] = useState(false)
  

  const [user, setUser] = useState({
    email:"",
    password:"",
    username:"",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSignup = async()=>{
    console.log("Hello")
    try {
        setLoading(true)
        const response = await axios.post("/api/users/signup", user)
        console.log("Signup Success", response.data)
          router.push('/login')


    } catch (error) {
        console.log("Signup Failed");      
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  },[user])
  return (
    <>
    <div className='flex justify-center items-center mt-12'>
      <div className=' mx-auto flex justify-around items-center'>
       
        <div className='w-screen md:w-[500px] flex items-center justify-center'>
          <div className='w-full'>

         
          {/* signup page */}
          <h1 className='text-center text-3xl font-bold text-wrap text-[#103C63]'>Join the FemCare+ Family</h1>
       
          <p className='text-center text-[#0077B6] font-sans text-sm'>Become part of our community and unlock personalized wellness plans, period relief, and expert support. Let’s start your health glow-up together! </p>

          <h2 className='text-center text-xl flex justify-center items-center mt-7 font-semibold relative w-[350px] h-[40px] mx-auto bg-[#103C63] rounded-3xl -mb-4 text-[#CAF0F8]'>{loading?"Processing":"Create Your Account"}</h2>
          <div className='bg-[#8CBEDA] w-lg mx-auto py-5'>
                 <div className="rounded px-8 pt-6 pb-8 mb-4 w-5/6 mx-auto ">
        <div className="mb-4">


          <label className="block text-[#103C63] text-[15px] mb-1" htmlFor="username">
            Full Name
          </label>
          <Input type="text" placeholder="Enter you name"
            id="username"
            name="username"
            value={user.username}
            onChange={(e)=>setUser({...user, username: e.target.value})}
            />
   

        </div>


        <div className="mb-4">
          <label className="block text-[#103C63] text-[15px] mb-1" htmlFor="email">
            Email Address
          </label>
          <Input type="email" placeholder="Email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e)=>setUser({...user, email: e.target.value})}
            />
        </div>


        <div className="mb-6">
          <label className="block text-[#103C63] text-[15px] mb-1" htmlFor="password">
           Create Password
          </label>
          <Input
          type="password" placeholder="Password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e)=>setUser({...user, password: e.target.value})}
              />
         
        </div>
        <div className="mb-6">
          <label className="block text-[#103C63] text-[15px] mb-1" htmlFor="password">
            Confirm password
          </label>
          <Input
          type="password" placeholder="Password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e)=>setUser({...user, password: e.target.value})}
              />
         
        </div>

        <div className="mb-4 text-center">
    <p className="text-[#103C63] text-sm">
      Already have an account?{' '}
      <Link href="/login" className="underline hover:text-blue-700">
        Sign in
      </Link>
    </p>
  </div>



        <div className="mb-4">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mr-2"
                  />
                  <label className="text-[#103C63] text-sm" htmlFor="agreeTerms">
                    I agree to the Terms & Conditions and Privacy Policy.
                  </label>
                </div>

        <div className="flex items-center justify-between">

          <Button className="w-[80%] mx-auto bg-[#103C63] hover:bg-[#103c63b4] cursor-pointer" 
          onClick={onSignup}>Signup</Button>
        </div>
      </div>
        </div>
        </div>
        </div>

        <div className='w-[500px] hidden lg:flex justify-end'>
          <Image height={500} width={399} className='' src={"/images/signup2.png"} alt='signup image'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default SignupPage
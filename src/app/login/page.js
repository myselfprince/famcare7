'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const Login = () => {
  const router = useRouter()
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [confirmBox, setConformBox] = useState(false)

  const [user, setUser] = useState({
    email:"",
    password:"",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogin = async()=>{
    console.log("Hello")
    try {
        setLoading(true)
        const response = await axios.post("/api/users/login", user)
        console.log("Login Success", response.data)
          router.push('/profile')


    } catch (error) {
        console.log("Signup Failed");      
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0){
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
          <h1 className='text-center text-3xl font-bold text-wrap text-[#103C63]'>Welcome Back to FemCare+</h1>
       
          <p className='text-center text-[#0077B6] font-sans text-sm'>We’re thrilled to have you back! Sign in to access your personalized routines, period relief tips, and more. Let’s keep your wellness journey glowing! </p>

          <h2 className='borr text-center text-xl flex justify-center items-center mt-7 font-semibold relative w-[350px] h-[40px] mx-auto bg-[#103C63] rounded-3xl -mb-4 text-[#CAF0F8]'>{loading?"Processing":"Signin To Your Account  "}</h2>
          <div className='bg-[#8CBEDA] w-lg mx-auto py-5'>
                 <div className="rounded px-8 pt-6 pb-8 mb-4 w-5/6 mx-auto ">
        <div className="mb-4">


          <label className="block text-[#103C63] text-[15px] mb-1" htmlFor="username">
           Email Address
          </label>
          <Input type="text" placeholder="Enter you email"
            id="username"
            name="username"
            value={user.username}
            onChange={(e)=>setUser({...user, username: e.target.value})}
            />
   

        </div>



        <div className="mb-6">
          <label className="block text-[#103C63] text-[15px] mb-1" htmlFor="Enter your password">
            Password
          </label>
          <Input
          type="password" placeholder="Password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e)=>setUser({...user, password: e.target.value})}
              />
         
        </div>

        <div className="mb-4  text-right -mt-5 text-white">
    <p className="text-[#103C63] text-sm">
      {/* Already have an account?{' '} */}
      <Link href="/login" className="hover:text-blue-700  text-gray-800">
       Forgot your password?
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
                    Remember Me
                  </label>
                </div>

        <div className="flex items-center justify-between">

          <Button className="w-[80%] mx-auto bg-[#103C63] hover:bg-[#103c63b4] cursor-pointer" 
          onClick={onLogin}>Login</Button>
        </div>
      </div>
        </div>
        </div>
        </div>

        <div className='w-[500px] hidden lg:flex justify-end'>
          <Image height={500} width={399} className='' src={"/images/login2.png"} alt='signup image'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login
import { async } from '@firebase/util';
import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';

const Signup = () => {
  const navigate=useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
await signup(email,password)
navigate('/')

    }
    catch (error) {
      console.log(error)
    }

  }
  const { user, signup } = UserAuth()
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/ca53d3e1-fa61-4750-b34a-3e4d5e5acd26/PK-en-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='title' />
        <div className='absolute  bg-black/60 h-screen w-full top-0 left-0 '>
        </div>
        <div className='w-full h-screen fixed px-4 py-24 z-50 '>
          <div className='max-w-[450px] mx-auto h-[600px] bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold '>Sign Up</h1>
              <form onSubmit={handlesubmit} className='w-full flex flex-col'>
                <input onChange={(e)=>{setemail(e.target.value)}} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                <input onChange={(e)=>{setpassword(e.target.value)}} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='currentpassword' />
                <button className='bg-red-600 py-3 my-6 rounded px-6 font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type="checkbox" />Remember Me
                  </p>
                  <p>
                    Need Help
                  </p>
                </div>
                <p className='py-6'><span className='text-gray-600'>Already subscribed to Netflix? </span>
                  <Link to='/login'>
                    Sign In
                  </Link></p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signup;
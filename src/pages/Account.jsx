import React from 'react'
import Savedshows from '../components/Savedshows';

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='absolute w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/ca53d3e1-fa61-4750-b34a-3e4d5e5acd26/PK-en-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='title' />
     <div className='fixed bg-black/60 w-full h-[550px] top-0 left-0'>
      <div className='absolute top-[20%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold '>My Shows</h1>
      </div>
     </div>
     <Savedshows  />
    </div>
  
    
   
    
    </>
  )
}

export default Account;
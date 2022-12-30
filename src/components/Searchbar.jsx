import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Searchbar = () => {
  return (
    <form className='flex my-3'>
        <input type="text" placeholder='Search'  className='rounded-md p-2  bg-gray-300'/> 
       <button> <AiOutlineSearch className='text-gray-100' /></button>
    </form>
  )
}

export default Searchbar;
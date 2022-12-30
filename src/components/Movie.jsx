import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'
import { db } from '../firebase'
import {CgDetailsMore} from 'react-icons/cg'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Movie = ({ item }) => {
  const { user } = UserAuth()
  const [like, setlike] = useState(false)
  const [saved, setsaved] = useState(false)
  const movieid = doc(db, 'users', `${user?.email}`)
  const savedshow = async () => {
    if (user?.email) {
      setlike(!like)
      setsaved(true)
      await updateDoc(movieid,{
        savedShows:arrayUnion({
          id:item.id,
          title:item.title,
          img:item.backdrop_path
        })
      })
    }
    else{
      alert('Please login to save a movie')
    }
  }
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
      <img src={`https://image.tmdb.org/t/p/w1280${item?.backdrop_path}`} alt={item?.title} />
      <div className='absolute w-full h-auto top-0 left-0 bottom-0 right-0 bg-black/70 opacity-0 hover:opacity-100'>
        <p className='text-white font-bold items-center flex justify-center text-xs md:text-sm whitespace-normal h-full'>{item?.title}</p>
    <Link to='/moviedetail'><p className='absolute top-4 right-4 text-white'><CgDetailsMore /></p></Link> 
        <p onClick={savedshow}>{like ? <FaHeart className='absolute top-4 left-4 text-white' /> : <FaRegHeart className='absolute top-4 left-4 text-white' />}</p>
      </div>
    </div>
  )
}

export default Movie;
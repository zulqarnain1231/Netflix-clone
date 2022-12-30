import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/Authcontext'
import { db } from '../firebase'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg'

const Savedshows = () => {
    const { user } = UserAuth()
    const [movies, setmovies] = useState([])
    const slideleft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideright = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setmovies(doc.data()?.savedShows);
        })
    }, [user?.email])
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedId) => {
        try {
         const result= movies.filter((item)=>{
           return item.id !== passedId
         }) 
         updateDoc(movieRef,{
            savedShows:result
         })
        }
        catch(error) {
console.log(error)
        }
    }
    return (
        <>
            <div className='absolute top-[65%] w-full'>
                <h1 className='text-white font-bold md:text-xl p-4'>My Favourite Shows</h1>
                <div className='relative flex  items-center group'>
                    <MdChevronLeft onClick={slideleft} className='bg-white text-black group-hover:block z-10 opacity-50 hidden hover:opacity-100 absolute rounded-full cursor-pointer left-0' size={40} />
                    <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {movies?.map((item, index) => {
                            return <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                                <img src={`https://image.tmdb.org/t/p/w1280${item?.img}`} alt={item?.title} />
                                <div className='absolute w-full h-auto top-0 left-0 bottom-0 right-0 bg-black/70 opacity-0 hover:opacity-100'>
                                    <p className='text-white font-bold items-center flex justify-center text-xs md:text-sm whitespace-normal h-full'>{item?.title}</p>
                                    <p onClick={() => { deleteShow(item.id) }} className='absolute text-gray-300 right-4 top-4'><AiOutlineClose /></p>
                                    <Link to='/moviedetail'><p className='absolute top-4 left-4 text-white'><CgDetailsMore/></p></Link>
                                </div>
                            </div>

                        })}

                    </div>
                    <MdChevronRight onClick={slideright} className='bg-white text-black z-10 group-hover:block  opacity-50 hidden hover:opacity-100 absolute rounded-full cursor-pointer right-0' size={40} />
                </div>
            </div>
        </>
    )
}

export default Savedshows;
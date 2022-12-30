import axios from 'axios';
import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from './Movie';

const Row = ({ title, fetchUrl,rowId }) => {
    const slideleft =()=>{
        const slider= document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft-500
    }
    const slideright =()=>{
        const slider= document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft+500
    }
    const [movies, setmovies] = useState([])
    
    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setmovies(response.data.results)
        })
    }, [fetchUrl])

    return (
        <>
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className='relative flex  items-center group'>
                <MdChevronLeft onClick={slideleft} className='bg-white group-hover:block z-10 opacity-50 hidden hover:opacity-100 absolute rounded-full cursor-pointer left-0' size={40} />
                <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies?.map((item, index) => {
                        return <Movie key={index} item={item} />

                    })}

                </div>
                <MdChevronRight onClick={slideright}  className='bg-white z-10 group-hover:block  opacity-50 hidden hover:opacity-100 absolute rounded-full cursor-pointer right-0' size={40}/>
            </div>
        </>
    )
}

export default Row;

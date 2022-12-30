import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import requests from '../request'

const Main = () => {
    
    const [movies, setmovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        axios.get(requests.requestUpcoming).then((response => {
            setmovies(response.data.results)
        }))

    }, [])
    // console.log(movie);
    const truncate=(str,num)=>{
        if(str?.length>num){
            return str.slice(0,num)+'...';
        }
        else{
            return str;
        }
        
    }
    
    return (

        <div className='w-full h-[550px] text-white'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <div className='w-full h-full'>
                <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} className='w-full h-full object-cover' alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8 gap-3'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-5'>
                        <button className='bg-gray-300 border py-2 px-6 text-black'>Play</button>
                        <button className=' border py-2 px-6 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm '>Released: {movie?.release_date}</p>
                    <p className='w-full text-gray-200 md:mx-w-[70%]  lg:mx-w-[50%] xl:max-w-[35%]'>{truncate(movie?.overview,100)}</p>
                    </div>
            </div>

        </div>
    )
}

export default Main;
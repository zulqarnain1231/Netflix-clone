import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const MovieDetail = () => {
    const [movies,setmovies]=useState([])
    const movie_id='155'
    const url=`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=821f7c0663a70d3605f5a7f2504c4f69&language=en-US&page=1`
    useEffect(()=>{
       axios.get(url).then((response)=>{
         setmovies(response.data.result)   
       })
    },[])
    console.log(movies)
  return (
    <>
    </>
  )
}

export default MovieDetail;
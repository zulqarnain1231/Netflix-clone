import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';
import Searchbar from './Searchbar';

const Navbar = () => {
    const navigate=useNavigate()
    const {user,logout}=UserAuth()
   
    const handlelogout= async()=>{
        try{
await logout()
navigate('/')
        }
        catch(error){
            console.log(error)
        }

    }
    

    return (
        <div className=' flex items-center justify-between p-4 absolute w-full z-10'>
            <Link to='/' >
            <h1 className='text-red-600 text-5xl font-[1000]  cursor-pointer'>Netflix</h1>
            </Link>
            
            <div>
                {user?.email ?(<>
                <Link to='/account' >
                <button className='text-white font-bold pr-4 rounded '>Account</button>
                </Link>
                <Link to='/signup'>
                <button onClick={handlelogout} className='text-white bg-red-600 font-bold px-4 py-2 rounded ml-2'>Logout</button>
                </Link>
                </>) :
                (<>
                    <Link to='/login' >
                    <button className='text-white font-bold pr-4 rounded '>Sign in</button>
                    </Link>
                    <Link to='/signup'>
                    <button className='text-white bg-red-600 font-bold px-4 py-2 rounded ml-2'>Sign Up</button>
                    </Link>
                    </>)}
                    {/* <div className='my-2'>
                    <Searchbar />
                    </div> */}
                    
                
            </div>
        </div>
    )
}

export default Navbar;
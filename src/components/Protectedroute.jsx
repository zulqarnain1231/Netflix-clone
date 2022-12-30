import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';
const Protectedroute = ({children}) => {
    const {user}=UserAuth()
    if (!user) {
        <Navigate to='/' />
    }
    else{
        return children;
    }
  
}

export default Protectedroute;
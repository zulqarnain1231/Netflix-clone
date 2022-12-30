import { auth,db } from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth'
import { createContext,useContext,useEffect, useState } from "react";
import { setDoc,doc } from "firebase/firestore";
const Authcontext=createContext();

export function AuthContextProvider ({children}){
    const [user,setuser]=useState({})
    function login (email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout (){
        return signOut(auth)
    }
    function signup (email,password){
      createUserWithEmailAndPassword(auth,email,password);
     return setDoc(doc(db,'users',email),{
        savedShows:[]
      })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
setuser(currentuser)
return ()=>{
    unsubscribe();
}
        })
    },[])
    return(
        <Authcontext.Provider value={{signup,user,login,logout}}>
{children}
        </Authcontext.Provider>
    )
} 
export function UserAuth(){
    return useContext(Authcontext)
}
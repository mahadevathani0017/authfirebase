import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firabase';



const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export  function AuthProvider({children}) {

    const[currentUser,setCurrentUser]=useState();
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    useEffect(()=>{
       const unsubscribe=auth.onAuthStateChanged((user) => {
       setCurrentUser(user);
      })
      return unsubscribe;
    },[])
    
    const value= {
     currentUser,
     signup
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}


import React,{createContext, useContext, useState} from 'react'

    const AuthContext=createContext(null);
    const AuthProvider=({children})=>{
        const [user,setUser]=useState(null);
      
        const login=(user)=>{
            setUser(user);
        }

        const logOut=()=>{
            setUser(null);
        }
 
  return (
    <AuthContext.Provider value={{user,login,logOut}}>{children}
    </AuthContext.Provider>
  )
}
 export default AuthProvider;

export const useAuth=()=>{
return useContext(AuthContext);
}

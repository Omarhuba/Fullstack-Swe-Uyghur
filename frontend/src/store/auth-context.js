import React,{ createContext, useState } from "react"


const AuthContext = React.createContext({})

export const AuthContextProvider = ({children})=>{
    const [auth, setAuth] = useState({})

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}




export default AuthContext;

import { useState,createContext } from "react";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [isAuthorised,setAuthorised] = useState(false);

    const login = (username,password) => {
        if(username && password){
            setAuthorised(true)
        };
    }
       
        const logout = () => {
            setAuthorised(false);
            };
        
        
    
    return <AuthContext.Provider value={{ isAuthorised, login,logout}}>{children}</AuthContext.Provider>
}

import React, { createContext, useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider =({children}) => {
    const [isAuth,setIsAuth] = useState(false)
    const navigate = useNavigate()
    const {location} = useLocation()
    console.log(location)
    const login = () => {
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers :{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                email:"eve.holt@reqres.in",
                password : "cityslicka"
            }),
        }).then(r => r.json()).then(d => {
            setIsAuth(d.token)
        })
        setIsAuth(true)
        if(location.from){
            navigate(location.from,{replace:true})

        }
        else{
            navigate("/")
        }
    };
    const logout = () => {
        setIsAuth(false)
        navigate("/") 
    };
    useEffect (() => {
        let token = localStorage.getItem("token")
        if(token){
            setIsAuth(token)
        }
    })

    return (
     <AuthContext.Provider value={{isAuth,login,logout}}> 
    {children}
    </AuthContext.Provider>
    )
    
};



import React,{createContext,useContext,useState} from 'react'
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const {isAuthorised} = useContext(AuthContext)
    const [count,setcount] = useState(0)
    const addToCart = () =>{
        setcount(count+1)
    }
    const buy = () => {
        if(isAuthorised ){
            console.log("yes you can buy")
        }
        else{
            console.log("you cant buy any thing")
        }

    }
   
   
    return (
    <CartContext.Provider value={{count,addToCart,buy}}>
        {children}
    </CartContext.Provider>
    )
}
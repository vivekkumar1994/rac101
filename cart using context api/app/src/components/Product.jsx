import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
    const {isAuthorised} = useContext(AuthContext)
  return (
    <div>
        product : {isAuthorised ? "LoggedIn"  : "LoggedOut"}
        <Cart/>
      
    </div>
  )
}

export default Product

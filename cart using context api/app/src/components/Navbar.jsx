import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
    const {isAuthorised, login,logout} = useContext(AuthContext)
    const {buy} = useContext(CartContext)
    const {isLight,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      Navbar
      <button onClick={() =>{
          if(isAuthorised )  logout();
          
          else login("R","Z")
      }}>
          {isAuthorised ? "Logout" : "Login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${isLight ? "Dark" : "Light"}`}</button>
      {isAuthorised && <Wishlist/>}
    </div>
  )
}

export default Navbar

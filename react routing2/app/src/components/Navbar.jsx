import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const {isAuth,logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleonclick = () => {
        if(isAuth){
            logout()
            navigate("/")
            alert("logout now")

        }
        else{
            navigate("/login")
        }


    }
  return (
    <div style={{display:"flex",gap:"20px",padding:"10px",margin:"auto"}}>
      Navbar
      <Link to="">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to = "/carrier"> Carier</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleonclick}> {isAuth ? "Logout" :"Login"}</button>
    </div>
  )
}

export default Navbar

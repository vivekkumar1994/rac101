import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const navigate = useNavigate();
    const [logincred,setlogincred] = useState({})
    const {login} = useContext(AuthContext)
    const onChange = (e) => {
       
        const {name,value} = e.target;
        setlogincred({
            ...logincred,
            [name]:value,
        })

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        login();
        alert("login now")
        navigate("/feeds")

    }
  return (
    <div>Login
        <form onSubmit={handlesubmit} style={{display:"flex",flexDirection:"column",margin:"auto",maxWidth:"200px",gap:"10px"}}>
        <input name='email' type="email"  placeholder='enter email' onChange={onChange}/>
        <input name='password' type="password" placeholder='password' onChange={onchange}/>
        <button>Login</button>
        </form>
    </div>

  )
}

export default Login
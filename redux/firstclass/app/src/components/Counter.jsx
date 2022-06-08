import React from 'react'
import {addcounter,reducecounter} from "../redux/action"
import { AppContext } from '../redux/AppContextProvider'
  

 const Counter = () => {
  
  const {dispatch, getState} = React.useContext(AppContext)
  
  const {counter} = getState()

  const handleadd = () => {
    dispatch (addcounter(1));
  
          }
  
  const handlereduce = () => {
    dispatch (reducecounter(1));
  

  }
  return  <>
  <h1> Counter : {counter}</h1>
  <button onClick = {handleadd} >add</button>
  <button onClick  ={handlereduce}>reduce</button>

  </>

}
export {Counter}

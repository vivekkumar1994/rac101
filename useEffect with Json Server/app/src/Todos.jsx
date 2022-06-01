import React,{useState} from 'react'
import { useEffect } from 'react';

const Todos = () => {
  const [newtodo,setnewtodo] = useState("")
  const [todos,settodos] = useState([])
  const saveinfo = () => {
    fetch("http://localhost:3000/todos" ,{
      method:"POST",
   headers:{
     "content-type": "aplication/json",
   },
      body: JSON.stringify({
        "text": newtodo,
      "iscompleted": false
      }),
           
    })
   
    .then((r) => r.json())
    .then ((d) =>{
      settodos([...todos,d])
      setnewtodo("")
    });


  };
  useEffect(() => {
  
    fetch("http://localhost:3000/todos")
    .then((r) => r.json())
    .then ((d) =>{
    
        settodos(d)
    });
  },[]);
  return (
    <div>Todo

      <input value={newtodo} onChange = {({target})  => setnewtodo(target.value)}/>
      <button onClick={saveinfo}>+</button>
      {todos.map((todo)=> (
        <div key={todo.id}>{todo.text}</div>
        
      
      ))}
    </div>
  )
}

export default Todos
import React ,{useState} from 'react'
import styles from "./Todo.module.css"
import Todoitem from './Todoitem'

const Todo = () => {
    let [value,setvalue] = useState("ABCD")
    let [todos,setTodos] = useState([])

    const onDelete = (id) => {
        let newtodo = todos.filter((todo) => todo.id !== id);
        setTodos(newtodo)



    }
  return (
    <div>Todo

        <input value={value}
        onChange ={(e) => 
            setvalue(e.target.value)

        } 
        onKeyDownCapture = {(e) => {
            if(e.key=== "Enter"){
                setTodos([...todos,{id:Date.now(),value:value}])
                 setvalue("")

            }
        }}
        
        />   
           
         

             <div className={styles.todoList}>
         {todos.map((todo) => (
            <Todoitem className = {todo.id} todo = {todo} onDelete = {onDelete}/>

         ))}
         </div>
         
         
    </div>
   
  )
}

export default Todo


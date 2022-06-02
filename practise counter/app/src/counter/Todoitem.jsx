import React,{useState} from 'react'
import styles from "./Todo.module.css"

const Todoitem = ({todo , onDelete}) => {
    const [iscompleted,setcompleted] = useState(todo.iscompleted)

  return (
    <div className={styles.todo} key = {todo.id}>
        <input type="checkbox" 
         checked = {iscompleted}
         onChange = {(e) => {
             setcompleted(e.target.checked)
         }}/>
     
        <div className={iscompleted ? styles.striked : ""}>{todo.value}</div>
        <button onClick={() => {
            onDelete(todo.id)
        }}>Delete</button>
    </div>
  )
}

export default Todoitem
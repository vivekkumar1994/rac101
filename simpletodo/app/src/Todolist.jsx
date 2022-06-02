import {useState } from "react";
import {nanoid} from "nanoid"
import Todoitem from "./Todoitem"

const Todolist = () =>{
    const [task,setTask] = useState("");
    const [todo,setTodo] = useState ([])
    const [isLoggedIn,setloggedin] = useState(false)

    const handlechange  = (e) => {
        setTask (e.target.value)
    }

    const handleclick =() => {
        let taskObj  =  {
            id :nanoid(),
            title:task,
            status:false
        }
        setTodo([taskObj,...todo])
    }

    const handleDelete = (id) => {
        console.log(id)
        let newTodo = todo.filter(item=> item.id !== id  );
        setTodo(newTodo)
    }
    const handlelogin = ()=> {
        setloggedin(true)


    }
    const handlelogout =()=> {
        setloggedin(false)
    }

   //  if(!isLoggedIn){
       // 
   //  }

    return (
     <>
    <>
       <button onClick={handlelogout}>loged out</button>
<input type="text" value={task}  onChange = {handlechange} placeholder = "enter todo"/>
<button  onClick = {handleclick}>Add todo</button>
{
    todo.length ? todo.map(item =>{
        return <Todoitem key={item.id} {...item} handleId ={handleDelete}/>
    }) :<h1>no todo exist</h1>}

</>
     
))
    
    
    </>
    

    );

} 
export default Todolist
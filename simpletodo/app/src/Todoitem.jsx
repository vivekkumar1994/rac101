import React from "react";
const Todoitem = (props) =>{
    // console.log(item)
    const {title,id,status,handleId} = props


    return (
        <>
       <h1>{title}</h1>
       <button onClick={() =>
           handleId(id)} 
           >Delete</button>
        
        </>
    )
}
export default Todoitem
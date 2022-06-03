import React ,{useReducer} from 'react'
import './App.css';

const  reducer = (state,{type,payload}) => {
  switch(type){
    case "Increment":{
      return state + payload;

    }
    case "Decrement":{
      return state - payload;
      
    }
    default :{
      return state;
    }
  }
}


function App() {
  const [counter,dispatch] = useReducer(reducer, 0);
  
 


  return (
    <div className="App">
      Counter: {counter}
      <div>
            <button onClick= {()=>dispatch({   type : "Decrement",payload : 1})}>-</button>
            <button onClick ={() =>dispatch({type : "Increment",payload :1})}>+</button>
      </div>
     
    </div>
  );
}

export default App;

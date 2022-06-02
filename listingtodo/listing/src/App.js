import { useState } from 'react';
import './App.css';
import Counter from './listing/Counter';

function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="App">
     <button>Toggle</button>
     {if(toogle){
       return <Counter/>
     }
     ele{
       return <Todoapp/>
     }}

    </div>
  );
}

export default App;

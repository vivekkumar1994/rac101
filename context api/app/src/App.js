import React ,{useReducer} from 'react'
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)
  const handlechange = (e) => {
    setCounter  {(value: e.target.value)}

  };

  return (
    <div className="App">
      <input type={text} onChange = {handlechange}/>
     
    </div>
  );
}

export default App;

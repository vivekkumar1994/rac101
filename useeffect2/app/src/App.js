import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/About' element= {<About/>}/>
        <Route path='/Navbar' element= {<Navbar/>}/>
        <Route path='/Products' element= {<Products/>}/>
   </Routes>
    </div>
  );
}

export default App;

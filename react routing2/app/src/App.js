
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Feeds from './pages/Feeds';
import RequiredAuth from './hoc/RequiredAuth';
import Post from './pages/Post';
import Carrier from './pages/Carrier';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element = {<Home/> }/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/feeds' element ={<RequiredAuth><Feeds/> </RequiredAuth>}/>
      <Route path='/posts' element ={<RequiredAuth><Post/> </RequiredAuth>}/>
      <Route path='/carrier' element ={<RequiredAuth><Carrier/> </RequiredAuth>}/>
      
      </Routes>
      
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home/Home';
import Location from './Pages/Location';
import Login from './Pages/Login';
import Navbar from './Pages/Shared/Navbar';
// import Navbar from './Pages/Shared/Navbar'
function App() {
  return (
    <div className="App">  
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import Login from "./pages/Login/login"
import About from './pages/About/about'
import Register from "./pages/Register/register"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </div>
  );
}

export default App;

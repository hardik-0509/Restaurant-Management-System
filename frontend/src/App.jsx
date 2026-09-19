import { Routes, Route , useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Menu from './pages/menupage/Menu';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  const location = useLocation();
      
  return (

    <>
         
      {location.pathname !== '/' && location.pathname !== '/signup' && <Navbar />}
      <Routes>
        {/* Authentication Pages */}
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
       
        {/* Main Pages */}
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
      </Routes>
    </>
  );
}

export default App;
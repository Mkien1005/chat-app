import './App.css'
import Home from './pages/home/Home'
import LogIn from './pages/login/LogIn'
import Signup from './pages/signup/SignUp'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/' element={<Home />} />
      </Routes>
        
    </div>
  )
}

export default App

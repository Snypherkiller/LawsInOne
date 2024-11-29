import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import Login from './Pages/Login'

function App() {

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-red-100'>
      <Navbar/>
    <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/use history' element={}/>
    </Routes>
    </div>

  )
}

export default App

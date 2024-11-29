import React from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Login from '../Pages/Login'

const Navbar = () => {
  const location=useLocation();

  return (
    <div className='flex justify-between py-4'> 
      <Link to={'/'}>

        <img src={logo} alt="" className='w-28 sm:w-32 lg:w-20' />

      </Link>

      <div className='flex justify-between items-center gap-5'>
      <Link to={'/'}><h1>Home</h1></Link>
      <Link to={'/use history'}><h1>User History</h1></Link>

      {location.pathname !== '/login' &&(
          <Link to={'/login'}>        
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Login
            </button></Link>
      )}



    </div>
    </div>


  )
}

export default Navbar

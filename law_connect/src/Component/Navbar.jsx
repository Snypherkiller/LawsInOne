import React, { useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Login from '../Pages/Login'

const Navbar = () => {
  const location=useLocation();
  const [click,setClick]=useState(false);

  return (
    <div className='flex justify-between py-4'> 
      <Link to={'/'}> 
        <img src={logo} alt="" className='w-28 sm:w-32 lg:w-20' />
        Law Connect
      </Link>

      <div onClick={}>
        <i className= {click ? 'fas fa-times':'fas fa-bars'}/>
      </div>





    </div>


  )
}

export default Navbar

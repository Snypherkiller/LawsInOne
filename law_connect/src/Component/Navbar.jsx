import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5'> 
      <Link to={'/'}>
        <img src={logo} alt="" className='w-28 sm:w-32 lg:w-40' />
      </Link>
    </div>
  )
}

export default Navbar

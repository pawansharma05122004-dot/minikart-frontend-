import React from 'react'
import {  NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
     <nav className='bg bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <li>
            <NavLink to='/' className={({ isActive }) =>
              `${isActive ? "text-orange-600 font-bold" : "hover:text-green-600 font-bold"}`
            }>Home</NavLink> </li>
          <li>
            <NavLink to='/signup' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>SignUp</NavLink>
          </li>
          <li>
            <NavLink to='/login' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>Login</NavLink>
          </li>
          <li>
            <NavLink to='/cart' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>Check Cart</NavLink>
          </li>
          <li>
            <NavLink to='/postProduct' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>Post Product</NavLink>
          </li>
        </div>
      </nav>
    </header>
  )
}

export default Header
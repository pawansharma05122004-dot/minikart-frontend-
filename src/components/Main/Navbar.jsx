import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const userObject = JSON.parse(localStorage.getItem('user')) || '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    if (localStorage.getItem('user')) {
      toast("LogOut");
    }
  };

  return (
    <header >

      <div className='flex  justify-between items-center mx-auto space-x-4 '>
        <li className='flex  justify-between items-center mx-auto space-x-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <NavLink to='/addToCart' className={({ isActive }) =>
            `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold text-white`
          }>
            Check Cart</NavLink>
        </li>

        <li className='flex  justify-between items-center mx-auto'>
          <NavLink to='/postProduct' className={({ isActive }) =>
            `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold text-white`
          }>Become a Seller</NavLink>
        </li>

        <li className='flex  justify-between items-center mx-auto'>
          <NavLink to='/signup' className={({ isActive }) =>
            `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold text-white`
          }>SignUp</NavLink>
        </li>

        <li className='flex  justify-between items-center mx-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

          {userObject.user ? (
            <span onClick={handleLogout} className='cursor-pointer font-bold text-white'>
              Log Out
            </span>
          ) : (
            <>
              <NavLink to='/login' className={({ isActive }) =>
                `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
              }>
                Login</NavLink>
            </>
          )}
          <ToastContainer />
        </li>
      </div>

    </header>
  );
}

export default Navbar;

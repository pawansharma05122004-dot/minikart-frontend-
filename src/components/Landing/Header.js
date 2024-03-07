import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const userObject = JSON.parse(localStorage.getItem('user')) || '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    if (localStorage.getItem('user')) {
      toast("LogOut");
    }
  };

  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <li>
            <NavLink to='/' className={({ isActive }) =>
              `${isActive ? "text-orange-600 font-bold" : "hover:text-green-600 font-bold"}`
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to='/addToCart' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>Check Cart</NavLink>
          </li>
          {!userObject.user || !userObject ?
            <li>
              <NavLink to='/postProduct' className={({ isActive }) =>
                `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
              }>Post Product</NavLink>
            </li> : null
          }
          <li>
            <NavLink to='/signup' className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
            }>SignUp</NavLink>
          </li>

          <li>
            {userObject.user ? (
              <span onClick={handleLogout} className='cursor-pointer font-bold'>
                Log Out
              </span>
            ) : (
              <>
                <NavLink to='/login' className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "hover:text-green-600 "} font-bold`
                }>Login</NavLink>
              </>

            )}
            <ToastContainer />
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;

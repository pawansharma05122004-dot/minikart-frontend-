import React from 'react';
import Navbar from './Navbar'
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <h1 className="text-xl font-bold">Minikart</h1>
          <Searchbar/>
          <Navbar/>
        </div>
      </nav>
    </header>
  );
}

export default Header;

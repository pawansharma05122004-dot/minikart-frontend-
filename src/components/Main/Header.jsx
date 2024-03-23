import React,{createContext} from 'react';
import Navbar from './Navbar'
import Searchbar from './Searchbar';
import { useNavigate } from 'react-router';

function Header() {
  const navigate = useNavigate()
  
  const handleNavigate =()=>{
    navigate('/')
  }
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <button onClick={handleNavigate} className='font-serif font-bold'>Minikart</button>
          <Searchbar/>
          <Navbar/>
        </div>
      </nav>
    </header>
  );
}

export default Header;

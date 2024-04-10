import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ContextDataCreate } from '../Context/ContextState';
import Sidebar from './Sidebar';

const Home = () => {
  const [data, setData] = useState({ data: [], isLoading: false });
  const contextData = useContext(ContextDataCreate)

  useEffect(() => {
    if (contextData.searchData.serach) {
      setData({ data: contextData.searchData.serach, isLoading: true })
    }
  }, [contextData.searchData.serach]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/products/getProducts`);
      setData({ data: result.data.result, isLoading: true });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <div className='bg-gray-100 flex min-h-screen'>
      <div className='mg:bg-gray-100 flex min-h-screen'>
      <Sidebar/>
      </div>
      
      <div className='container mx-auto pt-5'>
        {data.isLoading ? (
          <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {data.data.map((item) => (
              <Link to={`/productbyid/${item._id}`} key={item._id}>
                <div className='flex flex-col justify-center items-center bg-white shadow-md rounded-lg overflow-hidden'>
                  <div className='box-border h-52 w-52 p-4 border-4 border-gray-200'>
                    <img src={item.product_img !== null ? item.product_img : '/noimage.png'} alt='product' className='h-32 w-full object-cover' />
                  </div>
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold mb-2'>{item.product_name}</h3>
                    <p className='text-gray-600 mb-2'>{item.description}</p>
                    <div className='flex justify-between mb-2'>
                      <p className='text-lg font-semibold text-blue-500'>${item.price}</p>
                      {item.discount && <p className='text-lg font-semibold text-red-500'>Save {item.discount}%</p>}
                    </div>
                    <div className='flex justify-between mb-4'>
                      <p className='text-gray-700'>Brand: {item.brand}</p>
                      <p className='text-gray-700'>Rating: {item.rating}/5</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <svg className='animate-spin h-10 w-10 mr-3 text-blue-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0117.709 5.29L21 8.582M12 20V24c6.627 0 12-5.373 12-12h-4'></path>
            </svg>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );

};

export default Home;

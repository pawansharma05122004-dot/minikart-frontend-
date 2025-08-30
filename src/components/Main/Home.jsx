import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextDataCreate } from '../Context/ContextState';
import Sidebar from './Sidebar';

const Home = () => {
  const contextData = useContext(ContextDataCreate)
  
  return (

    <div className='bg-gray-100 flex min-h-screen space-x-4 '>
      {/* <div className='mg:bg-gray-100 flex min-h-screen pt-5 px-5 '>
        <Sidebar />
      </div> */}

      <div className='container mx-auto pt-5'>
        {!contextData.productDetails.data.isLoading ? (
          
          <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5'>
              {/* <img src="data:image/jpeg;base64,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" alt='product' className='h-32 w-full object-cover' />  */}
            {contextData.productDetails.data.map((item) => (
             
              <Link to={`/productbyid/${item._id}`} key={item._id}>
                <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  {/* Image Section */}
  <div className="relative">
    <div className="h-52 w-full bg-gray-100 flex items-center justify-center border-b border-gray-200">
      <img
        src={item.product_img !== null ? item.product_img : '/noimage.png'}
        alt="product"
        className="h-40 object-contain"
      />
    </div>
    {item.discount && (
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {item.discount}% OFF
      </span>
    )}
  </div>

  {/* Content Section */}
  <div className="p-4 space-y-2">
    <h3 className="text-lg font-semibold text-gray-800 truncate">{item.product_name}</h3>
    <p className="text-sm text-gray-500 h-12 overflow-hidden text-ellipsis">{item.description}</p>

    {/* Price Row */}
    <div className="flex items-center gap-x-3">
      <p className="text-xl font-bold text-blue-600">${item.price}</p>
      {item.discount && (
        <p className="text-sm line-through text-gray-400">
          ${(item.price / (1 - item.discount / 100)).toFixed(2)}
        </p>
      )}
    </div>

    {/* Brand and Rating */}
    <div className="flex justify-between text-sm text-gray-600 pt-2 border-t border-gray-200 mt-2">
      <p><span className="font-medium">Brand:</span> {item.brand}</p>
      <p><span className="font-medium">Rating:</span> ⭐ {item.rating}/5</p>
    </div>

    {/* Optional CTA Button */}
    <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">
      View Details
    </button>
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

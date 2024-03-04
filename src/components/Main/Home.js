import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState({ data: [], isLoading: false });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/products/getProduct`);
      console.log(result.data.result)
      setData({ data: result.data.result, isLoading: true });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container mx-auto pt-5 flex-grow'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

          {data.isLoading ? (
            data.data.map((item) => {
              return (
                <>
                  <div key={item._id} className='flex flex-col bg-white shadow-md rounded-lg overflow-hidden'>

                    <img src={item.product_img !== null ? item.product_img : '/noimage.png'} alt='product' className='h-64 w-full object-cover' />
                    <div className='p-4'>
                      <h3 className='text-xl font-semibold'>{item.product_name}</h3>
                      <p className='text-lg text-gray-700'>Price: ${item.price}</p>
                      <div className='flex justify-between mt-4'>
                        <Link to={`/productbyid/${item._id}`}>
                          <button className='py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700'>
                            View Details
                          </button>
                        </Link>
                        <button className='py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )

            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

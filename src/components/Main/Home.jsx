import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ContextDataCreate } from '../Context/ContextState';


const Home = () => {
  const [data, setData] = useState({ data: [], isLoading: false });
  const [cartButton, setCartButton] = useState('Add to Cart')
  const navigate = useNavigate();
  const contextData = useContext(ContextDataCreate)

  const userObject = JSON.parse(localStorage.getItem('user')) || '';

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
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/products/getProduct`);
      setData({ data: result.data.result, isLoading: true });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/cartItem/postCartItem`, {
        userId: userObject.user._id || '',
        productId: productId,
        quantity: "1"
      })
      if (result.status === 201) {
        setCartButton('Check Cart')
      }
      if (result.data) {
        navigate("/addToCart")
      } else {
        console.log(result.data.result)
      }
    } catch (err) {
      if (err.response === undefined) {
        navigate('/loginUser')
      }
    }
  }

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
                        <button className='py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700' onClick={() => handleAddToCart(item._id)}>
                          {cartButton}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          ) : (
            <div role="status">
              <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

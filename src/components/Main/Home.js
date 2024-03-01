import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'

const Home = () => {
  const [data, setData] = useState({ data: [], search: '', isloading: false, })
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 6;
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:8000/api/v1/minikart/products/getProduct');
      setData({ data: result.data.result, isloading: true });
    } catch (error) {
      throw error;
    }
  };

  return (
    <container className=' mx-auto px-4'>
      <div className='flex justify-center bg-amber-300'>
        <input type='text' placeholder='Search User Name' className='h-12 w-72' name='search' value={data.search || ''} onChange={(e) => setData.search(e.target.value)} />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>

      <container className='grid grid-cols-3 gap-3 mx-auto pt-5'>
        {
          data.data.map((items) => {

            return (
              <div className='flex space-around'>
                <div>
                  <img src={items.product_img} alt='img' height='200px' width='400px' />
                </div>
                <div>
                  <p className='text-2xl'>{items.product_name}</p>
                  < p className='text-2xl'>{items.price}</p>
                  <Link to={`/buynow/${items._id}`}>
                    <button className='bg-green-600'>Buy Now</button>
                  </Link>
                  <button className='bg-blue-600'>Add to Cart</button>
                </div>

              </div>
            )
          })
        }
      </container>

      <div className=' flex space-x-2  mx-auto  '>
      </div>
    </container>
  )
}

export default Home
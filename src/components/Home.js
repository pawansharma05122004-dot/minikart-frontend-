import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'

const Home = () => {
  const [data, setData] = useState({ users: [],search:'',isloading: false, })
  const [currentPage ,setCurrentPage] = useState(1)
  const perPage = 6;
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('https://dummyjson.com/users');
      setData({ users: result.data.users, isloading: true });
    } catch (error) {
      throw error;
    }
  };

  const handleSearch = async () => {
    data.users.forEach((item) => {
      if (data.search.toLowerCase().includes((item.firstName).toLowerCase())) {
        setData({users:[item]})
      }
    })
  }

  const displayPages = [...Array(perPage + 1).keys()].slice(1);
  const indexOfLast = (currentPage) * perPage;
  const indexOfFirst = indexOfLast - perPage;
  

  const handleNextPage = () => {
    if(data.currentPage !== 6)
    setCurrentPage(data.currentPage + 1)
  }

  const handlePrevPage = () => {
    if(data.currentPage !== 1)
    setCurrentPage(data.currentPage - 1)
  }

  console.log(data)

  return (
    <container className=' mx-auto px-4'>
      <div className='flex justify-center bg-amber-300'>
        <input type='text' placeholder='Search User Name' className='h-12 w-72' name='search' value={data.search || ''} onChange={(e) => setData.search(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <container className='grid grid-cols-3 gap-3 mx-auto pt-5'>
         {data.isloading ?
          data.users.slice(indexOfFirst, indexOfLast).map((user) => {

            const { firstName, lastName, image, id } = user
            return (
              <div key={user.id} className='border-4 border-slate-500 rounded-l-lg '>
                <div className='bg-gray-400 text-2xl flex'>{id}
                  <p className='px-2 font-extrabold'> {firstName} </p>
                  <p className='font-extrabolds'>{lastName} </p>
                </div>
                <img src={image} alt='users' className='h-56 w-56' />
                <div className='text-xl text-blue-700 font-extrabold text-center bg-white-900'>
                  <Link to={`userProfile/${id}`}>Load More ...</Link>
                </div>
              </div>
            )
          }) : <div className='flex flex-col items-center justify-center h-screen'><FadeLoader color="#36d7b7" /></div>
        }
      </container>

      <div className=' flex space-x-2  mx-auto  '>
        <span onClick={handlePrevPage}>Previoss</span>
        {
          displayPages.map((page => {
            return (
              <>
                <span key={page} onClick={() => setCurrentPage(page)}>{`${page} |`}</span>
              </>
            )
          }))
        }
        <span onClick={handleNextPage}>Next</span>
      </div>
    </container>
  )
}

export default Home
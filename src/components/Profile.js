import React, { useEffect, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState([])
  const [isloading, setIsLoading] = useState(false)
   let navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://dummyjson.com/users/${userId}`);
        console.log(result)
        setUser(result.data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='mx-auto'>
      <span > <h1 className='text-2xl text-center font-bold bg-amber-300 mt-5'> Profile</h1> </span>
           {/* <button onClick={navigate ('/home')}>Back</button> */}
      <div className='bg-red-200 flex border-solid border-2 border-indigo-600 w-56 justify-center'>
      <img src={user.image}alt='profile' />
      </div>
      <table className='border-separate border-spacing-2 border border-slate-900 ... '>
        <thead>
          <tr>
            <th className='border border-slate-300 '>Filed</th>
            <th className='border border-slate-300 '>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-slate-300 '>
              Age
            </td>
            <td className='border border-slate-300 '> {user.age}</td>
          </tr>
          <tr>
            <td className='border border-slate-300 '>
              First Name
            </td>
            <td className='border border-slate-300 '> {user.maidenName}</td>
          </tr>
          <tr>
            <td className='border border-slate-300 '>Last Name</td>
            <td className='border border-slate-300 '>{user.lastName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Profile
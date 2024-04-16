import React, { useContext, useState} from 'react'
import { ContextDataCreate } from '../Context/ContextState'

export default function SearchBar() {
  const contexData = useContext(ContextDataCreate)
  console.log(contexData)
  return (
      <div className='flex justify-between items-center mx-auto space-x-4 shadow sticky z-50 top-0'>
        <button onClick={contexData.handleSearchProduct}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
          </svg>
        </button>
        <input type='text' placeholder='Search Minikart item here' className='md:w-96 h-8' onChange={(e) => contexData.setSearchValue(e.target.value)} />
      </div>
  )
}
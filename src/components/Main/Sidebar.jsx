import React from 'react'

function Sidebar() {
  return (
    <div>

<aside className='h-screen w-72 bg-blue-100'>
        <nav className=' h-full flex felx-col'>
          <div className='p-4 '>
            <select className='w-56'>
                <option value="">New Item</option>
                <option value="">High Rated</option>
                <option value="">Low Price</option>
                <option value="">Discount</option>
              
            </select>

          </div>
          {/* <MoreVertical size ={20}/> */}
        </nav>

      </aside>
    </div>
  )
}

export default Sidebar
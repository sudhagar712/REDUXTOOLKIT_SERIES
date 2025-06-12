import React, { useState } from 'react'
import Products from './Products'

const Home = () => {

const [searchQuery , setSearchQuery] = useState("")


const cancel = () => {
    setSearchQuery("")
}



  return (
    <div>
      <div className="flex justify-end p-4 relative">
       
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Products"
            className="px-3 border-0 outline-0 bg-gray-200 p-4 rounded-md md:w-[50%] w-[100%]"
          />

          <div onClick={cancel} className='absolute top-8 right-10 bg-black text-white  px-2 cursor-pointer'>X</div>

       
      </div>
      <Products searchQuery={searchQuery} />
    </div>
  );
}

export default Home

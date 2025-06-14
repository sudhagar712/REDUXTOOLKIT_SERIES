import React from 'react'
import { useGetSingleProductQuery } from '../features/apiSlice'
import { useParams } from 'react-router-dom';



const ProductDetails = () => {

const {id} = useParams()

 const {data, error, isLoading } =   useGetSingleProductQuery(id);

 if(isLoading) return <p>Loading...</p>

 if(error) return <p>Something went wrong</p>

 
  return (
    <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-10 px-10 p-10'>
         
         <div>
            <img src={data.image} alt={data.title}  className='w-full h-[600px]'/>
         </div>

         <div>
            <h1 className='text-red-500 text-3xl'>{data.category}</h1>
            <h3>{data.title}</h3>
             <h5>{data.description}</h5>
         </div>
       
    </div>
  )
}

export default ProductDetails;

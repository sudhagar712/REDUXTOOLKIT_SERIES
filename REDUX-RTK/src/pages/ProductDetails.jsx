import React from 'react'
import { useGetSingleProductQuery } from '../features/apiSlice'
import { Link, useParams } from 'react-router-dom';


const ProductDetails = () => {

const {id} = useParams()

 const {data, error, isLoading } =   useGetSingleProductQuery(id);

 const products = data?.data ;



 if(isLoading) return <p>Loading...</p>

 if(error) return <p>Something went wrong</p>

 
  return (
    <div className='px-5 p-5'>
    <Link to="/"><button className='bg-black px-5 text-white p-3 '>Back</button></Link>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-10 px-10 p-10">
        <div>
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-[200px] md:h-[600px]"
          />
        </div>

        <div className="">
          <h1 className="font-bold text-3xl mb-5">{products.name}</h1>
          <h5>{products.description}</h5>
          <p className="text-3xl text-green-500 mb-10">
            Price:{products.price}
          </p>

          {products.stock > 0 ? (
            <div>
              <button className="bg-red-500  px-9 p-3 ">ADD CART</button>
            </div>
          ) : (
            <div>
              <button className="bg-gray-300">OUTOFSTOCK</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

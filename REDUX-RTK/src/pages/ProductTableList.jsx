import React from 'react'
import { useGetProductsQuery } from '../features/apiSlice';

const ProductTableList = () => {
  const { data } = useGetProductsQuery();

  const products = data?.data || [];


  return (
    <div className="mt-5 p-5">
      <h2 className="text-2xl font-bold mb-4">Product List </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-sky-200 text-left">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">image</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.description}</td>

                <td className="py-2 px-4 border-b">₹{item.price}</td>
                <td className="py-2 px-4 border-b">{item.stock}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>

                <td className="md:py-2 px-3  text-center py-2 md:px-4 border-b md:space-x-2 space-y-3">
                  <button className="bg-yellow-400 text-white md:px-3 md:py-1  py-1 px-2 rounded text-sm hover:bg-yellow-500">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white md:px-3 md:py-1 py-1 px-2 rounded text-sm hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTableList

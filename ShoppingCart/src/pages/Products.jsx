import React from 'react'
import products from "../data"
import Card from '../Components/Card'

const Products = ({searchQuery}) => {

    const filterProducts = products.filter((item) => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )






  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filterProducts.length > 0 ? (
        filterProducts.map((item) => {
            return <Card key={item.id} item={item} />;
          })
      ): (<p className='col-span-full text-center text-gray-500'>No products found</p>)}

      
    </div>
  );
}

export default Products

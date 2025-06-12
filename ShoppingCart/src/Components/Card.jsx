import React from "react";
import { Link } from "react-router-dom";




const Card = ({ item }) => {

 
  const { id, title, description, category, price, image } = item;

  return (
    <Link to={`/product/${id}`}>
      <div className="border p-4 rounded shadow hover:shadow-md transition">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain mb-4"
        />
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {description.slice(0, 80)}...
        </p>
        <h4 className="text-red-600 font-bold">${price}</h4>
      
      </div>
    </Link>
  );
};

export default Card;

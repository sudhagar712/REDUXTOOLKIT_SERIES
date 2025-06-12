import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product Not found</h2>;
  }

  const { title, description, category, price, image } = product;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-7">
      <div>
        <Link to="/">
          <button className="bg-black px-7 py-3 p-1 text-white">Back</button>
        </Link>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={image} alt="" className="w-[300px] h-[300px]" />
        <div>
          <p className="text-red-600 mb-4">{category}</p>
          <h2 className="text-black font-bold mb-4">{title}</h2>
          <h5 className="">{description}</h5>
          <h6>{price}</h6>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-orange-400 px-3 py-2 text-white mt-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import PostForm from "./PostForm";
import ProductTableList from "./ProductTableList";

const PostProduct = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBackdropClick = () => {
    setShowModal(false);
  };

  return (
    <div className="md:p-5 px-2 md:px-10 mt-4">
      <h1 className=" text-xl">ADD New Product</h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-sky-300  p-3 px-3 mt-3 rounded"
      >
        Add post +
      </button>

      {showModal && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg md:w-[50%] w-[90%]  "
          >
           <PostForm/>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}



{/* table list */}

<ProductTableList/>


    </div>
  );
};

export default PostProduct;

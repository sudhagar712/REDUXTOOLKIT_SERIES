import React, { useState } from 'react'
import { useCreatePostMutation } from '../features/apiSlice';

const PostForm = () => {

const [formData, setFormData] =useState({
    name:"",
    price:"",
    description:"",
    stock:"",
    image:""
})

  const [createPost, {isLoading, isSuccess, isError}] = useCreatePostMutation()


  return (
    <div>
      <h1 className="text-3xl font-thin mb-9">Add Product</h1>
      <form className="mb-5">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 outline-none border-2 border-sky-200 rounded-md "
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            className="w-full p-2 outline-none border-2 border-sky-200 rounded-md "
            id=""
          ></textarea>
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            className="w-full p-2 outline-none border-2 border-sky-200 rounded-md "
          />
        </div>

        <div>
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            className="w-full p-2 outline-none border-2 border-sky-200 rounded-md "
          />
        </div>

        <div>
          <label>Image</label>
          <input
            type="file"
            name="image"
            className="w-full p-2 outline-none border-2 border-sky-200 rounded-md "
          />
        </div>

       
      </form>
    </div>
  );
}

export default PostForm

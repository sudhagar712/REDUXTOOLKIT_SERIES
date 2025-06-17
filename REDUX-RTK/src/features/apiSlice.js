import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
         reducerPath: "api",
         baseQuery: fetchBaseQuery({
           baseUrl: "http://localhost:8900/api/v1/"
         }),
         endpoints: builder => ({
           //allproducts get
           getProducts: builder.query({
             query: () => "products"
           }),

           //singleproduct get
           getSingleProduct: builder.query({
             query: id => `products/${id}`
           }),

         
           //create products 
           createPost: builder.mutation({
            query:(newPost) => ({
                url:"products",
                method:"POST",
                body:newPost,
                headers:{
                    "content-type": "application/json"
                }

            })
           })



         })
       });

export const {useGetProductsQuery, useGetSingleProductQuery , useCreatePostMutation} = apiSlice
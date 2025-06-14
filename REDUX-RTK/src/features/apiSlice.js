import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints: (builder) => ({
        //allproducts get
        getProducts:builder.query({
            query:()=> 'products',
        }),

    //singleproduct get
       getSingleProduct: builder.query({
        query: (id) => `products/${id}`
       })

    }),
})

export const {useGetProductsQuery, useGetSingleProductQuery} = apiSlice
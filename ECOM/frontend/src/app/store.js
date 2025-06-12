import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slice Redux/themeSlice"
import productReducer, { productFetch } from "../Slice Redux/productSlice"

export const store = configureStore({
         reducer: {
           themeInfo: themeReducer,
           productInfo:productReducer
         }
       });

       store.dispatch(productFetch());
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    status:null,
   
}

export const productFetch = createAsyncThunk("products/productFetch", 
    async()=> {
        const response = await axios.get("http://localhost:8000/products")
       return response ?.data
})

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
       builder
         .addCase(productFetch.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(productFetch.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload;
         })
         .addCase(productFetch.rejected, (state) => {
            state.status = 'rejected'
         })
    }
})

export default productSlice.reducer
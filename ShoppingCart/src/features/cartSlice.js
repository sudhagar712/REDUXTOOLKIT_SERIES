import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    cartItems:[],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const item = action.payload
            const exist = state.cartItems.find(i => i.id === item.id)

            if(exist){
                exist.quantity += 1;
            }else{
                state.cartItems.push({...item , quantity:1})
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(i=> i.id !== action.payload)
        },
        clearCart:(state) => {
            state.cartItems = [];
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
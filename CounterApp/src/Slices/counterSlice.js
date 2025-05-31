import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    counter:0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment : (state, action)=> {
            state.counter = state.counter + action.payload
        },
        decrement: (state , action) => {
            if(state.counter > 0){
                state.counter = state.counter - action.payload;
            }
          
        },
        reset: (state) => {
             state.counter = 0
        }
    }
})

export const{increment, decrement,reset } = counterSlice.actions;
export default counterSlice.reducer

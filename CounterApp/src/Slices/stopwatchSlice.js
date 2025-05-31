import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    time:0,
    isRunning :false
}

export const stopwatchSlice =  createSlice({
    name:   "stopwatch",
    initialState,
    reducers: {
        start: (state)=> {
            state.isRunning = true;
        },
        stop:(state)=> {
            state.isRunning = false;
        },
        resetwatch:(state)=> {
             state.time=0;
            state.isRunning = false
        },
        tick:(state)=> {
            if(state.isRunning){
                state.time += 1;
            }
        }
    }
})

export const { start, stop, resetwatch, tick } = stopwatchSlice.actions;
export default stopwatchSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/counterSlice";
import stopwatchReducer from "../Slices/stopwatchSlice";



export const Store = configureStore({
         reducer: {
           CounterInfo: counterReducer,
           stopWatchInfo: stopwatchReducer
         }
       });
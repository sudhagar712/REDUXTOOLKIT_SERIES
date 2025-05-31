import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from '../Slices/counterSlice';
import { start, stop, resetwatch, tick } from "../Slices/stopwatchSlice";

const Counter = () => {
const dispatch =   useDispatch()
const Counter = useSelector((state) => state.CounterInfo.counter);
 const time = useSelector((state) => state.stopWatchInfo.time);
 const isRunning = useSelector((state) => state.stopWatchInfo.isRunning);



useEffect(()=> {
    let interval;
    if(isRunning){
        interval = setInterval(() => {
          dispatch(tick());
        }, 1000);
    }
    return () => clearInterval(interval)
}, [isRunning, dispatch])



  return (
    <div style={{ padding: "20px" }}>
        {/* ...............counter ...................................... */}
      <h1>Counter: {Counter}</h1>
      <div className="btncls">
        <button onClick={() => dispatch(increment(1))}>Add</button>
        <button onClick={() => dispatch(decrement(1))}>Sub</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <hr style={{ margin: "30px 0 " }} />

      {/*......................... stopwatch..................................  */}
      <h1>Stopwatch : {time}s</h1>
      <div className="btncls">
        <button onClick={() => dispatch(start())}>Start</button>
        <button onClick={() => dispatch(stop())}>Stop</button>
        <button onClick={() => dispatch(resetwatch())}>Reset</button>
      </div>
    </div>
  );
}

export default Counter

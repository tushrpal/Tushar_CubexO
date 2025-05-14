
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  
  const [amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  const HandleIncrementClick=()=>{
    dispatch(increment());
  }

  const HandleDecrementClick=()=>{
    dispatch(decrement());
  }

  const HandleResetClick=()=>{
    dispatch(reset());
  }
  const HandleIncAmtClick=()=>{
    dispatch(incrementByAmount(amount));
  }

  return (
   <div className='container'>
    <button onClick={HandleIncrementClick}> + </button>
    <p>Count: {count}</p>
    <button onClick={HandleDecrementClick}> - </button>
    <br />
    <br />
    <button onClick={HandleResetClick}> Reset </button>
    <br/>
    <br/>
    <input type="number" 
    value={amount}
    placeholder='Enter Amount'
    onChange={(e)=>setAmount(e.target.value)}
    />
    <br />
    <br />
    <button onClick={HandleIncAmtClick}> Inc by Amount </button>
  
   </div>
  )
}

export default App

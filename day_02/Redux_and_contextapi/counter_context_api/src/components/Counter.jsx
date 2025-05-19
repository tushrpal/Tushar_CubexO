import React,{useContext} from "react";
import {CounterContext} from "../context/Counter"
export const Counter = () => {

    const counterState=useContext(CounterContext);
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={()=>counterState.setCount(counterState.count+1)}>INC</button>
            <button onClick={()=>counterState.setCount(counterState.count-1)}>DEC</button>
        </div>
    );
}

import React from "react";
import { useContext } from "react";
import {CartContext} from '../context/cart'
const Cart=()=>{
    const cart=useContext(CartContext);
    const total=cart.items.reduce((a,b)=>Number(a) +Number( b.price),0)
    return(
        <div className="cart">
            <h1>Cart</h1>
            {
                cart.items&&cart.items.map((e)=><li>{e.name}-{e.price}</li>)
            }
            <h5>Total Bill:${total}</h5>
            <button onClick={()=>{cart.setItems([])}}>Clear</button>
        </div>
    )
}

export default Cart;
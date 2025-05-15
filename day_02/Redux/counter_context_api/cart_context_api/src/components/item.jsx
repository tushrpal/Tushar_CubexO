import React from "react";
import {useContext} from "react" 
import {CartContext} from "../context/cart"
const Item=(props)=>{

    const cart=useContext(CartContext);
    console.log(cart)
    return(
        <div className="Item_card">
            <h4>{props.name}</h4>
            <p>Price: {props.price}$</p>
            <button onClick={()=>cart.setItems([...cart.items,{name:props.name,price:props.price}])}>Add to Card</button>
        </div>
    )
}

export default Item
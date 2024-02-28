import React, { useState, createContext } from "react";

const CartContext = createContext();

export default function ContextData(props) {

   const [cart, addCart] = useState('beg')

   return (
      <CartContext.Provider cart={cart}>
         {props.children}
      </CartContext.Provider>
   )
}

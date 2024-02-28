import React from 'react'
import { useContext } from 'react'
import ContextData from './userCart/contextData';

function Cart() {
  const item = useContext(ContextData);
  console.log(ContextData)
  console.log('items', item)
  return (
    <div>Cart</div>
  )
}

export default Cart
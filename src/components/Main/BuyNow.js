import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function BuyNow() {
    const {productId}= useParams()
    console.log(productId)
    useEffect(()=>{
        const userObject = JSON.parse(localStorage.getItem('user'));
        let UserID=userObject.user._id

          const getBuyDetails=async()=>{
           const result = await axios.post('http://localhost:8000/api/v1/minikart/purchase/getPurchaseItem',{
              UserID,productId
            })
            console.log(result)
          }

          getBuyDetails()
    })
  return (
    <div>BuyNow</div>
  )
}

export default BuyNow
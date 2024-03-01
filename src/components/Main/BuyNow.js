import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BuyNow() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const userObject = JSON.parse(localStorage.getItem('user'));
        const UserID = userObject.user._id;

        const getBuyDetails = async (body) => {
            try {
                const result = await axios.post('http://localhost:8000/api/v1/minikart/purchase/getPurchaseItem', body);
                setItem(result.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getBuyDetails({
            purchaseUser: UserID,
            productDetails: productId
        });
    }, [productId]);

    return (
        <div>
            <div className='bg-blue-400'>
                <h1>Item Ordered Successfully</h1>
                <div className='border bg-green-300 rounded-md'>
                    {item ? (
                        <>
                            <ul>Email: {item.purchaseUser.email}</ul>
                            <ul>Name: {item.purchaseUser.name}</ul>
                            <ul>Product Name: {item.productDetails.product_name}</ul>
                            <ul>Price: {item.productDetails.price}</ul>
                        </>
                    ) : (
                        <p>Please wait...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BuyNow;

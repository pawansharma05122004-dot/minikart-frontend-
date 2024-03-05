import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AddToCart() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const userObject = JSON.parse(localStorage.getItem('user'));
        const UserID = userObject.user._id;

        const getBuyDetails = async (body) => {
            try {
                const result = await axios.post(`${process.env.REACT_APP_API_URL}/cartItem/getaddToCart`, body);
                setItem(result.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getBuyDetails({
            userId: UserID,
        });

        // Disable body scrolling
        document.body.style.overflow = 'hidden';

        return () => {
            // Re-enable body scrolling when the component unmounts
            document.body.style.overflow = 'auto';
        };
    }, [productId]);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className='bg-blue-400 p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-4">Item Added Successfully</h1>
                <div className='border bg-green-300 rounded-md p-4'>
                    {item ? item.map((item) => {
                        console.log(item)
                        return (
                            <>
                                <p><span className="font-semibold">Name:</span> {item.productId
                                }</p>
                                <p><span className="font-semibold">Product Name:</span> {item.productId
                                }</p>
                                <p><span className="font-semibold">Price:</span> {item.productId
                                }</p>
                            </>
                        )
                    }) : (
                        <p className="text-center">Please wait...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddToCart;

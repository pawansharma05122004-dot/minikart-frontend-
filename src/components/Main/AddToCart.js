import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                toast.error(error.response.data.err)
            }
        };

        getBuyDetails({
            userId: UserID,
        });
    }, [productId]);

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className='bg-blue-400 p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-4">Item Added Successfully</h1>
                <div className='border bg-green-300 rounded-md p-4'>
                    < table class="table-fixed" >
                        <thead>
                            <tr>
                                <th>product</th>
                                <th>product_img</th>
                                <th>Price</th>
                                <th>quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {item ? item.map((item) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item.productById.product_name}</td>
                                        <td> <img src={item.productById.product_img} alt='img' className='h-24 w-48' /></td>
                                        <td>{item.productById.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.quantity*item.productById.price}</td>
                                    </tr>
                                </tbody>
                            )
                        }) : (
                            <p className="text-center">Please wait...</p>
                        )}
                    </table>

                </div>
                <button>Order Item</button>
                <ToastContainer />
            </div>
        </div >
    );
}

export default AddToCart;

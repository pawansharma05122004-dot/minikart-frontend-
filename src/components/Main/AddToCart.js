import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

                setItem(result.data.result[0].products);

            } catch (error) {
                toast.error(error.response.data.err)
            }
        };

        getBuyDetails({
            userId: UserID,
        });
    }, [productId]);


    return (
        <div className=" bg-gray-100">
            <div className=' p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-4">Item Added Successfully</h1>
                <div className='border rounded-md p-4'>
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th>quantity</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {item ? item.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>{item.productId.product_name}</td>
                                        <td> <img src={item.productId.product_img} alt='img' className='h-24 w-48' /></td>
                                        <td>{item.productId.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.quantity * item.productId.price}</td>
                                    </tr>
                                </tbody>
                            )
                        }) : (
                            <td className="text-center">Please wait...</td>
                        )}
                    </table>
                </div>
                <Link to='/OrderProduct'>
                    <button>Order Item</button>
                </Link>
                <ToastContainer />
            </div>
        </div >
    );
}

export default AddToCart;

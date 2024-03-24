import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from "@stripe/stripe-js";

function OrderProduct() {
    const [data, setData] = useState('')
    const [orderDetails, setOrderDetails] = useState([]);
    const [sessionCheckout, setSessionCheckOut] = useState({})
    const [showModal, setShowModal] = useState(false);
    const userObject = JSON.parse(localStorage.getItem('user')) || '';

    useEffect(() => {
        getOrderDetails()
    }, [])

    const handleCustomerDetails = (e) => {
        const { value, name } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const postCustomerDetials = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/customer/createOrder`, data)
        } catch (error) {
            console.log(error)
        }
    }

    const getOrderDetails = async () => {
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/order/getOrderDetails`, { userId: userObject.user._id || '', })
            console.log(result)
            setOrderDetails(result.data.result)
        } catch (error) {

        }
    }

    const makePayment = async () => {
        const stripe = await loadStripe("your-publishable-key");
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/orderPayment/postPayment`, {
            "name": "iphone",
            "price": "1000",
            "quantity": "2"
        })
        if (result.data.id) {
            setSessionCheckOut(result.data.id)
            toast.success('payment done successfully')
        }
        setSessionCheckOut(result.data.id)

        const paymentData = stripe.redirectToCheckout({
            sessionCheckout: sessionCheckout
        })

        if (paymentData.error) {
            console.log(paymentData.error)
        }

    }
    const closeModal = () => {
        setShowModal(false);
    };

    const openModal = () => {
        setShowModal(true);
    };
    return (
        <div className=" bg-gray-100">
            <div className=' p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-4">Delivery  Item</h1>
                <div className='bg-white shadow-md rounded-md border grid grid-cols-1 gap-4 rounded-md p-4'>
                    <div>Get Addess Detailas and deliver Item
                        {
                            orderDetails.map((details) => {
                                return (
                                    <>
                                        <ul>
                                            <li> Total Bill Amount :{details.totalAmount}</li>{ }
                                            <li>{details.customerDetails.name}</li>
                                            <li>{details.customerDetails.phone_number}</li>
                                        </ul>
                                    </>
                                )
                            })
                        }

                    </div>
                    <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fill Address</button>
                    {showModal && (
                        <div className="fixed inset-0 flex justify-center items-center overflow-y-auto bg-gray-500 bg-opacity-75">
                            <div className="bg-white rounded-lg shadow-lg p-8 w-1/3 h-auto">
                                <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4">&times;</button>
                                <h2 className="text-xl font-bold mb-4">Add Address</h2>
                                <form onSubmit={(e) => { postCustomerDetials(e) }} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700">Name</label>
                                        <input type='text' placeholder='Name' name='name' value={data.name || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700" >Address</label>
                                        <input type='text' placeholder='address' name='address' value={data.address || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Phone Number</label>
                                        <input type='text' placeholder='Phone Number' name='phone_number' value={data.phone_number || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Pin Code</label>
                                        <input type='text' placeholder='name' name='pinCode' value={data.pinCode || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700">Locality</label>
                                        <input type='text' placeholder='name' name='locality' value={data.locality || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Address area & Street</label>
                                        <input type='text' placeholder='Address area & Street' name='addressArea' value={data.addressArea || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">City/Distrcit/Town</label>
                                        <input type='text' placeholder='City/Distrcit/Town' name='landmark' value={data.district || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700"> State</label>
                                        <input type='text' placeholder='State' name='state' value={data.state || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700"> Alternat Phone</label>
                                        <input type='text' placeholder='Alternat Phone' name='alternat_phone' value={data.alternatePhone || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Address Type</label>
                                        <input type='text' placeholder='name'
                                            name='address_type' value={data.addressType || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                    </div>

                                    <div>
                                        <input type='submit' value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <button className='bg-green-500' onClick={makePayment}>CheckOut</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default OrderProduct;

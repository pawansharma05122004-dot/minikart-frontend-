import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from "@stripe/stripe-js";

function OrderProduct() {
    const [data, setData] = useState('')
    const [orderDetails, setOrderDetails] = useState([]);
    const [sessionCheckout, setSessionCheckOut] = useState({})
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
        setSessionCheckOut(result.data.id)

        const paymentData = stripe.redirectToCheckout({
            sessionCheckout: sessionCheckout
        })

        if (paymentData.error) {
            console.log(paymentData.error)
        }

    }

    return (
        <div className=" bg-gray-100">
            <div className=' p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-4">Delivery  Item</h1>
                <div className='border grid grid-cols-2 gap-4 rounded-md p-4'>
                    <div>
                        <form className='space-y-4 md:space-y-6' onSubmit={(e) => { postCustomerDetials(e) }}>
                            <div>
                                <label>Name</label>
                                <input type='text' placeholder='name' name='name' value={data.name || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label>Address</label>
                                <input type='text' placeholder='address' name='address' value={data.address || ''} onChange={(e) => handleCustomerDetails(e)} /></div>
                            <div>
                                <label>Phone Number</label>
                                <input type='text' placeholder='Phone Number' name='phone_number' value={data.phone_number || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label>Pin Code</label>
                                <input type='text' placeholder='name' name='pinCode' value={data.pinCode || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>

                            <div>
                                <label>Locality</label>
                                <input type='text' placeholder='name' name='locality' value={data.locality || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label>Address area & Street</label>
                                <input type='text' placeholder='Address area & Street' name='addressArea' value={data.addressArea || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label>City/Distrcit/Town</label>
                                <input type='text' placeholder='City/Distrcit/Town' name='landmark' value={data.district || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label> State</label>
                                <input type='text' placeholder='State' name='state' value={data.state || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label>Alternat Phone</label>
                                <input type='text' placeholder='Alternat Phone' name='alternat_phone' value={data.alternatePhone || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <label>Address Type</label>
                                <input type='text' placeholder='name'
                                    name='address_type' value={data.addressType || ''} onChange={(e) => handleCustomerDetails(e)} />
                            </div>
                            <div>
                                <input type='submit' />
                            </div>
                        </form>
                    </div>
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
                        <button className='bg-green-200' onClick={makePayment}>CheckOut</button>
                    </div>
                </div>

                <ToastContainer />
            </div>
        </div>
    );
}

export default OrderProduct;

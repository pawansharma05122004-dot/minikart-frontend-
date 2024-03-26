import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from "@stripe/stripe-js";
import TotalPrice from '../TotalPrice/TotalPrice';
import { getCustomerDetails, postCustomerDetails } from '../Api/Apis';

function OrderProduct() {
    const [data, setData] = useState('')
    const [sessionCheckout, setSessionCheckOut] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [addressDetails, setAddressDetail] = useState({ data: [], isLoading: false })

    useEffect(() => {
        getCustomer()
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
            await postCustomerDetails(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCustomer = async () => {
        try {
            const result = await getCustomerDetails()
            if (result.data) {
                setAddressDetail({ data: result.data.result, isLoading: true })
            } else {
                setAddressDetail({ isLoading: false })
            }
        } catch (err) {
            console.log(err)
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
                <div className='grid grid-cols-1 md:grid-cols-12 gap-8 justify-center'>
                    <div className="bg-white shadow-md rounded-md md:col-span-8">
                        <h1 className="text-2xl font-bold mb-4">Delivery  Item</h1>
                        {
                            addressDetails.isLoading && addressDetails.data.map((details) => {
                                const { address, landmark, locality, pinCode, name, address_type, phone_number } = details
                                return (
                                    <div className="mt-4  flex bg-white shadow-md rounded-md md:col-span-8">
                                        <div class="relative overflow-x-auto">
                                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3">
                                                            Name
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Phone Number
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Address
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Locality
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Pin Code
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Address Type
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-center">
                                                            Procced To Pay
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {name}
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            {phone_number}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {landmark}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {locality}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {pinCode}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {address_type}
                                                        </td>
                                                        <td class="px-6 py-4"><button className='bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block' onClick={makePayment}>CheckOut</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {showModal && (
                            <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto bg-gray-500 bg-opacity-75">
                                <div className="bg-white rounded-lg shadow-lg p-8 w-1/3 h-auto py-8 box-content  h-98 w-98 p-4 border-4 border-indigo-500/100 ">
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h2 className="text-xl font-bold mb-4">Add Address</h2>
                                        </div>
                                        <div>
                                            <button onClick={closeModal} className="bg-red-500 p-2">&times;</button>
                                        </div>
                                    </div>
                                    <form onSubmit={(e) => { postCustomerDetials(e) }} className="space-y-4  grid items-end gap-6 mb-6 md:grid-cols-2">
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
                                            <input type='text' placeholder='Address area & Street' name='locality' value={data.locality || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">City/Distrcit/Town</label>
                                            <input type='text' placeholder='City/Distrcit/Town' name='landmark' value={data.landmark || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700"> State</label>
                                            <input type='text' placeholder='State' name='state' value={data.state || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700"> Alternat Phone</label>
                                            <input type='text' placeholder='Alternat Phone' name='alternat_phone' value={data.alternat_phone || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">Address Type</label>
                                            <input type='text' placeholder='name'
                                                name='address_type' value={data.address_type || ''} onChange={(e) => handleCustomerDetails(e)} className="w-full border border-gray-300 rounded-md p-2" />
                                        </div>

                                        <div>
                                            <input type='submit' value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        <div className="relative h-32 w-32 ">
                            <button onClick={openModal} className=" absolute inset-x-0 bottom-0 h-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-4 rounded">
                                Add Address
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md md:col-span-4 h-96">
                        <TotalPrice />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>

    );
}

export default OrderProduct;

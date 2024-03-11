import React, { useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderProduct() {
    const [data, setData] = useState('')

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

        }
    }

    return (
        <div className=" bg-gray-100">
            <div className=' p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-4">Delivery  Item</h1>
                <div className='border grid grid-cols-2 gap-4 bg-blue-300 rounded-md p-4'>
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
                                <input type='text' placeholder='Phone Number' name='phone_number' value={data.name || ''} onChange={(e) => handleCustomerDetails(e)} />
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
                                <input type='text' placeholder='Address area & Street' name='addressArea' value={data.name || ''} onChange={(e) => handleCustomerDetails(e)} />
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
                    <div>Get Addess Detailas and deliver Item</div>

                </div>

                <div className='border bg-green-300 rounded-md p-4'>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default OrderProduct;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    inputBar: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
}

export default function SignUp() {
    const [user, setUser] = useState('')
    const handleUserValue = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const postUser = await axios.post(`${process.env.REACT_APP_API_URL}/users/signUp`, user)

            if (postUser.data) {
                 toast("Ragisterd Succesfully");
            }
            return postUser
        } catch (err) {
            throw err
        }
    }

    return (
        <div>
            <section class="bg-red-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="text" className={style.label}>Full Name</label>
                                    <input type="text" id="confirm-password" placeholder="Full Name" className={style.inputBar} name='name' value={user.name || ''} onChange={(e) => handleUserValue(e)} required="" />
                                </div>
                                <div>
                                    <label for="email" className={style.label}>Your email</label>
                                    <input type="email" name="email" id="email" className={style.inputBar} placeholder="name@company.com" value={user.email || ''} required="" onChange={(e) => handleUserValue(e)} />
                                </div>
                                <div>
                                    <label for="phoneNumber" className={style.label}>Contact Number</label>
                                    <input type="number" name="phone_number" id="phone_number" placeholder="Contact Number" className={style.inputBar} required="" value={user.phone_number || ''} onChange={(e) => handleUserValue(e)} />
                                </div>
                                <div>
                                    <label for="password" className={style.label}>Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className={style.inputBar} required="" value={user.password || ''} onChange={(e) => handleUserValue(e)} />
                                </div>

                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className={style.inputBar} required="" />
                                    </div>
                                </div>
                                <button type="submit" className="bg-blue-500 text-2xl rounded-md" >Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


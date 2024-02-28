import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            const postUser = await axios.post('http://localhost:4000/api/users/signup', user)

            if (postUser.data) {
                localStorage.setItem('token', postUser.data.token)
            }
            // console.log(postUser.data.token)
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
                                    <input type="text" id="confirm-password" placeholder="Full Name" className={style.inputBar} name='userName' value={user.userName || ''} onChange={(e) => handleUserValue(e)} required="" />
                                </div>
                                <div>
                                    <label for="email" className={style.label}>Your email</label>
                                    <input type="email" name="userEmail" id="email" className={style.inputBar} placeholder="name@company.com" value={user.userEmail || ''} required="" onChange={(e) => handleUserValue(e)} />
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
                                <button type="submit" >Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    {/* <button onClick={}>submit data</button> */}
                </div>
            </section>
        </div>
    )
}

export const Login = () => {

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
            const postUser = await axios.post('http://localhost:4000/api/users/signup', user)
            // console.log(postUser)
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
                                Log In
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="email" className={style.label}>Your email</label>
                                    <input type="email" name="userEmail" id="email" className={style.inputBar} placeholder="name@company.com" value={user.userEmail || ''} required="" onChange={(e) => handleUserValue(e)} />
                                </div>
                                <div>
                                    <label for="password" className={style.label}>Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className={style.inputBar} required="" value={user.password || ''} onChange={(e) => handleUserValue(e)} />
                                </div>
                                <button className="bg-sky-800 border-slate-900 ">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addNewUserToDB } from '../States/addNewUserSlice'
import { useNavigate } from 'react-router-dom'

const FormCreateAccount = () => {
    const [formValue, setFormValue] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate() //useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

    const userData = {
        // creato un'ogetto per il passaggio dei dati del form
        data: {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            password: formValue.password,
            userName: formValue.userName,
            email: formValue.email,
        },
    }
    console.log(userData)

    const handleAddUser = (e) => {
        e.preventDefault()
        dispatch(addNewUserToDB(userData))
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 1500)
    }

    return (
        <div>
            <form
                onSubmit={handleAddUser}
                className=" grid justify-center items-center gap-4 pt-6 pb-4"
            >
                <div className="mb-3  w-[300px]">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="First name"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                firstName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className=" mb-3">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="Last name"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                lastName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                password: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="userName"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                userName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="email"
                        placeholder="email"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                email: e.target.value,
                            })
                        }
                    />
                </div>

                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300  p-2 rounded-lg mb-5 bg-purple-100 ">
                    Create Account
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default FormCreateAccount

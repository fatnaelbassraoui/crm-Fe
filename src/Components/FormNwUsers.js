import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUsersToDB } from '../States/NewUser'
import { useNavigate } from 'react-router-dom'

const FormNwUsers = () => {
    const [formValue, setFormValue] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData = {
        // creato un'ogetto per il passaggio dei dati del form
        data: {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            role: formValue.role,
            password: formValue.password,
            userName: formValue.userName,
            email: formValue.email,
        },
    }
    console.log(userData)
    const handleFormAddNeUser = (e) => {
        e.preventDefault()
        dispatch(addNewUsersToDB(userData))
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 1500)
    }

    return (
        <section>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={handleFormAddNeUser}>
                    <div className="flex items-center justify-center lg:justify-center pb-4">
                        <p className="text-lg font-serif mb-0 mr-4">
                            Create New account
                        </p>
                    </div>
                    <div>
                        <input
                            className="form-control block w-full px-4 py-2 mb-4  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <div>
                        <input
                            className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <div>
                        <select
                            className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            onChange={(e) =>
                                setFormValue({
                                    ...formValue,
                                    role: e.target.value,
                                })
                            }
                        >
                            <option disabled defaultValue>
                                Please choose your role
                            </option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    <div>
                        <input
                            className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <div>
                        <input
                            className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    <div>
                        <input
                            className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="email"
                            placeholder="email"
                            onChange={(e) =>
                                setFormValue({
                                    ...formValue,
                                    email: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300  p-2 rounded-lg mb-2 bg-purple-100 "
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormNwUsers

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewUserToDB } from '../States/AddNewUserSlice'
import { useNavigate } from 'react-router-dom'


const FormCreateAccount = () => {
    const [formValue, setFormValue] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate() //useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

    const userData = {  // creato un'ogetto per il passaggio dei dati del form
        data: {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            role: formValue.role,
            password: formValue.password,
            userName: formValue.userName,
            email: formValue.email
        }
    }
    console.log(userData);

    const handleAddUser = (e) => {
        e.preventDefault()
        dispatch(addNewUserToDB(userData))
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 1500)
    }



    return (
        <div className="grid justify-center items-center max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 ">
            <div className="w-[100%] grid justify-center items-center ">
                <form
                    onSubmit={handleAddUser}
                    className="space-y-6 ng-untouched ng-pristine ng-valid ">
                    <div className="container">
                        <div className=" justify-center items-center">
                            <input
                                className="p-2 rounded-lg mb-2"
                                type="text"
                                placeholder="First name"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        firstName: e.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <div className=" justify-center items-center">
                            <input
                                className="p-2 rounded-lg mb-2"
                                type="text"
                                placeholder="Last name"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        lastName: e.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <div>
                            <select
                                className="p-2 rounded-lg mb-2"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        role: e.target.value,
                                    })
                                }
                            >
                                <option disabled defaultValue>Please choose your role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <div>
                            <input
                                className="p-2 rounded-lg mb-2"
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        password: e.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <div>
                            <input
                                className="p-2 rounded-lg mb-2"
                                type="text"
                                placeholder="userName"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        userName: e.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <div>
                            <input
                                className="p-2 rounded-lg mb-2"
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

                        <button
                            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300  p-2 rounded-lg mb-2 bg-purple-100 "
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <ToastContainer />

            </div>
        </div>
    )
}

export default FormCreateAccount
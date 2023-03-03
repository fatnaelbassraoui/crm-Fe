import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.jpg'
import LogOut from './LogOut'
import axios from 'axios'

const Sidebar = () => {
    const [doctors, setDoctors] = useState(null)
    const [sessionStorageState, setSessionStorageState] = useState(JSON.parse(sessionStorage.getItem('Authorization')))
    const idDoctor = sessionStorageState?.user
    const admin = sessionStorageState?.role




    const getDoctors = async () => {
        return await axios
            .get(`${process.env.REACT_APP_BASEURL}/newUsers`)
            .then((response) => {
                //console.log(response)
                return response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getDoctors().then((data) => {
            setDoctors(data)
        })
    }, [dispatch])

    return (
        <aside className="flex flex-col  h-full w-64  px-4 py-8 overflow-y-auto bg-white font-serif bg-clip  bg-gradient-to-r from-blue-100 to-blue-500  border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

            <div className=" flex  justify-star item-center ">
                <img
                    src={Logo}
                    alt="logo"
                    className=" w-[50px] rounded-full ml-6"
                />
                <div

                >
                    <p
                        className="pl-2 mt-2 text-blue-500 text-logo"
                    >
                        Clinic Dental
                    </p>
                </div>
            </div>
            {doctors && doctors?.filter((doctor) => doctor._id === idDoctor).map((doctor) => (
                <div key={doctor._id}>
                    <div className="flex flex-col items-center mt-6 -mx-2">
                        <img

                            className="object-cover w-24 h-24 mx-2 rounded-full"
                            src={doctor.avatar}
                            alt="avatar" />

                        <h6
                            className="mx-2 mt-4 font-medium text-gray-600 "
                        >
                            {doctor.firstName} {doctor.lastName}
                        </h6>
                    </div>
                </div>
            ))}


            <div
                className="flex flex-col justify-between flex-1 mt-12"
            >
                <nav>
                    {admin === 'admin' &&
                        <div
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <Link to="/doctors-info" >
                                <span
                                    className="mx-4 font-medium"
                                >
                                    Doctors
                                </span>
                            </Link>
                        </div>}

                    <div
                        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                            <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                        </svg>
                        <Link to="/">
                            <span
                                className="mx-4 font-medium"
                            >
                                Home
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                        <span class="inline-flex justify-center items-center ">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </span>
                        <Link to="/customer-info">
                            <span
                                className="mx-4 font-medium"
                            >
                                Customers
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                            <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span
                            className="mx-4 font-medium "
                        >
                            <LogOut />
                        </span>

                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
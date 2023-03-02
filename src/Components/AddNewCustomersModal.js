import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCustomerToDB } from '../States/addNewCustomerSlice'
import axios from 'axios'
import { getCustomersInfoFromDB } from '../States/getCustomersInfoSlice'


const AddNewCustomersModal = ({ closeModal }) => {
    const [newCustomer, setNewCustomer] = useState({})
    console.log(newCustomer)

    const dispatch = useDispatch()



    const handleAddNewCustomer = () => {

        const newCustomerToUpload = {
            data: {
                patientFirstName: newCustomer.patientFirstName,
                patientLastName: newCustomer.patientLastName,
                patientDateOfBirth: newCustomer.patientDateOfBirth,
                patientPhoneNumber: newCustomer.patientPhoneNumber,
                patientAddress: newCustomer.patientAddress,
                patientEmail: newCustomer.patientEmail,
                patientTreatments: newCustomer.patientTreatments,
                patientAvatar: newCustomer.patientAvatar,
            }

        }
        dispatch(addNewCustomerToDB(newCustomerToUpload))


    }
    useEffect(() => {
        dispatch(getCustomersInfoFromDB())
    }, [dispatch])


    return (
        <div
            className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'
        >
            <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg ">
                <div className="relative px-4 pt-4 md:flex md:items-center md:justify-center">
                    <div className="bg-red-100 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative ">
                        <div className="md:flex items-center">
                            <div className="relative p-6 rounded-lg shadow-lg bg-white ">
                                <form
                                    className='w-[300px]'
                                    onSubmit={handleAddNewCustomer}
                                >
                                    <div
                                        className="form-group mb-6">
                                        <input
                                            type="img"
                                            src={newCustomer.patientAvatar}
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='Avatar'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientAvatar: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='First Name'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientFirstName: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="form-group ">
                                        <input
                                            type="text"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='Last Name'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientLastName: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>

                                    <div className="form-group mb-6 mt-6">
                                        <input
                                            datepicker="true"
                                            type="date"
                                            className=" form-control block w-[300px] px-3  py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientDateOfBirth: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='Phone Number'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientPhoneNumber: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input type="address"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='Address'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientAddress: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="email"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='Email'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientEmail: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder='Treatments'
                                            onChange={(e) => {
                                                setNewCustomer({
                                                    ...newCustomer,
                                                    patientTreatments: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>

                                    <div className="form-group mb-6 grid grid-flow-col">
                                        <div
                                            className='flex justify-between'
                                        >
                                            <button
                                                type="submit"
                                                onClick={() => closeModal(false)}
                                                className=" w-20 px-6 py-2.5 ml-11 mx-2 bg-pink-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700  active:shadow-lg transition duration-150 ease-in-out">
                                                close
                                            </button>
                                        </div>
                                        <div>
                                            <button

                                                type="submit"
                                                className="w-25 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddNewCustomersModal
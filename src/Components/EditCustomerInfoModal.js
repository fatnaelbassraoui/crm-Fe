import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editCustomer } from '../States/editCustomerInfoSlice'
import { getCustomersInfoFromDB } from '../States/getCustomersInfoSlice'


const EditCustomerInfoModal = ({ closeModalEdit, customersInfo }) => {
    console.log(customersInfo)
    const [editCustomerInfo, setEditCustomerInfo] = useState({})
    console.log(editCustomerInfo);

    const dispatch = useDispatch()

    const handleEditCustomerInfo = () => {
        const customerInfoToUpdate = {
            data: {
                patientFirstName: editCustomerInfo.patientFirstName,
                patientLastName: editCustomerInfo.patientLastName,
                patientDateOfBirth: editCustomerInfo.patientDateOfBirth,
                patientPhoneNumber: editCustomerInfo.patientPhoneNumber,
                patientAddress: editCustomerInfo.patientAddress,
                patientEmail: editCustomerInfo.patientEmail,
            },
            id: customersInfo._id,
        }
        dispatch(editCustomer(customerInfoToUpdate))
    }
    useEffect(() => {
        //useEffect viene eseguito dopo il rendering del componente
        dispatch(getCustomersInfoFromDB())
    }, [dispatch])

    return (
        <>
            <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg ">
                <div className="relative px-4 pt-4 md:flex md:items-center md:justify-center ">
                    <div className="bg-red-100 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative ">
                        <div className="md:flex items-center">
                            <div className="block p-6 rounded-lg shadow-lg bg-white ">
                                <form
                                    className='w-[350px]'
                                    onSubmit={handleEditCustomerInfo}
                                >
                                    <div
                                        className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            defaultValue={customersInfo.patientFirstName}
                                            onChange={(e) => {
                                                setEditCustomerInfo({
                                                    ...editCustomerInfo,
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
                                            defaultValue={customersInfo.patientLastName}
                                            onChange={(e) => {
                                                setEditCustomerInfo({
                                                    ...editCustomerInfo,
                                                    patientLastName: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>

                                    <div className="form-group mb-6 mt-6">
                                        <input
                                            datepicker
                                            type="date"
                                            className=" form-control block w-[300px] px-3  py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            defaultValue={customersInfo.patientDateOfBirth}
                                            onChange={(e) => {
                                                setEditCustomerInfo({
                                                    ...editCustomerInfo,
                                                    patientDateOfBirth: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            defaultValue={customersInfo.patientPhoneNumber}
                                            onChange={(e) => {
                                                setEditCustomerInfo({
                                                    ...editCustomerInfo,
                                                    patientPhoneNumber: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input type="address"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            defaultValue={customersInfo.patientAddress}
                                            onChange={(e) => {
                                                setEditCustomerInfo({
                                                    ...editCustomerInfo,
                                                    patientAddress: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div class="form-group mb-6">
                                        <input
                                            type="email"
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            defaultValue={customersInfo.patientEmail}
                                            onChange={(e) => {
                                                setEditCustomerInfo({
                                                    ...editCustomerInfo,
                                                    patientEmail: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div
                                        className='flex justify-between'
                                    >
                                        <button
                                            type="submit"
                                            onClick={() => closeModalEdit(false)}
                                            className=" w-20 px-6 py-2.5 bg-pink-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700  active:shadow-lg transition duration-150 ease-in-out">
                                            close
                                        </button>

                                        <button
                                            type="submit"
                                            className="w-25 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCustomerInfoModal
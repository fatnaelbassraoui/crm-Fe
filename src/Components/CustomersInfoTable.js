import React, { useEffect, useState } from 'react'
import { TfiEye } from 'react-icons/tfi'
import { FaRegEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa';
import {
    getCustomersInfoFromDB,
    getCustomersError,
    getCustomersSuccess,
    getCustomersIsLoading,
} from '../States/getCustomersInfoSlice'
import { useDispatch, useSelector } from 'react-redux'
import CustomersInfoModal from './CustomersInfoModal'
import { deleteCustomer } from '../States/deleteCustomerSlice'
import AlertConfirmDeleteCustomer from './AlertConfirmDeleteCustomer'
import EditCustomerInfoModal from './EditCustomerInfoModal';
import AddNewCustomersModal from './AddNewCustomersModal';
import doctorIcon from '../Assets/doctorIcon.png'
import AssignDoctorModal from './AssignDoctorModal';




const CustomersInfoTable = () => {
    const [ShowModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showModalEditCustomer, setShowModalEditCustomer] = useState(false)
    const [showAddCustomerModal, setShowAddCustomerModal] = useState(false)
    const [sessionStorageState, setSessionStorageState] = useState(JSON.parse(sessionStorage.getItem('Authorization')))
    const idDoctor = sessionStorageState?.user
    const admin = sessionStorageState?.role
    const [customerInfo, setCustomerInfo] = useState({})
    const [customerInfoEdit, setCustomerInfoEdit] = useState({})
    const [customerInfoDelete, setCustomerInfoDelete] = useState({})
    const [showModalAssignDoctor, setShowModalAssignDoctor] = useState(false)



    const dispatch = useDispatch()




    const handleShowModal = (data) => {
        setCustomerInfo(data)
        setShowModal(true)
    }

    const handleShowModalEditCustomer = (data) => {
        setCustomerInfoEdit(data)
        setShowModalEditCustomer(true)
    }

    const handleDeleteCustomer = (data, id) => {
        setCustomerInfoDelete(data)
        dispatch(deleteCustomer(data, id))
        setShowAlert(true)
    }
    const handleAssignDoctor = (data) => {
        setShowModalAssignDoctor(true)
        setCustomerInfo(data)

    }

    const customers = useSelector(getCustomersSuccess)
    const isLoading = useSelector(getCustomersIsLoading)
    const error = useSelector(getCustomersError)


    useEffect(() => {
        setSessionStorageState(JSON.parse(sessionStorage.getItem('Authorization')))

    }, [])


    useEffect(() => {
        //useEffect viene eseguito dopo il rendering del componente
        dispatch(getCustomersInfoFromDB())
    }, [dispatch])

    return (
        <>
            <div className=" container max-w-full min-h-full m-auto grid grid-cols-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-1 gap-4">
                {isLoading && !error && <h1>Loading...</h1>}
                {error && !isLoading && <h1>Ops an error is occurred..</h1>}

                {showAddCustomerModal && admin === 'admin' && <AddNewCustomersModal closeModal={setShowAddCustomerModal} />}

                <table className="min-w-full">
                    <thead className="border-b bg-blue-100 border-blue-200 ">
                        <tr>
                            <th scope="col" className=" text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                <button
                                    onClick={() => {
                                        setShowAddCustomerModal(true)
                                    }}
                                    className=" w-[40px] h-[40px] rounded-full bg-green-500   shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out  text-white font-medium text-2xl leading-snug "
                                >
                                    +
                                </button>
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                First Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Last Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Email
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Phone Number
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Read More
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Actions
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Assign doctor
                            </th>
                        </tr>
                    </thead>

                    {sessionStorageState && customers &&
                        customers
                            ?.filter((patient) => {
                                if (sessionStorageState.role !== 'admin') {
                                    return patient.assistedByDoctor?.some((doctor) => {
                                        return doctor.doctorId === idDoctor
                                    })
                                } else {
                                    return true
                                }
                            }).map((customer, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr className="bg-white-100 border-b">
                                            <td className="flex justify-center items-center px-6 py-4 ">
                                                <img
                                                    src={customer.patientAvatar}
                                                    className="rounded-full w-10 h-10 object-cover "
                                                    alt="Avatar"
                                                />
                                            </td>

                                            <td className="text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap">
                                                {customer.patientFirstName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap">
                                                {customer.patientLastName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap">
                                                {customer.patientEmail}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap">
                                                {customer.patientPhoneNumber}
                                            </td>
                                            <td
                                                className='text-center'
                                            >
                                                <button
                                                    onClick={() => handleShowModal(customer)}
                                                    className='bg-green-400 rounded-full w-8 h-8 pl-2'
                                                >
                                                    <TfiEye />
                                                </button>

                                            </td>
                                            <td
                                                className='text-center item-center m-auto'>
                                                <button
                                                    onClick={() => handleDeleteCustomer(customer, customer._id)}
                                                    className='bg-red-400 rounded-full w-8 h-8 mr-4 pl-2'

                                                >
                                                    <FaTrashAlt />


                                                </button>
                                                <button
                                                    onClick={() => handleShowModalEditCustomer(customer)}
                                                    className='bg-blue-200 rounded-full w-8 h-8 ml-2 pl-2'
                                                >
                                                    <FaRegEdit />
                                                </button>
                                            </td>
                                            <td
                                                className='text-center'
                                            >
                                                <button
                                                    onClick={() => handleAssignDoctor(customer)}
                                                    className='bg-blue-400 rounded-full w-7 h-8'
                                                >
                                                    <img
                                                        src={doctorIcon}
                                                        className="rounded-full w-7"
                                                        alt="Avatar"
                                                    />
                                                </button>

                                            </td>
                                        </tr>
                                        {ShowModal && <CustomersInfoModal closeModal={setShowModal} customersInfo={customerInfo} />}
                                        {showAlert && admin === 'admin' && <AlertConfirmDeleteCustomer closeAlert={setShowAlert} alertCustomerInfo={customerInfoDelete} deleteCustomerInfo={handleDeleteCustomer} />}
                                        {showModalEditCustomer && admin === 'admin' && <EditCustomerInfoModal closeModalEdit={setShowModalEditCustomer} customersInformation={customerInfoEdit} />}
                                        {showModalAssignDoctor && admin === 'admin' && <AssignDoctorModal closeModalAssignDoctor={setShowModalAssignDoctor} customersInformation={customerInfo} />}
                                    </tbody>
                                )
                            })}
                </table>
            </div>
        </>

    )
}

export default CustomersInfoTable

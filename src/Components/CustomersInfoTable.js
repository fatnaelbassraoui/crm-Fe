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



const CustomersInfoTable = () => {
    const [ShowModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showModalEditCustomer, setShowModalEditCustomer] = useState(false)
    const [showAddCustomerModal, setShowAddCustomerModal] = useState(false)
    const [sessionStorageState, setSessionStorageState] = useState(JSON.parse(sessionStorage.getItem('Authorization')))
    // console.log(sessionStorageState);
    const idDoctor = sessionStorageState?.user
    // console.log(idDoctor)


    const customers = useSelector(getCustomersSuccess)
    // console.log(customers)
    const isLoading = useSelector(getCustomersIsLoading)
    const error = useSelector(getCustomersError)
    const dispatch = useDispatch()

    const handleDeleteCustomer = (id) => {
        dispatch(deleteCustomer(id))

    }


    useEffect(() => {
        setSessionStorageState(JSON.parse(sessionStorage.getItem('Authorization')))

    }, [])


    useEffect(() => {
        //useEffect viene eseguito dopo il rendering del componente
        dispatch(getCustomersInfoFromDB())
    }, [dispatch])

    return (
        <div>
            {isLoading && !error && <h1>Caricamento in corso...</h1>}
            {error && !isLoading && <h1>Ops si è verificato un errore..</h1>}
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        {showAddCustomerModal && <AddNewCustomersModal closeModal={setShowAddCustomerModal} />}
                        <div className="overflow-hidden">
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
                                    </tr>
                                </thead>

                                {sessionStorageState && customers &&
                                    customers
                                        ?.filter((patient) => {
                                            return patient.assistedByDoctor?.some((doctor) => {
                                                return doctor.doctorId === idDoctor
                                            })
                                        }).map((customer, index) => {
                                            // console.log(customer.patientFirstName)
                                            return (
                                                <tbody key={index}>
                                                    <tr className="bg-white-100 border-b">
                                                        <td className="flex justify-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                                                className="rounded-full w-10"
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
                                                                onClick={() => setShowModal(true)}
                                                                className='bg-green-400 rounded-full w-8 h-8 pl-2'
                                                            >
                                                                <TfiEye />
                                                            </button>

                                                        </td>
                                                        <td
                                                            className='text-center item-center'>
                                                            <button
                                                                className='bg-red-400 rounded-full w-8 h-8 mr-4 pl-2'
                                                                onClick={() => setShowAlert(true)}
                                                            >
                                                                <FaTrashAlt />


                                                            </button>
                                                            <button
                                                                onClick={() => setShowModalEditCustomer(true)}
                                                                className='bg-blue-200 rounded-full w-8 h-8 ml-2 pl-2'
                                                            >
                                                                <FaRegEdit />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    {ShowModal && <CustomersInfoModal closeModal={setShowModal} customersInfo={customer} />}
                                                    {showAlert && <AlertConfirmDeleteCustomer closeAlert={setShowAlert} alertCustomerInfo={customer} deleteCustomer={handleDeleteCustomer} />}
                                                    {showModalEditCustomer && <EditCustomerInfoModal closeModalEdit={setShowModalEditCustomer} customersInfo={customer} />}
                                                </tbody>


                                            )
                                        })}
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CustomersInfoTable

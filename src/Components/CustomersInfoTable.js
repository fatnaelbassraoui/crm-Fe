import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
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

const session = JSON.parse(sessionStorage.getItem('Authorization'))
const idDoctor = session.user
console.log(idDoctor)


const CustomersInfoTable = () => {
    const [ShowModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)


    const customers = useSelector(getCustomersSuccess)
    console.log(customers)
    const isLoading = useSelector(getCustomersIsLoading)
    const error = useSelector(getCustomersError)
    const dispatch = useDispatch()

    const handleDeleteCustomer = (id) => {
        dispatch(deleteCustomer(id))

    }

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
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b bg-blue-100 border-blue-200 ">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">

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

                                {customers &&
                                    customers
                                        ?.filter((patient) => {
                                            return patient.assistedByDoctor?.some((doctor) => {
                                                return doctor.doctorId === idDoctor
                                            })
                                        })
                                        .map((customer, index) => {
                                            // console.log(customer.patientFirstName)
                                            return (
                                                <tbody key={index}>
                                                    <tr className="bg-white-100 border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
                                                            >
                                                                <FontAwesomeIcon icon={faEye} />

                                                            </button>

                                                        </td>
                                                        <td
                                                            className='text-center'>
                                                            <button
                                                                className='p-4'
                                                                // onClick={() => handleDeleteCustomer(customer._id)}
                                                                onClick={() => setShowAlert(true)}
                                                            >
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                            <button
                                                                className='p-4'
                                                            >
                                                                <FontAwesomeIcon icon={faPen} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    {ShowModal && <CustomersInfoModal closeModal={setShowModal} customersInfo={customer} />}
                                                    {showAlert && <AlertConfirmDeleteCustomer closeAlert={setShowAlert} alertCustomerInfo={customer} deleteCustomer={handleDeleteCustomer} />}
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

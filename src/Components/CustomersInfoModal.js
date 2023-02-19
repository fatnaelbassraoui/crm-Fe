import React from 'react'


const CustomersInfoModal = ({ closeModal, customersInfo }) => {
    return (
        // console.log(customersInfo),

        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            >
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {customersInfo.patientFirstName} {customersInfo.patientLastName}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-red-600  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => closeModal(false)}
                            >
                                X
                            </button>
                        </div>

                        {/*body*/}

                        <table>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900"> Date of birth</td>
                                    <td className="text-md text-black  text-center px-6 py-4 whitespace-nowrap">
                                        {customersInfo.patientDateOfBirth}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900"> Address</td>
                                    <td className="text-md text-black  text-center px-6 py-4 whitespace-nowrap">
                                        {customersInfo.patientAddress}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900"> Treatment</td>
                                    <td className="text-md text-black  text-center px-6 py-4 whitespace-nowrap">
                                        {customersInfo.patientTreatments}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900"> Events</td>
                                    <td className="text-md text-black  text-center px-6 py-4 whitespace-nowrap">
                                        {customersInfo.patientEvent}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>

    )
}

export default CustomersInfoModal
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'



const AssignDoctorModal = ({ closeModalAssignDoctor, customersInformation }) => {
    console.log(customersInformation);

    const [selectedDoctor, setSelectedDoctor] = useState(null)
    console.log(selectedDoctor)
    const [doctors, setDoctors] = useState(null)
    //console.log(doctors);

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
    const postAssistedByDoctor = async (data, id) => {
        return await axios
            .post(`${process.env.REACT_APP_BASEURL}/assistedByDoctor/${id}`, data)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                if (error) throw error
            })
    }

    const dispatch = useDispatch()

    const handleSelectChange = (e) => {
        const selectedValue = JSON.parse(e.target.value)
        //console.log(selectedValue);
        setSelectedDoctor(selectedValue)
    }

    const handleSubmit = () => {

        dispatch(postAssistedByDoctor(selectedDoctor, customersInformation._id))

        closeModalAssignDoctor(false)
    }

    useEffect(() => {
        getDoctors().then((data) => {
            setDoctors(data)
        })
    }, [dispatch])

    return (
        <>
            <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg ">
                <div className="relative px-4 pt-4 md:flex md:items-center md:justify-center ">
                    <div className="bg-red-100 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative ">
                        <div className="md:flex items-center">
                            <div className="block p-6 rounded-lg shadow-lg bg-white ">
                                <form
                                    className='w-[350px] h-[150px] flex flex-col justify-between'
                                    onSubmit={handleSubmit}
                                >
                                    <div
                                        className='flex justify-center items-center'
                                    >
                                        <select
                                            onChange={
                                                handleSelectChange
                                            }
                                            className="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        >
                                            < option value="">Chose a Doctor</option>
                                            {doctors && doctors?.map((option, index) => {
                                                const doctorValue = {
                                                    doctorId: option._id,
                                                    doctorName: option.firstName,
                                                    doctorLastName: option.lastName

                                                }

                                                return (
                                                    <option
                                                        key={option._id}
                                                        value={
                                                            JSON.stringify(doctorValue)
                                                        }
                                                    >
                                                        {option.lastName} {option.firstName}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div
                                        className='flex justify-between mt-4'
                                    >
                                        <button
                                            type="submit"
                                            onClick={() => closeModalAssignDoctor(false)}
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
            </div >
        </>
    )
}

export default AssignDoctorModal
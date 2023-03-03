import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const DoctorsInfo = () => {
    const [doctors, setDoctors] = useState(null)


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
        <div
            className='flex flex-wrap justify-center items-center '
        >
            {doctors && doctors.map((doctor, index) => {
                return (
                    <div class=" max-w-sm rounded overflow-hidden shadow-lg m-8 ">
                        <img className="w-full " src={doctor.avatar} alt="avatar" />
                        <div className="px-6 py-4">
                            <div className="flex justify-center items-center font-bold text-2xl">
                                <h2 className="text-gray-700 text-base">
                                    {doctor.firstName} {doctor.lastName}
                                </h2>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pt-4 pb-2">
                            <ol>
                                <li className="text-gray-700 text-base flex p-2">
                                    <p className="font-bold mr-3">
                                        Date Of birth:
                                    </p>
                                    {doctor.dateOfBirth}
                                </li>
                                <li className="text-gray-700 text-base flex p-2">
                                    <p className="font-bold mr-3">
                                        Email:
                                    </p>
                                    {doctor.email}
                                </li>
                                <li className="text-gray-700 text-base flex p-2">
                                    <p className="font-bold mr-3" >
                                        Phone Number:
                                    </p>
                                    {doctor.phoneNumber}
                                </li>
                                <li className="text-gray-700 text-base flex p-2">
                                    <p className="font-bold mr-3">
                                        Address:
                                    </p>
                                    {doctor.address}
                                </li>

                            </ol>
                        </div>
                    </div>
                )
            }
            )}

        </div>
    )
}

export default DoctorsInfo
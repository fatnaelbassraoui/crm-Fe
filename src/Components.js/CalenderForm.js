import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { postFormDataFromDataBase } from '../States/calenderFormSlice'
import moment from 'moment'
import { getAllEventsFromDataBase } from '../States/eventSlice'

const CalenderForm = ({ closeModal }) => {
    const [appointmentData, setAppointmentData] = useState({})
    //console.log(appointmentData);

    // const postEventToDb = useSelector(postFormDataFromDataBase);
    const dispatch = useDispatch()

    const handleAddEvent = () => {
        dispatch(
            postFormDataFromDataBase({
                title: appointmentData.title,
                start: moment(appointmentData.start).toDate(),
                end: moment(appointmentData.end).toDate(),
                description: appointmentData.description,
            })
        )
    }
    useEffect(() => {
        dispatch(getAllEventsFromDataBase()) // mi aggiorna il calendario con i nuovi eventi
    }, [dispatch])
    // console.log(eventFromDb);

    return (
        <div className="w-[300px] h-[350px]  bg-blue-100 fixed top-1/2 left-1/2 flex flex-col item-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg z-40 ">
            <div className="flex justify-end">
                <button
                    onClick={() => closeModal(false)}
                    className=" w-[20px] h-[20px] mx-1 my-1 rounded-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    x
                </button>
            </div>
            <form onSubmit={handleAddEvent}>
                <div className="flex flex-col items-center justify-center lg:justify-center p-2">
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={(e) => {
                                setAppointmentData({
                                    ...appointmentData,
                                    title: e.target.value,
                                })
                            }}
                            className="form-control block w-full px-4 py-2 mb-4  text-xl font-serif text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/yyyy,HH:mm a"
                            timeCaption="time"
                            placeholderText="Date of start"
                            selected={appointmentData.start}
                            onChange={(start) => {
                                setAppointmentData({
                                    ...appointmentData,
                                    start,
                                })
                            }}
                            className="form-control block w-full px-4 py-2 mb-4  text-xl font-serif text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/yyyy,HH:mm a"
                            timeCaption="time"
                            placeholderText="Date of start"
                            selected={appointmentData.end}
                            onChange={(end) => {
                                setAppointmentData({
                                    ...appointmentData,
                                    end,
                                })
                            }}
                            className="form-control block w-full px-4 py-2 mb-4  text-xl font-serif text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="description"
                            onChange={(e) =>
                                setAppointmentData({
                                    ...appointmentData,
                                    description: e.target.value,
                                })
                            }
                            className="form-control block w-full px-4 py-2 mb-4  text-xl font-serif text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="inline-block px-4 py-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CalenderForm

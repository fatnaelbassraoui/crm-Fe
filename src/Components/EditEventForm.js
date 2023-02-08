import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { getAllEventsFromDataBase } from '../States/eventSlice'
import { editEvent } from '../States/editEventSlice'

const EditEventForm = ({ events, close }) => {
    console.log(events)
    console.log(close)
    const [editAppointmentData, setEditAppointmentData] = useState({})

    const dispatch = useDispatch()

    const handleEditEvent = (e) => {
        e.preventDefault()
        const eventToUpdate = {
            data: {
                title: editAppointmentData.title,
                start: moment(editAppointmentData.start).toDate(),
                end: moment(editAppointmentData.end).toDate(),
                description: editAppointmentData.description,
            },
            id: events._id,
        }

        dispatch(editEvent(eventToUpdate))
    }

    useEffect(() => {
        dispatch(getAllEventsFromDataBase()) // mi aggiorna il calendario con i nuovi eventi
    }, [dispatch])
    // console.log(eventFromDb);

    return (
        <div>
            <div className="flex justify-end">
                <button
                    onClick={() => close(false)}
                    className=" w-[20px] h-[20px] mx-1 my-1 rounded-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    x
                </button>
            </div>
            <form onSubmit={handleEditEvent}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                    </label>
                    <input
                        defaultValue={events.title}
                        onChange={(e) => {
                            setEditAppointmentData({
                                ...editAppointmentData,
                                title: e.target.value,
                            })
                        }}
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Title"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Date of Start
                    </label>
                    <DatePicker
                        showTimeSelect
                        dateFormat="dd/MM/yyyy,HH:mm a"
                        timeCaption="time"
                        placeholderText="Date of start"
                        selected={editAppointmentData.start}
                        onChange={(start) => {
                            setEditAppointmentData({
                                ...editAppointmentData,
                                start,
                            })
                        }}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Date of Start
                    </label>
                    <DatePicker
                        showTimeSelect
                        dateFormat="dd/MM/yyyy,HH:mm a"
                        timeCaption="time"
                        placeholderText="Date of end"
                        selected={editAppointmentData.end}
                        onChange={(end) => {
                            setEditAppointmentData({
                                ...editAppointmentData,
                                end,
                            })
                        }}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                    </label>
                    <input
                        defaultValue={events.description}
                        onChange={(e) => {
                            setEditAppointmentData({
                                ...editAppointmentData,
                                description: e.target.value,
                            })
                        }}
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default EditEventForm

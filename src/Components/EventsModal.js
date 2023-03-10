import React from 'react'
import { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import AlertConfirmDeleteEvent from './AlertConfirmDeleteEvent'
import EditEventForm from './EditEventForm'

const EventsModal = ({ modalState, selectedEvent, deleteEvent }) => {
    // console.log(selectedEvent);
    const [editModalState, setEditModalState] = useState(false)
    const [showAlert, setShoWAlert] = useState(false)
    return (
        <div className=" w-[300px] h-[400px] fixed top-1/2 left-1/2 flex item-center transform -translate-y-1/2 -translate-x-1/2  z-30 ">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto  bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="flex justify-end">
                        <button onClick={() => setEditModalState(true)}>
                            <FaPen />
                        </button>
                        {editModalState && (
                            <EditEventForm
                                events={selectedEvent}
                                close={setEditModalState}
                            />
                        )}
                    </div>
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800">
                            {selectedEvent.title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body relative p-4">
                        <ul>
                            <li>{selectedEvent.description}</li>
                            <li>{selectedEvent.start}</li>
                        </ul>
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button
                            className="mx-2 px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition  duration-150 ease-in-out"
                            onClick={() => modalState(false)}
                        >
                            Close
                        </button>
                        <button
                            onClick={() => setShoWAlert(true)}
                            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {showAlert && <AlertConfirmDeleteEvent eventInfo={selectedEvent} deleteEvent={deleteEvent} alertState={setShoWAlert} />}
        </div>
    )
}

export default EventsModal

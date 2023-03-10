import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar' // momentLocalizer è un plug-in che aiuterà a convalidare, manipolare e formattare le date.
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useSelector, useDispatch } from 'react-redux'
import { arrayOfEvents, getAllEventsFromDataBase } from '../States/eventSlice'
import EventToolTip from './EventToolTip'
import EventsModal from './EventsModal'
import { deleteEvent } from '../States/deleteEventSlice'

require('moment/locale/it')

const localizer = momentLocalizer(moment)


const Calender = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)
    //console.log(selectedEvent);
    const [modalState, setModalState] = useState(false)

    const handleSelectedEvent = (getAllEventsFromDataBase) => {
        setSelectedEvent(getAllEventsFromDataBase)
        setModalState(true)
    }

    const eventFromDb = useSelector(arrayOfEvents)

    const dispatch = useDispatch()

    const handleDeleteEvent = (id) => {
        dispatch(deleteEvent(id))
        setModalState(false)
    }


    useEffect(() => {
        dispatch(getAllEventsFromDataBase())
    }, [dispatch])


    return (
        <div className="App h-screen p-4 ">
            {modalState && (
                <EventsModal
                    modalState={setModalState}
                    selectedEvent={selectedEvent}
                    deleteEvent={handleDeleteEvent}
                />
            )}
            <Calendar
                localizer={localizer}
                events={eventFromDb}
                components={{ event: EventToolTip }}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={(e) => handleSelectedEvent(e)}
            />
        </div>
    )
}

export default Calender

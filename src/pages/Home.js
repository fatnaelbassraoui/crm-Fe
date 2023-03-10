import React, { useState } from 'react'
import Calender from '../Components/Calender'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CalenderForm from '../Components/CalenderForm'
import Sidebar from '../Components/Sidebar'

const Home = () => {
    const [addNewEvent, setAddNewEvent] = useState(false)
    return (
        <div
            className='flex  w-[100%]'
        >
            <div
                className='w-{30%}'
            >
                <Sidebar />
            </div>
            <div
                className='w-[100%]'
            >
                <div className="grid justify-end">
                    <button
                        onClick={() => {
                            setAddNewEvent(true)
                        }}
                        className=" w-[50px] h-[50px] rounded-full bg-green-500   shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out  text-white font-medium text-2xl leading-snug "
                    >
                        +
                    </button>
                </div>
                {addNewEvent && <CalenderForm closeModal={setAddNewEvent} />}
                <Calender />

            </div>
        </div>
    )
}

export default Home

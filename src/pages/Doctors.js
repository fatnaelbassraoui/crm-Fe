import React from 'react'
import DoctorsInfo from '../Components/DoctorsInfo'
import Sidebar from '../Components/Sidebar'

const Doctors = () => {
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
                <DoctorsInfo />
            </div>
        </div>
    )
}

export default Doctors
import React from 'react'
import CustomersInfoTable from '../Components/CustomersInfoTable'
import Sidebar from '../Components/Sidebar'

const CustomersInfo = () => {

    return (
        <div
            className='flex h-full w-full'
        >
            <div
                className='w-{30%}'
            >
                <Sidebar />
            </div>
            <div
                className='w-[100%]'
            >

                <CustomersInfoTable />
            </div>

        </div>

    )
}

export default CustomersInfo

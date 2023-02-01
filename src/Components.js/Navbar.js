import React from 'react'
import Logo from '../Assets/Logo.jpg'
import LogOut from './LogOut'
const Navbar = () => {
    return (
        <nav>
            <div className="flex item-center justify-between bg-white font-serif bg-clip  bg-gradient-to-r from-blue-100 to-blue-500 p-2">
                <div className="flex justify-between items-center  ">
                    <img
                        src={Logo}
                        alt="logo"
                        className=" w-[50px] rounded-full"
                    />
                    <p className="pl-2 text-blue-500 text-logo">
                        Clinic Dental Dott. Faty Elba
                    </p>
                </div>
                <div className="pl-2 pt-3 text-white font-serif">
                    <LogOut/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

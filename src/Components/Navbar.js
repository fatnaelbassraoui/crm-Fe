import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.jpg'
import LogOut from './LogOut'
const Navbar = () => {
    return (
        <nav>
            <div
                className="flex item-center justify-between bg-white font-serif bg-clip  bg-gradient-to-r from-blue-100 to-blue-500 p-2">
                <div className="flex items-center flex-col ">
                    <img
                        src={Logo}
                        alt="logo"
                        className=" w-[50px] rounded-full"
                    />
                    <div

                    >
                        <p className="pl-2 text-blue-500 text-logo">
                            Clinic Dental
                        </p>
                    </div>
                </div>
                <Link to="/">
                    <div
                        className="flex justify-center items-center mt-5 font-serif  text-blue-500 text-l  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 w-[120px]  rounded-full bg-white"
                    >
                        <p>
                            home
                        </p>
                    </div>
                </Link>

                <Link to="/customer-info">
                    <div
                        className="flex justify-center items-center mt-5 font-serif  text-blue-500 text-l  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 w-[120px]  rounded-full bg-white"
                    >
                        <p>
                            customer Info
                        </p>
                    </div>
                </Link>
                <div className="flex items-center pl-2 pb-4 text-white font-serif">
                    <LogOut />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

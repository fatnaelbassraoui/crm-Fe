import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.jpg'
import LogOut from './LogOut'
const Navbar = () => {
    return (
        <nav
            className='container m-auto max-w-full  grid grid-cols-6 lg:grid-cols-4 md:grid-row-6 sm:grid-col-2 gap-4 item-center justify-between bg-white font-serif bg-clip  bg-gradient-to-r from-blue-100 to-blue-500 p-2'
        >


            <div className=" grid  justify-star  ">
                <img
                    src={Logo}
                    alt="logo"
                    className=" w-[50px] rounded-full ml-6"
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
                    className="grid  justify-center items-center mt-5 font-serif  text-blue-500 text-l  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 w-[120px]  rounded-full bg-white"
                >
                    <p>
                        home
                    </p>
                </div>
            </Link>

            <Link to="/customer-info">
                <div
                    className="grid  justify-center items-center mt-5  font-serif  text-blue-500 text-l  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 w-[120px]  rounded-full bg-white"
                >
                    <p>
                        customer Info
                    </p>
                </div>
            </Link>
            <div
                className="grid  justify-end items-center pl-2 pb-4 text-white font-serif"
            >
                <LogOut />
            </div>

        </nav >
    )
}

export default Navbar

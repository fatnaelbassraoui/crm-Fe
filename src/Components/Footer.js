import React from 'react'
import Logo from '../Assets/Logo.jpg'

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col justify-center item-center bg-white font-serif p-4bg-clip  bg-gradient-to-r from-blue-100 to-blue-500">
                <div className="flex justify-center items-center  ">
                    <img
                        src={Logo}
                        alt="logo"
                        className=" w-[50px] rounded-full"
                    />
                </div>
                <div>
                    <div className="flex justify-center mt-2">
                        <p className="text-xs  text-white">
                            Faty blog S.p.A. © Tutti i diritti riservati |
                            Partita Iva 007462411000
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

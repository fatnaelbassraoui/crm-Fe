import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate()
    const userLogOut = () => {
        sessionStorage.clear()
        setTimeout(() => {
            navigate('../', { replace: true })
        }, 800)
    }
    return (
        <button
            className="font-serif  text-blue-500 text-l  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 w-[100px]  rounded-full bg-white"
            onClick={() => userLogOut()}
        >
            Log Out
        </button>
    )
}

export default LogOut

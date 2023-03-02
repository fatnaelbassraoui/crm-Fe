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
            onClick={() => userLogOut()}
        >
            Log Out
        </button>
    )
}

export default LogOut

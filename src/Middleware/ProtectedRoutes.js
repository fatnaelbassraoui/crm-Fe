import { Outlet } from 'react-router-dom'
import LoginDenied from '../pages/LoginDeniedPage'

const authorize = () => {
    const session = JSON.parse(sessionStorage.getItem('Authorization'))
    return session?.token
}

const ProtectedRoutes = () => {
    const isAuthorized = authorize()
    return isAuthorized ? <Outlet /> : <LoginDenied />
}

export default ProtectedRoutes

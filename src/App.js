import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import CustomersInfo from './pages/CustomersInfo'
import ProtectedRoutes from './Middleware/ProtectedRoutes'
import Doctors from './pages/Doctors'
import { SignUp } from './pages/SignUp'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/customer-info" element={<CustomersInfo />} />
                    <Route path="/doctors-info" element={<Doctors />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

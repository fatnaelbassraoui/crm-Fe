import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import ProtectedRoutes from './Middleware/ProtectedRoutes'
import { SignUp } from './pages/SignUp'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

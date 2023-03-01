import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import imgLogin from '../Assets/loginImg.jpg'

const Login = () => {
    const [formState, setFormState] = useState({})
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        // se abbiamo il token salvato nella sessionstorage mi rimanda direttamente nela home
        const isLoggedIn = sessionStorage.getItem('Authorization')
        if (isLoggedIn) {
            navigate('../home', { replace: true })
        }
    }, [navigate])

    const doLogin = async (e) => {
        e.preventDefault()
        return await axios
            .post(`${process.env.REACT_APP_BASEURL}/login`, formState)
            .then((res) => {
                if (res.status === 200) {
                    sessionStorage.setItem(
                        'Authorization',
                        JSON.stringify(res.data)
                    )
                    navigate('../home', { replace: true }) //se il nostro login ci da res = 200 reinderizzerà la pagina a /home
                }
            })
            .catch((error) => {
                if (error) {
                    setLoginError(error.response.data)
                }
            })
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img
                            src={imgLogin}
                            className="w-full h-[500px]"
                            alt="imageLogin"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={doLogin}>
                            <div className="flex items-center justify-center lg:justify-center pb-4">
                                <p className="text-lg font-serif mb-0 mr-4">
                                    Sign in
                                </p>
                            </div>
                            <div>
                                <input
                                    className="form-control block w-full px-4 py-2 mb-4  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="email"
                                    placeholder="email"
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <input
                                    className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    SIGN IN
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/sign-up"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login

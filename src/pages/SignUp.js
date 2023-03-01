import React from 'react'
import FormCreateAccount from '../Components/FormCreateAccount'
import imagesSignUp from '../Assets/imagesSignUp.jpg'

export const SignUp = () => {
    return (
        <div className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <FormCreateAccount />
                    </div>
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img
                            src={imagesSignUp}
                            className="w-full"
                            alt="signUp"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

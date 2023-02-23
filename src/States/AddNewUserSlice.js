import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const initialState = {
    signUp: '',
    isLoading: false,
    registeredUserResponse: '',
    error: '',
}

export const addNewUserToDB = createAsyncThunk(
    'user/signUp',

    async ({ data }, { rejectWithValue }) => {
        return await axios
            .post(`${process.env.REACT_APP_BASEURL}/addNewUsers`, data)
            .then((res) => {
                toast.success('User registered successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                })

                return res.data
            })
            .catch((error) => {
                if (error) {
                    toast.error(
                        'An error has occurred, please check the data insert',
                        {
                            position: toast.POSITION.TOP_RIGHT,
                        }
                    )
                    rejectWithValue(error)
                }
            })
    }
)

const addNewUserSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addNewUserToDB.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addNewUserToDB.fulfilled, (state, action) => {
                state.isLoading = false
                state.signUp = action.payload
                state.registeredUserResponse = 'user registered successfully'
            })
            .addCase(addNewUserToDB.rejected, (state, action) => {
                state.signUp = action.payload
                state.error = 'an error is occurred'
            })
    },
})

export const registrationSuccess = (state) => state.users.signUp
export const registrationResponse = (state) =>
    state.users.registeredUserResponse
export const registrationError = (state) => state.users.error
export default addNewUserSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    response: '',
    error: '',
}

export const postFormDataFromDataBase = createAsyncThunk(
    'data/postData',
    async (data, { rejectWithValue }) => {
        return await axios
            .post(`${process.env.REACT_APP_BASEURL}/newEvent`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log(res.status)
                return res.data
            })
            .catch((error) => {
                return rejectWithValue(error)
            })
    }
)

const formDataSlice = createSlice({
    name: 'dbData',
    initialState,
    reducers: {
        clearResponse: (state) => {
            state.respMessage = null
            state.isDuplicated = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postFormDataFromDataBase.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                postFormDataFromDataBase.fulfilled,
                (state, { payload }) => {
                    state.isLoading = false
                    state.response = payload
                }
            )
            .addCase(postFormDataFromDataBase.rejected, (state, action) => {
                state.isLoading = false
                state.response = action.payload
                state.error = 'An error is occurred'
            })
    },
})

export const isDataLoading = (state) => state.formDataEvent.isLoading
export const errorOfFormData = (state) => state.formDataEvent.error
export default formDataSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    customersInfo: [],
    isLoading: false,
    error: '',
}

export const getCustomersInfoFromDB = createAsyncThunk(
    'customer/customersInfo',

    async () => {
        return await axios
            .get(`${process.env.REACT_APP_BASEURL}/customers`)
            .then((response) => {
                // console.log(response)
                return response.data
            })
    }
)

const getCustomersSlice = createSlice({
    name: 'customers',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCustomersInfoFromDB.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCustomersInfoFromDB.fulfilled, (state, action) => {
                state.isLoading = false
                state.customersInfo = action.payload
            })
            .addCase(getCustomersInfoFromDB.rejected, (state, action) => {
                state.customersInfo = action.payload
                state.error = 'an error is occurred'
            })
    },
})

export const getCustomersSuccess = (state) => state.customers.customersInfo
export const getCustomersIsLoading = (state) => state.customers.isLoading
export const getCustomersError = (state) => state.customers.error
export default getCustomersSlice.reducer

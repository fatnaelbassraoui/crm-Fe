import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCustomersInfoFromDB } from "./getCustomersInfoSlice";
import axios from "axios";

const initialState = {
    deleteCustomerResponse: null,
    isLoading: false,
    error: null,
};

export const deleteCustomer = createAsyncThunk(
    "customer/deleteCustomer",
    async (id, { dispatch, rejectWithValue }) => {
        return await axios
            .delete(`${process.env.REACT_APP_BASEURL}/customers/${id}`)
            .then((res) => {
                dispatch(getCustomersInfoFromDB)
                return res.data
            })
            .catch((error) => {
                return rejectWithValue(error.response.data)
            })
    }
)


const deleteCustomerSlice = createSlice({
    name: 'deleteCustomerFromDb',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(deleteCustomer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.isLoading = false
                state.deleteCustomerResponse = action.payload
            })
            .addCase(deleteCustomer.rejected, (state) => {
                state.error = 'an error is occurred'
            })
    }

})

export const isDeleteCustomerLoading = (state) => state.deleteCustomer.isLoading
export const isDeleteCustomerResponse = (state) => state.deleteCustomer.deleteCustomerResponse
export const isDeleteCustomerError = (state) => state.deleteCustomer.error
export default deleteCustomerSlice.reducer
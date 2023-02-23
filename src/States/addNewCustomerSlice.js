import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getCustomersInfoFromDB } from "./getCustomersInfoSlice";

const initialState = {
    newCustomer: "",
    registrationNewCustomerResponse: "",
    isLoading: false,
    error: ""
}

export const addNewCustomerToDB = createAsyncThunk(
    "customer/addNewCustomer",
    async ({ data }, { rejectWithValue, dispatch }) => {
        return await axios
            .post(`${process.env.REACT_APP_BASEURL}/newCustomers`, data)
            .then((res) => {
                toast.success("Customer registered successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                })
                return res.data
            }).then(() => {
                dispatch(getCustomersInfoFromDB())
            })
            .catch((error) => {
                if (error) {
                    toast.error("An error has occurred, please check the data insert", {
                        position: toast.POSITION.TOP_RIGHT,
                    })
                    rejectWithValue(error)
                }
            })
    }
)

const addNewCustomerSlice = createSlice({
    name: 'customers',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addNewCustomerToDB.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addNewCustomerToDB.fulfilled, (state, action) => {
                state.isLoading = false
                state.newCustomer = action.payload
                state.registrationNewCustomerResponse = "customer registered successfully"
            })
            .addCase(addNewCustomerToDB.rejected, (state, action) => {
                state.newCustomer = action.payload
                state.error = "an error is occurred"
            })
    }

})

export const registrationSuccess = (state) => state.customers.newCustomer
export const registrationNewCustomerResponse = (state) => state.customers.registrationNewCustomerResponse
export const registrationNewCustomerError = (state) => state.customers.error
export default addNewCustomerSlice.reducer
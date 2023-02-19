import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCustomersInfoFromDB } from './getCustomersInfoSlice'


const initialState = {
    editCustomerResponse: '',
    isLoading: false,
    error: null,
}

export const editCustomer = createAsyncThunk(
    'customer/editCustomer',

    async ({ data, id }, { dispatch, rejectWithValue }) => {
        try {
            const editResponse = await fetch(
                `${process.env.REACT_APP_BASEURL}/customers/${id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            ).then((res) => dispatch(getCustomersInfoFromDB()))
            return editResponse.json()
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const editCustomerSlice = createSlice({
    name: 'editCustomerInfo',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(editCustomer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editCustomer.fulfilled, (state, action) => {
                state.isLoading = false
                state.editCustomerResponse = action.payload
            })
            .addCase(editCustomer.rejected, (state) => {
                state.error = 'an error is occurred'
            })
    },
})

export const selectEditCustomerResponse = (state) => state.editCustomerInfo.editCustomerResponse
export const selectEditCustomerLoading = (state) => state.editCustomerInfo.isLoading
export const selectEditCustomerError = (state) => state.editCustomerInfo.error
export default editCustomerSlice.reducer
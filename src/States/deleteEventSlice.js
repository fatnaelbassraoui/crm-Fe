import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllEventsFromDataBase } from './eventSlice'
import axios from 'axios'

const initialState = {
    deleteEventResponse: null,
    isLoading: false,
    error: null,
}

export const deleteEvent = createAsyncThunk(
    'event/deleteEvent',
    async (id, { dispatch, rejectWithValue }) => {
        return await axios
            .delete(`${process.env.REACT_APP_BASEURL}/event/${id}`)
            .then((res) => {
                dispatch(getAllEventsFromDataBase())
                return res.data
            })
            .catch((error) => {
                return rejectWithValue(error.response.data)
            })
    }
)

const deleteEventSlice = createSlice({
    name: 'deleteEventFromDb',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(deleteEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteEvent.fulfilled, (state) => {
                state.isLoading = false
                state.deleteEventResponse = 'event deleted successfully'
            })
            .addCase(deleteEvent.rejected, (state) => {
                state.error = 'an error is occurred'
            })
    },
})

export const isDeleteEventLoading = (state) => state.deleteEvent.isLoading
export const isDeleteEventResponse = (state) =>
    state.deleteEvent.deleteEventResponse
export const isDeleteEventError = (state) => state.deleteEvent.error
export default deleteEventSlice.reducer

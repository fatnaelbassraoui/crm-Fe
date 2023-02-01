import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    events: [],
    isLoading: false,
    response: '',
    error: '',
}

export const getAllEventsFromDataBase = createAsyncThunk(
    'event/getAllEvents',
    async () => {
        const data = await fetch(`${process.env.REACT_APP_BASEURL}/event`)
        return await data.json()
    }
)

const eventSlice = createSlice({
    name: 'dbEvents',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllEventsFromDataBase.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllEventsFromDataBase.fulfilled, (state, action) => {
                state.isLoading = false
                state.events = action.payload
                state.response = 'Data recovered successfully'
            })
            .addCase(getAllEventsFromDataBase.rejected, (state) => {
                state.isLoading = false
                state.error = 'An error is occurred'
            })
    },
})

export const isEventLoading = (state) => state.customerEvents.isLoading
export const arrayOfEvents = (state) => state.customerEvents.events
export const errorOfEvents = (state) => state.customerEvents.error
export default eventSlice.reducer

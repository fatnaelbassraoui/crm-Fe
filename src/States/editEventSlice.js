import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllEventsFromDataBase } from './eventSlice'

const initialState = {
    editEventResponse: null,
    isLoading: false,
    error: null,
}

export const editEvent = createAsyncThunk(
    'event/editEvent',

    async ({ data, id }, { dispatch, rejectWithValue }) => {
        try {
            const editResponse = await fetch(
                `${process.env.REACT_APP_BASEURL}/event/${id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            ).then((res) => dispatch(getAllEventsFromDataBase()))
            return editResponse.json()
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const editEventSlice = createSlice({
    name: 'editEventFromDb',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(editEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editEvent.fulfilled, (state) => {
                state.isLoading = false
                state.editEventResponse = ' event edited successfully'
            })
            .addCase(editEvent.rejected, (state) => {
                state.error = 'an error is occurred'
            })
    },
})

export const isEditEventLoading = (state) => state.editEvent.isLoading
export const isEditEventResponse = (state) => state.editEvent.editEventResponse
export const isEditEventError = (state) => state.editEvent.error
export default editEventSlice.reducer

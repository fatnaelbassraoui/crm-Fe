import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import eventReducer from './States/eventSlice'
import formDataReducer from './States/calenderFormSlice'
import deleteEventReducer from './States/deleteEventSlice'
import editEventSliceReducer from './States/editEventSlice'
import addNewUserReducer from './States/AddNewUserSlice'


const reducer = combineReducers({
    customerEvents: eventReducer,
    formDataEvent: formDataReducer,
    deleteEvent: deleteEventReducer,
    editEvent: editEventSliceReducer,
    users: addNewUserReducer

})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

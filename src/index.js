import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import eventReducer from './States/eventSlice'
import formDataReducer from './States/calenderFormSlice'
import deleteEventReducer from './States/deleteEventSlice'

const reducer = combineReducers({
    customerEvents: eventReducer,
    formDataEvent: formDataReducer,
    deleteEvent: deleteEventReducer,
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

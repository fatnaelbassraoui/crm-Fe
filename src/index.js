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
import addNewUserReducer from './States/addNewUserSlice'
import getCustomersReducer from './States/getCustomersInfoSlice'
import deleteCustomerReducer from './States/deleteCustomerSlice'
import editCustomerReducer from './States/editCustomerInfoSlice'
import addCustomerReducer from './States/addNewCustomerSlice'


const reducer = combineReducers({
    customerEvents: eventReducer,
    formDataEvent: formDataReducer,
    deleteEvent: deleteEventReducer,
    editEvent: editEventSliceReducer,
    users: addNewUserReducer,
    customers: getCustomersReducer,
    deleteCustomer: deleteCustomerReducer,
    editCustomer: editCustomerReducer,
    addCustomer: addCustomerReducer
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

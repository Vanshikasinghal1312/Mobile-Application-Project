import React from "react"
import  ReactDOM from "react-dom/client"
import { createSlice } from "@reduxjs/toolkit"

import { Provider } from "react-redux"
import store from './store'

import App from '../App'




// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <Provider store={store}>
// <App/>
//     </Provider>
// )

const SIGNUP='SIGNUP'


export function signup (){
    return{
        type: SIGNUP,
    }
}

const initialState={
    isSignUp:false,
    fullname: null,
    mobilenumber: null,
    password:null

}

export const reducer = createSlice({
    name: 'signup',
    initialState,
    reducers:{
         signup: signup
    }
})
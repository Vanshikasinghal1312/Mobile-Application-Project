import {configureStore, getDefaultMiddleware} from'@reduxjs/toolkit';
import authSlice from './authSlice';
//import reduxLogger from 'redux-logger'
import logger from 'redux-logger'


//const logger=reduxLogger.createLogger()

const store=configureStore({
   reducer:{
    user: authSlice
   }
   ,
   //middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})





export default store
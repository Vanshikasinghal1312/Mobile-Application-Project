import{createSlice, createAsyncThunk, createStore} from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import axios from 'axios'


const initialState={
    loading:false,
    fullname:"",
    password:"",
    mobilenumber:"",
    error:null

}

const authSlice=createSlice({
    name:'signup',
    initialState,
    reducers:{
            setsignup: (state, action) => {
    
                
                state.fullname= action.payload.fullname;
                state.mobilenumber = action.payload.mobilenumber;
                state.password = action.payload.password;    
            },
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(signup.pending, state=>{
    //         state.loading=true
    //      }),
    //      builder.addCase(signup.fulfilled, state=>{
    //         state.loading= false;
    //         if (error){
    //             state.error=error
    //         }
    //         else{
    //             state.msg=msg
    //         }

    //     }),
    //     builder.addCase(signup.rejected, state=>{
    //         state.loading=false,
    //         state.error= error
    //     })
    // }
})

export const {setsignup}= authSlice.actions;
//export const selectEmail = (state) => state.userAuth.email;
// export const selectUserName = (state) => state.userAuth.userName;
// export const selectpassword = (state) => state.userAuth.password;

export default authSlice.reducer


// const store= createStore(authSlice,applyMiddleware(thunk))
// const unsubscribe=store.subscribe(()=>{console.log(store.getState())})
// store.dispatch(signup())
// unsubscribe();
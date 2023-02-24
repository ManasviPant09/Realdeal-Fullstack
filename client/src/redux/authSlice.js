import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: null,
    password: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.auth = action.payload;
        },
    },
})
export const {login} = authSlice.actions;
export const authUser = (state) => state.auth.auth;
export default authSlice.reducer;
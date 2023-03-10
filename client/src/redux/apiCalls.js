import { publicRequest } from "../requestMethods";
import { registerStart, registerFailure, registerSuccess } from "./registerSlice";
import { loginStart,loginFailure, loginSuccess } from "./userSlice";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure());
    }

}
export const register = async (dispatch,newUser) =>{
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",newUser);
        dispatch(registerSuccess(res.data));
    }
    catch(err){
        dispatch(registerFailure());
    }
}
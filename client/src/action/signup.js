import { SIGN_UP, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './types';



export const signUp=(data)=>{
    return{
        type:SIGN_UP,
        payload:data
    }
}

export const signUpSuccess=(data)=>{
    return{
        type:SIGN_IN_SUCCESS,
        payload:data
    }
}

export const signUpFailure=(error)=>{
    return{
        type: SIGN_IN_FAILED,
        error
    }
}
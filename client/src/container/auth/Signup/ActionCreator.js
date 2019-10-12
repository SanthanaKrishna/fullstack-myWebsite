export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";



export function signup(values) {
    console.log('signup')
    return {
        type: SIGN_UP,
        payload: values
    }
}

export function signupSuccess(data) {
    console.log('signupSuccess')
    return {
        type: SIGN_UP_SUCCESS,
        payload: data
    }

}

export function signupFailure(error) {
    console.log('signupFailure')
    return {
        type: SIGN_UP_FAILURE,
        error
    }
}
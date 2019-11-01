export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";



export function signup(values) {
    return {
        type: SIGN_UP,
        payload: values
    }
}

export function signupSuccess(data) {
    return {
        type: SIGN_UP_SUCCESS,
        payload: data
    }

}

export function signupFailure(error) {
    return {
        type: SIGN_UP_FAILURE,
        error
    }
}
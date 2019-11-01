export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";



export function login(values) {
    return {
        type: LOGIN,
        payload: values
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }

}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
}
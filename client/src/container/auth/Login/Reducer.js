import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './ActionCreator';


const initialState = {
    isLoading: false,
    loginState: []
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginState: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginState: action.error
            }
        default:
            return state;
    }
}
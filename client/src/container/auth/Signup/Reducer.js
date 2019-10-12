import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './ActionCreator';


const initialState = {
    isLoading: false,
    singupState: []
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                singupState: action.payload
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                singupState: action.error
            }
        default:
            return state;
    }
}
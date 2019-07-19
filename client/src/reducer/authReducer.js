import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from '../action/types';

const initialState = {
    userDetails: {},
    isSignedIn: null,
    userId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userDetails: action.payload
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                isSignedIn: false,
                userId: null
            };
        default:
            return state;
    }

}

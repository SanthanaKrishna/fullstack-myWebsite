import { HOMEPAGE_CONTENT, HOMEPAGE_CONTENT_SUCCESS } from './ActionCreator';

const initialState = {
    isLoading: false,
    homePageDate: {}
}

export const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_CONTENT:
            return {
                ...state,
                isLoading: true,
            }
        case HOMEPAGE_CONTENT_SUCCESS:
            return {
                ...state,
                homePageDate: action.payload,
                isLoading: false
            }
        case HOMEPAGE_CONTENT_SUCCESS:
            return {
                ...state,
                homePageDate: action.error,
                isLoading: false
            }
        default:
            return state
    }
}
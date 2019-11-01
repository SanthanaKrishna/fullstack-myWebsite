import { SHOPPNG_DATA, SHOPPNG_DATA_SUCCESS, SHOPPNG_DATA_FAILURE } from './ActionCreator';

const initialState = {
    isLoading: false,
    shoppingPageData: {}
}

export const shoppingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOPPNG_DATA:
            return {
                ...state,
                isLoading: true
            }
        case SHOPPNG_DATA_SUCCESS:
            return {
                ...state,
                shoppingPageData: action.payload,
                isLoading: false
            }
        case SHOPPNG_DATA_FAILURE:
            return {
                ...state,
                shoppingPageData: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}